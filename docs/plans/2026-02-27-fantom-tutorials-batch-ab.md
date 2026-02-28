# Fantom 08 Tutorials: Sampling/Pads & Performance/Utility — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Create 8 new tutorials covering 14 uncovered screen types to reach 34/34 = 100% display screen coverage for the Fantom 08.

**Architecture:** Each tutorial is a TypeScript data object following the `Tutorial` type, exported from `src/data/tutorials/fantom-08/`. Tutorials accumulate panel state step-by-step and drive the LCD display via `displayState`. Each batch (A: Sampling, B: Performance) gets independent code review before proceeding.

**Tech Stack:** TypeScript 5, Next.js 16, Zustand 5, Vitest + React Testing Library

**Spec-kit integration:** Specifications tracked via `.specify/` — spec, plan, and tasks artifacts co-located for traceability. Run `specify` commands at each gate checkpoint.

---

## Process Commitments (Quality Gates)

**Before EVERY tutorial (PRE-BUILD gate):**
1. Read specific manual PDF pages — no working from memory
2. Cross-reference screen catalog + manual together
3. Verify all control IDs against `allFantom08ControlIds`
4. Verify tone names, parameter ranges, E-knob assignments
5. Present ASCII layout for any new screen types

**After EVERY tutorial (POST-BUILD gate):**
6. Run `npm run build` — zero errors
7. Run `npm run test` — all passing
8. Verify registrations (index.ts, test file)

**After EACH batch (REVIEW gate):**
9. Dispatch `superpowers-extended-cc:code-reviewer` agent
10. Fix all Critical/Important findings
11. Update context checkpoints

**Before completion claims:**
12. Use `superpowers-extended-cc:verification-before-completion`

---

## Batch A: Sampling & Pads (Tasks 1-5)

### Task 1: S-1 — `sampling-basics` (Recording Your First Sample)

**Files:**
- Create: `src/data/tutorials/fantom-08/sampling-basics.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts` (add import + array entry + named export)
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (update count 19→20, add step count)

**PRE-BUILD evidence required:**
- Manual p.79-84 (Sampling Standby, Recording, Sample Pad assignment)
- Manual p.103-107 (Pad section overview)
- Access path: [SAMPLING] → Sampling Standby → pad assign → [REC] → [PLAY] to record
- E-knobs (Standby): E1=SOURCE, E2=GAIN, E3=TRIGGER, E4=FORMAT, E5=SAMPLE RATE, E6=START
- E-knobs (Sample Pad): E1=PAD SELECT, E2=SAMPLE, E3=LEVEL, E4=PAN, E5=TUNE, E6=PLAY MODE

**Key controls:** `sampling`, `pad-1`, `pad-2`, `rec`, `play`, `stop`, `function-e1`..`function-e6`, `value-dial`, `exit`

**Step 1: Read manual pages and verify PRE-BUILD gate**
- Open `Roland Fantom-0 Series Reference Manual.pdf` pages 79-84, 103-107
- Cross-reference with `docs/fantom-08-screens/05-sampler.md`
- Document evidence of control IDs, E-knob assignments, parameter ranges

**Step 2: Write the tutorial data file**
- Follow `split-keyboard-zones.ts` structure exactly
- 9 steps: intro (home) → sampling standby → set source → set gain → arm rec → record → capture → assign to pad (sample-pad) → done (home)
- New screen types: `sampling`, `sample-pad`
- Category: `sampling`, Difficulty: `beginner`, EstimatedTime: `8 min`

**Step 3: Register in index.ts**
- Add import: `import { samplingBasics } from './sampling-basics';`
- Add to array and named exports

**Step 4: Update test file**
- Change `toHaveLength(19)` → `toHaveLength(20)`
- Add `'sampling-basics': 9` to `expectedStepCounts`

**Step 5: Run tests to verify**
Run: `npm run test`
Expected: All tests pass, including new tutorial validation

**Step 6: Commit**
```bash
git add src/data/tutorials/fantom-08/sampling-basics.ts src/data/tutorials/fantom-08/index.ts src/__tests__/tutorials/fantom08Tutorials.test.ts
git commit -m "feat: add sampling-basics tutorial (S-1) — sampling + sample-pad screens"
```

---

### Task 2: S-2 — `wave-editing` (Editing Sample Waveforms)

