# Fantom 08 Screen Catalog: Part 3 -- Controllers, Synth Ctrl, Motional Pad, and Editing

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, Pages 47-65
> **Sections Covered**: Playing the General-Purpose Controllers (pp. 47-48), Using the SYNTH CTRL (p. 49), Motional Pad (pp. 50-51), Chapter 04: Editing -- Scene, Zone, Tone (pp. 53-65)
> **Date Cataloged**: 2026-02-23

## Currently Implemented Screen Types

| ScreenType | Component | Status |
|---|---|---|
| `home` | SceneSelectScreen | Implemented |
| `zone-view` | ZoneViewScreen | Implemented |
| `key-range` | KeyRangeScreen | Implemented |
| `write` | WriteScreen | Implemented |
| `menu` | MenuScreen | Implemented |
| `tone-select` | MenuScreen | Implemented |
| `effect` | MenuScreen | Implemented |

---

## Screens Found in Pages 47-65

---

### PAN/LEVEL Popup

- **Manual Page**: p. 47
- **Accessed Via**: Press the [PAN/LEVEL] button to make it light, then move a control knob or slider
- **Screen Type**: popup / overlay
- **Layout**: Small popup window that appears over the current screen. Shows the edited parameter name and its current value. The popup automatically closes after a short time.
- **Key Elements**:
  - Parameter name (e.g., "Pan" or "Level")
  - Current value (numeric)
  - Associated zone number indicator
- **Interactive Elements**: No direct touch interaction. Knobs 1-8 control pan of zones 1-8; sliders 1-8 control volume of zones 1-8. Knob/slider numbers correspond to zone numbers.
- **Currently Implemented?**: No
- **Notes**: This is a transient popup, not a full screen. It auto-dismisses. When [PAN/LEVEL] is lit, all knobs and sliders are locked to pan/volume control per zone.

---

### ASSIGN Popup

- **Manual Page**: p. 47
- **Accessed Via**: Press the [ASSIGN] button to make it light, then move a control knob or slider
- **Screen Type**: popup / overlay
- **Layout**: Same transient popup style as PAN/LEVEL. Shows the assigned function name and its current value.
- **Key Elements**:
  - Assigned parameter/function name
  - Current value
- **Interactive Elements**: Knobs and sliders adjust parameters assigned by the scene (ASSIGN1) or system (ASSIGN2). ASSIGN1 = [ASSIGN] button alone (scene-level assignments). ASSIGN2 = [ASSIGN] + [PAN/LEVEL] together (system-level assignments).
- **Currently Implemented?**: No
- **Notes**: ASSIGN1 assignments are per-scene. ASSIGN2 assignments are global/system-wide. Holding [SHIFT] + pressing [ASSIGN] opens a settings screen for assigning parameters or functions (see Parameter Guide p. 164 or System Parameter p. 164).

---

### ASSIGN Settings Screen

- **Manual Page**: p. 47 (referenced, details in Parameter Guide p. 164)
- **Accessed Via**: Hold [SHIFT] + press [ASSIGN] button
- **Screen Type**: sub-screen (parameter editing)
- **Layout**: Settings screen for assigning parameters or functions to knobs/sliders when in ASSIGN mode.
- **Key Elements**:
  - List of assignable parameters/functions
  - Source controller (which knob/slider)
  - Target parameter
- **Interactive Elements**: E1-E6 knobs for navigation and editing
- **Currently Implemented?**: No
- **Notes**: Referenced on p. 47 but full details are in the Parameter Guide PDF and System Parameter section (p. 164).

---

### Controller Assign Settings Screen (WHEEL/S1/S2/PEDAL)

- **Manual Page**: p. 48
- **Accessed Via**: Hold [SHIFT] + operate WHEEL 1-2, [S1]/[S2] button, or a pedal connected to PEDAL CTRL 1/2 jack
- **Screen Type**: sub-screen (parameter editing)
- **Layout**: Settings screen for assigning parameters or functions to wheels, S1/S2 buttons, and pedals.
- **Key Elements**:
  - Controller source selector (Wheel 1, Wheel 2, S1, S2, Pedal CTRL 1, Pedal CTRL 2)
  - Parameter assignment list
  - Pedal Assign Source setting (SYS or SCENE)
  - Wheel Assign Source setting (SYS or SCENE)
  - S1-S2 Assign Source setting (SYS or SCENE)
- **Interactive Elements**: Parameter selection via cursor, value editing via [VALUE] dial
- **Currently Implemented?**: No
- **Notes**: The pitch bend lever and modulation lever have fixed functions and cannot be reassigned. The HOLD pedal jack function is also fixed (damper pedal). Assign Source determines whether assignments come from system settings (SYS) or scene settings (SCENE). Full details in Parameter Guide p. 164 or System Parameter p. 164.

---

### Synth Ctrl -- OSC PRM Screen (Tone Edit ZOOM)

- **Manual Page**: p. 49
- **Accessed Via**: Press the [OSC] button in the SYNTH CTRL section while a scene is loaded
- **Screen Type**: sub-screen (jumps to TONE EDIT ZOOM screen at the OSC parameter page)
- **Layout**: Displays the TONE EDIT ZOOM screen focused on the OSC (Oscillator) parameters. Shows graphical representation of the oscillator waveform and key parameters.
- **Key Elements**:
  - OSC parameter tab selected in left sidebar
  - Waveform type display
  - Key parameters displayed graphically
  - E2-E6 knob assignments shown at bottom
- **Interactive Elements**: E2-E6 knobs edit the corresponding parameters shown on screen. [OSC] button navigates directly to this screen.
- **Currently Implemented?**: No
- **Notes**: This is not a standalone screen -- it jumps to the Tone Edit ZOOM screen (see below) with the OSC tab pre-selected. The edited parameter value appears in a popup window.

---

### Synth Ctrl -- FILTER Screen (Tone Edit ZOOM)

- **Manual Page**: p. 49
- **Accessed Via**: Press the [PARAM] button in the FILTER section of the SYNTH CTRL
- **Screen Type**: sub-screen (jumps to TONE EDIT ZOOM screen at the FILTER parameter page)
- **Layout**: Shows the TONE EDIT ZOOM screen focused on FILTER parameters. Includes a graphical filter response curve.
- **Key Elements**:
  - Filter Type (LPF, HPF, BPF, etc.) shown as a response curve diagram
  - Cutoff frequency value
  - Resonance value
  - Filter type selector
- **Interactive Elements**: [CUTOFF] knob adjusts cutoff frequency. [RESONANCE] knob adjusts resonance. [FILTER TYPE] button cycles filter types. [PARAM] button navigates to the FILTER settings in TONE EDIT ZOOM.
- **Currently Implemented?**: No
- **Notes**: The CUTOFF and RESONANCE knobs are physical panel controls that directly edit the filter. Changes apply only to the tone of the current zone.

