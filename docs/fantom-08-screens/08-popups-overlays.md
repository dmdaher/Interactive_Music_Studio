# Fantom 08 Screen Catalog: Popups, Overlays & Transient Displays

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, various pages
> **Date Cataloged**: 2026-02-25
>
> This document catalogs all transient popups, overlays, confirmation dialogs, and temporary
> display states found across the Roland Fantom 08 Reference Manual. These are not full screens —
> they appear briefly over the current screen and auto-dismiss or require a single confirmation.

---

## Summary of Popups & Overlays

| # | Screen Name | Page | Type | Implemented? |
|---|-------------|------|------|--------------|
| 1 | Knob/Slider Value Popup | p.14 | Auto-dismiss popup | No |
| 2 | Numeric Input Window | p.13 | Modal overlay | No |
| 3 | Bank Select Popup | p.28 | Dropdown popup | No |
| 4 | Tempo Popup (General) | p.9, p.113 | Auto-dismiss popup | No |
| 5 | Quick Edit Bar | p.30 | Overlay bar | No |
| 6 | Split Point Display | p.36 | Temporary overlay | No |
| 7 | Transpose Display | p.38 | Temporary overlay | No |
| 8 | Octave Display | p.38 | Temporary overlay | No |
| 9 | Velocity Curve Overlay | p.38 | Temporary overlay | No |
| 10 | PAN/LEVEL Popup | p.47 | Auto-dismiss popup | No |
| 11 | ASSIGN Popup | p.47 | Auto-dismiss popup | No |
| 12 | Arpeggio Tempo Popup | p.41 | Auto-dismiss popup | No |
| 13 | Rhythm Pattern Tempo Popup | p.46 | Auto-dismiss popup | No |
| 14 | Single Zone Play Confirm Popup | p.34 | Confirm dialog | No |
| 15 | TONE COPY/PASTE Popup | p.60 | Action popup | No |
| 16 | SCENE EDIT Utility Window (Initialize) | p.56 | Modal overlay | No |
| 17 | ZONE EDIT Utility Window (Initialize) | p.57 | Modal overlay | No |
| 18 | TONE EDIT Utility Window | p.63 | Modal overlay | No |
| 19 | Partial Init Window | p.63 | Modal overlay | No |
| 20 | Partial Copy Window | p.64 | Modal overlay | No |
| 21 | Effect Copy/Paste Popup | p.70 | Action popup | No |
| 22 | Mixer Zone EQ Popup | p.75 | Modal overlay | No |
| 23 | Scene Chain Utility Popup | p.77 | Modal overlay | No |
| 24 | Scene Chain Set Select Popup | p.76 | Dropdown popup | No |
| 25 | Scene Chain Edit Scene Select Popup | p.78 | Dropdown popup | No |
| 26 | Multisample Utility Popup | p.87 | Modal overlay | No |
| 27 | KBD Sample Utility Popup | p.89 | Modal overlay | No |
| 28 | Sample Modify Popup | p.89 | Modal overlay | No |
| 29 | Sample Utility Popup (Pad) | p.100 | Modal overlay | No |
| 30 | "Use New Sample?" Confirm Dialog | p.80 | Confirm dialog | No |
| 31 | Truncate Confirm Dialog | p.100 | Confirm dialog | No |
| 32 | Delete Confirm Dialog | p.100 | Confirm dialog | No |
| 33 | Overwrite Confirm Dialog | p.100 | Confirm dialog | No |
| 34 | Export WAV Confirm Dialog | p.101 | Confirm dialog | No |
| 35 | DELETE MENU Popup (Pattern) | p.127 | Action popup | No |
| 36 | MODIFY MENU Popup (Pattern) | p.128 | Action popup | No |
| 37 | EDIT SELECT Popup (Piano Roll / Microscope) | p.123 | Selection popup | No |
| 38 | UNDO/REDO Indicator | p.127 | Temporary overlay | No |
| 39 | INCLUDE PARAMETERS Popup (Seq Export) | p.130 | Selection popup | No |
| 40 | EXPORT SOURCE Popup (Seq Export) | p.130 | Selection popup | No |
| 41 | Group Utility Popup | p.134 | Modal overlay | No |
| 42 | Group Preview Popup | p.114 | Preview overlay | No |
| 43 | USB Memory Unmount Confirmation | p.160 | Confirm dialog | No |
| 44 | Factory Reset Confirmation | p.160 | Confirm dialog | No |
| 45 | Internal Storage Initialize Confirmation | p.160 | Confirm dialog | No |
| 46 | Expansion Install Confirmation | p.171 | Confirm dialog | No |
| 47 | Expansion Uninstall Confirmation | p.171 | Confirm dialog | No |
| 48 | Expansion Optimize Confirmation | p.172 | Confirm dialog | No |
| 49 | Expansion Remove License Confirmation | p.172 | Confirm dialog | No |
| 50 | Voice Character Control Popup (Vocoder) | p.149 | Modal overlay | No |
| 51 | Time Stamp Popup | p.164 | Auto-dismiss popup | No |
| 52 | Drop-Down List (Generic) | p.16, various | Dropdown popup | No |
| 53 | WRITE Screen | p.9 | Confirm dialog | Yes (`write`) |

