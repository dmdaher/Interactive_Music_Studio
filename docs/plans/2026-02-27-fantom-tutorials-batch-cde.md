# Fantom 08 Complete Tutorial Roadmap — Batches C through H

> **Status:** Batch C (MIDI) complete → 32 tutorials. Batches D-H pending.
> **Updated:** 2026-02-28 — Gap analysis added 2 new tone engine tutorials to Batch E (SN-A, MODEL/JP-8). See `docs/plans/2026-02-28-gap-analysis.md` for full audit.

## Context

We have **32 tutorials** (Batches A+B+C) covering **34/34 screen types** (100% screen coverage). But screen coverage ≠ feature coverage. A deep page-by-page review of the full 185-page reference manual identified **61 uncovered features** that a new user needs to learn.

This plan adds **25 new tutorials** organized into **5 remaining batches** (D-H), bringing the total to **57 tutorials** — comprehensive coverage of virtually every user-facing Fantom 08 capability.

---

## Current State (32 tutorials)

| Category | Count | Tutorials |
|---|---|---|
| Basics | 5 | panel-overview, selecting-scenes, selecting-tones, saving-your-work, using-sliders-knobs |
| Zones & Splits | 4 | split-keyboard-zones, layering-zones, four-zone-setup, transpose-octave |
| Sound Design | 2 | tone-editing-zoom, tone-editing-pro |
| Effects | 2 | editing-mfx, effects-routing |
| MIDI | **5** | midi-concepts, midi-basics, midi-cc-mapping, daw-controller, midi-sync-clock |
| Performance | 4 | arpeggio-setup, chord-memory-motional, scene-chain-smf, system-and-file-management |
| Sequencer | 4 | sequencer-patterns, piano-roll-editing, sequencer-groups, song-arrangement |
| Sampling | 4 | sampling-basics, wave-editing, pad-mode-setup, multisample-creation |
| Mixer | 1 | understanding-the-mixer |
| Scene Editing | 1 | scene-level-editing |

---

## Batch C: MIDI (5 tutorials) — ✅ COMPLETE

| ID | File Name | Title | Difficulty | Status |
|---|---|---|---|---|
| M-0 | `midi-concepts` | MIDI Concepts — Understanding the Language | beginner | ✅ Done |
| M-1 | `midi-basics` | MIDI Basics — Connecting External Gear | beginner | ✅ Done |
| M-2 | `midi-cc-mapping` | MIDI CC Mapping & Controller Assignment | intermediate | ✅ Done |
| M-3 | `daw-controller` | Using the Fantom as a DAW Controller | intermediate | ✅ Done |
| M-4 | `midi-sync-clock` | MIDI Sync & Clock | advanced | ✅ Done |

**Covered:** External MIDI control, CC mapping, DAW integration, clock sync, local switch, plug-in synth workflow

---

## Batch D: Sequencer Power + Audio Input (5 tutorials)

| ID | File Name | Title | Difficulty | Manual Pages | What It Teaches |
|---|---|---|---|---|---|
| Q-1 | `step-recording` | Step Recording — Note-by-Note Entry | intermediate | p.118-119 | Step REC mode, note length/velocity/timing, building patterns precisely without realtime playing |
| Q-2 | `tr-rec-drums` | TR-REC — Drum Machine Style | intermediate | p.120-121 | TR-REC grid recording, per-instrument step entry, velocity patterns, classic drum machine workflow |
| Q-3 | `sequencer-power-tools` | Sequencer Power Tools | advanced | p.125-129 | Microscope event editor, pattern MODIFY (quantize, erase, transpose, velocity, duration, shift clock), realtime erase, automation recording, pattern utilities |
| R-1 | `rhythm-patterns` | Rhythm Patterns — Built-in Beats | beginner | p.107 | Select/play rhythm patterns, edit rhythm groups, variation play, tempo adjustment, triggering from pads |
| V-1 | `vocoder-audio-input` | Vocoder & Audio Input Setup | intermediate | p.148-151 | Mic input, input MFX, noise suppressor, low cut, vocoder zone select, presets, voice character, input EQ/reverb, feedback prevention |

**Covers gaps:** Step recording, TR-REC, microscope editor, pattern modify, automation, rhythm patterns, vocoder, audio input chain

---

## Batch E: Tone Engines & Sound Design Deep Dive (7 tutorials)

> **Updated 2026-02-28:** Added `sn-acoustic-editing` and `model-jp8-editing` — gap analysis found these 2 tone engines had NO planned tutorial. Also: `sn-piano-editing` should include Partial Copy steps (p.64-65).

