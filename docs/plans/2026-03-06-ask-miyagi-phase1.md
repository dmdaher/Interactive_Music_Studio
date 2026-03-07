# Ask Miyagi Phase 1: Knowledge Layer + Chat Widget Shell

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Ship a floating "Ask Miyagi" chat widget with search-only intelligence. Users type natural language queries, get matching tutorials. Zero AI API cost.

**Architecture:** Build a tutorial knowledge index (server-side, extracted from all 59 tutorials at module load), a multi-signal search engine, a search API route, a Zustand chat store, and a floating chat widget with FAB + panel. On the home page it floats; inside tutorials it replaces the step content area.

**Tech Stack:** Next.js 16 App Router, React 19, Zustand 5, Framer Motion 12, Tailwind CSS 4, TypeScript 5

---

### Task 0: Types — `src/types/assistant.ts`

**Files:**
- Create: `src/types/assistant.ts`

**Step 1: Create the assistant types file**

```typescript
// src/types/assistant.ts
import { TutorialCategory } from './tutorial';

export interface TutorialSummary {
  tutorialId: string;
  deviceId: string;
  title: string;
  description: string;
  category: TutorialCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  tags: string[];
  stepCount: number;
  searchableText: string;
  topics: string[];
  controlsReferenced: string[];
  screensReferenced: string[];
}

export interface SearchResult {
  tutorial: TutorialSummary;
  score: number;
  matchReasons: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  tutorials?: SearchResult[];
}
```

**Step 2: Commit**

```bash
git add src/types/assistant.ts
git commit -m "feat(assistant): add assistant types — TutorialSummary, SearchResult, ChatMessage"
```

---

### Task 1: Tutorial Index — `src/lib/assistant/tutorialIndex.ts`

**Files:**
- Create: `src/__tests__/assistant/tutorialIndex.test.ts`
- Create: `src/lib/assistant/tutorialIndex.ts`
- Reference: `src/data/tutorials/fantom-08/index.ts` (59 tutorials)
- Reference: `src/types/assistant.ts` (TutorialSummary)
- Reference: `src/types/tutorial.ts` (Tutorial, TutorialStep)

**Step 1: Write the failing test**

```typescript
// src/__tests__/assistant/tutorialIndex.test.ts
import { describe, it, expect } from 'vitest';
import { buildTutorialIndex, getTutorialIndex } from '@/lib/assistant/tutorialIndex';
import { fantom08Tutorials } from '@/data/tutorials/fantom-08';

describe('tutorialIndex', () => {
  const index = buildTutorialIndex(fantom08Tutorials);

  it('indexes all tutorials', () => {
    expect(index.length).toBe(fantom08Tutorials.length);
  });

  it('each summary has required fields', () => {
    for (const summary of index) {
      expect(summary.tutorialId).toBeTruthy();
      expect(summary.deviceId).toBeTruthy();
      expect(summary.title).toBeTruthy();
      expect(summary.searchableText.length).toBeGreaterThan(0);
      expect(summary.stepCount).toBeGreaterThan(0);
      expect(summary.topics.length).toBeGreaterThan(0);
    }
  });

  it('searchableText contains step instructions', () => {
    const splitTutorial = index.find(s => s.tutorialId === 'split-keyboard-zones');
    expect(splitTutorial).toBeDefined();
    expect(splitTutorial!.searchableText).toContain('split');
    expect(splitTutorial!.searchableText).toContain('zone');
  });

  it('controlsReferenced extracts control IDs from steps', () => {
    const splitTutorial = index.find(s => s.tutorialId === 'split-keyboard-zones');
    expect(splitTutorial).toBeDefined();
    expect(splitTutorial!.controlsReferenced).toContain('split');
  });

  it('getTutorialIndex returns cached singleton', () => {
    const a = getTutorialIndex('fantom-08');
    const b = getTutorialIndex('fantom-08');
    expect(a).toBe(b);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- --reporter=verbose src/__tests__/assistant/tutorialIndex.test.ts`
Expected: FAIL — module not found

**Step 3: Write the implementation**

