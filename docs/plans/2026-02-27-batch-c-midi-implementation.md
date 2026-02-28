# Batch C: MIDI Tutorials — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Create 5 MIDI tutorials (M-0 through M-4) for the Fantom 08, filling the empty `midi` category and teaching complete beginners how to use MIDI.

**Architecture:** Each tutorial is a TypeScript data object following the `Tutorial` type, exported from `src/data/tutorials/fantom-08/`. Tutorials accumulate panel state step-by-step and drive the LCD display via `displayState`. Linear progression: each tutorial builds on the previous.

**Tech Stack:** TypeScript 5, Next.js 16, Zustand 5, Vitest + React Testing Library

---

## Process Commitments (Quality Gates)

**Before EVERY tutorial (PRE-BUILD gate):**
1. Read specific manual PDF pages — no working from memory
2. Cross-reference control IDs against `allFantom08ControlIds` in `src/data/panelLayouts/fantom-08.ts`
3. Verify parameter names, E-knob assignments, and screen layouts

**After EVERY tutorial (POST-BUILD gate):**
4. Run `npm run test` — all passing
5. Verify registration in index.ts and test file

**After ALL tutorials (REVIEW gate):**
6. Dispatch code-reviewer agent
7. Fix all Critical/Important findings
8. Run `npm run build` — zero errors

---

## Task 0: M-0 — `midi-concepts` (MIDI Concepts 101)

**Files:**
- Create: `src/data/tutorials/fantom-08/midi-concepts.ts`

**PRE-BUILD:** No manual pages needed — this is a conceptual tutorial using existing panel controls.

**Step 1: Read the reference tutorial pattern**
Read: `src/data/tutorials/fantom-08/panel-overview.ts` (similar format — panel tour, beginner, no complex workflows)

**Step 2: Write the tutorial data file**
- Export: `midiConcepts`
- ID: `midi-concepts`
- Category: `midi`, Difficulty: `beginner`, EstimatedTime: `5 min`
- Tags: `['midi', 'concepts', 'beginner', 'introduction']`
- ~8 steps: What is MIDI → MIDI ports → channels → INT vs EXT → CC messages → controller modes → DAW control → summary
- Screen types: `home`, `zone-view`, `menu`
- Key controls: `zone-1`, `zone-2`, `shift`, `slider-1`, `ctrl-knob-1`, `wheel-1`, `pan-level`, `ctrl`, `assign`, `daw-ctrl`, `pad-mode`
- Each step must have unique `displayState` (use `statusText` to differentiate)
- Panel state cumulative: activate controls when highlighting, deactivate when moving on

**Step 3: Verify**
Run: `npx tsc --noEmit src/data/tutorials/fantom-08/midi-concepts.ts` or check manually that the file compiles

---

## Task 1: M-1 — `midi-basics` (Connecting External Gear)

**Files:**
- Create: `src/data/tutorials/fantom-08/midi-basics.ts`

**PRE-BUILD:** Read manual PDF pages 144-145 (Controlling an External MIDI Device)
- Path: `/Users/devin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Fun & Stuff/Music/Music Studio/FANTOM-06_07_08_Reference_eng01_W.pdf`
- Verify: Zone INT/EXT toggle (SHIFT + zone button), LED colors (Red=INT, Green=EXT), MIDI channel setup in Zone Edit