---

### Synth Ctrl -- AMP ENV Screen (Tone Edit ZOOM)

- **Manual Page**: p. 49
- **Accessed Via**: Press the [AMP] button in the AMP section of the SYNTH CTRL
- **Screen Type**: sub-screen (jumps to TONE EDIT ZOOM screen at the AMP ENV parameter page)
- **Layout**: Shows the TONE EDIT ZOOM screen focused on AMP envelope parameters. Includes a graphical ADSR envelope display.
- **Key Elements**:
  - AMP envelope graphical display (Attack, Decay, Sustain, Release curve)
  - Numeric parameter values
  - Pitch/tonal character parameters
  - Volume parameters
- **Interactive Elements**: E2-E6 knobs edit the corresponding AMP ENV parameters.
- **Currently Implemented?**: No
- **Notes**: The [AMP] button displays the AMP ENV page in the TONE EDIT screen.

---

### Synth Ctrl -- MFX Edit Screen (Tone Edit ZOOM)

- **Manual Page**: p. 49
- **Accessed Via**: Press the [FX] button in the FX section of the SYNTH CTRL
- **Screen Type**: sub-screen (jumps to MFX EDIT screen)
- **Layout**: Shows multi-effects parameters for the current zone's tone. Effect type and parameters displayed.
- **Key Elements**:
  - Effect type name
  - Effect parameters (varies by effect type)
  - Graphical representation of effect
- **Interactive Elements**: E2-E6 knobs edit MFX parameters. [FX] button accesses this screen.
- **Currently Implemented?**: Partial (the `effect` screen type exists but may not match this exact layout)
- **Notes**: Changes made via edit knobs apply only to the tone of the current zone. If using layered tones, select the zone first. Depending on tone type, the tone may consist of multiple partials, and changes apply to the selected partial.

---

### MOTIONAL PAD Screen

- **Manual Page**: p. 50
- **Accessed Via**: Press the [MOTIONAL PAD] button (button lights up)
- **Screen Type**: main screen
- **Layout**: Full-screen XY pad display. Four corners show zone assignments (Area1 = top-left, Area2 = top-right, Area3 = bottom-left, Area4 = bottom-right). Each zone area displays the zone number and tone name. A circular pointer sits in the center of the pad, which the user drags to blend volumes. Left side has control buttons. Right side has toggle options.
- **Key Elements**:
  - Central XY area with draggable circular pointer
  - Four corner zone indicators showing: zone number, tone name (e.g., "ZONE 1 / 0026:Dyn Brass 1")
  - Left sidebar buttons: <EDIT>, <MOTIONAL PAD>, zone indicators at bottom
  - Right sidebar buttons: <AUTO>, <HOLD>
  - [EXIT] button to return to previous screen
- **Interactive Elements**:
  - Touch and drag the pointer in the center to blend zone volumes in real time
  - Touch <ZONE> areas in the four corners to change zone assignments (opens MOTIONAL PAD ZONE SELECT)
  - Touch tone names to switch tones (opens TONE LIST)
  - <EDIT> touches opens MOTIONAL PAD EDIT screen
  - <MOTIONAL PAD> toggles the pad on/off
  - <AUTO> enables automatic pointer movement
  - <HOLD> holds the pointer position when finger is lifted
  - [EXIT] returns to previous screen
- **Currently Implemented?**: No
- **Notes**: Motional pad settings are saved in the scene. Holding [SHIFT] + pressing [MOTIONAL PAD] accesses this screen without affecting motional pad on/off status. The volume balance of four zones changes according to the pointer position in real time. Only zones that are on appear; press ZONE INT/EXT buttons [1]-[8] to turn zones on.

---

### MOTIONAL PAD ZONE SELECT Screen

- **Manual Page**: p. 50
- **Accessed Via**: From MOTIONAL PAD screen, touch one of the four <ZONE> areas in the corners
- **Screen Type**: popup / overlay
- **Layout**: Modal overlay on top of the MOTIONAL PAD screen. Shows a grid of 16 zone numbers (1-16) arranged in two rows of 8. Title "MOTIONAL PAD ZONE SELECT" at top. Close button (X) at top-right.
- **Key Elements**:
  - Title: "MOTIONAL PAD ZONE SELECT"
  - 16 zone number buttons arranged in 2 rows: [1][2][3][4][5][6][7][8] / [9][10][11][12][13][14][15][16]
  - Close (X) button
  - Background shows the MOTIONAL PAD screen dimmed
- **Interactive Elements**: Touch a zone number (1-16) to assign it to the selected corner area. The selection is confirmed immediately and the screen returns to the MOTIONAL PAD screen.
- **Currently Implemented?**: No
- **Notes**: Each of the four corner areas can be assigned any of the 16 zones independently.

---

### MOTIONAL PAD -- Tone List Screen

- **Manual Page**: p. 51
- **Accessed Via**: From MOTIONAL PAD screen, touch one of the tone names in the four corner areas
- **Screen Type**: sub-screen (full screen overlay)
- **Layout**: Standard TONE LIST screen. Shows tabs at top (ZONE1, JX Chtam, etc.), category filter area (Preset), and a scrollable list of tones with numbers and names organized by category.
- **Key Elements**:
  - Tab bar at top showing zone and tone type
  - Category selector (e.g., "Brass")
  - Subcategory selector (e.g., "Preset")
  - Scrollable tone list with tone numbers and names (two columns)
  - Bottom toolbar: search icon, category icon, swap icon, CANCEL, OK
- **Interactive Elements**: Scroll through tone list, touch to select a tone, [E6] OK to confirm, CANCEL to go back.
- **Currently Implemented?**: Partial (the `tone-select` screen type handles tone selection but may differ in layout)
- **Notes**: After selecting a tone and pressing OK, you return to the MOTIONAL PAD screen with the new tone assigned to that corner's zone.

---

### MOTIONAL PAD EDIT Screen

- **Manual Page**: p. 51
- **Accessed Via**: From MOTIONAL PAD screen, touch <EDIT>
- **Screen Type**: sub-screen
- **Layout**: Parameter list screen titled "MOTIONAL PAD EDIT". Shows a scrollable list of parameters with their current values. Has an EXIT button at the bottom.
- **Key Elements**:
  - Title: "MOTIONAL PAD EDIT"
  - Parameter list:
    - Motional Pad Cross Fade Range (value shown)
    - Motional Pad Area1 Min
    - Motional Pad Area1 Max
    - Motional Pad Area2 Min
    - Motional Pad Area2 Max
    - Motional Pad Area3 Min
    - Motional Pad Area3 Max
    - Motional Pad Area4 Min
    - Motional Pad Area4 Max
  - EXIT button at bottom