**Files:**
- Create: `src/data/tutorials/fantom-08/wave-editing.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 21, add step count)

**PRE-BUILD evidence required:**
- Manual p.90-95 (Wave Edit — waveform display, start/end, loop, truncate, normalize)
- Access: Sample Pad → select sample → E6 (EDIT) → Wave Edit screen
- E-knobs: E1=ZOOM, E2=SCROLL, E3=START POINT, E4=END POINT, E5=LOOP MODE, E6=UTILITY

**Key controls:** `sampling`, `pad-1`, `function-e1`..`function-e6`, `value-dial`, `cursor-left`, `cursor-right`, `enter`, `exit`, `play`, `stop`

**Step 1: Read manual pages and verify PRE-BUILD gate**
**Step 2: Write the tutorial data file**
- 10 steps: intro → open sample-pad → enter wave-edit → waveform overview → zoom (E1) → start point (E3) → end point (E4) → loop (E5) → preview (play) → done
- New screen type: `wave-edit`
- Category: `sampling`, Difficulty: `intermediate`, EstimatedTime: `10 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 21, `'wave-editing': 10`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 3: S-3 — `pad-mode-setup` (Configuring Pad Modes)

**Files:**
- Create: `src/data/tutorials/fantom-08/pad-mode-setup.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 22)

**PRE-BUILD evidence required:**
- Manual p.103-107 (Pad Mode — velocity curve, pad functions, banks, hold)
- Access: [PAD MODE] → Pad Mode screen
- E-knobs: E1=PAD FUNCTION, E2=VELOCITY CURVE, E3=PAD BANK, E4=HOLD MODE, E5=SENSITIVITY, E6=EDIT
- Pad functions: NOTE, CHORD, SAMPLE, SCENE, CONTROL

**Key controls:** `pad-mode`, `pad-1`..`pad-4`, `function-e1`..`function-e6`, `value-dial`, `bank`, `hold`, `enter`, `exit`

**Step 1: Read manual and verify PRE-BUILD gate**
**Step 2: Write tutorial data file**
- 10 steps: intro → pad-mode screen → view assignments → change function (E1) → velocity curve (E2) → switch bank (E3) → hold toggle (E4) → test pad → sensitivity (E5) → done
- New screen type: `pad-mode`
- Category: `sampling`, Difficulty: `intermediate`, EstimatedTime: `10 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 22, `'pad-mode-setup': 10`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 4: S-4 — `multisample-creation` (Building Multisamples)

**Files:**
- Create: `src/data/tutorials/fantom-08/multisample-creation.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 23)

**PRE-BUILD evidence required:**
- Manual p.96-102 (Multisample Edit — keyboard split, partial layers, velocity switching, sample mapping)
- Access: Menu → SAMPLING → MULTISAMPLE EDIT
- E-knobs: E1=KEY RANGE LOW, E2=KEY RANGE HIGH, E3=VEL LOW, E4=VEL HIGH, E5=SAMPLE SELECT, E6=UTILITY

**Key controls:** `sampling`, `menu`, `enter`, `function-e1`..`function-e6`, `cursor-up`, `cursor-down`, `cursor-left`, `cursor-right`, `value-dial`, `exit`

**Step 1: Read manual and verify PRE-BUILD gate**
**Step 2: Write tutorial data file**
- 11 steps: intro → menu → multisample-edit → view layers → add layer (E6) → key low (E1) → key high (E2) → vel range (E3/E4) → select sample (E5) → second layer → done
- New screen type: `multisample-edit`
- Category: `sampling`, Difficulty: `advanced`, EstimatedTime: `12 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 23, `'multisample-creation': 11`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 5: Batch A Code Review

**Step 1: Run full build + test**
Run: `npm run build && npm run test`
Expected: Zero errors, all tests pass

**Step 2: Dispatch code-reviewer agent**
- Use `superpowers-extended-cc:requesting-code-review` skill
- Reviewer validates: control IDs match workflow context, cumulative panel state, displayState props match components, narrative coherence, no duplicate displayStates

**Step 3: Fix Critical/Important findings**

**Step 4: Re-run verification**
Run: `npm run build && npm run test`

**Step 5: Commit any fixes**

**Step 6: Update context checkpoint**

---

## Batch B: Performance & Utility (Tasks 6-10)

### Task 6: P-1 — `arpeggio-setup` (Setting Up Arpeggiator Patterns)

