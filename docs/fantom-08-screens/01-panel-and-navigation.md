# Fantom 08 Screen Catalog: Panel Descriptions & Basic Operation

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, pages 8-16
> **Sections Covered**: Panel Descriptions (pp. 8-12), Basic Operation (pp. 13-16)
> **Date Cataloged**: 2026-02-23
>
> This document catalogs every screen or display state referenced in pages 8-16 of the
> Roland Fantom-0 Series Reference Manual. These pages cover the physical panel layout,
> basic operational concepts (editing values, cursor movement, touch panel interactions),
> and the primary display screens that form the navigation backbone of the instrument.

---

## Summary of Screens Found

| # | Screen Name | Page | Type | Implemented? |
|---|-------------|------|------|--------------|
| 1 | SCENE SELECT Screen | p.15 | Main screen | Yes (as `home`) |
| 2 | ZONE VIEW Screen | p.16 | Main screen | Yes (as `zone-view`) |
| 3 | MENU Screen | p.16 | Main screen | Yes (as `menu`) |
| 4 | WRITE Screen | p.9 (ref) | Popup / overlay | Yes (as `write`) |
| 5 | RENAME Screen | p.16 | Popup / overlay | No |
| 6 | REC STANDBY Screen | p.16 | Main screen | No |
| 7 | TONE EDIT ZOOM Screen (Screen 1 - tabbed) | p.15 | Sub-screen | Partial |
| 8 | TONE EDIT ZOOM Screen (Screen 2 - list) | p.15 | Sub-screen | No |
| 9 | MIXER Screen | p.8-9 (ref) | Sub-screen | No |
| 10 | Knob/Slider Popup Screen | p.14 | Popup | No |
| 11 | NUMERIC Window | p.13 | Popup / overlay | No |
| 12 | TEMPO Screen | p.9 (ref) | Popup / sub-screen | No |
| 13 | TFX ZOOM EDIT Screen | p.9 (ref) | Sub-screen | No |
| 14 | Routing Screen | p.9 (ref) | Sub-screen | No |
| 15 | MOTIONAL PAD Screen | p.9 (ref) | Main screen | No |
| 16 | OSC Setting Screen (TONE EDIT ZOOM) | p.10 (ref) | Sub-screen | No |
| 17 | FILTER Setting Screen (TONE EDIT ZOOM) | p.10 (ref) | Sub-screen | No |
| 18 | AMP ENV Screen | p.10 (ref) | Sub-screen | No |
| 19 | MFX EDIT Screen | p.10 (ref) | Sub-screen | Partial (as `effect`) |
| 20 | LFO1 Screen | p.10 (ref) | Sub-screen | No |
| 21 | PATTERN Screen | p.10 (ref) | Main screen | No |
| 22 | GROUP Screen | p.10 (ref) | Main screen | No |
| 23 | SONG Screen | p.10 (ref) | Main screen | No |
| 24 | RHYTHM PATTERN Screen | p.10 (ref) | Main screen | No |
| 25 | SCENE CHAIN Screen | p.10 (ref) | Main screen | No |
| 26 | KEY RANGE Setting Screen | p.14 (ref) | Sub-screen | Yes (as `key-range`) |
| 27 | ASSIGN Setting Screen | p.14 (ref) | Sub-screen | No |
| 28 | Wheel/Controller Setting Screen | p.8, 14 (ref) | Sub-screen | No |
| 29 | Pad Mode Edit Screen | p.10 (ref) | Sub-screen | No |

**Total screens found**: 29
**Currently implemented**: 7 fully, 2 partially

---

## Detailed Screen Entries

### SCENE SELECT Screen
- **Manual Page**: p.15
- **Accessed Via**: [SCENE SELECT] button; or press [EXIT] repeatedly from any screen; default screen on power-on
- **Screen Type**: Main screen (top-level navigation hub)
- **Layout**: Full-screen grid layout with:
  - Top bar: hamburger menu icon (left), status bar showing SCENE SELECT label, time signature, tempo, measure/beat/tick, STOP indicator, SAMPLE PAD label
  - Header row: Scene number and name (e.g., "A001:INITIAL SCENE"), EDIT/search/favorite icons on right
  - Tone category tabs row: IFX1, IFX2, CHO, REV, plus additional effect indicators
  - Scene grid: 4x4 grid of scene slots (A001-A016), each showing scene name and layer info
  - Bottom bar: FUNCTION knobs [E1]-[E6] parameter display (e.g., Portamento Time, LFO1 Rate, LFO1 Amp Depth, LFO2 Rate, LFO3 Rate, Filter Env Depth) with current values
  - Page navigation arrows on right side to switch between pages of scenes