| ID | File Name | Title | Difficulty | Manual Pages | What It Teaches |
|---|---|---|---|---|---|
| SD-1 | `vtw-organ-editing` | VTW Organ Editing — Drawbars & Rotary | intermediate | p.61 | Virtual Tone Wheel organ: 9 harmonic bars, percussion, click, overdrive, rotary speaker speed/brake — unique UI |
| SD-2 | `sn-piano-editing` | SuperNATURAL Piano & E.Piano | intermediate | p.62-63 | SN-AP: lid position, damper resonance, string resonance, key-off resonance. SN-EP: bell character, damper noise, key-off noise. **+ Partial Copy (p.64-65)** |
| SD-3 | `drum-kit-editing` | Drum Kit Tone Editing | intermediate | p.60 | Per-instrument drum editing: pad assignment, tuning, level, pan, mute groups, drum kit compressor, kit partial EQ |
| SD-4 | `quick-edit-function-knobs` | Quick Edit with Function Knobs | beginner | p.30, 47-49 | E1-E6 function knobs for quick parameter tweaks, SYNTH CTRL section, real-time tone manipulation without full edit mode |
| SD-5 | `sn-acoustic-editing` | SN-A Acoustic Tone Editing | intermediate | p.61 | **GAP CLOSURE.** SN-A tone engine: instrument behavior, resonance, key-off, natural variation — distinct from ZEN-Core and other SN engines |
| SD-6 | `model-jp8-editing` | MODEL/JP-8 Tone Editing | intermediate | p.63 | **GAP CLOSURE.** MODEL engine: SuperSaw, feedback oscillator, sync, ring mod — vintage synth modeling unique to this engine |
| T-1 | `tone-expansion-favorites` | Tone Expansion & Favorites | intermediate | p.171-173 | Install expansion tones, optimize storage, select SN-AP/SN-EP/MODEL expansions, remove packs, browse favorites |

**Covers gaps:** All 7 tone engines taught (ZEN-Core already covered by existing tutorials + SN-A and MODEL/JP-8 added), quick edit workflow, expansion management, partial copy

---

## Batch F: Zones, Controllers & Performance (5 tutorials)

> **Gap-closure notes (2026-02-28):** `velocity-layers-zones` should include Zone Utility steps (copy/init/swap zones, p.55).

| ID | File Name | Title | Difficulty | Manual Pages | What It Teaches |
|---|---|---|---|---|---|
| Z-1 | `velocity-layers-zones` | Velocity Layers & Advanced Zone Editing | advanced | p.54-55 | Velocity range per zone, INT/EXT zone types, mono/poly, voice reserve, zone EQ, zone name/output, per-zone pedal & bend settings. **+ Zone Utility: copy/init/swap (p.55)** |
| C-1 | `pedal-wheel-setup` | Pedal & Wheel Setup | beginner | p.165-167 | Expression pedal assignment (20+ functions), sustain/half-damper, pitch/mod wheel customization, S1/S2 button assignments |
| P-1 | `scene-search-navigation` | Scene & Tone Search | beginner | p.29, 32, 34 | Scene search by name/category/rating, tone search across categories, Single Tone Play mode, scene appearance (memo, rating, color) |
| P-2 | `advanced-pad-modes` | Advanced Pad Modes | intermediate | p.104-107 | Note Pad (melodic), Partial Sw/Sel, Zone Mute/Solo, Kbd Sw Group, Pattern/Variation/Group Play from pads |
| P-3 | `tone-remain-performance` | Live Performance Settings | intermediate | p.164, 169 | Tone Remain switch, Scene Remain, master tune, scale tune (just intonation, Arabic, etc.), encoder speed |

**Covers gaps:** Velocity zones, all pedal/wheel options, search features, all pad modes, performance continuity settings, alternative tunings

---

## Batch G: Advanced Sampling & Pad Operations (4 tutorials)

> **Gap-closure notes (2026-02-28):** `advanced-keyboard-sampling` should include Sampling to Storage (record to USB WAV, p.83). `master-effects-output` should include Zone Out Assign (per-zone output routing, p.55-56).

| ID | File Name | Title | Difficulty | Manual Pages | What It Teaches |
|---|---|---|---|---|---|
| S-1 | `advanced-keyboard-sampling` | Advanced Keyboard Sampling | advanced | p.89-91 | Sample MODIFY (truncate, emphasis, normalize), KBD sample utility (rename, delete, move, copy), multisample velocity layers, memory info. **+ Sampling to Storage (p.83)** |
| S-2 | `pad-sampler-deep-dive` | Pad Sampler Deep Dive | intermediate | p.93-102 | Pad banks (A-D), hold mode, move/copy between pads, recording directly to pads, auto-trigger, importing audio (WAV/AIFF/MP3) to pads, pad quick edit, pad wave edit, truncate/export as WAV |
| S-3 | `importing-audio-files` | Importing Audio Files | beginner | p.97-98 | Import WAV/AIFF/MP3 from USB to keyboard zones and pads, import multiple files, file browser navigation |
| FX-1 | `master-effects-output` | Master Effects & Output Routing | advanced | p.70-71 | TFX (Total Effect), mastering comp/EQ, sub output routing, sampling input effects chain, output destination assignment. **+ Zone Out Assign (p.55-56)** |