**Total popups/overlays found**: 53
**Currently implemented**: 1 (WRITE screen)

---

## Detailed Popup/Overlay Entries

---

### Knob/Slider Value Popup
- **Manual Page**: p.14
- **Accessed Via**: Automatically appears when turning a physical knob or moving a slider
- **Screen Type**: Auto-dismiss popup
- **Layout**: Small popup overlay that appears over the current screen. Shows parameter name, a visual knob or slider graphic, and the current numeric value. Semi-transparent background.
- **Key Elements**:
  - Parameter name/label (e.g., "ZONE1 / LEVEL")
  - Visual knob or slider graphic
  - Current numeric value (e.g., "73")
- **Interactive Elements**: Display-only — reflects physical control movement. Closes automatically after a time delay.
- **Currently Implemented?**: No
- **Notes**: "When you use a knob or slider to edit a setting, the edited parameter and its value are shown in a popup screen. The popup screen closes automatically after a time. Some parameters don't show a popup screen."

---

### Numeric Input Window
- **Manual Page**: p.13
- **Accessed Via**: Hold [SHIFT] + press [ENTER]
- **Screen Type**: Modal overlay
- **Layout**: Numeric input overlay for directly entering parameter values via touch panel. Numeric keypad with confirm/cancel.
- **Key Elements**:
  - Numeric keypad
  - Value display field
  - Confirm / Cancel buttons
- **Interactive Elements**: Touch to enter numeric values directly. Confirm to apply, Cancel to dismiss.
- **Currently Implemented?**: No
- **Notes**: "If you hold down the [SHIFT] button and press the [ENTER] button, the numeric window appears. This is a convenient way to directly enter a numeric parameter value from the touch panel. Some parameters don't support numeric input."

---

### Bank Select Popup
- **Manual Page**: p.28
- **Accessed Via**: Touch the bank selector area on Scene Select screen
- **Screen Type**: Dropdown popup
- **Layout**: Dropdown list showing available scene banks (A, B, C, D, etc.). Appears over Scene Select screen.
- **Key Elements**:
  - Bank letters (A, B, C, D)
  - Currently selected bank highlighted
- **Interactive Elements**: Touch a bank letter to switch. Auto-dismisses on selection.
- **Currently Implemented?**: No
- **Notes**: Used to switch between banks of 128 scenes each.

---

### Tempo Popup
- **Manual Page**: p.9 (general), p.113 (sequencer context)
- **Accessed Via**: Press [TEMPO] button; or touch tempo display in sequencer screens
- **Screen Type**: Auto-dismiss popup / sub-screen
- **Layout**: Shows current tempo value prominently, with click (metronome) on/off toggle. Tap tempo via repeated [TEMPO] button presses.
- **Key Elements**:
  - Tempo BPM value (e.g., "120.00")
  - Click on/off toggle
  - Tap tempo indicator
- **Interactive Elements**: Knob to adjust tempo. Repeated [TEMPO] presses for tap tempo. Touch click toggle.
- **Currently Implemented?**: No
- **Notes**: In sequencer context (p.113), shows as a more detailed screen with click toggle and [E1]-[E6] parameter assignments.

---

### Quick Edit Bar
- **Manual Page**: p.30
- **Accessed Via**: Touch the edit icon on Scene Select or Zone View screens
- **Screen Type**: Overlay bar
- **Layout**: Horizontal bar overlay appearing at the top or bottom of the current screen, providing quick access to common edit parameters without leaving the current view.
- **Key Elements**:
  - Quick-access parameter controls
  - Close/dismiss button