```typescript
// src/lib/assistant/tutorialIndex.ts
import { Tutorial } from '@/types/tutorial';
import { TutorialSummary } from '@/types/assistant';
import { fantom08Tutorials } from '@/data/tutorials/fantom-08';

export function buildTutorialIndex(tutorials: Tutorial[]): TutorialSummary[] {
  return tutorials.map((t) => {
    const allText: string[] = [t.title, t.description, ...t.tags];
    const topicsSet = new Set<string>();
    const controlsSet = new Set<string>();
    const screensSet = new Set<string>();

    for (const step of t.steps) {
      allText.push(step.title, step.instruction);
      if (step.details) allText.push(step.details);
      if (step.tipText) allText.push(step.tipText);

      topicsSet.add(step.title.toLowerCase());

      for (const ctrl of step.highlightControls) {
        controlsSet.add(ctrl);
      }

      if (step.displayState?.screenType) {
        screensSet.add(step.displayState.screenType);
      }
    }

    return {
      tutorialId: t.id,
      deviceId: t.deviceId,
      title: t.title,
      description: t.description,
      category: t.category,
      difficulty: t.difficulty,
      estimatedTime: t.estimatedTime,
      tags: t.tags,
      stepCount: t.steps.length,
      searchableText: allText.join(' ').toLowerCase(),
      topics: Array.from(topicsSet),
      controlsReferenced: Array.from(controlsSet),
      screensReferenced: Array.from(screensSet),
    };
  });
}

// Cached singleton per device
const indexCache = new Map<string, TutorialSummary[]>();

export function getTutorialIndex(deviceId: string): TutorialSummary[] {
  if (indexCache.has(deviceId)) return indexCache.get(deviceId)!;

  let tutorials: Tutorial[];
  switch (deviceId) {
    case 'fantom-08':
      tutorials = fantom08Tutorials;
      break;
    default:
      tutorials = [];
  }

  const index = buildTutorialIndex(tutorials);
  indexCache.set(deviceId, index);
  return index;
}
```

**Step 4: Run test to verify it passes**

Run: `npm run test -- --reporter=verbose src/__tests__/assistant/tutorialIndex.test.ts`
Expected: PASS (all 5 tests)

**Step 5: Run full test suite for regressions**

Run: `npm run test`
Expected: 716+ tests passed, 0 failed

**Step 6: Commit**

```bash
git add src/lib/assistant/tutorialIndex.ts src/__tests__/assistant/tutorialIndex.test.ts
git commit -m "feat(assistant): add tutorial knowledge index with tests"
```

---

### Task 2: Search Engine — `src/lib/assistant/search.ts`

**Files:**
- Create: `src/__tests__/assistant/search.test.ts`
- Create: `src/lib/assistant/search.ts`
- Reference: `src/lib/assistant/tutorialIndex.ts`
- Reference: `src/types/assistant.ts`

**Step 1: Write the failing test**

```typescript
// src/__tests__/assistant/search.test.ts
import { describe, it, expect } from 'vitest';
import { searchTutorials } from '@/lib/assistant/search';

describe('searchTutorials', () => {
  it('finds split-keyboard-zones for "split keyboard"', () => {
    const results = searchTutorials('split keyboard', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].tutorial.tutorialId).toBe('split-keyboard-zones');
  });

  it('finds midi-sync-clock for "MIDI clock"', () => {
    const results = searchTutorials('MIDI clock', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    const ids = results.map(r => r.tutorial.tutorialId);
    expect(ids).toContain('midi-sync-clock');
  });

  it('finds effects tutorials for "reverb"', () => {
    const results = searchTutorials('reverb', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    const ids = results.map(r => r.tutorial.tutorialId);
    expect(ids.some(id => id.includes('effect') || id.includes('master'))).toBe(true);
  });

  it('finds sampling-basics for "how do I sample audio"', () => {
    const results = searchTutorials('how do I sample audio', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    const ids = results.map(r => r.tutorial.tutorialId);
    expect(ids).toContain('sampling-basics');
  });

  it('returns empty array for nonsense query', () => {
    const results = searchTutorials('xyzzy foobar baz', 'fantom-08');
    expect(results.length).toBe(0);
  });

  it('returns at most 5 results', () => {
    const results = searchTutorials('zone', 'fantom-08');
    expect(results.length).toBeLessThanOrEqual(5);
  });

  it('includes matchReasons', () => {
    const results = searchTutorials('split keyboard', 'fantom-08');
    expect(results[0].matchReasons.length).toBeGreaterThan(0);
  });

  it('scores are between 0 and 1', () => {
    const results = searchTutorials('effects', 'fantom-08');
    for (const r of results) {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(1);
    }
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- --reporter=verbose src/__tests__/assistant/search.test.ts`
Expected: FAIL — module not found