**Covers gaps:** All sample modify operations, pad bank management, audio import, TFX, output routing

---

## Batch H: System, Files & Customization (4 tutorials)

> **Gap-closure notes (2026-02-28):** `usb-audio-interface` should include Plug-in Synth Live Workflow (local off + USB audio return, p.142).

| ID | File Name | Title | Difficulty | Manual Pages | What It Teaches |
|---|---|---|---|---|---|
| U-1 | `usb-audio-interface` | Using the Fantom as a USB Audio Interface | intermediate | p.142, 169 | USB audio settings, input/output routing, recording to DAW, playback from computer, audio levels. **+ Plug-in Synth Live Workflow (p.142)** |
| B-1 | `backup-factory-reset` | Backup, Restore & Factory Reset | beginner | p.152-160 | Full backup to USB, selective restore, factory reset, internal storage initialize, USB format |
| F-1 | `file-management-deep-dive` | File Management & Data Transfer | intermediate | p.152-163 | Import/export individual tones, scenes, and samples, file utilities (rename, delete, copy, move, create folder), USB management |
| SYS-1 | `display-customization` | Display & System Customization | beginner | p.161, 164-170 | Set wallpaper, encoder speed, note pad settings, S1/S2 assignments, continuous hold pedal, system info |

**Covers gaps:** USB audio, backup/restore, factory reset, all file utilities, display customization, remaining system settings

---

## Complete Tutorial Map After All Batches (57 tutorials)

| Category | Before (32) | After (57) | Tutorials Added |
|---|---|---|---|
| Basics | 5 | 8 | +scene-search-navigation, +pedal-wheel-setup, +importing-audio-files |
| Zones & Splits | 4 | 5 | +velocity-layers-zones |
| Sound Design | 2 | 8 | +vtw-organ, +sn-piano, +drum-kit, +quick-edit, **+sn-acoustic**, **+model-jp8** |
| Effects | 2 | 4 | +vocoder-audio-input, +master-effects-output |
| MIDI | 5 | 5 | (Batch C complete) |
| Performance | 4 | 8 | +rhythm-patterns, +advanced-pad-modes, +tone-remain-performance, +display-customization |
| Sequencer | 4 | 7 | +step-recording, +tr-rec-drums, +sequencer-power-tools |
| Sampling | 4 | 7 | +advanced-keyboard-sampling, +pad-sampler-deep-dive, +importing-audio-files |
| Mixer | 1 | 1 | (unchanged) |
| Scene Editing | 1 | 1 | (unchanged) |
| System/Files | — | 3 | +usb-audio-interface, +backup-factory-reset, +file-management-deep-dive |

### Difficulty Distribution (57 total)
- Beginner: 18 (32%)
- Intermediate: 28 (49%) *(+2 from new tone engine tutorials)*
- Advanced: 11 (19%)

---

## Implementation Approach

Same proven workflow from Batches A & B:
1. **PRE-BUILD gate** — Read specific manual PDF pages, cross-reference, verify control IDs
2. **Write tutorial** — Follow `split-keyboard-zones.ts` structure, cumulative panel state
3. **Register** — index.ts import + array + named export
4. **Update tests** — Increment count, add step count
5. **POST-BUILD gate** — `npm run test`, `npm run build`
6. **Code review** after each batch
7. **Commit** per tutorial

### Files Modified Per Tutorial
- Create: `src/data/tutorials/fantom-08/<name>.ts`
- Modify: `src/data/tutorials/fantom-08/index.ts`
- Modify: `src/__tests__/tutorials/fantom08Tutorials.test.ts`

No new screen types expected — all 34 already exist and are registered.

---

## Priority Recommendation

Batch C (MIDI) is complete. Remaining priority order:

1. **Batch E (Tone Engines)** — Highest. Now 7 tutorials covering ALL tone engines including SN-A and MODEL/JP-8 gap closures.
2. **Batch D (Sequencer + Vocoder)** — High. Step recording and TR-REC are fundamental workflows.
3. **Batch F (Performance)** — Medium-High. Search, pad modes, and velocity layers (+ zone utility gap closure).
4. **Batch G (Advanced Sampling)** — Medium. Power user features (+ sampling to storage & zone out assign gap closures).
5. **Batch H (System/Files)** — Medium. Backup/restore essential (+ plug-in synth workflow gap closure).

---

## Gap Analysis Log

| Date | Trigger | Gaps Found | Action Taken |
|---|---|---|---|
| 2026-02-28 | Post-Batch C + full manual audit | 10 gaps (2 HIGH, 5 MEDIUM, 3 LOW) | Added 2 tutorials to Batch E, annotated 4 existing tutorials with gap-closure steps. See `docs/plans/2026-02-28-gap-analysis.md` |