**Step 1: Write the tutorial data file**
- Export: `midiBasics`
- ID: `midi-basics`
- Category: `midi`, Difficulty: `beginner`, EstimatedTime: `8 min`
- Tags: `['midi', 'external', 'zones', 'beginner']`
- ~9 steps: Intro → Zone View → Select Zone 2 → Set to EXT (SHIFT+zone) → Zone Edit MIDI channel → Set channel 2 → PAN/LEVEL for external volume → Play keyboard → Complete
- Screen types: `home`, `zone-view`, `zone-edit`
- Key controls: `zone-view`, `zone-select`, `zone-2`, `shift`, `enter`, `value-dial`, `pan-level`, `slider-2`, `exit`
- Zone LED colors: Red (#EF4444) for INT, Green (#22C55E) for EXT
- Zone Edit for EXT shows: MIDI Ch, Bank Sel MSB/LSB, PC

---

## Task 2: M-2 — `midi-cc-mapping` (CC Mapping with Knobs & Sliders)

**Files:**
- Create: `src/data/tutorials/fantom-08/midi-cc-mapping.ts`

**PRE-BUILD:** Read manual PDF pages 145 (Using with PAN/LEVEL, Using with ASSIGN) and pages 47-49 (controller modes)

**Step 1: Write the tutorial data file**
- Export: `midiCcMapping`
- ID: `midi-cc-mapping`
- Category: `midi`, Difficulty: `intermediate`, EstimatedTime: `10 min`
- Tags: `['midi', 'cc', 'controller', 'assign', 'intermediate']`
- ~10 steps: Intro → PAN/LEVEL mode → CTRL mode → ASSIGN mode → SHIFT+ASSIGN editor → Set Slider 1 to CC#1 → Set Knob 1 to CC#74 → ASSIGN2 (System) → Test → Complete
- Screen types: `home`, `zone-view`, `menu`
- Key controls: `pan-level`, `ctrl`, `assign`, `shift`, `value-dial`, `cursor-down`, `slider-1`, `ctrl-knob-1`, `exit`
- ASSIGN1 = scene-level (ASSIGN button alone), ASSIGN2 = system-level (PAN/LEVEL + ASSIGN together)

---

## Task 3: M-3 — `daw-controller` (DAW Controller Setup)

**Files:**
- Create: `src/data/tutorials/fantom-08/daw-controller.ts`

**PRE-BUILD:** Read manual PDF pages 105 (DAW Control pad mode, Logic/MainStage mappings) and page 142 (USB connection, VENDOR driver, USB Audio)

**Step 1: Write the tutorial data file**
- Export: `dawController`
- ID: `daw-controller`
- Category: `midi`, Difficulty: `intermediate`, EstimatedTime: `10 min`
- Tags: `['daw', 'midi', 'usb', 'controller', 'intermediate']`
- ~10 steps: Intro → USB VENDOR driver (System > GENERAL) → USB Audio enable → DAW CTRL button → Pad Mode menu → Select DAW Control → Logic Pro X pad mapping → Local Switch OFF (System > MIDI) → Return to Sample Pad → Complete
- Screen types: `home`, `system-settings`, `pad-mode`
- Key controls: `menu`, `daw-ctrl`, `pad-mode`, `pad-1`, `pad-4`, `function-e2`
- Logic pad mapping: [1]-[4] Screen Sets, [5]-[8] Zoom, [9] Marker List, [13]-[14] Nav Markers, [15] Song Position, [16] Play/Stop

---

## Task 4: M-4 — `midi-sync-clock` (MIDI Sync & Clock)

**Files:**
- Create: `src/data/tutorials/fantom-08/midi-sync-clock.ts`

**PRE-BUILD:** Read manual PDF pages 169-170 (System parameters: SYNC/TEMPO, CLICK sections)

**Step 1: Write the tutorial data file**
- Export: `midiSyncClock`
- ID: `midi-sync-clock`
- Category: `midi`, Difficulty: `advanced`, EstimatedTime: `10 min`
- Tags: `['midi', 'sync', 'clock', 'tempo', 'advanced']`
- ~10 steps: Intro → Menu > System → SYNC/TEMPO tab → Set Sync Mode → Clock Source → Configure Tempo → Click settings → Metronome sound/level → Tap Tempo button → Complete
- Screen types: `home`, `menu`, `system-settings`
- Key controls: `menu`, `tempo`, `function-e1`-`function-e6`, `value-dial`, `cursor-up`, `cursor-down`, `enter`, `exit`, `write`

---

## Task 5: Register All 5 Tutorials

**Files:**
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts`

**Step 1: Update index.ts**

Add 5 imports at the end of the import block:
```typescript
import { midiConcepts } from './midi-concepts';
import { midiBasics } from './midi-basics';
import { midiCcMapping } from './midi-cc-mapping';
import { dawController } from './daw-controller';
import { midiSyncClock } from './midi-sync-clock';
```

Add to `fantom08Tutorials` array (after `systemAndFileManagement`):
```typescript
  midiConcepts,
  midiBasics,
  midiCcMapping,
  dawController,
  midiSyncClock,
```

Add to named exports block:
```typescript
  midiConcepts,
  midiBasics,
  midiCcMapping,
  dawController,
  midiSyncClock,
```

**Step 2: Update test file**

Change `toHaveLength(27)` → `toHaveLength(32)` on the count assertion.

Add 5 entries to `expectedStepCounts`:
```typescript
  'midi-concepts': N,    // actual step count from M-0
  'midi-basics': N,      // actual step count from M-1
  'midi-cc-mapping': N,  // actual step count from M-2
  'daw-controller': N,   // actual step count from M-3
  'midi-sync-clock': N,  // actual step count from M-4
```

**Step 3: Run tests**
Run: `npm run test`
Expected: All tests pass, including all 5 new tutorials validated for control IDs, screen types, unique step IDs, etc.

**Step 4: Run build**
Run: `npm run build`
Expected: Zero errors

---

## Task 6: Code Review + Commit

**Step 1: Run code-reviewer agent**
Dispatch `superpowers-extended-cc:requesting-code-review` skill. Reviewer validates:
- All control IDs valid against `allFantom08ControlIds`
- Panel state is cumulative (controls deactivated when navigating away)
- Every step has unique `displayState` (no duplicates within a tutorial)
- Narrative coherence (steps flow logically)
- Manual accuracy (parameters, labels, E-knob assignments match the PDF)

**Step 2: Fix all Critical/Important findings**

**Step 3: Re-run verification**
Run: `npm run test && npm run build`

**Step 4: Commit each tutorial separately**
```bash
git add src/data/tutorials/fantom-08/midi-concepts.ts
git commit -m "feat: add midi-concepts tutorial (M-0) — MIDI Concepts 101"

git add src/data/tutorials/fantom-08/midi-basics.ts
git commit -m "feat: add midi-basics tutorial (M-1) — connecting external gear"

git add src/data/tutorials/fantom-08/midi-cc-mapping.ts
git commit -m "feat: add midi-cc-mapping tutorial (M-2) — CC mapping with knobs & sliders"

git add src/data/tutorials/fantom-08/daw-controller.ts
git commit -m "feat: add daw-controller tutorial (M-3) — DAW controller setup"

git add src/data/tutorials/fantom-08/midi-sync-clock.ts
git commit -m "feat: add midi-sync-clock tutorial (M-4) — MIDI sync & clock"

git add src/data/tutorials/fantom-08/index.ts src/__tests__/tutorials/fantom08Tutorials.test.ts
git commit -m "feat: register 5 MIDI tutorials (Batch C) — count 27→32"
```

---

## Files Summary

### Created (5 files)
| File | Tutorial | Screen Types |
|---|---|---|
| `midi-concepts.ts` | M-0: MIDI Concepts 101 | home, zone-view, menu |
| `midi-basics.ts` | M-1: Connecting External Gear | home, zone-view, zone-edit |
| `midi-cc-mapping.ts` | M-2: CC Mapping | home, zone-view, menu |
| `daw-controller.ts` | M-3: DAW Controller | home, system-settings, pad-mode |
| `midi-sync-clock.ts` | M-4: MIDI Sync & Clock | home, menu, system-settings |

### Modified (2 files)
| File | Changes |
|---|---|
| `index.ts` | 5 imports + array entries (27→32) + named exports |
| `fantom08Tutorials.test.ts` | Count 27→32, 5 new step counts |

### No new screen types — all already registered
