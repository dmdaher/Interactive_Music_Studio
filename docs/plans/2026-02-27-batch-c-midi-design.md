# Batch C: MIDI Tutorials — Design Document

> **Date:** 2026-02-27
> **Status:** Approved
> **Batch:** C (5 tutorials)

## Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Audience | Complete beginners | Never used MIDI before. Explain concepts from scratch. |
| Tutorial count | 5 (was 4 in original plan) | Added MIDI Concepts 101 pre-tutorial for education |
| Structure | Linear progression | Each tutorial builds on the previous. Clear learning path. |
| Format | Interactive panel tour (M-0), hands-on (M-1 through M-4) | M-0 highlights MIDI-related controls and explains concepts |

## Tutorial Lineup

### M-0: MIDI Concepts 101 (NEW)
- **File:** `midi-concepts.ts`
- **Difficulty:** beginner | **Time:** 5 min | **Steps:** ~8
- **What it teaches:** What is MIDI, MIDI ports, channels (16), INT vs EXT zones, CC messages (volume/mod/filter), controller modes (PAN/LEVEL/CTRL/ASSIGN), DAW control overview
- **Format:** Interactive panel tour — highlights MIDI-relevant controls, explains what each does
- **Screen types:** home, zone-view, menu
- **No external gear needed**

### M-1: MIDI Basics — Connecting External Gear
- **File:** `midi-basics.ts`
- **Difficulty:** beginner | **Time:** 8 min | **Steps:** ~9
- **What it teaches:** Set a zone to EXT mode (SHIFT + zone button), configure MIDI channel in Zone Edit, control external volume with PAN/LEVEL sliders, play keyboard to send MIDI
- **Manual pages:** p.144-145
- **Screen types:** home, zone-view, zone-edit
- **Key controls:** zone-select, zone-2, shift, enter, value-dial, pan-level, slider-2, exit

### M-2: MIDI CC Mapping with Knobs & Sliders
- **File:** `midi-cc-mapping.ts`
- **Difficulty:** intermediate | **Time:** 10 min | **Steps:** ~10
- **What it teaches:** PAN/LEVEL mode, CTRL mode, ASSIGN mode, SHIFT+ASSIGN to edit CC assignments, ASSIGN1 (scene) vs ASSIGN2 (system), set slider to CC#1, set knob to CC#74
- **Manual pages:** p.145, p.47-49
- **Screen types:** home, zone-view, menu
- **Key controls:** pan-level, ctrl, assign, shift, value-dial, cursor-down, slider-1, ctrl-knob-1

### M-3: DAW Controller — Control Your DAW from the Fantom
- **File:** `daw-controller.ts`
- **Difficulty:** intermediate | **Time:** 10 min | **Steps:** ~10
- **What it teaches:** USB VENDOR driver setup, USB Audio enable, DAW CTRL button, Pad Mode > DAW Control, Logic Pro X / MainStage pad mappings, Local Switch OFF for recording
- **Manual pages:** p.105, p.142
- **Screen types:** home, system-settings, pad-mode
- **Key controls:** menu, daw-ctrl, pad-mode, pad-1, pad-4

### M-4: MIDI Sync & Clock
- **File:** `midi-sync-clock.ts`
- **Difficulty:** advanced | **Time:** 10 min | **Steps:** ~10
- **What it teaches:** MIDI clock master/slave, sync settings (System > SYNC/TEMPO), tap tempo, click/metronome configuration, tempo source options
- **Manual pages:** p.169-170
- **Screen types:** home, system-settings, menu
- **Key controls:** menu, tempo, function-e1 through e6, value-dial

## Quality Gates (per CLAUDE.md)

### PRE-BUILD (before each tutorial)
1. Read specific manual PDF pages — no working from memory
2. Cross-reference control IDs against `allFantom08ControlIds`
3. Verify parameter names, ranges, and E-knob assignments

### POST-BUILD (after each tutorial)
4. `npm run test` — all passing
5. `npm run build` — zero errors
6. Verify index.ts registration + test step counts

### REVIEW (after all 5)
7. Code review for: cumulative panel state, unique displayStates, narrative coherence
8. Fix any findings, re-run tests

## Files Created/Modified

### Created (5 files)
- `src/data/tutorials/fantom-08/midi-concepts.ts`
- `src/data/tutorials/fantom-08/midi-basics.ts`
- `src/data/tutorials/fantom-08/midi-cc-mapping.ts`
- `src/data/tutorials/fantom-08/daw-controller.ts`
- `src/data/tutorials/fantom-08/midi-sync-clock.ts`

### Modified (2 files)
- `src/data/tutorials/fantom-08/index.ts` — 5 imports + array entries (27→32) + named exports
- `src/__tests__/tutorials/fantom08Tutorials.test.ts` — count 27→32, 5 new step counts