**Step 3: Write the implementation**

The search engine scores each tutorial against a query using multiple weighted signals:
1. Title/description phrase match (weight: 0.35)
2. Tag exact match (weight: 0.25)
3. Category keyword match (weight: 0.10)
4. Control ID match (weight: 0.10)
5. TF-IDF keyword scoring against searchableText (weight: 0.20)

Tokenize query, score each tutorial, filter by minimum threshold (0.05), sort descending, return top 5.

**Step 4: Run test to verify it passes**

Run: `npm run test -- --reporter=verbose src/__tests__/assistant/search.test.ts`
Expected: PASS (all 8 tests)

**Step 5: Commit**

```bash
git add src/lib/assistant/search.ts src/__tests__/assistant/search.test.ts
git commit -m "feat(assistant): add multi-signal tutorial search engine with tests"
```

---

### Task 3: Context Builder — `src/lib/assistant/contextBuilder.ts`

**Files:**
- Create: `src/lib/assistant/contextBuilder.ts`
- Reference: `src/lib/assistant/tutorialIndex.ts`

This file compresses all tutorials into a ~15K token summary for future Phase 2 system prompts. No test needed for Phase 1 — it's preparation.

**Step 1: Write the implementation**

```typescript
// src/lib/assistant/contextBuilder.ts
import { TutorialSummary } from '@/types/assistant';
import { getTutorialIndex } from './tutorialIndex';

export function buildCompressedContext(deviceId: string): string {
  const index = getTutorialIndex(deviceId);
  const lines: string[] = [
    `Device: ${deviceId}`,
    `${index.length} tutorials available.\n`,
    'TUTORIAL INDEX:',
  ];

  for (const t of index) {
    const controls = t.controlsReferenced.slice(0, 8).join(', ');
    const screens = t.screensReferenced.join(', ');
    lines.push(
      `- ${t.tutorialId} [${t.category}, ${t.difficulty}, ${t.estimatedTime}] "${t.title}" — ${t.description}. Controls: ${controls}. Screens: ${screens}.`
    );
  }

  return lines.join('\n');
}
```

**Step 2: Commit**

```bash
git add src/lib/assistant/contextBuilder.ts
git commit -m "feat(assistant): add compressed context builder for future AI prompts"
```

---

### Task 4: Search API Route — `src/app/api/assistant/search/route.ts`

**Files:**
- Create: `src/app/api/assistant/search/route.ts`
- Reference: `src/lib/assistant/search.ts`
- Reference: `src/app/api/report/route.ts` (rate limiting pattern)

**Step 1: Write the API route**

```typescript
// src/app/api/assistant/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { searchTutorials } from '@/lib/assistant/search';

// Rate limit: 30 requests per minute per IP
const recentSearches = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = recentSearches.get(ip) ?? [];
  const recent = timestamps.filter(t => now - t < 60_000);
  if (recent.length >= 30) return true;
  recent.push(now);
  recentSearches.set(ip, recent);
  // Clean old entries
  if (recentSearches.size > 500) {
    for (const [key, times] of recentSearches) {
      const valid = times.filter(t => now - t < 60_000);
      if (valid.length === 0) recentSearches.delete(key);
      else recentSearches.set(key, valid);
    }
  }
  return false;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim();
  const deviceId = searchParams.get('device') || 'fantom-08';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  if (query.length > 200) {
    return NextResponse.json({ error: 'Query too long' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const results = searchTutorials(query, deviceId);
  return NextResponse.json({ results });
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Compiled successfully, zero errors

**Step 3: Commit**

```bash
git add src/app/api/assistant/search/route.ts
git commit -m "feat(assistant): add search API route with rate limiting"
```

---

### Task 5: Chat Store — `src/store/chatStore.ts`

**Files:**
- Create: `src/store/chatStore.ts`
- Reference: `src/types/assistant.ts`
- Reference: `src/store/tutorialStore.ts` (Zustand pattern)

**Step 1: Write the store**

```typescript
// src/store/chatStore.ts
'use client';