- **Interactive Elements**: Select parameters and edit their values. Cross Fade Range: 0-127 (extent of blending between adjacent areas). Area1-4 Min/Max: 0-127 (variable range for each area). [E6] EXIT returns to previous screen.
- **Currently Implemented?**: No
- **Notes**: This is a parameter editing screen for fine-tuning the motional pad behavior. All values range from 0-127.

---

### SCENE EDIT Screen

- **Manual Page**: p. 54
- **Accessed Via**: Select a scene, press [MENU] button, touch <SCENE EDIT>
- **Screen Type**: main screen (tabbed parameter editor)
- **Layout**: Full-screen tabbed parameter editor. Header bar shows "SCENE EDIT" title, current zone, tone name, and SAMPLE PAD indicator. Left sidebar contains tab list. Main area shows the parameters for the selected tab with parameter names and editable values. <UTILITY> button in top-right corner.
- **Key Elements**:
  - Header: "SCENE EDIT", zone indicator, tone name, SAMPLE PAD tab
  - Tab sidebar (left side):
    - GENERAL: Scene Level, Tempo, Pad Mode, Knob, Slider, S1/S2, Wheel1/2, Vocoder
    - CONTROL: MIDI control parameters for Tone Control 1-4
    - PEDAL: Pedal connection parameters
    - KNOB: Control knob ASSIGN 1 parameters
    - SLIDER: Slider ASSIGN 1 parameters
    - S1/S2: S1/S2 button parameters
    - WHEEL1/2: Wheel 1 and 2 parameters
    - VOCODER: Vocoder parameters (requires AUDIO IN)
    - SONG: Sequencer/SMF player settings
  - Scrollable parameter list in main area
  - <UTILITY> button (opens SCENE INITIALIZE and SOUND CONTROL INITIALIZE)
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor up/down. [E6] edits the value of the selected parameter. <UTILITY> opens the utility window.
- **Currently Implemented?**: No
- **Notes**: Edited scene is temporary -- lost on power off or scene change. Must use WRITE to save (p. 56). This screen covers scene-wide parameters common to all zones.

---

### SCENE EDIT -- UTILITY Window (Scene Initialize)

- **Manual Page**: p. 54
- **Accessed Via**: On the SCENE EDIT screen, touch <UTILITY>
- **Screen Type**: popup / overlay
- **Layout**: Small modal window overlaying the SCENE EDIT screen. Contains two menu items.
- **Key Elements**:
  - SCENE INITIALIZE: Initializes all settings of the current scene
  - SOUND CONTROL INITIALIZE: Initializes only sound-control-related parameters (CUTOFF, RESONANCE, ATTACK, DECAY, RELEASE, VIB RATE, VIB DEPTH, VIB DELAY found in OFFSET and VIBRATO tabs of ZONE EDIT)
- **Interactive Elements**: Touch a menu item, then select [E5] OK to confirm or [E6] CANCEL. Initialization executes and returns to SCENE EDIT.
- **Currently Implemented?**: No
- **Notes**: This is a destructive operation (resets parameters). A confirmation message appears before execution.

---

### ZONE EDIT Screen

- **Manual Page**: pp. 54-55
- **Accessed Via**: Select a scene, press [MENU] button, touch <ZONE EDIT>
- **Screen Type**: main screen (tabbed parameter editor)
- **Layout**: Full-screen tabbed parameter editor. Header shows "ZONE EDIT", current zone number and tone name, SAMPLE PAD indicator, <UTILITY> button. Left sidebar contains a large number of tabs for INT (internal) and EXT (external) settings. Main area displays a parameter grid: rows are zone numbers (1-8 or 9-16), columns are parameter values. Column headers show zone numbers. Row labels show parameter names for the selected tab.
- **Key Elements**:
  - Header: "ZONE EDIT", zone indicator, tone/bank info, SAMPLE PAD tab
  - Tab selection buttons: INT (internal sound engine) and TONE tabs at top
  - Tab sidebar for INT settings:
    - TONE, LEVEL/PAN, KEY RANGE, VEL RANGE, EQ, Pitch, SCALE TUNE, VIBRATO, OFFSET, MONO/POLY, PEDAL CTRL, BEND CTRL, S1S2 CTRL, ASSIGN KNOB, ASSIGN SLIDER, VOICE RESERVE, MIDI Rx FILTER
  - Tab sidebar for EXT settings:
    - NAME, OUT/PC, LEVEL/PAN, KEY RANGE, VEL RANGE, Pitch, OFFSET, MONO/POLY, PEDAL CTRL, BEND CTRL, S1S2 CTRL, ASSIGN KNOB, ASSIGN SLIDER
  - Grid layout: parameter columns for up to 16 zones, parameter rows for selected tab
  - Bottom bar: scroll indicators, [E5] NUMERIC button, DEC/INC buttons
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor up/down. [E3] scrolls cursor left/right through parameters. [E5] NUMERIC accesses the NUMERIC window for precise value entry. [E6] edits the selected parameter value. <UTILITY> opens the zone initialize window.
- **Currently Implemented?**: No
- **Notes**: Zone parameters are set individually for each zone. 16 zones total. Each zone has its own volume (Level), EQ, Key Range (KBD), etc. This is the primary screen for multi-zone configuration. The grid layout allows comparing parameter values across all zones at once.

---

### ZONE EDIT -- UTILITY Window (Zone Initialize)

- **Manual Page**: p. 55
- **Accessed Via**: On the ZONE EDIT screen, touch <UTILITY>
- **Screen Type**: popup / overlay
- **Layout**: Small modal window overlaying the ZONE EDIT screen. Contains one menu item.
- **Key Elements**:
  - ZONE INITIALIZE: Initializes the zone parameters of the current zone
- **Interactive Elements**: Select [E6] SELECT, then confirm with [E5] OK or cancel with [E6] CANCEL. Returns to ZONE EDIT screen after initialization.
- **Currently Implemented?**: No
- **Notes**: Only initializes the currently selected zone, not all zones.

---

### ZONE OUT ASSIGN Screen

- **Manual Page**: p. 55
- **Accessed Via**: Hold down [SHIFT] button and press SYNTH CTRL [FX] button
- **Screen Type**: main screen
- **Layout**: Grid screen showing output routing for all 16 zones at once. Header shows "ZONE OUT ASSIGN" with back arrow. Columns numbered 1-16 (one per zone). Rows for each output bus: MAIN, IFX1, IFX2, SUR. Values shown as numbers (typically 0) at each intersection.
- **Key Elements**:
  - Title: "ZONE OUT ASSIGN" with back arrow
  - Column headers: zone numbers 1-16
  - Row labels: MAIN, IFX1, IFX2, SUR
  - Grid of output values at each zone/bus intersection
