# Fantom 08 Screen Catalog -- 06: Pads & 07: Sequencer

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, pages 103--115
> **Sections Covered**: Chapter 06 (Pads / PAD MODE) and Chapter 07 (Sequencer -- Pattern / Group / Song)
> **Currently Implemented Screen Types**: home, zone-view, key-range, write, menu, tone-select, effect

---

## 06: Pads (PAD MODE) -- Pages 103--107

---

### PAD MODE Selection Screen
- **Manual Page**: p.104
- **Accessed Via**: Press the [PAD MODE] button on the panel
- **Screen Type**: popup / overlay
- **Layout**: A 4x4 grid of labeled pad mode icons, plus a "System" pad (pad 16) in the lower-right area. An [EDIT] checkbox in the bottom-left, a [CLOSE] button in the bottom-right. Title bar reads "PAD MODE" with a close (X) button. Below the title: "Press the pads to select."
- **Key Elements**:
  - Pad 1: Sample Pad
  - Pad 2: Note Pad
  - Pad 3: Partial Sw/Sel
  - Pad 4: DAW Control
  - Pad 5: Zone Mute
  - Pad 6: Zone Solo
  - Pad 7: Kbd Sw Group
  - Pad 8: Rhythm Pattern
  - Pad 9: Pattern
  - Pad 10: Variation Play
  - Pad 11: Group Play
  - Pad 16: System
  - [EDIT] checkbox
  - [CLOSE] button
- **Interactive Elements**: Touch any of the 12 pad mode icons to select that mode; alternatively press physical pads [1]--[8], [9]--[11], or [16]. Touching an icon or pressing the corresponding pad selects the mode and returns to the previous screen. Hold [SHIFT] + [PAD MODE] to open the edit screen for the selected function.
- **Currently Implemented?**: No
- **Notes**: Pad mode settings are saved in the scene. This screen also appears as the entry point for Group Play mode (p.107). After selecting a pad mode, the pads take on the assigned function immediately.

---

### Sample Pad Screen (SAMPLE PAD)
- **Manual Page**: p.104
- **Accessed Via**: PAD MODE > Pad [1] (Sample Pad), or press [PAD MODE] when already in Sample Pad mode
- **Screen Type**: main screen
- **Layout**: Full-width display with a header row showing "SAMPLE PAD" title and a back arrow. Below the title: four bank buttons (BANK1, BANK2, BANK3, BANK4) on the left, and SAMPLING / SAMPLE UTILITY buttons on the right. Below: a 4x4 grid of sample pad slots (pads 1--16), each showing pad number, sample name, gate/loop type, length, and stereo/mono indicator. Bottom toolbar: [WAVE EDIT], [QUICK EDIT], and [IMPORT] buttons.
- **Key Elements**:
  - Back arrow (top-left)
  - Bank buttons: BANK1, BANK2, BANK3, BANK4
  - SAMPLING button
  - SAMPLE UTILITY button
  - 16 sample pad slots in a 4x4 grid, each with: pad number, sample type indicator (GATE/LOOP), sample length, stereo/mono flag, sample name
  - Bottom toolbar: WAVE EDIT, QUICK EDIT, IMPORT
- **Interactive Elements**: Touch bank buttons to switch banks. Touch individual pad slots to select them. Touch WAVE EDIT / QUICK EDIT / IMPORT for editing functions. Physical pads play the corresponding samples.
- **Currently Implemented?**: No
- **Notes**: For details on using sample pads, see "Pressing Pads to Play Pad Samples" (p.93). Each bank holds 16 samples.

---

### Note Pad Screen (NOTE PAD)
- **Manual Page**: p.104
- **Accessed Via**: PAD MODE > Pad [2] (Note Pad)
- **Screen Type**: main screen
- **Layout**: Full-width display with "NOTE PAD" title and back arrow at top. A small keyboard illustration spans the top. Below: a 4x4 grid of 16 note pads, each showing pad number, tone name, zone assignment (e.g., ZONE10), note number (e.g., 36/C 2), and velocity (e.g., 100). Bottom toolbar shows: [SELECT] button on the left and [SYSTEM WRITE] button. At the very bottom, a status bar shows: PAD, ZONE, PAD NOTE NUMBER, PAD VELOCITY values for the selected pad.
- **Key Elements**:
  - Back arrow
  - Keyboard illustration with dot indicator showing selected note position
  - 16 note pad slots (4x4 grid): pad number, tone name, zone, note number, velocity
  - SELECT button
  - SYSTEM WRITE button
  - Status bar: PAD / ZONE / PAD NOTE NUMBER / PAD VELOCITY
- **Interactive Elements**:
  - [E1]: Selects a pad
  - [E3] SYSTEM WRITE: Saves the edited settings to the system
  - [E4]: Selects the zone played by the selected pad
  - [E5]: Selects the note number played by the selected pad (indicated by a dot above the keyboard graphic)
  - [E6]: Specifies the velocity played by the selected pad
  - Touch pad icons directly on screen to select them
- **Currently Implemented?**: No
- **Notes**: Settings for each pad are saved as system settings (not per-scene). You can use this to play a zone's tone from a pad (e.g., play zone 1's piano with the keyboard while using pads for zone 10's drum kit).

---

### Note Pad Edit Screen (Specifying the tone played by each pad)
- **Manual Page**: p.105
- **Accessed Via**: In NOTE PAD screen, press a pad to select it, then move cursor to the parameter to edit; or use [E4]--[E6] knobs
- **Screen Type**: sub-screen (inline editing within Note Pad screen)
- **Layout**: A single pad detail view showing: pad number, corresponding tone name / drum instrument name, zone/note number/velocity below. The cursor highlights the editable field.
- **Key Elements**:
  - Pad number
  - Tone name / drum instrument name
  - Zone assignment
  - Note number (with octave)
  - Velocity value
- **Interactive Elements**:
  - [E4]--[E6] knobs for direct parameter editing
  - Touch to select pad, then navigate cursor to parameter
- **Currently Implemented?**: No
- **Notes**: Repeat steps 1--2 for other pads. Save with SYSTEM WRITE [E3]. Parameters mirror the system parameters "Pad 1--16 Zone", "Pad 1--16 Note Number", "Pad 1--16 Velocity" editable in SYSTEM/NOTE PAD settings.

---

### Partial Switch/Select Screen (PARTIAL SW/SELECT)
- **Manual Page**: p.105
- **Accessed Via**: PAD MODE > Pad [3] (Partial Sw/Sel)
- **Screen Type**: main screen
- **Layout**: Full-width display with "PARTIAL SW/SELECT" title and back arrow. Below: a 2x4 grid (8 pad slots). Top row (pads 1--4): Partial 1 Sw through Partial 4 Sw (On/Off). Bottom row (pads 5--8): Partial 1 Sel through Partial 4 Sel (On/Off). Below the grid: a keyboard illustration. Bottom-right: [EXIT] button.
- **Key Elements**:
  - Back arrow
  - 8 pad slots arranged in 2 rows of 4
  - Pads 1--4: Select partials 1--4
  - Pads 5--8: Turn partials 1--4 on/off
  - Keyboard illustration
  - EXIT button
- **Interactive Elements**: Press pads [1]--[4] to select partials, [5]--[8] to toggle partials on/off. Touch icons on screen.
- **Currently Implemented?**: No
- **Notes**: For drum kit tones, you can select/toggle the wave of the selected key. May be disabled depending on the tone being used.

---

### DAW Control Screen (CONTROL)
- **Manual Page**: p.105
- **Accessed Via**: PAD MODE > Pad [4] (DAW Control)
- **Screen Type**: main screen
- **Layout**: Full-width display with "CONTROL:" title followed by connection status ("Not Connected" or DAW name). Back arrow at top-left. Center area shows a message ("Please Connect to the PC.") when not connected, or DAW-specific controls when connected. Below: a synthesizer/keyboard illustration.
- **Key Elements**:
  - Back arrow
  - Connection status indicator
  - "Please Connect to the PC." message (when disconnected)
  - Keyboard illustration at bottom
- **Interactive Elements**: Pads map to DAW-specific functions depending on the connected software:
  - **Logic Pro X**: Pads [1]--[4] = Recall Screen Set 1--4; [5] = Zoom Horizontal IN; [6] = Zoom Horizontal OUT; [7] = Zoom Vertical IN; [8] = Zoom Vertical OUT; [9] = Open/Close Marker List; [13] = Next Marker; [14] = Previous Marker; [15] = Song Position by measure; [16] = Play/Stop
  - **MainStage**: Pads [1] = Next Set; [2] = Previous Set; [3] = Next Patch; [4] = Previous Patch; [13] = MIDI PC INC; [14] = MIDI PC DEC
  - **Ableton Live**: Play drum racks from the pads
- **Currently Implemented?**: No
- **Notes**: Requires USB connection and USB driver installation. Logic Pro X / MainStage require a dedicated plugin. See "DAW Integration Usage Guide" PDF for details.

---

### Zone Mute Screen (ZONE MUTE)
- **Manual Page**: p.106
- **Accessed Via**: PAD MODE > Pad [5] (Zone Mute)
- **Screen Type**: main screen
- **Layout**: Full-width display with "ZONE MUTE" title and back arrow. A 4x4 grid of 16 zone slots (Zone1 through Zone16), each showing zone name and On/Off mute status. Color-coded indicators show mute state. Bottom-right: [EXIT] button.
- **Key Elements**:
  - Back arrow
  - 16 zone mute slots (4x4 grid): zone number, zone name, On/Off status
  - Color indicators for mute state
  - EXIT button
- **Interactive Elements**: Press pads [1]--[16] or touch zone icons to toggle mute on/off for the corresponding zone. Multiple zones can be muted simultaneously.
- **Currently Implemented?**: No
- **Notes**: Pad number corresponds to zone number. Same function as "mute" in the MIXER screen. Pressing the pad switches the mute status; pad is muted in the "On" state.

---

### Zone Solo Screen (ZONE SOLO)
- **Manual Page**: p.106
- **Accessed Via**: PAD MODE > Pad [6] (Zone Solo)
- **Screen Type**: main screen
- **Layout**: Full-width display with "ZONE SOLO" title and back arrow. A 4x4 grid of 16 zone slots (Zone1 through Zone16), each showing zone name and Off status. Color-coded indicators highlight the soloed zone. Bottom-right: [EXIT] button.
- **Key Elements**:
  - Back arrow
  - 16 zone solo slots (4x4 grid): zone number, zone name, Off indicator
  - Color indicators for solo state
  - EXIT button
- **Interactive Elements**: Press pads [1]--[16] or touch zone icons to solo the corresponding zone. Press a soloed pad again to defeat solo. Cannot solo multiple zones simultaneously.
- **Currently Implemented?**: No
- **Notes**: Pad number corresponds to zone number. Same function as "solo" in the MIXER screen. Only the selected zone is heard when soloed.

---

### Keyboard Switch Group Select Screen (KBD SW GRP SELECT)
- **Manual Page**: p.106
- **Accessed Via**: PAD MODE > Pad [7] (Kbd Sw Group)
- **Screen Type**: main screen
- **Layout**: Full-width display with "KBD SW GRP SELECT" title and back arrow. A 4x4 grid of 16 group slots (Group1 through Group16), each showing a multi-colored icon representing the on/off status of each zone within that group. Bottom toolbar: [EDIT] button on the left, [EXIT] button on the right.
- **Key Elements**:
  - Back arrow
  - 16 group slots (4x4 grid), each with a multi-colored zone status icon
  - [EDIT] button
  - [EXIT] button
- **Interactive Elements**: Press pads [1]--[16] or touch group icons to select a keyboard switch group. Select [E1] EDIT to enter group edit mode. Even from other screens, pressing [BANK] illuminates pads to show zone status of the currently selected group.
- **Currently Implemented?**: No
- **Notes**: Kbd Sw Group handles a combination of ZONE INT/EXT on/off status as one of 16 groups. Allows instantly switching between different sounds played from the keyboard while the scene remains unchanged. Settings are saved in the scene (save scene to preserve them, p.56).

---

### Keyboard Switch Group Edit Screen (KBD SW GRP EDIT)
- **Manual Page**: p.106
- **Accessed Via**: KBD SW GRP SELECT screen > select a group > [E1] EDIT (the [BANK] button lights up)
- **Screen Type**: sub-screen
- **Layout**: Full-width display with "KBD SW GRP EDIT" title, back arrow, and the group name/number (e.g., "KBD SW GROUP 2"). A 4x4 grid of 16 zone slots (ZONE1 through ZONE16), each showing On/Off status. Bottom-right: [EXIT] button.
- **Key Elements**:
  - Back arrow
  - Group name/number header
  - 16 zone on/off slots (4x4 grid): ZONE1--ZONE16, each with On/Off
  - EXIT button
- **Interactive Elements**: Touch zone icons on screen or press pads to toggle each zone's ZONE INT/EXT on/off. [E6] EXIT returns to KBD SW GRP SELECT screen.
- **Currently Implemented?**: No
- **Notes**: This edits the state of each zone for the selected keyboard switch group. Each group independently controls which zones respond to the keyboard.

---

### Rhythm Pattern Screen (RHYTHM PATTERN)
- **Manual Page**: p.107
- **Accessed Via**: PAD MODE > Pad [8] (Rhythm Pattern)
- **Screen Type**: main screen
- **Layout**: Top section shows the RHYTHM PATTERN header with tempo, time signature, playback position (measure-beat), STOP indicator, and a "RTH PATTERN" button. Below that: a scene/zone info area showing the current preset number and name (e.g., "PRST 01: ROCK 1"), zone info (ZONE 10), and tone info (e.g., "0001:LD Std Kit 1", Drum, PR-A). In the center: a 2x3 grid of pattern selection pads (P001--P006) showing Intro, Verse 1, Fill-In 1, Verse 2, Fill-In 2, Ending with variation counts and pattern labels (Pattern A--D). Bottom-left: [KEY TRIGGER] button. Bottom-right: [LEV] indicator showing level (100).
- **Key Elements**:
  - Transport info bar: tempo, time signature, beat position, STOP indicator
  - RTH PATTERN mode button
  - Preset name and number (e.g., PRST 01: ROCK 1)
  - Zone/tone display (zone number, tone name, category, bank)
  - 6 pattern pads (P001--P006): Intro, Verse 1, Fill-In 1, Verse 2, Fill-In 2, Ending
  - Variation count and pattern name per pad
  - KEY TRIGGER button
  - LEV (level) indicator
- **Interactive Elements**:
  - Pad [1]: Select Intro rhythm pattern
  - Pad [2]: Select Pattern A rhythm pattern
  - Pad [3]: Select Pattern B rhythm pattern
  - Pad [4]: Select Pattern C rhythm pattern
  - Pad [5]: Select Pattern D rhythm pattern
  - Pad [6]: Select Ending rhythm pattern
  - Touch pattern pad icons on screen
- **Currently Implemented?**: No
- **Notes**: Operation is the same as touching the Intro--Ending icons in the RHYTHM PATTERN screen (referenced elsewhere in the manual). Plays rhythm patterns through the sequencer.

---

### Pattern Select Screen (PAD PATTERN) -- via Pad Mode
- **Manual Page**: p.107
- **Accessed Via**: PAD MODE > Pad [9] (Pattern)
- **Screen Type**: main screen
- **Layout**: Top section shows "PAD PATTERN" header with transport info (tempo, time signature, beat position, STOP indicator, PATTERN mode). Below: a "PAD AREA SELECT" label. Left side: a row/column grid label area showing rows A--H and columns 1--16. Center: a 4x4 red-bordered area highlighting the currently selectable 4x4 subset of the full 8x16 pattern grid. Pads corresponding to recorded patterns are lit. Bottom-right: [EXIT] button.
- **Key Elements**:
  - Back arrow
  - PAD PATTERN title with transport info
  - PAD AREA SELECT label
  - Row labels (A--H) on the left
  - Column labels (1--16) on the top
  - 4x4 red-bordered selection area within the 8x16 grid
  - Lit pads indicating recorded patterns
  - EXIT button