import { create } from 'zustand';
import { ChatMessage, SearchResult } from '@/types/assistant';

interface ChatContext {
  deviceId?: string;
  tutorialId?: string;
  currentStepIndex?: number;
  currentStepTitle?: string;
}

interface ChatStore {
  isOpen: boolean;
  messages: ChatMessage[];
  context: ChatContext;

  // Actions
  toggle: () => void;
  open: () => void;
  close: () => void;
  addUserMessage: (text: string) => string; // returns message id
  addAssistantMessage: (content: string, tutorials?: SearchResult[]) => void;
  clearMessages: () => void;
  setContext: (ctx: Partial<ChatContext>) => void;
}

let messageIdCounter = 0;
function nextId(): string {
  return `msg-${Date.now()}-${++messageIdCounter}`;
}

export const useChatStore = create<ChatStore>((set) => ({
  isOpen: false,
  messages: [],
  context: {},

  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),

  addUserMessage: (text: string) => {
    const id = nextId();
    set((s) => ({
      messages: [...s.messages, {
        id,
        role: 'user',
        content: text,
        timestamp: Date.now(),
      }],
    }));
    return id;
  },

  addAssistantMessage: (content: string, tutorials?: SearchResult[]) => {
    set((s) => ({
      messages: [...s.messages, {
        id: nextId(),
        role: 'assistant',
        content,
        timestamp: Date.now(),
        tutorials,
      }],
    }));
  },

  clearMessages: () => set({ messages: [] }),

  setContext: (ctx: Partial<ChatContext>) => {
    set((s) => ({ context: { ...s.context, ...ctx } }));
  },
}));
```

**Step 2: Commit**

```bash
git add src/store/chatStore.ts
git commit -m "feat(assistant): add chat Zustand store"
```

---

### Task 6: Chat UI Components

**Files:**
- Create: `src/components/assistant/TutorialCardCompact.tsx`
- Create: `src/components/assistant/ChatMessage.tsx`
- Create: `src/components/assistant/ChatInput.tsx`
- Create: `src/components/assistant/ChatWidget.tsx`
- Reference: `src/components/ui/TutorialCard.tsx` (card pattern)
- Reference: `src/components/ui/CategoryFilter.tsx` (pill style)
- Reference: `src/store/chatStore.ts`

This is the largest task. Build 4 components:

**Step 1: TutorialCardCompact** — Compact tutorial card for chat embeds.
- `p-3` padding, `bg-[var(--surface)]` background
- Shows: title, category badge, difficulty badge, step count, "Start" CTA
- No description text, no hover scale animation
- Reuse `DIFFICULTY_COLORS` and `CATEGORY_LABELS` from TutorialCard

**Step 2: ChatMessage** — Message bubble component.
- User messages: right-aligned, `bg-[var(--accent)]/20` background
- Assistant messages: left-aligned, `bg-white/5` background, `text-white/80`
- If message has `tutorials` array: render `TutorialCardCompact` for each
- Framer Motion fade-in animation

**Step 3: ChatInput** — Input field with search icon.
- `bg-white/5 border border-white/10 focus:border-[#00aaff]/40`
- Magnifying glass icon (SVG)
- Enter key submits (calls `onSubmit` prop)
- `stopPropagation` on all key events
- Placeholder: "Search tutorials or ask a question..."

**Step 4: ChatWidget** — Main floating widget.
- **FAB**: Fixed bottom-right (`bottom-6 right-6`), z-42, `bg-gradient-to-r from-[#00aaff] to-[#0088dd]`, 56px touch target, `aria-expanded`
- **Panel**: z-44, `400px wide`, `max-h-[600px]`, glass-panel aesthetic
  - Header: "Ask Miyagi" + close button
  - Empty state: 3-4 suggested question pills
  - Message list with scroll
  - ChatInput at bottom
- **Cmd+/** keyboard shortcut to toggle
- **Escape** closes panel
- **Focus management**: focus input on open, return focus to FAB on close
- **Accessibility**: `role="dialog"`, `aria-label`, focus trap
- **Mobile (<640px)**: Bottom sheet variant
- On submit: call search API, add user message + assistant response with tutorials

**Step 5: Run build**

Run: `npm run build`
Expected: Zero errors

**Step 6: Commit**

```bash
git add src/components/assistant/
git commit -m "feat(assistant): add chat widget UI — FAB, panel, messages, input, compact cards"
```

---

### Task 7: Integration — Layout + TutorialRunner

**Files:**
- Modify: `src/app/layout.tsx` — Add `<ChatWidget />` globally
- Modify: `src/components/tutorial/TutorialRunner.tsx` — Sync context + toggle chat in controls bar

**Step 1: Add ChatWidget to layout**

In `src/app/layout.tsx`, add the ChatWidget as a client component wrapper inside the body. Since layout.tsx is a server component, create a thin client wrapper `src/components/assistant/ChatWidgetProvider.tsx`:

```typescript
// src/components/assistant/ChatWidgetProvider.tsx
'use client';
import ChatWidget from './ChatWidget';
export default function ChatWidgetProvider() {
  return <ChatWidget />;
}
```

Then in layout.tsx, import and render `<ChatWidgetProvider />` before `<Analytics />`.

**Step 2: Sync tutorial context in TutorialRunner**

Add a `useEffect` in TutorialRunner that updates chatStore context when tutorial/step changes:

```typescript
import { useChatStore } from '@/store/chatStore';

// Inside TutorialRunner component:
useEffect(() => {
  useChatStore.getState().setContext({
    deviceId: tutorial.deviceId,
    tutorialId: tutorial.id,
    currentStepIndex: store.currentStepIndex,
    currentStepTitle: store.currentStep()?.title,
  });
  return () => {
    useChatStore.getState().setContext({
      deviceId: undefined,
      tutorialId: undefined,
      currentStepIndex: undefined,
      currentStepTitle: undefined,
    });
  };
}, [tutorial.id, tutorial.deviceId, store.currentStepIndex]);
```

**Step 3: Verify build + tests**

Run: `npm run build && npm run test`
Expected: Zero errors, 716+ tests pass

**Step 4: Commit**

```bash
git add src/app/layout.tsx src/components/assistant/ChatWidgetProvider.tsx src/components/tutorial/TutorialRunner.tsx
git commit -m "feat(assistant): integrate chat widget into layout and tutorial runner"
```

---

### Task 8: Manual Verification + Final Tests

**Step 1: Start dev server**

Run: `npm run dev`

**Step 2: Manual tests**
- Open home page → FAB visible bottom-right
- Click FAB → panel opens with empty state pills
- Click a suggested question → search results appear as compact tutorial cards
- Type "split keyboard" → `split-keyboard-zones` appears as top result
- Type "MIDI clock" → `midi-sync-clock` appears
- Type "reverb" → effects tutorials appear
- Press Escape → panel closes
- Press Cmd+/ → panel toggles
- Navigate to a tutorial → FAB still visible, context badge shows tutorial name
- Click a compact tutorial card → navigates to that tutorial
- Mobile viewport (<640px) → bottom sheet layout
- Tab key → focus stays trapped in panel

**Step 3: Run full verification**

Run: `npm run test && npm run build`
Expected: All tests pass, build succeeds

**Step 4: Final commit if any fixes needed**

---

## Verification Checklist

- [ ] `npm run test` — all tests pass (716+ existing + ~13 new)
- [ ] `npm run build` — zero TypeScript errors
- [ ] Search "split keyboard" → returns `split-keyboard-zones` as top result
- [ ] Search "MIDI clock" → returns `midi-sync-clock`
- [ ] Vague query "reverb" → returns effects-routing + master-effects-output
- [ ] Widget opens on home page AND during tutorials
- [ ] Suggested question pills appear in empty state
- [ ] Mobile view shows bottom sheet
- [ ] Escape closes panel, Cmd+/ toggles
- [ ] Tutorial context syncs (shows current step info)
- [ ] Compact tutorial cards link to correct tutorials
