# Validation Spot-Check: 10 Catalog Entries vs. Actual PDF

> **How to use this file**: For each entry, compare the "MY CATALOG CLAIM" section against
> the "WHAT THE PDF ACTUALLY SHOWS" section. Flag any discrepancies as PASS / FAIL / PARTIAL.
>
> **PDF**: `FANTOM-06_07_08_Reference_eng01_W.pdf` (iCloud mirror)
>
> To do your own spot-checks beyond these 10, pick any entry from `screen-catalog.md`,
> look up its page number, and open that page in the PDF.

---

## Test 1: SCENE SELECT Screen (p.15) — Chapter 01

### MY CATALOG CLAIM
- **Screen Name**: SCENE SELECT Screen
- **Page**: p.15
- **Type**: Main screen (top-level navigation hub)
- **Accessed Via**: [SCENE SELECT] button; or press [EXIT] repeatedly; default on power-on
- **Layout**: 4x4 grid of scene slots, status bar with tempo/time sig, FUNCTION knobs E1-E6 at bottom
- **Key Elements**: Scene name (A001:INITIAL SCENE), 16 tiles, page nav arrows, hamburger menu icon
- **Implemented?**: Yes (as `home`)

### WHAT THE PDF ACTUALLY SHOWS (p.15)
- Header: "SCENE SELECT Screen" (exact match)
- Screenshot shows: "A001:INITIAL SCENE" with 16 scene tiles in 4x4 grid (A001-A016, all "INITIAL SCENE")
- Annotations: "Opens a menu" (hamburger), "Touch to move between screens" (top tabs), "Touch to select a scene" (grid), "Switches to the next (previous) page" (arrows), "This shows information about the parameters that you can control using knobs [E1]-[E6]" (bottom bar)
- E1-E6 shown: Portamento Time, LFO1 Rate, LFO1 Amp Depth, LFO2 Rate, LFO3 Rate, Filter Env Depth (with value 0, +32 visible)
- Status bar: 4/4, J=120.00, 001-01-000, STOP, SAMPLE PAD

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong (describe what's wrong)
> [ ] PARTIAL — Mostly right with minor differences (describe)

**Notes for reviewer**:

---

## Test 2: RENAME Screen (p.16) — Chapter 01

### MY CATALOG CLAIM
- **Screen Name**: RENAME Screen
- **Page**: p.16
- **Type**: Popup / overlay
- **Layout**: Full overlay with QWERTY virtual keyboard, text input field, Shift key, !@#$ toggle, Space, Back Space, Clear All, < > arrows, CANCEL / OK
- **Implemented?**: No

### WHAT THE PDF ACTUALLY SHOWS (p.16)
- Header: "RENAME Screen" (exact match)
- Screenshot shows: Full-screen overlay over Scene Select
- Top: "A001:INITIAL SCENE" with text input field
- Virtual keyboard: Number row (1-0), QWERTY row (q-p), ASDF row (a-l) with Shift on left, ZXCV row (z-m), bottom row with "!@#$" key, Space bar, < > arrows, "Back Space", "Clear All"
- Bottom: CANCEL and OK buttons
- Annotations: "Touch to enter characters", "Cancel.", "Confirm."

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**:

---

## Test 3: Scene Search / Rating (p.29) — Chapter 02

### MY CATALOG CLAIM
- **Screen Name**: Scene Search — Keyboard Entry (p.29)
- **Type**: Overlay
- **Accessed Via**: Touch search icon on Scene Select
- Also claimed: Scene Rating Edit (p.29), Scene Rating Filter (p.29)

### WHAT THE PDF ACTUALLY SHOWS (p.29)
- Section header: "Scene Search Function" > "Searching by text string"
- Step 1: "In the SCENE SELECT screen, touch the search symbol" — screenshot shows search icon (magnifying glass) annotated as "Search symbol"
- Step 2: "The keyboard screen appears" — screenshot shows full QWERTY keyboard overlay (same as RENAME screen) with "512 HIT" counter and "SONG/PTN" button at bottom
- Step 3: "Enter text and select [E6] OK. Only the scenes containing the text you entered are shown." — screenshot shows filtered results (A012, A088, A091, A094, B014, B055, B067)
- Section: "Searching by rating" > "Adding a rating"
  - Step 1: "select the scene... touch <EDIT>" — screenshot shows EDIT button highlighted
  - Step 2: "Turn the [E4] Scene Rating knob to assign a rating. You can assign a rating in three levels (star symbols)"
  - Step 3: "touch <WRITE>" to save
- Section: "Searching for a rated scene"
  - Step 1: "touch the rating symbol" — annotated screenshot shows "Rating symbol" (star icon)
  - Result: "Only the scenes to which a rating is assigned are shown" — screenshot shows filtered view with A001-A004 only

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: My catalog claimed "Scene Rating Edit" and "Scene Rating Filter" as separate screens. The PDF shows they're really modes/states of the same Scene Select screen, not separate screens. Check if you consider this a meaningful distinction.

---

## Test 4: MOTIONAL PAD Screen (p.50-51) — Chapter 03

### MY CATALOG CLAIM
- **Screen Name**: MOTIONAL PAD Screen (p.50), MOTIONAL PAD ZONE SELECT (p.50), MOTIONAL PAD Tone List (p.51), MOTIONAL PAD EDIT (p.51)
- **Type**: Main screen / Sub-screens
- **Accessed Via**: [MOTIONAL PAD] button
- **Layout**: XY pad with 4 tone zones in corners, pointer in center, EDIT/AUTO/HOLD buttons

### WHAT THE PDF ACTUALLY SHOWS (p.50-51)

**p.50 — "Using the Motional Pad"**:
- Title: "Simultaneously Modifying the Volume of Multiple Zones (Motional Pad)"
- Step 1: "Press the [MOTIONAL PAD] button. The MOTIONAL PAD screen appears."
- Screenshot: Shows XY pad with 4 corner zones labeled "ZONE" with zone numbers, a center "Pointer", and buttons: EDIT, MOTIONAL PAD (toggle), AUTO, HOLD, EXIT
- Menu table: <EDIT> = "Moves to the edit screen", <MOTIONAL PAD> = toggle on/off, <AUTO> = auto movement, <HOLD> = hold pointer position, [EXIT] = return
- Step 2: "While holding down a key, drag the circle (pointer) in the center of the screen to move it"

**p.50 — "Editing the Motional Pad Settings" > "Changing the Assigned Zones"**:
- Step 2: "Touch one of the <ZONE> areas located in the four corners"
- Screenshot: Shows 4 corner areas labeled Area1-Area4
- "The MOTIONAL PAD ZONE SELECT screen appears"
- Screenshot: Shows "MOTIONAL PAD ZONE SELECT" with numbered grid (1-16) for zone selection

**p.51 — "Switching the Tone Assigned to a Zone"**:
- Step 2: "Touch one of the tone names in the areas located in the four corners"
- "The TONE LIST screen appears" — shows tone browser (TONE LIST with categories, preset list)

**p.51 — "Other Settings for Motional Pad"**:
- Step 2: "Touch <EDIT>. The MOTIONAL PAD EDIT screen appears."
- Screenshot: Shows "MOTIONAL PAD EDIT" with parameter list: Motional Pad Cross Fade Range, Area1-4 Min/Max values
- Parameters: Cross Fade Range (0-127), Area1-4 Min (0-127), Area1-4 Max (0-127)

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: All 4 sub-screens confirmed in the PDF. Check my layout descriptions against the screenshots.

---

## Test 5: Effects Edit Main Screen (p.66-67) — Chapter 04

### MY CATALOG CLAIM
- **Screen Name**: Effects Edit Main Screen (p.66)
- **Type**: Main screen
- **Accessed Via**: [MENU] > EFFECTS EDIT
- **Layout**: Full-screen routing overview with 6 tabs (INTERNAL, AUDIO IN, PAD, USB, CLICK, OUTPUT), block-diagram effects chain, zone selector, SERIAL/PARALLEL toggle
- Also claimed: Effects Edit Zoom — Zone Effects, MFX Zoom, Drum Kit Comp, IFX, etc.

### WHAT THE PDF ACTUALLY SHOWS (p.66-67)

**p.66 — "Basic Procedure for Effect Editing"**:
- Signal flow diagram: ZONE1-16 → TONE → MFX → ZONE EQ → (IFX1, IFX2) → Master Comp → Master EQ → TFX → Output, with Chorus/Reverb branching, Drum Kit Comp zone
- Step 1: "Press the [MENU] button"
- Step 2: "Touch <EFFECTS EDIT>. The EFFECTS EDIT screen appears."
- Screenshot: Shows "EFFECTS EDIT" with tabs: INTERNAL, AUDIO IN, PAD, USB, CLICK, OUTPUT
- Shows routing blocks: ZONE dropdown, MFX, MAIN, IFX1, IFX2, CHORUS, REVERB (each with EDIT), MASTER FX section (M.COMP, M.EQ, TFX with EDIT), SERIAL dropdown, DRUM KIT COMP indicator
- Tab descriptions table: INTERNAL/AUDIO IN/PAD/USB/CLICK/OUTPUT with explanations

**p.67 — "Editing the Effects of Each Zone"**:
- Shows INTERNAL tab with zone selection and EDIT buttons
- "Zoom edit on effect screens": Screenshot shows "MFX EDIT ZOOM" with "To PRO" toggle, EQ section with Low/Mid/Mid2/High Gain knobs, frequency/Q parameters
- "ZONE EFFECTS" section: Screenshot shows zone effects overview with Gain, Send levels
- "DRUM KIT COMP": Screenshot shows 6 compressors for drum kit
- "EFFECT PRO EDIT": Screenshot shows list-based parameter editing (PRO Edit)

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: Verify the 6 tabs match exactly. Check if I missed any sub-screens from these two pages.

---

## Test 6: MULTISAMPLE EDIT / MANAGER (p.86-87) — Chapter 05

### MY CATALOG CLAIM
- **Screen Name**: MULTISAMPLE EDIT (p.86), MULTISAMPLE EDIT PRO (p.86), MULTISAMPLE MANAGER (p.87)
- **Type**: Sub-screens
- **Key Elements (EDIT)**: Area bar, keyboard display area, waveform display, area list, To PRO toggle, E1-E6 knob assignments
- **Key Elements (MANAGER)**: KBD Sample List, checkboxes, WRITE/RELOAD/MODIFY/UTILITY buttons

### WHAT THE PDF ACTUALLY SHOWS (p.86-87)

**p.86 — MULTISAMPLE EDIT screen**:
- Screenshot labeled with: "Displays when the multisample is edited", "Multisample name", "Shows the sample's original key", "Area bar", "Keyboard display area", "Waveform display area", "Area list"
- Menu table: [E1] = keyboard scale/scroll, [E2] To Pro/To Zoom, [E3] shift samples, [E4] shift sample left/right, [E5] shift bottom note, [E6] shift top note, <WRITE>, <MANAGER>, <UTILITY>
- Continuation shows MULTISAMPLE EDIT PRO screen with same area bar + keyboard but list-based parameters below
- PRO menu: [E1] scale, [E2] PREVIEW, [E3] scroll, [E4] WAVE EDIT, [E5] NO ASSIGN, [E6] ASSIGN, <WRITE>, <RELOAD>, <MODIFY>, <UTILITY>

**p.87 — MULTISAMPLE MANAGER**:
- Title: "Managing Samples for Key Areas (MULTISAMPLE MANAGER)"
- Screenshot: Shows "MULTISAMPLE MANAGER" with WRITE/RELOAD/MODIFY/UTILITY buttons, "Multi Select: [SHIFT] + Touch checkbox", "KBD Sample List" annotated
- List shows: 0001 A_Syn4_C3, 0002 A_Syn4_F3, 0003 A_Syn4_G2 with ONE-SHOT type, key assignments, level values
- Area bar and keyboard at bottom
- Menu: [E1] scale, [E2] PREVIEW, [E3] scroll, [E4] WAVE EDIT, [E5] NO ASSIGN, [E6] ASSIGN
- MEMO: "You can select more than one sample in the Sample List... by tapping the check boxes"

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: Check if the E1-E6 assignments match between my chapter 05 file and the PDF.

---

## Test 7: PAD MODE / Note Pad / Zone Mute (p.104-106) — Chapter 06

### MY CATALOG CLAIM
- **PAD MODE Selection** (p.104): 4x4 grid of pad mode icons, 12 modes (Sample Pad, Note Pad, Partial Sw/Sel, DAW Control, Zone Mute, Zone Solo, Kbd Sw Group, Rhythm Pattern, Pattern, Variation Play, Group Play, System), EDIT checkbox, CLOSE button
- **Note Pad** (p.104): 16 note pads showing zone/note/velocity, keyboard illustration, SELECT/SYSTEM WRITE
- **Zone Mute** (p.106): 16 zone slots in 4x4 grid showing On/Off status

### WHAT THE PDF ACTUALLY SHOWS (p.104-106)

**p.104 — PAD MODE screen**:
- Title: "Assigning Convenient Functions to the Pads (PAD MODE)"
- Screenshot shows popup: "PAD MODE" title with X close, "Press the pads to select."
- Grid shows: Sample Pad (1), Note Pad (2), Partial Sw/Sel (3), DAW Control (4), Zone Mute (5), Zone Solo (6), Kbd Sw Group (7), Rhythm Pattern (8), Pattern (9), Variation Play (10), Group Play (11), System (16)
- Bottom: EDIT checkbox (left), CLOSE button (right)
- Table: Pad [1]-[11] and [16] with functions listed

**p.104 — SAMPLE PAD**:
- Screenshot: "SAMPLE PAD" with BANK1-4 buttons, SAMPLING/SAMPLE UTILITY buttons, 16 pad grid (each showing GATE/LOOP type, size, STEREO), bottom: WAVE EDIT, QUICK EDIT, IMPORT

**p.104 — NOTE PAD**:
- Screenshot: "NOTE PAD" with keyboard illustration, 16 pads showing: pad number, instrument name (LD Kick 1, LD Crs Stk, LD Snr, etc.), zone (ZONE10), note (36(C 2)), velocity (100)
- Bottom: SELECT, SYSTEM WRITE
- Menu: [E1] select pad, [E3] SYSTEM WRITE, [E4] zone, [E5] note number, [E6] velocity

**p.106 — ZONE MUTE**:
- Screenshot: "ZONE MUTE" title, 4x4 grid of Zone1-Zone16 with On/Off labels
- "You can mute multiple zones simultaneously. The pad number corresponds to the zone number."

**p.106 — ZONE SOLO**:
- Screenshot: "ZONE SOLO" title, 4x4 grid of Zone1-Zone16 with Off labels
- "You can't solo multiple zones."

**p.106 — KBD SW GRP SELECT/EDIT**:
- SELECT: 4x4 grid of Group1-16 with colored zone status icons, EDIT/EXIT buttons
- EDIT: "KBD SW GROUP 2" title, 4x4 grid ZONE1-16 with On/Off, EXIT button

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: This is a dense set of screens on just 3 pages. Verify all mode names match, and that I got the pad-to-function mapping right.

---

## Test 8: PIANO ROLL / Automation (p.123-124) — Chapter 06

### MY CATALOG CLAIM
- **PIANO ROLL** (p.123): Note grid, velocity lane, tools: DRAW/MOVE/DURATION/UNDO/ERASE/COPY
- **PIANO ROLL — Automation** (p.124): CC/performance data view with cursor/pencil/ruler tools
- **EDIT SELECT Popup** (p.123): Choose between PIANO ROLL and MICROSCOPE
- **Accessed Via**: PATTERN screen > [E3] EDIT

### WHAT THE PDF ACTUALLY SHOWS (p.123-124)

**p.123 — "Using the Piano Roll to Edit a Pattern"**:
- Step 1: "In the PATTERN screen, select the pattern... and then select the [E3] EDIT."
- "The EDIT SELECT screen appears" — screenshot shows popup with "EDIT SELECT" title, buttons: "PATTERN SETTING" label, "PIANO ROLL" and "MICROSCOPE" buttons, X close
- "DON'T SHOW AGAIN" checkbox mentioned in MEMO
- Step 2: "Select <PIANO ROLL>. The PIANO ROLL screen appears."
- Screenshot: Shows piano roll grid with "Automation" tab at top, notes displayed as colored bars, "VELOCITY" section below
- Bottom toolbar: DRAW, MOVE, DURATION, (UNDO icon), ERASE, COPY buttons
- Bottom bar: Duration 00-00-120, Velocity 64, Zoom H 100%, Zoom V 100%, Length 1, Grid 1/4
- Menu table: Selecting a note, <VELOCITY>, <DRAW>, <MOVE>, <DURATION>, <UNDO>/<REDO>, <ERASE>, <COPY>, [E1] Duration, [E2] Velocity, [E3] Zoom H, [E4] Zoom V, [E5] Length, [E6] Grid

**p.124 — "Automation Added to Piano Roll"**:
- Step 1: "Select the pattern to edit on the PATTERN screen and press [E3] EDIT"
- Shows EDIT SELECT popup again (same as above)
- Step 2: "Touch <PIANO ROLL> to select."
- Step 3: "Touch (Automation icon). The automation view is displayed."
- Screenshot: Shows automation lane with lines/dots, bottom toolbar changes to: TARGET/MODULATION(CC01), MODE/POINT buttons, plus DRAW, ALL ERASE, (empty), ZOOM ADJUST
- Tools described: Cursor (tap/drag), Pencil (tap/drag), Ruler (tap/drag)
- TARGET list: MODULATION (CC01), VOLUME (CC07), PAN (CC10), EXPRESSION (CC11), GENERAL-1 to 4, HOLD (CC64), RESONANCE (CC71), CUTOFF (CC74), CHANNEL AFTERTOUCH, PITCH BEND
- MODE: POINT vs LINE

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: My catalog said tools were "DRAW/MOVE/DURATION/REDO/ERASE/COPY" — check if it's UNDO or REDO (PDF shows UNDO/REDO). Also check the automation toolbar buttons.

---

## Test 9: UTILITY MENU / BACKUP / RESTORE (p.158-159) — Chapter 07

### MY CATALOG CLAIM
- **UTILITY MENU** (p.158): Grid of 10 large touch buttons in two columns
- **BACKUP** (p.158): "Backup Name" field, INCLUDE PAD SAMPLE / INCLUDE KBD SAMPLE checkboxes, RENAME/CANCEL/OK
- **RESTORE** (p.159): File list, APPLY PAD SAMPLE / APPLY KBD SAMPLE checkboxes, CANCEL/RESTORE

### WHAT THE PDF ACTUALLY SHOWS (p.158-159)

**p.158 — UTILITY MENU**:
- Step 2: "Touch <UTILITY>. The UTILITY screen appears."
- Screenshot: "UTILITY MENU" with back arrow, two columns:
  - Left: WAVE/EXPANSION INFO, IMPORT, EXPORT, BACKUP, RESTORE, WALLPAPER
  - Right: USB MEMORY FORMAT, FACTORY RESET, INTERNAL STORAGE INITIALIZE, USB MEMORY UNMOUNT
- Table: 10 items with explanations (exact match to my catalog)

**p.158 — BACKUP**:
- Step 1: "touch <BACKUP>. The BACKUP screen appears."
- Screenshot: "BACKUP" title, "Backup Name: MyBackup", "Writes the backup data to USB memory."
- Bottom bar: [E1] RENAME, [E2] INCLUDE PAD SAMPLE (checkbox), [E3] INCLUDE KBD SAMPLE (checkbox), [E5] CANCEL, [E6] OK
- Steps: Select checkboxes, optionally RENAME, [E6] OK for confirmation, [E5] OK to execute

**p.159 — RESTORE**:
- "Touch <RESTORE>. The RESTORE screen appears."
- Screenshot: "RESTORE" title, "USB MEMORY" label, file list showing "MyBackup"
- Bottom bar: scroll control, [E2] APPLY PAD SAMPLE (checkbox), [E3] APPLY KBD SAMPLE (checkbox), [E5] CANCEL, [E6] RESTORE

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: Check if the E-knob assignments match exactly (E1=RENAME, E2=PAD, E3=KBD, E5=CANCEL, E6=OK for Backup).

---

## Test 10: EXPANSION Screen / Tone Edit (p.171-172) — Chapter 07

### MY CATALOG CLAIM
- **EXPANSION Screen** (p.171): Empty/installed states, INSTALL/UNINSTALL/OPTIMIZE/REMOVE LICENSE buttons
- **TONE EDIT SNAP — SN-AP** (p.172): COMMON/INST/MFX/MFX CTRL tabs
- **TONE EDIT SNAP — SN-EP** (p.172): COMMON/INST/MFX/MFX CTRL tabs

### WHAT THE PDF ACTUALLY SHOWS (p.171-172)

**p.171 — "Adding More Tones (EXPANSION)"**:
- "Adding Tones" workflow: Save to USB, connect, hold [TEMPO] + power on
- Screenshot (empty): "EXPANSION" screen with "EMPTY" in center, "Used Space: 0 %" bar, bottom: UNINSTALL, UNINSTALL ALL, OPTIMIZE, INSTALL
- Screenshot (installed): "EXPANSION" with "EX2001: Stage Piano 1" entry, "(Size: 1)", "Used Space: 1/16" bar, bottom: UNINSTALL, UNINSTALL ALL, OPTIMIZE, INSTALL
- "Removing a Tone": Step 1 = cursor to select, Step 2 = [E1] UNINSTALL, confirmation message, [E6] CANCEL / [E5] OK

**p.172 — Expansion Tone Editing**:
- "Selecting a tone" table: EXP TONE, EXP TONE WAVE, EXP RHYTHM INST, EXP RHYTHM WAVE with instructions for each
- "Selecting a SuperNATURAL Acoustic Piano tone": Category "A.Piano", type "SN-AP"
- "Editing a SuperNATURAL Acoustic Piano tone": Signal flow: Inst → MFX →
- Screenshot: "TONE EDIT SNAP" screen with tabs: COMMON, INST, MFX, MFX CTRL
- Shows: Category "01:Ac.Piano", Level "80", Pan "0", Coarse Tune "0", Fine Tune "0(cent)", Octave Shift "0", Mono/Poly "POLY", Chorus/Reverb Send Level "0"
- Menu: [E1] scroll tabs, [E2] scroll cursor, [E6] edit value
- "Selecting a SuperNATURAL E.Piano tone": Category "E.Piano", type "SN-EP"
- Screenshot: "TONE EDIT SNAP" with same tabs (COMMON, INST, MFX, MFX CTRL), shows "04:E.Piano1", Level "118"

### VERDICT: ____
> [ ] PASS — Catalog matches PDF
> [ ] FAIL — Catalog is wrong
> [ ] PARTIAL — Mostly right with minor differences

**Notes for reviewer**: The screen is called "TONE EDIT SNAP" (not just "TONE EDIT SN-AP"). Both SN-AP and SN-EP use the same "TONE EDIT SNAP" screen template with 4 tabs: COMMON, INST, MFX, MFX CTRL. Check if my catalog accurately reflects the actual screen title.

---

## Scoring Summary

| # | Screen(s) | Page | Chapter | Verdict |
|---|-----------|------|---------|---------|
| 1 | SCENE SELECT | p.15 | 01 | |
| 2 | RENAME | p.16 | 01 | |
| 3 | Scene Search / Rating | p.29 | 02 | |
| 4 | MOTIONAL PAD (4 screens) | p.50-51 | 03 | |
| 5 | Effects Edit Main | p.66-67 | 04 | |
| 6 | MULTISAMPLE EDIT/MANAGER | p.86-87 | 05 | |
| 7 | PAD MODE / Note Pad / Zone Mute | p.104-106 | 06 | |
| 8 | PIANO ROLL / Automation | p.123-124 | 06 | |
| 9 | UTILITY / BACKUP / RESTORE | p.158-159 | 07 | |
| 10 | EXPANSION / Tone Edit | p.171-172 | 07 | |

**Total PASS**: ___ / 10
**Total FAIL**: ___ / 10
**Total PARTIAL**: ___ / 10

---

## Known Issues I Found During This Validation

While writing this spot-check, I noticed a few things to flag:

1. **Test 3 (Scene Rating)**: I cataloged "Scene Rating Edit" and "Scene Rating Filter" as separate screens. The PDF shows these are really *modes/states* of the Scene Select screen — you touch EDIT or the rating symbol to filter. They're not distinct screens with different titles. This inflates the count slightly.

2. **Test 8 (Piano Roll)**: My catalog said tools include "REDO" but the PDF shows the toolbar button is UNDO (with REDO described as its alternate function). Minor label difference.

3. **Test 10 (Expansion)**: My catalog used "TONE EDIT SN-AP" and "TONE EDIT SN-EP" as screen names, but the actual screen title bar reads "TONE EDIT SNAP" for both. The SN-AP/SN-EP distinction is the *tone type*, not the screen name.

4. **Quick Edit (Test 3, p.30)**: I cataloged this as "Quick Edit Bar" (an overlay). The PDF shows it's really just the E1-E6 knob parameter bar that's always at the bottom — it's not a separate overlay screen. It's the standard function knob behavior on Scene Select/Zone View.

These are the kind of things you should look for: cases where I treated a *mode* or *state* as a separate screen when it's really the same screen with different content.