- **Interactive Elements**: Touch parameters to edit. Knobs E1-E6 mapped to bar parameters.
- **Currently Implemented?**: No
- **Notes**: Provides a lightweight editing layer without navigating to the full edit screen.

---

### Split Point Display
- **Manual Page**: p.36
- **Accessed Via**: Automatically shown when adjusting split points in Zone View
- **Screen Type**: Temporary overlay
- **Layout**: Visual indicator on the keyboard display showing the split point position between zones.
- **Key Elements**:
  - Split point marker on keyboard graphic
  - Note name label (e.g., "C4")
  - Zone labels on either side
- **Interactive Elements**: Adjustable via knob while visible.
- **Currently Implemented?**: No
- **Notes**: Appears temporarily during split point adjustment. Shows the dividing line between zones on a keyboard graphic.

---

### Transpose Display
- **Manual Page**: p.38
- **Accessed Via**: Press [TRANSPOSE] button or adjust transpose value
- **Screen Type**: Temporary overlay
- **Layout**: Small overlay showing current transpose value with +/- semitone indication.
- **Key Elements**:
  - Transpose value (e.g., "+2", "-3")
  - Semitone/octave label
- **Interactive Elements**: Display-only during adjustment; auto-dismisses.
- **Currently Implemented?**: No
- **Notes**: Appears briefly when transpose is changed, showing the new transposition offset.

---

### Octave Display
- **Manual Page**: p.38
- **Accessed Via**: Press [OCTAVE UP] or [OCTAVE DOWN] buttons
- **Screen Type**: Temporary overlay
- **Layout**: Small overlay showing current octave shift value.
- **Key Elements**:
  - Octave shift value (e.g., "+1", "-2")
- **Interactive Elements**: Display-only; auto-dismisses.
- **Currently Implemented?**: No
- **Notes**: Appears briefly when octave is changed via dedicated buttons.

---

### Velocity Curve Overlay
- **Manual Page**: p.38
- **Accessed Via**: Adjusting velocity curve settings in System or Zone settings
- **Screen Type**: Temporary overlay
- **Layout**: Graphical curve display showing the relationship between physical key velocity and output velocity.
- **Key Elements**:
  - X/Y curve graph
  - Curve type name
- **Interactive Elements**: Display-only; reflects current curve selection.
- **Currently Implemented?**: No
- **Notes**: Shows how hard you have to press keys to reach various velocity levels.

---

### PAN/LEVEL Popup
- **Manual Page**: p.47
- **Accessed Via**: Press [PAN/LEVEL] button, then move a knob or slider
- **Screen Type**: Auto-dismiss popup
- **Layout**: Small popup showing zone number, parameter name (Pan or Level), and current value. Same visual style as Knob/Slider Value Popup.
- **Key Elements**:
  - Zone number
  - Parameter name (Pan / Level)
  - Current value
- **Interactive Elements**: Display-only — reflects knob/slider movement.
- **Currently Implemented?**: No
- **Notes**: When PAN/LEVEL is lit, knobs 1-8 control pan of zones 1-8, sliders 1-8 control volume of zones 1-8.

---

### ASSIGN Popup
- **Manual Page**: p.47
- **Accessed Via**: Press [ASSIGN] button, then move a knob or slider
- **Screen Type**: Auto-dismiss popup
- **Layout**: Small popup showing assigned function name and current value.
- **Key Elements**:
  - Assigned parameter/function name
  - Current value
- **Interactive Elements**: Display-only — reflects knob/slider movement.
- **Currently Implemented?**: No
- **Notes**: ASSIGN1 (scene-level) via [ASSIGN] alone. ASSIGN2 (system-level) via [ASSIGN] + [PAN/LEVEL] together.

---

### Arpeggio Tempo Popup
- **Manual Page**: p.41
- **Accessed Via**: Adjusting arpeggio tempo in Arpeggio settings
- **Screen Type**: Auto-dismiss popup
- **Layout**: Tempo value display for arpeggio-specific tempo.
- **Key Elements**:
  - Arpeggio tempo BPM
  - Sync indicator
- **Interactive Elements**: Knob to adjust.
- **Currently Implemented?**: No

---

### Rhythm Pattern Tempo Popup
- **Manual Page**: p.46
- **Accessed Via**: Adjusting rhythm pattern tempo
- **Screen Type**: Auto-dismiss popup
- **Layout**: Tempo value display for rhythm pattern tempo.
- **Key Elements**:
  - Rhythm tempo BPM
  - Sync indicator