- **Interactive Elements**: Touch the screen to change output destinations for each zone. Touch the left side labels (MAIN, IFX1, etc.) to switch settings for all zones at once (useful for applying IFX to all zones simultaneously).
- **Currently Implemented?**: No
- **Notes**: This is a convenience screen accessed via a shortcut (SHIFT + FX). Provides an overview of all zone output routing without needing to navigate through individual zone parameters.

---

### Scene Appearance Edit Screen

- **Manual Page**: p. 56
- **Accessed Via**: From the SCENE SELECT screen, touch <EDIT>
- **Screen Type**: sub-screen (overlay on SCENE SELECT)
- **Layout**: Expands the scene icon area in the SCENE SELECT screen to show editable appearance properties. Shows the scene icon with its current appearance settings alongside controls for Memo, Rating, Level, and Color.
- **Key Elements**:
  - Scene icon display with current color and rating stars
  - Memo field (shown below scene name)
  - Rating stars (0-3 stars)
  - Level indicator on the scene icon
  - Color indicator
- **Interactive Elements**:
  - [E3] MEMO: Opens the RENAME screen to enter a memo (up to 64 characters)
  - [E4] Scene Rating: Adds star symbols to the scene icon (0-3)
  - [E5] Scene Color: Changes the scene icon color (1-16)
  - [E6] Scene Level: Sets the scene volume (0-127, same as GENERAL tab Scene Level)
  - <WRITE>: Saves (overwrites) settings onto the current scene
- **Currently Implemented?**: No
- **Notes**: This is an inline edit mode that appears within the SCENE SELECT screen rather than a separate full-screen editor.

---

### WRITE MENU Screen

- **Manual Page**: p. 56
- **Accessed Via**: Press the [WRITE] button on the panel
- **Screen Type**: popup / overlay (menu)
- **Layout**: Small menu popup that appears after pressing [WRITE]. Shows save targets.
- **Key Elements**:
  - <SCENE> option to save a scene
  - <TONE> option to save a tone (appears in tone editing context)
- **Interactive Elements**: Touch <SCENE> to go to SCENE WRITE screen. Touch <TONE> to go to TONE WRITE screen.
- **Currently Implemented?**: Partial (the `write` ScreenType exists and shows a save dialog, but the menu selection step may not be separate)
- **Notes**: This is an intermediate menu that appears before the actual WRITE screen. It lets you choose what to save.

---

### SCENE WRITE Screen

- **Manual Page**: p. 56
- **Accessed Via**: Press [WRITE] button, then touch <SCENE>
- **Screen Type**: sub-screen (save dialog)
- **Layout**: Full dialog screen with "SCENE WRITE" title. Shows WRITE SOURCE (current scene name, e.g., "A001:Homecoming") with a down arrow pointing to WRITE DESTINATION (target scene slot, e.g., "A001:Homecoming"). Bottom bar has RENAME, CANCEL, and OK buttons.
- **Key Elements**:
  - Title: "SCENE WRITE"
  - WRITE SOURCE: Source scene number and name
  - Down arrow indicator
  - WRITE DESTINATION: Target scene slot number and name
  - [E1] RENAME button
  - [E5] CANCEL button
  - [E6] OK button
- **Interactive Elements**:
  - [E1] RENAME: Opens RENAME screen to edit the destination name
  - [VALUE] dial or [DEC] [INC] buttons: Change the save destination slot
  - [E6] OK: Confirms the save (shows confirmation message, then [E5] OK to finalize)
  - [E5] CANCEL: Cancels the save operation
- **Currently Implemented?**: Yes (the `write` ScreenType with WriteScreen component)
- **Notes**: When saving, the data at the save-destination is overwritten. A two-step confirmation: first [E6] OK, then [E5] OK on the confirmation message.

---

### TONE EDIT Z-CORE ZOOM Screen (ZEN-Core Tone)

- **Manual Page**: p. 58
- **Accessed Via**: Select a ZEN-Core tone, press [MENU] button, touch <TONE EDIT>
- **Screen Type**: main screen (graphical parameter editor)
- **Layout**: Full-screen graphical tone editor. Header shows "TONE EDIT Z-CORE ZOOM", current zone, tone name, SAMPLE PAD tab, <UTILITY> button. Left sidebar has tab navigation. Top-right area shows Partial switches (ON/OFF for Partial 1-4) and Partial Select buttons. Main area shows graphical parameter editing with visual representations (e.g., filter curves, envelope shapes). Bottom shows E1-E6 knob assignments with arrow indicators pointing to the parameters they control.
- **Key Elements**:
  - Header: "TONE EDIT Z-CORE ZOOM", zone, tone name
  - Left sidebar tabs (green = ZOOM only): COMMON, STRUCTURE, OSC TYPE, OSC PRM, PITCH, IN TON ENV, FILTER, FILTER ENV, AMP
  - Partial Sw: ON/OFF toggles for Partial 1-4 (partials that are OFF produce no sound)
  - Partial Select: Colored indicators for Partial 1-4 (selected = highlighted, deselected = dimmed)
  - Graphical parameter displays (e.g., filter response curve with Cutoff, Resonance, Key Follow, Env Depth)
  - Bottom: E1-E6 knob assignment arrows and physical knob indicators
  - <To PRO> button: Switches to TONE EDIT PRO screen
  - <UTILITY> button
- **Interactive Elements**: [E1] scrolls tabs. [E2]-[E6] edit the corresponding parameters (cursor position changes based on which parameter is shown). Touch icons directly to edit (e.g., Partial Sw, Partial Select). <To PRO> switches to PRO screen. <UTILITY> opens utility window. Tab list: COMMON, STRUCTURE, OSC TYPE, OSC PRM, PITCH, IN TON ENV, FILTER, FILTER ENV, AMP (and more via scrolling).
- **Currently Implemented?**: No
- **Notes**: This is the graphical/intuitive tone editor. The ZOOM screen shows main parameters with visual feedback. The screen displays the lowest-numbered partial selected by Partial Select. Can select multiple partials to edit simultaneously. ZEN-Core tone structure: 4 partials, each with OSC -> Filter -> Amp -> Partial EQ chain, plus LFO 1 / Step LFO1 modulation and Matrix Control.

---

### TONE EDIT Z-CORE PRO Screen (ZEN-Core Tone)