- **Key Elements**:
  - Scene name and number (large, prominent)
  - Layer description text (e.g., "SuperNATURAL Acoustic Piano; Synth Pad")
  - 16 scene selection tiles (4x4 grid)
  - Status bar (tempo, time signature, transport state)
  - FUNCTION knob parameter assignments at bottom
- **Interactive Elements**:
  - Touch scene tiles to select a scene
  - Touch hamburger menu icon (top-left) to open MENU screen
  - Touch page arrows to navigate between scene pages
  - Knobs [E1]-[E6] control parameters shown at bottom of screen
  - Touch top-bar tabs to move between screens
- **Currently Implemented?**: Yes (as `home` / `SceneSelectScreen`)
- **Notes**: This is the central hub screen. The manual notes: "If you lose track of which screen you're in, you can return to the SCENE SELECT screen by pressing the [EXIT] button several times or by pressing the [SCENE SELECT] button." The screenshot on p.13 shows the screen with scene "A001:Homecoming" selected, with layer "SuperNATURAL Acoustic Piano; Synth Pad" and a Stereo Width parameter of 100. The p.15 screenshot shows "A001:INITIAL SCENE" with all 16 slots visible.

---

### ZONE VIEW Screen
- **Manual Page**: p.16
- **Accessed Via**: [ZONE VIEW] button
- **Screen Type**: Main screen
- **Layout**: Full-screen list/grid layout with:
  - Top bar: back arrow, status indicators (ZONE, ZV labels), status bar (time signature, tempo, measure, transport)
  - Header: Scene number and name (e.g., "A002:INITIAL SCENE"), with ZONE/TONE label
  - Zone rows: numbered list (1-4 visible by default), each row showing:
    - Zone number
    - Tone name and type (e.g., "I174:Step Groov 1", "Phrase")
    - Volume bar (horizontal, with value like "100")
    - Key range display (e.g., "C- - G9")
    - On/off and other status indicators
  - Effect switch icons in top-right area (IFX1, IFX2, CHO, REV toggleable)
  - Drop-down lists accessible by touching certain elements
  - Bottom bar: FUNCTION knobs [E1]-[E6] parameters
- **Key Elements**:
  - Zone list with tone assignments
  - Volume levels per zone (horizontal bars)
  - Key range per zone
  - Tone type labels
  - Effect on/off indicators
  - Mute/solo status
- **Interactive Elements**:
  - Touch a zone row to move cursor / select it
  - Touch to turn effect switches on/off (top-right area)
  - Touch to open drop-down lists for tone selection
  - Touch back arrow to return to previous screen
  - Knobs [E1]-[E6] control parameters shown at bottom
  - Holding [SHIFT] and touching an effect switch icon jumps to the corresponding effect edit screen
- **Currently Implemented?**: Yes (as `zone-view` / `ZoneViewScreen`)
- **Notes**: The manual describes this as the screen where "you can check the state of each zone." The [ZONE VIEW] button directly opens this screen. The screenshot shows 4 zones with tones, volumes at 100, and key ranges of C- to G9.

---

### MENU Screen
- **Manual Page**: p.16
- **Accessed Via**: [MENU] button; or touch the hamburger menu icon in upper-left of SCENE SELECT screen
- **Screen Type**: Main screen (navigation hub)
- **Layout**: Grid layout with:
  - Top bar: back arrow with "MENU" label
  - 2-column grid of large touch buttons:
    - Left column: TONE EDIT, EFFECTS EDIT, ZONE EDIT, SCENE EDIT, MIXER, SYSTEM
    - Right column: ARPEGGIO, CHORD MEMORY, FILE UTILITY, UTILITY
  - "Touch to move between screens" annotation
  - Back arrow returns to the next-higher level
- **Key Elements**:
  - 10 menu categories as large touchable tiles
  - TONE EDIT, EFFECTS EDIT, ZONE EDIT, SCENE EDIT (editing functions)
  - MIXER, SYSTEM (system-level functions)
  - ARPEGGIO, CHORD MEMORY (performance functions)
  - FILE UTILITY, UTILITY (file management and utilities)
- **Interactive Elements**:
  - Touch any menu tile to enter that sub-screen/editor
  - Touch back arrow to return to previous screen
  - All items are touch-navigable
- **Currently Implemented?**: Yes (as `menu` / `MenuScreen`)
- **Notes**: This is the main navigation hub for all editing and system functions. The back arrow returns to the "next-higher level." Each menu item leads to a dedicated editing environment. The manual also notes you can access the menu screen by touching the hamburger icon on the SCENE SELECT screen.

---