- **Interactive Elements**: Knob to adjust.
- **Currently Implemented?**: No

---

### Single Zone Play Confirm Popup
- **Manual Page**: p.34
- **Accessed Via**: Pressing [SINGLE TONE] button when scene has multiple zones
- **Screen Type**: Confirm dialog
- **Layout**: Confirmation dialog asking if user wants to switch to single-zone mode, which will disable other zones.
- **Key Elements**:
  - Warning message
  - OK / Cancel buttons
- **Interactive Elements**: Touch OK to confirm, Cancel to abort.
- **Currently Implemented?**: No
- **Notes**: Appears because switching to single tone mode will deactivate zones 2-16.

---

### TONE COPY/PASTE Popup
- **Manual Page**: p.60
- **Accessed Via**: TONE EDIT utility operations
- **Screen Type**: Action popup
- **Layout**: Popup with copy source/destination selection and action buttons.
- **Key Elements**:
  - Source/destination tone selectors
  - COPY / PASTE buttons
  - Cancel button
- **Interactive Elements**: Select source and destination, confirm copy/paste.
- **Currently Implemented?**: No

---

### SCENE EDIT Utility Window (Initialize)
- **Manual Page**: p.56
- **Accessed Via**: SCENE EDIT > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup window with SCENE INITIALIZE option. May include other utility functions.
- **Key Elements**:
  - SCENE INITIALIZE button
  - Confirmation sub-popup (OK / Cancel)
- **Interactive Elements**: Touch to initialize, confirm with OK.
- **Currently Implemented?**: No

---

### ZONE EDIT Utility Window (Initialize)
- **Manual Page**: p.57
- **Accessed Via**: ZONE EDIT > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup window with ZONE INITIALIZE option for the selected zone.
- **Key Elements**:
  - ZONE INITIALIZE button
  - Zone selector
  - Confirmation sub-popup
- **Interactive Elements**: Select zone, touch initialize, confirm.
- **Currently Implemented?**: No

---

### TONE EDIT Utility Window
- **Manual Page**: p.63
- **Accessed Via**: TONE EDIT > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup window with options: TONE INIT, PARTIAL INIT, PARTIAL COPY, MULTISAMPLE EDIT.
- **Key Elements**:
  - TONE INIT button
  - PARTIAL INIT button
  - PARTIAL COPY button
  - MULTISAMPLE EDIT button
- **Interactive Elements**: Touch each option to open corresponding sub-window.
- **Currently Implemented?**: No

---

### Partial Init Window
- **Manual Page**: p.63
- **Accessed Via**: TONE EDIT Utility > PARTIAL INIT
- **Screen Type**: Modal overlay
- **Layout**: Popup showing partial selector (Partial 1-4) and initialize confirmation.
- **Key Elements**:
  - Partial selector (1-4)
  - OK / Cancel buttons
- **Interactive Elements**: Select partial, confirm initialization.
- **Currently Implemented?**: No

---

### Partial Copy Window
- **Manual Page**: p.64
- **Accessed Via**: TONE EDIT Utility > PARTIAL COPY
- **Screen Type**: Modal overlay
- **Layout**: Popup showing source partial, destination partial, and copy confirmation.
- **Key Elements**:
  - Source partial selector
  - Destination partial selector
  - OK / Cancel buttons
- **Interactive Elements**: Select source and destination partials, confirm copy.
- **Currently Implemented?**: No

---

### Effect Copy/Paste Popup
- **Manual Page**: p.70
- **Accessed Via**: Effects Edit > copy/paste operation
- **Screen Type**: Action popup
- **Layout**: Popup for copying effect settings between zones or effect slots.
- **Key Elements**:
  - Source/destination selectors
  - COPY / PASTE action buttons
  - Cancel button
- **Interactive Elements**: Select source and destination, execute copy/paste.
- **Currently Implemented?**: No

---

### Mixer Zone EQ Popup
- **Manual Page**: p.75
- **Accessed Via**: MIXER screen > touch EQ icon on a zone channel
- **Screen Type**: Modal overlay
- **Layout**: Per-zone EQ settings popup with frequency/gain controls.
- **Key Elements**:
  - EQ band controls (Low, Mid, High)
  - Frequency/gain sliders
  - Zone identifier
- **Interactive Elements**: Knobs/touch to adjust EQ parameters.
- **Currently Implemented?**: No