**Files:**
- Create: `src/data/tutorials/fantom-08/arpeggio-setup.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 24)

**PRE-BUILD evidence required:**
- Manual p.39-42 (Arpeggio — style, hold, grid, duration, velocity, motif, variation)
- Access: [ARPEGGIO] → Arpeggio screen
- E-knobs: E1=STYLE, E2=GRID, E3=DURATION, E4=VELOCITY, E5=VARIATION, E6=MOTIF
- Styles: UP, DOWN, UP/DOWN, RANDOM, CHORD, PHRASE
- Grid: 1/4, 1/8, 1/8T, 1/16, 1/16T, 1/32

**Key controls:** `arpeggio`, `zone-1`, `function-e1`..`function-e6`, `value-dial`, `play`, `stop`, `enter`, `exit`

**Step 1: Read manual and verify PRE-BUILD gate**
**Step 2: Write tutorial data file**
- 9 steps: intro → arpeggio screen → style (E1) → grid (E2) → duration (E3) → variation (E5) → enable zone-1 → play → done
- New screen type: `arpeggio`
- Category: `performance`, Difficulty: `beginner`, EstimatedTime: `8 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 24, `'arpeggio-setup': 9`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 7: P-2 — `chord-memory-motional` (Chord Memory & Motional Pad)

**Files:**
- Create: `src/data/tutorials/fantom-08/chord-memory-motional.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 25)

**PRE-BUILD evidence required:**
- Manual p.43-46 (Chord Memory — form, key, inversion, rolled)
- Manual p.48-52 (Motional Pad — 2D XY, 4 zone corners, morphing)
- Access: [CHORD MEMORY] → Chord Memory screen; [MOTIONAL PAD] → Motional Pad screen
- E-knobs (Chord): E1=FORM, E2=KEY, E3=INVERSION, E4=ROLLED, E5=ZONE SELECT, E6=ON/OFF
- E-knobs (Motional): E1-E4=ZONE 1-4 ASSIGN, E5=HOLD, E6=RESET
- Chord forms: MAJOR, MINOR, 7TH, DIM, AUG, SUS2, SUS4, ADD9

**Key controls:** `chord-memory`, `motional-pad`, `zone-1`..`zone-4`, `function-e1`..`function-e6`, `value-dial`, `enter`, `exit`

**Step 1: Read manual and verify PRE-BUILD gate**
**Step 2: Write tutorial data file**
- 10 steps: intro → chord-memory screen → form (E1) → key (E2) → inversion (E3) → enable (E6) → exit → motional-pad screen → assign zones (E1-E4) → done
- New screen types: `chord-memory`, `motional-pad`
- Category: `performance`, Difficulty: `intermediate`, EstimatedTime: `10 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 25, `'chord-memory-motional': 10`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 8: P-3 — `scene-chain-smf` (Scene Chains & SMF Playback)

**Files:**
- Create: `src/data/tutorials/fantom-08/scene-chain-smf.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 26)

**PRE-BUILD evidence required:**
- Manual p.33-35 (Scene Chain — ordered list, footswitch advance)
- Manual p.109-110 (SMF Control — MIDI file playback, transport, loop)
- Access: [SCENE CHAIN] → Scene Chain screen; Menu → UTILITY → SMF CONTROL
- E-knobs (Chain): E1=MOVE, E2=ADD, E3=DELETE, E4=PLAY MODE, E5=INTERVAL, E6=EDIT
- E-knobs (SMF): E1=FILE SELECT, E2=TEMPO, E3=TRANSPORT, E4=LOOP, E5=POSITION, E6=MARKER

**Key controls:** `scene-chain`, `scene-select`, `menu`, `function-e1`..`function-e6`, `cursor-up`, `cursor-down`, `value-dial`, `play`, `stop`, `enter`, `exit`

**Step 1: Read manual and verify PRE-BUILD gate**
**Step 2: Write tutorial data file**
- 10 steps: intro → scene-chain screen → view chain → add scenes (E2) → reorder (E1) → play mode (E4) → exit → SMF control → load file (E1) → playback (E3/E4/E5) → done
- New screen types: `scene-chain`, `smf-control`
- Category: `performance`, Difficulty: `intermediate`, EstimatedTime: `10 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 26, `'scene-chain-smf': 10`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 9: P-4 — `system-and-file-management` (System Settings & File Management)

**Files:**
- Create: `src/data/tutorials/fantom-08/system-and-file-management.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts` (count → 27)

