# Fantom 08 Screen Catalog: 05 - Sampler

Reference: Roland Fantom-0 Series Reference Manual, Chapter 05 (pp. 79-102)

This document catalogs every screen and display state in the Sampler section of the Roland Fantom 08, covering Sampling, Multisamples, Kbd Samples, and Pad Samples.

---

## Table of Contents

1. [SAMPLING MENU](#sampling-menu)
2. [SAMPLING STANDBY (TO KBD)](#sampling-standby-to-kbd)
3. [NOW SAMPLING (TO KBD) - Recording State](#now-sampling-to-kbd---recording-state)
4. [SAMPLING TO KBD (DLGS) - Use New Sample Dialog](#sampling-to-kbd-dlgs---use-new-sample-dialog)
5. [KBD SAMPLE WAVE EDIT](#kbd-sample-wave-edit)
6. [SAMPLING STANDBY (TO STORAGE)](#sampling-standby-to-storage)
7. [SAMPLING TO STORAGE (DLGS) - File Created Dialog](#sampling-to-storage-dlgs---file-created-dialog)
8. [IMPORT SAMPLE TO KBD (SELECT SOURCE)](#import-sample-to-kbd-select-source)
9. [IMPORT SAMPLE TO KBD (SETTING)](#import-sample-to-kbd-setting)
10. [IMPORT SAMPLE TO MULTISAMPLE (SELECT SOURCE)](#import-sample-to-multisample-select-source)
11. [IMPORT SAMPLE TO MULTISAMPLE (SETTING)](#import-sample-to-multisample-setting)
12. [IMPORTED SAMPLE LIST](#imported-sample-list)
13. [MULTISAMPLE EDIT](#multisample-edit)
14. [MULTISAMPLE EDIT PRO](#multisample-edit-pro)
15. [MULTISAMPLE MANAGER](#multisample-manager)
16. [MULTISAMPLE UTILITY (Popup)](#multisample-utility-popup)
17. [KBD SAMPLE LIST](#kbd-sample-list)
18. [KBD SAMPLE LIST (PARAMETER)](#kbd-sample-list-parameter)
19. [KBD SAMPLE WAVE EDIT (from KBD SAMPLE)](#kbd-sample-wave-edit-from-kbd-sample)
20. [KBD SAMPLE UTILITY (Popup)](#kbd-sample-utility-popup)
21. [SAMPLE MODIFY (Popup)](#sample-modify-popup)
22. [MULTISAMPLE VIEW](#multisample-view)
23. [WAVE/EXPANSION MEMORY INFO](#waveexpansion-memory-info)
24. [EXPANSION INFO](#expansion-info)
25. [IMPORT SAMPLE (SELECT FILE)](#import-sample-select-file)
26. [IMPORT SAMPLE (SELECT SOURCE)](#import-sample-select-source)
27. [IMPORT SAMPLE (SELECT DESTINATION)](#import-sample-select-destination)
28. [PAD BANK](#pad-bank)
29. [SAMPLE PAD](#sample-pad)
30. [SAMPLING DESTINATION (PAD)](#sampling-destination-pad)
31. [SAMPLING STANDBY (TO PAD)](#sampling-standby-to-pad)
32. [PAD SAMPLE IMPORT (File Browser)](#pad-sample-import-file-browser)
33. [SAMPLE IMPORT (SELECT DESTINATION)](#sample-import-select-destination)
34. [SAMPLE PAD (QUICK EDIT)](#sample-pad-quick-edit)
35. [WAVE EDIT (Pad Sample)](#wave-edit-pad-sample)
36. [SAMPLE UTILITY (Popup - from SAMPLE PAD)](#sample-utility-popup---from-sample-pad)
37. [SAMPLE UTILITY (Popup - from WAVE EDIT)](#sample-utility-popup---from-wave-edit)

---

### SAMPLING MENU
- **Manual Page**: p.81
- **Accessed Via**: Press the [SAMPLING] button
- **Screen Type**: main screen
- **Layout**: Menu list with icons on the left side of the screen. Function knob labels along the bottom (E1-E6).
- **Key Elements**:
  - SAMPLING <To Pad> - sample and play back using pads
  - SAMPLING <To Keyboard> - sample and play back using keyboard
  - SAMPLING <To Storage> - save samples without assigning
  - IMPORT <To Pad> - import audio file for pad playback
  - IMPORT <To Keyboard> - import audio file for keyboard playback
  - IMPORT <To Multisample> - create multisample from multiple audio files
- **Interactive Elements**:
  - [E1] WAVE/EXP MEMORY INFO - check Kbd/Expansion sample memory usage
  - [E4] PAD SAMPLE - edit pad samples
  - [E5] KBD SAMPLE - edit Kbd samples
  - [E6] MULTISAMPLE - edit multisamples
  - Touch any menu item to navigate to its screen
- **Currently Implemented?**: No
- **Notes**: This is the central hub for all sampling operations. Each menu item leads to a different sampling workflow. The icons on screen correspond to the function knobs E1-E6.

---

### SAMPLING STANDBY (TO KBD)
- **Manual Page**: p.81
- **Accessed Via**: SAMPLING MENU > touch SAMPLING <To Keyboard>
- **Screen Type**: main screen
- **Layout**: Top bar shows "SAMPLING STANDBY (TO KBD)" title with back arrow. Left side has parameter controls, center has a large time counter (000:00:00), right side has a level meter and recording status indicator showing "STANDBY".
- **Key Elements**:
  - Time counter (large, center) - shows 000:00:00
  - Level meter (right side, vertical) - shows input level with L/R channels
  - Recording status indicator: "STANDBY" (changes to "NOW SAMPLING" when recording)
  - Parameter display area (right of center) showing: Destination Tone, Loop Mode, Original Key
  - Sampling Mode selector (left side)
  - Format selector (left side)
  - AUDIO IN on/off toggle (left side)
  - Click on/off toggle
  - Emphasis toggle
  - SETTING section at bottom: TRIG (trigger mode), AUTO TRIG, AUTO TRIGGER LEVEL, TEMPO
  - CANCEL and START buttons (bottom right)
- **Interactive Elements**:
  - Touch <Sampling Mode> to select sampling mode
  - Touch <AUDIO IN> to toggle audio input on/off
  - Touch <Click> to toggle click on/off
  - Touch parameter values to edit (Destination Tone, Loop Mode, Original Key)
  - Touch <Emphasis> to toggle emphasis
  - Touch <CANCEL> to cancel, <START> to begin sampling
  - Bottom SETTING row: TRIG, AUTO TRIG, AUTO TRIGGER LEVEL, TEMPO (touchable)
- **Currently Implemented?**: No
- **Notes**: The level meter on the right is crucial for setting input gain. Parameters include Destination Tone (0001-), Loop Mode (FWD/ONE-SHOT/REV/REV-ONE), Original Key (0-127, default G9), Save To Internal Storage (OFF/ON), Assign To Keyboard (OFF/ON), Emphasis (OFF/ON). Touching START transitions to the NOW SAMPLING state.

---

### NOW SAMPLING (TO KBD) - Recording State
- **Manual Page**: p.82
- **Accessed Via**: Touch <START> on the SAMPLING STANDBY (TO KBD) screen
- **Screen Type**: main screen (state change of SAMPLING STANDBY)
- **Layout**: Same layout as SAMPLING STANDBY but status changes from "STANDBY" to "NOW SAMPLING" and the time counter actively advances.
- **Key Elements**:
  - "NOW SAMPLING" indication displayed on screen
  - Time counter advancing
  - Level meter showing live input levels
  - STOP button replaces START button
- **Interactive Elements**:
  - Touch <STOP> to stop sampling (transitions to Use New Sample dialog)
- **Currently Implemented?**: No
- **Notes**: While recording, the time counter advances. Touch STOP to end recording and proceed to the confirmation dialog.

---

### SAMPLING TO KBD (DLGS) - Use New Sample Dialog
- **Manual Page**: p.82
- **Accessed Via**: Touch <STOP> during NOW SAMPLING (To KBD)
- **Screen Type**: popup / overlay dialog
- **Layout**: Dialog box overlaid on a waveform display background. The waveform of the just-recorded sample is visible behind the dialog. Dialog has "Use new sample?" text with an X close button. Bottom row shows function buttons.
- **Key Elements**:
  - Waveform display showing the recorded sample
  - "Use new sample?" dialog text
  - X (close) button on dialog
  - PREVIEW button (bottom left, with knob icon)
- **Interactive Elements**:
  - [E1] PREVIEW - listen to the recorded sample
  - [E4] RETRY - redo the sampling
  - [E5] CANCEL - cancel and return to previous screen
  - [E6] OK - confirm and proceed to KBD SAMPLE WAVE EDIT
- **Currently Implemented?**: No
- **Notes**: Selecting OK advances to the KBD SAMPLE WAVE EDIT screen. RETRY returns to standby for another attempt. CANCEL discards the sample.

---

### KBD SAMPLE WAVE EDIT
- **Manual Page**: p.82
- **Accessed Via**: Select [E6] OK on the "Use new sample?" dialog after sampling to keyboard
- **Screen Type**: main screen
- **Layout**: Top bar shows "KBD SAMPLE WAVE EDIT" with back arrow and sample name/number (e.g., "SAMPLE 0001:smpl0001"). Tab bar shows WRITE, RELOAD, MODIFY, UTILITY buttons. Center area has a large waveform display with visual markers for start point, loop start point, and end point. Right side has parameter fields: Loop Mode, Original Key, Gain, Fine Tune, Level. Bottom bar shows point values and zoom controls.
- **Key Elements**:
  - Sample name/number display (top)
  - "S" marker on waveform (start point indicator)
  - Waveform visualization (large, center) with blue waveform on dark background
  - Start Point, Loop Start Point, End Point markers on waveform
  - Parameter fields (right side): Loop Mode, Original Key, Gain, Fine Tune, Level
  - Bottom bar: START POINT value, LOOP START POINT value, END POINT value, ZOOM HORZ, ZOOM VERT, PREVIEW
  - Tab buttons: WRITE, RELOAD, MODIFY, UTILITY
- **Interactive Elements**:
  - [E1] START POINT - changes the playback start position
  - [E2] LOOP START POINT - changes the loop start position
  - [E3] END POINT - changes the playback end position
  - [E4] ZOOM HORZ - horizontal zoom (1/65536-1/1)
  - [E5] ZOOM VERT - vertical zoom (x1-x128)
  - [E6] PREVIEW - audition the sample while pressing
  - SAMPLE touch target - selects another sample
  - <WRITE> - saves the sample parameters
  - <RELOAD> - reloads saved parameters
  - <MODIFY> - opens SAMPLE MODIFY popup (various effects)
  - <UTILITY> - opens Kbd Sample Utility (p. 89)
  - Draggable START POINT and END POINT icons on waveform
  - Draggable waveform display for scrolling
- **Currently Implemented?**: No
- **Notes**: Parameters: START POINT (000000000-), LOOP START POINT (000000000-), END POINT (000000010-), Gain (0/+6/+12 dB), Fine Tune (-50.0 to +50.0 cent), Level (0-127). Parameters that have been changed show an edit mark. After editing, press [EXIT] to create user tone and return to ZONE VIEW1 with current zone selected.

---

### SAMPLING STANDBY (TO STORAGE)
- **Manual Page**: p.83
- **Accessed Via**: SAMPLING MENU > touch SAMPLING <To Storage>
- **Screen Type**: main screen
- **Layout**: Similar to SAMPLING STANDBY (TO KBD) but with storage-specific elements. Top bar shows "SAMPLING STANDBY (TO STORAGE)". Left side shows storage location selector (INT STORAGE toggle), center has time counter (000:00:00), right side has level meter and "STANDBY" status. Additional elements: Destination filename, RENAME button, Sampling Mode, Format, AUDIO IN, Click toggles.
- **Key Elements**:
  - Storage location toggle (changes where samples are stored): INT STORAGE
  - Time counter (000:00:00)
  - Level meter (right side)
  - Recording status: "STANDBY"
  - Destination filename display (e.g., INT:SAMPLING/smpl0001.wav)
  - RENAME button (to change filename)
  - Sampling Mode selector
  - Format selector
  - AUDIO IN on/off
  - Click on/off
  - SETTING row: TRIG, AUTO TRIG, AUTO TRIGGER LEVEL, TEMPO
  - CANCEL and START buttons
- **Interactive Elements**:
  - Touch <INT STORAGE> to change save location
  - Touch <RENAME> to rename the destination file
  - Touch <Sampling Mode> to select mode
  - Touch <CANCEL> / <START>
  - All SETTING row parameters are touchable
- **Currently Implemented?**: No
- **Notes**: Sampling To Storage saves samples without assigning them to pads or keyboard. The destination filename auto-increments with a 4-digit number. Touch <INT STORAGE> to toggle storage location. Unlike To Keyboard, this does not create a user tone.

---

### SAMPLING TO STORAGE (DLGS) - File Created Dialog
- **Manual Page**: p.83
- **Accessed Via**: Touch <STOP> during NOW SAMPLING (To Storage)
- **Screen Type**: popup / overlay dialog
- **Layout**: Dialog overlaid on the sampling screen. Shows "The following file was created:" message with the filename (e.g., INT:SAMPLING/smpl0001.wav). Has an X close button. Bottom shows [E1] CONTINUE checkbox and OK button.
- **Key Elements**:
  - Destination filename display
  - Sampling Mode display
  - "The following file was created:" message
  - Created filename (e.g., INT:SAMPLING/smpl0001.wav)
  - CONTINUE checkbox [E1]
- **Interactive Elements**:
  - [E1] CONTINUE - if checked, returns to SAMPLING STANDBY for continued sampling
  - [E6] OK - confirms; if CONTINUE is checked, returns to standby; if not, returns to SAMPLING MENU
- **Currently Implemented?**: No
- **Notes**: The CONTINUE checkbox allows rapid sequential sampling sessions without navigating back through the menu.

---

### IMPORT SAMPLE TO KBD (SELECT SOURCE)
- **Manual Page**: p.84
- **Accessed Via**: SAMPLING MENU > touch IMPORT <To Keyboard>
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE TO KBD (SELECT SOURCE)". Two tabs at top: USB MEMORY and INTERNAL STORAGE. Main area is a file browser showing folder/file hierarchy with folder icons and file icons. Files show size in KB. Bottom bar has function buttons.
- **Key Elements**:
  - USB MEMORY / INTERNAL STORAGE tabs
  - File browser tree with expandable folders (e.g., ROLAND > Wave > files)
  - File names with size display (e.g., "Guitar.wav 771.2 KB")
  - Folder navigation (expandable/collapsible)
  - Preview Level display
- **Interactive Elements**:
  - [E2] PREVIEW - preview audio file while pressing knob
  - [E3] Preview Level - adjusts preview volume
  - [E6] IMPORT - advances to the IMPORT SAMPLE TO KBD (SETTING) screen
  - Touch file/folder names to select
  - Touch tabs to switch between USB MEMORY and INTERNAL STORAGE
  - Up/down scroll arrows
- **Currently Implemented?**: No
- **Notes**: Supports WAV/AIFF files. Files with certain special characters cannot be imported. Preview is available in the file selection screen.

---

### IMPORT SAMPLE TO KBD (SETTING)
- **Manual Page**: p.84
- **Accessed Via**: Select [E6] IMPORT on the IMPORT SAMPLE TO KBD (SELECT SOURCE) screen
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE TO KBD (SETTING)". Top area shows Import File name (e.g., "USB/Wave/Bass.wav"). Center has parameter rows with dropdown selectors: Loop Mode, Original Key, Emphasis. Below that is Destination Tone field. Bottom bar shows function buttons with labels.
- **Key Elements**:
  - Import File name display (top, showing source path)
  - Loop Mode selector (ONE-SHOT, FWD, REV, REV-ONE)
  - Original Key selector (default 60/C4)
  - Emphasis toggle (ON/OFF)
  - Destination Tone field (e.g., "0001:INITIAL TONE")
  - "Save to Internal storage" checkbox
- **Interactive Elements**:
  - [E1] PREVIEW - preview the audio file
  - [E2] Loop Mode - select loop mode
  - [E3] Original Key - set original key
  - [E4] APPLY EMPHASIS - toggle emphasis on imported sample
  - [E5] SAVE TO STORAGE - save in WAV format to internal storage
  - [E6] EXECUTE - execute the import operation
  - Touch Destination Tone to select target tone number
- **Currently Implemented?**: No
- **Notes**: After EXECUTE, a confirmation message appears. Pressing [E5] OK executes the import. This creates a user tone using the imported waveform. The tone is selected in the current zone and shown on ZONE VIEW1.

---

### IMPORT SAMPLE TO MULTISAMPLE (SELECT SOURCE)
- **Manual Page**: p.85
- **Accessed Via**: SAMPLING MENU > touch IMPORT <To Multisample>
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE TO MULTISAMPLE (SELECT SOURCE)" with a note about using SHIFT for multi-select. Two tabs: USB MEMORY and INTERNAL STORAGE. File browser with folder hierarchy. Bottom bar has function buttons.
- **Key Elements**:
  - USB MEMORY / INTERNAL STORAGE tabs
  - File browser tree (same style as KBD import)
  - File names with size display
  - Multi-select instruction text at top
- **Interactive Elements**:
  - [E2] PREVIEW - preview audio file
  - [E3] Audio File Preview Level - adjust preview volume
  - [E6] IMPORT - advance to settings screen
  - Touch filenames to select (hold SHIFT for multi-select, or turn VALUE dial with SHIFT held)
  - Touch tabs to switch storage sources
- **Currently Implemented?**: No
- **Notes**: Multiple files can be selected simultaneously by holding SHIFT and touching filenames. When multiple files are selected, the first file is previewed.

---

### IMPORT SAMPLE TO MULTISAMPLE (SETTING)
- **Manual Page**: p.85
- **Accessed Via**: Select [E6] IMPORT on the IMPORT SAMPLE TO MULTISAMPLE (SELECT SOURCE) screen
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE TO MULTISAMPLE (SETTING)". Top shows Import File info (e.g., "Selected 3 files(A_Syn4_C3.wav ...)"). Parameter rows: Loop Mode, Normalize, Emphasis toggles. Below: Multisample Name with RENAME button, Create Tone checkbox, Destination Tone. Bottom function bar with labels.
- **Key Elements**:
  - Import File information (number of files selected and first filename)
  - Loop Mode selector (ONE-SHOT default)
  - Normalize toggle (ON/OFF)
  - Emphasis toggle (ON/OFF)
  - Multisample Name field (e.g., "INITIAL MSMPL") with RENAME button
  - Create Tone checkbox
  - Destination Tone field (e.g., "0001:INITIAL TONE")
- **Interactive Elements**:
  - [E1] RENAME - rename the multisample
  - [E2] Loop Mode - select loop mode
  - [E3] APPLY NORMALIZE - toggle normalization
  - [E4] APPLY EMPHASIS - toggle emphasis
  - [E5] SAVE TO STORAGE - save in WAV to internal storage
  - [E6] EXECUTE - execute the import
  - Touch Multisample Name / RENAME to edit name
  - Touch Create Tone checkbox
  - Touch Destination Tone to select
- **Currently Implemented?**: No
- **Notes**: When "Create Tone" is on, a user tone is created with the multisample set as partial 1. The RENAME also applies to the user tone name. After EXECUTE and confirmation, transitions to the IMPORTED SAMPLE LIST screen.

---

### IMPORTED SAMPLE LIST
- **Manual Page**: p.85
- **Accessed Via**: After successful IMPORT to Multisample execution
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORTED SAMPLE LIST" with a progress bar. Top right shows total count (e.g., "Total: 3 samples"). Main area is a table/list with columns: checkbox, No., name, LoopMode, OriginalKey, Gain, Fine, Level. Bottom bar has function buttons.
- **Key Elements**:
  - Progress bar (top, shows import progress)
  - Total sample count (top right)
  - Sample list table with columns: No., name, LoopMode, OriginalKey, Gain, Fine, Level
  - Checkboxes for each sample row
  - Sample entries (e.g., 0001 A_Syn4_C3, ONE-SHOT, 41(C3), 0(dB), 0, 127)
- **Interactive Elements**:
  - [E1] PREVIEW - preview selected sample
  - RENAME button - rename selected sample
  - WAVE EDIT button - open wave editor for selected sample
  - MODIFY button - apply effects to selected sample
  - NEXT button [E6] - proceed to next step
  - Touch rows to select samples
  - Touch checkboxes for multi-selection
- **Currently Implemented?**: No
- **Notes**: This screen appears after importing multiple files to a multisample. It allows reviewing and editing individual samples before finalizing. Each sample can be previewed, renamed, wave-edited, or modified from this list.

---

### MULTISAMPLE EDIT
- **Manual Page**: p.86
- **Accessed Via**: From IMPORTED SAMPLE LIST > [E6] NEXT; or from MULTISAMPLE VIEW > [E1-E4] EDIT1-EDIT4
- **Screen Type**: main screen
- **Layout**: Top bar shows "MULTISAMPLE EDIT" with back arrow. Shows current note information and multisample name at top. "Displays when the multisample is edited" indicator. Main area divided into: (1) Area bar - colored segments showing sample assignments, (2) Keyboard display area - two rows showing keyboard with colored key highlights (upper = zoomed view, lower = full 128-note keyboard), (3) Waveform display area (bottom left), (4) Area list (bottom right) showing sample-to-key-range mappings. Shows original key marker on waveform.
- **Key Elements**:
  - Current note information (top left)
  - Multisample name (top center/right)
  - Edit indicator (shows when multisample has been modified)
  - Area bar - colored segments representing sample key areas (touchable)
  - Keyboard display area:
    - Upper row: zoomed portion of keyboard (controlled by E1)
    - Lower row: full 128-note keyboard (scrollbar when zoomed)
    - Red keys: current note
    - Green keys: selected range for "Assign" or "No Assign"
  - Waveform display area (bottom left) - shows waveform for selected area
  - Original key marker on waveform
  - Area list (bottom right) - table showing key ranges and assigned samples
    - Format: range (e.g., "C-1 - A(b)3"), sample number (e.g., "0001"), sample name, and count
  - "To Pro" toggle button (bottom, switches to MULTISAMPLE EDIT PRO)
- **Interactive Elements**:
  - [E1] - changes scale/zoom of onscreen keyboard; press+turn to scroll when zoomed
  - [E2] To Pro/To Zoom - switches between Pro Edit and Zoom Edit screens
  - [E3] - shifts all samples assigned to keyboard left or right
  - [E4] - shifts the sample of the current area left or right
  - [E5] - shifts only the bottom note of the sample of the current area
  - [E6] - shifts only the top note of the sample of the current area
  - Touch Area bar segments to select areas (color changes to orange)
  - Touch Area list rows to highlight corresponding keyboard region
  - <WRITE> - saves the multisample
  - <MANAGER> - opens MULTISAMPLE MANAGER screen
  - <UTILITY> - opens UTILITY menu for multisamples
- **Currently Implemented?**: No
- **Notes**: This is the primary screen for assigning samples to key ranges within a multisample. The area bar is touch-interactive -- touching an area selects it and shows its waveform. Multiple keys can be selected at the same time. The keyboard display uses color coding: red for current note, green for selected range.

---

### MULTISAMPLE EDIT PRO
- **Manual Page**: p.87
- **Accessed Via**: From MULTISAMPLE EDIT > [E2] To Pro; or directly from MULTISAMPLE EDIT by toggling view
- **Screen Type**: main screen
- **Layout**: Top bar shows "MULTISAMPLE EDIT" with sample info. Same keyboard display area as MULTISAMPLE EDIT. Below the keyboard is a detailed parameter table with columns: No., sample number, sample name, and "SAMPLE" label. Shows many rows of sample assignments with numerical data. Bottom bar shows function buttons including "To Zoom" toggle.
- **Key Elements**:
  - Sample info display (top, e.g., "0001:A_Syn4_C9" with original key and edit number)
  - Keyboard display area (same as MULTISAMPLE EDIT)
  - Detailed sample assignment table with columns for:
    - Row number
    - Sample number (e.g., 0001)
    - Sample name (e.g., A_Syn4_F3)
    - "SAMPLE" label
  - Multiple rows visible simultaneously
- **Interactive Elements**:
  - [E1] - keyboard zoom/scroll (same as MULTISAMPLE EDIT)
  - [E2] To Pro/To Zoom - toggles back to Zoom Edit view
  - [E3] Wave Number - changes all sample numbers in selected area (hold knob while turning to change only at cursor point)
  - [E4] Level - changes Level for all samples in selected area (hold for cursor-point only)
  - [E5] Fine Tune - changes Fine Tune for all samples (hold for cursor-point only)
  - [E6] Original Key - changes Original Key for all samples (hold for cursor-point only); press knob while playing keyboard to set Original Key by note played
  - <WRITE> - saves the multisample
  - <MANAGER> - opens MULTISAMPLE MANAGER
  - <UTILITY> - opens UTILITY menu
- **Currently Implemented?**: No
- **Notes**: The Pro view provides more detailed per-sample parameter editing compared to the Zoom view. Holding a knob while turning it restricts changes to only the sample at the cursor point rather than all samples in the area.

---

### MULTISAMPLE MANAGER
- **Manual Page**: p.87
- **Accessed Via**: From MULTISAMPLE EDIT or MULTISAMPLE EDIT PRO > touch <MANAGER>
- **Screen Type**: main screen
- **Layout**: Top bar shows "MULTISAMPLE MANAGER" with WRITE, RELOAD, MODIFY, UTILITY tabs. "(Select: 0/8000)" counter at top right. Main area is a table/list labeled "KBD Sample List" with columns: checkbox, No., name (with channel indicator S/M), plus additional parameter columns. Below the list is a keyboard display area showing the selected sample's key assignment. Bottom bar has function buttons.
- **Key Elements**:
  - Multi Select instruction: "[SHIFT] + Touch checkbox"
  - "(Select: 0/8000)" counter showing selected/total
  - KBD Sample List table with columns: No., Name, channel (S=Stereo/M=Mono), additional params
  - Sample entries (e.g., 0001 A_Syn4_C3, 0002 A_Syn4_F3, 0003 A_Syn4_G2)
  - Checkboxes for each sample row
  - Keyboard display area below list showing selected sample name and key assignment
- **Interactive Elements**:
  - [E1] - keyboard zoom/scroll
  - [E2] PREVIEW - preview selected sample
  - [E3] - scrolls the list up/down
  - [E4] WAVE EDIT - opens WAVE EDIT screen for selected sample
  - [E5] NO ASSIGN - cancels keyboard assignment for selected sample
  - [E6] ASSIGN - assigns selected sample to keyboard
  - <WRITE> - saves sample parameters
  - <RELOAD> - reloads sample parameters
  - <MODIFY> - applies effects to sample
  - <UTILITY> - opens "Kbd Sample Utility" (p. 89)
  - Touch checkboxes for multi-selection (use SHIFT for multiple)
  - Touch sample rows to select
- **Currently Implemented?**: No
- **Notes**: You can select multiple samples using checkboxes. The topmost checkbox row selects/deselects all. Three states: all selected (filled), some selected (partial), none selected (empty). This screen allows managing which samples are assigned to the keyboard and editing their parameters.

---

### MULTISAMPLE UTILITY (Popup)
- **Manual Page**: p.88
- **Accessed Via**: Touch <UTILITY> on MULTISAMPLE EDIT or MULTISAMPLE EDIT PRO screens
- **Screen Type**: popup / overlay
- **Layout**: Popup menu overlaid on the MULTISAMPLE EDIT screen. Shows a list of utility operations with CANCEL and SELECT buttons at bottom.
- **Key Elements**:
  - RELOAD - restores multisample to last saved state
  - INITIALIZE - initializes current multisample settings, removes all sample assignments
  - SORT - reassigns all samples according to Original Key settings
  - CANCEL button
  - SELECT button
- **Interactive Elements**:
  - Touch menu items to highlight
  - Touch CANCEL to close
  - Touch SELECT to execute the highlighted operation
- **Currently Implemented?**: No
- **Notes**: SORT produces the same result as "Create Multisample". INITIALIZE removes all assignments. RELOAD restores to last-saved state. These are destructive operations on the multisample data.

---

### KBD SAMPLE LIST
- **Manual Page**: p.88
- **Accessed Via**: SAMPLING MENU > [E5] KBD SAMPLE
- **Screen Type**: main screen
- **Layout**: Top bar shows "KBD SAMPLE LIST" with WRITE, RELOAD, MODIFY, UTILITY tabs. "(Select: 0/8000)" counter. Main area is a sample list table with columns: checkbox, No., Name, Ch (channel: S=Stereo/M=Mono), Size, Time, Original Key. Bottom bar shows function buttons. Keyboard display area may also be visible.
- **Key Elements**:
  - Multi Select instruction: "[SHIFT] + Touch checkbox"
  - Sample list table: No., Name, Ch, Size, Time, Original Key
  - Sample entries with details (e.g., stereo/mono indicator, file size, duration)
  - Checkboxes per row
- **Interactive Elements**:
  - [E1] - scrolls list up/down
  - [E2] MARK - selects/deselects checkbox and moves cursor forward; hold SHIFT + turn to select marked samples for editing
  - [E3] PARAM EDIT - switches to KBD SAMPLE LIST (PARAMETER) screen
  - [E4] WAVE EDIT - switches to KBD SAMPLE WAVE EDIT screen
  - [E6] PREVIEW - previews the sample selected by cursor
  - <WRITE> - saves sample parameters
  - <RELOAD> - reloads sample parameters
  - <MODIFY> - applies effects
  - <UTILITY> - opens "KBD SAMPLE UTILITY" (p. 89)
- **Currently Implemented?**: No
- **Notes**: This is the main list view for managing all Kbd samples. You can freely edit parameters, resort, and edit waveforms from here. The MARK function with SHIFT allows batch selection for editing.

---

### KBD SAMPLE LIST (PARAMETER)
- **Manual Page**: p.88
- **Accessed Via**: KBD SAMPLE LIST > [E3] PARAM EDIT
- **Screen Type**: main screen
- **Layout**: Top bar shows "KBD SAMPLE LIST (PARAMETER)" with WRITE, RELOAD, MODIFY, UTILITY tabs. "(Select: 0/8000)" counter. Main area is a parameter table with columns: checkbox, No., Name, LoopMode, OriginalKey, Gain, Fine, Level. Shows edit marks for changed parameters. Bottom function bar.
- **Key Elements**:
  - Multi Select instruction
  - Parameter table: No., Name, LoopMode, OriginalKey, Gain, Fine, Level
  - Edit Mark indicators on modified rows
  - Sample entries with editable parameter values
- **Interactive Elements**:
  - [E1] - scrolls cursor up/down
  - [E2] MARK - selects/deselects checkbox
  - [E3] PARAM EDIT - toggles back to KBD SAMPLE LIST view
  - [E4] WAVE EDIT - switches to KBD SAMPLE WAVE EDIT screen
  - [E6] PREVIEW - previews sample
  - <WRITE> - saves parameters
  - <RELOAD> - reloads parameters
  - <MODIFY> - applies effects
  - <UTILITY> - opens KBD SAMPLE UTILITY
- **Currently Implemented?**: No
- **Notes**: This is the parameter-focused view of the KBD SAMPLE LIST, showing editable columns for Loop Mode, Original Key, Gain, Fine Tune, and Level. Edit marks appear next to parameters that have been changed from their saved values.

---

### KBD SAMPLE WAVE EDIT (from KBD SAMPLE)
- **Manual Page**: p.88-89
- **Accessed Via**: KBD SAMPLE LIST > [E4] WAVE EDIT; or MULTISAMPLE MANAGER > [E4] WAVE EDIT
- **Screen Type**: main screen
- **Layout**: Same layout as the KBD SAMPLE WAVE EDIT screen (p.82). Top bar with sample name/number, WRITE/RELOAD/MODIFY/UTILITY tabs. Large waveform display with start/loop/end markers. Right side parameters. Bottom bar with point values and zoom controls.
- **Key Elements**:
  - Same as KBD SAMPLE WAVE EDIT (see above entry for p.82)
  - SAMPLE selector, waveform display, parameter fields
- **Interactive Elements**:
  - Same as KBD SAMPLE WAVE EDIT (p.82): E1-E6 knobs, WRITE/RELOAD/MODIFY/UTILITY, draggable points
- **Currently Implemented?**: No
- **Notes**: This is the same KBD SAMPLE WAVE EDIT screen but accessed from the KBD SAMPLE LIST or MULTISAMPLE MANAGER context rather than from a fresh sampling session. Functionality is identical.

---

### KBD SAMPLE UTILITY (Popup)
- **Manual Page**: p.89
- **Accessed Via**: Touch <UTILITY> on KBD SAMPLE WAVE EDIT, KBD SAMPLE LIST, or SAMPLE PARAMETER screens
- **Screen Type**: popup / overlay
- **Layout**: Popup menu overlaid on the current KBD SAMPLE screen. Shows a list of utility operations. CANCEL and SELECT buttons at bottom. The menu items vary depending on which screen it was called from and how many samples are selected.
- **Key Elements**:
  - RENAME - rename the sample
  - DELETE - delete sample(s)
  - ASSIGN TO KEYBOARD - assign sample to keyboard
  - MOVE - move sample to different position
  - COPY - copy sample
  - CREATE MULTISAMPLE - create multisample from selected samples (when checkboxes selected)
  - IMPORT - import an audio file into the KBD SAMPLE LIST
  - CANCEL button
  - SELECT button
- **Interactive Elements**:
  - Touch menu items to highlight
  - Touch CANCEL to close without executing
  - Touch SELECT to execute highlighted operation
- **Currently Implemented?**: No
- **Notes**: The available menu items change depending on context (which screen called it) and how many samples are selected. CREATE MULTISAMPLE switches to the CREATE MULTISAMPLE screen. ASSIGN TO KEYBOARD lets you use the keyboard to specify the Destination Tone. MOVE and COPY open destination selection dialogs.

---

### SAMPLE MODIFY (Popup)
- **Manual Page**: p.90
- **Accessed Via**: Touch <SAMPLE MODIFY> or <MODIFY> on KBD SAMPLE WAVE EDIT, KBD SAMPLE LIST, or SAMPLE PARAMETER screens
- **Screen Type**: popup / overlay
- **Layout**: Popup menu overlaid on the current screen (e.g., KBD SAMPLE WAVE EDIT with waveform visible behind). Shows a list of modify operations. CANCEL and SELECT buttons at bottom.
- **Key Elements**:
  - TRUNCATE - sets range using start/end points and erases unnecessary portions
  - EMPHASIS - emphasizes the high-end range of the sample
  - NORMALIZE - raises level of entire sample without exceeding maximum
  - CANCEL button
  - SELECT button
- **Interactive Elements**:
  - Touch menu items to highlight
  - Touch CANCEL to close
  - Touch SELECT to execute the highlighted operation
- **Currently Implemented?**: No
- **Notes**: None of the SAMPLE MODIFY functions can be undone. If working on an important sample, copy it to a different sample number before executing. When multiple samples are selected (checkboxes), their icons are grayed out. Clear all checkboxes to ensure the cursor is on the target sample. Parameters are automatically saved after execution.

---

### MULTISAMPLE VIEW
- **Manual Page**: p.90
- **Accessed Via**: SAMPLING MENU > [E6] MULTI SAMPLE; or from Tone Edit > UTILITY > MULTISAMPLE EDIT (for Z-Core tone)
- **Screen Type**: main screen
- **Layout**: Top bar shows "MULTISAMPLE VIEW" with ZONE2 tab and multisample name (e.g., "A_Syn4_C3"). Main area divided into: (1) Top section - keyboard visualization showing status of samples assigned for partials 1-4, (2) Center - Partial switches (ON/OFF per partial) with velocity range indicators (1-4 numbered columns on right), (3) Bottom section - Edit mark indicators, multisample number display, function buttons for EDIT 1-4, TONE LIST, MULTISAMPLE selector.
- **Key Elements**:
  - Multisample name (top)
  - Keyboard display showing sample assignment status for partials 1-4
  - Velocity Range indicators (right side, showing ranges for partials 1-4)
  - Partial switches: ON/OFF buttons for each partial (up to 4)
  - Partial labels (1, 2, 3, 4)
  - Multisample number fields per partial
  - Edit mark indicators
  - EDIT 1-4 buttons (bottom row)
  - TONE LIST button
  - MULTISAMPLE selector
- **Interactive Elements**:
  - [E1] EDIT1 - switches to MULTISAMPLE EDIT for partial 1
  - [E2] EDIT2 - switches to MULTISAMPLE EDIT for partial 2
  - [E3] EDIT3 - switches to MULTISAMPLE EDIT for partial 3
  - [E4] EDIT4 - switches to MULTISAMPLE EDIT for partial 4
  - [E5] TONE LIST - opens the Tone List
  - [E6] TONE INITIALIZE FOR MULTISAMPLE - initializes optimum settings for a tone using multisamples
  - Touch partial switches (ON/OFF) to toggle
  - Touch multisample numbers to select
- **Currently Implemented?**: No
- **Notes**: You can assign multisamples to partials 2-4 in addition to partial 1. On the FANTOM, you can assign multisample waveforms to all four partials. This screen can also be accessed from Tone Edit > UTILITY > MULTISAMPLE EDIT for the Z-Core tone. Any unsaved multisamples are erased when power is turned off -- use WRITE to save.

---

### WAVE/EXPANSION MEMORY INFO
- **Manual Page**: p.91
- **Accessed Via**: SAMPLING MENU > [E1] WAVE/EXP MEMORY INFO
- **Screen Type**: main screen
- **Layout**: Top bar shows "WAVE/EXPANSION MEMORY INFO". Main area shows a horizontal bar graph with two colored segments: "Kbd Sample" (left portion) and "Expansion" (right portion). Below the bar shows sizes (e.g., "46 MB" and "120 MB"). Bottom shows "Free Space: 89 MB / 256 MB". Bottom bar has function buttons.
- **Key Elements**:
  - Memory usage bar graph (horizontal)
  - Kbd Sample usage (colored segment, left)
  - Expansion usage (colored segment, right)
  - Size labels under each segment (e.g., 46 MB, 120 MB)
  - Free Space display (e.g., "Free Space: 89 MB / 256 MB")
  - Total memory capacity shown
- **Interactive Elements**:
  - [E1] KBD SMPL OPTIMIZE - optimizes Kbd sample memory (defragments)
  - [E6] EXPANSION INFO - opens the EXPANSION INFO screen
- **Currently Implemented?**: No
- **Notes**: Use this to check memory usage before sampling. KBD SMPL OPTIMIZE defragments the sample storage area. The memory bar visually shows how much is used by Kbd samples vs. Expansion content vs. free space. Never turn off power while "working.." message is displayed during optimization.

---

### EXPANSION INFO
- **Manual Page**: p.91
- **Accessed Via**: WAVE/EXPANSION MEMORY INFO > [E6] EXPANSION INFO
- **Screen Type**: sub-screen
- **Layout**: Top bar shows "EXPANSION INFO" with back arrow. Main area shows a list of installed expansion content with colored category icons and names. Each row shows an icon/badge (e.g., "WAVE"), a number (e.g., EXZ001), and a name (e.g., "Stage Piano 1").
- **Key Elements**:
  - List of installed expansions with:
    - Category icon/badge (colored, e.g., WAVE)
    - Expansion number (e.g., EXZ001, EXZ002)
    - Expansion name (e.g., "Stage Piano 1", "Stage Piano 2", "Session Drums")
  - Multiple rows visible
- **Interactive Elements**:
  - Scroll through list (touch or E1 knob)
  - Back arrow to return to WAVE/EXPANSION MEMORY INFO
- **Currently Implemented?**: No
- **Notes**: This is an informational screen showing which expansion packs (such as EXZ series) are installed. Some content may not be installable even if free memory is available.

---

### IMPORT SAMPLE (SELECT FILE)
- **Manual Page**: p.91
- **Accessed Via**: MENU > UTILITY > IMPORT > IMPORT SAMPLE (for .svz file import)
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE (SELECT FILE)". Main area is a file browser showing USB flash drive contents with expandable folder tree. Files show .svz extension and number of samples. Bottom bar has function buttons.
- **Key Elements**:
  - File browser tree (folder icons, file icons)
  - Folder hierarchy (e.g., Root > EXPORT SAMPLE > ROLAND > FANTOM > SOUND)
  - .svz file entries with sample count display
  - Number of samples indicator next to each .svz file
- **Interactive Elements**:
  - [E1] - scrolls up/down
  - [E6] SELECT - selects the .svz file to import
  - Touch files/folders to navigate
- **Currently Implemented?**: No
- **Notes**: This is specifically for importing FANTOM sample data from .svz files on USB flash drives. The .svz format is a proprietary Roland sample archive format.

---

### IMPORT SAMPLE (SELECT SOURCE)
- **Manual Page**: p.91
- **Accessed Via**: IMPORT SAMPLE (SELECT FILE) > [E6] SELECT
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE (SELECT SOURCE)" with "No. marked/no. of items" counter (e.g., "(Select: 33/33)"). Multi Select instruction. Main area is a table with columns: checkbox, No., Name, Ch, Size. Rows show individual samples from the .svz file. Bottom bar has function buttons.
- **Key Elements**:
  - "(Select: XX/XX)" counter
  - Multi Select instruction: "[SHIFT] + Touch checkbox"
  - Sample list table: No., Name, Ch (channel), Size
  - Checkboxes per sample row
  - Sample entries (e.g., "0001 Sawlead-C1-95-P1", S, 1976KB)
- **Interactive Elements**:
  - [E1] - scrolls up/down
  - [E2] CLEAR ALL - clears all checkboxes
  - [E3] SELECT ALL - selects all checkboxes
  - [E4] PREVIEW - previews sample at cursor
  - [E6] NEXT - advances to IMPORT SAMPLE (SELECT DESTINATION)
  - Touch checkboxes to select/deselect individual samples
  - Hold SHIFT + touch for multi-select
- **Currently Implemented?**: No
- **Notes**: Allows selecting which samples from the .svz archive to import. CLEAR ALL and SELECT ALL provide batch operations. Preview is available for individual samples.

---

### IMPORT SAMPLE (SELECT DESTINATION)
- **Manual Page**: p.92
- **Accessed Via**: IMPORT SAMPLE (SELECT SOURCE) > [E6] NEXT
- **Screen Type**: main screen
- **Layout**: Top bar shows "IMPORT SAMPLE (SELECT DESTINATION)" with "(Select: XX/XX)" counter. Main area shows a list of existing samples in the FANTOM with checkboxes. Rows show sample entries -- some marked "Cur" (current/existing, shown in one color) and some marked "New" (new imports, shown in a different color). Bottom bar has function buttons.
- **Key Elements**:
  - "(Select: XX/XX)" counter
  - Multi Select instruction
  - Sample destination list with:
    - Existing samples marked "Cur" (current)
    - Import target slots marked "New"
  - Color coding: existing samples vs. new import slots
  - Checkbox per row
- **Interactive Elements**:
  - [E1] - scrolls list
  - [E2] CLEAR ALL - clears all import selections
  - [E3] SELECT ALL - selects all for import
  - [E6] EXECUTE - executes the import operation
  - Touch checkboxes to select destination slots
  - Hold SHIFT + touch for multi-select
- **Currently Implemented?**: No
- **Notes**: You cannot select a destination checkbox if a sample already exists at that location. Samples used by ZEN-Core/drum tones are shown distinctly. After EXECUTE, a confirmation appears. [E5] OK executes; [E6] CANCEL cancels. After completion, returns to the IMPORT MENU screen.

---

### PAD BANK
- **Manual Page**: p.93
- **Accessed Via**: Press the [BANK] button (in the pad section of the panel)
- **Screen Type**: main screen
- **Layout**: Top bar shows "PAD BANK" with back arrow. Instruction text: "Press the pads [1]-[4] to select." Main area shows four bank slots arranged horizontally: BANK 1, BANK 2, BANK 3, BANK 4. Each bank has a small grid icon showing pad assignments. Bottom right shows EXIT button.
- **Key Elements**:
  - "Press the pads [1]-[4] to select." instruction
  - BANK 1, BANK 2, BANK 3, BANK 4 labels with grid icons
  - Visual representation of pad contents per bank (small colored grid)
  - EXIT button
- **Interactive Elements**:
  - Press pads [1]-[4] to select the corresponding bank
  - Touch bank icons on screen to select
  - EXIT to return to previous screen
- **Currently Implemented?**: No
- **Notes**: Each bank contains 16 pad sample slots. Selecting a bank automatically returns to the previous screen. The pad number corresponds to the bank number (pad 1 = Bank 1, etc.).

---

### SAMPLE PAD
- **Manual Page**: p.94
- **Accessed Via**: Hold [SHIFT] + press [SAMPLING] button
- **Screen Type**: main screen
- **Layout**: Top bar shows "SAMPLE PAD" with back arrow and keyboard/Fantom silhouette image. Main area shows a 4x4 grid of pad cells (16 pads total) organized in 4 rows of 4. Each pad cell shows: pad number, status flags (GATE, LOOP, FX SW indicators as ON/OFF), sample name, stereo/mono indicator, and sample size. Four BANK tabs (BANK1-BANK4) across the top of the pad grid. Right side has SAMPLING and SAMPLE UTILITY buttons. Bottom bar has WAVE EDIT, QUICK EDIT, and IMPORT function buttons.
- **Key Elements**:
  - 4x4 pad grid (16 pad cells)
  - Per-pad display: pad number (1-16), GATE/LOOP/FX SW status flags, sample name, stereo/mono, file size
  - BANK1-BANK4 tabs
  - SAMPLING button (top right) - links to SAMPLING STANDBY
  - SAMPLE UTILITY button (top right)
  - PAD SAMPLER LEV (pad sample playback level, common to all pads)
  - Bottom bar: WAVE EDIT [E1], QUICK EDIT [E2], IMPORT [E6]
- **Interactive Elements**:
  - [E1] WAVE EDIT - opens WAVE EDIT screen (p. 99)
  - [E2] QUICK EDIT - opens QUICK EDIT screen (p. 99)
  - [E6] IMPORT - opens PAD SAMPLE IMPORT screen (p. 84/97)
  - Touch <BANK1-4> tabs to switch banks
  - Touch pad cells to select individual pads
  - Touch <SAMPLING> to access SAMPLING STANDBY screen (p. 95)
  - Touch <SAMPLE UTILITY> to access SAMPLE UTILITY screen (p. 100)
  - PAD SAMPLER LEV adjustable
- **Currently Implemented?**: No
- **Notes**: This is the main overview screen for all pad samples. It shows all 16 pads in the selected bank with their assignments, status, and metadata at a glance. Unlit pads with no sample assigned will not produce sound when pressed.

---

### SAMPLING DESTINATION (PAD)
- **Manual Page**: p.95
- **Accessed Via**: From SAMPLING STANDBY (TO PAD) > touch <SAMPLE PAD>
- **Screen Type**: main screen
- **Layout**: Top bar shows "SAMPLING DESTINATION (PAD)". Same 4x4 pad grid layout as SAMPLE PAD screen but used for selecting which pad to sample into. BANK1-BANK4 tabs. Each pad shows sample info. Bottom right has SELECT button.
- **Key Elements**:
  - 4x4 pad grid with sample assignments visible
  - BANK1-BANK4 tabs
  - Pad status indicators (GATE, LOOP, FX SW, sample name, size)
  - SELECT button [E6]
- **Interactive Elements**:
  - Touch a pad icon to select the destination bank and pad
  - Touch BANK tabs to switch banks
  - [E6] SELECT - confirms the selection
- **Currently Implemented?**: No
- **Notes**: If a pad sample already exists in the selected destination, the message "Sample Already Exists. Overwrite?" appears with [E5] OK to overwrite or [E6] CANCEL to cancel.

---

### SAMPLING STANDBY (TO PAD)
- **Manual Page**: p.95
- **Accessed Via**: SAMPLING MENU > touch SAMPLING <To Pad>; or from SAMPLE PAD > touch <SAMPLING>
- **Screen Type**: main screen
- **Layout**: Top bar shows "SAMPLING STANDBY (TO PAD)" with back arrow. Left side shows: SAMPLE PAD display area (small pad grid with highlighted destination pad, e.g., "1-1"), time counter (000:00:00). Left column has: Sampling Mode selector, Format selector, AUDIO IN ON/OFF toggle. Center/right has: level meter (L/R channels), recording status "STANDBY". Bottom has: Click ON/OFF, SETTING row (TRIG/IN toggle, AUTO TRIG, AUTO TRIGGER LEVEL / MIC LINE, TEMPO / REC LEVEL). CANCEL and START buttons at bottom right.
- **Key Elements**:
  - SAMPLE PAD display area (top left) - shows mini pad grid with destination pad highlighted
  - Time counter (000:00:00)
  - Level meter (L/R, right side)
  - Recording status: "STANDBY"
  - Sampling Mode selector (KBD+INPUT, KBD, INPUT)
  - Format selector (MONO/STEREO)
  - AUDIO IN ON/OFF toggle
  - Click ON/OFF toggle
  - SETTING section with [E1] TRIG/IN toggle:
    - TRIG mode: AUTO TRIG on/off [E2], AUTO TRIGGER LEVEL [E3], TEMPO [E4]
    - IN mode: MIC/LINE selector [E2], (none) [E3], REC LEVEL [E4]
  - CANCEL [E5] and START [E6] buttons
- **Interactive Elements**:
  - [E1] TRIG/IN - toggles between trigger settings and input settings for E2-E4
  - [E2] AUTO TRIG on/off (TRIG mode) / MIC/LINE selector (IN mode)
  - [E3] AUTO TRIGGER LEVEL (TRIG mode) / (none in IN mode)
  - [E4] TEMPO (TRIG mode) / REC LEVEL (IN mode)
  - [E5] CANCEL - cancels sampling standby
  - [E6] START - begins sampling
  - Touch <SAMPLE PAD> to change destination pad/bank
  - Touch <Sampling Mode> to select input source
  - Touch <Format> to toggle mono/stereo
  - Touch <AUDIO IN> to toggle
  - Touch <Click> to toggle click tone
- **Currently Implemented?**: No
- **Notes**: Sampling modes: KBD+INPUT (keyboard + audio input), KBD (keyboard only), INPUT (audio input only). The [E1] knob toggles between TRIG and IN parameter sets for E2-E4. Auto Trigger starts sampling automatically when input exceeds the set level. Format options: MONO (single waveform) or STEREO (two waveforms, L and R). Samples are saved automatically to sample memory; no manual save needed.

---

### PAD SAMPLE IMPORT (File Browser)
- **Manual Page**: p.97
- **Accessed Via**: SAMPLE PAD > [E6] IMPORT; or hold [SHIFT] + [SAMPLING] then touch IMPORT
- **Screen Type**: main screen
- **Layout**: Top bar shows "PAD SAMPLE IMPORT". Two tabs: USB MEMORY and INTERNAL STORAGE. Main area is a file browser showing folder/file hierarchy. Files show size. Bottom bar has function buttons: AUTO IMPORT [E4] and IMPORT [E6].
- **Key Elements**:
  - USB MEMORY / INTERNAL STORAGE tabs
  - File browser tree with expandable folders
  - File entries showing name and size (e.g., "MySample_001.wav 3.0 MB")
  - Folder navigation
- **Interactive Elements**:
  - [E1] knob / up-down buttons - scroll/select files
  - [E4] AUTO IMPORT - automatically imports files to unassigned pads sequentially
  - [E6] IMPORT - imports selected file to a specific pad (manual selection)
  - Touch files/folders to navigate
  - Touch tabs to switch between USB MEMORY and INTERNAL STORAGE
  - [ENTER] button expands/collapses folders
  - Right/left buttons expand/collapse folders
  - [EXIT] button returns to previous screen
- **Currently Implemented?**: No
- **Notes**: Supports WAV/AIFF (44.1/48/96 kHz, 8/16/24 bit) and MP3 (44.1/48 kHz, various bitrates including VBR). You can also import from "EXPORT SAMPLE" folder or "INTERNAL LIBRARY". Two import methods: AUTO IMPORT (auto-assigns to empty pads) and IMPORT (manual pad selection).

---

### SAMPLE IMPORT (SELECT DESTINATION)
- **Manual Page**: p.98
- **Accessed Via**: PAD SAMPLE IMPORT > select file > [E6] IMPORT
- **Screen Type**: main screen
- **Layout**: Top bar shows "SAMPLE IMPORT (SELECT DESTINATION)" with import source filename (e.g., "MySample_001.WAV"). Main area shows BANK1-BANK4 tabs and a 4x4 pad grid identical to SAMPLE PAD layout. Each pad cell shows sample info. The selected import-destination pad is highlighted/framed in red. Bottom bar shows CANCEL and EXECUTE buttons.
- **Key Elements**:
  - Import source filename (top)
  - BANK1-BANK4 tabs
  - 4x4 pad grid with sample assignments
  - Import-destination pad highlighted in red frame
  - CANCEL and EXECUTE buttons
- **Interactive Elements**:
  - Touch pad icons to select import destination bank and pad
  - Touch BANK tabs to switch banks
  - CANCEL to cancel import
  - [E6] EXECUTE - executes the import
- **Currently Implemented?**: No
- **Notes**: After EXECUTE, a confirmation message appears. [E5] OK executes; [E6] CANCEL cancels. If the destination pad already has a sample, "A Sample Already Exists. Overwrite?" appears. Never turn off power during import.

---

### SAMPLE PAD (QUICK EDIT)
- **Manual Page**: p.99
- **Accessed Via**: SAMPLE PAD > [E2] QUICK EDIT
- **Screen Type**: main screen
- **Layout**: Top bar shows "SAMPLE PAD (QUICK EDIT)" with back arrow. BANK1-BANK4 tabs and SAMPLING / SAMPLE UTILITY buttons (top right). Main area shows a 4x4 pad grid, but each pad cell now shows editable parameter values instead of sample info: GATE (ON/OFF), LOOP (ON/OFF), FX SW (ON/OFF) per pad. All values are touch-editable. Bottom bar shows WAVE EDIT [E1], QUICK EDIT toggle [E2], IMPORT [E6].
- **Key Elements**:
  - 4x4 pad grid with per-pad editable parameters:
    - GATE: ON/OFF
    - LOOP: ON/OFF
    - FX SW: ON/OFF
  - BANK1-BANK4 tabs
  - SAMPLING and SAMPLE UTILITY buttons (top right)
- **Interactive Elements**:
  - Touch individual GATE/LOOP/FX SW values on each pad to toggle ON/OFF
  - Touch BANK tabs to switch banks
  - [E1] WAVE EDIT - switches to WAVE EDIT view
  - [E2] QUICK EDIT - toggles quick edit mode (returns to SAMPLE PAD when toggled off)
  - [E6] IMPORT - opens import screen
  - Touch <SAMPLING> or <SAMPLE UTILITY> for respective functions
- **Currently Implemented?**: No
- **Notes**: GATE: ON = stops when pad released, OFF = continues playing after release (use HOLD to sustain). LOOP: ON = loops playback, OFF = one-shot. FX SW: ON = master FX applied, OFF = no FX. Quick Edit provides a fast overview for toggling these three key parameters across all 16 pads without entering per-pad edit screens.

---

### WAVE EDIT (Pad Sample)
- **Manual Page**: p.99-100
- **Accessed Via**: SAMPLE PAD > [E1] WAVE EDIT > select bank > select pad; or SAMPLE PAD > touch pad > [E1] WAVE EDIT
- **Screen Type**: main screen
- **Layout**: Top bar shows "WAVE EDIT" with back arrow and SAMPLE selector (e.g., "SAMPLE 1-1:PartA_Riff_B_80B"). Right side panel shows SAMPLE UTILITY button and parameter toggles: GATE (ON/OFF), LOOP (ON/OFF), EFFECT SW (ON/OFF). Center area has a large waveform display with start point and end point markers (draggable). Bottom bar shows: START POINT value, END POINT value, ZOOM HORZ, ZOOM VERT, LEVEL, PREVIEW knob.
- **Key Elements**:
  - SAMPLE selector (top, e.g., "1-1:PartA_Riff_B_80B")
  - Waveform display (large, center) with blue waveform on dark background
  - Start point marker (left, draggable with arrows)
  - End point marker (right, draggable with arrows)
  - SAMPLE UTILITY button (top right)
  - Parameter panel (right side):
    - GATE: ON/OFF toggle
    - LOOP: ON/OFF toggle
    - EFFECT SW: ON/OFF toggle
  - Bottom bar values: START POINT, END POINT, ZOOM HORZ, ZOOM VERT, LEVEL
- **Interactive Elements**:
  - SAMPLE touch target - selects another pad sample
  - [E1] START POINT - adjusts playback start position (000000000-)
  - [E2] END POINT - adjusts playback end position (000001000-)
  - [E3] ZOOM HORZ - horizontal zoom (1/65536-1/1)
  - [E4] ZOOM VERT - vertical zoom (x1-x128)
  - [E5] LEVEL - adjusts sample volume (0-127)
  - [E6] PREVIEW - auditions sample while pressing knob
  - Touch GATE/LOOP/EFFECT SW to toggle
  - Touch <SAMPLE UTILITY> to open SAMPLE UTILITY popup
  - Drag START POINT and END POINT icons on waveform to adjust visually
  - Drag waveform display to scroll
- **Currently Implemented?**: No
- **Notes**: Parameters: START POINT (000000000-), END POINT (000001000-), LEVEL (0-127), GATE (OFF/ON), LOOP (OFF/ON), FX SW (OFF/ON). The waveform display supports direct dragging of start/end point markers. You can also scroll the waveform by dragging on a non-marker area. Press [EXIT] to return to SAMPLE PAD screen. Pad sample is saved automatically.

---

### SAMPLE UTILITY (Popup - from SAMPLE PAD)
- **Manual Page**: p.100
- **Accessed Via**: SAMPLE PAD screen > touch <SAMPLE UTILITY>
- **Screen Type**: popup / overlay
- **Layout**: Popup window overlaid on the SAMPLE PAD screen. Shows a list of utility operations. The operations apply to the pad sample selected by the pads. DELETE ALL and EXPORT ALL (WAV) apply to all pad samples.
- **Key Elements**:
  - RENAME - rename the pad sample
  - TRUNCATE - cut unwanted regions (set start/end points first)
  - DELETE - delete the selected pad sample
  - DELETE ALL - delete all pad samples in BANK 1-4
  - EXPORT (WAV) - export selected pad sample as WAV to USB
  - EXPORT ALL (WAV) - export all pad samples as WAV to USB
  - CANCEL button
  - SELECT button
- **Interactive Elements**:
  - Touch menu items to highlight
  - Touch CANCEL to close
  - Touch SELECT to execute
- **Currently Implemented?**: No
- **Notes**: The available operations differ from the WAVE EDIT version. DELETE ALL removes all samples across all four banks (BANK 1-4). EXPORT saves as 48 kHz 16-bit WAV to the "EXPORT SAMPLE" folder on USB. Operations that require start/end point specification (TRUNCATE) should be done from WAVE EDIT context.

---

### SAMPLE UTILITY (Popup - from WAVE EDIT)
- **Manual Page**: p.100-101
- **Accessed Via**: WAVE EDIT (Pad Sample) screen > touch <SAMPLE UTILITY>
- **Screen Type**: popup / overlay
- **Layout**: Same popup style as SAMPLE PAD version but with slightly different menu options. Overlaid on the WAVE EDIT screen with waveform visible behind.
- **Key Elements**:
  - RENAME - rename the pad sample
  - TRUNCATE - cut unwanted regions using start/end points from WAVE EDIT
  - DELETE - delete the selected pad sample
  - EXPORT (WAV) - export selected pad sample as WAV
  - CANCEL button
  - SELECT button
- **Interactive Elements**:
  - Touch menu items to highlight
  - Touch CANCEL to close
  - Touch SELECT to execute
- **Currently Implemented?**: No
- **Notes**: The WAVE EDIT version of SAMPLE UTILITY lacks DELETE ALL and EXPORT ALL (WAV) that are available in the SAMPLE PAD version. TRUNCATE here uses the start and end points currently set in the WAVE EDIT screen. By exporting after truncate, you can export just the portion between start and end points. Exported WAV is 48 kHz 16-bit format.

---

## Summary

### Screen Count by Category

| Category | Count |
|---|---|
| Sampling Menu & Navigation | 1 |
| Sampling to Keyboard | 4 (Standby, Recording, Dialog, Wave Edit) |
| Sampling to Storage | 2 (Standby, Dialog) |
| Import to Keyboard | 2 (Select Source, Setting) |
| Import to Multisample | 3 (Select Source, Setting, Imported List) |
| Multisample Editing | 5 (Edit, Edit Pro, Manager, Utility popup, View) |
| Kbd Sample Management | 5 (List, Parameter, Wave Edit, Utility popup, Modify popup) |
| Memory Info | 2 (Wave/Expansion Info, Expansion Info) |
| Sample Data Import (.svz) | 3 (Select File, Select Source, Select Destination) |
| Pad Samples | 10 (Bank, Sample Pad, Destination, Standby, Import Browser, Import Destination, Quick Edit, Wave Edit, Utility from Pad, Utility from Wave Edit) |
| **Total** | **37** |

### Implementation Status

All 37 screens in this section are currently **not implemented**. The currently implemented screen types (home, zone-view, key-range, write, menu, tone-select, effect) do not cover any sampler functionality.

### Key Screen Relationships

```
[SAMPLING] button
  --> SAMPLING MENU (hub)
        |-- SAMPLING <To Keyboard> --> STANDBY (TO KBD) --> NOW SAMPLING --> Dialog --> KBD SAMPLE WAVE EDIT
        |-- SAMPLING <To Storage>  --> STANDBY (TO STORAGE) --> Dialog
        |-- SAMPLING <To Pad>      --> STANDBY (TO PAD) --> (recording) --> auto-saves
        |-- IMPORT <To Keyboard>   --> SELECT SOURCE --> SETTING --> (executes)
        |-- IMPORT <To Pad>        --> PAD SAMPLE IMPORT --> SELECT DESTINATION --> (executes)
        |-- IMPORT <To Multisample>--> SELECT SOURCE --> SETTING --> IMPORTED SAMPLE LIST --> MULTISAMPLE EDIT
        |-- [E1] WAVE/EXP MEMORY INFO --> EXPANSION INFO
        |-- [E4] PAD SAMPLE        --> SAMPLE PAD --> QUICK EDIT / WAVE EDIT / IMPORT
        |-- [E5] KBD SAMPLE        --> KBD SAMPLE LIST --> PARAMETER / WAVE EDIT
        |-- [E6] MULTISAMPLE       --> MULTISAMPLE VIEW --> MULTISAMPLE EDIT (PRO) --> MULTISAMPLE MANAGER

[SHIFT] + [SAMPLING]
  --> SAMPLE PAD (direct access)

[BANK] button
  --> PAD BANK (bank selection)
```