---

### Scene Chain Utility Popup
- **Manual Page**: p.77
- **Accessed Via**: Scene Chain screen > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup with chain utility options (Initialize, Import, etc.).
- **Key Elements**:
  - Utility action buttons
  - Cancel button
- **Interactive Elements**: Touch options to execute.
- **Currently Implemented?**: No

---

### Scene Chain Set Select Popup
- **Manual Page**: p.76
- **Accessed Via**: Scene Chain screen > touch set selector
- **Screen Type**: Dropdown popup
- **Layout**: Dropdown list of scene chain sets.
- **Key Elements**:
  - Chain set list
  - Currently selected set highlighted
- **Interactive Elements**: Touch to select a set. Auto-dismisses.
- **Currently Implemented?**: No

---

### Scene Chain Edit Scene Select Popup
- **Manual Page**: p.78
- **Accessed Via**: Scene Chain Edit > touch scene slot
- **Screen Type**: Dropdown popup
- **Layout**: Scene selection dropdown for assigning a scene to a chain step.
- **Key Elements**:
  - Scene list with bank/number
  - Search/filter
- **Interactive Elements**: Touch to select scene.
- **Currently Implemented?**: No

---

### Multisample Utility Popup
- **Manual Page**: p.87
- **Accessed Via**: Multisample Manager > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup with multisample utility options (Rename, Delete, Optimize, etc.).
- **Key Elements**:
  - Utility action list
  - Cancel button
- **Interactive Elements**: Touch options.
- **Currently Implemented?**: No

---

### KBD Sample Utility Popup
- **Manual Page**: p.89
- **Accessed Via**: KBD Sample List > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup with KBD sample utility options.
- **Key Elements**:
  - Utility action list (Rename, Delete, Truncate, Export WAV, etc.)
  - Cancel button
- **Interactive Elements**: Touch options.
- **Currently Implemented?**: No

---

### Sample Modify Popup
- **Manual Page**: p.89
- **Accessed Via**: KBD Sample List > Modify operation
- **Screen Type**: Modal overlay
- **Layout**: Popup for sample modification operations.
- **Key Elements**:
  - Modify options
  - Parameters
  - OK / Cancel
- **Interactive Elements**: Select modify type, adjust parameters, confirm.
- **Currently Implemented?**: No

---

### Sample Utility Popup (Pad Samples)
- **Manual Page**: p.100
- **Accessed Via**: SAMPLE PAD screen > SAMPLE UTILITY button
- **Screen Type**: Modal overlay
- **Layout**: Popup with pad sample utility options: Rename, Delete, Truncate, Export WAV, Delete All, Export All WAV.
- **Key Elements**:
  - RENAME button
  - DELETE button
  - TRUNCATE button
  - EXPORT WAV button
  - DELETE ALL button
  - EXPORT ALL WAV button
  - Cancel button
- **Interactive Elements**: Touch each option to execute (with confirmation sub-dialogs).
- **Currently Implemented?**: No

---

### "Use New Sample?" Confirm Dialog
- **Manual Page**: p.80
- **Accessed Via**: After completing sampling to KBD
- **Screen Type**: Confirm dialog
- **Layout**: Simple confirmation: "Use the new sample?" with OK / Cancel.
- **Key Elements**: Confirmation message, OK, Cancel
- **Interactive Elements**: Touch OK or Cancel.
- **Currently Implemented?**: No

---

### Truncate / Delete / Overwrite Confirm Dialogs
- **Manual Pages**: p.100-102
- **Accessed Via**: Various sample utility operations
- **Screen Type**: Confirm dialogs
- **Layout**: Simple confirmation dialogs with specific warning messages and OK / Cancel buttons.
- **Key Elements**: Warning message specific to operation, OK, Cancel
- **Interactive Elements**: Touch OK or Cancel.
- **Currently Implemented?**: No
- **Notes**: Multiple similar dialogs — Truncate, Delete, Delete All, Export WAV, Export All WAV, Overwrite. All follow the same pattern.

---

### DELETE MENU Popup (Pattern)
- **Manual Page**: p.127
- **Accessed Via**: PTN UTILITY > DELETE
- **Screen Type**: Action popup
- **Layout**: Popup with two options: DELETE (single pattern) and DELETE ALL.
- **Key Elements**: DELETE button, DELETE ALL button, Cancel
- **Interactive Elements**: Touch to select delete scope.
- **Currently Implemented?**: No

