# Ask Miyagi: Intelligent AI Assistant — Design & Implementation Plan

## Context

AskMiyagi has 59 hand-crafted tutorials that faithfully replicate the Fantom 08 reference manual. But users don't think in manual terms — they think in musical goals: "How do I layer pads with filter movement while playing a lead?" This requires combining knowledge across zones, tone editing, effects, and arpeggio — something no single tutorial covers.

**Goal:** Add an intelligent AI layer ("Ask Miyagi") that can answer music/synth questions conversationally, link to existing tutorials when relevant, and generate custom step-by-step tutorials for novel multi-feature workflows — all using the existing rendering pipeline.

**Key insight:** The existing tutorial data is already a machine-readable knowledge base. The panel/display rendering pipeline already accepts any valid `TutorialStep[]`. The AI layer is a new feature ON TOP of the architecture, not a rewrite.

---

## Three-Tier Response System

| Tier | Trigger | Cost | Latency | Coverage |
|------|---------|------|---------|----------|
| 1: Search | Query maps to existing tutorial (score > 0.8) | Zero | <50ms | ~40-60% |
| 2: Chat | Conceptual question, partial matches, follow-ups | ~$0.006/req | ~2s | ~30-50% |
| 3: Generate | Novel multi-feature workflow, no good match | ~$0.02/req | ~10s | ~5-10% |

The system always tries the cheapest tier first.

---

## Single Entry Point: The Chat Widget

One "Ask Miyagi" floating button that gets progressively smarter across phases:

- **Phase 1:** Widget exists, input has a magnifying glass icon. Responses are search results only (Tier 1). No AI calls.
- **Phase 2:** Same widget, input gains a send button. Responses now include conversational AI answers (Tier 2). Users perceive "the same thing got smarter."
- **Phase 3:** Same widget gains a "Start Tutorial" button for generated tutorials (Tier 3).

No separate search bar. One interaction point, progressively enhanced.

---

## UX Design Decisions (from UI/UX review)

### Chat Widget Behavior by Context

| Context | Widget Behavior |
|---------|----------------|
| **Home page** | Floating panel, bottom-right, 400x600px |
| **Tutorial view** | Replaces the scrollable step content area (not floating). Toggle via button in controls bar. "Back to step" returns to step content. Avoids obscuring the synth panel. |
| **Mobile (<640px)** | Full-width bottom sheet (`h-[85vh] rounded-t-2xl`) with drag handle for swipe-to-dismiss |
| **Tablet (640-1024px)** | Floating panel, `max-w-[min(400px,90vw)]`, `max-h-[70vh]` |

### Visual Design Tokens (match existing aesthetic)