- **Manual Page**: p. 59
- **Accessed Via**: On the TONE EDIT ZOOM screen, touch <To PRO>
- **Screen Type**: main screen (detailed parameter table)
- **Layout**: Full-screen tabbed parameter table. Header shows "TONE EDIT Z-CORE PRO", zone, tone name, SAMPLE PAD, <UTILITY>. Left sidebar has an extended tab list (black = common, blue = PRO only, green = ZOOM only). Main area is a parameter grid: columns correspond to Partial 1-4 (with ON/OFF and select indicators), rows show parameter names and values.
- **Key Elements**:
  - Header: "TONE EDIT Z-CORE PRO"
  - Full tab list (left sidebar):
    - COMMON (black), STRUCTURE (black), KEYBOARD (blue), OSC (black), Pitch (blue), PITCH ENV (blue), FILTER (black), FILTER ENV (blue), AMP (black), AMP ENV (blue), LFO Dest (blue), LFO1-2 (blue), STEP LFO1-2 (blue), PARTIAL EQ (blue), OUTPUT (blue), CONTROL (blue), MATRIX CTRL1-4 (blue), MFX (black), MFX CONTROL (black)
  - Grid columns: Partial 1, Partial 2, Partial 3, Partial 4 (each with ON/OFF indicator)
  - Parameter rows showing values per partial (e.g., Filter Type: TVF/TVF/TVF/TVF, Cutoff: 495/195/etc.)
  - Partial Sw and Partial Select controls at top
  - <To ZOOM> button to return to ZOOM screen
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor up/down to select parameters. [E3]-[E6] edit the partial selected by the cursor (E3-E6 correspond to Partial 1-4). Partial Sw toggles on/off. Partial Select chooses which partials to edit. <To ZOOM> returns to ZOOM screen. <UTILITY> opens utility. When PAD MODE is "Partial Sw/Sel", pads [5]-[8] select partials.
- **Currently Implemented?**: No
- **Notes**: The PRO screen shows ALL parameters for ALL partials in a dense grid format. Blue tabs are PRO-only (not available in ZOOM). Green tabs are ZOOM-only. Black tabs appear in both. You can use [INC] [DEC] and [VALUE] dial to edit values while maintaining the value difference between partials.

---

### Partial Select (within Tone Edit screens)

- **Manual Page**: p. 59
- **Accessed Via**: Touch the Partial 1-4 tabs at the top of any TONE EDIT screen
- **Screen Type**: UI element (not a separate screen)
- **Layout**: Row of 4 partial indicators shown at the top of the TONE EDIT ZOOM and PRO screens. Each partial has a colored indicator showing whether it is selected (highlighted) or deselected (dimmed).
- **Key Elements**:
  - Partial 1-4 tab indicators with ON/OFF status
  - Selected state (highlighted color) vs deselected state (dimmed)
- **Interactive Elements**: Touch a partial tab to select it. Touch [SHIFT] + partial tab to select multiple partials simultaneously. When PAD MODE is "Partial Sw/Sel": press pad [5]-[8] to select partials, press pads together to select multiple, hold [SHIFT] + press pad to multi-select.
- **Currently Implemented?**: No
- **Notes**: You cannot deselect Partial Select for all partials (at least one must remain selected). Multiple partial selection allows simultaneous editing.

---

### TONE EDIT DRUM ZOOM Screen (Drum Kit Tone)

- **Manual Page**: p. 60
- **Accessed Via**: Select a Drum tone type, press [MENU] button, touch <TONE EDIT>
- **Screen Type**: main screen (graphical parameter editor)
- **Layout**: Full-screen drum kit editor. Header shows "TONE EDIT DRUM ZOOM", zone, drum kit name, SAMPLE PAD, <UTILITY>. Left sidebar tabs: KIT, KEY PARAM, KEY EQ, INST COMMON, INST PITCH, INST WAVE, INST FWM, INST FILTER, PITCH ENV. Main area shows the selected key/instrument with a level knob graphic and key number display.
- **Key Elements**:
  - Header: "TONE EDIT DRUM ZOOM", zone, kit name
  - Current key indicator showing note number (e.g., "21 [A 0]") and instrument name (e.g., "049:909 Kick 2bP")
  - Level knob (graphical)
  - Left sidebar tabs for kit-level and instrument-level parameters
  - Wave Sw: ON/OFF toggles for waves
  - Wave Select: Wave1/Wave2 etc. selection indicators
  - <To PRO> button to switch to PRO screen
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor. [E3]-[E6] edit parameters (in INST WAVE and INST WMT tabs, E3-E6 correspond to Wave 1-4). Wave Sw toggles waves on/off. Wave Select chooses which wave to edit. Play a key on the keyboard to select that drum instrument ("Current Note").
- **Currently Implemented?**: No
- **Notes**: Drum Kit tones assign a different instrument to each of the 88 keys (A0-C8). The "Current Note" determines which instrument's parameters are shown. Press a key on the keyboard to change the current note. Structure: Key 1-88 -> Inst (with Wave1-4) -> Filter -> Amp -> Key EQ -> MFX, plus Kit Comp 1-6 compressors.

---

### TONE EDIT DRUM PRO Screen (Drum Kit Tone)

- **Manual Page**: p. 60
- **Accessed Via**: On the TONE EDIT DRUM ZOOM screen, touch <To PRO> or touch the icon above the tab list
- **Screen Type**: main screen (detailed parameter table)
- **Layout**: Full-screen parameter table for drum kit editing. Shows current note number, instrument name, and wave information in the header area. Tabs include KIT COMMON, KIT MFX, KIT MFX CTRL, KIT COMP1-6, KEY PARAM, KEY EQ, INST COMMON, INST WAVE, INST WMT, PITCH ENV, INST FILTER, FILTER ENV, INST AMP, AMP ENV.
- **Key Elements**:
  - Note number and instrument display at top
  - Wave indicators (Wave1-Wave4 with ON/OFF and INT/EXT status)
  - COMP group indicator
  - Full parameter table for the selected tab
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor to select parameters. [E3]-[E6] edit parameters. Move cursor to note number and select instrument. Use [INC] [DEC] and [VALUE] dial to edit values.
- **Currently Implemented?**: No
- **Notes**: KIT COMP1-6 tabs are only valid when using a Drum Kit tone in a zone assigned as Drum Kit Comp Zone. Instruments are presets; changing the instrument affects the parameters below INST COMMON.

---

### TONE EDIT SN-A Screen (SuperNATURAL Acoustic Tone)