### WRITE Screen
- **Manual Page**: p.9 (referenced, not shown in detail on pp. 8-16)
- **Accessed Via**: [WRITE] button
- **Screen Type**: Popup / overlay
- **Layout**: Referenced but not fully shown in these pages. The [WRITE] button description states: "The WRITE screen appears. Saves a scene or tone."
- **Key Elements**:
  - Save confirmation dialog
  - Scene or tone save options
- **Interactive Elements**:
  - Confirmation/cancel buttons
  - Destination selection
- **Currently Implemented?**: Yes (as `write` / `WriteScreen`)
- **Notes**: Brief reference only on p.9. Full details likely on later pages covering the save workflow. The button is in the Common section of the panel.

---

### RENAME Screen
- **Manual Page**: p.16
- **Accessed Via**: Triggered during save/rename operations (exact entry point not specified on these pages)
- **Screen Type**: Popup / overlay
- **Layout**: Full overlay with:
  - Top bar: SCENE SELECT label, status bar
  - Header: Current name (e.g., "A001:INITIAL SCENE")
  - Text input field showing current name
  - Virtual QWERTY keyboard layout:
    - Number row: 1-0
    - QWERTY row: q-p
    - ASDF row: a-l (with Shift key on left)
    - ZXCV row: z-m (with !@#$ key on left)
    - Bottom row: Space bar, < > arrow keys, Back Space, Clear All
  - CANCEL and OK buttons at bottom
- **Key Elements**:
  - Text input field with cursor
  - Full QWERTY virtual keyboard
  - Shift key for uppercase
  - Special characters (!@#$) toggle
  - Space, Back Space, Clear All keys
  - Arrow keys (< >) for cursor positioning
  - CANCEL / OK confirmation buttons
- **Interactive Elements**:
  - Touch characters on virtual keyboard to type
  - Touch Shift to toggle case
  - Touch !@#$ to toggle special characters
  - Touch < > to move cursor in text field
  - Touch Back Space to delete character
  - Touch Clear All to clear entire name
  - Touch CANCEL to discard changes
  - Touch OK to confirm the new name
- **Currently Implemented?**: No
- **Notes**: This is a full-screen text entry overlay used when naming/renaming scenes, tones, or other items. The virtual keyboard is a standard QWERTY layout with shift and special character support. This would be a new screen type to implement.

---

### REC STANDBY Screen
- **Manual Page**: p.16
- **Accessed Via**: Entering record-standby mode (likely via [REC] button in sequencer section)
- **Screen Type**: Main screen
- **Layout**: Complex layout with multiple sections:
  - Top section: "REC STANDBY" header, "REALTIME" label
  - Left panel - REC DESTINATION:
    - TRACK selector (vertical list showing tracks A-H with indicators)
    - MIX/NEW toggle
  - Center panel:
    - Meas/Beat/Tick display (e.g., "01-01-000")
    - Time Signature (e.g., "4/4")
    - Input Quantize setting (e.g., "OFF")
    - REC EVENT setting
    - LOOP/MIG EN indicator
    - BUS/SYNC indicator
  - Right panel:
    - Length display
    - Tempo display (e.g., "120.00")
    - CLICK toggle
    - START button
  - Bottom tabs: STEP REC, TR-REC
  - Bottom bar: FUNCTION knobs [E1]-[E6] parameters
  - A drop-down list popup is also shown with options: NONE, 1 MEAS, 2 MEAS, WAIT NOTE (with scroll arrows, CANCEL, OK)
- **Key Elements**:
  - Track selection panel (A-H tracks)
  - Time position display (measure/beat/tick)
  - Time signature
  - Input quantize setting
  - Recording event filter
  - Loop mode indicator
  - Tempo display
  - Click (metronome) toggle
  - Start button
  - Step REC / TR-REC mode tabs
- **Interactive Elements**:
  - Touch tracks to select recording destination
  - Touch MIX/NEW to toggle mix mode
  - Touch to open drop-down lists (e.g., count-in options: NONE, 1 MEAS, 2 MEAS, WAIT NOTE)
  - Use [E4] knob to select parameters in drop-down menus
  - Touch STEP REC / TR-REC tabs to switch recording mode
  - Touch START to begin recording
  - Touch CLICK to toggle metronome
  - Knobs [E1]-[E6] for parameter control
- **Currently Implemented?**: No
- **Notes**: This is a complex sequencer screen with many interactive elements. The manual shows both the main screen and a drop-down popup list overlay. Two recording modes are available (STEP REC and TR-REC) accessible via tabs at the bottom. This screen is part of the sequencer workflow and would require significant implementation effort.

---

### TONE EDIT ZOOM Screen (Screen 1 - Tabbed Parameter View)
- **Manual Page**: p.15
- **Accessed Via**: From MENU > TONE EDIT; or via Synth control section buttons ([OSC], [PARAM], etc.); or the "To PRO" button within this screen switches to Screen 2
- **Screen Type**: Sub-screen (editor)
- **Layout**: Multi-section tabbed editor:
  - Top bar: "TONE EDIT ZOOM" label with tab navigation (TONE EDIT ZOOM can be toggled to PRO EDIT via "To PRO" button)
  - Left sidebar: vertical category tabs (scrollable via swipe):
    - COMMON, ENV (visible), plus additional tabs accessible by scrolling
  - Tab bar: "Partial 1" through "Partial 4" with ON/OFF status for each partial
  - Current section label (e.g., "FILTER")
  - Sub-tabs row: FILTER TYPE, showing options like PKG, LPF, LPF2, LPF3, P5 (touchable selection buttons)
  - Parameter area: graphical knob/slider representations:
    - Knobs (e.g., Resonance, Key Flw) with drag-to-edit values
    - Sliders (e.g., SLOPE with value like -24)
    - Depth parameter with value
  - UTILITY button (top-right) to show utility window
  - Bottom bar: FUNCTION knobs [E1]-[E6] parameter assignments with arrows showing knob-to-parameter mapping
- **Key Elements**:
  - "To PRO" / "To ZOOM" toggle for switching edit modes
  - Partial selectors (Partial 1-4) with ON/OFF states
  - Category section tabs (left sidebar)
  - Filter type selection buttons
  - Graphical parameter controls (knobs, sliders)
  - UTILITY button
  - FUNCTION knob [E1]-[E6] mappings at bottom
- **Interactive Elements**:
  - Touch "To PRO" to switch to TONE EDIT Screen 2 (PRO EDIT mode)
  - Touch filter type buttons to switch filter mode
  - Touch partial tabs to select which partial to edit
  - Touch ON to enable/disable partials
  - Swipe left sidebar to scroll through category tabs
  - Touch/drag knobs and sliders to edit parameter values
  - Touch a parameter to select it (cursor)
  - Knobs [E1]-[E6] mapped to parameters shown at bottom
  - Touch UTILITY to open utility window
- **Currently Implemented?**: Partial (generic `menu` screen handles some editing, but the tabbed ZOOM layout with graphical knobs is not implemented)
- **Notes**: This is one of the most complex editing screens. It has two variants: Screen 1 (ZOOM mode with graphical controls) and Screen 2 (PRO EDIT mode with a text list). The "To PRO" button switches between them. This screen is accessed when editing tones via the Synth control section buttons ([OSC], [PARAM], [AMP], [FX], [LFO]) or from the MENU.

---

### TONE EDIT ZOOM Screen (Screen 2 - PRO EDIT List View)
- **Manual Page**: p.15
- **Accessed Via**: Touch "To PRO" from TONE EDIT ZOOM Screen 1; or direct access from certain edit paths
- **Screen Type**: Sub-screen (editor)
- **Layout**: List-based editor:
  - Top bar: "TONE EDIT ZOOM" label
  - Left sidebar: scrollable category list (COMMON, CURSOR, OSC TYPE, OSC PRM, PITCH, PITCH ENV, FILTER, AMP, etc.)
  - Right panel: parameter list with values:
    - Parameters shown as name-value pairs
    - Filter Type dropdown
    - Key Flw value
    - Depth value
    - Values can be dragged to edit
  - Close window button (X) in upper right of parameter panel
  - Bottom bar: FUNCTION knobs [E1]-[E6] parameters
- **Key Elements**:
  - Full parameter list organized by category
  - Category navigation in left sidebar
  - Parameter values editable by dragging
  - Window close button
- **Interactive Elements**:
  - Touch categories in left sidebar to navigate
  - Drag parameter values to edit
  - Touch close button (X) to close parameter window
  - Knobs [E1]-[E6] for parameter control
  - Touch "To ZOOM" to return to Screen 1
- **Currently Implemented?**: No
- **Notes**: This is the "PRO EDIT" alternative view of the tone editor. It shows parameters in a traditional list format rather than the graphical ZOOM view. Categories visible include OSC TYPE, OSC PRM, PITCH, PITCH ENV, FILTER, AMP. The left sidebar scrolls to reveal more categories.

---

### MIXER Screen
- **Manual Page**: p.8-9 (referenced)
- **Accessed Via**: [SHIFT] + [PAN/LEVEL] button; or from MENU > MIXER
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages. Referenced in multiple places:
  - p.8: "Press this button while holding down the [SHIFT] button to display the MIXER screen."
  - p.9: Zone INT/EXT button MUTE state is "Set in the MIXER screen"
  - p.16: Listed as an option in the MENU screen
- **Key Elements**:
  - Zone volume/pan mixing controls
  - Mute settings per zone
  - Output routing
- **Interactive Elements**:
  - Effect switch icons can be touched while holding [SHIFT] to jump to effect edit screens (mentioned in connection with ZONE VIEW screen)
- **Currently Implemented?**: No
- **Notes**: The MIXER screen is referenced several times but not shown in detail in pp. 8-16. It is accessible from the MENU or via SHIFT+PAN/LEVEL shortcut. The orange MUTE state for Zone INT/EXT buttons is configured in this screen. It appears to be a comprehensive mixing environment for all zones.

---

### Knob/Slider Popup Screen
- **Manual Page**: p.14
- **Accessed Via**: Automatically appears when turning a physical knob or moving a slider to edit a parameter
- **Screen Type**: Popup (auto-closing)
- **Layout**: Small popup overlay that appears over the current screen:
  - Shows the parameter name (e.g., "ZONE1", "LEVEL")
  - Large circular knob graphic or vertical slider graphic
  - Current value displayed prominently (e.g., "73")
  - Semi-transparent background showing the underlying screen
  - The popup closes automatically after a short time
- **Key Elements**:
  - Parameter name/label
  - Visual knob or slider representation
  - Current numeric value
  - Auto-dismiss behavior
- **Interactive Elements**:
  - The popup is display-only (reflects physical knob/slider movement)
  - Closes automatically after a time delay
  - Some parameters don't show a popup (noted in manual)
- **Currently Implemented?**: No
- **Notes**: The manual states: "When you use a knob or slider to edit a setting, the edited parameter and its value are shown in a popup screen. The popup screen closes automatically after a time. Some parameters don't show a popup screen." The screenshot shows a popup with "ZONE1 / LEVEL / 73" overlaying the SCENE SELECT screen.

---

### NUMERIC Window
- **Manual Page**: p.13
- **Accessed Via**: Hold [SHIFT] + press [ENTER] button
- **Screen Type**: Popup / overlay
- **Layout**: Not shown visually on these pages but described:
  - Numeric input window for directly entering parameter values
  - Touch panel interface for numeric entry
- **Key Elements**:
  - Numeric keypad (implied from touch panel description)
  - Direct value entry field
- **Interactive Elements**:
  - Touch to enter numeric values directly
  - Confirm / cancel
- **Currently Implemented?**: No
- **Notes**: The manual states: "If you hold down the [SHIFT] button and press the [ENTER] button, the numeric window appears. This is a convenient way to directly enter a numeric parameter value from the touch panel." Also notes: "Some parameters don't support numeric input."

---

### TEMPO Screen
- **Manual Page**: p.9 (referenced)
- **Accessed Via**: [TEMPO] button
- **Screen Type**: Popup / sub-screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Tempo value display
  - Tap tempo functionality
- **Interactive Elements**:
  - Repeatedly press [TEMPO] to tap tempo
  - Knobs/dial to adjust tempo value
- **Currently Implemented?**: No
- **Notes**: Brief reference: "The [TEMPO] screen appears. You can set the tempo by repeatedly pressing the button at the desired interval." This may be a popup or small sub-screen rather than a full-screen display.

---

### TFX ZOOM EDIT Screen
- **Manual Page**: p.9 (referenced)
- **Accessed Via**: [MASTER FX] button (press normally for TFX ZOOM EDIT; hold [SHIFT] + press for routing screen)
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Total effects (TFX) parameter editing
  - Zoom-style graphical controls (based on naming convention matching TONE EDIT ZOOM)
- **Interactive Elements**:
  - Effect parameter editing
  - Likely graphical knobs/sliders similar to TONE EDIT ZOOM
- **Currently Implemented?**: No
- **Notes**: The [MASTER FX] button "shows the TFX ZOOM EDIT screen." When holding [SHIFT] and pressing [MASTER FX], the routing screen appears instead. This is distinct from the per-zone MFX editing.

---

### Routing Screen
- **Manual Page**: p.9 (referenced)
- **Accessed Via**: Hold [SHIFT] + press [MASTER FX] button
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Signal routing configuration
  - Audio path visualization
- **Interactive Elements**:
  - Routing assignment controls
- **Currently Implemented?**: No
- **Notes**: Brief reference only. Accessed via SHIFT+MASTER FX shortcut. Likely shows the audio signal routing paths between zones, effects, and outputs.

---

### MOTIONAL PAD Screen
- **Manual Page**: p.9 (referenced)
- **Accessed Via**: [MOTIONAL PAD] button
- **Screen Type**: Main screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - XY pad for motional sound control
  - Zone mixing via pad position
- **Interactive Elements**:
  - Touch/drag on XY pad to blend between zones
- **Currently Implemented?**: No
- **Notes**: Brief reference: "The MOTIONAL PAD screen appears." The Motional Pad is a performance feature that allows real-time blending of sounds by moving a point on an XY pad.

---

### OSC Setting Screen (TONE EDIT ZOOM)
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [OSC] button in SYNTH control section
- **Screen Type**: Sub-screen (part of TONE EDIT ZOOM)
- **Layout**: Not shown in detail; described as "the OSC setting screen of the TONE EDIT ZOOM screen."
- **Key Elements**:
  - Oscillator parameters
  - Waveform selection
  - OSC-related settings
- **Interactive Elements**:
  - Parameter editing via knobs/touch
- **Currently Implemented?**: No
- **Notes**: This is a specific view within the TONE EDIT ZOOM framework, focused on oscillator parameters. Accessed via the dedicated [OSC] button in the Synth control section.

---

### FILTER Setting Screen (TONE EDIT ZOOM)
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [PARAM] button in SYNTH control section
- **Screen Type**: Sub-screen (part of TONE EDIT ZOOM)
- **Layout**: Not shown in detail; described as "the FILTER setting screen of the TONE EDIT ZOOM screen."
- **Key Elements**:
  - Filter type selection
  - Cutoff, resonance parameters
  - Filter envelope settings
- **Interactive Elements**:
  - Parameter editing via knobs/touch
  - [CUTOFF] and [RESONANCE] physical knobs also control parameters
  - [FILTER TYPE] button cycles through filter types
- **Currently Implemented?**: No
- **Notes**: Accessed via [PARAM] button. The physical [CUTOFF] knob, [RESONANCE] knob, and [FILTER TYPE] button in the SYNTH section also directly interact with parameters shown on this screen.

---

### AMP ENV Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [AMP] button in SYNTH control section
- **Screen Type**: Sub-screen (part of TONE EDIT ZOOM)
- **Layout**: Not shown in detail; described as "the AMP ENV screen."
- **Key Elements**:
  - Amplitude envelope parameters (Attack, Decay, Sustain, Release)
  - Envelope visualization
- **Interactive Elements**:
  - Parameter editing via knobs/touch
- **Currently Implemented?**: No
- **Notes**: Part of the TONE EDIT ZOOM framework. The [AMP] button provides direct access to amplitude envelope editing.

---

### MFX EDIT Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [FX] button in SYNTH control section
- **Screen Type**: Sub-screen (part of TONE EDIT ZOOM)
- **Layout**: Not shown in detail; described as "the MFX EDIT screen."
- **Key Elements**:
  - Multi-effects parameters
  - Effect type selection
  - Effect-specific parameter controls
- **Interactive Elements**:
  - Effect type selection
  - Parameter editing via knobs/touch
- **Currently Implemented?**: Partial (implemented as `effect` screen type using `MenuScreen` component, but likely missing the graphical ZOOM-style editing)
- **Notes**: This is the per-zone multi-effects editor accessed via [FX] in the Synth section. The current implementation uses a generic menu list; the real hardware likely shows a more graphical ZOOM-style layout similar to TONE EDIT ZOOM Screen 1.

---

### LFO1 Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [LFO] button in SYNTH control section
- **Screen Type**: Sub-screen (part of TONE EDIT ZOOM)
- **Layout**: Not shown in detail; described as "the LFO1 screen."
- **Key Elements**:
  - LFO rate, depth, waveform parameters
  - LFO routing/destination settings
- **Interactive Elements**:
  - Parameter editing via knobs/touch
- **Currently Implemented?**: No
- **Notes**: Part of the TONE EDIT ZOOM framework. The [LFO] button provides direct access to LFO1 editing. LFO2 and LFO3 may be accessible from within this screen via tabs or navigation.

---

### PATTERN Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [PATTERN] button in Sequencer section
- **Screen Type**: Main screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Pattern selection/editing
  - Pattern playback controls
- **Interactive Elements**:
  - Pattern selection
  - [PLAY], [STOP], [REC] transport controls interact with this screen
- **Currently Implemented?**: No
- **Notes**: Part of the sequencer workflow. Brief reference: "The PATTERN screen appears."

---

### GROUP Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [GROUP] button in Sequencer section
- **Screen Type**: Main screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Group selection/editing
  - Multiple patterns grouped together
- **Interactive Elements**:
  - Group selection and management
- **Currently Implemented?**: No
- **Notes**: Brief reference: "The GROUP screen appears." Groups are collections of patterns in the sequencer.

---

### SONG Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [SONG] button in Sequencer section
- **Screen Type**: Main screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Song arrangement/editing
  - Song playback controls
- **Interactive Elements**:
  - Song arrangement editing
- **Currently Implemented?**: No
- **Notes**: Brief reference: "The SONG screen appears." Songs are sequences of groups in the sequencer.

---

### RHYTHM PATTERN Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [RHYTHM PTN] button in Sequencer section
- **Screen Type**: Main screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Rhythm pattern editing
  - Drum/percussion pattern programming
- **Interactive Elements**:
  - Pattern step editing
  - Sound selection
- **Currently Implemented?**: No
- **Notes**: Brief reference: "The RHYTHM PATTERN screen appears." This is for programming drum/rhythm patterns.

---

### SCENE CHAIN Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [CHAIN] button in Scene section
- **Screen Type**: Main screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Scene chain order/sequence
  - Scene recall order for live performance
- **Interactive Elements**:
  - Scene ordering/arrangement
  - Scene chain management
- **Currently Implemented?**: No
- **Notes**: Brief reference: "The SCENE CHAIN screen appears. This lets you recall scenes in a specified order." Used for live performance to step through scenes in a predetermined sequence.

---

### KEY RANGE Setting Screen
- **Manual Page**: p.14 (referenced)
- **Accessed Via**: [SHIFT] + [SPLIT] button
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages (referenced via shortcut table).
- **Key Elements**:
  - Key range/split point configuration
  - Note range display
  - Zone keyboard assignment
- **Interactive Elements**:
  - Split point adjustment
  - Key range editing per zone
- **Currently Implemented?**: Yes (as `key-range` / `KeyRangeScreen`)
- **Notes**: The shortcut table on p.14 lists [SHIFT] + [SPLIT] as accessing "The Key Range setting screen." This corresponds to our implemented `key-range` screen type.

---

### ASSIGN Setting Screen
- **Manual Page**: p.14 (referenced)
- **Accessed Via**: [SHIFT] + [ASSIGN] button
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Controller assignment configuration
  - Slider/knob assignment to parameters
  - ASSIGN1 (scene-level) and ASSIGN2 (system-level) modes
- **Interactive Elements**:
  - Parameter mapping configuration
  - Source/destination selection
- **Currently Implemented?**: No
- **Notes**: Referenced in the shortcut table: "[SHIFT] + [ASSIGN] - The Assign setting screen appears." The ASSIGN button has two modes: ASSIGN1 (scene) accessed via [ASSIGN] alone, and ASSIGN2 (system) accessed via [ASSIGN] + [PAN/LEVEL]. Hold [SHIFT] and press [ASSIGN] to access the full assign setting screen.

---

### Wheel/Controller Setting Screen
- **Manual Page**: p.8, p.14 (referenced)
- **Accessed Via**: Hold [SHIFT] + operate WHEEL1 or WHEEL2; or [SHIFT] + [S1]/[S2] buttons; or [SHIFT] + [WHEEL1]/[WHEEL2]
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Controller function assignment
  - Wheel parameter mapping
  - S1/S2 button function assignment
- **Interactive Elements**:
  - Function selection for wheel/button
  - Parameter range configuration
- **Currently Implemented?**: No
- **Notes**: p.8 states for WHEEL1/WHEEL2: "If you operate the controller while holding down the [SHIFT] button, the setting screen appears." For S1/S2: "Hold down the [SHIFT] button and press one of these buttons to access a screen that lets you assign a function." The shortcut table on p.14 confirms: "[SHIFT] + WHEEL1, 2 - The setting screen for the corresponding controller appears" and "[SHIFT] + S1, S2 - The setting screen for the corresponding controller appears."

---

### Pad Mode Edit Screen
- **Manual Page**: p.10 (referenced)
- **Accessed Via**: [SHIFT] + [PAD MODE] button
- **Screen Type**: Sub-screen
- **Layout**: Not shown in detail on these pages.
- **Key Elements**:
  - Pad mode configuration
  - Pad function assignments
  - Related pad mode screens
- **Interactive Elements**:
  - Pad function editing
  - Mode selection
- **Currently Implemented?**: No
- **Notes**: p.10 states for [PAD MODE]: "Hold down the [SHIFT] button and press this button to access the edit screen for the currently selected pad mode and related screens." The [SHIFT] + [PAD MODE] shortcut on p.14 also mentions: "The setting screen or related screen for the currently selected pad mode appears."

---

## Navigation & Transition Map

The following summarizes the key navigation paths described in pages 8-16:

```
                              [EXIT] (repeatedly)
                                    |
                                    v
[SCENE SELECT] button -----> SCENE SELECT Screen <----> MENU Screen
                               (home screen)          [MENU] button
                                    |                  or hamburger icon
                                    |
                    +---------------+------------------+
                    |               |                  |
              [ZONE VIEW]    [CHAIN]             Touch scene tile
                    |               |                  |
                    v               v                  v
              ZONE VIEW       SCENE CHAIN         (Selects scene,
              Screen          Screen               stays on screen)
                    |
          [SHIFT]+effect icon
                    |
                    v
              Effect Edit Screen

MENU Screen branches:
  TONE EDIT ---------> TONE EDIT ZOOM (Screen 1) <-> TONE EDIT ZOOM (Screen 2)
  EFFECTS EDIT ------> Effects editing screens
  ZONE EDIT ---------> Zone editing screens
  SCENE EDIT --------> Scene editing screens
  MIXER -------------> MIXER Screen
  SYSTEM ------------> System settings
  ARPEGGIO ----------> Arpeggio settings
  CHORD MEMORY ------> Chord memory settings
  FILE UTILITY ------> File management
  UTILITY -----------> Utility functions

Synth Section shortcuts (direct button access):
  [OSC] ------------> OSC (TONE EDIT ZOOM)
  [PARAM] ----------> FILTER (TONE EDIT ZOOM)
  [AMP] ------------> AMP ENV (TONE EDIT ZOOM)
  [FX] -------------> MFX EDIT (TONE EDIT ZOOM)
  [LFO] ------------> LFO1 (TONE EDIT ZOOM)

Scene Section:
  [SCENE SELECT] ---> SCENE SELECT Screen
  [CHAIN] ----------> SCENE CHAIN Screen
  [ZONE VIEW] ------> ZONE VIEW Screen
  [SINGLE TONE] ----> Recalls piano to zone 1

Common Section shortcuts:
  [WRITE] ----------> WRITE Screen (popup)
  [MASTER FX] ------> TFX ZOOM EDIT Screen
  [SHIFT]+[MASTER FX] -> Routing Screen
  [MOTIONAL PAD] ---> MOTIONAL PAD Screen
  [MENU] -----------> MENU Screen
  [TEMPO] ----------> TEMPO Screen

[SHIFT] + button shortcuts:
  [SHIFT]+[SPLIT] -----------> KEY RANGE Setting Screen
  [SHIFT]+[ASSIGN] ----------> ASSIGN Setting Screen
  [SHIFT]+[PAD MODE] --------> Pad Mode Edit Screen
  [SHIFT]+[WHEEL1/2] --------> Wheel Setting Screen
  [SHIFT]+[S1/S2] -----------> S1/S2 Setting Screen
  [SHIFT]+[PAN/LEVEL] -------> MIXER Screen
  [SHIFT]+[EXIT] ------------> PANIC (all notes off, no screen change)
  [SHIFT]+[ENTER] -----------> NUMERIC Window (popup)

Sequencer Section:
  [PATTERN] -------> PATTERN Screen
  [GROUP] ---------> GROUP Screen
  [SONG] ----------> SONG Screen
  [RHYTHM PTN] ----> RHYTHM PATTERN Screen

Universal popup:
  Knob/slider turn -> Knob/Slider Popup (auto-dismiss)
  Rename operation -> RENAME Screen (keyboard overlay)
  [SHIFT]+[ENTER] -> NUMERIC Window (overlay)
```

---

## Touch Panel Interaction Patterns (p.13-14)

These pages document the general interaction patterns available across all screens:

1. **On/Off Icons**: Toggle switches that can be touched directly (examples shown: IFX1, IFX2, CHO, REV, CMP, MEQ, VOC; HOLD buttons; Solo/Unison/ADSR switches; ON/OFF buttons; Partial 1-4 ON switches)

2. **Knob Icons**: Touch and drag up/right to increase, down/left to decrease. Visual knob with current value shown beneath (e.g., "Cutoff 580", "Env Depth +43")

3. **Slider Icons**: Touch and drag up to increase, down to decrease. Visual slider with current value (e.g., "SLOPE -24")

4. **Selection Buttons**: Touchable button rows for selecting options (e.g., Partial 1-4 selection, BOLD/SOLO/MUTE toggles)

5. **Confirmation Screens**: `<OK>` and `<SELECT>` act like [ENTER]; `<CANCEL>` and `<EXIT>` act like [EXIT]

6. **Cursor Navigation**: Touch a parameter value, knob icon, or slider icon to move cursor to that location. Some icons don't move the cursor.

7. **FUNCTION Knobs [E1]-[E6]**: Always shown at the bottom of the screen. Each screen assigns different parameters to these six knobs. Pressing a knob can execute a button-like operation. The bottom of every screen shows which parameters are currently mapped to E1-E6.