**PRE-BUILD evidence required:**
- Manual p.152-163 (File mgmt — backup, restore, import, export)
- Manual p.164-170 (System Settings — 17 tabs: GENERAL, SOUND, MIDI, AUDIO I/O, DISPLAY, PEDAL, STARTUP, USB, BLUETOOTH...)
- Access: Menu → SYSTEM; Menu → UTILITY → FILE BROWSER/IMPORT/EXPORT
- E-knobs (System): E1=TAB, E2=CURSOR, E6=EDIT VALUE
- E-knobs (File Browser): E1=DEVICE, E2=NAVIGATE, E3=SORT, E6=SELECT/OPEN
- Import Wizard: 3-step flow; Export Wizard: 2-step flow

**Key controls:** `menu`, `function-e1`..`function-e3`, `function-e6`, `cursor-up`, `cursor-down`, `cursor-left`, `cursor-right`, `value-dial`, `enter`, `exit`, `write`

**Step 1: Read manual and verify PRE-BUILD gate**
**Step 2: Write tutorial data file**
- 11 steps: intro → menu → system-settings → MIDI tab → AUDIO I/O tab → exit → file-browser → navigate → import-wizard → export-wizard → done
- New screen types: `system-settings`, `file-browser`, `import-wizard`, `export-wizard`
- Category: `performance`, Difficulty: `advanced`, EstimatedTime: `12 min`

**Step 3: Register in index.ts**
**Step 4: Update test file** (count → 27, `'system-and-file-management': 11`)
**Step 5: Run tests** — `npm run test`
**Step 6: Commit**

---

### Task 10: Batch B Code Review

**Step 1: Run full build + test**
**Step 2: Dispatch code-reviewer agent**
**Step 3: Fix Critical/Important findings**
**Step 4: Re-run verification**
**Step 5: Commit fixes**
**Step 6: Update context checkpoint**

---

### Task 11: Final Regression & Completion

**Step 1: Full regression**
Run: `npm run build && npm run test`
Expected: 27 tutorials, ~270+ tests, all passing

**Step 2: Verify 100% screen coverage**
- Grep all 34 screen types across tutorial files
- Confirm each has at least one tutorial exercising it

**Step 3: SELF-IMPROVEMENT gate (Gate 5)**
- Reflect on what went well/poorly
- Update docs if gates need new questions

**Step 4: Update memory + context checkpoints**

**Step 5: Commit and push**
```bash
git add -A
git commit -m "feat: add 8 tutorials (Batch A+B) — 100% screen coverage (34/34)"
git push origin main
```

---

## Files Summary

### Created (8 files)
| File | Tutorial | New Screens |
|---|---|---|
| `src/data/tutorials/fantom-08/sampling-basics.ts` | S-1 | sampling, sample-pad |
| `src/data/tutorials/fantom-08/wave-editing.ts` | S-2 | wave-edit |
| `src/data/tutorials/fantom-08/pad-mode-setup.ts` | S-3 | pad-mode |
| `src/data/tutorials/fantom-08/multisample-creation.ts` | S-4 | multisample-edit |
| `src/data/tutorials/fantom-08/arpeggio-setup.ts` | P-1 | arpeggio |
| `src/data/tutorials/fantom-08/chord-memory-motional.ts` | P-2 | chord-memory, motional-pad |
| `src/data/tutorials/fantom-08/scene-chain-smf.ts` | P-3 | scene-chain, smf-control |
| `src/data/tutorials/fantom-08/system-and-file-management.ts` | P-4 | system-settings, file-browser, import-wizard, export-wizard |

### Modified (2 files)
| File | Changes |
|---|---|
| `src/data/tutorials/fantom-08/index.ts` | 8 imports + array entries (19→27) + named exports |
| `src/__tests__/tutorials/fantom08Tutorials.test.ts` | Count 19→27, 8 new expectedStepCounts entries |

### Screen Coverage: 20/34 → 34/34 = 100%

---

## Verified Tone Names (safe to use)
Piano: "Concert Grand", "Bright Piano", "Stage Piano", "Warm Grand"
Bass: "AC.BASS", "Finger Bass", "Pick Bass", "Fretless Bass"
Strings: "Full Strings", "Chamber Strings", "Violin Solo", "Cello Ensemble"
Synth: "Saw Lead", "Square Lead", "Trance Lead", "Analog Pad"
(Sampling tutorials S-1 through S-4 use user-recorded samples, not presets.)