- **Interactive Elements**: Use pads [1]--[16] to directly recall patterns of the 4x4 area enclosed by the red frame. Hold [SHIFT] + [PAD MODE] to access PAD AREA SELECT screen, then use arrow buttons to move the 4x4 selection area across the full 8x16 grid.
- **Currently Implemented?**: No
- **Notes**: The pads correspond to the red-bordered 4x4 region. You can reposition this region to access any part of the 8x16 grid. Pads light up for boxes that contain recorded patterns.

---

### Variation Play (via Pad Mode)
- **Manual Page**: p.107
- **Accessed Via**: PAD MODE > Pad [10] (Variation Play)
- **Screen Type**: main screen (uses the PATTERN screen as backdrop)
- **Layout**: Same as the PATTERN screen layout but the pads are reassigned to play variations from the next measure location. No additional on-screen UI beyond the standard PATTERN screen.
- **Key Elements**:
  - Standard PATTERN screen elements
  - Pads mapped to variations A--H
- **Interactive Elements**:
  - Pad [1]: Plays variation A
  - Pad [4]: Plays variation E
  - Pad [5]: Plays variation B
  - Pad [8]: Plays variation F
  - Pad [9]: Plays variation C
  - Pad [12]: Plays variation G
  - Pad [13]: Plays variation D
  - Pad [16]: Plays variation H
- **Currently Implemented?**: No
- **Notes**: Each pad directly plays the corresponding variation from the next measure location. The pattern view on screen updates to reflect which variation is selected/playing.

---

### Group Play (via Pad Mode)
- **Manual Page**: p.107
- **Accessed Via**: PAD MODE > Pad [11] (Group Play); opens the PAD MODE selection screen first, then press pad 11
- **Screen Type**: overlay (uses PAD MODE selection screen)
- **Layout**: The PAD MODE selection screen appears with the instruction "Press the pads to select." The Group Play icon (pad 11) is selected. After selection, the pads play back the sequencer group. The group plays back using the "Group Length" cycle set when the group was created.
- **Key Elements**:
  - PAD MODE selection overlay
  - Group Play pad icon
- **Interactive Elements**: Press the pad corresponding to a group you've already created to make it play back or stop. Colors shown to the left of group names in the Group List correspond to pad colors.
- **Currently Implemented?**: No
- **Notes**: Cannot use Group Play during normal pattern playback -- stop the pattern first, then press the pad. The group plays using its Group Length cycle.

---

## 07: Sequencer -- Pages 109--115

---

### Pattern Screen (PATTERN) -- 8-Track View
- **Manual Page**: p.110--111
- **Accessed Via**: Press the [PATTERN] button on the panel
- **Screen Type**: main screen
- **Layout**: Full-width display divided into several regions:
  - **Header bar** (top): Back arrow, "PATTERN" label, transport info (time signature, tempo, beat position with format XXX-XX-XXX, PLAY/STOP status, SAMPLE PAD button)
  - **Track info bar**: Toggle between "Tr 1-8/9-16 View" and "16Tr View". Shows VRTN (variation), TRACK number, PTN (pattern number), NAME, with MUTE and SOLO toggle buttons. Right side: tone information for the selected track (e.g., "Synth Polykey 1729:E5 Anh Lite")
  - **Grid area**: 8 visible tracks (A--H rows) x 8 columns (tracks 1--8 or 9--16). Each cell is a pattern box that can be empty (dark), contain data (colored, color selectable), contain data with loop off (colored with indicator), be in play-standby (colored with play-standby icon), or be playing (colored with playing icon). The selected pattern box has a red border (the "target pattern").
  - **Bottom toolbar**: [LOOP SETTING], [PTN UTILITY], [EDIT], [UNDO], [GROUPING], [GROUP] buttons. Below the grid: zone track labels (ZONE1--ZONE6...ZONE16).
- **Key Elements**:
  - Back arrow
  - PATTERN title
  - Transport info: time signature, tempo (J=XXX.XX), beat position, PLAY/STOP, SAMPLE PAD
  - Track view toggle: Tr 1-8/9-16 View
  - VRTN / TRACK / PTN / NAME labels
  - MUTE and SOLO buttons
  - Tone info display (right side of track info bar)
  - Track number indicators (1--8 or 9--16)
  - 8x8 pattern grid with color-coded pattern boxes
  - Pattern box states: empty, data (colored), loop off, play-standby, playing
  - Pattern names shown in each box (e.g., "Intro", "Verse A", etc.)
  - Zone labels below grid (ZONE1--ZONE16)
  - Bottom toolbar: LOOP SETTING, PTN UTILITY, EDIT, UNDO, GROUPING, GROUP
- **Interactive Elements**:
  - [E1] LOOP SETTING: Opens the LOOP SETTING screen
  - [E2] PTN UTILITY: Opens the PTN UTILITY screen
  - [E3] EDIT: Opens the pattern editor (piano roll)
  - [E4] UNDO/REDO: Undoes/redoes the last edit
  - [E5] GROUPING: Opens the GROUPING screen
  - [E6] GROUP: Opens the GROUP screen
  - Touch `<Tr 1-8/9-16 View>` to switch displayed track range
  - Touch `<16Tr View>` to show all 16 tracks
  - Touch `<TRACK NUM/ICON>` to switch between track number and instrument icon display (in 16Tr View)
  - Touch `<MUTE>` to open MUTE SELECT screen
  - Touch `<SOLO>` to open SOLO SELECT screen
  - Touch pattern boxes to select them (red border); long-touch to set play-standby
  - Cursor buttons to navigate between pattern boxes
  - Tone category buttons [1]--[16] to select tones for the current zone
- **Currently Implemented?**: No
- **Notes**: The PATTERN screen is the central hub for the sequencer. Patterns, groups, and songs are all saved per scene. Scenes with patterns show a "PTN" indicator in the scene list. Each track corresponds to a zone (Track 1 = Zone 1, etc.). Each track can have up to 8 patterns (variations A--H). Patterns can be up to 64 measures long.

---

### Pattern Screen (PATTERN) -- 16-Track View
- **Manual Page**: p.111
- **Accessed Via**: In the PATTERN screen, touch `<16Tr View>` in the track info bar
- **Screen Type**: main screen (alternate view of PATTERN screen)
- **Layout**: Same header and toolbar as 8-Track View, but the grid area shows all 16 tracks (A--H rows) simultaneously. The pattern boxes are smaller to fit all tracks. Track number/icon toggle `<TRACK NUM/ICON>` switches between showing track numbers or instrument icons at the column headers.
- **Key Elements**:
  - Same header as 8-Track View
  - 16 track columns (1--16) visible at once
  - Smaller pattern boxes
  - Track NUM/ICON toggle
  - Same bottom toolbar
- **Interactive Elements**: Same as 8-Track View plus `<TRACK NUM/ICON>` toggle.
- **Currently Implemented?**: No
- **Notes**: All 16 tracks visible in a single screen. Pattern boxes are smaller but still color-coded and touch-selectable.

---

### Pattern Box States (visual reference)
- **Manual Page**: p.111
- **Accessed Via**: N/A (visual indicators within the PATTERN screen)
- **Screen Type**: N/A (visual element reference)
- **Layout**: Pattern boxes display different visual states:
  - **Empty** (dark): No data recorded
  - **Exist Data** (colored, color selectable): Contains recorded data; shows pattern name (e.g., "Intro") and a fraction indicator (e.g., "/4" meaning 4 measures total)
  - **Exist Data, Loop Sw Off** (colored with loop-off indicator): Contains data but loop is off (one-shot)
  - **Exist Data, Play standby** (colored with play-standby icon): Queued to play when PLAY is pressed
  - **Exist Data, Playing** (colored with playing icon and measure indicator): Currently playing, shows current measure position
- **Key Elements**:
  - Pattern name label
  - Measure fraction indicator
  - Loop on/off indicator
  - Play-standby icon
  - Playing animation with current measure
  - Color coding per pattern
- **Interactive Elements**: Touch to select, long-touch for play-standby.
- **Currently Implemented?**: No
- **Notes**: Play-standby is a key concept -- only one pattern per track can be in play-standby at a time. The current pattern is the one in play-standby mode.

---

### Loop Setting Screen (LOOP SETTING)
- **Manual Page**: p.112
- **Accessed Via**: PATTERN screen > [E1] LOOP SETTING; or select a pattern box then press [E1]
- **Screen Type**: sub-screen
- **Layout**: Top section mirrors the PATTERN screen header. Below: a pattern data area showing a simplified piano-roll view of note data (presence/absence of notes) with measure numbers. Below that: a loop region indicator showing the loop start/end range with brighter colors for the active loop range. Bottom toolbar: [LOOP SW] on the left, beat position (e.g., 01-01-000), and a [SYSTEM] button on the right.
- **Key Elements**:
  - Pattern data area (simplified piano-roll, showing note data presence)
  - Measure number labels
  - Loop region indicator (colored bar showing loop range)
  - Brighter colors = active loop range
  - LOOP SW label
  - Beat position display
  - SYSTEM button
- **Interactive Elements**:
  - [E1] LOOP SW: Turns looping on/off (OFF = one-shot, ON = looping)
  - Start [E3] knob: Sets play start point (01-01-000 to 64-01-000, in beat units)
  - Length [E4] knob: Sets loop length (1--64 measures; can exceed original pattern length, extra plays blank)
  - [E6] Change Timing: SYSTEM (follows system setting), MEASURE (changes at next measure), PTN END (changes at pattern end including loop range)
- **Currently Implemented?**: No
- **Notes**: Loop parameter settings for each pattern are saved in the scene. The selected pattern box has a red border. Press [EXIT] to return to PATTERN screen.

---

### Tempo Screen (TEMPO) -- Sequencer Context
- **Manual Page**: p.113
- **Accessed Via**: Press the [TEMPO] button while in the PATTERN / GROUP / SONG screen
- **Screen Type**: popup / overlay
- **Layout**: Overlays the current PATTERN/GROUP/SONG screen. A small popup in the lower-right area shows "TEMPO" label, a close (X) button, and the tempo value (e.g., "108.00"). Bottom of popup: [CLICK] and [CLOSE] buttons.
- **Key Elements**:
  - TEMPO label
  - Tempo value display (with two decimal places, e.g., 108.00)
  - Close (X) button
  - [CLICK] button
  - [CLOSE] button
- **Interactive Elements**:
  - [VALUE] dial or [INC]/[DEC] buttons: Set the tempo
  - Hold [SHIFT] while turning VALUE to edit decimal places
  - [E5] CLICK: Toggle click/metronome sound
  - [E6] CLOSE: Close the popup
  - Tap tempo: Press [TEMPO] button at least 3 times at quarter-note intervals
- **Currently Implemented?**: No
- **Notes**: The tempo here is shared with arpeggio tempo (p.40) and rhythm pattern tempo (p.44). Modified tempo also applies to group and song playback. Tempo setting is saved in the scene.

---

### Mute Select Screen (MUTE SELECT)
- **Manual Page**: p.113
- **Accessed Via**: In the PATTERN screen, touch `<MUTE>` in the bottom toolbar
- **Screen Type**: overlay
- **Layout**: An overlay on top of the PATTERN screen. Title bar: "MUTE SELECT" with a close (X) button. Below: a 2x8 grid showing tracks 1--16 as numbered icons. Each track icon shows its muted/unmuted state through color changes. Below the grid: a waveform/pattern preview area for each track. Bottom: [ALL ON/OFF] button.
- **Key Elements**:
  - MUTE SELECT title with close (X) button
  - 16 track icons in a 2x8 grid (tracks 1--8 on top, 9--16 on bottom)
  - Color-coded mute state indicators
  - Waveform/pattern preview below track icons
  - [ALL ON/OFF] button
- **Interactive Elements**: Touch any track icon to toggle mute on/off. Touch "ALL ON/OFF" to mute/unmute all tracks in a single operation. Press [EXIT] to return to PATTERN screen.
- **Currently Implemented?**: No
- **Notes**: Mute status of each track is saved in the scene. Muted tracks remain distinguishable by their changed color even in the main PATTERN screen. Mute status is maintained when switching between variations A--H. Note: track mute/solo in the PATTERN screen is different from zone mute/solo in the MIXER screen -- they operate independently.

---

### Solo Select Screen (SOLO SELECT)
- **Manual Page**: p.114
- **Accessed Via**: In the PATTERN screen, touch `<SOLO>` in the bottom toolbar
- **Screen Type**: overlay
- **Layout**: Same overlay structure as MUTE SELECT. Title bar: "SOLO SELECT" with a close (X) button. A 2x8 grid of 16 track icons. Each track shows its solo state. The soloed track's icon changes color differently from the non-soloed tracks. Below: waveform/pattern preview for each track.
- **Key Elements**:
  - SOLO SELECT title with close (X) button
  - 16 track icons in a 2x8 grid
  - Color-coded solo state indicators
  - Waveform/pattern preview below track icons
- **Interactive Elements**: Touch a track icon to solo it (that track plays alone). Touch the soloed track again to defeat solo. Can solo multiple tracks. Press [EXIT] to return to PATTERN screen.
- **Currently Implemented?**: No
- **Notes**: Solo status of each track is saved in the scene. Soloed/non-soloed tracks are visually distinguishable in the main PATTERN screen. Solo status is maintained when switching between variations A--H. Track solo is independent from zone solo in the MIXER screen.

---

### Group Screen (GROUP)
- **Manual Page**: p.110, p.114
- **Accessed Via**: Press the [GROUP] button on the panel; or from the PATTERN screen, press [E6] GROUP
- **Screen Type**: main screen
- **Layout**: Full-width display divided into two main regions:
  - **Left side -- GROUP LIST**: A numbered list of groups (e.g., 01: Intro, 02: Verse A, 03: Verse B, 04: Verse C, 05: Chorus A, 06: Chorus B, 07: Ending, 08: INIT GRP). Each entry shows group number, name, length (in measures, e.g., 32, 16, 8), and a colored play icon. A dash (--) for length indicates no length set. The current group is highlighted by a cursor.
  - **Right side -- GROUP INFO**: Shows the selected group name at top (e.g., "02: Verse A"). Below: a 2x8 grid (tracks 1--16) showing which patterns are assigned to each track in this group, displayed as colored pattern boxes. Shows variation assignments per track.
  - **Header bar**: Back arrow, "GROUP" label, transport info (time signature, tempo, beat position, STOP indicator, SAMPLE PAD button)
  - **Bottom toolbar**: [PATTERN] (returns to pattern screen), up/down arrows, [UTILITY], [RENAME], Length value, [MAKE SONG] button
- **Key Elements**:
  - Back arrow
  - GROUP title with transport info
  - GROUP LIST (left): numbered group entries with name, length, play icon
  - GROUP INFO (right): group name, 2x8 track/pattern grid
  - Current group cursor
  - Bottom toolbar: PATTERN, up/down arrows, UTILITY, RENAME, Length indicator, MAKE SONG
- **Interactive Elements**:
  - Touch a group name in the list to select it (cursor moves, GROUP INFO updates)
  - [E2] knob to navigate group list
  - Touch play icon to play the group
  - [PLAY] button to play the current group
  - [E1] PATTERN: Returns to PATTERN screen
  - [E3] UTILITY: Opens group utility functions
  - [E4] RENAME: Opens group rename screen
  - [E5] Length: Sets group length
  - [E6] MAKE SONG: Creates a song from the groups
- **Currently Implemented?**: No
- **Notes**: The left side shows the GROUP LIST with groups listed in numerical order. During playback, a GROUP PREVIEW screen is shown. Scenes with songs show a "SONG" indicator. Groups correspond to song sections (Intro, Verse, Fill, Chorus, Ending, etc.).