- **Manual Page**: p. 61
- **Accessed Via**: Select a tone whose TONE TYPE is "SN-A", then touch [MENU] button -> <TONE EDIT>
- **Screen Type**: main screen (tabbed parameter editor)
- **Layout**: Full-screen parameter editor. Header shows "TONE EDIT SN-A", zone, instrument name (e.g., "Alto Sax"), SAMPLE PAD, <UTILITY>. Left sidebar has tabs: COMMON, INST, MFX, MFX CTRL. Main area shows a parameter list with names and values. Shows instrument icon indicator.
- **Key Elements**:
  - Header: "TONE EDIT SN-A", zone, instrument name
  - Instrument indicator (e.g., "Inst:" with instrument icon)
  - Tabs: COMMON (Category, Level, Pan, Coarse Tune, Fine Tune, Octave Shift, Mono/Poly), INST, MFX, MFX CTRL
  - Simple signal chain diagram: Inst -> MFX ->
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor up/down. [E6] edits the selected parameter. <UTILITY> opens utility.
- **Currently Implemented?**: No
- **Notes**: SuperNATURAL Acoustic tones have one instrument per tone with instrument-specific parameters. Simpler editing structure compared to ZEN-Core.

---

### TONE EDIT VTW ZOOM Screen -- WHEEL Tab (VTW Organ Tone)