---

### MODIFY MENU Popup (Pattern)
- **Manual Page**: p.128
- **Accessed Via**: PTN UTILITY > MODIFY
- **Screen Type**: Action popup
- **Layout**: Popup with six modify options: QUANTIZE, ERASE, TRANSPOSE, CHANGE VELOCITY, CHANGE DURATION, SHIFT CLOCK.
- **Key Elements**: Six labeled action buttons, Cancel
- **Interactive Elements**: Touch to select modify operation.
- **Currently Implemented?**: No

---

### EDIT SELECT Popup (Piano Roll / Microscope)
- **Manual Page**: p.123
- **Accessed Via**: PTN UTILITY > EDIT; or entering pattern edit mode
- **Screen Type**: Selection popup
- **Layout**: Popup with two options: PIANO ROLL and MICROSCOPE.
- **Key Elements**: PIANO ROLL button, MICROSCOPE button
- **Interactive Elements**: Touch to select editor type.
- **Currently Implemented?**: No

---

### UNDO/REDO Indicator
- **Manual Page**: p.127
- **Accessed Via**: After performing an edit operation in sequencer
- **Screen Type**: Temporary overlay
- **Layout**: Brief indicator showing UNDO or REDO operation availability/status.
- **Key Elements**: UNDO / REDO label, operation description
- **Interactive Elements**: Display-only; auto-dismisses.
- **Currently Implemented?**: No

---

### INCLUDE PARAMETERS Popup (Seq Export)
- **Manual Page**: p.130
- **Accessed Via**: SEQ EXPORT workflow
- **Screen Type**: Selection popup
- **Layout**: Popup with parameter inclusion checkboxes for sequencer export.
- **Key Elements**: Parameter checkbox list, OK / Cancel
- **Interactive Elements**: Toggle parameter checkboxes, confirm.
- **Currently Implemented?**: No

---

### EXPORT SOURCE Popup (Seq Export)
- **Manual Page**: p.130
- **Accessed Via**: SEQ EXPORT workflow
- **Screen Type**: Selection popup
- **Layout**: Popup for selecting which patterns/tracks to export.
- **Key Elements**: Source selection list, OK / Cancel
- **Interactive Elements**: Select export sources, confirm.
- **Currently Implemented?**: No

---

### Group Utility Popup
- **Manual Page**: p.134
- **Accessed Via**: GROUP screen > Utility button
- **Screen Type**: Modal overlay
- **Layout**: Popup with group utility options: Initialize, Export, Rename, Make Song.
- **Key Elements**: Four action buttons, Cancel
- **Interactive Elements**: Touch to select option.
- **Currently Implemented?**: No

---

### Group Preview Popup
- **Manual Page**: p.114
- **Accessed Via**: GROUP screen > Preview function
- **Screen Type**: Preview overlay
- **Layout**: Playback preview overlay showing group arrangement with pattern sequence.
- **Key Elements**: Pattern list in group order, playback position, transport controls
- **Interactive Elements**: Play/Stop preview.
- **Currently Implemented?**: No

---

### USB Memory Unmount Confirmation
- **Manual Page**: p.160
- **Accessed Via**: UTILITY > USB MEMORY UNMOUNT
- **Screen Type**: Confirm dialog
- **Layout**: Confirmation: "Unmount USB memory?" with OK / Cancel.
- **Key Elements**: Confirmation message, OK, Cancel
- **Interactive Elements**: Touch OK or Cancel.
- **Currently Implemented?**: No

---

### Factory Reset / Storage Initialize Confirmations
- **Manual Pages**: p.160
- **Accessed Via**: UTILITY > FACTORY RESET or INTERNAL STORAGE INITIALIZE
- **Screen Type**: Confirm dialogs
- **Layout**: Warning confirmations with checkboxes for what to include (PAD SAMPLE, KBD SAMPLE, INT STORAGE). Multiple confirmation steps.
- **Key Elements**: Warning message, inclusion checkboxes, OK / Cancel
- **Interactive Elements**: Toggle checkboxes, confirm with OK.
- **Currently Implemented?**: No
- **Notes**: Factory Reset has APPLY PAD SAMPLE / APPLY KBD SAMPLE / APPLY INT STORAGE checkboxes.

---