---

### Group Preview Screen (GROUP PREVIEW)
- **Manual Page**: p.114
- **Accessed Via**: Automatically shown during group playback from the GROUP screen (press [PLAY] while in GROUP screen)
- **Screen Type**: overlay
- **Layout**: An overlay titled "GROUP PREVIEW" with a close (X) button. Shows a grid area similar to the PATTERN screen's PTN PREVIEW, with rows A--H and columns for tracks 1--16. Displays each track's current pattern part at a glance during playback. Center text: "Touch this window to end preview."
- **Key Elements**:
  - GROUP PREVIEW title with close (X) button
  - Pattern grid showing all tracks (1--16) and variations (A--H)
  - Current playback position indicators per track
  - "Touch this window to end preview." instruction text
- **Interactive Elements**: Touch the preview window to close it and end the preview display. Also closeable by pressing [STOP].
- **Currently Implemented?**: No
- **Notes**: Like the PTN PREVIEW screen, this shows each track's current part at a glance during group playback. Useful for monitoring which patterns are playing across all tracks.

---

### Song Screen (SONG)
- **Manual Page**: p.110, p.115
- **Accessed Via**: Press the [SONG] button on the panel
- **Screen Type**: main screen
- **Layout**: Full-width display showing a timeline of group boxes arranged in numerical order:
  - **Header bar**: Back arrow, "SONG" label, transport info (time signature, tempo, beat position with format XXX-XX-XXX, PLAY/SONG indicator, SAMPLE PAD button)
  - **Main area**: A grid of group boxes arranged in rows, each box numbered sequentially (1, 2, 3, ... up to 32 visible). Each group box shows: group number (top-left, e.g., "02"), number of loops (top-right, e.g., "x1"), group name (bottom, e.g., "Verse A"), and a simplified playback position indicator. The currently-playing group is highlighted in green. Empty group boxes are shown with dashed outlines.
  - **Bottom toolbar**: [MAKE SONG], [EDIT], checkbox for [SKIP], checkbox for [MEAS], [EXPORT] button
- **Key Elements**:
  - Back arrow
  - SONG title with transport info
  - Sequential group boxes (numbered 1--32+)
  - Each group box: group number, loop count (x1, x2, etc.), group name, simplified position indicator
  - Current group highlighted in green during playback
  - Empty group boxes (dashed outline)
  - Bottom toolbar: MAKE SONG, EDIT, SKIP checkbox, MEAS checkbox, EXPORT
- **Interactive Elements**:
  - [E1] MAKE SONG: Opens song creation screen
  - [E2] EDIT: Opens song edit screen (SONG EDIT)
  - [E4] SKIP: Toggle skip mode for specific groups
  - [E5] MEAS: Toggle measure indication display (see below)
  - [E6] EXPORT: Export song as SMF
  - Touch group boxes to select them
  - [PLAY] button: Play the song (groups play in numerical order)
  - [STOP] button: Stop playback
- **Currently Implemented?**: No
- **Notes**: Scenes with songs show a "SONG" indicator in the scene list. The song arranges groups into an ordered sequence. The currently-playing group box turns green during playback. Groups play in numerical order (1, 2, 3, ...).

---

### Song Screen -- Measure View (MEAS)
- **Manual Page**: p.115
- **Accessed Via**: In the SONG screen, select [E5] MEAS
- **Screen Type**: main screen (alternate view of SONG screen)
- **Layout**: Same structure as the standard SONG screen, but the numbers shown above each group box change from playback order numbers to measure indications (e.g., "04:01:000", "10:01:000", "18:01:000", etc.). The group boxes themselves still show group names. Measure indication helps understand the song structure in terms of time/measures rather than group sequence order.
- **Key Elements**:
  - Same as SONG screen
  - Measure indication labels above each group box (replacing sequence numbers)
  - Format: MMM-BB-TTT (measure-beat-tick)
- **Interactive Elements**: Same as SONG screen. Toggle [E5] MEAS to switch back to sequence number view.
- **Currently Implemented?**: No
- **Notes**: Viewing the timeline in terms of measures makes the song structure easier to understand. All other SONG screen functionality remains the same.

---

## Summary

| # | Screen Name | Category | Manual Page | Accessed Via | Type | Implemented? |
|---|---|---|---|---|---|---|
| 1 | PAD MODE Selection | Pads | p.104 | [PAD MODE] button | popup/overlay | No |
| 2 | Sample Pad (SAMPLE PAD) | Pads | p.104 | PAD MODE > Pad 1 | main screen | No |
| 3 | Note Pad (NOTE PAD) | Pads | p.104 | PAD MODE > Pad 2 | main screen | No |
| 4 | Note Pad Edit | Pads | p.105 | NOTE PAD > select pad > edit | sub-screen | No |
| 5 | Partial Sw/Select (PARTIAL SW/SELECT) | Pads | p.105 | PAD MODE > Pad 3 | main screen | No |
| 6 | DAW Control (CONTROL) | Pads | p.105 | PAD MODE > Pad 4 | main screen | No |
| 7 | Zone Mute (ZONE MUTE) | Pads | p.106 | PAD MODE > Pad 5 | main screen | No |
| 8 | Zone Solo (ZONE SOLO) | Pads | p.106 | PAD MODE > Pad 6 | main screen | No |
| 9 | Kbd Sw Group Select (KBD SW GRP SELECT) | Pads | p.106 | PAD MODE > Pad 7 | main screen | No |
| 10 | Kbd Sw Group Edit (KBD SW GRP EDIT) | Pads | p.106 | KBD SW GRP SELECT > EDIT | sub-screen | No |
| 11 | Rhythm Pattern (RHYTHM PATTERN) | Pads | p.107 | PAD MODE > Pad 8 | main screen | No |
| 12 | Pattern Select -- Pad Mode (PAD PATTERN) | Pads | p.107 | PAD MODE > Pad 9 | main screen | No |
| 13 | Variation Play | Pads | p.107 | PAD MODE > Pad 10 | main screen | No |
| 14 | Group Play | Pads | p.107 | PAD MODE > Pad 11 | overlay | No |
| 15 | Pattern Screen -- 8Tr View (PATTERN) | Sequencer | p.110-111 | [PATTERN] button | main screen | No |
| 16 | Pattern Screen -- 16Tr View (PATTERN) | Sequencer | p.111 | PATTERN > 16Tr View | main screen | No |
| 17 | Loop Setting (LOOP SETTING) | Sequencer | p.112 | PATTERN > [E1] LOOP SETTING | sub-screen | No |
| 18 | Tempo (TEMPO) -- Sequencer | Sequencer | p.113 | [TEMPO] button from PATTERN/GROUP/SONG | popup/overlay | No |
| 19 | Mute Select (MUTE SELECT) | Sequencer | p.113 | PATTERN > MUTE | overlay | No |
| 20 | Solo Select (SOLO SELECT) | Sequencer | p.114 | PATTERN > SOLO | overlay | No |
| 21 | Group Screen (GROUP) | Sequencer | p.110, 114 | [GROUP] button | main screen | No |
| 22 | Group Preview (GROUP PREVIEW) | Sequencer | p.114 | GROUP > PLAY (during playback) | overlay | No |
| 23 | Song Screen (SONG) | Sequencer | p.110, 115 | [SONG] button | main screen | No |
| 24 | Song Screen -- Measure View (MEAS) | Sequencer | p.115 | SONG > [E5] MEAS | main screen | No |

**Total screens cataloged from pages 103--115: 24**

---

## Screen Transition Map

```
[PAD MODE] button
  |
  v
PAD MODE Selection (popup)
  |-- Pad 1 --> Sample Pad Screen
  |-- Pad 2 --> Note Pad Screen --> Note Pad Edit (inline)
  |-- Pad 3 --> Partial Sw/Select Screen
  |-- Pad 4 --> DAW Control Screen
  |-- Pad 5 --> Zone Mute Screen
  |-- Pad 6 --> Zone Solo Screen
  |-- Pad 7 --> Kbd Sw Group Select --> Kbd Sw Group Edit
  |-- Pad 8 --> Rhythm Pattern Screen
  |-- Pad 9 --> Pattern Select (PAD PATTERN)
  |-- Pad 10 -> Variation Play (uses PATTERN screen)
  |-- Pad 11 -> Group Play (pad mode overlay)
  |-- Pad 16 -> System (uses system pad mode settings)

[PATTERN] button
  |
  v
Pattern Screen (8Tr View / 16Tr View)
  |-- [E1] --> Loop Setting Screen --> [EXIT] back to Pattern
  |-- [E5] --> Grouping Screen (covered in later pages)
  |-- [E6] --> Group Screen
  |-- <MUTE> --> Mute Select (overlay) --> [EXIT] back to Pattern
  |-- <SOLO> --> Solo Select (overlay) --> [EXIT] back to Pattern
  |-- [TEMPO] --> Tempo popup (overlay) --> [CLOSE] back to Pattern

[GROUP] button
  |
  v
Group Screen
  |-- [E1] PATTERN --> Pattern Screen
  |-- [PLAY] --> Group Preview (overlay, during playback)
  |-- [E6] MAKE SONG --> Song creation
  |-- [E4] RENAME --> Group rename

[SONG] button
  |
  v
Song Screen (sequence view / measure view toggle via [E5] MEAS)
  |-- [E1] MAKE SONG --> Song creation
  |-- [E2] EDIT --> Song Edit
  |-- [E6] EXPORT --> SMF export
```

---
---

# Fantom 08 Screen Catalog: Sequencer Part 2 (Pages 116-140)

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, pages 116-140
> **Sections Covered**: Song Production Workflow, Recording a Pattern (Realtime/Step/TR-REC), Editing a Pattern (Piano Roll, Microscope, Pattern Utility, Modify functions), How to Create a Group, How to Create a Song, SMF Player
> **Currently Implemented Screen Types**: home, zone-view, key-range, write, menu, tone-select, effect

---

## Song Production Workflow Overview (p.116)

This page is a workflow diagram, not a distinct screen. It maps the production flow:
Preparing for Recording (p.28) -> Recording a Pattern (p.117) -> Creating a Group (p.132) -> Creating a Song (p.135) -> Adjusting Volume and Pan (p.72) -> Saving a Scene (p.56). Side paths include Import as SMF (p.130) and Export as SMF (p.130/134/138). Three recording methods: Realtime REC (p.117), Step Rec (p.119), TR-REC (p.121). Editing the pattern at p.123.

---

## Recording a Pattern Screens (pp.117-122)

### REC STANDBY Screen (Realtime REC)
- **Manual Page**: p.117
- **Accessed Via**: Press the [REC] button from the PATTERN screen
- **Screen Type**: main screen
- **Layout**: Top area shows TRACK/PATTERN selector on the left and recording parameters on the right. Left side has REC DESTINATION section with TRACK selector (1-16) and NEW/MIX toggle. Below that are STEP REC and TR-REC tab buttons. Right side has recording parameters: Meas/Beat/Tick position, Time Signature, Count In mode, Input Quantize, REC EVENT selector, LOOP/REC SW toggles, BPM SYNC toggle. Bottom row has LENGTH, TEMPO, CLICK, and START buttons.
- **Key Elements**:
  - TRACK/PATTERN touchable area (opens pattern grid selector)
  - REC DESTINATION section (Track 1-16, Pattern A-H)
  - Recording parameter area with: Count In (NONE/1 MEAS/2 MEAS/WAIT NOTE), Time Signature (with Beats [E4] 1-32, Note Value [E5] 2/4/8/16), Input Quantize (OFF/GRID/SHUFFLE), REC EVENT (NOTE/CONTROL CHANGE/PITCH BEND/CHANNEL AFTER/POLY AFTER), Length [E3] (1-64), Tempo [E4], Click [E5] ON/OFF
  - STEP REC / TR-REC tab buttons to switch recording mode
  - LOOP REC SW, BPM SYNC toggles
  - START button
- **Interactive Elements**:
  - Touch parameters directly on screen or use [VALUE] dial
  - E3: Length knob (1-64, ver 1.01+)
  - E4: Tempo knob (5-300 BPM)
  - E5: Resolution knob (GRID: 1/32 to 1/4; SHUFFLE: 1/16 to 1/8)
  - E6: Strength knob (0-100%) for quantize / SET button
  - <TRACK/PATTERN> touch area to select track and pattern
  - STEP REC / TR-REC tabs to switch recording method
  - START to begin recording
- **Currently Implemented?**: No
- **Notes**: The REC STANDBY screen is the common entry point for all three recording methods. The same screen layout appears regardless of which method you ultimately select (Realtime, Step, TR-REC). Touching <TRACK/PATTERN> navigates to the PATTERN screen where you can select track (1-16) and pattern (A-H) using cursor buttons or by touching a vacant area. Already-recorded patterns shown as solid blue blocks.

### TRACK/PATTERN Selection View (within REC STANDBY)
- **Manual Page**: p.118
- **Accessed Via**: Touch <TRACK/PATTERN> on the REC STANDBY screen
- **Screen Type**: sub-screen (navigates to PATTERN screen for selection)
- **Layout**: Full PATTERN grid screen showing Track rows (1-16 or grouped as 1-8/9-16) across the top, Pattern columns (A-H) down the side. Recorded patterns shown as solid colored blocks. Selected pattern enclosed in red frame. Empty slots shown as vacant.
- **Key Elements**:
  - Track/Pattern grid (16 tracks x 8 patterns)
  - Red frame around selected pattern
  - Solid blue blocks for recorded patterns
  - Navigation via cursor [up/down/left/right] or direct touch
- **Interactive Elements**: Touch any pattern cell; cursor buttons to move selection
- **Currently Implemented?**: No
- **Notes**: Since zones and tracks correspond with each other, using the ZONE SELECT buttons to switch the current zone also changes the recording-destination track in tandem. Example: Zone 2 (Bass) = Track 2 -> Zone 10 (Drum) = Track 10.

### REALTIME RECORDING Screen
- **Manual Page**: p.118
- **Accessed Via**: Press [PLAY] button from REC STANDBY screen (with Realtime REC selected); or touch <START>
- **Screen Type**: main screen
- **Layout**: Top shows "REALTIME RECORDING" label with close (X) button. Left side has REC DESTINATION with Meas/Beat/Tick position display (e.g., 02-02-334). Center shows "NOW RECORDING" indicator. Right side shows measure indication (X mark). Bottom row shows Input Quantize status (OFF), LOOP/REC SW status, Tempo display, STOP button, REC END button, CLOSE button. ERASE button at bottom-left.
- **Key Elements**:
  - "REALTIME RECORDING" header
  - Recorded data exists indicator (left)
  - Playback position (Meas-Beat-Tick format, e.g., 02-02-334)
  - "NOW RECORDING" label
  - Measure indication (X mark, right side)
  - Input Quantize ON/OFF status
  - LOOP / REC SW status indicators
  - ERASE / STOP / REC END / CLOSE buttons
- **Interactive Elements**:
  - E1: ERASE (accesses realtime erase screen)
  - E2: Length (display only during recording -- cannot change pattern length while recording)
  - E3: Tempo (can change during recording; tempo data is not recorded)
  - E4: STOP (stops recording and returns to PATTERN screen)
  - E5: REC END (enters playback mode, returns to REC STANDBY screen)
  - E6: CLOSE (returns to previous screen while remaining in recording mode)
  - <Input Quantize> toggle on/off during recording
  - <LOOP REC SW> toggle on/off during recording
- **Currently Implemented?**: No
- **Notes**: Knob and controller operations are also recorded alongside keyboard performance. When LOOP REC SW is ON, recording continues looping past the pattern length. Press [STOP] to stop. Transitions: E4 STOP -> PATTERN screen; E5 REC END -> REC STANDBY screen; E6 CLOSE -> previous screen (still recording).