- **Manual Page**: p. 61
- **Accessed Via**: Select a tone whose TONE TYPE is "VTW", use TONE EDIT or press [PARAM] buttons
- **Screen Type**: main screen (graphical parameter editor)
- **Layout**: Full-screen graphical organ editor. Header shows "TONE EDIT VTW ZOOM", zone, organ name, SAMPLE PAD, <UTILITY>. Left sidebar tabs: WHEEL, OVERDRIVE, ROTARY, MFX, MFX CTRL. Main area shows 9 harmonic drawbars (drag to adjust) in the center, with labeled footage values (16', 5 1/3', 8', 4', 2 2/3', 2', 1 3/5', 1 1/3', 1'). Additional toggle buttons surround the drawbars.
- **Key Elements**:
  - 9 harmonic drawbars (draggable, can also use sliders 1-8 on the panel)
  - Drawbar footage labels: 16', 5 1/3', 8', 4', 2 2/3', 2', 1 3/5', 1 1/3', 1'
  - Toggle buttons: ROTARY (SLOW/FAST), VIB & CHO, PERCUSSION
  - Knobs area label: "Knobs [E2]-[E6] -- The parameters in this area are assigned"
  - <To PRO> button
  - Tab: <UTILITY> for tone initialization
- **Interactive Elements**: Drag harmonic bars on screen to set drawbar levels. Also use sliders 1-8 on the physical panel. E2-E6 knobs edit parameters shown in the knob area. Touch toggle buttons for ROTARY, VIB & CHO, PERCUSSION settings. <To PRO> goes to PRO screen.
- **Currently Implemented?**: No
- **Notes**: VTW = Virtual Tone Wheel. The drawbars represent different harmonic overtones of the organ sound. Three colors of harmonic bars: white (octave bars centered on 8'), black (non-octave harmonics), brown (low range). This is unique among tone types for its graphical drawbar interface.

---

### TONE EDIT VTW ZOOM Screen -- OVERDRIVE Tab

- **Manual Page**: p. 62
- **Accessed Via**: From VTW ZOOM screen, scroll to OVERDRIVE tab using [E1]
- **Screen Type**: main screen (graphical parameter editor, tab variant)
- **Layout**: Shows overdrive parameters graphically. Overdrive type selector at top (01: VK Overdrive, 02: Tube Distortion, 03: Guitar Amp Simulator). Parameters: Drive and Level shown as knobs.
- **Key Elements**:
  - Overdrive type display and selector (3 types)
  - Drive parameter (with knob graphic)
  - Level parameter (with knob graphic)
  - Knobs [E2]-[E6] assignment area
- **Interactive Elements**: E2-E6 knobs edit overdrive parameters. Touch to switch between parameters.
- **Currently Implemented?**: No
- **Notes**: Part of the VTW ZOOM screen with tab navigation.

---

### TONE EDIT VTW ZOOM Screen -- ROTARY Tab

- **Manual Page**: p. 62
- **Accessed Via**: From VTW ZOOM screen, scroll to ROTARY tab using [E1]
- **Screen Type**: main screen (graphical parameter editor, tab variant)
- **Layout**: Shows rotary speaker parameters graphically. Parameters include: Rotation (SPEED indicator), Speed, Brake, Woofer Level, Tweeter settings. Toggle buttons for switching between parameter groups. Acceleration (ACCEL) parameter at bottom.
- **Key Elements**:
  - Rotation indicator with SPEED display
  - Speed and Brake parameters
  - Woofer Level and Tweeter settings
  - WF Slow / TW Slow / WF Fast / TW Fast frequency values (Hz)
  - WF Low / TW Low / WF High / TW High range values
  - ACCEL parameter
  - Toggle arrows to switch between parameter groups
  - Knobs [E2]-[E6] assignment area
- **Interactive Elements**: E2-E6 knobs edit rotary parameters. Touch to switch between parameters. Use cursor buttons to toggle between parameter groups.
- **Currently Implemented?**: No
- **Notes**: Simulates a Leslie rotary speaker cabinet. The SPEED indicator shows current rotation speed.

---

### TONE EDIT VTW ZOOM Screen -- MFX Tab

- **Manual Page**: p. 62
- **Accessed Via**: From VTW ZOOM screen, scroll to MFX tab using [E1]
- **Screen Type**: main screen (graphical parameter editor, tab variant)
- **Layout**: Shows MFX (Multi-Effects) parameters graphically. Displays the current effect type name at top (e.g., "17 Ring Modulator"). Parameters shown with knob graphics: Sens, Polarity, Frequency, Balance. Additional controls: UP/DOWN, D50 SW, Low Gain, dsp.
- **Key Elements**:
  - Effect type name and number
  - Effect-specific parameters (vary by selected MFX type)
  - Graphical knob representations for each parameter
  - Toggle buttons for effect-specific options
  - Knobs [E2]-[E6] assignment area
- **Interactive Elements**: E2-E6 knobs edit MFX parameters. Touch to switch between parameters.
- **Currently Implemented?**: Partial (the `effect` ScreenType exists)
- **Notes**: The available parameters change completely depending on which MFX type is selected.

---

### TONE EDIT SN-AP Screen (SuperNATURAL Acoustic Piano Tone)

- **Manual Page**: p. 62
- **Accessed Via**: Select a tone whose TONE TYPE is "SN-AP", then touch [MENU] button -> <TONE EDIT>
- **Screen Type**: main screen (tabbed parameter editor)
- **Layout**: Full-screen parameter editor. Header shows "TONE EDIT SNAP", zone, piano name (e.g., "Concert Grand"), SAMPLE PAD, <UTILITY>. Left sidebar has tabs: COMMON, INST, MFX, MFX CTRL. Main area shows parameter list.
- **Key Elements**:
  - Header: "TONE EDIT SNAP", zone, piano name
  - Tabs: COMMON (Category, Level, Pan, Coarse Tune, Fine Tune, Octave Shift, Mono/Poly, Chorus Send Level, Reverb Send Level), INST, MFX, MFX CTRL
  - Simple signal chain: Inst -> MFX ->
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor. [E6] edits values. <UTILITY> opens utility.
- **Currently Implemented?**: No
- **Notes**: SN-AP expansion must be installed (pre-installed by default). Similar structure to SN-A but with piano-specific instrument parameters.

---

### TONE EDIT SN-EP Screen (SuperNATURAL Electric Piano Tone)

- **Manual Page**: p. 63
- **Accessed Via**: Select a tone whose TONE TYPE is "SN-EP", then touch [MENU] button -> <TONE EDIT>
- **Screen Type**: main screen (tabbed parameter editor)
- **Layout**: Full-screen parameter editor. Header shows "TONE EDIT SNEP", zone, piano name (e.g., "Tine Mk I Trm"), SAMPLE PAD, <UTILITY>. Left sidebar has tabs: COMMON, INST, MFX, MFX CTRL.
- **Key Elements**:
  - Header: "TONE EDIT SNEP"
  - Same tab structure as SN-A and SN-AP: COMMON, INST, MFX, MFX CTRL
  - Parameter list with electric piano-specific parameters
- **Interactive Elements**: [E1] scrolls tabs. [E2] scrolls cursor. [E6] edits values. <UTILITY> opens utility.
- **Currently Implemented?**: No
- **Notes**: SN-EP expansion must be installed (pre-installed by default). Same editing structure as SN-A/SN-AP.

---

### TONE EDIT JP8 ZOOM Screen (MODEL Tone -- Jupiter-8 Bank)

- **Manual Page**: p. 63
- **Accessed Via**: Select a tone whose TONE TYPE is "MODEL", then touch [MENU] button -> <TONE EDIT>
- **Screen Type**: main screen (graphical parameter editor)
- **Layout**: Full-screen graphical synth editor. Header shows "TONE EDIT JP8 ZOOM", zone, model name (e.g., "Berlin Night"), SAMPLE PAD, <UTILITY>. Center area shows the model name in large text (e.g., "JUPITER-8") with a branded look. Left sidebar tabs: GENERAL, LFO / MOD, OSC, VCF, VCA, ENV1, ENV2, KBD, MFX. Main area shows key parameters graphically with toggle buttons and knob graphics.
- **Key Elements**:
  - Large model branding text (e.g., "JUPITER-8")
  - Left tab sidebar: GENERAL, LFO / MOD, OSC, VCF, VCA, ENV1, ENV2, KBD, MFX
  - KEY MODE section with toggle buttons: POLY, SOLO, UNISON, SL-UNISON
  - Parameters: CONDITION, PITCH DRIFT, PORTAMENT (with DRG toggle and value)
  - Signal chain: VCO-1/VCO-2 -> HPF -> VCF -> VCA -> MFX, with LFO, ENV-1, ENV-2 modulation
  - PRV-EXP toggle (OFF/ON)
  - Knob indicators [E2]-[E6] at bottom
  - <To PRO> button
- **Interactive Elements**: [E1] scrolls tabs. [E2]-[E6] edit corresponding parameters (cursor position changes). Touch toggle buttons (POLY/SOLO/UNISON etc.) directly. <To PRO> opens the TONE EDIT PRO screen. <UTILITY> opens utility.
- **Currently Implemented?**: No
- **Notes**: MODEL tones emulate specific vintage synthesizers. The tabs and parameters differ depending on the model bank selected (JP8, JUNO, JX, SH, etc.). A Model tone expansion must be installed. The ZOOM screen provides a branded visual identity matching the emulated synth.

---

### TONE WRITE Screen

- **Manual Page**: p. 64
- **Accessed Via**: Press the [WRITE] button while in a TONE EDIT screen (or via WRITE MENU -> <TONE>)
- **Screen Type**: sub-screen (save dialog)
- **Layout**: Full dialog screen with "TONE WRITE" title. Shows WRITE SOURCE (current tone number and name, e.g., "0001:AnalogAtmosphere") with a down arrow pointing to WRITE DESTINATION (target slot, e.g., "0001:INITIAL TONE"). Bottom bar has RENAME, CANCEL, and OK buttons.
- **Key Elements**:
  - Title: "TONE WRITE"
  - WRITE SOURCE: Source tone number and name
  - Down arrow indicator
  - WRITE DESTINATION: Target tone slot number and name
  - [E1] RENAME button
  - [E5] CANCEL button
  - [E6] OK button
- **Interactive Elements**: [E1] RENAME opens the RENAME screen. [VALUE] dial or [DEC] [INC] changes the destination slot. [E6] OK confirms (then [E5] OK on confirmation). [E5] CANCEL cancels.
- **Currently Implemented?**: Partial (the `write` ScreenType exists but is scene-focused; tone writing may not be distinguished)
- **Notes**: Separate from SCENE WRITE. The tone write saves only the tone data, not the entire scene. Data at the save-destination is overwritten. Never turn off power while saving.

---

### TONE EDIT -- UTILITY Window (Tone Initialize / Partial Initialize / Partial Copy / Multisample Edit)

- **Manual Page**: pp. 64-65
- **Accessed Via**: On any TONE EDIT screen (ZOOM or PRO), touch <UTILITY>
- **Screen Type**: popup / overlay
- **Layout**: Modal window overlaying the TONE EDIT screen. Shows a menu of utility operations.
- **Key Elements**:
  - TONE INITIALIZE: Initializes all settings of the current tone
  - PARTIAL INITIALIZE: Initializes a single partial (ZEN-Core) or key (Drum Kit)
  - PARTIAL COPY: Copies settings from one partial to another
  - MULTISAMPLE EDIT: Opens multisample editing (referenced separately)
  - CANCEL button
  - SELECT button
- **Interactive Elements**: Touch a menu item to select it, then press SELECT. Confirmation dialogs appear for destructive operations (INITIALIZE). For PARTIAL INITIALIZE: select the partial to initialize, then [E6] OK, then [E5] OK. For PARTIAL COPY: select SOURCE partial and DEST partial, then [E6] OK, then [E5] OK.
- **Currently Implemented?**: No
- **Notes**: The PARTIAL INIT and PARTIAL COPY windows are sub-dialogs that open from within this UTILITY window. For Drum Kit tones, "partial" corresponds to a "key" (drum instrument assignment).

---

### PARTIAL INIT Window

- **Manual Page**: p. 65
- **Accessed Via**: TONE EDIT -> <UTILITY> -> PARTIAL INITIALIZE
- **Screen Type**: popup / overlay (sub-dialog)
- **Layout**: Small dialog window. Shows partial selection and confirmation.
- **Key Elements**:
  - Partial selector (which partial to initialize)
  - For Drum Kit: key selector instead
  - [E6] OK and [E5] CANCEL buttons
  - Confirmation message
- **Interactive Elements**: Select the partial, confirm with [E6] OK, then final confirm with [E5] OK.
- **Currently Implemented?**: No
- **Notes**: Resets a single partial to factory defaults. For Drum Kit, initializes a single key's instrument assignment.

---

### PARTIAL COPY Window

- **Manual Page**: p. 65
- **Accessed Via**: TONE EDIT -> <UTILITY> -> PARTIAL COPY
- **Screen Type**: popup / overlay (sub-dialog)
- **Layout**: Small dialog window. Shows SOURCE and DEST partial selectors.
- **Key Elements**:
  - SOURCE partial selector
  - DEST partial selector
  - For Drum Kit: key selectors instead
  - [E6] OK and [E5] CANCEL buttons
  - Confirmation message
- **Interactive Elements**: Select source and destination partials, confirm with [E6] OK, then final confirm with [E5] OK.
- **Currently Implemented?**: No
- **Notes**: Copies all settings from one partial to another within the same tone.

---

### Edit Knobs Direct Editing (Physical Panel, No Dedicated Screen)

- **Manual Page**: p. 65
- **Accessed Via**: Directly operate the knobs and buttons of the OSC section, FILTER section, and AMP section on the right side of the physical panel while in TONE EDIT ZOOM
- **Screen Type**: N/A (physical panel interaction, no dedicated screen)
- **Layout**: N/A -- uses the physical panel's SYNTH CTRL section
- **Key Elements**: Physical OSC, FILTER (CUTOFF, RESONANCE, FILTER TYPE, PARAM), and AMP buttons/knobs on the hardware panel
- **Interactive Elements**: Physical knobs and buttons directly modify the tone parameters shown in the current TONE EDIT ZOOM screen
- **Currently Implemented?**: N/A (physical interaction only)
- **Notes**: This is an alternative to on-screen editing. You can edit tones by directly turning physical knobs while the TONE EDIT ZOOM screen is displayed. The screen updates in real time to reflect knob changes.

---

## Summary

| # | Screen Name | Category | Manual Page | Type | Implemented? |
|---|---|---|---|---|---|
| 1 | PAN/LEVEL Popup | Controllers | p. 47 | popup | No |
| 2 | ASSIGN Popup | Controllers | p. 47 | popup | No |
| 3 | ASSIGN Settings Screen | Controllers | p. 47 | sub-screen | No |
| 4 | Controller Assign Settings (WHEEL/S1/S2/PEDAL) | Controllers | p. 48 | sub-screen | No |
| 5 | Synth Ctrl -- OSC PRM Screen | Synth Ctrl | p. 49 | sub-screen | No |
| 6 | Synth Ctrl -- FILTER Screen | Synth Ctrl | p. 49 | sub-screen | No |
| 7 | Synth Ctrl -- AMP ENV Screen | Synth Ctrl | p. 49 | sub-screen | No |
| 8 | Synth Ctrl -- MFX Edit Screen | Synth Ctrl | p. 49 | sub-screen | Partial |
| 9 | MOTIONAL PAD Screen | Motional Pad | p. 50 | main screen | No |
| 10 | MOTIONAL PAD ZONE SELECT | Motional Pad | p. 50 | popup | No |
| 11 | MOTIONAL PAD -- Tone List | Motional Pad | p. 51 | sub-screen | Partial |
| 12 | MOTIONAL PAD EDIT Screen | Motional Pad | p. 51 | sub-screen | No |
| 13 | SCENE EDIT Screen | Editing | p. 54 | main screen | No |
| 14 | SCENE EDIT -- UTILITY Window | Editing | p. 54 | popup | No |
| 15 | ZONE EDIT Screen | Editing | pp. 54-55 | main screen | No |
| 16 | ZONE EDIT -- UTILITY Window | Editing | p. 55 | popup | No |
| 17 | ZONE OUT ASSIGN Screen | Editing | p. 55 | main screen | No |
| 18 | Scene Appearance Edit Screen | Editing | p. 56 | sub-screen | No |
| 19 | WRITE MENU Screen | Editing | p. 56 | popup | Partial |
| 20 | SCENE WRITE Screen | Editing | p. 56 | sub-screen | Yes |
| 21 | TONE EDIT Z-CORE ZOOM Screen | Tone Edit | p. 58 | main screen | No |
| 22 | TONE EDIT Z-CORE PRO Screen | Tone Edit | p. 59 | main screen | No |
| 23 | Partial Select (UI element) | Tone Edit | p. 59 | UI element | No |
| 24 | TONE EDIT DRUM ZOOM Screen | Tone Edit | p. 60 | main screen | No |
| 25 | TONE EDIT DRUM PRO Screen | Tone Edit | p. 60 | main screen | No |
| 26 | TONE EDIT SN-A Screen | Tone Edit | p. 61 | main screen | No |
| 27 | TONE EDIT VTW ZOOM -- WHEEL Tab | Tone Edit | p. 61 | main screen | No |
| 28 | TONE EDIT VTW ZOOM -- OVERDRIVE Tab | Tone Edit | p. 62 | main screen | No |
| 29 | TONE EDIT VTW ZOOM -- ROTARY Tab | Tone Edit | p. 62 | main screen | No |
| 30 | TONE EDIT VTW ZOOM -- MFX Tab | Tone Edit | p. 62 | main screen | Partial |
| 31 | TONE EDIT SN-AP Screen | Tone Edit | p. 62 | main screen | No |
| 32 | TONE EDIT SN-EP Screen | Tone Edit | p. 63 | main screen | No |
| 33 | TONE EDIT JP8 ZOOM Screen (MODEL) | Tone Edit | p. 63 | main screen | No |
| 34 | TONE WRITE Screen | Tone Edit | p. 64 | sub-screen | Partial |
| 35 | TONE EDIT -- UTILITY Window | Tone Edit | pp. 64-65 | popup | No |
| 36 | PARTIAL INIT Window | Tone Edit | p. 65 | popup | No |
| 37 | PARTIAL COPY Window | Tone Edit | p. 65 | popup | No |

**Total screens found**: 37
**Currently implemented**: 1 fully (SCENE WRITE), 5 partially (MFX, Tone List, WRITE MENU, VTW MFX, TONE WRITE)
**Not implemented**: 31