- Panel background: `rgba(15, 15, 25, 0.95)` + `backdrop-blur-md`
- Panel border: `border-white/10`
- Panel shadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.1)`
- Panel radius: `rounded-xl`
- Input fields: `bg-white/5 border border-white/10 focus:border-[#00aaff]/40`
- FAB: `bg-gradient-to-r from-[#00aaff] to-[#0088dd]`
- No new colors — use existing CSS variables and palette only

### Empty State

Show 3-4 suggested question pills (using existing `CategoryFilter` pill style):
- "How do I split my keyboard?"
- "What effects are available?"
- "How do I sample audio?"
- Above pills: "Search tutorials or ask a question" in `text-sm text-white/40`

### Keyboard Shortcut

`Cmd+/` to toggle (not Cmd+K — conflicts with browser address bar).

### Accessibility

- Focus moves to input on open, returns to FAB on close
- Focus trap within panel (Tab/Shift+Tab cycle)
- FAB: `aria-expanded={isOpen}`, min 48x48px touch target (56px on mobile)
- Panel: `role="dialog"`, `aria-label="Ask Miyagi assistant"`
- Message list: `role="log"`, `aria-live="polite"`
- Escape closes panel
- Chat input: `stopPropagation` on all key events to prevent tutorial navigation interference
- Assistant messages: `text-white/80` minimum (WCAG AA contrast)

### Tutorial Card Embeds

Create `TutorialCardCompact` for chat messages — `p-3` padding, no description text, no hover scale animation, "Start" CTA button, `bg-[var(--surface)]` background to differentiate from message area.

### Z-Index Scale

- z-40: TutorialRunner
- z-42: Ask Miyagi FAB
- z-44: Ask Miyagi expanded panel
- z-48: TutorialOverlay (legacy)
- z-50: ReportModal

---

## Phase 1: Knowledge Layer + Chat Widget Shell (No AI Calls)

**Ships the chat widget with search-only intelligence. Zero API cost.**

### New Files

| File | Purpose |
|------|---------|
| `src/types/assistant.ts` | `TutorialSummary`, `SearchResult`, `ChatMessage` types |
| `src/lib/assistant/tutorialIndex.ts` | Build-time index extraction from 59 tutorials — flattens searchable text, topics, control IDs, screen types per tutorial |
| `src/lib/assistant/search.ts` | Multi-signal scoring engine: title match, tag match, category match, control ID match, screen type match, TF-IDF keyword scoring |
| `src/lib/assistant/contextBuilder.ts` | Compresses 59 tutorials into ~15K token summary (preparation for Phase 2 system prompts) |
| `src/app/api/assistant/search/route.ts` | `GET /api/assistant/search?q=...&device=...` — returns top 5 `SearchResult[]` |
| `src/store/chatStore.ts` | Zustand: `isOpen`, `messages`, `context` (deviceId, tutorialId, stepIndex). No AI state yet. |
| `src/components/assistant/ChatWidget.tsx` | Floating FAB + expandable panel. Phase 1: search input with magnifying glass, results as compact tutorial cards. |
| `src/components/assistant/ChatInput.tsx` | Input field with search icon. Phase 2 adds send button. |
| `src/components/assistant/ChatMessage.tsx` | Message bubble component (user right-aligned, assistant/system left-aligned) |
| `src/components/assistant/TutorialCardCompact.tsx` | Compact tutorial card for chat embeds (p-3, no hover, "Start" CTA) |
| `src/__tests__/assistant/tutorialIndex.test.ts` | Verify all 59 tutorials indexed, searchable text extracted |
| `src/__tests__/assistant/search.test.ts` | Known queries → expected results |

### Modified Files

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Add `<ChatWidget />` globally (FAB visible on all pages) |
| `src/components/tutorial/TutorialRunner.tsx` | (1) Sync tutorial context to chatStore. (2) Add "Ask Miyagi" toggle in controls bar. (3) When chat is open, replace step content area with chat panel. |

### Data Flow

```
User clicks FAB → widget opens → types "how do I add reverb"
→ debounce 300ms → GET /api/assistant/search?q=how+do+i+add+reverb&device=fantom-08
→ searchTutorials() scores all 59 tutorials in-memory
→ Return top 5 SearchResult[] with match reasons
→ Render as ChatMessage with TutorialCardCompact embeds
→ User clicks card → navigates to tutorial
```

### Search Signals (weighted scoring)

1. Exact phrase match in title/description (highest weight)
2. Tag match — direct match against tutorial `tags[]`
3. Category keyword match ("midi", "effects", "sampling")
4. Control ID match ("split button", "zone 4", "slider")
5. Screen type match ("mixer", "tone select")
6. TF-IDF keyword scoring against flattened step text
7. Difficulty match ("beginner", "advanced")

### Why not embeddings/RAG?

59 tutorials = well-tuned keyword search with domain-specific signals (control IDs, screen types, categories) is highly effective. Embeddings add vector DB complexity for marginal gain at this scale. Revisit at 200+ tutorials across multiple devices.

---

## Phase 2: Conversational AI

**Add AI responses to the existing chat widget. Streaming, context-aware, provider-flexible.**

### New Files

| File | Purpose |
|------|---------|
| `src/lib/assistant/providers/types.ts` | `AIProvider` interface: `sendMessage()`, `streamMessage()` |
| `src/lib/assistant/providers/claude.ts` | Anthropic SDK implementation (Claude Sonnet default) |
| `src/lib/assistant/providers/index.ts` | Provider registry: `getProvider(id?)` — swap providers without touching consumers |
| `src/lib/assistant/tierRouter.ts` | Routes query to Tier 1/2/3 based on search scores + query analysis |
| `src/lib/assistant/systemPrompt.ts` | Builds system prompt: Miyagi persona + compressed tutorial index (~15K tokens) + current step context |
| `src/app/api/assistant/chat/route.ts` | `POST /api/assistant/chat` — tier routing + SSE streaming for Tier 2 |
| `src/__tests__/assistant/tierRouter.test.ts` | Routing logic tests |
| `src/__tests__/assistant/systemPrompt.test.ts` | Prompt generation tests |

### Modified Files

| File | Change |
|------|--------|
| `src/store/chatStore.ts` | Add `isStreaming`, `error`, `sendMessage()` action (calls chat API with streaming) |
| `src/components/assistant/ChatInput.tsx` | Add send button alongside search icon. Enter sends message. |
| `src/components/assistant/ChatWidget.tsx` | Add streaming indicator (animated dots), error display |
| `.env.local` | Add `ANTHROPIC_API_KEY` (server-side only, no `NEXT_PUBLIC_` prefix) |
| `package.json` | Add `@anthropic-ai/sdk` |

### Tier Router Logic

- **Tier 1:** Top search result score > 0.8 → return tutorial links immediately (no AI call)
- **Tier 2:** Partial matches (score 0.3-0.8) or conceptual question → stream AI response with tutorial references
- **Tier 3:** Explicit "create tutorial" request + multi-feature combo → defer to Phase 3

### Context Awareness

When user is inside a tutorial, chatStore holds `tutorialId` + `currentStepIndex`. The system prompt includes:
- The current tutorial's title and description
- The current step's full content (title, instruction, details, tipText)
- Which controls are highlighted and what screen is shown

This enables questions like "what does this button do?" or "why am I doing this step?" to get accurate, contextual answers.

### Token Budget (Tier 2)

- System prompt + Miyagi persona: ~1K tokens
- Compressed tutorial index: ~15K tokens
- Current step context: ~500 tokens
- Conversation history (last 10 messages): ~2K tokens
- Output: ~1K tokens
- **Total: ~20K tokens → ~$0.006/request on Sonnet**

### Provider Abstraction

```typescript
interface AIProvider {
  id: string;
  name: string;
  sendMessage(message: string, context: ChatContext, systemPrompt: string): Promise<string>;
  streamMessage(message: string, context: ChatContext, systemPrompt: string): AsyncGenerator<string>;
}
```

Claude is the default. To add OpenAI later: create `src/lib/assistant/providers/openai.ts` implementing the same interface, register in `index.ts`. No consumer changes needed.

### Why Sonnet, not Opus?

Tier 2 is answering music questions with provided context — Sonnet handles this well at 5x lower cost. Reserve Opus consideration for Tier 3 only if generation quality issues arise.

---

## Phase 3: Dynamic Tutorial Generation

**AI generates custom `TutorialStep[]` for novel multi-feature workflows.**

### New Files

| File | Purpose |
|------|---------|
| `src/lib/assistant/generation/tutorialPrompt.ts` | Generation prompt: TutorialStep schema + valid control IDs + valid screen types + 2-3 example tutorials (dynamically selected by relevance to query) |
| `src/lib/assistant/generation/validator.ts` | Validates generated JSON: schema, control IDs, screen types, MIDI ranges, zone colors, step uniqueness. Auto-fixes minor issues. |
| `src/lib/assistant/generation/exampleSelector.ts` | Selects relevant example tutorials based on which features the user's query mentions |
| `src/app/api/assistant/generate/route.ts` | `POST /api/assistant/generate` — generation + validation pipeline |
| `src/store/generatedTutorialStore.ts` | Stores generated tutorial for rendering (session-only, ephemeral) |
| `src/__tests__/assistant/validator.test.ts` | Validation pipeline tests |
| `src/__tests__/assistant/generation.test.ts` | End-to-end generation tests (mocked AI) |

### Modified Files

| File | Change |
|------|--------|
| `src/app/tutorial/[deviceId]/[tutorialId]/page.tsx` | Check for `tutorialId === 'generated'` → read from generatedTutorialStore instead of static tutorial list |
| `src/components/assistant/ChatWidget.tsx` | Add generation UI: progress indicator ("Miyagi is creating a custom tutorial..."), tutorial preview card (title, step count, time), "Start Tutorial" CTA button |

### Validation Pipeline

Generated tutorials MUST pass before rendering:
1. JSON schema matches `Tutorial` interface
2. All `highlightControls` entries in `allFantom08ControlIds`
3. All `displayState.screenType` in valid `ScreenType` union
4. MIDI ranges 21-108, lowNote <= highNote
5. Hex color format for zones
6. Unique step IDs, 3-20 steps
7. Auto-fix: strip invalid control IDs, clamp MIDI ranges, generate missing IDs

If validation fails completely: "I wasn't able to create a valid tutorial. Here are some existing tutorials that might help instead." (falls back to Tier 1 results)

### Generated Tutorials Are Ephemeral

No persistence — lives in Zustand store for the session only. No database, no moderation concerns, no storage costs. Add persistence (and user accounts) later if the feature proves valuable.

### Token Budget (Tier 3)

- System prompt + schema + constraints: ~5K tokens
- Example tutorials (2-3): ~3K tokens
- Compressed index: ~15K tokens
- User query + history: ~2K tokens
- Output (10-step tutorial JSON): ~5-10K tokens
- **Total: ~30K input + ~8K output → ~$0.02/request on Sonnet**

---

## Phase Dependencies

```
Phase 1 (search index, chat widget shell, chatStore)
    |
Phase 2 (AI providers, tier router, streaming — enhances Phase 1's widget + store)
    |
Phase 3 (generation, validation — uses Phase 2's providers, extends Phase 2's chat UI)
```

Each phase is independently shippable and delivers user value.

---

## Rate Limiting

| Tier | Limit |
|------|-------|
| Search (Tier 1) | 30 req/min/IP |
| Chat (Tier 2) | 10 req/min/IP |
| Generation (Tier 3) | 3 req/min/IP |

---

## Performance Notes

- Search index is computed once at module load (server-side). 59 tutorials x ~10 steps = ~600 step objects. Scoring takes <50ms.
- Streaming uses Server-Sent Events for progressive text rendering. First token in ~500ms.
- `React.memo` on chat message components to avoid re-renders during streaming while tutorial panel animates.
- Tutorial content (~660KB raw) stays server-side only — not shipped to client bundle.

---

## Key Files Reference

| Existing File | Relevance |
|---|---|
| `src/types/tutorial.ts` | Tutorial/TutorialStep interfaces — the schema AI must produce for Tier 3 |
| `src/data/tutorials/fantom-08/index.ts` | 59-tutorial registry consumed by the knowledge index |
| `src/store/tutorialStore.ts` | Zustand store — `loadTutorial()` accepts any valid Tutorial, including generated ones |
| `src/components/tutorial/TutorialRunner.tsx` | Main tutorial UI — step content area replaced by chat in tutorial view |
| `src/hooks/useTutorialEngine.ts` | Keyboard handler already ignores input elements (line 47-51) — chat input safe |
| `src/app/layout.tsx` | Global layout — ChatWidget mounted here |
| `src/data/panelLayouts/fantom-08.ts` | `allFantom08ControlIds` — validation reference for generated tutorials |
| `src/types/display.ts` | `ScreenType` union — validation reference for generated tutorials |
| `src/lib/constants.ts` | `DISPLAY_COLORS`, `ZONE_COLORS` — visual tokens to reuse |
| `src/app/api/report/route.ts` | Existing API route — rate limiting pattern to reuse |

---

## Verification Plan

### Phase 1
- `npm run test` — tutorialIndex and search tests pass
- Manual: search "split keyboard" → returns `split-keyboard-zones` as top result
- Manual: search "MIDI clock" → returns `midi-sync-clock`
- Manual: vague query "reverb" → returns effects-routing + master-effects-output
- Manual: open widget on home page AND during a tutorial — both work
- Manual: suggested question pills appear in empty state
- Manual: mobile view shows bottom sheet, not floating panel
- `npm run build` — zero errors

### Phase 2
- `npm run test` — all new + existing tests pass (716+ existing)
- Manual: ask "how do I split my keyboard?" → Tier 1, compact tutorial cards appear
- Manual: ask "what's the difference between scenes and tones?" → Tier 2, streamed conversational answer
- Manual: open chat during tutorial step 5, ask "what does this step do?" → context-aware Tier 2 answer
- Manual: verify streaming (text appears progressively, not all at once)
- Manual: verify keyboard shortcuts still work in tutorial when chat is closed
- Manual: verify Escape closes chat panel
- `npm run build` — zero errors

### Phase 3
- `npm run test` — validator tests pass with valid/invalid/auto-fixable inputs
- Manual: ask "create a tutorial for layering pads with filter sweep and arpeggio" → generates valid tutorial
- Manual: click "Start Tutorial" → TutorialRunner renders generated steps with correct panel highlights
- Manual: verify generated tutorial has valid control IDs and screen types
- Manual: test validation failure graceful fallback
- `npm run build` — zero errors