### REALTIME ERASE Screen
- **Manual Page**: p.119
- **Accessed Via**: Select [E1] ERASE from the REALTIME RECORDING screen
- **Screen Type**: sub-screen / overlay
- **Layout**: Shows playback position indicator (Meas-Beat-Tick), "REALTIME ERASE" label, Lowest Note / Highest Note fields (initially "---( ---)"), a keyboard graphic at bottom showing lower and upper limit key positions. ERASE ALL button at bottom-left, CLOSE button at bottom-right.
- **Key Elements**:
  - Playback position (Meas-Beat-Tick)
  - "REALTIME ERASE" label
  - Lowest Note / Highest Note display (e.g., "---( ---)")
  - Lower limit key / Upper limit key indicators on keyboard graphic
  - Keyboard graphic spanning full width
  - ERASE ALL button
  - CLOSE button
- **Interactive Elements**:
  - E1 knob: <ERASE ALL> -- press and hold to erase all data while held
  - Press specific keyboard keys to erase notes of those keys while held down
  - Press top and bottom key of a range simultaneously to erase a specific range of keys while held
  - E6: CLOSE (return to REALTIME RECORDING screen)
- **Currently Implemented?**: No
- **Notes**: Particularly useful during loop recording (LOOP REC SW = ON) to selectively remove notes in real time while continuing to record new ones. Data is erased only while you hold down the button/key.

### REC STANDBY Screen (Step REC variant)
- **Manual Page**: p.119
- **Accessed Via**: Press [REC] button, then the REC STANDBY screen appears (same screen with STEP REC tab available)
- **Screen Type**: main screen
- **Layout**: Identical layout to the Realtime REC STANDBY screen. Same REC DESTINATION, TRACK/PATTERN, and recording parameter areas. The recording mode tabs (STEP REC / TR-REC) are at the bottom-left of the REC DESTINATION area. Additional parameters match realtime: NEW/MIX, TRACK (1-16), PATTERN (A-H), Time Signature, Count In, Input Quantize, REC EVENT, Length, Tempo, Click.
- **Key Elements**: Same as Realtime REC STANDBY with mode tabs for switching
- **Interactive Elements**: Same knob assignments as Realtime REC STANDBY; select STEP REC tab to switch mode, then press [E1] to enter Step Recording
- **Currently Implemented?**: No
- **Notes**: After making TRACK/PATTERN settings, select [E1] STEP REC to enter the Step Recording screen.

### STEP RECORDING Screen
- **Manual Page**: p.120
- **Accessed Via**: From REC STANDBY, select [E1] STEP REC
- **Screen Type**: main screen
- **Layout**: Piano roll-style screen. Top header shows "STEP RECORDING" label with track-pattern info (e.g., "2 - A"), time signature (4/4), tempo, position. Left side has a vertical keyboard (pitch axis) for reference. Center is the note grid area with previously entered notes displayed as colored blocks, input location marker (vertical line at current entry position), and the note currently being entered. Bottom section has two rows: (1) "Last Input Data" info bar showing input location (Meas-Beat-Tick), note number (e.g., Eb3(51)), velocity (e.g., 99), duration (e.g., 0.084); (2) Recording parameter buttons: TIE and UNTIE on the far left, then REST, STEP BACK, Note Type value, Gate Time percentage, Velocity value, and input location display on far right. The note being entered is shown both in the grid and highlighted on the keyboard.
- **Key Elements**:
  - "STEP RECORDING" header with track/pattern/time info
  - Piano roll grid (vertical = pitch, horizontal = time)
  - Previously entered notes (colored horizontal blocks)
  - Note being entered (highlighted block)
  - Input location marker (vertical cursor line)
  - Last Input Data bar: input location, note number, velocity, duration
  - Recording parameters at bottom: Note Type, Gate Time %, Velocity
  - Input location display at far right
  - TIE / UNTIE buttons (left side)
  - REST / STEP BACK buttons
- **Interactive Elements**:
  - E1: REST (enter a rest at the current step)
  - E2: STEP BACK (delete the last-entered step data, move input position back)
  - E3: Note Type knob (step time length: 1/64 to 2/1 including whole note)
  - E4: Gate Time knob (1-100%, proportion of note type; default ~80%)
  - E5: Velocity knob (REAL = use actual keystroke velocity, or 1-127 fixed)
  - E6: Step (changes the input location manually)
  - <TIE> button: inputs a tie to extend the previous note
  - <UNTIE> button: removes the last-input tie
  - Play keyboard to enter notes (auto-advances by step time length)
  - Can play chords (multiple simultaneous notes recorded at same step)
  - Touch-drag display area left/right to scroll through measures
  - Touch-drag display area up/down or scroll keyboard area to scroll pitch
  - Use piano roll scrollbar at top for horizontal measure navigation
  - [EXIT] button to stop recording
- **Currently Implemented?**: No
- **Notes**: Each note is recorded at the current input position, then the position auto-advances by the step time. If you step-record beyond the pattern length, the Length parameter auto-adjusts. Gate time recorded = original step time x Gate Time %. TPQN (ticks per quarter note) resolution = 480. A quarter note has a gate time of 480 ticks. Note/step time relationship table provided in manual (e.g., 1/64 = 30 ticks, quarter = 120, half = 240, whole = 480, 2/1 = 960, etc.).

### TR-REC Screen (Tone / Non-Drum Kit)
- **Manual Page**: p.121-122
- **Accessed Via**: From REC STANDBY, select [E2] TR-REC; or press the [TR-REC] button directly
- **Screen Type**: main screen
- **Layout**: Piano roll-style view with step grid. Top header shows "TR-REC" label, track/pattern info (e.g., "5 - A"), time signature (4/4), tempo, position, SAMPLE PAD indicator. Left side shows a vertical keyboard (pitch axis) with a "Pitch to be entered" indicator highlighting the current note. Center is the step grid with columns representing each step and rows representing pitches. Previously entered notes shown as colored blocks. A yellow frame highlights the instrument/pitch currently being entered. Bottom shows recording parameters: Scale (step resolution), Length, Gate Time, Velocity. Back arrow at top-left.
- **Key Elements**:
  - "TR-REC" label in header
  - Piano roll grid with step columns
  - Previously entered note markers (colored blocks)
  - Pitch to be entered indicator (yellow frame on keyboard, right side)
  - Velocity indicator
  - Recording parameters: Scale (1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/12T, 1/24T, 1/48T, 1/96T), Length (1-64), Gate Time (1-100%), Velocity (REAL, 1-127)
  - Back arrow button (top-left)
- **Interactive Elements**:
  - TONE CATEGORY buttons [1]-[16] function as step buttons (lit = note will sound at that step, unlit = no note)
  - Play keyboard to specify the pitch of the note to enter
  - [SHIFT] + tone category button [1]-[16] to change input position (jump to different measure)
  - Touch/drag display area to scroll through the grid
  - Scrollbar at top for horizontal measure navigation
  - Keyboard area at left for vertical pitch scrolling
  - Can press [PLAY] and enter notes while the pattern plays back
  - Press lit tone category button to remove a note; press unlit to add one
- **Currently Implemented?**: No
- **Notes**: For tones other than drum kits, use the keyboard to specify the pitch to enter. When you specify a pitch, the yellow frame in the display moves to that pitch row. You can enter notes during playback by pressing [PLAY] first. The [TR-REC] button lights up when active, and TONE CATEGORY buttons [1]-[16] change function to become step buttons. Cannot enter TR-REC mode during realtime or step recording.

### TR-REC Screen (Drum Kit Tone)
- **Manual Page**: p.121-122
- **Accessed Via**: Same as TR-REC Screen but when the selected zone uses a Drum Kit tone
- **Screen Type**: main screen
- **Layout**: Similar to the non-drum TR-REC screen but the left side shows instrument names (e.g., "Clse.Tone 1", "Clse.Cymbal 2", "Opn.Cymbal 2", "Clse.HiHat", "Ride Cymbal 1", "Ride Cup 1", "Rim Shot 1", "Snare Drum 1", "Rim.Snare 1", "Clse.HiHat 1", "Opn.HiHat 1", "Ride.Brsh 1", "Aux.Drum Bass") instead of a piano keyboard pitch axis. Each instrument row has step columns showing entered notes as colored blocks. Previously entered notes shown in different colors. Bottom has the same recording parameters: Scale, Length, Gate Time, Velocity.
- **Key Elements**:
  - Instrument list on left side (drum kit instrument names, scrollable)
  - Step grid per instrument row (16 steps visible per row)
  - Previously entered note blocks (colored)
  - "Instrument to be entered" indicator (yellow frame on instrument name)
  - Recording parameters: Scale, Length, Gate Time, Velocity
- **Interactive Elements**:
  - Play keyboard to select which instrument (drum sound) is active -- pressing a key highlights that instrument row
  - TONE CATEGORY buttons [1]-[16] toggle steps on/off for the currently selected instrument
  - [SHIFT] + tone category button to jump to a different measure position (1st/2nd/3rd/4th measure shown in display)
  - Touch/drag display area for scrolling (left/right for measures, up/down for instruments)
  - Scrollbar at top for measure navigation
  - Can press [PLAY] to enter notes during playback
  - Press a lit button to remove note; press unlit to add note
- **Currently Implemented?**: No
- **Notes**: When using a Drum Kit tone, the TR-REC display automatically switches to show instrument names instead of a piano keyboard. Playing a key on the keyboard changes which instrument is active for step entry. The display can show up to 4 measures at once (1st, 2nd, 3rd, 4th measure). A flashing cursor shows the current playback position during playback. The original manual figure shows a classic drum machine style grid: Step Numbers 01-16 across the top, Closed Hi-Hat / Snare Drum / Bass Drum rows with button-lit/button-unlit indicators.

---

## Editing a Pattern Screens (pp.123-131)

### EDIT SELECT Popup
- **Manual Page**: p.123-124
- **Accessed Via**: On the PATTERN screen, select the pattern to edit and touch [E3] EDIT
- **Screen Type**: popup / overlay
- **Layout**: A popup window in the center-bottom of the screen, overlaying the PATTERN grid. Lists available edit methods vertically. Options include: EDIT SETTING, PATTERN EDIT (expandable), PIANO ROLL, MICROSCOPE. A close (X) button in upper right of the popup. Background shows the PATTERN grid with the selected pattern highlighted.
- **Key Elements**:
  - EDIT SETTING option
  - PATTERN EDIT option (appears to be an alias/sub-group)
  - PIANO ROLL option
  - MICROSCOPE option
  - Close (X) button
- **Interactive Elements**: Touch any option to open that editor; X to close and return to PATTERN screen
- **Currently Implemented?**: No
- **Notes**: If the "DON'T SHOW AGAIN" checkbox is selected, this popup is skipped and goes directly to the last-used edit method. This preference is controlled by Sequencer Edit Mode in system settings (p.169). The setting is a system parameter -- save system settings to preserve it.

### PIANO ROLL Screen (Note Editing Mode)
- **Manual Page**: p.123
- **Accessed Via**: From EDIT SELECT popup, choose PIANO ROLL; or if EDIT SELECT is bypassed, directly from [E3] EDIT
- **Screen Type**: main screen
- **Layout**: Full-screen piano roll editor. Top header bar shows: back arrow, "PIANO ROLL" label, track-pattern info (e.g., "1 - A"), time signature (4/4), tempo (J=120.00), position (001-01-000), STOP indicator, SAMPLE PAD button. Left side has a vertical keyboard for pitch reference (pitch names shown: C8, B4, etc.). Center is the main note editing grid with horizontal note bars (colored by note/velocity). A scrollbar at the very top of the grid for horizontal navigation. Bottom section has two parts: (1) VELOCITY lane showing velocity bar graph for each note; (2) Toolbar row with mode buttons: DRAW, MOVE, DURATION, REDO, ERASE, COPY; (3) Parameter bar below toolbar showing: Current position (e.g., 00-00-120), Velocity value (e.g., 64), Zoom H % (e.g., 100%), Zoom V % (e.g., 100%), Length (e.g., 1), Grid value (e.g., 1/4). An Automation toggle icon (wave/squiggle icon) sits at the top-left of the grid area, above the keyboard.
- **Key Elements**:
  - "PIANO ROLL" header with full transport info
  - Piano roll grid with colored note bars
  - Vertical keyboard (left side, scrollable)
  - Horizontal scrollbar (top of grid)
  - VELOCITY lane at bottom of grid (vertical bar per note)
  - Toolbar: DRAW, MOVE, DURATION, REDO, ERASE, COPY mode buttons (toggle-style)
  - Parameter bar: Duration, Velocity, Zoom H, Zoom V, Length, Grid
  - Automation toggle icon (top-left of grid)
  - Back arrow (top-left corner)
- **Interactive Elements**:
  - E1: Duration knob (sets duration of newly entered notes; <COPY> pressed afterward overwrites with copied duration)
  - E2: Velocity knob (sets velocity of newly entered notes; <COPY> overwrites)
  - E3: Zoom H knob (horizontal zoom, affects grid spacing)
  - E4: Zoom V knob (vertical zoom)
  - E5: Length knob (increases pattern measures; hold [SHIFT]+E5 to increase length while copying last measure data)
  - E6: Grid knob (changes grid granularity, e.g., 1/4 = 16th note equivalent display)
  - Touch <DRAW> to enter draw mode -- touch grid to place notes
  - Touch <MOVE> to enter move mode -- touch and drag notes to reposition
  - Touch <DURATION> to enter duration mode -- touch and drag note edges to resize
  - Touch <REDO> to redo last undone operation
  - Touch <ERASE> to enter erase mode -- touch notes to delete them
  - Touch <COPY> to copy selected note's duration and velocity settings
  - Touch a note to select it (turns red when selected)
  - [SHIFT] + touch another note to add to selection (multi-select)
  - [SHIFT] + drag across grid to select multiple notes in a rectangular area
  - [SHIFT] + touch a selected note to deselect it
  - Touch <VELOCITY> area to open velocity popup -- stroke sideways to adjust
  - Drag display area to scroll (left/right for time, up/down for pitch)
  - Use scrollbar at top to navigate measures
  - Scroll keyboard area at left to navigate pitch
  - Press a keyboard key to jump the display to that pitch area
  - When using E1-E6 knobs in the piano roll, they map directly to: [E1]=DRAW, [E2]=MOVE, [E3]=DURATION, [E4]=REDO, [E5]=ERASE, [E6]=COPY operations (pressing knob activates that mode)
  - Automation toggle: touch to switch to Automation view
- **Currently Implemented?**: No
- **Notes**: The piano roll supports both touch and knob-based note input/editing. Dragging a selected note while pressing E6 knob copies it to the drag destination. Multi-select allows batch operations. The <COPY> function copies the duration and velocity of the selected note for use when entering new notes. The grid can be zoomed independently in horizontal and vertical directions.

### PIANO ROLL Screen (Automation View)
- **Manual Page**: p.124-125
- **Accessed Via**: On the PIANO ROLL screen, touch the Automation toggle icon (wave/squiggle icon at top-left of grid area)
- **Screen Type**: main screen (alternate view mode within Piano Roll)
- **Layout**: Same overall Piano Roll structure but the center grid area now displays automation data (curves/points) instead of note bars. The note bars remain faintly visible in the background for reference. Bottom toolbar changes to show: a pencil/cursor/ruler tool selector area, then DRAW toggle, ALL ERASE, UNDO, ZOOM ADJUST buttons. Below that: TARGET selector showing current CC target (e.g., "MODULATION (CC01)") with a dropdown, MODE toggle (POINT/LINE). Parameter bar shows: Zoom H, Zoom V, Length, Grid. Automation data rendered as connected points with lines between them.
- **Key Elements**:
  - Automation curve/point display (connected dots with lines)
  - Note bars shown faintly in background for context
  - Tool selector icons: Cursor tool, Pencil tool, Ruler tool
  - Toolbar: DRAW toggle, ALL ERASE, UNDO, ZOOM ADJUST
  - TARGET selector dropdown with CC types
  - MODE toggle: POINT / LINE
  - Parameter bar: Zoom H, Zoom V, Length, Grid
