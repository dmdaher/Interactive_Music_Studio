# Fantom 08 — Complete Screen Catalog (Master Index)

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf` (173 pages)
> **Date**: 2026-02-25
> **Total screens cataloged**: ~210
> **Currently implemented**: 7 screen types (home, zone-view, key-range, write, menu, tone-select, effect)
>
> This is the master index of every screen, sub-screen, popup, and overlay found in the
> Roland Fantom 08 Reference Manual. Each entry links to its detailed chapter file.

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
> popups are detailed in their parent chapter but also listed in 08). The counts above include
> all entries per file; the deduplicated master table below has ~210 unique entries.

---

## Implementation Status

| Status | Count |
|--------|-------|
| Yes (fully implemented) | 7 |
| Partial | 4 |
| No | ~199 |

**Implemented screen types**: `home`, `zone-view`, `key-range`, `write`, `menu`, `tone-select`, `effect`

---

## Master Screen Table

### 01 — Panel & Navigation (pp. 8-16)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 1 | SCENE SELECT Screen | p.15 | Main | [SCENE SELECT] button / power-on default | Yes (`home`) |
| 2 | ZONE VIEW Screen | p.16 | Main | [ZONE VIEW] button | Yes (`zone-view`) |
| 3 | MENU Screen | p.16 | Main | [MENU] button / hamburger icon | Yes (`menu`) |
| 4 | WRITE Screen | p.9 | Popup | [WRITE] button | Yes (`write`) |
| 5 | RENAME Screen | p.16 | Overlay | Save/rename operations (QWERTY keyboard) | No |
| 6 | REC STANDBY Screen | p.16 | Main | [REC] button | No |
| 7 | TONE EDIT ZOOM (Screen 1 - tabbed) | p.15 | Sub-screen | MENU > TONE EDIT / Synth section buttons | Partial |
| 8 | TONE EDIT ZOOM (Screen 2 - PRO list) | p.15 | Sub-screen | "To PRO" from Screen 1 | No |
| 9 | MIXER Screen | p.8-9 | Sub-screen | [SHIFT]+[PAN/LEVEL] / MENU > MIXER | No |
| 10 | Knob/Slider Value Popup | p.14 | Popup | Turn any knob/slider | No |
| 11 | Numeric Input Window | p.13 | Popup | [SHIFT]+[ENTER] | No |
| 12 | TEMPO Screen | p.9 | Popup | [TEMPO] button | No |
| 13 | TFX ZOOM EDIT Screen | p.9 | Sub-screen | [MASTER FX] button | No |
| 14 | Routing Screen | p.9 | Sub-screen | [SHIFT]+[MASTER FX] | No |
| 15 | MOTIONAL PAD Screen | p.9 | Main | [MOTIONAL PAD] button | No |
| 16 | OSC Setting Screen (TONE EDIT ZOOM) | p.10 | Sub-screen | [OSC] button | No |
| 17 | FILTER Setting Screen (TONE EDIT ZOOM) | p.10 | Sub-screen | [PARAM] button | No |
| 18 | AMP ENV Screen | p.10 | Sub-screen | [AMP] button | No |
| 19 | MFX EDIT Screen | p.10 | Sub-screen | [FX] button | Partial (`effect`) |
| 20 | LFO1 Screen | p.10 | Sub-screen | [LFO] button | No |
| 21 | PATTERN Screen | p.10 | Main | [PATTERN] button | No |
| 22 | GROUP Screen | p.10 | Main | [GROUP] button | No |
| 23 | SONG Screen | p.10 | Main | [SONG] button | No |
| 24 | RHYTHM PATTERN Screen | p.10 | Main | [RHYTHM PTN] button | No |
| 25 | SCENE CHAIN Screen | p.10 | Main | [CHAIN] button | No |
| 26 | KEY RANGE Setting Screen | p.14 | Sub-screen | [SHIFT]+[SPLIT] | Yes (`key-range`) |
| 27 | ASSIGN Setting Screen | p.14 | Sub-screen | [SHIFT]+[ASSIGN] | No |
| 28 | Wheel/Controller Setting Screen | p.8, 14 | Sub-screen | [SHIFT]+WHEEL/S1/S2 | No |
| 29 | Pad Mode Edit Screen | p.10 | Sub-screen | [SHIFT]+[PAD MODE] | No |

---

### 02 — Performing (pp. 27-46)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 30 | Scene Select (detail) | p.28 | Main | [SCENE SELECT] | Yes (`home`) |
| 31 | Bank Select Popup | p.28 | Popup | Touch bank selector | No |
| 32 | Scene Search — Keyboard Entry | p.29 | Overlay | Touch search icon on Scene Select | No |
| 33 | Scene Search Results | p.29 | Main (filtered) | After entering search text | No |
| 34 | Scene Rating Edit | p.29 | Main (edit mode) | Touch rating stars | No |
| 35 | Scene Rating Filter | p.29 | Main (filtered) | Touch rating filter | No |
| 36 | Quick Edit Bar | p.30 | Overlay | Touch edit icon | No |
| 37 | Zone View (1 Zone) | p.31 | Main | [ZONE VIEW] w/ 1 zone | Yes (`zone-view`) |
| 38 | Zone View (4 Zone) | p.31 | Main | [ZONE VIEW] w/ 4 zones | Yes (`zone-view`) |
| 39 | Zone View (8 Zone) | p.31 | Main | [ZONE VIEW] w/ 8 zones | Yes (`zone-view`) |
| 40 | Zone View (16 Zone) | p.31 | Main | [ZONE VIEW] w/ 16 zones | Yes (`zone-view`) |
| 41 | Tone List | p.31-32 | Sub-screen | Touch tone name in Zone View | Yes (`tone-select`) |
| 42 | Tone Search — Keyboard Entry | p.32 | Overlay | Touch search icon on Tone List | No |
| 43 | Tone Search Results | p.32 | Sub-screen | After entering search text | No |
| 44 | Tone Rating Edit | p.32 | Sub-screen | Touch rating stars | No |
| 45 | Tone Rating Filter | p.33 | Sub-screen | Touch rating filter | No |
| 46 | Single Tone Play (Scene Select variant) | p.34 | Main | [SINGLE TONE] button | No |
| 47 | Single Zone Play Confirm Popup | p.34 | Popup | [SINGLE TONE] w/ multiple zones | No |
| 48 | Layer Setup (Zone View) | p.35 | Main | Zone View w/ layered zones | Partial |
| 49 | Split Setup (Zone View) | p.36 | Main | Zone View w/ split zones | Partial |
| 50 | Split Point Display | p.36 | Overlay | Adjusting split point | No |
| 51 | Key Range Setup (Zone View) | p.37 | Main | Zone View w/ LOWER/UPPER | Yes (`key-range`) |
| 52 | Key Range Edit (Zone Edit sub-screen) | p.37 | Sub-screen | ZONE EDIT > Key Range | No |
| 53 | Transpose Display | p.38 | Overlay | [TRANSPOSE] button | No |
| 54 | Octave Display | p.38 | Overlay | [OCTAVE] buttons | No |
| 55 | Arpeggio Screen | p.40 | Sub-screen | MENU > ARPEGGIO | No |
| 56 | Arpeggio Tempo Popup | p.41 | Popup | Adjust arpeggio tempo | No |
| 57 | Chord Memory Screen | p.43 | Sub-screen | MENU > CHORD MEMORY | No |
| 58 | Rhythm Pattern Screen | p.44 | Sub-screen | [RHYTHM PTN] / MENU | No |
| 59 | Rhythm Pattern Group Write Screen | p.46 | Sub-screen | Rhythm Pattern > Write | No |
| 60 | Rhythm Pattern Tempo Popup | p.46 | Popup | Adjust rhythm tempo | No |

---

### 03 — Controllers & Editing (pp. 47-65)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 61 | PAN/LEVEL Popup | p.47 | Popup | [PAN/LEVEL] + knob/slider | No |
| 62 | ASSIGN Popup | p.47 | Popup | [ASSIGN] + knob/slider | No |
| 63 | ASSIGN Settings Screen | p.47 | Sub-screen | [SHIFT]+[ASSIGN] | No |
| 64 | Controller Assign Screen (WHEEL/S1/S2/PEDAL) | p.48 | Sub-screen | [SHIFT]+controller | No |
| 65 | Synth Ctrl — OSC PRM Screen | p.49 | Sub-screen | [OSC] in Synth Ctrl mode | No |
| 66 | Synth Ctrl — FILTER Screen | p.49 | Sub-screen | [PARAM] in Synth Ctrl mode | No |
| 67 | Synth Ctrl — AMP ENV Screen | p.49 | Sub-screen | [AMP] in Synth Ctrl mode | No |
| 68 | Synth Ctrl — MFX Edit Screen | p.49 | Sub-screen | [FX] in Synth Ctrl mode | No |
| 69 | MOTIONAL PAD Screen (detailed) | p.50 | Main | [MOTIONAL PAD] button | No |
| 70 | MOTIONAL PAD ZONE SELECT Screen | p.50 | Sub-screen | MOTIONAL PAD > zone select | No |
| 71 | MOTIONAL PAD Tone List Screen | p.51 | Sub-screen | MOTIONAL PAD > tone select | No |
| 72 | MOTIONAL PAD EDIT Screen | p.51 | Sub-screen | MOTIONAL PAD > EDIT | No |
| 73 | SCENE EDIT Screen | p.53 | Main | MENU > SCENE EDIT | No |
| 74 | SCENE EDIT Utility Window | p.56 | Popup | SCENE EDIT > Utility | No |
| 75 | ZONE EDIT Screen | p.57 | Main | MENU > ZONE EDIT | No |
| 76 | ZONE EDIT Utility Window | p.57 | Popup | ZONE EDIT > Utility | No |
| 77 | ZONE OUT ASSIGN Screen | p.58 | Sub-screen | ZONE EDIT > Output | No |
| 78 | Scene Appearance Edit Screen | p.56 | Sub-screen | SCENE EDIT > Appearance | No |
| 79 | WRITE MENU Screen | p.56 | Popup | [WRITE] from edit context | No |
| 80 | SCENE WRITE Screen | p.56 | Popup | WRITE MENU > Scene | No |
| 81 | TONE EDIT Z-CORE ZOOM Screen | p.59 | Sub-screen | MENU > TONE EDIT (ZEN-Core tone) | Partial |
| 82 | TONE EDIT Z-CORE PRO Screen | p.60 | Sub-screen | "To PRO" from ZOOM | No |
| 83 | Partial Select (within Tone Edit) | p.60 | Sub-screen | Touch partial tabs | No |
| 84 | TONE EDIT DRUM ZOOM Screen | p.61 | Sub-screen | TONE EDIT (Drum Kit) | No |
| 85 | TONE EDIT DRUM PRO Screen | p.61 | Sub-screen | "To PRO" from Drum ZOOM | No |
| 86 | TONE EDIT SN-A Screen | p.62 | Sub-screen | TONE EDIT (SN Acoustic) | No |
| 87 | TONE EDIT VTW ZOOM — WHEEL Tab | p.62 | Sub-screen | TONE EDIT (VTW) | No |
| 88 | TONE EDIT VTW ZOOM — OVERDRIVE Tab | p.62 | Sub-screen | TONE EDIT VTW > Overdrive | No |
| 89 | TONE EDIT VTW ZOOM — ROTARY Tab | p.62 | Sub-screen | TONE EDIT VTW > Rotary | No |
| 90 | TONE EDIT VTW ZOOM — MFX Tab | p.63 | Sub-screen | TONE EDIT VTW > MFX | No |
| 91 | TONE EDIT SN-AP Screen | p.63 | Sub-screen | TONE EDIT (SN Piano) | No |
| 92 | TONE EDIT SN-EP Screen | p.63 | Sub-screen | TONE EDIT (SN E.Piano) | No |
| 93 | TONE EDIT JP8 ZOOM Screen (MODEL) | p.65 | Sub-screen | TONE EDIT (Jupiter-8) | No |
| 94 | TONE WRITE Screen | p.63 | Popup | [WRITE] from Tone Edit | No |
| 95 | TONE EDIT Utility Window | p.63 | Popup | TONE EDIT > Utility | No |
| 96 | Partial Init Window | p.63 | Popup | Utility > Partial Init | No |

---

### 04 — Effects & Mixer (pp. 66-78)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 97 | Effects Edit Main Screen | p.66 | Main | MENU > EFFECTS EDIT | No |
| 98 | Effects Edit — INTERNAL Tab | p.67 | Sub-screen | Effects Edit > INTERNAL | No |
| 99 | Effects Edit — Zone Selection | p.67 | Sub-screen | INTERNAL > zone dropdown | No |
| 100 | Effects Edit Zoom — Zone Effects | p.68 | Sub-screen | INTERNAL > zone EDIT | No |
| 101 | Effects Edit Zoom — MFX Zoom/Pro | p.68 | Sub-screen | Zone Effects > MFX EDIT | No |
| 102 | Effects Edit Zoom — Drum Kit Comp | p.69 | Sub-screen | Zone Effects > Drum Comp | No |
| 103 | Effects Edit Zoom — IFX1/IFX2 | p.69 | Sub-screen | EDIT on IFX block | No |
| 104 | Effects Edit Zoom — Chorus/Reverb | p.70 | Sub-screen | EDIT on CHO/REV block | No |
| 105 | Effects Edit Pro — IFX/Chorus/Reverb | p.70 | Sub-screen | "To PRO" from Zoom | No |
| 106 | Effects Edit Zoom — Master FX | p.71 | Sub-screen | EDIT on M.COMP/M.EQ/TFX | No |
| 107 | Effects Edit Pro — M.COMP | p.71 | Sub-screen | "To PRO" from M.COMP | No |
| 108 | Effects Edit Pro — M.EQ | p.71 | Sub-screen | "To PRO" from M.EQ | No |
| 109 | Effects Edit — TFX | p.72 | Sub-screen | Master FX > TFX | No |
| 110 | Effects Edit — AUDIO IN Tab | p.72 | Sub-screen | Effects Edit > AUDIO IN | No |
| 111 | Effects Edit — AUDIO IN Pro | p.73 | Sub-screen | AUDIO IN > Pro Edit | No |
| 112 | Effects Edit — PAD Tab | p.73 | Sub-screen | Effects Edit > PAD | No |
| 113 | Effects Edit — USB Tab | p.74 | Sub-screen | Effects Edit > USB | No |
| 114 | Effects Edit — CLICK Tab | p.74 | Sub-screen | Effects Edit > CLICK | No |
| 115 | Effects Edit — OUTPUT Tab | p.74 | Sub-screen | Effects Edit > OUTPUT | No |
| 116 | Mixer Screen — 8 Zone View | p.75 | Main | MENU > MIXER / [SHIFT]+[PAN/LEVEL] | No |
| 117 | Mixer Screen — 16 Zone View | p.75 | Main | Mixer > 16 zone toggle | No |
| 118 | Mixer Screen — OUT/USB View | p.75 | Main | Mixer > OUT/USB tab | No |
| 119 | Mixer — Zone EQ Popup | p.75 | Popup | Mixer > zone EQ icon | No |
| 120 | Scene Chain Screen (View Mode) | p.76 | Main | [CHAIN] button | No |
| 121 | Scene Chain Screen (Performance Mode) | p.76 | Main | Scene Chain > perform | No |
| 122 | Scene Chain Set Select Popup | p.76 | Popup | Touch set selector | No |
| 123 | Scene Chain Utility Popup | p.77 | Popup | Scene Chain > Utility | No |
| 124 | Scene Chain Edit Screen | p.78 | Sub-screen | Scene Chain > EDIT | No |
| 125 | Scene Chain Edit — Scene Select Popup | p.78 | Popup | Touch scene slot in edit | No |

---

### 05 — Sampler (pp. 79-102)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 126 | SAMPLING MENU | p.79 | Main | MENU > Sampling Menu | No |
| 127 | SAMPLING STANDBY — To KBD | p.80 | Main | Sampling Menu > To Keyboard | No |
| 128 | NOW SAMPLING — To KBD (Recording) | p.80 | Main | Start recording (KBD) | No |
| 129 | "Use New Sample?" Dialog | p.80 | Popup | After KBD sampling | No |
| 130 | KBD SAMPLE WAVE EDIT | p.81 | Sub-screen | After sampling / from list | No |
| 131 | SAMPLING STANDBY — To Storage | p.83 | Main | Sampling Menu > To Storage | No |
| 132 | File Created Dialog (Storage) | p.83 | Popup | After storage sampling | No |
| 133 | IMPORT SAMPLE TO KBD — Select Source | p.84 | Sub-screen | Sampling Menu > Import > KBD | No |
| 134 | IMPORT SAMPLE TO KBD — Setting | p.84 | Sub-screen | After source select | No |
| 135 | IMPORT SAMPLE TO MULTISAMPLE — Select | p.85 | Sub-screen | Import > Multisample | No |
| 136 | IMPORT SAMPLE TO MULTISAMPLE — Setting | p.85 | Sub-screen | After source select | No |
| 137 | Imported Sample List | p.85 | Sub-screen | After import | No |
| 138 | MULTISAMPLE EDIT | p.86 | Sub-screen | Edit multisample | No |
| 139 | MULTISAMPLE EDIT PRO | p.86 | Sub-screen | "To PRO" from Edit | No |
| 140 | MULTISAMPLE MANAGER | p.87 | Sub-screen | Manager button | No |
| 141 | MULTISAMPLE UTILITY Popup | p.87 | Popup | Manager > Utility | No |
| 142 | KBD SAMPLE LIST | p.88 | Sub-screen | Sample list view | No |
| 143 | KBD SAMPLE LIST — Parameter | p.89 | Sub-screen | List > parameter view | No |
| 144 | KBD SAMPLE WAVE EDIT (from list) | p.89 | Sub-screen | List > Wave Edit | No |
| 145 | KBD SAMPLE UTILITY Popup | p.89 | Popup | List > Utility | No |
| 146 | SAMPLE MODIFY Popup | p.89 | Popup | List > Modify | No |
| 147 | MULTISAMPLE VIEW | p.90 | Sub-screen | View multisample | No |
| 148 | WAVE/EXPANSION MEMORY INFO | p.91 | Main | UTILITY > Info | No |
| 149 | EXPANSION INFO | p.91 | Sub-screen | Info > Expansion | No |
| 150 | IMPORT SAMPLE — Select File | p.92 | Sub-screen | Import sample browser | No |
| 151 | IMPORT SAMPLE — Select Source | p.92 | Sub-screen | After file select | No |
| 152 | IMPORT SAMPLE — Select Destination | p.92 | Sub-screen | After source select | No |
| 153 | PAD BANK | p.93 | Sub-screen | Sample Pad > bank | No |
| 154 | SAMPLE PAD | p.93 | Main | PAD MODE > Sample Pad | No |
| 155 | SAMPLING DESTINATION — PAD | p.97 | Sub-screen | Sampling > To Pad | No |
| 156 | SAMPLING STANDBY — To Pad | p.96 | Main | Pad sampling standby | No |
| 157 | PAD SAMPLE IMPORT (File Browser) | p.97 | Sub-screen | Sample Pad > Import | No |
| 158 | SAMPLE IMPORT — Select Destination | p.97 | Sub-screen | After import source | No |
| 159 | SAMPLE PAD — QUICK EDIT | p.99 | Sub-screen | Sample Pad > Quick Edit | No |
| 160 | WAVE EDIT (Pad Sample) | p.99 | Sub-screen | Sample Pad > Wave Edit | No |
| 161 | SAMPLE UTILITY Popup (from SAMPLE PAD) | p.100 | Popup | Sample Pad > Utility | No |
| 162 | SAMPLE UTILITY Popup (from WAVE EDIT) | p.100 | Popup | Wave Edit > Utility | No |

---

### 06 — Pads & Sequencer (pp. 103-140)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 163 | PAD MODE Selection Screen | p.104 | Popup | [PAD MODE] button | No |
| 164 | Sample Pad Screen | p.104 | Main | PAD MODE > Pad 1 | No |
| 165 | Note Pad Screen | p.104 | Main | PAD MODE > Pad 2 | No |
| 166 | Note Pad Edit Screen | p.105 | Sub-screen | Note Pad > select pad | No |
| 167 | Partial Sw/Select Screen | p.105 | Main | PAD MODE > Pad 3 | No |
| 168 | DAW Control Screen | p.105 | Main | PAD MODE > Pad 4 | No |
| 169 | Zone Mute Screen | p.106 | Main | PAD MODE > Pad 5 | No |
| 170 | Zone Solo Screen | p.106 | Main | PAD MODE > Pad 6 | No |
| 171 | KBD SW GRP SELECT Screen | p.106 | Main | PAD MODE > Pad 7 | No |
| 172 | KBD SW GRP EDIT Screen | p.106 | Sub-screen | GRP SELECT > Edit | No |
| 173 | Rhythm Pattern Screen (via Pads) | p.107 | Main | PAD MODE > Pad 8 | No |
| 174 | Pattern Select Screen (PAD PATTERN) | p.107 | Main | PAD MODE > Pad 9 | No |
| 175 | PAD AREA SELECT | p.107 | Sub-screen | [SHIFT]+[PAD MODE] in Pattern | No |
| 176 | Variation Play (via Pads) | p.107 | Main | PAD MODE > Pad 10 | No |
| 177 | Group Play (via Pads) | p.107 | Main | PAD MODE > Pad 11 | No |
| 178 | PATTERN Screen — 8 Track View | p.110 | Main | [PATTERN] button | No |
| 179 | PATTERN Screen — 16 Track View | p.111 | Main | Pattern > 16Tr toggle | No |
| 180 | Pattern Box States | p.111 | Reference | Visual reference | — |
| 181 | LOOP SETTING Screen | p.112 | Sub-screen | Pattern > Loop | No |
| 182 | Tempo Screen (Sequencer) | p.113 | Popup | [TEMPO] in sequencer | No |
| 183 | MUTE SELECT Screen | p.113 | Sub-screen | Pattern > Mute | No |
| 184 | SOLO SELECT Screen | p.114 | Sub-screen | Pattern > Solo | No |
| 185 | GROUP Screen | p.114 | Main | [GROUP] button | No |
| 186 | GROUP PREVIEW Screen | p.114 | Popup | Group > Preview | No |
| 187 | SONG Screen | p.115 | Main | [SONG] button | No |
| 188 | SONG Screen — Measure View | p.115 | Main | Song > MEAS toggle | No |
| 189 | REC STANDBY Screen (Realtime) | p.117 | Main | [REC] button | No |
| 190 | Track/Pattern Selection View | p.117 | Sub-screen | REC STANDBY > track select | No |
| 191 | REALTIME RECORDING Screen | p.118 | Main | Start realtime recording | No |
| 192 | REALTIME ERASE Screen | p.119 | Main | Erase during recording | No |
| 193 | REC STANDBY — Step REC | p.120 | Main | REC STANDBY > STEP tab | No |
| 194 | STEP RECORDING Screen | p.120 | Main | Start step recording | No |
| 195 | TR-REC Screen (Tone view) | p.121 | Main | REC STANDBY > TR-REC tab | No |
| 196 | TR-REC Screen (Drum Kit view) | p.121 | Main | TR-REC w/ drum kit tone | No |
| 197 | EDIT SELECT Popup | p.123 | Popup | PTN UTILITY > EDIT | No |
| 198 | PIANO ROLL Screen (Note Editing) | p.123 | Main | Edit Select > Piano Roll | No |
| 199 | PIANO ROLL Screen (Automation) | p.124 | Main | Piano Roll > automation tab | No |
| 200 | MICROSCOPE Screen | p.126 | Main | Edit Select > Microscope | No |
| 201 | PTN UTILITY Screen | p.126 | Main | Pattern > Utility | No |
| 202 | DELETE MENU Popup | p.127 | Popup | PTN UTILITY > DELETE | No |
| 203 | UNDO/REDO Indicator | p.127 | Overlay | After edit operation | No |
| 204 | RENAME Screen (Pattern) | p.127 | Overlay | PTN UTILITY > RENAME | No |
| 205 | MODIFY MENU Popup | p.128 | Popup | PTN UTILITY > MODIFY | No |
| 206 | QUANTIZE Screen | p.128 | Sub-screen | Modify > Quantize | No |
| 207 | ERASE Screen | p.129 | Sub-screen | Modify > Erase | No |
| 208 | TRANSPOSE Screen | p.129 | Sub-screen | Modify > Transpose | No |
| 209 | CHANGE VELOCITY Screen | p.129 | Sub-screen | Modify > Change Velocity | No |
| 210 | CHANGE DURATION Screen | p.130 | Sub-screen | Modify > Change Duration | No |
| 211 | SHIFT CLOCK Screen | p.130 | Sub-screen | Modify > Shift Clock | No |
| 212 | SMF IMPORT Screen (Browser) | p.130 | Sub-screen | PTN UTILITY > IMPORT | No |
| 213 | SMF IMPORT Detail Screen | p.130 | Sub-screen | After SMF file select | No |
| 214 | SEQ EXPORT Screen | p.130 | Sub-screen | PTN UTILITY > EXPORT | No |
| 215 | INCLUDE PARAMETERS Popup | p.130 | Popup | SEQ EXPORT workflow | No |
| 216 | EXPORT DESTINATION Screen | p.131 | Sub-screen | After export params | No |
| 217 | EXPORT SOURCE Popup | p.130 | Popup | SEQ EXPORT workflow | No |
| 218 | GROUPING Screen | p.132 | Main | Group > Grouping | No |
| 219 | GROUP PREVIEW Screen (detailed) | p.134 | Popup | Group > Preview | No |
| 220 | GROUP Screen (detailed) | p.134 | Main | [GROUP] button | No |
| 221 | GROUP UTILITY Screen | p.134 | Popup | Group > Utility | No |
| 222 | MAKE SONG Screen | p.135 | Main | Group Utility > Make Song | No |
| 223 | SONG Screen (detailed) | p.136 | Main | [SONG] button | No |
| 224 | SONG Screen — SKIP Mode | p.136 | Main | Song > Skip toggle | No |
| 225 | SONG EDIT Screen | p.136 | Sub-screen | Song > EDIT | No |
| 226 | SONG EDIT — MOVE Screen | p.136 | Sub-screen | Song Edit > MOVE | No |
| 227 | SONG EDIT — COPY Screen | p.137 | Sub-screen | Song Edit > COPY | No |
| 228 | SONG EDIT — LOOP Screen | p.137 | Sub-screen | Song Edit > LOOP | No |
| 229 | Repeat Settings (Song Edit) | p.138 | Sub-screen | Song Edit > Repeat | No |
| 230 | SMF CONTROL Screen | p.139 | Main | SMF playback | No |
| 231 | SMF SELECT Screen | p.139 | Sub-screen | SMF Control > Select | No |
| 232 | MUTE SELECT (SMF Player) | p.140 | Sub-screen | SMF Control > Mute | No |
| 233 | SOLO SELECT (SMF Player) | p.140 | Sub-screen | SMF Control > Solo | No |

---

### 07 — System & Settings (pp. 141-173)

| # | Screen Name | Page | Type | Accessed Via | Impl? |
|---|-------------|------|------|-------------|-------|
| 234 | SYSTEM — USB Tab | p.142 | Sub-screen | SYSTEM > USB | No |
| 235 | EFFECTS EDIT — AUDIO IN Tab (Vocoder) | p.146 | Sub-screen | Effects Edit > AUDIO IN | No |
| 236 | EFFECTS EDIT ZOOM — Input FX | p.147 | Sub-screen | AUDIO IN > FX Zoom | No |
| 237 | VOCODER ZONE SELECT | p.148 | Sub-screen | Vocoder settings | No |
| 238 | VOCODER EDIT | p.149 | Sub-screen | Vocoder > Edit | No |
| 239 | Voice Character Control Popup | p.149 | Popup | Vocoder Edit > Character | No |
| 240 | VOCODER SETTING WRITE | p.150 | Popup | Vocoder > Write | No |
| 241 | UTILITY MENU | p.158 | Main | MENU > UTILITY | No |
| 242 | IMPORT TONE — Select File | p.152 | Sub-screen | UTILITY > Import > Tone | No |
| 243 | IMPORT TONE — Select Source | p.153 | Sub-screen | After file select | No |
| 244 | IMPORT TONE — Select Destination | p.153 | Sub-screen | After source select | No |
| 245 | IMPORT SCENE — Select File | p.153 | Sub-screen | UTILITY > Import > Scene | No |
| 246 | IMPORT SCENE — Select Source | p.154 | Sub-screen | After file select | No |
| 247 | IMPORT SCENE — Select Destination | p.154 | Sub-screen | After source select | No |
| 248 | IMPORT SAMPLE — Select File (Utility) | p.154 | Sub-screen | UTILITY > Import > Sample | No |
| 249 | IMPORT SAMPLE — Select Source (Utility) | p.154 | Sub-screen | After file select | No |
| 250 | IMPORT SAMPLE — Select Destination (Utility) | p.155 | Sub-screen | After source select | No |
| 251 | EXPORT MENU | p.155 | Sub-screen | UTILITY > Export | No |
| 252 | EXPORT TONE — Select Source | p.155 | Sub-screen | Export > Tone | No |
| 253 | EXPORT TONE — Select Destination | p.155 | Sub-screen | After source select | No |
| 254 | EXPORT SCENE — Select Source | p.156 | Sub-screen | Export > Scene | No |
| 255 | EXPORT SCENE — Select Destination | p.156 | Sub-screen | After source select | No |
| 256 | EXPORT SAMPLE — Select Source | p.157 | Sub-screen | Export > Sample | No |
| 257 | EXPORT SAMPLE — Select Destination | p.157 | Sub-screen | After source select | No |
| 258 | BACKUP Screen | p.158 | Main | UTILITY > Backup | No |
| 259 | RESTORE Screen | p.159 | Main | UTILITY > Restore | No |
| 260 | WALLPAPER Screen | p.161 | Main | UTILITY > Wallpaper | No |
| 261 | USB MEMORY FORMAT Screen | p.160 | Sub-screen | UTILITY > USB Format | No |
| 262 | FACTORY RESET Screen | p.160 | Main | UTILITY > Factory Reset | No |
| 263 | INTERNAL STORAGE INITIALIZE | p.160 | Main | UTILITY > Initialize | No |
| 264 | USB Memory Unmount Popup | p.160 | Popup | UTILITY > Unmount | No |
| 265 | FILE UTILITY Screen | p.162 | Main | MENU > FILE UTILITY | No |
| 266 | FILE UTILITY — RENAME | p.162 | Sub-screen | File Utility > Rename | No |
| 267 | FILE UTILITY — DELETE Confirm | p.162 | Popup | File Utility > Delete | No |
| 268 | FILE UTILITY — COPY Destination | p.163 | Sub-screen | File Utility > Copy | No |
| 269 | FILE UTILITY — MOVE Destination | p.163 | Sub-screen | File Utility > Move | No |
| 270 | FILE UTILITY — CREATE FOLDER | p.163 | Sub-screen | File Utility > Create | No |
| 271 | SYSTEM Screen (Main — 17 tabs) | p.164 | Main | MENU > SYSTEM | No |
| 272 | SYSTEM — GENERAL Tab | p.164 | Sub-screen | SYSTEM > General | No |
| 273 | SYSTEM — KEYBOARD Tab | p.165 | Sub-screen | SYSTEM > Keyboard | No |
| 274 | SYSTEM — PEDAL Tab | p.165 | Sub-screen | SYSTEM > Pedal | No |
| 275 | SYSTEM — WHEEL 1/2 Tab | p.166 | Sub-screen | SYSTEM > Wheel | No |
| 276 | SYSTEM — S1/S2 Tab | p.166 | Sub-screen | SYSTEM > S1/S2 | No |
| 277 | SYSTEM — SLIDER Tab | p.167 | Sub-screen | SYSTEM > Slider | No |
| 278 | SYSTEM — KNOB Tab | p.167 | Sub-screen | SYSTEM > Knob | No |
| 279 | SYSTEM — USB Tab (Audio) | p.167 | Sub-screen | SYSTEM > USB | No |
| 280 | SYSTEM — MIDI Tab | p.168 | Sub-screen | SYSTEM > MIDI | No |
| 281 | SYSTEM — SOUND Tab | p.168 | Sub-screen | SYSTEM > Sound | No |
| 282 | SYSTEM — SYNC/TEMPO Tab | p.169 | Sub-screen | SYSTEM > Sync/Tempo | No |
| 283 | SYSTEM — SEQUENCER Tab | p.169 | Sub-screen | SYSTEM > Sequencer | No |
| 284 | SYSTEM — CLICK Tab | p.169 | Sub-screen | SYSTEM > Click | No |
| 285 | SYSTEM — NOTE PAD Tab | p.170 | Sub-screen | SYSTEM > Note Pad | No |
| 286 | SYSTEM — CONTROL Tab | p.170 | Sub-screen | SYSTEM > Control | No |
| 287 | SYSTEM — LICENSE Tab | p.170 | Sub-screen | SYSTEM > License | No |
| 288 | SYSTEM — INFO Tab | p.170 | Sub-screen | SYSTEM > Info | No |
| 289 | Time Stamp Popup | p.164 | Popup | SYSTEM operations | No |
| 290 | EXPANSION Screen | p.171 | Main | Boot-time access | No |
| 291 | Expansion Install Confirmation | p.171 | Popup | Expansion > Install | No |
| 292 | Expansion Uninstall Confirmation | p.171 | Popup | Expansion > Uninstall | No |
| 293 | Expansion Optimize Confirmation | p.172 | Popup | Expansion > Optimize | No |
| 294 | Expansion Remove License Confirm | p.172 | Popup | Expansion > Remove | No |
| 295 | Expansion Tone Selection | p.172 | Sub-screen | Tone List > Expansion | No |
| 296 | TONE EDIT SN-AP (Expansion) | p.172 | Sub-screen | Tone Edit > SN-AP | No |
| 297 | TONE EDIT SN-EP (Expansion) | p.172 | Sub-screen | Tone Edit > SN-EP | No |
| 298 | TONE EDIT JP8 ZOOM — Model | p.173 | Sub-screen | Tone Edit > Model | No |

---

## Screen Type Distribution

| Type | Count |
|------|-------|
| Main screen | ~55 |
| Sub-screen | ~140 |
| Popup / overlay | ~60 |
| Reference / visual | ~3 |

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
