# Fantom 08 Screen Catalog -- Batch 6: Effects, Mixer, Scene Chain

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, pages 66--78
> **Screens Found**: 29 distinct screens/sub-screens/popups

---

## Table of Contents

1. [Effects Edit Main Screen](#effects-edit-main-screen)
2. [Effects Edit -- INTERNAL Tab](#effects-edit--internal-tab)
3. [Effects Edit -- Zone Selection (INTERNAL)](#effects-edit--zone-selection-internal)
4. [Effects Edit Zoom -- Zone Effects](#effects-edit-zoom--zone-effects)
5. [Effects Edit Zoom -- Zone Effects (MFX Zoom / Pro Edit)](#effects-edit-zoom--zone-effects-mfx-zoom--pro-edit)
6. [Effects Edit Zoom -- Drum Kit Comp](#effects-edit-zoom--drum-kit-comp)
7. [Effects Edit Zoom -- IFX1/IFX2](#effects-edit-zoom--ifx1ifx2)
8. [Effects Edit Zoom -- Chorus/Reverb](#effects-edit-zoom--chorusreverb)
9. [Effects Edit Pro -- IFX/Chorus/Reverb](#effects-edit-pro--ifxchorusreverb)
10. [Effects Edit Zoom -- Master FX (M.COMP / M.EQ / TFX)](#effects-edit-zoom--master-fx-mcomp--meq--tfx)
11. [Effects Edit Pro -- M.COMP](#effects-edit-pro--mcomp)
12. [Effects Edit Pro -- M.EQ](#effects-edit-pro--meq)
13. [Effects Edit -- TFX (within Master FX Zoom)](#effects-edit--tfx-within-master-fx-zoom)
14. [Effects Edit -- AUDIO IN Tab](#effects-edit--audio-in-tab)
15. [Effects Edit -- AUDIO IN Pro Edit (Input FX / Input Reverb)](#effects-edit--audio-in-pro-edit-input-fx--input-reverb)
16. [Effects Edit -- PAD Tab](#effects-edit--pad-tab)
17. [Effects Edit -- USB Tab](#effects-edit--usb-tab)
18. [Effects Edit -- CLICK Tab](#effects-edit--click-tab)
19. [Effects Edit -- OUTPUT Tab](#effects-edit--output-tab)
20. [Mixer Screen -- 8 Zone View](#mixer-screen--8-zone-view)
21. [Mixer Screen -- 16 Zone View](#mixer-screen--16-zone-view)
22. [Mixer Screen -- OUT/USB View](#mixer-screen--outusb-view)
23. [Mixer -- Zone EQ Popup](#mixer--zone-eq-popup)
24. [Scene Chain Screen (View Mode)](#scene-chain-screen-view-mode)
25. [Scene Chain Screen (Performance Mode)](#scene-chain-screen-performance-mode)
26. [Scene Chain -- Chain Set Select Popup](#scene-chain--chain-set-select-popup)
27. [Scene Chain -- Utility Popup](#scene-chain--utility-popup)
28. [Scene Chain Edit Screen](#scene-chain-edit-screen)
29. [Scene Chain Edit -- Scene Select Popup](#scene-chain-edit--scene-select-popup)

---

## Effects Screens (pp. 66--71)

### Effects Edit Main Screen
- **Manual Page**: p.66
- **Accessed Via**: [MENU] button > touch "EFFECTS EDIT"
- **Screen Type**: main screen
- **Layout**: Full-screen effects routing overview. Top bar has 6 horizontal tabs: INTERNAL, AUDIO IN, PAD, USB, CLICK, OUTPUT. The header bar shows the current scene name and zone info. Below the tabs is a block-diagram-style routing view showing the effects chain: zones on the left, flowing through MFX, IFX1, IFX2, Chorus, Reverb, Master FX (M.COMP, M.EQ, TFX), then to output on the right. Each effect block has an EDIT button underneath. The zone selector (ZONE 1-16 dropdown) and FX/MAIN routing toggle are on the left side. SERIAL/PARALLEL routing indicator at bottom-left. Small effect type labels below each block show the currently loaded effect.
- **Key Elements**:
  - 6 top tabs: INTERNAL, AUDIO IN, PAD, USB, CLICK, OUTPUT
  - Zone selector dropdown (ZONE 1-16)
  - Effect routing diagram: MFX -> IFX1 -> IFX2 -> Chorus -> Reverb
  - Master FX section: M.COMP, M.EQ, TFX
  - EDIT buttons under each effect block
  - SERIAL/PARALLEL routing indicator
  - FX type labels at bottom (MFX Type, IFX1 Type, IFX2 Type, Chorus Type, TFX Type)
  - BUS indicator at bottom-right
- **Interactive Elements**:
  - Touch tabs to switch between INTERNAL / AUDIO IN / PAD / USB / CLICK / OUTPUT
  - Touch zone dropdown to select zone
  - Touch EDIT under any effect block to open its zoom/edit screen
  - Touch effect on/off toggles (MFX, IFX1, IFX2, CHORUS, REVERB, M.COMP, M.EQ, TFX)
- **Currently Implemented?**: Partial (the `effect` screen type exists in MenuScreen but does not replicate this full routing diagram)
- **Notes**: This is the master hub for all effect editing. The INTERNAL tab is the default view. Transitions to all other effect sub-screens happen from here. The routing diagram visually represents the signal flow from zones through the effects chain.

---

### Effects Edit -- INTERNAL Tab
- **Manual Page**: p.66
- **Accessed Via**: On EFFECTS EDIT screen, touch the INTERNAL tab
- **Screen Type**: sub-screen (tab within Effects Edit)
- **Layout**: Same as Effects Edit Main Screen -- the INTERNAL tab is the default/primary view showing the full routing diagram for the internal sound engine's effects. The zone selector is prominent on the left, showing which zone's per-zone effects (MFX, Zone EQ) are being configured vs. the shared effects (IFX1, IFX2, Chorus, Reverb, Master FX).
- **Key Elements**:
  - Zone selector (ZONE 1-16 with dropdown)
  - Per-zone effects: MFX, COMP (Zone EQ), Zone EQ indicator
  - Shared effects: IFX1, IFX2, CHORUS, REVERB
  - Master FX: M.COMP, M.EQ, TFX
  - EDIT buttons for each section
  - Drum Kit Comp indicator (shown when a Drum Kit tone is selected for the Drum Kit Comp Zone)
- **Interactive Elements**:
  - Touch zone to select it for editing
  - Touch MFX, EQ, COMP toggles for on/off per zone
  - Touch EDIT to enter zoom screens for each effect
- **Currently Implemented?**: Partial
- **Notes**: The INTERNAL tab is the default when opening EFFECTS EDIT. Selecting a zone changes which per-zone effects (MFX, Zone EQ) are shown.

---

### Effects Edit -- Zone Selection (INTERNAL)
- **Manual Page**: p.66
- **Accessed Via**: On EFFECTS EDIT > INTERNAL tab, touch a zone number
- **Screen Type**: sub-screen (inline selection, not a popup)
- **Layout**: The left panel of the EFFECTS EDIT screen updates to show the selected zone highlighted. The zone dropdown (ZONE 1 through ZONE 16) appears as a vertical list on the left side. The selected zone is highlighted in blue/cyan.
- **Key Elements**:
  - Zone list (ZONE 1 through ZONE 16)
  - Highlighted current zone
  - MFX indicator for selected zone
  - FX and EDIT buttons
- **Interactive Elements**:
  - Touch any zone number to select it
  - The right side of the screen updates to show the selected zone's MFX and routing
- **Currently Implemented?**: No
- **Notes**: Selecting a zone switches which per-zone effects are shown in the main routing diagram. This is an inline selection, not a separate popup.

---

### Effects Edit Zoom -- Zone Effects
- **Manual Page**: p.67
- **Accessed Via**: On EFFECTS EDIT > INTERNAL tab, select a zone, then touch EDIT on the zone's effect section
- **Screen Type**: sub-screen (zoom view)
- **Layout**: Title bar reads "EFFECTS EDIT ZOOM" with navigation arrows (left/right). Sub-header shows "ZONE EFFECTS" with a tab bar: "RHYTHM COMP" on the left. The main area shows a two-column layout: left column has MFX on/off toggle and effect type selector; right column shows Zone EQ parameters. Below are knob-style parameters: Low Gain, Mid Gain, High Gain on the left; DryaSend/Lev and MixSend/Lev on the right. Bottom has 6 parameter slots mapped to E1-E6 knobs.
- **Key Elements**:
  - EFFECTS EDIT ZOOM header with left/right arrows for navigation between zoom pages
  - "ZONE EFFECTS" sub-title
  - MFX on/off toggle
  - MFX effect type display
  - Zone EQ section with Low Gain, Mid Gain, High Gain
  - DryaSend/Lev, MixSend/Lev parameters
  - ZONE EQ Gain parameters (dB)
  - Effect type dropdown
- **Interactive Elements**:
  - Touch MFX to toggle on/off
  - Touch effect type to change it
  - Adjust Zone EQ Gain/Freq parameters
  - E1-E6 knobs mapped to on-screen parameters
  - Left/right arrows to navigate to other zoom pages (Drum Kit Comp, IFX1/IFX2, Chorus/Reverb)
- **Currently Implemented?**: No
- **Notes**: This is a quick-edit screen for the most common per-zone effect parameters. For detailed editing, you touch EDIT to go to the Pro Edit screen. The Send Level from MFX controls how much signal goes to IFX1/IFX2.

---

### Effects Edit Zoom -- Zone Effects (MFX Zoom / Pro Edit)
- **Manual Page**: p.66-67
- **Accessed Via**: On Zone Effects zoom screen, touch "To PRO" / "To ZOOM" icon; OR from EFFECTS EDIT > touch EDIT on MFX section
- **Screen Type**: sub-screen (pro edit / detailed parameter view)
- **Layout**: Title bar reads "MFX EDIT ZOOM" or "MFX EDIT PRO". Has "To PRO" / "To ZOOM" toggle button at top-left. Tab bar shows "MFX" and a second tab (e.g., "01:Equalizer"). Below is a detailed parameter list with the current MFX effect's parameters. The example shown is an Equalizer with: Low Gain, Mid1 Gain, Mid2 Gain, High Gain across the top row; Low Freq, Mid1 Freq, Mid2 Freq, High Freq in the second row; Mid1 Q, Mid2 Q in the third row. Bottom has 6 parameter slots with small bar indicators for E1-E6 mapping.
- **Key Elements**:
  - "To PRO" / "To ZOOM" toggle button
  - MFX tab + effect name tab (e.g., "01:Equalizer")
  - Full parameter grid for the selected effect type
  - Parameter values with knob/fader indicators
  - 6-slot bottom bar mapped to E1-E6
  - Effect number indicator (e.g., showing effect #01 out of available types)
- **Interactive Elements**:
  - Touch "To PRO" to switch to Pro Edit (scrollable parameter list)
  - Touch "To ZOOM" to switch back to Zoom view (visual knob layout)
  - Touch MFX tab or effect name tab
  - E1 scrolls cursor up/down
  - E6 edits the selected parameter value
  - Touch parameters directly on screen
- **Currently Implemented?**: No
- **Notes**: The Zoom view shows parameters as visual knobs in a grid; the Pro view shows them as a scrollable text list. Available on MFX, AUDIO IN MFX1/2, IFX1/2, and TFX edit screens. The effect types for MFX are the same as the standard MFX list.

---

### Effects Edit Zoom -- Drum Kit Comp
- **Manual Page**: p.67
- **Accessed Via**: On EFFECTS EDIT ZOOM, navigate to DRUM KIT COMP page (left/right arrows from Zone Effects zoom)
- **Screen Type**: sub-screen (zoom view)
- **Layout**: Title bar reads "EFFECTS EDIT ZOOM", sub-header "DRUM KIT COMP". Shows a grid of 6 compressor channels (one for each drum kit component). Each channel shows: COMP on/off, EDIT button, output destination. The 6 compressors are arranged in rows, each with toggle and output assignment.
- **Key Elements**:
  - "DRUM KIT COMP" sub-header
  - 6 compressor slots (COMP 1 through COMP 6)
  - On/off toggle for each compressor
  - EDIT button for each
  - Output destination selector for each (MAIN, SUB, etc.)
  - Parameter values for each compressor
- **Interactive Elements**:
  - Touch COMP on/off to toggle each compressor
  - Touch EDIT to open detailed comp parameters
  - Touch output destination to change routing
  - Navigate with left/right arrows to other zoom pages
- **Currently Implemented?**: No
- **Notes**: Only shown when a Drum Kit tone is selected for the zone specified as the Drum Kit Comp Zone. This is valid only for one specified zone. The 6 compressors correspond to different drum kit components (kick, snare, hi-hat, etc.).

---

### Effects Edit Zoom -- IFX1/IFX2
- **Manual Page**: p.68
- **Accessed Via**: On EFFECTS EDIT > INTERNAL tab, touch EDIT under IFX1 or IFX2; OR navigate via left/right arrows from Zone Effects zoom
- **Screen Type**: sub-screen (zoom view)
- **Layout**: Title bar "EFFECTS EDIT ZOOM", sub-header "IFX1/IFX2" with tabs for switching between the two. Below shows the IFX structure section: IFX connection order, serial/parallel routing indicator. Left section shows IFX1 and IFX2 each with: on/off toggle, effect type selector, EDIT button. Parameters include: IFX1 on/off, IFX1 type, Send/Recv level, Output destination. Similar for IFX2. The IFX Structure area shows the routing (serial vs parallel) with a visual indicator. Bottom has MAIN output selector.
- **Key Elements**:
  - "IFX1/IFX2" sub-header with tab switching
  - IFX Structure indicator (serial/parallel with visual diagram)
  - IFX1 section: on/off, type, DryaSend Lev, Send/Recv levels
  - IFX2 section: on/off, type, DryaSend Lev, Send/Recv levels
  - #IN and #OUT indicators
  - EDIT button for each IFX
  - MAIN output routing
- **Interactive Elements**:
  - Touch IFX1/IFX2 tabs to switch focus
  - Touch on/off to toggle each IFX
  - Touch EDIT to enter Pro Edit for detailed parameters
  - Adjust send/return levels
  - Navigate left/right to other zoom pages
- **Currently Implemented?**: No
- **Notes**: IFX1 and IFX2 are scene-level insert effects shared by all zones. The connection order (serial: IFX1->IFX2 or IFX2->IFX1; parallel) can be changed. Touching EDIT on either IFX opens its Pro Edit screen with full parameter access.

---

### Effects Edit Zoom -- Chorus/Reverb
- **Manual Page**: p.68
- **Accessed Via**: On EFFECTS EDIT > INTERNAL tab, touch EDIT under CHORUS or REVERB; OR navigate via left/right arrows
- **Screen Type**: sub-screen (zoom view)
- **Layout**: Title bar "EFFECTS EDIT ZOOM", sub-header "CHORUS/REVERB" with tabs. Left section shows Chorus: Send Level display, on/off toggle, CHORUS type selector, EDIT button. Right section shows Reverb: on/off toggle, REVERB type selector, Reverb Level, EDIT button. Below shows output destination and send levels from each zone. The Send Level and Return levels are shown as parameter values.
- **Key Elements**:
  - "CHORUS/REVERB" sub-header
  - Chorus section: on/off, type, Send Level, Return Level, EDIT button
  - Reverb section: on/off, type, Reverb Level, EDIT button
  - Output destination selectors
  - Send level parameters from the current zone
  - CHORUS and REVERB type display
- **Interactive Elements**:
  - Touch CHORUS/REVERB on/off toggles
  - Touch EDIT to open Pro Edit for detailed chorus or reverb parameters
  - Adjust send/return levels
  - Navigate left/right to other zoom pages
- **Currently Implemented?**: No
- **Notes**: Chorus and Reverb are scene-level send effects shared by all zones. The send amount per zone is controlled in the Mixer screen. Touching EDIT opens the Pro Edit screen for full parameter editing.

---

### Effects Edit Pro -- IFX/Chorus/Reverb
- **Manual Page**: p.68
- **Accessed Via**: From IFX1/IFX2 or Chorus/Reverb zoom screens, touch EDIT on the effect section you want to edit in detail
- **Screen Type**: sub-screen (pro edit / detailed parameter list)
- **Layout**: Full-screen scrollable parameter list. Title shows the effect name (e.g., "IFX1 EDIT PRO" or "CHORUS EDIT PRO"). The parameter list is a vertical scrollable list with parameter name on the left and value on the right. Each row is selectable with the cursor.
- **Key Elements**:
  - Effect name in title bar
  - Scrollable parameter list
  - Parameter names and current values
  - Cursor position indicator
  - E1-E6 knob assignments at bottom
- **Interactive Elements**:
  - E1 scrolls cursor up/down through parameter list
  - E6 edits the value of the currently selected parameter
  - Touch parameters directly to select them
  - Touch to navigate back to zoom view
- **Currently Implemented?**: No
- **Notes**: This is the detailed text-list editor for any IFX, Chorus, or Reverb effect. Parameters depend on the loaded effect type. Edited settings are temporary unless the scene is saved. Parameters also accessible via TONE EDIT PRO's MFX/KIT MFX/KIT COMP tab or ZONE EDIT's EQ tab.

---

### Effects Edit Zoom -- Master FX (M.COMP / M.EQ / TFX)
- **Manual Page**: p.69
- **Accessed Via**: On EFFECTS EDIT > INTERNAL tab, touch EDIT under M.COMP, M.EQ, or TFX in the MASTER FX section
- **Screen Type**: sub-screen (zoom view)
- **Layout**: Title bar "EFFECTS EDIT ZOOM", sub-header "MASTER FX" with left/right navigation showing "CHORUS / REVERB" on the left. The main area shows three sections side by side: M.COMP (with on/off and EDIT buttons), M.EQ (with on/off and EDIT buttons), and TFX (with on/off, effect type dropdown, and EDIT button). The TFX shows "(0):Thru" or the selected effect type.
- **Key Elements**:
  - "MASTER FX" sub-header
  - M.COMP section: on/off toggle, EDIT button
  - M.EQ section: on/off toggle, EDIT button
  - TFX section: on/off toggle, effect type display (e.g., "(0):Thru"), EDIT button
  - Left/right navigation arrows
- **Interactive Elements**:
  - Touch M.COMP or M.EQ to toggle on/off
  - Touch EDIT on any of the three sections to open their Pro Edit screens
  - Navigate left/right to adjacent zoom pages (Chorus/Reverb)
- **Currently Implemented?**: No
- **Notes**: Master FX (M.COMP, M.EQ) are system-wide effects common to the entire system. TFX is a multi-effect placed after the mastering compressor and EQ. TFX is also a system effect -- settings must be saved to system settings to persist.

---

### Effects Edit Pro -- M.COMP
- **Manual Page**: p.69
- **Accessed Via**: From Master FX zoom screen, touch EDIT on M.COMP
- **Screen Type**: sub-screen (pro edit)
- **Layout**: Title shows "M.COMP EDIT PRO". Tab bar shows "MASCOMP" highlighted. Scrollable parameter list with M.COMP parameters: Low Attack, Low Release, Low Threshold, Low Ratio, Low Knee, Mid Attack, Mid Release, Mid Threshold, Mid Ratio, Mid Knee, High Attack, High Release, etc. Each parameter has name on left and value on right. Bottom has E1-E6 bar.
- **Key Elements**:
  - "M.COMP EDIT PRO" title (or similar)
  - "MASCOMP" tab
  - Full parameter list for master compressor (multi-band: Low, Mid, High bands)
  - Parameter values (e.g., attack times, release times, thresholds, ratios, knee settings)
- **Interactive Elements**:
  - E1 scrolls cursor up/down
  - E6 (M.COMP) edits the selected parameter value
  - Touch parameters to select
- **Currently Implemented?**: No
- **Notes**: Multi-band compressor with Low, Mid, and High bands. Settings are system-level and must be saved to system settings to persist.

---

### Effects Edit Pro -- M.EQ
- **Manual Page**: p.69
- **Accessed Via**: From Master FX zoom screen, touch EDIT on M.EQ
- **Screen Type**: sub-screen (pro edit)
- **Layout**: Title shows "MASTER EQ EDIT" or similar. Shows a visual EQ curve display at the top with frequency response visualization. Below are parameter values in a scrollable list or knob layout. Parameters include multi-band EQ settings (Low, Low-Mid, High-Mid, High frequencies, gains, Q values).
- **Key Elements**:
  - EQ frequency response curve visualization
  - Multi-band EQ parameters
  - Gain, Frequency, Q for each band
  - E1-E6 assignments at bottom
- **Interactive Elements**:
  - E1 scrolls cursor
  - E2-E6 (M.EQ) edit corresponding parameters (changes depend on cursor position)
  - Touch parameters or EQ curve sections
- **Currently Implemented?**: No
- **Notes**: Master EQ affects the entire output. The visual EQ curve provides real-time feedback. Settings are system-level.

---

### Effects Edit -- TFX (within Master FX Zoom)
- **Manual Page**: p.70
- **Accessed Via**: On EFFECTS EDIT ZOOM > MASTER FX page, TFX section is visible with on/off and EDIT; touch EDIT to open TFX Pro Edit
- **Screen Type**: sub-screen (embedded within Master FX zoom, with its own Pro Edit)
- **Layout**: TFX appears as the rightmost section of the Master FX zoom page. Shows TFX on/off toggle, effect type display (e.g., "(0):Thru"), and EDIT button. When EDIT is touched, it opens a Pro Edit screen identical in format to the MFX Pro Edit: scrollable parameter list specific to the selected TFX effect type.
- **Key Elements**:
  - TFX on/off toggle
  - TFX effect type display and selector
  - EDIT button
  - (Pro Edit): full parameter list for the TFX effect
- **Interactive Elements**:
  - Touch TFX on/off
  - Touch effect type to change TFX type
  - Touch EDIT to open TFX Pro Edit (scrollable parameter list)
  - In Pro Edit: E1 scrolls, E6 edits values
- **Currently Implemented?**: No
- **Notes**: TFX uses the same effect types as MFX. It is located after the mastering compressor and EQ in the signal chain. It is a system effect -- save to system settings to keep changes. Can apply effects (like stereo widening, limiting, etc.) to the overall sound.

---

### Effects Edit -- AUDIO IN Tab
- **Manual Page**: p.70
- **Accessed Via**: On EFFECTS EDIT screen, touch the AUDIO IN tab
- **Screen Type**: sub-screen (tab within Effects Edit)
- **Layout**: Title bar shows "EFFECTS EDIT" with AUDIO IN tab highlighted. Shows 4 sub-tabs at top: LINE, LOWCUT, VOCODER, HB. Below is the audio input routing diagram showing: input signal path through LOWCUT, MFX, EQ, then to output destinations. Level controls (0-100 range) are shown. Pan control is visible. Output routing shows connections to M.COMP, M.EQ, TFX. An EDIT button at the bottom opens detailed parameter editing. Below the diagram: "AUDIO IN" label indicator and BUS routing.
- **Key Elements**:
  - AUDIO IN tab (highlighted)
  - Sub-tabs: LINE, LOWCUT, VOCODER, HB
  - Input effect toggles: LOWCUT on/off, MFX on/off, EQ on/off, REV on/off
  - Level controls (0-100)
  - Pan control
  - Output destination routing (to M.COMP, M.EQ, TFX)
  - EDIT button at bottom
  - BUS routing indicator
- **Interactive Elements**:
  - Touch LOWCUT, EQ, REV to toggle each on/off
  - Touch MFX to toggle on/off
  - Touch EDIT to open Input FX or Input Reverb Edit screen
  - Adjust level and pan parameters
  - Touch sub-tabs (LINE, LOWCUT, VOCODER, HB) for different input configurations
- **Currently Implemented?**: No
- **Notes**: Controls the effects applied to audio input when sampling. The LOWCUT, MFX, EQ, and REV can each be toggled independently. For parameters not related to effects, see "Sampling" section (p.97). The EDIT button opens either the INPUT FX screen or the INPUT REVERB EDIT screen depending on which section is selected.

---

### Effects Edit -- AUDIO IN Pro Edit (Input FX / Input Reverb)
- **Manual Page**: p.70
- **Accessed Via**: On EFFECTS EDIT > AUDIO IN tab, touch EDIT on the section you want to edit
- **Screen Type**: sub-screen (pro edit)
- **Layout**: Opens either the INPUT FX screen or the INPUT REVERB EDIT screen depending on which section's EDIT was touched. Format follows the standard Pro Edit layout: scrollable parameter list with parameter names and values. For INPUT FX, shows the input effect chain parameters. For INPUT REVERB, shows reverb-specific parameters.
- **Key Elements**:
  - INPUT FX or INPUT REVERB EDIT title
  - Scrollable parameter list
  - Parameter names and values
  - E1-E6 assignments
- **Interactive Elements**:
  - E1 scrolls cursor
  - E6 edits parameter values
  - Touch parameters directly
  - Touch to navigate back
- **Currently Implemented?**: No
- **Notes**: To edit the various effects in INPUT FX, touch EDIT for the section you want to edit. Refer to the Parameter Guide for full details on available parameters.

---

### Effects Edit -- PAD Tab
- **Manual Page**: p.70-71
- **Accessed Via**: On EFFECTS EDIT screen, touch the PAD tab
- **Screen Type**: sub-screen (tab within Effects Edit)
- **Layout**: Title shows "EFFECTS EDIT" with PAD tab highlighted. Shows a 4x4 grid of pad slots (pads 1-16) organized in 4 banks (BANK1 through BANK4) with bank tabs at the top. Each pad slot shows "FX:ON" or "FX:OFF" status. On the right side: M.COMP, M.EQ, TFX indicators with MAIN output routing. Below the pad grid: INPUT indicator and BUS routing. A "Sample Output Assign" section appears at bottom for specifying the output destination for the entire sampler.
- **Key Elements**:
  - PAD tab (highlighted)
  - Bank tabs: BANK1, BANK2, BANK3, BANK4
  - 4x4 pad grid (16 pads) with FX:ON/FX:OFF status for each
  - M.COMP, M.EQ, TFX connection indicators on right
  - MAIN output routing selector
  - INPUT indicator
  - BUS routing
  - Sample Output Assign section
- **Interactive Elements**:
  - Touch BANK1-BANK4 tabs to switch pad banks
  - Touch each pad's FX:ON/FX:OFF area to toggle effects
  - Use [VALUE] dial or [DEC]/[INC] buttons to set "FX:ON"
  - Touch output routing to change destination
  - Touch Sample Output Assign to set sampler output destination
- **Currently Implemented?**: No
- **Notes**: Each pad (1-16, across 4 banks) can independently connect to MASTER FX (M.COMP, M.EQ, TFX). The Sample Output Assign sets the output destination for the entire sampler. INPUT has been added as a pad output destination option (for using Input FX on a pad's output, or as a carrier signal for the vocoder).

---

### Effects Edit -- USB Tab
- **Manual Page**: p.71
- **Accessed Via**: On EFFECTS EDIT screen, touch the USB tab
- **Screen Type**: sub-screen (tab within Effects Edit)
- **Layout**: Title shows "EFFECTS EDIT" with USB tab highlighted. Shows two sections: USB MASTER at top with output routing (MAIN), and USB SUB below with its routing. On the right side: MAIN output routing selector and BUS indicator. The layout shows how two stereo pairs of audio from the USB COMPUTER port are routed.
- **Key Elements**:
  - USB tab (highlighted)
  - USB MASTER section with output destination (MAIN)
  - USB SUB section
  - Output routing selector (MAIN, SUB, etc.)
  - BUS routing indicator
- **Interactive Elements**:
  - Select the USB MASTER output destination (USB Audio Input Destination 1)
  - Touch output routing to change between MAIN, SUB, etc.
- **Currently Implemented?**: No
- **Notes**: The FANTOM can input two stereo pairs via USB COMPUTER port. SUB output is fixed to the SUB OUT jacks. You can choose which output jacks USB MASTER is routed to.

---

### Effects Edit -- CLICK Tab
- **Manual Page**: p.71
- **Accessed Via**: On EFFECTS EDIT screen, touch the CLICK tab
- **Screen Type**: sub-screen (tab within Effects Edit)
- **Layout**: Title shows "EFFECTS EDIT" with CLICK tab highlighted. Shows the click tone routing: Tempo display (e.g., "120.00") on the left, then MAIN output routing selector on the right. Below shows SUB and BUS routing options. Simple layout focused on click output destination.
- **Key Elements**:
  - CLICK tab (highlighted)
  - Tempo display (e.g., "120.00")
  - MAIN output destination selector
  - Click Output Assign parameter
  - SUB/BUS routing indicators
- **Interactive Elements**:
  - Touch output destination to change click routing
  - Tempo value can be set on this screen
- **Currently Implemented?**: No
- **Notes**: Controls where the click/metronome sound is routed. Useful when recording into the sequencer or sampling -- you can route the click to headphones only (SUB) so it does not appear in the recorded output.

---

### Effects Edit -- OUTPUT Tab
- **Manual Page**: p.71
- **Accessed Via**: On EFFECTS EDIT screen, touch the OUTPUT tab
- **Screen Type**: sub-screen (tab within Effects Edit)
- **Layout**: Shows the output routing destinations. Parameters: Master Output Assign (MAIN, SUB, MAIN+SUB) and SUB Output Assign (MAIN, SUB, MAIN+SUB). These control where signals from the MAIN Bus and SUB Bus are physically routed to output jacks.
- **Key Elements**:
  - OUTPUT tab (highlighted)
  - Master Output Assign parameter and value
  - SUB Output Assign parameter and value
- **Interactive Elements**:
  - Touch/select Master Output Assign value (MAIN, SUB, MAIN+SUB)
  - Touch/select SUB Output Assign value (MAIN, SUB, MAIN+SUB)
- **Currently Implemented?**: No
- **Notes**: These are the final output routing settings. Master Output Assign determines where MAIN Bus signals go. SUB Output Assign determines where SUB Bus signals go. Part of the EFFECTS EDIT OUTPUT tab.

---

## Mixer Screens (pp. 72--73)

### Mixer Screen -- 8 Zone View
- **Manual Page**: p.72
- **Accessed Via**: [MENU] button > touch "MIXER"; then press "8 VIEW" button on the MIXER screen
- **Screen Type**: main screen
- **Layout**: Full-screen mixer view showing 8 zones simultaneously. Top section shows: Scene Name, Tone Name for each zone, Main level meter. Each zone strip (8 visible) contains from top to bottom: zone number with icon, SOLO button, MUTE button, EQ indicator/button (small EQ curve), CHO/REV send indicator, PAN/LEV display, MFX on/off indicator. At the top right: effect on/off toggles (IFX1, IFX2, CHO, CHORUS, REV, CMP, MEQ). Bottom section: Current Zone indicator (highlighted), "16 VIEW" and "OUT/USB" buttons, Level meter on the right. The header shows the current zone info and scene data.
- **Key Elements**:
  - 8 zone channel strips displayed simultaneously
  - Per-zone controls: zone number, SOLO, MUTE, EQ curve, CHO/REV indicators, PAN/LEV, MFX on/off
  - Scene Name and Tone Name in header
  - Main level meter (top right area)
  - Effect on/off toggles at top: IFX1, IFX2, CHO, REV, CMP, MEQ
  - Current zone highlight indicator at bottom
  - View toggle buttons: "16 VIEW", "8 VIEW", "OUT/USB"
  - Level meter on far right
- **Interactive Elements**:
  - E1 knob (push): PAGE -- switches between 16 VIEW and 8 VIEW
  - E2 knob (push): OUT/USB -- switches between zone view and OUT/USB view
  - E3 knob: CHO SEND (0-127) for current zone
  - E4 knob: REV SEND (0-127) for current zone
  - E5 knob: PAN (L64-R63) for current zone
  - E6 knob: LEVEL (0-127) for current zone
  - Touch MFX to toggle on/off per zone
  - Touch IFX1, IFX2, CHO, REV, CMP, MEQ to toggle on/off
  - Touch SOLO/MUTE buttons per zone
  - Touch Tone name to select tone for each zone
  - Touch Zone EQ area to open Zone EQ popup
- **Currently Implemented?**: No
- **Notes**: The 8 VIEW shows more detail per zone (EQ curves visible, more parameter info). The "solo" and "mute" here refer to "zone solo and zone mute" which are different from "track solo and mute" in the PATTERN screen. Zones muted in MIXER do not sound when playing the keyboard. PAD MODE Zone Solo and Zone Mute functions can also control these settings via pads (p.106).

---

### Mixer Screen -- 16 Zone View
- **Manual Page**: p.72
- **Accessed Via**: On MIXER screen, press E1 knob to toggle to "16 VIEW"; or touch "16 VIEW" button
- **Screen Type**: main screen (alternate view of Mixer)
- **Layout**: Compact mixer view showing all 16 zones simultaneously. Each zone strip is narrower than the 8 VIEW. Shows: zone number, SOLO/MUTE buttons, CHORUS send indicator, REVERB send indicator, PAN indicator, LEVEL indicator, MFX on/off. The 16 strips are arranged side by side across the full width. Same header as 8 VIEW with Scene Name and Main level meter.
- **Key Elements**:
  - 16 zone channel strips (compact)
  - Per-zone: zone number, SOLO, MUTE, CHORUS, REVERB, PAN, LEVEL, MFX
  - Scene Name in header
  - Main level meter
  - View toggle buttons
- **Interactive Elements**:
  - Same E1-E6 knob assignments as 8 VIEW
  - Touch zones, toggles, SOLO/MUTE as in 8 VIEW
  - Touch to switch views
- **Currently Implemented?**: No
- **Notes**: Shows all 16 zones at once but with less detail per zone compared to 8 VIEW. Zone EQ curves are not visible in this view (only available in 8 VIEW). Useful for getting an overview of the full mix.

---

### Mixer Screen -- OUT/USB View
- **Manual Page**: p.72
- **Accessed Via**: On MIXER screen, press E2 knob to toggle to "OUT/USB"; or touch "OUT/USB" button
- **Screen Type**: main screen (alternate view of Mixer)
- **Layout**: Shows output levels and routing instead of per-zone strips. Top section: Scene Name, Tone Name for current zone, effect on/off toggles (IFX1, IFX2, CHO, REV). Shows: "Solo and mute of each output" section. Main content area shows level meters and controls for: MAIN OUT, SUB OUT, USB IN, USB OUT. Each output section has: SOLO, MUTE toggles, MAIN/SUB routing. The MAIN/SUB level meters are displayed prominently. Bottom has: "8 VIEW" and "16 VIEW" buttons, LEVEL indicator.
- **Key Elements**:
  - Scene Name and Tone Name in header
  - Output sections: MAIN, SUB, USB IN, USB OUT
  - Solo/Mute per output
  - Level meters for each output
  - MAIN/SUB routing indicators
  - "8 VIEW" and "16 VIEW" navigation buttons
  - LEVEL control for output levels
- **Interactive Elements**:
  - E2 knob (push): toggles back to zone view (16 VIEW)
  - E6 knob: LEVEL -- adjusts the level of MAIN and SUB output
  - Touch SOLO/MUTE per output section
  - Touch to switch back to 8 VIEW or 16 VIEW
- **Currently Implemented?**: No
- **Notes**: This view focuses on the physical outputs rather than individual zones. Shows the volume of MAIN OUT, SUB OUT, USB IN, and USB OUT. Useful for balancing output levels and checking USB audio routing.

---

### Mixer -- Zone EQ Popup
- **Manual Page**: p.73
- **Accessed Via**: On the MIXER screen (8 VIEW), touch the Zone EQ field/area of the zone whose EQ you want to edit
- **Screen Type**: popup / overlay
- **Layout**: A popup overlay on top of the Mixer screen. Top section shows zone strips (1-4 or whichever are visible) with EQ indicators. The EQ popup appears below, showing: EQ on/off toggle, a simplified EQ curve visualization, and a parameter table with 3 bands (LOW, MID, HIGH). Parameters shown: Gain(dB), Freq(Hz), Q for each band. Bottom bar shows: vertical scroll indicator (E1), Input Gain (E5), and CLOSE button (E6). The values are shown numerically (e.g., Gain: -2(dB), -8(dB), +4(dB); Freq: 200(Hz), 500(Hz), 3000(Hz); Q: 1.0).
- **Key Elements**:
  - EQ on/off toggle
  - Simplified EQ curve display
  - 3-band parametric EQ: LOW, MID, HIGH
  - Per-band parameters: Gain(dB), Freq(Hz), Q
  - Input Gain parameter (0dB)
  - Cursor position indicator
  - CLOSE button
- **Interactive Elements**:
  - EQ toggle: touch to turn Zone EQ on/off
  - E1 knob: moves cursor up/down through parameter rows
  - E2-E4 knobs: edit corresponding parameters depending on cursor position (e.g., E2=LOW Gain, E3=MID Gain, E4=HIGH Gain)
  - E5 knob: Input Gain (-24 to +24 dB)
  - E6 knob (push): CLOSE -- closes the popup
  - Touch parameters directly to select and edit
- **Currently Implemented?**: No
- **Notes**: This is a quick-access EQ editor that appears as a popup over the Mixer. The simplified EQ curve provides visual feedback. For full Zone EQ parameters, refer to the Parameter Guide. The EQ settings here are the same as the Zone EQ accessible from EFFECTS EDIT.

---

## Scene Chain Screens (pp. 74--77)

### Scene Chain Screen (View Mode)
- **Manual Page**: p.74-75
- **Accessed Via**: Press the [CHAIN] button (first press)
- **Screen Type**: main screen
- **Layout**: Title bar shows "SCENE CHAIN" with standard header (time signature, tempo, measure, STOP indicator, SAMPLE PAD). Below the title: CHAIN SET selector showing the chain set name (e.g., "001:My Chain 1") with a dropdown arrow, UTILITY button, and EDIT button. The main area shows a horizontal row of scene icons -- each icon is a colored letter (A-E or similar category indicator) with the scene number below (e.g., 010, 044, 048, 011, etc.). Page indicator below the row (e.g., "Page 1/32"). A marker pulldown menu ("MARK JUMP") is shown. Below the scene row: large text showing the selected scene's name (e.g., "A001:Homecoming"), the layer description (e.g., "Layer; SuperNATURAL Acoustic Piano; Synth Pad"), the selected scene's memo, and a Stereo Width indicator (e.g., "100").
- **Key Elements**:
  - "SCENE CHAIN" title
  - Chain Set name selector (e.g., "001:My Chain 1")
  - UTILITY button
  - EDIT button
  - Horizontal scene icon row (16 icons visible per page, colored by category A-E)
  - Scene numbers below each icon
  - Page indicator (e.g., "Page 1/32")
  - MARK JUMP dropdown
  - Selected scene name (large text)
  - Selected scene layer/tone description
  - Selected scene memo
  - Stereo Width indicator
  - Left/right page navigation arrows at ends of scene row
- **Interactive Elements**:
  - Touch scene icons directly to select a scene
  - Use [INC]/[DEC] buttons, left/right arrow buttons, [VALUE] dial, or pedal switch to select scenes
  - Press tone category buttons [1]-[16] to select the 16 scenes shown horizontally
  - Touch CHAIN SET name to open Chain Set Select popup
  - Touch UTILITY to open Utility popup
  - Touch EDIT to enter Scene Chain Edit screen
  - Touch left/right arrows (or swipe) at ends of scene row to navigate pages
  - Touch MARK JUMP dropdown for marker navigation
- **Currently Implemented?**: No
- **Notes**: Up to 512 scenes (16 x 32 pages) can be registered in a chain set. The selected scene icon is highlighted. Category letters (A, B, C, etc.) correspond to scene banks. Pressing [CHAIN] again switches to Performance Mode (second press). The scene chain lets you recall scenes in a custom order without changing scene numbers.

---

### Scene Chain Screen (Performance Mode)
- **Manual Page**: p.75
- **Accessed Via**: Press [CHAIN] button a second time (from View Mode)
- **Screen Type**: main screen (alternate state of Scene Chain)
- **Layout**: Same basic structure as View Mode but with additional performance controls. Title bar "SCENE CHAIN" with same header. CHAIN SET selector and EDIT button remain. The horizontal scene row with icons is shown with the marker pulldown menu ("MARK JUMP" with left/right arrows). Below: a numbered scene list appears on the left side (e.g., "01 A001 Homecoming", "02 A010 Sure It Is", "03 A008 Breeze+Sax S1/S2", etc.). On the right: selected scene name (large, e.g., "A001:Homecoming"), selected scene layer description, selected scene memo. The screen display changes each time you press [CHAIN].
- **Key Elements**:
  - Same header as View Mode
  - Horizontal scene icon row with page indicator
  - Marker pulldown menu with MARK JUMP and left/right arrows
  - Numbered scene list on the left (showing order in the chain)
  - Selected scene name (large)
  - Selected scene layer/tone description
  - Selected scene memo
  - BWD (backward) button, CHAIN button, FWD (forward) button at bottom
- **Interactive Elements**:
  - [DEC] / left arrow / E1 BWD: returns to previous chain position
  - [INC] / right arrow / E3 FWD: advances to next chain position
  - Up arrow / E5 <-MARKER: jumps to previous marker
  - Down arrow / E6 MARKER->: jumps to next marker
  - [SHIFT] + up arrow: selects previous chain set
  - [SHIFT] + down arrow: selects next chain set
  - Touch scene list entries to jump to specific positions
  - Touch scene icons to select
- **Currently Implemented?**: No
- **Notes**: Performance Mode is optimized for live use. The BWD/FWD controls at the bottom allow stepping through the chain sequentially. MARKER navigation allows jumping to marked positions in the chain. The display alternates between View Mode and Performance Mode with each [CHAIN] button press.

---

### Scene Chain -- Chain Set Select Popup
- **Manual Page**: p.74
- **Accessed Via**: On SCENE CHAIN screen, touch the CHAIN SET name/dropdown
- **Screen Type**: popup / overlay
- **Layout**: A popup list overlay appearing over the Scene Chain screen. Title area shows "CHAIN SET" in a highlighted bar. Below is a scrollable list of chain sets: "001:My Chain 1", "002:INITIAL SCENE CHAIN", "003:INITIAL SCENE CHAIN", etc. (up to 10 shown at once, 100 total). Below the list on the left: a horizontal scene list preview. Bottom bar: up/down scroll indicator, CANCEL button (E5), OK button (E6).
- **Key Elements**:
  - "CHAIN SET" title bar
  - Scrollable list of chain sets (001-100)
  - Chain set names
  - Currently selected chain set highlighted
  - Scene list preview below
  - CANCEL button
  - OK button
- **Interactive Elements**:
  - E4 knob: scrolls up/down to select a chain set
  - E5 CANCEL: cancels selection and closes popup
  - E6 OK: confirms selection and closes popup
  - Touch a chain set name to select it
  - [VALUE] dial or [INC]/[DEC] to scroll
- **Currently Implemented?**: No
- **Notes**: Chain set number range is 001-100. Each chain set can hold up to 512 scenes. The popup appears over the Scene Chain screen and returns to it after selection.

---

### Scene Chain -- Utility Popup
- **Manual Page**: p.75
- **Accessed Via**: On SCENE CHAIN screen (Performance Mode), touch UTILITY button
- **Screen Type**: popup / overlay
- **Layout**: A small popup menu appearing in the upper-right area of the Scene Chain screen. Shows three menu items in a vertical list: "CHAIN SET COPY", "CHAIN SET SWAP", "CHAIN SET INITIALIZE". Bottom bar has CANCEL and SELECT buttons.
- **Key Elements**:
  - "UTILITY" title
  - CHAIN SET COPY option
  - CHAIN SET SWAP option
  - CHAIN SET INITIALIZE option
  - CANCEL button
  - SELECT button
- **Interactive Elements**:
  - Touch menu items to select an action
  - CANCEL: closes popup without action
  - SELECT: executes the selected action
- **Currently Implemented?**: No
- **Notes**: CHAIN SET COPY copies a chain set to another slot. CHAIN SET SWAP swaps two chain sets. CHAIN SET INITIALIZE resets a chain set to default. These are utility operations for managing chain sets.

---

### Scene Chain Edit Screen
- **Manual Page**: p.76-77
- **Accessed Via**: On SCENE CHAIN screen, touch EDIT button; or press [CHAIN] > touch CHAIN SET name to select an empty chain set > touch EDIT
- **Screen Type**: main screen (edit mode)
- **Layout**: Title bar "SCENE CHAIN" with header showing time signature, tempo, etc. Below title: CHAIN SET name (e.g., "001:INITIAL SCENE CHAIN"), RENAME button, WRITE button. The horizontal scene icon row shows registered scenes with colored category letters and scene numbers. A highlighted box indicates the current editing position. Below: large text showing the selected scene name (e.g., "A019:Jazz Cafe"). Action buttons in a row: "Select Scene", "Delete", "Copy", "Cut", "Paste", "Insert". Below actions: "Swap" button. At bottom: "MARKER" section with E1 assignment.
- **Key Elements**:
  - CHAIN SET name display
  - RENAME button (to rename the chain set)
  - WRITE button (to save the chain set)
  - Horizontal scene row with editable positions
  - Highlighted editing position (movable box)
  - Selected scene name (large text)
  - Edit action buttons: Select Scene, Delete, Copy, Cut, Paste, Insert, Swap
  - MARKER section
  - "Next" box indicator for adding new scenes
- **Interactive Elements**:
  - Touch "Select Scene" to open Scene Select popup
  - Touch "Delete" to delete the highlighted scene
  - Touch "Copy" to copy the highlighted scene
  - Touch "Cut" to cut the highlighted scene
  - Touch "Paste" to paste at the highlighted position (overwrites)
  - Touch "Insert" to insert at the highlighted position
  - Touch "Swap" to swap scenes (INDIVIDUAL or MARKER SELECTION mode)
  - MARKER [E1]: sets a marker (0-9, A-Z, a-z, total 62 markers) at the highlighted scene
  - [SHIFT] + up arrow: selects previous chain set
  - [SHIFT] + down arrow: selects next chain set
  - Left/right arrows or touch: navigate left/right to jump to previous/next marker
  - [INC]/[DEC] or [VALUE] dial: change the scene number of the highlighted position
  - Hold [SHIFT] + left/right buttons or touch to multi-select
  - Touch "RENAME" to edit chain set name
  - Touch "WRITE" to save the chain set
  - Touch the "Next" box to add a new scene at the next position
  - Touch left/right arrows at scene row edges for page navigation
- **Currently Implemented?**: No
- **Notes**: Up to 512 scenes can be registered per chain set. Scenes are registered consecutively from left to right. The Swap function has two modes: INDIVIDUAL (select and swap two individual scenes) and MARKER SELECTION (select a marker and swap all scenes from that marker to the next marker as a group). When you save with WRITE, data at the save destination is overwritten. The highlighted box can be moved with left/right arrow buttons.

---

### Scene Chain Edit -- Scene Select Popup
- **Manual Page**: p.76
- **Accessed Via**: On SCENE CHAIN EDIT screen, touch "Select Scene"
- **Screen Type**: popup / overlay
- **Layout**: A popup overlay showing a grid of available scenes. Title "SCENE" at top. Shows a grid of scene cards arranged in rows (4 columns). Each card shows: scene number (e.g., A001, A002, etc.) and scene name (e.g., "Homecoming", "MIDI Treasures", "Ultimate Str/Sect", etc.). Below the grid: "Bank Select" row with bank letter (A, B, C...), search icon (magnifying glass), star/favorite icon, and directional arrows for pagination. Bottom bar: CANCEL button (E5), OK button (E6).
- **Key Elements**:
  - "SCENE" title
  - Scene grid (4 columns, multiple rows)
  - Scene cards showing number and name
  - Bank selector (A, B, C, etc.)
  - Search icon
  - Favorite/star icon
  - CANCEL button
  - OK button
  - Pagination controls
- **Interactive Elements**:
  - E1 knob: switches the scene bank (A, B, C, etc.)
  - Touch a scene card to highlight it
  - E5 CANCEL: cancels and closes popup
  - E6 OK: confirms the selected scene
  - Touch bank letters to switch banks
  - Touch search icon to search for scenes
  - Touch star icon for favorites
- **Currently Implemented?**: No
- **Notes**: This is the same scene selection popup used in other contexts (e.g., the home screen scene selection). After selecting a scene and pressing OK, you return to the Scene Chain Edit screen with the selected scene registered at the current position.

---

## Summary

### Total Screens Cataloged: 29

| # | Screen Name | Category | Page | Type | Implemented? |
|---|---|---|---|---|---|
| 1 | Effects Edit Main Screen | Effects | 66 | main screen | Partial |
| 2 | Effects Edit -- INTERNAL Tab | Effects | 66 | sub-screen | Partial |
| 3 | Effects Edit -- Zone Selection | Effects | 66 | sub-screen | No |
| 4 | Effects Edit Zoom -- Zone Effects | Effects | 67 | sub-screen | No |
| 5 | Effects Edit Zoom -- Zone Effects (MFX Zoom/Pro Edit) | Effects | 66-67 | sub-screen | No |
| 6 | Effects Edit Zoom -- Drum Kit Comp | Effects | 67 | sub-screen | No |
| 7 | Effects Edit Zoom -- IFX1/IFX2 | Effects | 68 | sub-screen | No |
| 8 | Effects Edit Zoom -- Chorus/Reverb | Effects | 68 | sub-screen | No |
| 9 | Effects Edit Pro -- IFX/Chorus/Reverb | Effects | 68 | sub-screen | No |
| 10 | Effects Edit Zoom -- Master FX | Effects | 69 | sub-screen | No |
| 11 | Effects Edit Pro -- M.COMP | Effects | 69 | sub-screen | No |
| 12 | Effects Edit Pro -- M.EQ | Effects | 69 | sub-screen | No |
| 13 | Effects Edit -- TFX | Effects | 70 | sub-screen | No |
| 14 | Effects Edit -- AUDIO IN Tab | Effects | 70 | sub-screen | No |
| 15 | Effects Edit -- AUDIO IN Pro Edit | Effects | 70 | sub-screen | No |
| 16 | Effects Edit -- PAD Tab | Effects | 70-71 | sub-screen | No |
| 17 | Effects Edit -- USB Tab | Effects | 71 | sub-screen | No |
| 18 | Effects Edit -- CLICK Tab | Effects | 71 | sub-screen | No |
| 19 | Effects Edit -- OUTPUT Tab | Effects | 71 | sub-screen | No |
| 20 | Mixer Screen -- 8 Zone View | Mixer | 72 | main screen | No |
| 21 | Mixer Screen -- 16 Zone View | Mixer | 72 | main screen | No |
| 22 | Mixer Screen -- OUT/USB View | Mixer | 72 | main screen | No |
| 23 | Mixer -- Zone EQ Popup | Mixer | 73 | popup | No |
| 24 | Scene Chain Screen (View Mode) | Scene Chain | 74-75 | main screen | No |
| 25 | Scene Chain Screen (Performance Mode) | Scene Chain | 75 | main screen | No |
| 26 | Scene Chain -- Chain Set Select Popup | Scene Chain | 74 | popup | No |
| 27 | Scene Chain -- Utility Popup | Scene Chain | 75 | popup | No |
| 28 | Scene Chain Edit Screen | Scene Chain | 76-77 | main screen | No |
| 29 | Scene Chain Edit -- Scene Select Popup | Scene Chain | 76 | popup | No |

### Screen Transitions Map

```
[MENU] > EFFECTS EDIT
  |
  +--> INTERNAL tab (default)
  |      |
  |      +--> Select Zone --> Zone Effects visible
  |      |     |
  |      |     +--> EDIT (on zone section) --> Effects Edit Zoom: Zone Effects
  |      |     |     |
  |      |     |     +--> To PRO --> MFX Edit Pro (scrollable param list)
  |      |     |     +--> To ZOOM --> MFX Edit Zoom (visual knob grid)
  |      |     |     +--> Left/Right --> Drum Kit Comp / IFX1/IFX2 / Chorus/Reverb zoom pages
  |      |     |
  |      |     +--> Toggle MFX/EQ/COMP on/off
  |      |
  |      +--> EDIT (on IFX1/IFX2) --> Effects Edit Zoom: IFX1/IFX2
  |      |     +--> EDIT --> IFX Pro Edit (scrollable param list)
  |      |
  |      +--> EDIT (on CHORUS/REVERB) --> Effects Edit Zoom: Chorus/Reverb
  |      |     +--> EDIT --> Chorus/Reverb Pro Edit
  |      |
  |      +--> EDIT (on MASTER FX) --> Effects Edit Zoom: Master FX
  |            +--> EDIT (M.COMP) --> M.COMP Pro Edit
  |            +--> EDIT (M.EQ) --> M.EQ Pro Edit (with EQ curve)
  |            +--> EDIT (TFX) --> TFX Pro Edit
  |
  +--> AUDIO IN tab
  |      +--> Toggle LOWCUT/MFX/EQ/REV on/off
  |      +--> EDIT --> Input FX screen OR Input Reverb Edit screen
  |
  +--> PAD tab
  |      +--> Select BANK1-BANK4
  |      +--> Toggle FX:ON/OFF per pad
  |      +--> Set Sample Output Assign
  |
  +--> USB tab
  |      +--> Set USB MASTER output destination
  |
  +--> CLICK tab
  |      +--> Set Click Output Assign + Tempo
  |
  +--> OUTPUT tab
         +--> Set Master Output Assign
         +--> Set SUB Output Assign

[MENU] > MIXER
  |
  +--> 8 Zone View (default or toggled via E1)
  |      +--> Touch Zone EQ area --> Zone EQ Popup (overlay)
  |      |     +--> CLOSE (E6) --> back to Mixer
  |      +--> E1 push --> 16 Zone View
  |      +--> E2 push --> OUT/USB View
  |
  +--> 16 Zone View
  |      +--> E1 push --> 8 Zone View
  |      +--> E2 push --> OUT/USB View
  |
  +--> OUT/USB View
         +--> E2 push --> 16 Zone View

[CHAIN] button
  |
  +--> Scene Chain (View Mode) -- 1st press
  |      +--> Touch CHAIN SET name --> Chain Set Select Popup
  |      |     +--> OK/CANCEL --> back to Scene Chain
  |      +--> Touch EDIT --> Scene Chain Edit Screen
  |      |     +--> Select Scene --> Scene Select Popup
  |      |     |     +--> OK/CANCEL --> back to Edit
  |      |     +--> RENAME --> name editing
  |      |     +--> WRITE --> save chain set
  |      +--> Touch UTILITY --> Utility Popup
  |            +--> COPY/SWAP/INITIALIZE actions
  |
  +--> Scene Chain (Performance Mode) -- 2nd press
         +--> BWD/FWD navigation
         +--> MARKER jumps
         +--> [CHAIN] again --> back to View Mode
```