### Expansion Install/Uninstall/Optimize/Remove License Confirmations
- **Manual Pages**: p.171-172
- **Accessed Via**: EXPANSION screen operations
- **Screen Type**: Confirm dialogs
- **Layout**: Various confirmation dialogs for expansion management operations.
- **Key Elements**: Operation-specific warning, OK / Cancel
- **Interactive Elements**: Touch OK or Cancel.
- **Currently Implemented?**: No

---

### Voice Character Control Popup (Vocoder)
- **Manual Page**: p.149
- **Accessed Via**: VOCODER EDIT > Voice Character
- **Screen Type**: Modal overlay
- **Layout**: Frequency band visualization with FLAT and Dice (randomize) buttons.
- **Key Elements**:
  - Frequency band bar graph
  - FLAT button (reset to flat response)
  - Dice button (randomize character)
- **Interactive Elements**: Touch frequency bands to adjust, FLAT to reset, Dice to randomize.
- **Currently Implemented?**: No

---

### Time Stamp Popup
- **Manual Page**: p.164
- **Accessed Via**: SYSTEM settings
- **Screen Type**: Auto-dismiss popup
- **Layout**: Shows date/time stamp information.
- **Key Elements**: Date/time display
- **Interactive Elements**: Display-only.
- **Currently Implemented?**: No

---

### Drop-Down List (Generic Pattern)
- **Manual Page**: p.16, various
- **Accessed Via**: Touch drop-down areas throughout the UI
- **Screen Type**: Dropdown popup
- **Layout**: Scrollable list with items, scroll arrows, CANCEL, and OK buttons. Used for parameter selection across many screens (e.g., Count-In options: NONE, 1 MEAS, 2 MEAS, WAIT NOTE).
- **Key Elements**:
  - Scrollable item list
  - Scroll arrows (up/down)
  - CANCEL / OK buttons
  - Selected item highlighted
- **Interactive Elements**: Touch items to select, scroll arrows or [E4] knob to navigate, OK to confirm, CANCEL to dismiss.
- **Currently Implemented?**: No
- **Notes**: This is a reusable UI pattern used across dozens of screens for parameter selection. A single generic implementation could serve most use cases.

---

### WRITE Screen
- **Manual Page**: p.9
- **Accessed Via**: [WRITE] button
- **Screen Type**: Confirm dialog
- **Layout**: Save confirmation with destination selection. Shows write source and destination.
- **Key Elements**:
  - Write source display
  - Write destination selector
  - RENAME button
  - CANCEL / OK buttons
- **Interactive Elements**: Select destination, optional rename, confirm with OK.
- **Currently Implemented?**: Yes (as `write` / `WriteScreen`)
- **Notes**: Already implemented. Included here for completeness as it follows the popup/overlay pattern.

---

## Popup Categories

### Auto-Dismiss Popups (display-only, close automatically)
- Knob/Slider Value Popup
- PAN/LEVEL Popup
- ASSIGN Popup
- Tempo Popup (general)
- Arpeggio Tempo Popup
- Rhythm Pattern Tempo Popup
- Split Point Display
- Transpose Display
- Octave Display
- UNDO/REDO Indicator
- Time Stamp Popup

### Modal Overlays (require user action to dismiss)
- Numeric Input Window
- Quick Edit Bar
- SCENE EDIT Utility Window
- ZONE EDIT Utility Window
- TONE EDIT Utility Window
- Partial Init/Copy Windows
- Mixer Zone EQ Popup
- Scene Chain Utility Popup
- Multisample Utility Popup
- KBD Sample Utility Popup
- Sample Modify Popup
- Sample Utility Popup (Pad)
- Voice Character Control Popup

### Confirm Dialogs (OK / Cancel pattern)
- WRITE Screen (implemented)
- Single Zone Play Confirm
- "Use New Sample?" Dialog
- Truncate / Delete / Overwrite Dialogs
- USB Memory Unmount Confirmation
- Factory Reset / Storage Initialize Confirmations
- Expansion Install/Uninstall/Optimize/Remove License Confirmations

### Dropdown Popups (selection lists)
- Bank Select Popup
- Drop-Down List (Generic)
- Scene Chain Set Select Popup
- Scene Chain Edit Scene Select Popup

### Action Popups (operation selection)
- TONE COPY/PASTE Popup
- Effect Copy/Paste Popup
- DELETE MENU Popup (Pattern)
- MODIFY MENU Popup (Pattern)
- EDIT SELECT Popup
- INCLUDE PARAMETERS Popup
- EXPORT SOURCE Popup
- Group Utility Popup
