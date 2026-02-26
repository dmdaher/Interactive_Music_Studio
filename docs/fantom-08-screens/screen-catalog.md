# Fantom 08 — Complete Screen Catalog (Master Index)

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf` (173 pages)
> **Date**: 2026-02-25
> **Total screens cataloged**: ~298 raw entries (~210 deduplicated — see note below)
> **Currently implemented**: 7 screen types (home, zone-view, key-range, write, menu, tone-select, effect)
>
> This is the master index of every screen, sub-screen, popup, and overlay found in the
> Roland Fantom 08 Reference Manual. Each entry links to its detailed chapter file.

---

## Confidence Legend

Each entry in the master table has a **Confidence** tag indicating how reliably it was cataloged:

| Tag | Meaning | Criteria |
|-----|---------|----------|
| **HIGH** | Strong evidence | Screenshot clearly visible in PDF; layout described from visual inspection; specific UI element names read directly from screenshot |
| **MED** | Moderate evidence | Described in manual text with some detail but no clear screenshot; OR screenshot is small/partially obscured; OR parameters listed but visual layout not fully shown |
| **LOW** | Weak evidence | Inferred from brief mention (e.g., "A confirmation appears", "The X screen appears"); no screenshot; minimal description beyond existence |

> **Conservative tagging policy**: When in doubt, entries are tagged MED or LOW rather than HIGH.
> Entries tagged LOW are candidates for re-verification against the actual hardware or clearer manual sections.

---

## Statistics

| Category | Chapter | Screens | Pages |
|----------|---------|---------|-------|
| Panel & Navigation | [01](01-panel-and-navigation.md) | 29 | 8-16 |
| Performing | [02](02-performing.md) | 31 | 27-46 |
| Controllers & Editing | [03](03-editing.md) | 36 | 47-65 |
| Effects & Mixer | [04](04-effects-mixer.md) | 29 | 66-78 |
| Sampler | [05](05-sampler.md) | 37 | 79-102 |
| Pads & Sequencer | [06](06-sequencer.md) | 66 | 103-140 |
| System & Settings | [07](07-system-settings.md) | 45 | 151-173 |
| Popups & Overlays | [08](08-popups-overlays.md) | 53 | various |

> Note: Some screens appear in both their chapter file and the popups chapter (e.g., utility
> popups are detailed in their parent chapter but also listed in 08). The raw count across all
> files is ~326 entries; the deduplicated master table below has ~298 unique entries.
> After accounting for duplicates and consolidations (see Known Inaccuracies), the true unique
> screen count is approximately **~210**.

### Confidence Breakdown

| Confidence | Count | Percentage |
|------------|-------|------------|
| HIGH | 83 | 28% |
| MED | 201 | 67% |
| LOW | 14 | 5% |
| **Total** | **298** | **100%** |

> After cross-referencing Ch.01 brief references against detailed later chapters, 12 entries
> were upgraded (6 LOW→HIGH, 6 LOW→MED). Only 14 entries remain LOW — these are screens
> with no detailed documentation found anywhere in the manual.

---

## Implementation Status

| Status | Count |
|--------|-------|
| Yes (fully implemented) | 7 |
| Partial | 4 |
| No | ~199 |

**Implemented screen types**: `home`, `zone-view`, `key-range`, `write`, `menu`, `tone-select`, `effect`

---

## Known Inaccuracies & Corrections

The following issues were identified during validation and are noted inline in the tables:

1. **TONE EDIT SN-AP / SN-EP** (#91, #92, #296, #297): The manual refers to "SN-AP" and "SN-EP" but these are the same **TONE EDIT SNAP** screen type (SuperNATURAL Acoustic Piano and SuperNATURAL E.Piano share one editor framework). Kept as separate entries for traceability but they are effectively one screen with different tone parameters loaded.

2. **Quick Edit Bar** (#36): This is the standard E1-E6 knob parameter bar visible at the bottom of most screens, not a separate overlay. Reclassified from "Overlay" to "UI element" — kept in table for completeness.

3. **Scene Rating Edit / Scene Rating Filter** (#34, #35): These are modes within the Scene Select screen, not separate standalone screens. The rating stars and filter toggle modify the Scene Select view in-place.

4. **UNDO/REDO Indicator** (#203): The primary toolbar button is **UNDO**; REDO is the alternate (shift) function. The indicator shows whichever operation was last performed.

---

## Master Screen Table

### 01 — Panel & Navigation (pp. 8-16)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 1 | SCENE SELECT Screen | p.15 | Main | [SCENE SELECT] button / power-on default | Yes (`home`) | HIGH |
| 2 | ZONE VIEW Screen | p.16 | Main | [ZONE VIEW] button | Yes (`zone-view`) | HIGH |
| 3 | MENU Screen | p.16 | Main | [MENU] button / hamburger icon | Yes (`menu`) | HIGH |
| 4 | WRITE Screen | p.9 | Popup | [WRITE] button | Yes (`write`) | MED |
| 5 | RENAME Screen | p.16 | Overlay | Save/rename operations (QWERTY keyboard) | No | HIGH |
| 6 | REC STANDBY Screen | p.16 | Main | [REC] button | No | HIGH |
| 7 | TONE EDIT ZOOM (Screen 1 - tabbed) | p.15 | Sub-screen | MENU > TONE EDIT / Synth section buttons | Partial | HIGH |
| 8 | TONE EDIT ZOOM (Screen 2 - PRO list) | p.15 | Sub-screen | "To PRO" from Screen 1 | No | MED |
| 9 | MIXER Screen | p.8-9 | Sub-screen | [SHIFT]+[PAN/LEVEL] / MENU > MIXER | No | LOW |
| 10 | Knob/Slider Value Popup | p.14 | Popup | Turn any knob/slider | No | HIGH |
| 11 | Numeric Input Window | p.13 | Popup | [SHIFT]+[ENTER] | No | MED |
| 12 | TEMPO Screen | p.9 | Popup | [TEMPO] button | No | MED |
| 13 | TFX ZOOM EDIT Screen | p.9 | Sub-screen | [MASTER FX] button | No | MED |
| 14 | Routing Screen | p.9 | Sub-screen | [SHIFT]+[MASTER FX] | No | LOW |
| 15 | MOTIONAL PAD Screen | p.9 | Main | [MOTIONAL PAD] button | No | HIGH |
| 16 | OSC Setting Screen (TONE EDIT ZOOM) | p.10 | Sub-screen | [OSC] button | No | MED |
| 17 | FILTER Setting Screen (TONE EDIT ZOOM) | p.10 | Sub-screen | [PARAM] button | No | MED |
| 18 | AMP ENV Screen | p.10 | Sub-screen | [AMP] button | No | MED |
| 19 | MFX EDIT Screen | p.10 | Sub-screen | [FX] button | Partial (`effect`) | MED |
| 20 | LFO1 Screen | p.10 | Sub-screen | [LFO] button | No | LOW |
| 21 | PATTERN Screen | p.10 | Main | [PATTERN] button | No | HIGH |
| 22 | GROUP Screen | p.10 | Main | [GROUP] button | No | HIGH |
| 23 | SONG Screen | p.10 | Main | [SONG] button | No | HIGH |
| 24 | RHYTHM PATTERN Screen | p.10 | Main | [RHYTHM PTN] button | No | MED |
| 25 | SCENE CHAIN Screen | p.10 | Main | [CHAIN] button | No | HIGH |
| 26 | KEY RANGE Setting Screen | p.14 | Sub-screen | [SHIFT]+[SPLIT] | Yes (`key-range`) | MED |
| 27 | ASSIGN Setting Screen | p.14 | Sub-screen | [SHIFT]+[ASSIGN] | No | MED |
| 28 | Wheel/Controller Setting Screen | p.8, 14 | Sub-screen | [SHIFT]+WHEEL/S1/S2 | No | MED |
| 29 | Pad Mode Edit Screen | p.10 | Sub-screen | [SHIFT]+[PAD MODE] | No | HIGH |

---

### 02 — Performing (pp. 27-46)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 30 | Scene Select (detail) | p.28 | Main | [SCENE SELECT] | Yes (`home`) | HIGH |
| 31 | Bank Select Popup | p.28 | Popup | Touch bank selector | No | MED |
| 32 | Scene Search — Keyboard Entry | p.29 | Overlay | Touch search icon on Scene Select | No | MED |
| 33 | Scene Search Results | p.29 | Main (filtered) | After entering search text | No | MED |
| 34 | Scene Rating Edit | p.29 | Main (edit mode) | Touch rating stars | No | LOW |
| 35 | Scene Rating Filter | p.29 | Main (filtered) | Touch rating filter | No | LOW |
| 36 | Quick Edit Bar | p.30 | UI element | E1-E6 knob parameter bar | No | MED |
| 37 | Zone View (1 Zone) | p.31 | Main | [ZONE VIEW] w/ 1 zone | Yes (`zone-view`) | HIGH |
| 38 | Zone View (4 Zone) | p.31 | Main | [ZONE VIEW] w/ 4 zones | Yes (`zone-view`) | HIGH |
| 39 | Zone View (8 Zone) | p.31 | Main | [ZONE VIEW] w/ 8 zones | Yes (`zone-view`) | HIGH |
| 40 | Zone View (16 Zone) | p.31 | Main | [ZONE VIEW] w/ 16 zones | Yes (`zone-view`) | HIGH |
| 41 | Tone List | p.31-32 | Sub-screen | Touch tone name in Zone View | Yes (`tone-select`) | HIGH |
| 42 | Tone Search — Keyboard Entry | p.32 | Overlay | Touch search icon on Tone List | No | MED |
| 43 | Tone Search Results | p.32 | Sub-screen | After entering search text | No | MED |
| 44 | Tone Rating Edit | p.32 | Sub-screen | Touch rating stars | No | LOW |
| 45 | Tone Rating Filter | p.33 | Sub-screen | Touch rating filter | No | MED |
| 46 | Single Tone Play (Scene Select variant) | p.34 | Main | [SINGLE TONE] button | No | MED |
| 47 | Single Zone Play Confirm Popup | p.34 | Popup | [SINGLE TONE] w/ multiple zones | No | MED |
| 48 | Layer Setup (Zone View) | p.35 | Main | Zone View w/ layered zones | Partial | MED |
| 49 | Split Setup (Zone View) | p.36 | Main | Zone View w/ split zones | Partial | MED |
| 50 | Split Point Display | p.36 | Overlay | Adjusting split point | No | MED |
| 51 | Key Range Setup (Zone View) | p.37 | Main | Zone View w/ LOWER/UPPER | Yes (`key-range`) | HIGH |
| 52 | Key Range Edit (Zone Edit sub-screen) | p.37 | Sub-screen | ZONE EDIT > Key Range | No | MED |
| 53 | Transpose Display | p.38 | Overlay | [TRANSPOSE] button | No | MED |
| 54 | Octave Display | p.38 | Overlay | [OCTAVE] buttons | No | MED |
| 55 | Arpeggio Screen | p.40 | Sub-screen | MENU > ARPEGGIO | No | MED |
| 56 | Arpeggio Tempo Popup | p.41 | Popup | Adjust arpeggio tempo | No | MED |
| 57 | Chord Memory Screen | p.43 | Sub-screen | MENU > CHORD MEMORY | No | MED |
| 58 | Rhythm Pattern Screen | p.44 | Sub-screen | [RHYTHM PTN] / MENU | No | MED |
| 59 | Rhythm Pattern Group Write Screen | p.46 | Sub-screen | Rhythm Pattern > Write | No | MED |
| 60 | Rhythm Pattern Tempo Popup | p.46 | Popup | Adjust rhythm tempo | No | MED |

---

### 03 — Controllers & Editing (pp. 47-65)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 61 | PAN/LEVEL Popup | p.47 | Popup | [PAN/LEVEL] + knob/slider | No | HIGH |
| 62 | ASSIGN Popup | p.47 | Popup | [ASSIGN] + knob/slider | No | HIGH |
| 63 | ASSIGN Settings Screen | p.47 | Sub-screen | [SHIFT]+[ASSIGN] | No | MED |
| 64 | Controller Assign Screen (WHEEL/S1/S2/PEDAL) | p.48 | Sub-screen | [SHIFT]+controller | No | MED |
| 65 | Synth Ctrl — OSC PRM Screen | p.49 | Sub-screen | [OSC] in Synth Ctrl mode | No | MED |
| 66 | Synth Ctrl — FILTER Screen | p.49 | Sub-screen | [PARAM] in Synth Ctrl mode | No | MED |
| 67 | Synth Ctrl — AMP ENV Screen | p.49 | Sub-screen | [AMP] in Synth Ctrl mode | No | MED |
| 68 | Synth Ctrl — MFX Edit Screen | p.49 | Sub-screen | [FX] in Synth Ctrl mode | No | MED |
| 69 | MOTIONAL PAD Screen (detailed) | p.50 | Main | [MOTIONAL PAD] button | No | HIGH |
| 70 | MOTIONAL PAD ZONE SELECT Screen | p.50 | Sub-screen | MOTIONAL PAD > zone select | No | MED |
| 71 | MOTIONAL PAD Tone List Screen | p.51 | Sub-screen | MOTIONAL PAD > tone select | No | MED |
| 72 | MOTIONAL PAD EDIT Screen | p.51 | Sub-screen | MOTIONAL PAD > EDIT | No | MED |
| 73 | SCENE EDIT Screen | p.53 | Main | MENU > SCENE EDIT | No | HIGH |
| 74 | SCENE EDIT Utility Window | p.56 | Popup | SCENE EDIT > Utility | No | MED |
| 75 | ZONE EDIT Screen | p.57 | Main | MENU > ZONE EDIT | No | HIGH |
| 76 | ZONE EDIT Utility Window | p.57 | Popup | ZONE EDIT > Utility | No | MED |
| 77 | ZONE OUT ASSIGN Screen | p.58 | Sub-screen | ZONE EDIT > Output | No | MED |
| 78 | Scene Appearance Edit Screen | p.56 | Sub-screen | SCENE EDIT > Appearance | No | MED |
| 79 | WRITE MENU Screen | p.56 | Popup | [WRITE] from edit context | No | MED |
| 80 | SCENE WRITE Screen | p.56 | Popup | WRITE MENU > Scene | No | MED |
| 81 | TONE EDIT Z-CORE ZOOM Screen | p.59 | Sub-screen | MENU > TONE EDIT (ZEN-Core tone) | Partial | HIGH |
| 82 | TONE EDIT Z-CORE PRO Screen | p.60 | Sub-screen | "To PRO" from ZOOM | No | MED |
| 83 | Partial Select (within Tone Edit) | p.60 | Sub-screen | Touch partial tabs | No | MED |
| 84 | TONE EDIT DRUM ZOOM Screen | p.61 | Sub-screen | TONE EDIT (Drum Kit) | No | HIGH |
| 85 | TONE EDIT DRUM PRO Screen | p.61 | Sub-screen | "To PRO" from Drum ZOOM | No | MED |
| 86 | TONE EDIT SN-A Screen | p.62 | Sub-screen | TONE EDIT (SN Acoustic) | No | HIGH |
| 87 | TONE EDIT VTW ZOOM — WHEEL Tab | p.62 | Sub-screen | TONE EDIT (VTW) | No | HIGH |
| 88 | TONE EDIT VTW ZOOM — OVERDRIVE Tab | p.62 | Sub-screen | TONE EDIT VTW > Overdrive | No | MED |
| 89 | TONE EDIT VTW ZOOM — ROTARY Tab | p.62 | Sub-screen | TONE EDIT VTW > Rotary | No | MED |
| 90 | TONE EDIT VTW ZOOM — MFX Tab | p.63 | Sub-screen | TONE EDIT VTW > MFX | No | MED |
| 91 | TONE EDIT SNAP Screen | p.63 | Sub-screen | TONE EDIT (SN Piano) | No | MED |
| 92 | TONE EDIT SNAP Screen (E.Piano) | p.63 | Sub-screen | TONE EDIT (SN E.Piano) | No | MED |
| 93 | TONE EDIT JP8 ZOOM Screen (MODEL) | p.65 | Sub-screen | TONE EDIT (Jupiter-8) | No | HIGH |
| 94 | TONE WRITE Screen | p.63 | Popup | [WRITE] from Tone Edit | No | MED |
| 95 | TONE EDIT Utility Window | p.63 | Popup | TONE EDIT > Utility | No | MED |
| 96 | Partial Init Window | p.63 | Popup | Utility > Partial Init | No | MED |

---

### 04 — Effects & Mixer (pp. 66-78)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 97 | Effects Edit Main Screen | p.66 | Main | MENU > EFFECTS EDIT | No | HIGH |
| 98 | Effects Edit — INTERNAL Tab | p.67 | Sub-screen | Effects Edit > INTERNAL | No | HIGH |
| 99 | Effects Edit — Zone Selection | p.67 | Sub-screen | INTERNAL > zone dropdown | No | HIGH |
| 100 | Effects Edit Zoom — Zone Effects | p.68 | Sub-screen | INTERNAL > zone EDIT | No | HIGH |
| 101 | Effects Edit Zoom — MFX Zoom/Pro | p.68 | Sub-screen | Zone Effects > MFX EDIT | No | MED |
| 102 | Effects Edit Zoom — Drum Kit Comp | p.69 | Sub-screen | Zone Effects > Drum Comp | No | MED |
| 103 | Effects Edit Zoom — IFX1/IFX2 | p.69 | Sub-screen | EDIT on IFX block | No | HIGH |
| 104 | Effects Edit Zoom — Chorus/Reverb | p.70 | Sub-screen | EDIT on CHO/REV block | No | HIGH |
| 105 | Effects Edit Pro — IFX/Chorus/Reverb | p.70 | Sub-screen | "To PRO" from Zoom | No | MED |
| 106 | Effects Edit Zoom — Master FX | p.71 | Sub-screen | EDIT on M.COMP/M.EQ/TFX | No | HIGH |
| 107 | Effects Edit Pro — M.COMP | p.71 | Sub-screen | "To PRO" from M.COMP | No | MED |
| 108 | Effects Edit Pro — M.EQ | p.71 | Sub-screen | "To PRO" from M.EQ | No | MED |
| 109 | Effects Edit — TFX | p.72 | Sub-screen | Master FX > TFX | No | MED |
| 110 | Effects Edit — AUDIO IN Tab | p.72 | Sub-screen | Effects Edit > AUDIO IN | No | HIGH |
| 111 | Effects Edit — AUDIO IN Pro | p.73 | Sub-screen | AUDIO IN > Pro Edit | No | MED |
| 112 | Effects Edit — PAD Tab | p.73 | Sub-screen | Effects Edit > PAD | No | HIGH |
| 113 | Effects Edit — USB Tab | p.74 | Sub-screen | Effects Edit > USB | No | HIGH |
| 114 | Effects Edit — CLICK Tab | p.74 | Sub-screen | Effects Edit > CLICK | No | HIGH |
| 115 | Effects Edit — OUTPUT Tab | p.74 | Sub-screen | Effects Edit > OUTPUT | No | HIGH |
| 116 | Mixer Screen — 8 Zone View | p.75 | Main | MENU > MIXER / [SHIFT]+[PAN/LEVEL] | No | HIGH |
| 117 | Mixer Screen — 16 Zone View | p.75 | Main | Mixer > 16 zone toggle | No | HIGH |
| 118 | Mixer Screen — OUT/USB View | p.75 | Main | Mixer > OUT/USB tab | No | MED |
| 119 | Mixer — Zone EQ Popup | p.75 | Popup | Mixer > zone EQ icon | No | MED |
| 120 | Scene Chain Screen (View Mode) | p.76 | Main | [CHAIN] button | No | MED |
| 121 | Scene Chain Screen (Performance Mode) | p.76 | Main | Scene Chain > perform | No | MED |
| 122 | Scene Chain Set Select Popup | p.76 | Popup | Touch set selector | No | MED |
| 123 | Scene Chain Utility Popup | p.77 | Popup | Scene Chain > Utility | No | MED |
| 124 | Scene Chain Edit Screen | p.78 | Sub-screen | Scene Chain > EDIT | No | MED |
| 125 | Scene Chain Edit — Scene Select Popup | p.78 | Popup | Touch scene slot in edit | No | MED |

---

### 05 — Sampler (pp. 79-102)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 126 | SAMPLING MENU | p.79 | Main | MENU > Sampling Menu | No | HIGH |
| 127 | SAMPLING STANDBY — To KBD | p.80 | Main | Sampling Menu > To Keyboard | No | HIGH |
| 128 | NOW SAMPLING — To KBD (Recording) | p.80 | Main | Start recording (KBD) | No | MED |
| 129 | "Use New Sample?" Dialog | p.80 | Popup | After KBD sampling | No | MED |
| 130 | KBD SAMPLE WAVE EDIT | p.81 | Sub-screen | After sampling / from list | No | HIGH |
| 131 | SAMPLING STANDBY — To Storage | p.83 | Main | Sampling Menu > To Storage | No | MED |
| 132 | File Created Dialog (Storage) | p.83 | Popup | After storage sampling | No | LOW |
| 133 | IMPORT SAMPLE TO KBD — Select Source | p.84 | Sub-screen | Sampling Menu > Import > KBD | No | MED |
| 134 | IMPORT SAMPLE TO KBD — Setting | p.84 | Sub-screen | After source select | No | MED |
| 135 | IMPORT SAMPLE TO MULTISAMPLE — Select | p.85 | Sub-screen | Import > Multisample | No | MED |
| 136 | IMPORT SAMPLE TO MULTISAMPLE — Setting | p.85 | Sub-screen | After source select | No | MED |
| 137 | Imported Sample List | p.85 | Sub-screen | After import | No | MED |
| 138 | MULTISAMPLE EDIT | p.86 | Sub-screen | Edit multisample | No | HIGH |
| 139 | MULTISAMPLE EDIT PRO | p.86 | Sub-screen | "To PRO" from Edit | No | MED |
| 140 | MULTISAMPLE MANAGER | p.87 | Sub-screen | Manager button | No | MED |
| 141 | MULTISAMPLE UTILITY Popup | p.87 | Popup | Manager > Utility | No | MED |
| 142 | KBD SAMPLE LIST | p.88 | Sub-screen | Sample list view | No | MED |
| 143 | KBD SAMPLE LIST — Parameter | p.89 | Sub-screen | List > parameter view | No | MED |
| 144 | KBD SAMPLE WAVE EDIT (from list) | p.89 | Sub-screen | List > Wave Edit | No | MED |
| 145 | KBD SAMPLE UTILITY Popup | p.89 | Popup | List > Utility | No | MED |
| 146 | SAMPLE MODIFY Popup | p.89 | Popup | List > Modify | No | MED |
| 147 | MULTISAMPLE VIEW | p.90 | Sub-screen | View multisample | No | MED |
| 148 | WAVE/EXPANSION MEMORY INFO | p.91 | Main | UTILITY > Info | No | HIGH |
| 149 | EXPANSION INFO | p.91 | Sub-screen | Info > Expansion | No | MED |
| 150 | IMPORT SAMPLE — Select File | p.92 | Sub-screen | Import sample browser | No | MED |
| 151 | IMPORT SAMPLE — Select Source | p.92 | Sub-screen | After file select | No | MED |
| 152 | IMPORT SAMPLE — Select Destination | p.92 | Sub-screen | After source select | No | MED |
| 153 | PAD BANK | p.93 | Sub-screen | Sample Pad > bank | No | MED |
| 154 | SAMPLE PAD | p.93 | Main | PAD MODE > Sample Pad | No | HIGH |
| 155 | SAMPLING DESTINATION — PAD | p.97 | Sub-screen | Sampling > To Pad | No | MED |
| 156 | SAMPLING STANDBY — To Pad | p.96 | Main | Pad sampling standby | No | MED |
| 157 | PAD SAMPLE IMPORT (File Browser) | p.97 | Sub-screen | Sample Pad > Import | No | MED |
| 158 | SAMPLE IMPORT — Select Destination | p.97 | Sub-screen | After import source | No | MED |
| 159 | SAMPLE PAD — QUICK EDIT | p.99 | Sub-screen | Sample Pad > Quick Edit | No | MED |
| 160 | WAVE EDIT (Pad Sample) | p.99 | Sub-screen | Sample Pad > Wave Edit | No | MED |
| 161 | SAMPLE UTILITY Popup (from SAMPLE PAD) | p.100 | Popup | Sample Pad > Utility | No | MED |
| 162 | SAMPLE UTILITY Popup (from WAVE EDIT) | p.100 | Popup | Wave Edit > Utility | No | MED |

---

### 06 — Pads & Sequencer (pp. 103-140)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 163 | PAD MODE Selection Screen | p.104 | Popup | [PAD MODE] button | No | HIGH |
| 164 | Sample Pad Screen | p.104 | Main | PAD MODE > Pad 1 | No | HIGH |
| 165 | Note Pad Screen | p.104 | Main | PAD MODE > Pad 2 | No | HIGH |
| 166 | Note Pad Edit Screen | p.105 | Sub-screen | Note Pad > select pad | No | MED |
| 167 | Partial Sw/Select Screen | p.105 | Main | PAD MODE > Pad 3 | No | MED |
| 168 | DAW Control Screen | p.105 | Main | PAD MODE > Pad 4 | No | MED |
| 169 | Zone Mute Screen | p.106 | Main | PAD MODE > Pad 5 | No | MED |
| 170 | Zone Solo Screen | p.106 | Main | PAD MODE > Pad 6 | No | MED |
| 171 | KBD SW GRP SELECT Screen | p.106 | Main | PAD MODE > Pad 7 | No | MED |
| 172 | KBD SW GRP EDIT Screen | p.106 | Sub-screen | GRP SELECT > Edit | No | MED |
| 173 | Rhythm Pattern Screen (via Pads) | p.107 | Main | PAD MODE > Pad 8 | No | MED |
| 174 | Pattern Select Screen (PAD PATTERN) | p.107 | Main | PAD MODE > Pad 9 | No | MED |
| 175 | PAD AREA SELECT | p.107 | Sub-screen | [SHIFT]+[PAD MODE] in Pattern | No | MED |
| 176 | Variation Play (via Pads) | p.107 | Main | PAD MODE > Pad 10 | No | LOW |
| 177 | Group Play (via Pads) | p.107 | Main | PAD MODE > Pad 11 | No | LOW |
| 178 | PATTERN Screen — 8 Track View | p.110 | Main | [PATTERN] button | No | HIGH |
| 179 | PATTERN Screen — 16 Track View | p.111 | Main | Pattern > 16Tr toggle | No | HIGH |
| 180 | Pattern Box States | p.111 | Reference | Visual reference | — | HIGH |
| 181 | LOOP SETTING Screen | p.112 | Sub-screen | Pattern > Loop | No | MED |
| 182 | Tempo Screen (Sequencer) | p.113 | Popup | [TEMPO] in sequencer | No | MED |
| 183 | MUTE SELECT Screen | p.113 | Sub-screen | Pattern > Mute | No | HIGH |
| 184 | SOLO SELECT Screen | p.114 | Sub-screen | Pattern > Solo | No | MED |
| 185 | GROUP Screen | p.114 | Main | [GROUP] button | No | HIGH |
| 186 | GROUP PREVIEW Screen | p.114 | Popup | Group > Preview | No | MED |
| 187 | SONG Screen | p.115 | Main | [SONG] button | No | HIGH |
| 188 | SONG Screen — Measure View | p.115 | Main | Song > MEAS toggle | No | MED |
| 189 | REC STANDBY Screen (Realtime) | p.117 | Main | [REC] button | No | HIGH |
| 190 | Track/Pattern Selection View | p.117 | Sub-screen | REC STANDBY > track select | No | MED |
| 191 | REALTIME RECORDING Screen | p.118 | Main | Start realtime recording | No | HIGH |
| 192 | REALTIME ERASE Screen | p.119 | Main | Erase during recording | No | MED |
| 193 | REC STANDBY — Step REC | p.120 | Main | REC STANDBY > STEP tab | No | HIGH |
| 194 | STEP RECORDING Screen | p.120 | Main | Start step recording | No | HIGH |
| 195 | TR-REC Screen (Tone view) | p.121 | Main | REC STANDBY > TR-REC tab | No | HIGH |
| 196 | TR-REC Screen (Drum Kit view) | p.121 | Main | TR-REC w/ drum kit tone | No | HIGH |
| 197 | EDIT SELECT Popup | p.123 | Popup | PTN UTILITY > EDIT | No | MED |
| 198 | PIANO ROLL Screen (Note Editing) | p.123 | Main | Edit Select > Piano Roll | No | HIGH |
| 199 | PIANO ROLL Screen (Automation) | p.124 | Main | Piano Roll > automation tab | No | HIGH |
| 200 | MICROSCOPE Screen | p.126 | Main | Edit Select > Microscope | No | HIGH |
| 201 | PTN UTILITY Screen | p.126 | Main | Pattern > Utility | No | HIGH |
| 202 | DELETE MENU Popup | p.127 | Popup | PTN UTILITY > DELETE | No | MED |
| 203 | UNDO Indicator | p.127 | Overlay | After edit operation | No | MED |
| 204 | RENAME Screen (Pattern) | p.127 | Overlay | PTN UTILITY > RENAME | No | MED |
| 205 | MODIFY MENU Popup | p.128 | Popup | PTN UTILITY > MODIFY | No | MED |
| 206 | QUANTIZE Screen | p.128 | Sub-screen | Modify > Quantize | No | MED |
| 207 | ERASE Screen | p.129 | Sub-screen | Modify > Erase | No | MED |
| 208 | TRANSPOSE Screen | p.129 | Sub-screen | Modify > Transpose | No | MED |
| 209 | CHANGE VELOCITY Screen | p.129 | Sub-screen | Modify > Change Velocity | No | MED |
| 210 | CHANGE DURATION Screen | p.130 | Sub-screen | Modify > Change Duration | No | MED |
| 211 | SHIFT CLOCK Screen | p.130 | Sub-screen | Modify > Shift Clock | No | MED |
| 212 | SMF IMPORT Screen (Browser) | p.130 | Sub-screen | PTN UTILITY > IMPORT | No | HIGH |
| 213 | SMF IMPORT Detail Screen | p.130 | Sub-screen | After SMF file select | No | MED |
| 214 | SEQ EXPORT Screen | p.130 | Sub-screen | PTN UTILITY > EXPORT | No | HIGH |
| 215 | INCLUDE PARAMETERS Popup | p.130 | Popup | SEQ EXPORT workflow | No | MED |
| 216 | EXPORT DESTINATION Screen | p.131 | Sub-screen | After export params | No | MED |
| 217 | EXPORT SOURCE Popup | p.130 | Popup | SEQ EXPORT workflow | No | MED |
| 218 | GROUPING Screen | p.132 | Main | Group > Grouping | No | MED |
| 219 | GROUP PREVIEW Screen (detailed) | p.134 | Popup | Group > Preview | No | MED |
| 220 | GROUP Screen (detailed) | p.134 | Main | [GROUP] button | No | HIGH |
| 221 | GROUP UTILITY Screen | p.134 | Popup | Group > Utility | No | MED |
| 222 | MAKE SONG Screen | p.135 | Main | Group Utility > Make Song | No | HIGH |
| 223 | SONG Screen (detailed) | p.136 | Main | [SONG] button | No | HIGH |
| 224 | SONG Screen — SKIP Mode | p.136 | Main | Song > Skip toggle | No | MED |
| 225 | SONG EDIT Screen | p.136 | Sub-screen | Song > EDIT | No | HIGH |
| 226 | SONG EDIT — MOVE Screen | p.136 | Sub-screen | Song Edit > MOVE | No | MED |
| 227 | SONG EDIT — COPY Screen | p.137 | Sub-screen | Song Edit > COPY | No | MED |
| 228 | SONG EDIT — LOOP Screen | p.137 | Sub-screen | Song Edit > LOOP | No | MED |
| 229 | Repeat Settings (Song Edit) | p.138 | Sub-screen | Song Edit > Repeat | No | MED |
| 230 | SMF CONTROL Screen | p.139 | Main | SMF playback | No | HIGH |
| 231 | SMF SELECT Screen | p.139 | Sub-screen | SMF Control > Select | No | HIGH |
| 232 | MUTE SELECT (SMF Player) | p.140 | Sub-screen | SMF Control > Mute | No | HIGH |
| 233 | SOLO SELECT (SMF Player) | p.140 | Sub-screen | SMF Control > Solo | No | MED |

---

### 07 — System & Settings (pp. 141-173)

| # | Screen Name | Page | Type | Accessed Via | Impl? | Confidence |
|---|-------------|------|------|-------------|-------|------------|
| 234 | SYSTEM — USB Tab | p.142 | Sub-screen | SYSTEM > USB | No | MED |
| 235 | EFFECTS EDIT — AUDIO IN Tab (Vocoder) | p.146 | Sub-screen | Effects Edit > AUDIO IN | No | MED |
| 236 | EFFECTS EDIT ZOOM — Input FX | p.147 | Sub-screen | AUDIO IN > FX Zoom | No | MED |
| 237 | VOCODER ZONE SELECT | p.148 | Sub-screen | Vocoder settings | No | MED |
| 238 | VOCODER EDIT | p.149 | Sub-screen | Vocoder > Edit | No | MED |
| 239 | Voice Character Control Popup | p.149 | Popup | Vocoder Edit > Character | No | MED |
| 240 | VOCODER SETTING WRITE | p.150 | Popup | Vocoder > Write | No | MED |
| 241 | UTILITY MENU | p.158 | Main | MENU > UTILITY | No | HIGH |
| 242 | IMPORT TONE — Select File | p.152 | Sub-screen | UTILITY > Import > Tone | No | HIGH |
| 243 | IMPORT TONE — Select Source | p.153 | Sub-screen | After file select | No | HIGH |
| 244 | IMPORT TONE — Select Destination | p.153 | Sub-screen | After source select | No | MED |
| 245 | IMPORT SCENE — Select File | p.153 | Sub-screen | UTILITY > Import > Scene | No | MED |
| 246 | IMPORT SCENE — Select Source | p.154 | Sub-screen | After file select | No | MED |
| 247 | IMPORT SCENE — Select Destination | p.154 | Sub-screen | After source select | No | MED |
| 248 | IMPORT SAMPLE — Select File (Utility) | p.154 | Sub-screen | UTILITY > Import > Sample | No | MED |
| 249 | IMPORT SAMPLE — Select Source (Utility) | p.154 | Sub-screen | After file select | No | MED |
| 250 | IMPORT SAMPLE — Select Destination (Utility) | p.155 | Sub-screen | After source select | No | MED |
| 251 | EXPORT MENU | p.155 | Sub-screen | UTILITY > Export | No | MED |
| 252 | EXPORT TONE — Select Source | p.155 | Sub-screen | Export > Tone | No | MED |
| 253 | EXPORT TONE — Select Destination | p.155 | Sub-screen | After source select | No | MED |
| 254 | EXPORT SCENE — Select Source | p.156 | Sub-screen | Export > Scene | No | MED |
| 255 | EXPORT SCENE — Select Destination | p.156 | Sub-screen | After source select | No | MED |
| 256 | EXPORT SAMPLE — Select Source | p.157 | Sub-screen | Export > Sample | No | MED |
| 257 | EXPORT SAMPLE — Select Destination | p.157 | Sub-screen | After source select | No | MED |
| 258 | BACKUP Screen | p.158 | Main | UTILITY > Backup | No | MED |
| 259 | RESTORE Screen | p.159 | Main | UTILITY > Restore | No | MED |
| 260 | WALLPAPER Screen | p.161 | Main | UTILITY > Wallpaper | No | MED |
| 261 | USB MEMORY FORMAT Screen | p.160 | Sub-screen | UTILITY > USB Format | No | MED |
| 262 | FACTORY RESET Screen | p.160 | Main | UTILITY > Factory Reset | No | MED |
| 263 | INTERNAL STORAGE INITIALIZE | p.160 | Main | UTILITY > Initialize | No | MED |
| 264 | USB Memory Unmount Popup | p.160 | Popup | UTILITY > Unmount | No | MED |
| 265 | FILE UTILITY Screen | p.162 | Main | MENU > FILE UTILITY | No | HIGH |
| 266 | FILE UTILITY — RENAME | p.162 | Sub-screen | File Utility > Rename | No | MED |
| 267 | FILE UTILITY — DELETE Confirm | p.162 | Popup | File Utility > Delete | No | MED |
| 268 | FILE UTILITY — COPY Destination | p.163 | Sub-screen | File Utility > Copy | No | MED |
| 269 | FILE UTILITY — MOVE Destination | p.163 | Sub-screen | File Utility > Move | No | MED |
| 270 | FILE UTILITY — CREATE FOLDER | p.163 | Sub-screen | File Utility > Create | No | MED |
| 271 | SYSTEM Screen (Main — 17 tabs) | p.164 | Main | MENU > SYSTEM | No | HIGH |
| 272 | SYSTEM — GENERAL Tab | p.164 | Sub-screen | SYSTEM > General | No | MED |
| 273 | SYSTEM — KEYBOARD Tab | p.165 | Sub-screen | SYSTEM > Keyboard | No | MED |
| 274 | SYSTEM — PEDAL Tab | p.165 | Sub-screen | SYSTEM > Pedal | No | MED |
| 275 | SYSTEM — WHEEL 1/2 Tab | p.166 | Sub-screen | SYSTEM > Wheel | No | MED |
| 276 | SYSTEM — S1/S2 Tab | p.166 | Sub-screen | SYSTEM > S1/S2 | No | MED |
| 277 | SYSTEM — SLIDER Tab | p.167 | Sub-screen | SYSTEM > Slider | No | MED |
| 278 | SYSTEM — KNOB Tab | p.167 | Sub-screen | SYSTEM > Knob | No | MED |
| 279 | SYSTEM — USB Tab (Audio) | p.167 | Sub-screen | SYSTEM > USB | No | MED |
| 280 | SYSTEM — MIDI Tab | p.168 | Sub-screen | SYSTEM > MIDI | No | MED |
| 281 | SYSTEM — SOUND Tab | p.168 | Sub-screen | SYSTEM > Sound | No | MED |
| 282 | SYSTEM — SYNC/TEMPO Tab | p.169 | Sub-screen | SYSTEM > Sync/Tempo | No | MED |
| 283 | SYSTEM — SEQUENCER Tab | p.169 | Sub-screen | SYSTEM > Sequencer | No | MED |
| 284 | SYSTEM — CLICK Tab | p.169 | Sub-screen | SYSTEM > Click | No | MED |
| 285 | SYSTEM — NOTE PAD Tab | p.170 | Sub-screen | SYSTEM > Note Pad | No | MED |
| 286 | SYSTEM — CONTROL Tab | p.170 | Sub-screen | SYSTEM > Control | No | MED |
| 287 | SYSTEM — LICENSE Tab | p.170 | Sub-screen | SYSTEM > License | No | LOW |
| 288 | SYSTEM — INFO Tab | p.170 | Sub-screen | SYSTEM > Info | No | LOW |
| 289 | Time Stamp Popup | p.164 | Popup | SYSTEM operations | No | LOW |
| 290 | EXPANSION Screen | p.171 | Main | Boot-time access | No | MED |
| 291 | Expansion Install Confirmation | p.171 | Popup | Expansion > Install | No | MED |
| 292 | Expansion Uninstall Confirmation | p.171 | Popup | Expansion > Uninstall | No | MED |
| 293 | Expansion Optimize Confirmation | p.172 | Popup | Expansion > Optimize | No | MED |
| 294 | Expansion Remove License Confirm | p.172 | Popup | Expansion > Remove | No | MED |
| 295 | Expansion Tone Selection | p.172 | Sub-screen | Tone List > Expansion | No | MED |
| 296 | TONE EDIT SNAP (Expansion) | p.172 | Sub-screen | Tone Edit > SN-AP | No | LOW |
| 297 | TONE EDIT SNAP (Expansion E.Piano) | p.172 | Sub-screen | Tone Edit > SN-EP | No | LOW |
| 298 | TONE EDIT JP8 ZOOM — Model | p.173 | Sub-screen | Tone Edit > Model | No | MED |

---

## Screen Type Distribution

| Type | Count |
|------|-------|
| Main screen | ~55 |
| Sub-screen | ~140 |
| Popup / overlay | ~60 |
| UI element | ~1 |
| Reference / visual | ~1 |

---

## Quick Reference: Implemented Screens

| # | Screen Name | ScreenType | Component |
|---|-------------|-----------|-----------|
| 1 | SCENE SELECT | `home` | SceneSelectScreen |
| 2 | ZONE VIEW (1/4/8/16) | `zone-view` | ZoneViewScreen |
| 3 | KEY RANGE | `key-range` | KeyRangeScreen |
| 4 | WRITE | `write` | WriteScreen |
| 5 | MENU | `menu` | MenuScreen |
| 6 | TONE LIST | `tone-select` | MenuScreen |
| 7 | EFFECTS (generic) | `effect` | MenuScreen |

**Gap: ~291 screen entries remaining** (many are variations/sub-views of the same conceptual screen)

---

## Next Step: Phase 3 — Gap Analysis & Prioritization

See the plan for grouping these ~298 screens into:
- **P0**: Core screens referenced by tutorials
- **P1**: Screens needed for a believable replica
- **P2**: Deep editing screens for future tutorials
- **P3**: Rarely-used utility screens

User decides implementation scope and order.