- **Interactive Elements**:
  - Cursor tool (pointer icon): Tap a point to select and show its position/value; drag a point up/down to change its value; drag left/right to move its position
  - Pencil tool (pencil icon): Tap to create a single point; drag to draw freehand automation curve (tracing overwrites any existing data in that area)
  - Ruler tool (ruler/line icon): Tap to create a single point; drag to define start and end points of a line (tracing on an existing area erases data within the start/end range, then draws new data)
  - <DRAW> toggle: turns performance data input on/off
  - <ERASE>: erases the selected data; while [SHIFT] is pressed, ERASE becomes ALL ERASE (erases all events of the current target type)
  - <UNDO>/<REDO>: undo/redo last automation edit
  - <ZOOM ADJUST>: stretches the pattern display to fit across the entire screen width
  - TARGET selector (touchable dropdown): MODULATION (CC01), VOLUME (CC07), PAN (CC10), EXPRESSION (CC11), GENERAL-1 (CC16), GENERAL-2 (CC17), GENERAL-3 (CC18), GENERAL-4 (CC19), HOLD (CC64), RESONANCE (CC71), CUTOFF (CC74), CHANNEL AFTERTOUCH, PITCH BEND
  - MODE toggle: POINT (data changes in discrete steps during playback), LINE (data changes smoothly/interpolated during playback)
  - [INC] [DEC] [UP] [DOWN] [VALUE]: change the value of the selected automation event
  - [left] [right] cursor buttons: change the position of the selected event
  - Hold [SHIFT] while changing position to move event outside the grid snap
- **Currently Implemented?**: No
- **Notes**: POINT mode creates staircase-style automation; LINE mode creates smooth ramps. TARGET determines which CC parameter or performance data type is being edited. All automation data is stored per-pattern. The automation view and note view share the same pattern data -- switching between them does not lose any data.

### Microscope Screen (Event List Editor)
- **Manual Page**: p.126
- **Accessed Via**: From EDIT SELECT popup, choose MICROSCOPE
- **Screen Type**: main screen
- **Layout**: Top header shows "MICROSCOPE" label, save icon, time signature (4/4), tempo (J=104.00), position (001-01-000), STOP indicator, SAMPLE PAD button. Below header: TRACK/PTN/NAME info bar (e.g., "3 - B -"). Right side annotation: "Selected performance data" indicator, "Note Message" label. Center is a scrollable event list showing all recorded performance data entries in a table format. Each row shows: position (Meas-Beat-Tick, e.g., "01-02-000"), channel/type info (e.g., "1:Modulation"), parameter values (e.g., "1", "64"), and additional data. The "Performance data list" area fills most of the screen. Bottom toolbar: CREATE, ERASE, MOVE, COPY, PASTE, VIEW buttons. Below toolbar: up/down scroll arrows, left/right parameter navigation arrows, and "---" placeholder.
- **Key Elements**:
  - "MICROSCOPE" header with transport info
  - TRACK / PTN / NAME info
  - Scrollable event list (table format)
  - Each event entry: position (Meas-Beat-Tick), note/message type (e.g., "1:Note", "1:Modulation"), values (velocity, duration, note name)
  - Selected event highlighted row
  - "Note Message" / "Selected performance data" labels
  - Bottom toolbar: CREATE, ERASE, MOVE, COPY, PASTE, VIEW
  - Scroll/navigation arrows
- **Interactive Elements**:
  - E4 / [up][down]: select (scroll through) performance data entries
  - E5 / [left][right]: select a parameter column within the selected entry
  - E6 / [INC][DEC][VALUE] dial: change the value of the selected parameter
  - [ENTER] button: transmit the selected performance data (if it is a note, you will hear the corresponding sound)
  - <CREATE>: input new performance data at the current cursor position (opens input window)
  - <ERASE>: delete the selected entry
  - <MOVE>: move the selected entry to a new position (specify destination in the displayed window)
  - <COPY>: copy the selected entry to clipboard
  - <PASTE>: paste the clipboard entry at the specified destination position
  - <VIEW>: filter which performance data types are displayed (e.g., show only notes, only CC, etc.)
- **Currently Implemented?**: No
- **Notes**: This is the event list editor -- the most precise, data-level view of all recorded MIDI events in a pattern. Each individual event (note, CC, pitch bend, aftertouch, etc.) can be viewed, created, edited, moved, copied, or deleted. The VIEW filter helps focus on specific event types. Transmitting via [ENTER] allows auditioning notes without leaving the editor.

### PTN UTILITY Screen (Pattern Utility)
- **Manual Page**: p.126-127
- **Accessed Via**: On the PATTERN screen, select [E2] PTN UTILITY
- **Screen Type**: main screen
- **Layout**: Top header shows "PATTERN UTILITY" with save icon, time signature, tempo, position, STOP indicator, ZONE SOLO button. Below is a tab toolbar row: EDIT, MODIFY, COPY, PASTE, DELETE. The center area shows the 16-track pattern grid (same visual as the PATTERN screen's 16-track view) with Track columns (1-16) and Pattern rows (A-H). Patterns displayed as colored blocks with status icons (play/record/stop indicators). Selected pattern highlighted with green border. Bottom function row shows: UNDO, QUANTIZE, MIXER, RENAME, IMPORT, EXPORT buttons.
- **Key Elements**:
  - "PATTERN UTILITY" header
  - Tab toolbar: EDIT, MODIFY, COPY, PASTE, DELETE
  - 16-track pattern grid (colored blocks with icons)
  - Pattern selection with green border
  - UNDO, QUANTIZE, MIXER, RENAME, IMPORT, EXPORT function buttons at bottom
  - ZONE SOLO button in header
- **Interactive Elements**:
  - Touch <EDIT> tab: edits the selected pattern (opens pattern editor)
  - Touch <MODIFY> tab: applies batch modifications (opens MODIFY MENU)
  - Touch <COPY> tab: copies the selected pattern to clipboard
  - Touch <PASTE> tab: pastes clipboard pattern to the selected location
  - Touch <DELETE> tab: deletes the selected pattern (opens DELETE MENU)
  - E1: UNDO/REDO (cancels/redoes last edit)
  - E2: QUANTIZE (opens Quantize popup for the selected pattern)
  - E3: MIXER (opens mixer screen)
  - E4: RENAME (opens RENAME screen for the pattern)
  - E5: IMPORT (opens SMF IMPORT screen)
  - E6: EXPORT (opens SEQ EXPORT screen)
  - Select pattern by cursor [up/down/left/right] or by directly touching a pattern box
  - [EXIT] button to return to PATTERN screen
- **Currently Implemented?**: No
- **Notes**: Only the 16-track view is available in PTN UTILITY. Content edited via pattern utility functions is saved in the scene. The COPY function copies the pattern contents; PASTE writes them to the target location (overwrites existing data). PASTE icon is grayed out if no pattern has been copied.

### DELETE MENU Popup (Pattern Delete)
- **Manual Page**: p.127
- **Accessed Via**: On PTN UTILITY screen, select the pattern and touch <DELETE> tab
- **Screen Type**: popup
- **Layout**: Small dark popup menu centered on screen. Two options listed vertically: "DELETE" (red text) and "DELETE ALL" (red text). Simple dark-themed popup with minimal chrome.
- **Key Elements**:
  - DELETE option: deletes only the currently selected pattern
  - DELETE ALL option: deletes patterns from all tracks in the entire scene
- **Interactive Elements**:
  - Touch DELETE or DELETE ALL to select the operation
  - E5: OK to confirm the deletion
  - E6: CANCEL to abort and return to PTN UTILITY
- **Currently Implemented?**: No
- **Notes**: DELETE ALL removes patterns from all tracks and undo is NOT available for DELETE ALL. A deleted pattern cannot be recovered. A confirmation message appears after touching the function.

### UNDO/REDO Indicator (Pattern Utility)
- **Manual Page**: p.127
- **Accessed Via**: On PTN UTILITY screen, press [E1] (UNDO indication) or press [E1] again (REDO indication)
- **Screen Type**: indicator state (not a distinct screen)
- **Layout**: The [E1] button label toggles between "UNDO" and "REDO" text. When UNDO is available, pressing E1 cancels the previous operation. When REDO is available (after an undo), pressing E1 re-applies it.
- **Key Elements**:
  - UNDO text (when undo is available)
  - REDO text (when redo is available)
  - Grayed-out text (when neither is available)
- **Interactive Elements**: Press [E1] to toggle between undo and redo states
- **Currently Implemented?**: No
- **Notes**: Undo is not available for DELETE ALL operations. This is not a separate screen but a state indicator on the PTN UTILITY bottom toolbar.

### RENAME Screen (Pattern Rename)
- **Manual Page**: p.127
- **Accessed Via**: On PTN UTILITY screen, select the pattern and press [E4] RENAME
- **Screen Type**: popup / overlay
- **Layout**: Standard RENAME screen (same character-entry interface used system-wide, described on p.16). Text input field with the current pattern name, character selection grid, cursor controls.
- **Key Elements**:
  - Text input field showing current pattern name
  - Character selection area (alphanumeric + symbols)
  - Cursor position indicator
- **Interactive Elements**:
  - Character input via touch or dial
  - E5: CANCEL (discard changes)
  - E6: OK (confirm new name)
- **Currently Implemented?**: No (the general RENAME pattern exists at p.16 but is not implemented as a dedicated display component)
- **Notes**: Same RENAME interface used across all rename operations in the Fantom (scenes, groups, tones, patterns, etc.).

### MODIFY MENU Popup
- **Manual Page**: p.128
- **Accessed Via**: On PTN UTILITY screen, select the pattern and touch <MODIFY> tab
- **Screen Type**: popup / overlay
- **Layout**: Dark popup menu listing six modification functions vertically: QUANTIZE, ERASE, TRANSPOSE, CHANGE VELOCITY, CHANGE DURATION, SHIFT CLOCK. Each function is a touchable row with text label.
- **Key Elements**:
  - QUANTIZE: align timing of notes in a pattern
  - ERASE: erase specific types of performance data
  - TRANSPOSE: shift note pitch by semitones
  - CHANGE VELOCITY: adjust velocity values by offset
  - CHANGE DURATION: change note durations by offset
  - SHIFT CLOCK: slide timing of data forward/backward in ticks
- **Interactive Elements**: Touch any function row to open its dedicated parameter screen
- **Currently Implemented?**: No
- **Notes**: Each function opens a dedicated parameter screen (overlay) with TARGET (LOOP/PATTERN), type-specific parameters, range parameters, and EXECUTE/CANCEL buttons. All modifications are destructive (applied to pattern data) but can be undone via UNDO.

### QUANTIZE Screen (Modify > Quantize)
- **Manual Page**: p.128
- **Accessed Via**: From MODIFY MENU popup, touch QUANTIZE
- **Screen Type**: sub-screen / overlay
- **Layout**: Horizontal parameter panel overlaying the pattern grid. Title "QUANTIZE" with close (X) button. Left side shows TRACK/PTN/NAME and INIT PTN indicator. Parameters arranged horizontally: Resolution (with E1 knob label), Quantize Type dropdown (GRID/SHUFFLE), Strength or Rate (E2 knob label), RANGE MIN (E3 knob), RANGE MAX (E4 knob). Right side has CANCEL and EXECUTE buttons. TARGET selector (LOOP/PATTERN) shown at top.
- **Key Elements**:
  - TARGET: LOOP (applies to loop region from LOOP SETTING) or PATTERN (applies to entire selected pattern)
  - Quantize Type: GRID or SHUFFLE
  - Resolution [E1]: GRID mode: 1/32 to 1/4; SHUFFLE mode: 1/16 to 1/8
  - Strength [E2] (grid mode): 0-100% (100% = snap precisely to grid; 0% = no correction)
  - Rate [E2] (shuffle mode): 0-100% (50% = equal spacing like dotted notes; higher = more bounce)
  - RANGE MIN [E3]: 0 (C-1) to 127 (G9) -- lower limit of note range to quantize
  - RANGE MAX [E4]: 0 (C-1) to 127 (G9) -- upper limit of note range to quantize
  - CANCEL / EXECUTE buttons
- **Interactive Elements**:
  - E1: Resolution knob
  - E2: Strength/Rate knob (depends on GRID vs SHUFFLE selection)
  - E3: Range Min knob
  - E4: Range Max knob
  - E5: CANCEL
  - E6: EXECUTE (applies quantize; confirmation message appears, then E5 OK / E6 CANCEL)
- **Currently Implemented?**: No
- **Notes**: Quantize only corrects note-on and note-off timing; does not correct pitch bend, modulation, or other performance data timing. If performance data is significantly shifted away from the notes it was originally associated with, results may be unexpected. For best results with shuffle quantize on shifted data: apply grid quantize first, then apply shuffle quantize. After EXECUTE, a confirmation dialog appears.

### ERASE Screen (Modify > Erase)
- **Manual Page**: p.129
- **Accessed Via**: From MODIFY MENU popup, touch ERASE
- **Screen Type**: sub-screen / overlay
- **Layout**: Similar horizontal parameter panel to Quantize. Shows TARGET (LOOP/PATTERN), Event type selector with options (All, Note, Control Change, Pitch Bend, Poly Aftertouch, Channel Aftertouch), RANGE MIN [E3], RANGE MAX [E4], CANCEL, EXECUTE.
- **Key Elements**:
  - TARGET: LOOP or PATTERN
  - Event type filter: All (all performance data), Note (note messages), Control Change (CC messages), Pitch Bend, Poly Aftertouch (polyphonic aftertouch), Channel Aftertouch
  - RANGE MIN [E3]: 0 (C-1) to 127 (G9)
  - RANGE MAX [E4]: 0 (C-1) to 127 (G9)
- **Interactive Elements**:
  - Event type selector (touch to change)
  - E3: Range Min knob
  - E4: Range Max knob
  - E5: CANCEL
  - E6: EXECUTE
- **Currently Implemented?**: No
- **Notes**: Erased performance data is replaced by rests; the pattern length does not change. Range Min/Max applies when Event is Note (filters by note range), Poly Aftertouch (note range), or Control Change (controller number range). To erase all notes, set Range Min to "C-1" and Range Max to "G9". To erase all controller numbers, set Range Min to "0" and Range Max to "127".

### TRANSPOSE Screen (Modify > Transpose)
- **Manual Page**: p.129
- **Accessed Via**: From MODIFY MENU popup, touch TRANSPOSE
- **Screen Type**: sub-screen / overlay
- **Layout**: Horizontal parameter panel. TARGET (LOOP/PATTERN), BIAS [E1] knob (-127 to +127 semitones), RANGE MIN [E3], RANGE MAX [E4], CANCEL, EXECUTE.
- **Key Elements**:
  - TARGET: LOOP or PATTERN
  - BIAS [E1]: -127 to +127 (in semitone units)
  - RANGE MIN [E3]: 0 (C-1) to 127 (G9)
  - RANGE MAX [E4]: 0 (C-1) to 127 (G9)
- **Interactive Elements**:
  - E1: Bias knob (transposition amount in semitones)
  - E3: Range Min knob
  - E4: Range Max knob
  - E5: CANCEL
  - E6: EXECUTE
- **Currently Implemented?**: No
- **Notes**: Transposes all notes within the specified range by the BIAS amount in semitones. Notes outside the range are unaffected.

### CHANGE VELOCITY Screen (Modify > Change Velocity)
- **Manual Page**: p.129
- **Accessed Via**: From MODIFY MENU popup, touch CHANGE VELOCITY
- **Screen Type**: sub-screen / overlay
- **Layout**: Horizontal parameter panel. TARGET (LOOP/PATTERN), BIAS [E1] knob (-99 to +99), RANGE MIN [E3], RANGE MAX [E4], CANCEL, EXECUTE.
- **Key Elements**:
  - TARGET: LOOP or PATTERN
  - BIAS [E1]: -99 to +99 (velocity offset)
  - RANGE MIN [E3]: 0 (C-1) to 127 (G9)
  - RANGE MAX [E4]: 0 (C-1) to 127 (G9)
- **Interactive Elements**:
  - E1: Bias knob
  - E3: Range Min knob
  - E4: Range Max knob
  - E5: CANCEL
  - E6: EXECUTE
- **Currently Implemented?**: No
- **Notes**: Adds the BIAS value to the velocity of all notes in the specified range. Positive values increase velocity (louder), negative decrease (softer). Values are clamped to 1-127.

### CHANGE DURATION Screen (Modify > Change Duration)
- **Manual Page**: p.129
- **Accessed Via**: From MODIFY MENU popup, touch CHANGE DURATION
- **Screen Type**: sub-screen / overlay
- **Layout**: Horizontal parameter panel. TARGET (LOOP/PATTERN), BIAS [E1] knob (-960 to +960), RANGE MIN [E3], RANGE MAX [E4], CANCEL, EXECUTE.
- **Key Elements**:
  - TARGET: LOOP or PATTERN
  - BIAS [E1]: -960 to +960 (in ticks; 480 ticks = 1 quarter note)
  - RANGE MIN [E3]: 0 (C-1) to 127 (G9)
  - RANGE MAX [E4]: 0 (C-1) to 127 (G9)
- **Interactive Elements**:
  - E1: Bias knob
  - E3: Range Min knob
  - E4: Range Max knob
  - E5: CANCEL
  - E6: EXECUTE
- **Currently Implemented?**: No
- **Notes**: Changes the duration (note-on to note-off time) of notes by the BIAS amount in ticks. Positive values lengthen notes (more legato/tenuto), negative values shorten (more staccato). Duration cannot go below 1 tick.

### SHIFT CLOCK Screen (Modify > Shift Clock)
- **Manual Page**: p.129
- **Accessed Via**: From MODIFY MENU popup, touch SHIFT CLOCK
- **Screen Type**: sub-screen / overlay
- **Layout**: Horizontal parameter panel. TARGET (LOOP/PATTERN), Event type selector (All, Note, Control Change, Pitch Bend, Poly Aftertouch, Channel Aftertouch), BIAS [E1] knob (-960 to +960 ticks), RANGE MIN [E3], RANGE MAX [E4], CANCEL, EXECUTE.
- **Key Elements**:
  - TARGET: LOOP or PATTERN
  - Event type: All (all performance data), Note, Control Change, Pitch Bend, Poly Aftertouch, Channel Aftertouch
  - BIAS [E1]: -960 to +960 (in ticks)
  - RANGE MIN [E3]: 0 (C-1) to 127 (G9)
  - RANGE MAX [E4]: 0 (C-1) to 127 (G9)
- **Interactive Elements**:
  - Event type selector (touch)
  - E1: Bias knob
  - E3: Range Min knob
  - E4: Range Max knob
  - E5: CANCEL
  - E6: EXECUTE
- **Currently Implemented?**: No
- **Notes**: Moves the timing of the specified performance data forward (positive BIAS) or backward (negative BIAS) by the given number of ticks. Negative values create a "rushing" feel; positive values create "dragging." If data moves beyond the song beginning, it wraps around. If shift clock causes data to move beyond the beginning of the song, that data is moved to the beginning. Useful for subtle groove adjustments.

---

## SMF Import/Export Screens (pp.130-131)

### SMF IMPORT Screen (File Browser)
- **Manual Page**: p.130
- **Accessed Via**: On PTN UTILITY screen, select [E5] IMPORT
- **Screen Type**: main screen
- **Layout**: Full-screen file browser. Top header shows "SMF IMPORT" with save icon, time signature, tempo, position, STOP indicator, ZONE SOLO button. Center is a hierarchical file/folder tree browser showing: Root > USB > ROLAND folder structure. SMF files listed with names (e.g., files inside folders). Navigation via touch, knobs, or cursor buttons. Bottom has a scroll indicator (up/down arrows) and IMPORT button at bottom-right.
- **Key Elements**:
  - "SMF IMPORT" header
  - File/folder tree browser (Root, USB, ROLAND)
  - Expandable folder structure
  - File name display
  - Scroll indicator (up/down)
  - IMPORT button
- **Interactive Elements**:
  - Touch file name in the screen to directly select it
  - E1 knob / [up][down] button: scroll up/down to select a file
  - [ENTER] button: expand folder contents (press again to collapse)
  - [right] button: expand folder
  - [left] button: collapse/hide folder contents
  - [EXIT] button: return to previous screen (PTN UTILITY)
  - E6: IMPORT (proceed to SMF IMPORT detail screen)
- **Currently Implemented?**: No
- **Notes**: Copy SMF files from computer to USB flash drive in advance. The import-destination can be a location that already contains a pattern; the original pattern is overwritten in that case.

### SMF IMPORT Detail Screen
- **Manual Page**: p.130
- **Accessed Via**: Select a file in SMF IMPORT browser, then press [E6] IMPORT
- **Screen Type**: sub-screen
- **Layout**: Shows import parameters in a structured layout. Top area: START, LENGTH, SOURCE SMF (displaying the selected file name, e.g., "SMF01.mid"). Center shows a downward arrow from SOURCE to DESTINATION. DESTINATION PATTERN field (e.g., "A") and PATTERN NAME field (e.g., "A-011_01"). Bottom parameter bar: Start [E1], Length [E2], Destination [E3], EDIT NAME [E4], CANCEL [E5], OK [E6].
- **Key Elements**:
  - START: starting measure of SMF to import
  - LENGTH: number of measures to import
  - SOURCE SMF: file name
  - DESTINATION PATTERN: target pattern letter (A-H)
  - PATTERN NAME: name for the imported pattern (editable)
  - Downward arrow showing import flow direction
- **Interactive Elements**:
  - E1: Start knob (specifies starting measure of the SMF to import)
  - E2: Length knob (specifies number of measures to import)
  - E3: Destination knob (specifies import-destination track)
  - E4: EDIT NAME (opens RENAME screen to edit pattern name after import)
  - E5: CANCEL
  - E6: OK (executes the import; returns to PATTERN screen when complete)
- **Currently Implemented?**: No
- **Notes**: If the destination already contains a pattern, the original is overwritten. After OK, the import executes and returns to the PATTERN screen. Cancel returns to the file browser.

### SEQ EXPORT Screen
- **Manual Page**: p.130-131
- **Accessed Via**: On PTN UTILITY, select [E6] EXPORT; or GROUP UTILITY [E3] EXPORT; or SONG screen [E6] EXPORT
- **Screen Type**: main screen
- **Layout**: Left side has two sections: (1) Export Source section with label and tab area showing three source options with icons: PATTERN (grid icon), GROUP (folder icon), SONG (musical note icon); (2) Include Parameters section showing Tempo, Level, Pan toggles. Right side has Export Tracks section showing tracks 1-16 as numbered rectangular buttons in a 2x8 grid, with MUTE TRACK and SOLO TRACK buttons below. Bottom shows: Destination label with path (e.g., "USB"), Name field (e.g., "A001"), and three buttons: RENAME [E3], DESTINATION [E4], EXECUTE [E6].
- **Key Elements**:
  - Export Source: PATTERN / GROUP / SONG tabs with icons
  - Include Parameters: Tempo (ADD toggle), Level (ADD toggle), Pan (ADD toggle)
  - Export Tracks: 16 numbered track buttons (1-16) in a 2x8 grid
  - MUTE TRACK / SOLO TRACK buttons
  - Destination: USB folder path
  - Name: export filename
  - RENAME / DESTINATION / EXECUTE buttons
- **Interactive Elements**:
  - Touch Export Source tab (PATTERN/GROUP/SONG) to select source type
  - Touch <INCLUDE PARAMETER> to expand and configure Tempo/Level/Pan
  - Touch track number buttons (1-16) to toggle track selection for export
  - Touch MUTE TRACK or SOLO TRACK for batch track selection
  - E3: RENAME (opens RENAME screen for the export file name)
  - E4: DESTINATION (opens EXPORT DESTINATION folder browser)
  - E6: EXECUTE (starts the export process)
  - Touch <MUTE TRACK> to open MUTE SELECT screen for track filtering
  - Touch <SOLO TRACK> to open SOLO SELECT screen for track filtering
- **Currently Implemented?**: No
- **Notes**: Export creates a folder hierarchy: [filename] > [source type folder: PTN/GRP/SNG] > individual SMF files per track/pattern. File naming: if you assign "MyPTN", files are named MyPTN_01-A.MID, MyPTN_01-B.MID, MyPTN_02-A.MID, etc. If no name is assigned, the scene number is used. If files already exist at the destination, a confirmation asks whether to overwrite. Patterns that are not muted (or are soloed) are exported; all variations of applicable tracks are included.

### INCLUDE PARAMETERS Popup (within SEQ EXPORT)
- **Manual Page**: p.130
- **Accessed Via**: Touch <INCLUDE PARAMETER> area on the SEQ EXPORT screen
- **Screen Type**: popup / overlay
- **Layout**: Popup overlaying the SEQ EXPORT screen. Title "INCLUDE PARAMETERS" with close (X) button. Three parameter rows: Tempo with "ADD" toggle button, Level with "ADD" toggle button, Pan with "ADD" toggle button. Each ADD button can be toggled independently. Name field shown below (e.g., "A001").
- **Key Elements**:
  - Tempo: ADD toggle (include pattern tempo data in export)
  - Level: ADD toggle (include level/volume data)
  - Pan: ADD toggle (include pan/stereo position data)
  - Close (X) button
- **Interactive Elements**:
  - Touch each ADD button to toggle inclusion on/off
  - X to close popup and return to SEQ EXPORT screen
  - [EXIT] to close
- **Currently Implemented?**: No
- **Notes**: Controls what additional data beyond raw note data is embedded in the exported SMF files.

### EXPORT DESTINATION Screen (Folder Browser)
- **Manual Page**: p.131
- **Accessed Via**: On SEQ EXPORT screen, select [E4] DESTINATION
- **Screen Type**: sub-screen
- **Layout**: Full-screen folder browser titled "EXPORT DESTINATION" with transport info in header. File tree showing Root > USB > ROLAND folder hierarchy. Selected folder highlighted. Bottom has OK button at far right. Same navigation interface as SMF IMPORT browser.
- **Key Elements**:
  - "EXPORT DESTINATION" header
  - Folder tree browser (Root, USB, ROLAND)
  - Selected folder highlighted
  - Scroll indicator (up/down)
  - OK button
- **Interactive Elements**:
  - Touch folder name to select it
  - E1 knob / [up][down]: scroll through folder list
  - [ENTER]: expand/collapse folder
  - [right]: expand folder
  - [left]: collapse folder
  - [EXIT]: return to SEQ EXPORT screen
  - E6: OK (confirm destination selection)
- **Currently Implemented?**: No
- **Notes**: Same hierarchical file browser interface used throughout the system for import/export operations.

### EXPORT SOURCE Popup
- **Manual Page**: p.130
- **Accessed Via**: Touch <EXPORT SOURCE> label/area on the upper-left of the SEQ EXPORT screen
- **Screen Type**: popup / overlay
- **Layout**: Small popup showing three export source options with descriptive icons: PATTERN (grid icon), GROUP (folder icon), SONG (music note icon). Close (X) button.
- **Key Elements**:
  - PATTERN option with grid icon
  - GROUP option with folder icon
  - SONG option with music note icon
- **Interactive Elements**: Touch to select the desired source type; X to close
- **Currently Implemented?**: No
- **Notes**: Determines whether to export a single pattern, a group of patterns, or an entire song arrangement as SMF data.

---

## Group Screens (pp.132-134)

### GROUPING Screen
- **Manual Page**: p.132
- **Accessed Via**: On PATTERN screen, select [E5] GROUPING
- **Screen Type**: popup / overlay
- **Layout**: Popup window titled "GROUPING" with close (X) button, overlaying the PATTERN grid. Left side shows GROUP LIST with columns: Num (01-08+), Name, Length (in measures), and play icon per entry. Groups with data show length values (e.g., 32, 16, 8); empty groups show "--" in the Length column. A cursor highlights the current group. Bottom toolbar: scroll [E1], (empty), SET [E3], (empty), OK [E5], CANCEL [E6].
- **Key Elements**:
  - "GROUPING" title with close (X) button
  - GROUP LIST table: Number (01-08+), Name, Length, play icon per row
  - Cursor highlighting current group
  - Empty group indicator ("--" in Length column)
  - Bottom: SET, OK, CANCEL buttons
- **Interactive Elements**:
  - E1 knob: move cursor through group list
  - E3: SET (registers the current combination of track patterns as a group at the cursor position)
  - E5: OK (confirm and finalize group creation)
  - E6: CANCEL (discard changes)
  - Touch play icon next to a group to audition it
  - Touch group entry to move cursor to it
- **Currently Implemented?**: No
- **Notes**: Maximum of 16 groups can be created in each scene. First select patterns for each track in the PATTERN screen, then open GROUPING and press SET to register the combination. Groups with Length "--" are empty/unassigned.

### GROUP PREVIEW Screen
- **Manual Page**: p.132
- **Accessed Via**: Press [PLAY] during group creation/editing; or touch the play icon next to a group in the GROUP LIST or GROUPING screen
- **Screen Type**: popup / overlay
- **Layout**: Popup window titled "GROUP PREVIEW" with close (X) button. Shows a grid view similar to the PATTERN screen, with numbered tracks 1-16 across the top and pattern rows (A-H or simplified) below. Each track column shows the currently assigned pattern for this group as a colored block. Text at bottom: "Touch this window to end preview."
- **Key Elements**:
  - "GROUP PREVIEW" title with close (X)
  - Track numbers 1-16 across top
  - Pattern assignment blocks per track (colored)
  - Rows A-H visible
  - "Touch this window to end preview." instruction text
- **Interactive Elements**:
  - Touch the preview window anywhere to end preview and stop playback
  - Press [STOP] button to stop playback
- **Currently Implemented?**: No
- **Notes**: Appears during group audition. Shows each track's current pattern at a glance, making it easy to verify the group's pattern combination before finalizing.

### GROUP Screen (Detailed)
- **Manual Page**: p.133
- **Accessed Via**: Press the [GROUP] button on the panel; or from PATTERN screen, select [E6] GROUP
- **Screen Type**: main screen
- **Layout**: Split-panel display. Left side: "Current group" indicator at top, then GROUP LIST with columns: Num, Name, Length, play icons. Lists groups (e.g., "01: Intro 32", "02: Verse A 24", "03: Verse B 32", "04: Verse C 32", "05: Chorus A 16", "06: Chorus B 16", "07: Ending 8", "08: INIT GRP --"). Right side: GROUP Info area titled with the current group name (e.g., "02: Verse A"). Shows a color-coded horizontal bar visualization indicating data presence/absence for each track (1-16) in the current group, plus the pattern length for each track. Top header: back arrow, transport info. Bottom toolbar: PATTERN [E1], scroll arrows [E2], UTILITY [E3], RENAME [E4], Length value with [E5] knob, MAKE SONG [E6].
- **Key Elements**:
  - Current group indicator
  - GROUP LIST (left): Number, Name, Length, play icons for each group
  - GROUP Info (right): current group name, color-coded track data bars, pattern length per track
  - Length setting display (bottom, e.g., "32")
  - Bottom toolbar: PATTERN, scroll, UTILITY, RENAME, Length, MAKE SONG
- **Interactive Elements**:
  - E1: PATTERN (returns to PATTERN screen)
  - E2 knob: moves cursor in GROUP LIST
  - E3: UTILITY (opens GROUP UTILITY screen)
  - E4: RENAME (opens RENAME screen for the group)
  - E5: LENGTH knob (sets the loop playback length for the group, independently from the pattern's own loop setting)
  - E6: MAKE SONG (opens MAKE SONG screen)
  - Touch play icons in GROUP LIST to audition groups
  - Touch group entries to select/move cursor
- **Currently Implemented?**: No
- **Notes**: The GROUP Info area (right side) visually shows which tracks have data and how long the patterns are. The Length setting (E5) controls the loop length when this group is played -- setting it shorter than the pattern cuts playback, setting it longer pads with silence. The area outside the Length boundary is grayed out and not played. Loop settings for the group are separate from per-pattern loop settings.

### GROUP UTILITY Screen
- **Manual Page**: p.134
- **Accessed Via**: On GROUP screen, select [E3] UTILITY
- **Screen Type**: popup / overlay
- **Layout**: Popup window titled "GROUP UTILITY" with close (X) button. Left side: GROUP LIST (same as GROUP screen) with Num, Name, Length columns and play icons. Right side: GROUP Info visualization (same as GROUP screen). Bottom toolbar: scroll [E1], INITIALIZE [E2], EXPORT [E3], RENAME [E4], MAKE SONG [E5].
- **Key Elements**:
  - "GROUP UTILITY" title with close (X)
  - GROUP LIST (same format as GROUP screen)
  - GROUP Info visualization (same format)
  - INITIALIZE / EXPORT / RENAME / MAKE SONG buttons
- **Interactive Elements**:
  - E1 knob: scroll through group list
  - E2: INITIALIZE (initializes/clears the selected group)
  - E3: EXPORT (opens SEQ EXPORT screen with GROUP as the export source)
  - E4: RENAME (opens RENAME screen for the group)
  - E5: MAKE SONG (opens MAKE SONG screen)
- **Currently Implemented?**: No
- **Notes**: INITIALIZE clears all data from the selected group, resetting it to empty. After initializing, press [EXIT] to return to GROUP screen. Export from here pre-selects GROUP as the export source in the SEQ EXPORT screen.

---

## Song Screens (pp.135-138)

### MAKE SONG Screen
- **Manual Page**: p.135
- **Accessed Via**: On GROUP screen, select [E6] MAKE SONG; or from GROUP UTILITY, select [E5] MAKE SONG
- **Screen Type**: main screen
- **Layout**: Split-panel display. Left side: GROUP LIST with columns Num, Name, Length, and play icons (same as GROUP screen). Right side: SONG area showing a horizontal/grid timeline with numbered positions (1, 2, 3, 4...) and group boxes placed in sequence. Each group box shows: group number (e.g., "01"), repeat count (e.g., "x1"), and group name (e.g., "Intro", "Verse A", "Verse B", "Chorus A"). An "Input location" marker (red frame) shows the current insertion point. Bottom toolbar: GROUP [E1], scroll [E2], ADD/REPLACE [E3], ADD [E4] or REPLACE [E4] (depending on mode), BACK DEL [E5], SONG [E6].
- **Key Elements**:
  - "MAKE SONG" header
  - GROUP LIST (left): Number, Name, Length, play icons
  - SONG timeline (right): numbered positions with group boxes
  - Group boxes: group number, repeat count (x1/x2/etc.), group name
  - Input location marker (red frame at current insertion point)
  - ADD / REPLACE mode indicator
- **Interactive Elements**:
  - E1: GROUP (returns to GROUP screen)
  - E2 knob: move cursor in GROUP LIST
  - E3: ADD/REPLACE (toggles the input method between ADD and REPLACE)
  - E4: ADD or REPLACE (executes the function set by E3 -- adds or replaces group at input location)
  - E5: BACK DEL (deletes the group at the input location and moves the input location back one position)
  - E6: SONG (goes to the SONG screen to view the complete song)
  - Touch <ADD> next to a group name in the GROUP LIST to add that group to the song at the input location
  - Touch play icon to audition a group
- **Currently Implemented?**: No
- **Notes**: Maximum 32 groups can be arranged in a song. Each scene has one song. Using REPLACE mode, the group at the input location is overwritten rather than inserted. After creating groups or a song, save the scene to preserve the data.

### SONG Screen (Detailed)
- **Manual Page**: p.135
- **Accessed Via**: Press the [SONG] button on the panel; or from MAKE SONG, select [E6] SONG
- **Screen Type**: main screen
- **Layout**: Full-screen song arrangement view. Top header: back arrow, "SONG" label, save icon, time signature, tempo, position, STOP indicator, SAMPLE PAD button. Main area: a grid of numbered positions (1-32) arranged in rows of 8 (row 1: positions 1-8, row 2: 9-16, row 3: 17-24, row 4: 25-32). Each position contains a group box showing: group number (top-left, e.g., "01"), repeat count (top-right, e.g., "x1"), and group name (bottom, e.g., "Intro", "Verse A", "Chorus A", etc.). Occupied positions have colored backgrounds; empty positions are dark/blank. Bottom toolbar: MAKE SONG [E1], EDIT [E2], (empty) [E3], SKIP [E4], MEAS [E5], EXPORT [E6].
- **Key Elements**:
  - "SONG" header with transport info
  - Song position grid (32 positions, 8 per row, 4 rows)
  - Group boxes with: group number, repeat count (x1-x64), group name
  - Color coding per group type
  - Empty positions (dark boxes)
  - Bottom toolbar: MAKE SONG, EDIT, SKIP, MEAS, EXPORT
- **Interactive Elements**:
  - E1: MAKE SONG (returns to MAKE SONG screen)
  - E2: EDIT (opens SONG EDIT screen)
  - E3: DELETE (deletes a group from the song)
  - E4: SKIP (enters skip mode to toggle group skipping)
  - E5: MEAS (toggles between position-number view and measure-number view)
  - E6: EXPORT (opens SEQ EXPORT screen with SONG as export source)
  - [PLAY]: play the entire song from the beginning
  - [STOP]: stop playback
  - Cursor buttons [up/down/left/right] to navigate group positions
  - Touch group box to select it
- **Currently Implemented?**: No
- **Notes**: The SONG screen shows the complete song arrangement. Groups play in sequential order (1, 2, 3...) with their specified repeat counts. The currently playing group is highlighted during playback.

### SONG Screen -- SKIP Mode
- **Manual Page**: p.135-136
- **Accessed Via**: On SONG screen, select [E4] SKIP
- **Screen Type**: main screen (modal state within SONG screen)
- **Layout**: Same SONG screen layout but with additional visual indicators. Group boxes that contain data are shown with a red frame indicating they can be toggled. When a group has SKIP applied, its box becomes grayed-out (semitransparent). The red frame cursor can be moved between groups using cursor buttons.
- **Key Elements**:
  - Red frame around the group being evaluated for skip
  - Grayed-out boxes for skipped groups
  - Normal (colored) boxes for active (non-skipped) groups
  - Same bottom toolbar
- **Interactive Elements**:
  - Cursor [up/down/left/right]: move the red frame to different group boxes
  - [ENTER]: toggle skip on/off for the group at the red frame
  - Touch a group box directly to toggle its skip state
  - Cannot move the frame to boxes that contain no data
  - Press [E4] SKIP again (or similar) to exit skip mode
- **Currently Implemented?**: No
- **Notes**: SKIP setting is saved in the scene. You can toggle skip even while the song is playing, allowing real-time arrangement changes during performance. A skipped group is simply bypassed during playback -- the song continues to the next non-skipped group.

### SONG EDIT Screen
- **Manual Page**: p.136
- **Accessed Via**: On SONG screen, select [E2] EDIT
- **Screen Type**: main screen
- **Layout**: Full-screen titled "SONG EDIT". Shows the same 32-position grid as the SONG screen with group boxes (number, repeat count, name, color). The currently selected group box is enclosed by a red frame. Bottom toolbar: MOVE [E1], COPY [E2], DELETE [E3], LOOP [E4], Repeat [E5], PATTERN [E6].
- **Key Elements**:
  - "SONG EDIT" header with transport info
  - Song position grid (same as SONG screen)
  - Group boxes with number, repeat, name
  - Red frame around selected group
  - Bottom toolbar: MOVE, COPY, DELETE, LOOP, Repeat, PATTERN
- **Interactive Elements**:
  - E1: MOVE (opens SONG EDIT (MOVE) sub-screen)
  - E2: COPY (opens SONG EDIT (COPY) sub-screen)
  - E3: DELETE (deletes the selected group immediately)
  - E4: LOOP (opens SONG EDIT (LOOP) sub-screen)
  - E5: Repeat knob (sets repeat count x1-x64 for the selected group)
  - E6: PATTERN (returns to the PATTERN screen)
  - Cursor buttons [up/down/left/right] to select different groups
  - Touch group box to select it (moves red frame)
- **Currently Implemented?**: No
- **Notes**: All song edit operations affect the song arrangement structure. Changes are saved when you save the scene. The Repeat knob [E5] adjusts how many times the selected group plays before moving to the next.

### SONG EDIT (MOVE) Screen
- **Manual Page**: p.136-137
- **Accessed Via**: On SONG EDIT screen, select the move-source group, then select [E1] MOVE
- **Screen Type**: main screen (sub-mode of SONG EDIT)
- **Layout**: Titled "SONG EDIT(MOVE)". Same grid of group boxes (32 positions). Green hollow pointers (downward arrow outlines) appear above each group box position, indicating possible move-destination locations. The instruction "Select destination." appears in the center area. Bottom bar: EXIT [E1] and EXECUTE [E6] buttons.
- **Key Elements**:
  - "SONG EDIT(MOVE)" header
  - Group boxes in grid (same as SONG EDIT)
  - Green hollow pointers (downward arrow outlines) above each position
  - Solid green pointer at selected destination
  - "Select destination." instruction text
  - EXIT / EXECUTE buttons
- **Interactive Elements**:
  - Touch a pointer to select that position as the move destination (pointer changes from hollow outline to solid filled arrow)
  - E1: EXIT (cancel the move, return to SONG EDIT)
  - E6: EXECUTE (perform the move operation)
- **Currently Implemented?**: No
- **Notes**: The move operation removes the group from its original position and inserts it at the destination. Other groups shift to accommodate. Example: moving "Intro" from position 1 to between positions 3 and 4 results in positions 1-2 shifting up and "Intro" appearing at position 3.

### SONG EDIT (COPY) Screen
- **Manual Page**: p.137
- **Accessed Via**: On SONG EDIT screen, select the copy-source group, then select [E2] COPY
- **Screen Type**: main screen (sub-mode of SONG EDIT)
- **Layout**: Identical to SONG EDIT (MOVE) but titled "SONG EDIT(COPY)". Green pointers above group positions for destination selection. Bottom: EXIT [E1] and EXECUTE [E6] buttons. Same "Select destination." instruction.
- **Key Elements**:
  - Same visual layout as MOVE screen
  - Pointers for destination selection
  - Source group remains in its original location (unlike MOVE)
- **Interactive Elements**:
  - Touch a pointer to select copy destination (pointer fills solid)
  - E1: EXIT (cancel)
  - E6: EXECUTE (perform copy -- inserts copied group at destination)
- **Currently Implemented?**: No
- **Notes**: Unlike MOVE, the original group stays in its position. The copy is inserted at the destination, and subsequent groups shift down by one position.

### SONG EDIT (LOOP) Screen
- **Manual Page**: p.137
- **Accessed Via**: On SONG EDIT screen, select a group, then select [E4] LOOP
- **Screen Type**: main screen (sub-mode of SONG EDIT)
- **Layout**: Same song grid as SONG EDIT. A "Loop region" indicator appears above the group boxes as a colored band/bracket spanning from the loop start to loop end positions. The loop region is visually distinguished by highlighting. Bottom toolbar shows: MOVE [E1], COPY [E2], DELETE [E3], LOOP [E4] (highlighted/active), Repeat [E5], PATTERN [E6]. Loop-specific parameters: START [E3] knob, END [E4] knob, LOOP SW [E6] toggle.
- **Key Elements**:
  - "Loop region" indicator band above group boxes
  - Loop start and end markers
  - Group boxes with repeat counts and color coding
  - LOOP SW ON/OFF state indicator
  - Loop start (START) and end (END) group position values
- **Interactive Elements**:
  - E1: EXIT (return to SONG EDIT)
  - E3: START knob (1-32, specifies which group position begins the loop region)
  - E4: END knob (1-32, specifies which group position ends the loop region)
  - E6: LOOP SW (ON/OFF toggle -- turns loop playback on or off)
- **Currently Implemented?**: No
- **Notes**: When LOOP SW is ON and playback enters the loop region, it repeats continuously between START and END positions until you stop or turn LOOP SW OFF. Can be changed during playback for real-time arrangement. The loop region is shown as a highlighted bracket above the group boxes. Example: with Intro, Verse A, Verse B, Chorus A, Chorus B groups, setting START=3, END=5 loops Verse B through Chorus B. Loop settings for the entire song can be combined with individual group Repeat settings.

### Repeat Settings (within SONG EDIT)
- **Manual Page**: p.138
- **Accessed Via**: On SONG EDIT screen, select the group whose repeat you want to change, then turn [E5] Repeat knob
- **Screen Type**: parameter adjustment (within SONG EDIT, not a separate screen)
- **Layout**: The repeat count is displayed in the upper-right corner of each group box (e.g., "x1", "x2", "x4"). Turning E5 changes this value for the selected (red-framed) group.
- **Key Elements**:
  - Repeat count indicator in group box (e.g., "x2", "x4")
  - E5 Repeat knob label
- **Interactive Elements**:
  - E5 Repeat knob: x1-x64 (number of times the group plays before advancing)
- **Currently Implemented?**: No
- **Notes**: Repeat settings for individual groups can be freely changed while the song is playing. For example, in a song structure A->B->C->D, you can set group C to play twice (x2), resulting in playback as A->B->C->C->D. This is not a separate screen but a parameter within SONG EDIT.

---

## SMF Player Screens (pp.139-140)

### SMF CONTROL Screen
- **Manual Page**: p.139
- **Accessed Via**: Set SEQUENCER TYPE to "SMF Player" in MENU > SCENE EDIT > SONG tab, then press [SONG] button. (Alternatively: hold [SHIFT] + press [SONG] to toggle between sequencer and SMF Player.)
- **Screen Type**: main screen
- **Layout**: Full-screen SMF player control interface. Top header: back arrow, "SMF CONTROL" label, save icon, time signature, tempo, position, "SMF" mode indicator, SAMPLE PAD button. Center-left area: <SMF SELECT> button. Below: Time Signature display (e.g., 4/4), Tempo display (e.g., 120.00). Position display: Meas (e.g., 001), Beat (e.g., 01), Tick (e.g., 000). Transpose value (e.g., 0) with up/down arrows. Left side: TRACK, MUTE, SOLO buttons stacked vertically. Center: transport controls in a horizontal row: |< (rewind to start), << (rewind one measure), play/stop toggle, >> (forward one measure). Below transport: LOOP A position display (e.g., 001-01-000), loop on/off icon (chain link), LOOP B position display (e.g., 001-01-000), LOOP A-B CLEAR button. Status dots (4 dots) on the right side of transport area.
- **Key Elements**:
  - "SMF CONTROL" header with SMF mode indicator
  - <SMF SELECT> button (opens file browser)
  - Time Signature display
  - Tempo display (with two decimal places)
  - Position display: Meas / Beat / Tick
  - Transpose value with up/down arrows
  - TRACK / MUTE / SOLO buttons (left side)
  - Transport controls: rewind-to-start, rewind, play/stop, fast-forward
  - LOOP A position display
  - Loop on/off icon (chain link visual)
  - LOOP B position display
  - LOOP A-B CLEAR button
  - Status dots indicator
- **Interactive Elements**:
  - Touch <SMF SELECT> to open SMF file browser
  - |< transport button: rewind to the start of the SMF
  - << transport button: move one measure backward (each press)
  - Play/Stop transport button: toggle playback
  - >> transport button: move one measure forward (each press)
  - <MUTE>: opens MUTE SELECT screen for track muting
  - <SOLO>: opens SOLO SELECT screen for track soloing
  - TRANSPOSE up/down arrows: change transposition value
  - E1: Jump to LOOP A (jumps playback position to loop A point immediately)
  - E2: Loop A knob (sets loop A position; press E2 during playback to capture current position as loop A)
  - E3: Loop On/Off toggle (turns AB loop playback on/off)
  - E4: Loop B knob (sets loop B position; press E4 during playback to capture current position as loop B)
  - E5: Loop A-B CLEAR (deletes previously set loop points)
  - [TEMPO] button: opens TEMPO popup for tempo adjustment
- **Currently Implemented?**: No
- **Notes**: The SMF Player is an alternative mode to the internal sequencer. When SMF Player is active, the internal sequencer is unavailable. The AB LOOP feature allows looping a section of the SMF: when loop is on and playback reaches loop B, it jumps back to loop A and continues. Press E1 at any time to jump to loop A instantly. Loop settings are saved in the scene. Tempo changes are also saved. If the SMF contains tempo data, that overrides the scene tempo setting.

### SMF SELECT Screen
- **Manual Page**: p.139
- **Accessed Via**: Touch <SMF SELECT> on the SMF CONTROL screen
- **Screen Type**: sub-screen
- **Layout**: Full-screen file browser. Top header: back arrow, "SMF SELECT" label, save icon, time signature, tempo, position, SMF indicator, SAMPLE PAD. Center: hierarchical file/folder tree showing Root > EXPORT SAMPLE, ROLAND folders with expandable contents. SMF files listed with names and sizes (e.g., "Song_01.mid 62.2 kB", "Song_02.mid 169.1 kB"). Bottom: scroll indicator (up/down arrows), PREVIEW [E2] button, SELECT [E6] button.
- **Key Elements**:
  - "SMF SELECT" header
  - File/folder tree browser
  - File names with sizes
  - PREVIEW button
  - SELECT button
- **Interactive Elements**:
  - Touch file name to select it
  - E1 knob / [up][down]: scroll through file list
  - [ENTER] / [right]: expand folder contents
  - [left]: collapse folder
  - E2: PREVIEW (audition/preview the SMF without fully loading it)
  - E6: SELECT (load the selected SMF file)
- **Currently Implemented?**: No
- **Notes**: Copy SMF files to a USB flash drive beforehand. The PREVIEW function (E2) lets you listen to an SMF before committing to loading it. After pressing SELECT, the scene is automatically saved and a confirmation message appears -- press [E5] OK to confirm. The loaded SMF name appears in the SMF CONTROL screen.

### MUTE SELECT Screen (SMF Player context)
- **Manual Page**: p.140
- **Accessed Via**: Select [E3] MUTE on the SMF CONTROL screen; or on the PATTERN screen select MUTE
- **Screen Type**: sub-screen / overlay
- **Layout**: Overlay showing track icons for all tracks (1-16). Each track icon shows its muted/unmuted state through color changes (muted tracks have a changed/dimmed color). "ALL ON/OFF" toggle for batch muting/unmuting all tracks at once. Close via [EXIT].
- **Key Elements**:
  - Track icons (all 16 tracks)
  - Color-coded mute state indicator per track
  - ALL ON/OFF toggle button
- **Interactive Elements**:
  - Touch any track icon to toggle its mute on/off
  - Touch ALL ON/OFF to mute or unmute all tracks simultaneously
  - [EXIT] button: return to SMF CONTROL screen
- **Currently Implemented?**: No
- **Notes**: Mute/unmute state for each track is saved in the scene. Patterns can also be muted during playback. Same visual interface as the PATTERN screen's MUTE SELECT.

### SOLO SELECT Screen (SMF Player context)
- **Manual Page**: p.140
- **Accessed Via**: On the SMF CONTROL screen or PATTERN screen, select SOLO
- **Screen Type**: sub-screen / overlay
- **Layout**: Similar to MUTE SELECT but for soloing. Track icons shown for all 16 tracks. Soloed tracks are visually highlighted with a different color treatment from non-soloed tracks. Can solo more than one track at a time.
- **Key Elements**:
  - Track icons (all 16 tracks)
  - Solo state indicator (color highlight)
- **Interactive Elements**:
  - Touch track icons to toggle solo on/off
  - [EXIT] button: return to previous screen
- **Currently Implemented?**: No
- **Notes**: Solo state is saved in the scene. Multiple tracks can be soloed simultaneously. Same visual interface as the PATTERN screen's SOLO SELECT.

---

## Screen Transition Map (Pages 116-140)

```
[REC] button (from PATTERN screen)
  |
  v
REC STANDBY Screen (common entry point)
  |-- <TRACK/PATTERN> --> TRACK/PATTERN Selection View (pattern grid) --> back to REC STANDBY
  |
  |-- [REALTIME REC tab selected]
  |     --> <START> or [PLAY] --> REALTIME RECORDING Screen
  |           |-- [E1] ERASE --> REALTIME ERASE Screen --> [E6] CLOSE --> back to REALTIME RECORDING
  |           |-- [E4] STOP --> PATTERN screen
  |           |-- [E5] REC END --> REC STANDBY screen
  |           |-- [E6] CLOSE --> previous screen (still recording)
  |
  |-- [STEP REC tab] --> [E1] STEP REC --> STEP RECORDING Screen
  |           |-- [EXIT] --> stops recording, returns to REC STANDBY
  |
  |-- [TR-REC tab] --> [E2] TR-REC --> TR-REC Screen (Tone variant or Drum Kit variant)
              |-- [TR-REC] button (lit) --> stop recording
              |-- [EXIT] --> back to REC STANDBY

[E3] EDIT (from PATTERN screen, with pattern selected)
  |
  v
EDIT SELECT Popup
  |-- PIANO ROLL --> PIANO ROLL Screen (Note Editing)
  |     |-- Automation toggle --> PIANO ROLL Screen (Automation View) --> toggle back
  |
  |-- MICROSCOPE --> Microscope Screen (Event List)
  |
  |-- (EDIT SETTING --> not a separate screen, toggles EDIT SELECT behavior)

[E2] PTN UTILITY (from PATTERN screen)
  |
  v
PTN UTILITY Screen
  |-- <EDIT> tab --> opens editor for selected pattern
  |-- <MODIFY> tab --> MODIFY MENU Popup
  |     |-- QUANTIZE --> QUANTIZE Screen --> EXECUTE confirmation
  |     |-- ERASE --> ERASE Screen --> EXECUTE confirmation
  |     |-- TRANSPOSE --> TRANSPOSE Screen --> EXECUTE confirmation
  |     |-- CHANGE VELOCITY --> CHANGE VELOCITY Screen --> EXECUTE confirmation
  |     |-- CHANGE DURATION --> CHANGE DURATION Screen --> EXECUTE confirmation
  |     |-- SHIFT CLOCK --> SHIFT CLOCK Screen --> EXECUTE confirmation
  |
  |-- <COPY> tab --> copies selected pattern to clipboard
  |-- <PASTE> tab --> pastes clipboard to selected location
  |-- <DELETE> tab --> DELETE MENU Popup (DELETE / DELETE ALL)
  |
  |-- [E4] RENAME --> RENAME Screen (Pattern)
  |-- [E5] IMPORT --> SMF IMPORT Screen (Browser) --> SMF IMPORT Detail Screen
  |-- [E6] EXPORT --> SEQ EXPORT Screen
  |     |-- INCLUDE PARAMETERS Popup
  |     |-- EXPORT DESTINATION Screen (Folder Browser)
  |     |-- EXPORT SOURCE Popup

[GROUP] button
  |
  v
GROUP Screen
  |-- [E1] PATTERN --> PATTERN Screen
  |-- [E3] UTILITY --> GROUP UTILITY Screen
  |     |-- [E2] INITIALIZE
  |     |-- [E3] EXPORT --> SEQ EXPORT (GROUP source)
  |     |-- [E4] RENAME --> RENAME Screen
  |
  |-- [E4] RENAME --> RENAME Screen (Group)
  |-- [E5] LENGTH --> adjusts group loop length (inline)
  |-- [E6] MAKE SONG --> MAKE SONG Screen
  |     |-- [E6] SONG --> SONG Screen
  |
  |-- play icon --> GROUP PREVIEW popup (during audition)

[SONG] button
  |
  v
SONG Screen
  |-- [E1] MAKE SONG --> MAKE SONG Screen
  |-- [E2] EDIT --> SONG EDIT Screen
  |     |-- [E1] MOVE --> SONG EDIT (MOVE)
  |     |-- [E2] COPY --> SONG EDIT (COPY)
  |     |-- [E3] DELETE --> deletes group directly
  |     |-- [E4] LOOP --> SONG EDIT (LOOP)
  |     |-- [E5] Repeat knob --> adjusts repeat count (inline)
  |     |-- [E6] PATTERN --> PATTERN Screen
  |
  |-- [E4] SKIP --> SONG Screen (Skip Mode) --> [ENTER] toggles skip
  |-- [E5] MEAS --> toggles position vs. measure numbering
  |-- [E6] EXPORT --> SEQ EXPORT (SONG source)

[SONG] button (SMF Player mode, when SEQUENCER TYPE = SMF Player)
  |
  v
SMF CONTROL Screen
  |-- <SMF SELECT> --> SMF SELECT Screen (File Browser)
  |-- <MUTE> --> MUTE SELECT Screen
  |-- <SOLO> --> SOLO SELECT Screen
  |-- [TEMPO] --> TEMPO popup
  |-- Transport: |<, <<, play/stop, >>
  |-- Loop controls: E1 Jump A, E2 Loop A, E3 Loop On/Off, E4 Loop B, E5 Clear
```

---

## Summary Table (Pages 116-140)

| # | Screen Name | Category | Manual Page | Accessed Via | Type | Implemented? |
|---|---|---|---|---|---|---|
| 1 | REC STANDBY (Realtime) | Recording | p.117 | [REC] button | main screen | No |
| 2 | TRACK/PATTERN Selection | Recording | p.118 | Touch TRACK/PATTERN on REC STANDBY | sub-screen | No |
| 3 | REALTIME RECORDING | Recording | p.118 | [PLAY] from REC STANDBY | main screen | No |
| 4 | REALTIME ERASE | Recording | p.119 | [E1] ERASE from REALTIME RECORDING | sub-screen | No |
| 5 | REC STANDBY (Step REC) | Recording | p.119 | [REC] + STEP REC tab | main screen | No |
| 6 | STEP RECORDING | Recording | p.120 | [E1] STEP REC from REC STANDBY | main screen | No |
| 7 | TR-REC (Tone) | Recording | p.121-122 | [E2] TR-REC (non-drum tone) | main screen | No |
| 8 | TR-REC (Drum Kit) | Recording | p.121-122 | [E2] TR-REC (drum kit tone) | main screen | No |
| 9 | EDIT SELECT | Editing | p.123-124 | [E3] EDIT on PATTERN screen | popup | No |
| 10 | PIANO ROLL (Note Editing) | Editing | p.123 | PIANO ROLL from EDIT SELECT | main screen | No |
| 11 | PIANO ROLL (Automation) | Editing | p.124-125 | Automation toggle on PIANO ROLL | main screen | No |
| 12 | Microscope (Event List) | Editing | p.126 | MICROSCOPE from EDIT SELECT | main screen | No |
| 13 | PTN UTILITY | Editing | p.126-127 | [E2] PTN UTILITY on PATTERN screen | main screen | No |
| 14 | DELETE MENU | Editing | p.127 | DELETE on PTN UTILITY | popup | No |
| 15 | RENAME (Pattern) | Editing | p.127 | [E4] RENAME on PTN UTILITY | popup | No |
| 16 | MODIFY MENU | Editing | p.128 | MODIFY on PTN UTILITY | popup | No |
| 17 | QUANTIZE (Modify) | Editing | p.128 | QUANTIZE from MODIFY MENU | sub-screen | No |
| 18 | ERASE (Modify) | Editing | p.129 | ERASE from MODIFY MENU | sub-screen | No |
| 19 | TRANSPOSE (Modify) | Editing | p.129 | TRANSPOSE from MODIFY MENU | sub-screen | No |
| 20 | CHANGE VELOCITY (Modify) | Editing | p.129 | CHANGE VELOCITY from MODIFY MENU | sub-screen | No |
| 21 | CHANGE DURATION (Modify) | Editing | p.129 | CHANGE DURATION from MODIFY MENU | sub-screen | No |
| 22 | SHIFT CLOCK (Modify) | Editing | p.129 | SHIFT CLOCK from MODIFY MENU | sub-screen | No |
| 23 | SMF IMPORT (Browser) | Import/Export | p.130 | [E5] IMPORT on PTN UTILITY | main screen | No |
| 24 | SMF IMPORT (Detail) | Import/Export | p.130 | [E6] IMPORT from browser | sub-screen | No |
| 25 | SEQ EXPORT | Import/Export | p.130-131 | [E6] EXPORT on PTN UTILITY/GROUP/SONG | main screen | No |
| 26 | INCLUDE PARAMETERS | Import/Export | p.130 | Touch on SEQ EXPORT | popup | No |
| 27 | EXPORT DESTINATION | Import/Export | p.131 | [E4] DESTINATION on SEQ EXPORT | sub-screen | No |
| 28 | EXPORT SOURCE | Import/Export | p.130 | Touch EXPORT SOURCE on SEQ EXPORT | popup | No |
| 29 | GROUPING | Group | p.132 | [E5] GROUPING on PATTERN screen | popup | No |
| 30 | GROUP PREVIEW | Group | p.132 | [PLAY] during grouping or play icon | popup | No |
| 31 | GROUP (Detailed) | Group | p.133 | [GROUP] button | main screen | No |
| 32 | GROUP UTILITY | Group | p.134 | [E3] UTILITY on GROUP screen | popup | No |
| 33 | MAKE SONG | Song | p.135 | [E6] MAKE SONG on GROUP screen | main screen | No |
| 34 | SONG (Detailed) | Song | p.135 | [SONG] button | main screen | No |
| 35 | SONG -- SKIP Mode | Song | p.135-136 | [E4] SKIP on SONG screen | main screen | No |
| 36 | SONG EDIT | Song | p.136 | [E2] EDIT on SONG screen | main screen | No |
| 37 | SONG EDIT (MOVE) | Song | p.136-137 | [E1] MOVE on SONG EDIT | main screen | No |
| 38 | SONG EDIT (COPY) | Song | p.137 | [E2] COPY on SONG EDIT | main screen | No |
| 39 | SONG EDIT (LOOP) | Song | p.137 | [E4] LOOP on SONG EDIT | main screen | No |
| 40 | SMF CONTROL | SMF Player | p.139 | [SONG] button (SMF Player mode) | main screen | No |
| 41 | SMF SELECT | SMF Player | p.139 | SMF SELECT on SMF CONTROL | sub-screen | No |
| 42 | MUTE SELECT (SMF) | SMF Player | p.140 | [E3] MUTE on SMF CONTROL | sub-screen | No |
| 43 | SOLO SELECT (SMF) | SMF Player | p.140 | SOLO on SMF CONTROL/PATTERN | sub-screen | No |

**Total new screens cataloged from pages 116-140: 43**

**Combined total from pages 103-140: 67 screens (24 from Part 1 + 43 from Part 2)**
