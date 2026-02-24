# 02: Performing -- Screen Catalog

> **Source**: `FANTOM-06_07_08_Reference_eng01_W.pdf`, pages 27-46
> **Sections covered**: Selecting a Sound (Scene/Tone), Performing (Single/Layer/Split/Multiple Zones, Key Range), Changing Keyboard Settings (Transpose/Octave), Playing Arpeggios, Playing Chords (Chord Memory), Performing with Rhythm Patterns
> **Extracted**: 2026-02-23

---

## Summary of Screens Found

| # | Screen Name | Page | Type | Implemented? |
|---|---|---|---|---|
| 1 | Scene Select | p.28 | Main screen | Yes (`home`) |
| 2 | Bank Select Popup | p.28 | Popup / overlay | No |
| 3 | Scene Search (Text) -- Keyboard Entry | p.29 | Overlay | No |
| 4 | Scene Search Results | p.29 | Main screen (filtered) | No |
| 5 | Scene Rating Edit | p.29 | Main screen (edit mode) | No |
| 6 | Scene Rating Filter | p.29 | Main screen (filtered) | No |
| 7 | Quick Edit Bar | p.30 | Overlay / bar | No |
| 8 | Zone View (1 Zone) | p.31 | Main screen | Yes (`zone-view`) |
| 9 | Zone View (4 Zone) | p.31 | Main screen | Yes (`zone-view`) |
| 10 | Zone View (8 Zone) | p.31 | Main screen | Yes (`zone-view`) |
| 11 | Zone View (16 Zone) | p.31 | Main screen | Yes (`zone-view`) |
| 12 | Tone List | p.31-32 | Sub-screen / full overlay | Yes (`tone-select`) |
| 13 | Tone Search (Text) -- Keyboard Entry | p.32 | Overlay | No |
| 14 | Tone Search Results | p.32 | Sub-screen (filtered) | No |
| 15 | Tone Rating Edit | p.32 | Sub-screen (edit mode) | No |
| 16 | Tone Rating Filter | p.33 | Sub-screen (filtered) | No |
| 17 | Single Tone Play (Scene Select variant) | p.34 | Main screen | No |
| 18 | Single Zone Play Confirm Popup | p.34 | Popup | No |
| 19 | Layer Setup (Zone View with layered zones) | p.35 | Main screen | Partial |
| 20 | Split Setup (Zone View with split zones) | p.36 | Main screen | Partial |
| 21 | Split Point Display | p.36 | Temporary overlay | No |
| 22 | Key Range Setup (Zone View with LOWER/UPPER) | p.37 | Main screen | Yes (`key-range`) |
| 23 | Key Range Edit (ZONE EDIT sub-screen) | p.37 | Sub-screen | No |
| 24 | Transpose Display | p.38 | Temporary overlay | No |
| 25 | Octave Display | p.38 | Temporary overlay | No |
| 26 | Arpeggio Screen | p.40 | Sub-screen | No |
| 27 | Arpeggio Tempo Popup | p.41 | Popup | No |
| 28 | Chord Memory Screen | p.43 | Sub-screen | No |
| 29 | Rhythm Pattern Screen | p.44 | Sub-screen | No |
| 30 | Rhythm Pattern Group Write Screen | p.46 | Sub-screen | No |
| 31 | Rhythm Pattern Tempo Popup | p.46 | Popup | No |

---

## Detailed Screen Entries

---

### Scene Select Screen

- **Manual Page**: p.28
- **Accessed Via**: Press the [SCENE SELECT] button
- **Screen Type**: Main screen
- **Layout**: Full-screen grid layout. Top: status bar (Menu icon, "SCENE SELECT" label, beat indicator 4/4, tempo, locator 001-01-000, play/stop status, current pad mode "SAMPLE PAD"). Below status bar: scene number and name in large text (e.g., "A001:Homecoming"), followed by "Memo" line showing tone type info ("Layer; SuperNATURAL Acoustic Piano; Synth Pad"). Main area: 4x4 grid of scene icons (16 total). Each icon tile shows: scene number (e.g., A001), scene name, level indicator (e.g., "LEV: 80"), and indicators like "SONG", "PTN" when applicable. Right edge: arrow button to show next/previous 16 scenes. Bottom bar: shows Quick Edit parameter name and value for [E1]-[E6] knobs (e.g., "Stereo Width 100"). Top-right corner: EDIT button, search icon (magnifying glass), rating icon (star).
- **Key Elements**:
  - Scene number + scene name (large, colored header)
  - Memo line (tone type description)
  - 4x4 scene grid (touchable icons, selected scene is highlighted/colored)
  - Level indicators on each scene tile
  - SONG/PTN indicators on applicable scenes
  - Left/right page arrows (touch the left/right edge to navigate)
  - Effect status pills in status bar: IFX1, IFX2, CHO, REV, CMP, MEQ, VOC
  - EDIT, Search (Q), Rating (star) buttons in top-right
  - Quick Edit parameter bar at bottom (maps to E1-E6 knobs)
- **Interactive Elements**:
  - Touch any scene icon to select it (selected scene becomes colored)
  - Touch left/right arrows at screen edges to page through scenes (16 at a time)
  - Touch EDIT to enter edit mode for rating
  - Touch search icon (Q) to enter text search
  - Touch rating icon (star) to filter by rating
  - E1-E6 knobs: Quick Edit parameters (bottom bar, parameter varies by tone type; press knob to switch parameter)
  - [ENTER] button opens Bank Select popup
- **Currently Implemented?**: Yes -- implemented as `home` screen type via `SceneSelectScreen` component
- **Notes**: This is the default/home screen. The 4x4 grid supports paging through banks of 16 scenes. Banks are A (A001-A128), B (B001-B128), C (C001-C128), D (D001-D128). Our implementation shows a simplified version without the full 4x4 interactive grid or page arrows.

---

### Bank Select Popup

- **Manual Page**: p.28
- **Accessed Via**: From Scene Select screen, press the [ENTER] button
- **Screen Type**: Popup / overlay
- **Layout**: Small centered popup overlaying the Scene Select screen. Shows "BANK SELECT" title with four touchable bank buttons (A, B, C, D) in a horizontal row. The underlying Scene Select screen remains visible but dimmed behind the popup.
- **Key Elements**:
  - "BANK SELECT" title
  - Four bank buttons: A, B, C, D
  - Bank ranges: A = A001-A128, B = B001-B128, C = C001-C128, D = D001-D128
- **Interactive Elements**:
  - Touch A/B/C/D to switch banks
  - Background scene grid still partially visible
- **Currently Implemented?**: No
- **Notes**: Simple modal overlay. After selecting a bank, the Scene Select screen updates to show scenes from that bank.

---

### Scene Search (Text) -- Keyboard Entry Screen

- **Manual Page**: p.29
- **Accessed Via**: From Scene Select screen, touch the search symbol (magnifying glass icon / Q)
- **Screen Type**: Overlay (on-screen keyboard)
- **Layout**: On-screen QWERTY keyboard overlay. Top area still shows Scene Select header. Keyboard takes up bottom portion of display. Shows: hit count (e.g., "S12 HIT"), QWERTY letter rows, number row (1-9, 0), special characters row, Shift button, SONG/PTN filter button, Space bar, left/right cursor arrows (<, >), Back/Clear buttons, and CANCEL/OK action buttons.
- **Key Elements**:
  - Hit count display (e.g., "S12 HIT" -- number of matching scenes)
  - Text input field showing entered text
  - QWERTY keyboard layout (3 rows of letters)
  - Number row (1-9, 0)
  - Special characters row (!@#$ etc.)
  - Shift button (toggle case)
  - SONG/PTN button (filter to scenes with songs/patterns)
  - Space bar
  - Cursor arrows (< >) for positioning
  - Back (backspace) and Clear/Scene/All buttons
  - CANCEL and OK buttons
- **Interactive Elements**:
  - Touch keys to type search text
  - Touch SONG/PTN to pre-filter by song/pattern content (E1)
  - Touch Shift for uppercase
  - Touch Back to delete last character
  - Touch Clear/Scene/All to clear text
  - [E6] OK to confirm search
  - CANCEL to abort
- **Currently Implemented?**: No
- **Notes**: The same keyboard layout is reused for Tone Search (p.32). After pressing OK, only matching scenes are shown in the Scene Select grid. Touch the search symbol again to clear results.

---

### Scene Search Results

- **Manual Page**: p.29
- **Accessed Via**: After entering text in Scene Search and pressing OK
- **Screen Type**: Main screen (filtered view of Scene Select)
- **Layout**: Identical to Scene Select screen, but the 4x4 grid only shows scenes whose names contain the search text. Empty grid slots appear blank. The search icon remains active/highlighted.
- **Key Elements**:
  - Same as Scene Select but with filtered scene set
  - Scenes from multiple banks may appear (e.g., A012, A088, B091, etc.)
  - Empty grid positions where non-matching scenes would be
- **Interactive Elements**:
  - Same as Scene Select screen
  - Touch the search symbol to clear the filter and return to full scene list
- **Currently Implemented?**: No
- **Notes**: Results span across all banks. Touch the search symbol to clear the search results.

---

### Scene Rating Edit Mode

- **Manual Page**: p.29
- **Accessed Via**: In the Scene Select screen, select a scene, then touch <EDIT>
- **Screen Type**: Main screen (edit mode variant of Scene Select)
- **Layout**: Scene Select screen with EDIT button highlighted/active. The selected scene is ready for rating assignment. The bottom Quick Edit bar area is active for the rating knob.
- **Key Elements**:
  - Same as Scene Select screen
  - EDIT button highlighted (active state)
  - Rating knob [E4] active for assigning rating
  - <WRITE> touch target to save the rating
- **Interactive Elements**:
  - Turn [E4] Scene Rating knob to assign rating (three levels: star, two stars, three stars)
  - Touch <WRITE> to save the rating to the scene
  - Press [EXIT] to cancel without saving
- **Currently Implemented?**: No
- **Notes**: Ratings are stored per-scene. The setting is overwritten onto the current scene when you touch <WRITE>, then returns to Scene Select. If you decide not to save, press [EXIT].

---

### Scene Rating Filter

- **Manual Page**: p.29
- **Accessed Via**: In the Scene Select screen, touch the rating symbol (star icon)
- **Screen Type**: Main screen (filtered view of Scene Select)
- **Layout**: Same as Scene Select screen, but only scenes with a rating assigned are displayed in the 4x4 grid. The rating symbol is highlighted to indicate the filter is active.
- **Key Elements**:
  - Rating symbol (star icon) highlighted in top-right area
  - 4x4 grid showing only rated scenes
  - Scenes without ratings are excluded
- **Interactive Elements**:
  - Touch scene icons to select
  - Touch the rating symbol again to clear the filter and return to full scene list
- **Currently Implemented?**: No
- **Notes**: Shows scenes from current bank that have ratings. Different from Scene Search in that it filters by rating presence rather than text.

---

### Quick Edit Bar

- **Manual Page**: p.30
- **Accessed Via**: Available on Scene Select screen and Zone View screen; activated by turning any [E1]-[E6] function knob below the display
- **Screen Type**: Overlay / bar (bottom portion of screen)
- **Layout**: Horizontal bar at the bottom of the Scene Select or Zone View screen. Shows the name of the parameter corresponding to each of the six knobs (E1-E6). Each knob position shows a parameter label and current value. Pressing a knob switches to a different parameter for that knob position.
- **Key Elements**:
  - Six parameter slots corresponding to E1-E6 knobs
  - Parameter name labels above each knob position
  - Current parameter values
  - "Shows the name of the parameter corresponding to each knob" text area
- **Interactive Elements**:
  - E1-E6 knobs: Turn to adjust the displayed parameter value
  - Press (click) a knob to switch to the next parameter assigned to that position
  - Available parameters vary depending on the tone type
  - For "Drum" tone type, parameters control the instrument selected by pressing a keyboard key
- **Currently Implemented?**: No
- **Notes**: This is not a separate screen but an overlay bar on the Scene Select and Zone View screens. The editable parameters differ depending on the tone type. These quick edit operations edit the parameters of the current zone.

---

### Zone View Screen (1 Zone)

- **Manual Page**: p.31
- **Accessed Via**: Press the [ZONE VIEW] button (cycles through 1 ZONE -> 4 ZONE -> 8 ZONE -> 16 ZONE)
- **Screen Type**: Main screen
- **Layout**: Header shows "ZONE VIEW" with back arrow. Below: Scene number and name (e.g., "A001:Homecoming"). Zone section showing "ZONE 1" label, tone number and name in large text (e.g., "0001:Classic Piano"). Below that: Type (e.g., SN-AP), Bank (e.g., EXSN03), Category Name (e.g., Ac.Piano), Lock icon (category lock toggle). Zone parameter settings row showing numeric values: volume (100), pan (0), two more parameters (0, 0), followed by value (40). Right side: ON/OFF toggles for ZONE EQ, MFX, and ARP target. Below: keyboard range visualization bar showing key range (e.g., "C- G9") with "RANGE" label. Bottom bar: Quick Edit parameters (E1-E6). Right side: DISP dropdown to switch number of zones shown.
- **Key Elements**:
  - Back arrow (returns to Scene Select)
  - "ZONE VIEW" title
  - Scene number and name
  - Zone number label ("ZONE 1")
  - Cursor position indicator
  - Tone number and name (large, prominent text)
  - Type, Bank, Category Name labels
  - Lock icon (Category Lock -- toggleable UNLOCK/LOCK)
  - Zone parameter values (volume, pan, etc.)
  - ON/OFF buttons: Z.EQ (Zone EQ), MFX (Multi Effects), ARP (Arpeggio target)
  - Key Range bar with piano-key visualization and note labels (e.g., "C- G9")
  - Effect status indicators (IFX1, IFX2, CHO, REV, CMP, MEQ, VOC) -- touchable to toggle on/off
  - DISP dropdown (right side) to switch between 1/4/8/16 zone views
  - Quick Edit bar at bottom
- **Interactive Elements**:
  - Touch effect status indicators (IFX1, IFX2, CHO, REV) to turn each effect on/off
  - Touch DISP number to switch zone view count (1/4/8/16)
  - Touch Z.EQ, MFX, ARP buttons to toggle on/off
  - Touch Lock icon to toggle Category Lock (UNLOCK/LOCK)
  - Move cursor to tone name area and use [VALUE] dial or [INC][DEC] to select a tone
  - Move cursor to zone parameters to edit volume, pan, etc.
  - Move cursor to KEY RANGE and edit LOWER/UPPER bounds
  - E1-E6 knobs: Quick Edit parameters (varies by tone type)
  - Press [ZONE SELECT] to light it, then press ZONE SELECT [1]-[8] to choose current zone
  - Tone category buttons [1]-[16] to select tone category
- **Currently Implemented?**: Yes -- implemented as `zone-view` screen type via `ZoneViewScreen` component with `viewMode: 1`
- **Notes**: Each press of [ZONE VIEW] button cycles: 1 ZONE -> 4 ZONE -> 8 ZONE -> 16 ZONE. The 1 Zone view shows the most detail. The cursor can be moved to different fields for editing. When Category Lock is set to "LOCK", using [VALUE]/[INC][DEC] switches tones within the currently selected category only.

---

### Zone View Screen (4 Zone)

- **Manual Page**: p.31 (shown in right column)
- **Accessed Via**: Press [ZONE VIEW] button (second press from 1 Zone, or cycle to 4 Zone)
- **Screen Type**: Main screen
- **Layout**: Shows 4 zone rows simultaneously. Each row shows: zone number, tone name, volume, key range bar. The current zone row is highlighted. Scene name at top. More compact than 1 Zone view -- each row is a summary line.
- **Key Elements**:
  - 4 zone rows showing zone summaries
  - Current zone highlighted
  - Tone name, volume, key range per zone
  - Zone ON/OFF status visible per zone
  - Key range visualization bars per zone
- **Interactive Elements**:
  - Touch/select a zone row to make it the current zone
  - Cursor navigation between zone rows
  - DISP dropdown to switch view mode
- **Currently Implemented?**: Yes -- implemented as `zone-view` with `viewMode: 4`
- **Notes**: Shown on p.31 right column as "4 ZONE VIEW" thumbnail. Shows layered or split zone configurations clearly.

---

### Zone View Screen (8 Zone)

- **Manual Page**: p.31 (shown in right column)
- **Accessed Via**: Press [ZONE VIEW] button (third press, or cycle to 8 Zone)
- **Screen Type**: Main screen
- **Layout**: Shows 8 zone rows. Each row is more compact, showing zone number, tone name, and key range bar. Similar to 4 Zone but fitting 8 rows.
- **Key Elements**:
  - 8 zone summary rows
  - Abbreviated info per zone (zone number, tone name, range bar)
  - Current zone highlighted
- **Interactive Elements**:
  - Touch/select a zone row
  - DISP dropdown
- **Currently Implemented?**: Yes -- implemented as `zone-view` with `viewMode: 8`
- **Notes**: Shown as thumbnail on p.31. More compact display to fit 8 zones.

---

### Zone View Screen (16 Zone)

- **Manual Page**: p.31 (shown in right column)
- **Accessed Via**: Press [ZONE VIEW] button (fourth press, or cycle to 16 Zone)
- **Screen Type**: Main screen
- **Layout**: Shows all 16 zones in a very compact grid. Minimal info per zone. Two-column layout to fit all 16 zones.
- **Key Elements**:
  - 16 zone entries in compact grid/list
  - Zone number and basic tone info per entry
  - Current zone highlighted
- **Interactive Elements**:
  - Touch/select a zone
  - Use [ZONE 1-8/9-16] button to switch between zone groups
  - DISP dropdown
- **Currently Implemented?**: Yes -- implemented as `zone-view` with `viewMode: 16`
- **Notes**: Most compact view. Useful for complex multi-zone scenes.

---

### Tone List Screen

- **Manual Page**: p.31-32
- **Accessed Via**: From Zone View screen, move cursor to tone number/name area and press [ENTER] button
- **Screen Type**: Sub-screen / full overlay
- **Layout**: Full-screen list view. Top: back arrow, "TONE LIST" title, zone indicator (e.g., "ZONE2"), bank selector pulldown menu (e.g., "8th Peak"). Category tabs row: two rows of tabs showing tone type categories (Synth FX, Synth Seq/Pop, Phrase, Pulsating, Beat & Groove, Hit, Sound FX, Stack, Zone). Below tabs: three-column tone list showing tones with their type prefix (e.g., "Z-Core PR-A"), tone number, and tone name. Cursor highlights the selected tone. Bottom bar: PAGE indicator (e.g., "1/4"), search icon (Q), rating icon (star), Rating value (e.g., "0"), CANCEL button, OK button.
- **Key Elements**:
  - Back arrow and "TONE LIST" title
  - Zone indicator (which zone you're selecting a tone for)
  - Pulldown menu (bank/category group selector)
  - Two rows of category tabs (touchable): groups like Synth FX, Synth Seq/Pop, Phrase, Pulsating, Beat & Groove, Hit, Sound FX, Stack, Zone
  - Three-column tone list with type prefix, number, and name
  - Cursor for selecting a tone
  - PAGE indicator and page navigation [E1]
  - Search icon (Q) for text search
  - Rating icon (star) for rating filter
  - Rating value display
  - CANCEL and OK buttons
- **Interactive Elements**:
  - Touch a category tab to filter by category
  - Touch the pulldown menu to select a category group from a list
  - PAGE [E1] knob to switch pages within the selected category
  - Select a tone using cursor/[VALUE] dial
  - [E6] OK to confirm selection and return to Zone View
  - [E5] CANCEL to cancel and return to Zone View
  - [ENTER] button also confirms
  - Touch search icon (Q) to enter text search
  - Touch rating icon (star) to filter by rating
  - [E4] Rating knob to assign rating
- **Currently Implemented?**: Yes -- implemented as `tone-select` screen type via `ToneSelectScreen` component within `DisplayScreen.tsx`
- **Notes**: This is the main tone browsing interface. Category tabs change which group of tones is shown. Our implementation shows a simplified version with fewer category tabs and a basic list. The full hardware version has extensive category grouping with pulldown menus for subcategory selection.

---

### Tone Search (Text) -- Keyboard Entry Screen

- **Manual Page**: p.32
- **Accessed Via**: From the Tone List screen, touch the search symbol (magnifying glass / Q)
- **Screen Type**: Overlay (on-screen keyboard, same layout as Scene Search)
- **Layout**: Identical QWERTY keyboard overlay as Scene Search (p.29). Shows on top of the Tone List screen. Input field shows typed text, hit count display (e.g., "24 HIT"). Same keyboard layout: QWERTY rows, number row, special chars, Shift, Space, cursor arrows, Back, Clear/Scene/All, CANCEL, OK.
- **Key Elements**:
  - Same keyboard layout as Scene Search
  - Text input field with search term (e.g., "pad")
  - Hit count (e.g., "24 HIT")
  - All standard keyboard keys
- **Interactive Elements**:
  - Same as Scene Search keyboard
  - [E6] OK to search
  - Results are filtered within the currently selected category
- **Currently Implemented?**: No
- **Notes**: Searches within the currently selected category of tones. Touch the search symbol to clear results. If you select a different category tab, another search is done within that category. Use pulldown menu to search in a different category group. Select "All Category" to search across all categories.

---

### Tone Search Results

- **Manual Page**: p.32
- **Accessed Via**: After entering text in Tone Search and pressing OK
- **Screen Type**: Sub-screen (filtered view of Tone List)
- **Layout**: Same as Tone List but title shows "TONE LIST (Search)" and only matching tones are displayed. List may be shorter than full tone list.
- **Key Elements**:
  - "TONE LIST (Search)" title
  - Filtered tone list showing only matches
  - Category tabs still visible
  - Same footer with PAGE, search, rating, CANCEL, OK
- **Interactive Elements**:
  - Same as Tone List
  - Touch search symbol to clear search results
  - Touch a different category tab to search within that category
- **Currently Implemented?**: No
- **Notes**: Search results are scoped to the currently selected category. To search all categories, select "All Category" from the pulldown menu.

---

### Tone Rating Edit

- **Manual Page**: p.32
- **Accessed Via**: In the Tone List screen, select a tone, then turn [E4] Rating knob
- **Screen Type**: Sub-screen (edit mode within Tone List)
- **Layout**: Same as Tone List screen. The Rating value at the bottom changes as you turn [E4]. Stars appear next to the rating value (one to three stars).
- **Key Elements**:
  - Same as Tone List
  - Rating value highlighted/changing (bottom area)
  - Star display (one to three stars)
- **Interactive Elements**:
  - [E4] Rating knob to assign 1-3 stars
  - Rating is automatically saved when you exit the Tone List screen
- **Currently Implemented?**: No
- **Notes**: Rating values are saved automatically. Even if a rating is assigned, tones that can only be selected for specific zones (such as VTW tones) will not appear in search results unless the current zone uses the appropriate tone type.

---

### Tone Rating Filter

- **Manual Page**: p.33
- **Accessed Via**: In the Tone List screen, touch the rating symbol (star icon)
- **Screen Type**: Sub-screen (filtered view of Tone List)
- **Layout**: Same as Tone List but showing only tones with a rating assigned. Title area may show filter indicator. List is typically much shorter.
- **Key Elements**:
  - Rating symbol highlighted
  - Filtered tone list showing only rated tones
  - Stars shown next to rated tones
- **Interactive Elements**:
  - Touch rating symbol again to clear the filter
  - Touch a different category tab to search rated tones in that category
  - Pulldown menu to search a different category group
- **Currently Implemented?**: No
- **Notes**: Only shows tones with ratings. Touch the rating symbol to clear results. Category tab and pulldown menu interactions still apply.

---

### Single Tone Play (Scene Select Variant)

- **Manual Page**: p.34
- **Accessed Via**: From Scene Select screen, select a scene, then press the [SINGLE TONE] button
- **Screen Type**: Main screen (variant of Scene Select)
- **Layout**: Scene Select screen with Scene A016 "SINGLE ZONE PLAY" highlighted. The display shows the same 4x4 grid but the A016 slot is specially highlighted to indicate Single Tone Play mode is active. Only ZONE 1 sound is heard. An acoustic piano tone is selected.
- **Key Elements**:
  - Scene Select grid with "SINGLE ZONE PLAY" scene highlighted
  - A016 slot labeled "Single Tone Play"
  - Indication that only Zone 1 is active
- **Interactive Elements**:
  - Select a tone and play it
  - Press [SINGLE TONE] button again to exit (triggers confirm popup)
- **Currently Implemented?**: No
- **Notes**: Single Tone Play simplifies the Fantom to use only one zone with one tone. The Zone View screen (1 ZONE VIEW) appears after activation. Pressing [SINGLE TONE] again triggers the "Set Single Tone" confirmation popup. Alternative: directly select Scene A016 "Single Tone Play".

---

### Single Zone Play Confirm Popup

- **Manual Page**: p.34
- **Accessed Via**: While in Single Tone Play mode, press the [SINGLE TONE] button again
- **Screen Type**: Popup
- **Layout**: Small centered popup overlay on the Zone View screen. Shows a "WARNING" header in yellow/orange. Title: "Set Single Tone". Message: "You have made changes to the scene. Do you want to save it?" Three buttons at bottom: YES [E4], NO [E5], CANCEL [E6].
- **Key Elements**:
  - "WARNING" header
  - "Set Single Tone" title
  - Save confirmation message
  - YES / NO / CANCEL buttons
- **Interactive Elements**:
  - [E4] YES: saves changes, proceeds to Scene Write screen
  - [E5] NO: returns to the state of step 3 (Single Tone Play mode without saving)
  - [E6] CANCEL: cancels the operation
- **Currently Implemented?**: No
- **Notes**: This is a save-confirmation dialog specific to Single Tone Play. Selecting YES leads to the Scene Write screen (p.56). Similar pattern to the Write screen but with Warning styling.

---

### Layer Setup (Zone View with Layered Zones)

- **Manual Page**: p.35
- **Accessed Via**: Press [ZONE VIEW] button after setting up layered zones (ZONE SELECT dark + ZONE INT/EXT buttons lit red for desired zones)
- **Screen Type**: Main screen (variant of Zone View, typically 4 Zone view)
- **Layout**: Zone View (4 Zone) showing multiple zones layered together. The header shows "Current Zone" indicator. Each zone row shows: zone number, tone number and name, type/bank/category, volume, key range (all set to full range C- to G9 for layers). Layered zones are indicated by their ZONE INT/EXT buttons being lit red. The "Layered zone" label appears pointing to zones that are layered.
- **Key Elements**:
  - "Current Zone" indicator showing which zone is being edited
  - "Layered zone" indicator
  - Multiple zone rows with identical key ranges (all C- to G9 for full layer)
  - Each zone showing its own tone selection
  - Volume values per zone
- **Interactive Elements**:
  - Switch current zone and select a tone for each zone
  - Same Zone View interactions apply
  - ZONE SELECT buttons to choose which zone to edit
- **Currently Implemented?**: Partial -- Zone View is implemented, but layer-specific indicators (Current Zone label, Layered zone label) are not explicitly shown
- **Notes**: Setting up layers involves: (1) ZONE SELECT button dark, (2) press ZONE INT/EXT [1]-[8] to light desired zones red, (3) ZONE SELECT on, (4) select which zone is "current zone". When ZONE INT/EXT Control is "Advanced", current zone lights green instead. The display itself is a standard Zone View but the zone configuration reflects layering.

---

### Split Setup (Zone View with Split Zones)

- **Manual Page**: p.36
- **Accessed Via**: Press [ZONE VIEW] button after enabling split (press [SPLIT] button to light it)
- **Screen Type**: Main screen (variant of Zone View)
- **Layout**: Zone View (4 Zone) showing zones with split key ranges. The header shows "Current Zone". Zone rows show different key ranges reflecting the split setup. The split zones are labeled "Split zones" with a bracket indicator. For a basic two-way split: ZONE 1 gets the high range, ZONE 4 gets the low range.
- **Key Elements**:
  - "Current Zone" indicator
  - "Split zones" bracket/indicator
  - Zone rows with different key ranges (e.g., Zone 1: upper range, Zone 4: lower range)
  - Split point visible in key range bars
- **Interactive Elements**:
  - Hold ZONE SELECT [1] to change the tone of the high range
  - Hold ZONE SELECT [4] to change the tone of the low range
  - Same Zone View interactions
- **Currently Implemented?**: Partial -- Zone View is implemented with key ranges, but split-specific indicators and auto-split configuration are not explicitly handled
- **Notes**: When [SPLIT] button is lit, ZONE 1 plays high range and ZONE 4 plays low range by default. The split point key is included in the ZONE 1 section. Canceling split ([SPLIT] button dark) resets key ranges to default (C- to G9) and layers ZONE 1 and 4. The [SPLIT] button lights automatically whenever any zone's KEY RANGE differs from the default.

---

### Split Point Display

- **Manual Page**: p.36
- **Accessed Via**: While holding down the [SPLIT] button, press a key on the keyboard
- **Screen Type**: Temporary overlay
- **Layout**: A temporary display showing the split point note. Appears while [SPLIT] button is held. When you press a key, the split point is shown on screen. When you release [SPLIT], the previous display reappears.
- **Key Elements**:
  - Split point note name
  - Temporary display (only visible while [SPLIT] is held + key pressed)
- **Interactive Elements**:
  - Press any key while holding [SPLIT] to set that key as the new split point
  - Release [SPLIT] to return to previous display
- **Currently Implemented?**: No
- **Notes**: The split-point key is included in the ZONE 1 section. This is a transient display, not a persistent screen. The manual mentions the split point is shown but doesn't provide a detailed screenshot of this overlay.

---

### Key Range Setup (Zone View with LOWER/UPPER)

- **Manual Page**: p.37
- **Accessed Via**: In the Zone View screen, move the cursor to KEY RANGE area, then set KEYBOARD RANGE LOWER/UPPER values
- **Screen Type**: Main screen (Zone View with KEY RANGE cursor active)
- **Layout**: Zone View (4 Zone) with the cursor positioned on the KEY RANGE parameters. Two vertical sliders/fields are shown on the right side: LOWER and UPPER, allowing precise key range editing. Each zone row shows its key range bar. The "Current Zone" indicator is visible at top.
- **Key Elements**:
  - Zone View with 4 zones visible
  - LOWER and UPPER slider/parameter fields (right side)
  - Key range bars per zone
  - Current Zone indicator
  - Parameter table: KEYBOARD RANGE LOWER (sets lower limit), KEYBOARD RANGE UPPER (sets upper limit)
- **Interactive Elements**:
  - Move cursor to LOWER or UPPER field
  - Use [VALUE] dial or [INC][DEC] to adjust the key range limits
  - Changes automatically light the [SPLIT] button
  - Hold [SHIFT] + press [SPLIT] to access KEY RANGE screen of ZONE EDIT (alternative method)
- **Currently Implemented?**: Yes -- implemented as `key-range` screen type via `KeyRangeScreen` component
- **Notes**: Editing KEYBOARD RANGE LOWER/UPPER automatically lights the [SPLIT] button. An alternative access method: hold [SHIFT] and press [SPLIT] to open the KEY RANGE screen in ZONE EDIT (Parameter Guide reference). Our implementation shows a simplified key range editor.

---

### Key Range Edit (Zone Edit Sub-screen)

- **Manual Page**: p.37 (mentioned, details in Parameter Guide)
- **Accessed Via**: Hold [SHIFT] button and press the [SPLIT] button
- **Screen Type**: Sub-screen (within Zone Edit)
- **Layout**: Opens the KEY RANGE screen of ZONE EDIT. Full parameter editing screen for key range settings. Layout details are in the Parameter Guide PDF.
- **Key Elements**:
  - Zone Edit context
  - KEY RANGE parameters
  - Full editing interface for key range bounds
- **Interactive Elements**:
  - Edit LOWER and UPPER key range values
  - Navigate and edit with cursor, [VALUE] dial, [INC][DEC]
- **Currently Implemented?**: No
- **Notes**: This is part of the Zone Edit parameter screens (covered in the Parameter Guide). Mentioned here as an alternative way to access key range editing.

---

### Transpose Display

- **Manual Page**: p.38
- **Accessed Via**: Hold down the [TRANSPOSE] button and press the OCTAVE [DOWN] or [UP] button
- **Screen Type**: Temporary overlay
- **Layout**: The screen temporarily shows the transpose setting value. The display updates to show "Transpose" parameter with its current value (-5 to +6, in semitone steps).
- **Key Elements**:
  - "Transpose" parameter name
  - Value display (-5 to +6)
  - Temporary display (reverts when buttons released)
- **Interactive Elements**:
  - OCTAVE [DOWN] button: decrease transpose by 1 semitone
  - OCTAVE [UP] button: increase transpose by 1 semitone
  - Hold [TRANSPOSE] + press both [DOWN] and [UP] simultaneously to reset to 0
  - Press [TRANSPOSE] alone to toggle transpose on/off (lit = active with previous value)
- **Currently Implemented?**: No
- **Notes**: The transpose value persists until toggled off. Press [TRANSPOSE] once to make it go dark (off). Press again to re-enable with the previously set value. This is a temporary overlay shown on whatever screen is currently active.

---

### Octave Display

- **Manual Page**: p.38
- **Accessed Via**: Press the OCTAVE [DOWN] or [UP] button (without holding TRANSPOSE)
- **Screen Type**: Temporary overlay
- **Layout**: The screen temporarily shows the octave setting value. Shows "Octave" parameter with its current value (-3 to +3).
- **Key Elements**:
  - "Octave" parameter name
  - Value display (-3 to +3)
  - Temporary display
- **Interactive Elements**:
  - OCTAVE [DOWN] button: decrease by 1 octave
  - OCTAVE [UP] button: increase by 1 octave
  - Press both [DOWN] and [UP] simultaneously to reset to 0
- **Currently Implemented?**: No
- **Notes**: Similar temporary overlay as Transpose Display. The octave shift applies to the entire keyboard range.

---

### Arpeggio Screen

- **Manual Page**: p.40, 42
- **Accessed Via**: Press the [ARPEGGIO] button (when button lights up, the screen appears)
- **Screen Type**: Sub-screen
- **Layout**: Full parameter list screen with back arrow. Header shows "ARPEGGIO". Main area is a vertical parameter list with parameter names on the left and values on the right. Parameters shown (top to bottom): STYLE (e.g., "P001: NOTE VALUES"), Hold (OFF/ON), Variation (e.g., 4), Motif (e.g., UP), Keyboard Velocity (REAL or 1-127), Octave Range (e.g., 0), Accent Rate (e.g., 100%), Shuffle Rate (e.g., 50%), Shuffle Resolution (e.g., 16TH). Bottom bar: [E1] HOLD button, [E6] EXIT button.
- **Key Elements**:
  - "ARPEGGIO" title with back arrow
  - STYLE field (arpeggio style/pattern number and name, e.g., "P001: NOTE VALUES")
  - Parameter list:
    - Hold: OFF / ON
    - Variation: number (selects variation within style)
    - Motif: UP / DOWN / UP&DOWN / RANDOM / NOTE ORDER / GLISSANDO / CHORD / AUTO1 / AUTO2 / PHRASE
    - Keyboard Velocity: REAL or 1-127
    - Octave Range: -3 to +3
    - Accent Rate: 0-100%
    - Shuffle Rate: 0-100%
    - Shuffle Resolution: 16TH or 8TH
  - Bottom bar: HOLD [E1], EXIT [E6]
- **Interactive Elements**:
  - Move cursor to any parameter and edit with [VALUE] dial or [INC][DEC]
  - [E1] HOLD: toggles arpeggio hold on/off
  - [E6] EXIT: returns to previous screen
  - Move cursor to "STYLE" and change the arpeggio style (P001-P128)
  - Hold [SHIFT] + press [ARPEGGIO] to access this screen without affecting arpeggio on/off status
- **Currently Implemented?**: No
- **Notes**: Arpeggio settings are saved in the scene. The STYLE parameter (P001-P128) defines the basic arpeggio pattern. The arpeggio must first be enabled per zone via the ARP toggle in Zone View. The Zone View screen shows ARP on/off status in all view modes (1/4/8/16). Arpeggio can be enabled for multiple zones simultaneously. Arpeggio tempo is shared with the rhythm pattern tempo (p.107) and the sequencer tempo (p.111).

---

### Arpeggio Tempo Popup (Tempo Screen)

- **Manual Page**: p.41
- **Accessed Via**: Press the [TEMPO] button (while Arpeggio screen is active, or anytime)
- **Screen Type**: Popup
- **Layout**: Small popup overlay on the current screen. Shows "TEMPO" title with an X close button. Main content: "Tempo" label with the current tempo value (e.g., "120.00"). Bottom bar: [E5] CLICK (toggle metronome click), [E6] CLOSE.
- **Key Elements**:
  - "TEMPO" title with close (X) button
  - Tempo value display (e.g., "120.00")
  - CLICK toggle [E5]
  - CLOSE button [E6]
- **Interactive Elements**:
  - [VALUE] dial or [INC][DEC] to adjust tempo
  - Hold [SHIFT] while adjusting to edit decimal digits
  - [E5] CLICK: toggles metronome click at specified tempo
  - [E6] CLOSE: closes the popup
  - Tap [TEMPO] button at desired interval (tap tempo -- at least 3 taps at quarter-note intervals)
- **Currently Implemented?**: No
- **Notes**: The tempo set here is shared between arpeggio (p.41), rhythm pattern (p.46/107), and sequencer (p.111). The tempo value is stored in the scene. This popup appears on top of whatever screen is currently displayed. Identical popup is used from the Rhythm Pattern screen (p.46).

---

### Chord Memory Screen

- **Manual Page**: p.43
- **Accessed Via**: Press the [CHORD MEMORY] button (when button lights up, the screen appears)
- **Screen Type**: Sub-screen
- **Layout**: Full parameter list screen with back arrow. Header shows "CHORD MEMORY". Main area is a vertical parameter list. Parameters: CHORD FORM (e.g., "01:Pop 1"), Chord Memory Key (e.g., C), Rolled Chord Sw (ON/OFF), Rolled Chord Type (UP/DOWN/ALTERNATE). Bottom bar: [E6] EXIT.
- **Key Elements**:
  - "CHORD MEMORY" title with back arrow
  - CHORD FORM field (01-17, with name like "01:Pop 1")
  - Parameter list:
    - Chord Memory Key: G to F# (key of the chord)
    - Rolled Chord Sw: ON / OFF (sequential vs simultaneous notes)
    - Rolled Chord Type: UP / DOWN / ALTERNATE
  - EXIT button [E6]
- **Interactive Elements**:
  - Move cursor to "CHORD FORM" and change the chord form (01-17)
  - Edit Chord Memory Key with [VALUE] dial or [INC][DEC]
  - Toggle Rolled Chord Sw ON/OFF
  - Select Rolled Chord Type: UP (low to high), DOWN (high to low), ALTERNATE (alternating order)
  - [E6] EXIT: returns to previous screen
  - Hold [SHIFT] + press [CHORD MEMORY] to access without affecting chord memory on/off status
- **Currently Implemented?**: No
- **Notes**: Chord memory settings are saved in the scene. CHORD FORM (01-17) selects the chord set assigned to the C-B keys (see "Chord Memory List" p.176). ARP must be "ON" in the Zone View for the zone you want to use chord memory with. Chord Memory and Arpeggio can be combined for single-finger arpeggio chords. The Rolled Chord feature makes notes sound sequentially (like strumming a guitar), with force-dependent speed.

---

### Rhythm Pattern Screen

- **Manual Page**: p.44-45
- **Accessed Via**: Press the [RHYTHM PTN] button
- **Screen Type**: Sub-screen
- **Layout**: Full-screen rhythm pattern interface. Top: back arrow, "RHYTHM PATTERN" title, transport status bar (beat, stop, sample pad mode), measure/beat position (e.g., "01 - 01"). Below: Bank selector ("PRST" for preset, or "USER") and Rhythm Group Number/Name (e.g., "01:ROCK"). Zone section: "ZONE 10" with drum kit image, drum kit number/name (e.g., "0001:LD Std Kit 1"), type info (Drum, PR-A), level knob (LEV: 100). Center: 6 rhythm pattern slots (P001-P006) arranged in a 2x3 grid, each showing: pattern name (Intro, Verse 1, Fill-In 1, Verse 2, Fill-In 2, Ending), number of measures (e.g., "1 Meas", "2 Meas", "4 Meas"), and sub-label (Intro, Pattern A, Pattern B, Pattern C, Pattern D, Ending). Currently playing pattern is highlighted/lit. Bottom bar: [E1] KEY TRIGGER toggle, [E6] LEVEL (drum volume).
- **Key Elements**:
  - "RHYTHM PATTERN" title
  - Bank indicator (PRST / USER)
  - Rhythm Group Number and Name (e.g., "01:ROCK 1")
  - Current playback position (MEAS - BEAT)
  - ZONE 10 section with drum kit image and name
  - Drum kit number/name (e.g., "0001:LD Std Kit 1")
  - Type (Drum) and bank (PR-A) info
  - Level indicator (LEV: 100)
  - 6 rhythm pattern slots (P001-P006):
    - P001: Intro
    - P002: Verse 1 / Pattern A
    - P003: Fill-In 1 / Pattern B
    - P004: Verse 2 / Pattern C
    - P005: Fill-In 2 / Pattern D
    - P006: Ending
  - Measure count per pattern (1 Meas, 2 Meas, 4 Meas)
  - KEY TRIGGER indicator [E1]
  - LEVEL control [E6]
- **Interactive Elements**:
  - Touch a pattern slot (Intro, Verse 1, etc.) to play that rhythm pattern
  - Touch the playing pattern's icon to stop, or press [STOP] button
  - Move cursor to "rhythm group number" (PRST 01:ROCK 1) and use [VALUE]/[INC][DEC] to change rhythm group
  - Move cursor to drum kit number and select a different drum kit
  - Move cursor to pattern fields (Intro-Ending) and use [VALUE]/[INC][DEC] to assign different rhythm patterns
  - [E1] KEY TRIGGER: when ON, rhythm pattern starts when you play a key
  - [E6] LEVEL: controls drum kit volume
  - [RHYTHM PTN] button is lit while pattern is playing
  - Intro auto-transitions to Pattern A; Ending auto-stops after playing
- **Currently Implemented?**: No
- **Notes**: Rhythm pattern settings are saved in the scene. Zone 10 (Drum Kit tone) is used for rhythm patterns. The 6 slots represent a complete song structure: Intro -> Verse -> Fill -> Verse -> Fill -> Ending. Patterns switch at measure boundaries. Rhythm pattern groups come in PRST (preset, read-only) and USER (editable) banks. The tempo is shared with arpeggio and sequencer.

---

### Rhythm Pattern Group Write Screen

- **Manual Page**: p.46
- **Accessed Via**: From Rhythm Pattern screen, press [WRITE] button, then touch <RHYTHM PATTERN GROUP>
- **Screen Type**: Sub-screen
- **Layout**: Centered dialog screen. Shows "RHYTHM PATTERN GROUP WRITE" title with back arrow. Main content: "WRITE SOURCE" label with source group name (e.g., "01:ROCK 1"), downward arrow, "WRITE DESTINATION" label with destination field (e.g., "01:INIT USER GROUP"). Bottom bar: [E1] RENAME, [E5] CANCEL, [E6] OK.
- **Key Elements**:
  - "RHYTHM PATTERN GROUP WRITE" title
  - WRITE SOURCE: shows the group being copied (e.g., "01:ROCK 1")
  - Downward arrow indicator
  - WRITE DESTINATION: editable destination name/slot (e.g., "01:INIT USER GROUP")
  - RENAME button [E1]
  - CANCEL button [E5]
  - OK button [E6]
- **Interactive Elements**:
  - [E1] RENAME: opens keyboard to edit the destination group name
  - [VALUE] dial or [INC][DEC]: select the write-destination slot
  - [E6] OK: executes the write (confirmation message appears)
  - [E5] CANCEL: cancels
  - After OK: confirmation message appears, select [E5] OK again to confirm
- **Currently Implemented?**: No
- **Notes**: The edited rhythm pattern group is temporary until saved. Writing overwrites the existing data in the destination. The write destination is a USER group slot.

---

### Rhythm Pattern Tempo Popup

- **Manual Page**: p.46
- **Accessed Via**: Press the [TEMPO] button while on the Rhythm Pattern screen
- **Screen Type**: Popup
- **Layout**: Identical to the Arpeggio Tempo Popup (p.41). Small popup overlay showing "TEMPO" title, tempo value, CLICK [E5], CLOSE [E6]. Appears on top of the Rhythm Pattern screen.
- **Key Elements**:
  - Same as Arpeggio Tempo Popup
  - "TEMPO" title with X close button
  - Tempo value (e.g., "178.00")
  - CLICK and CLOSE buttons
- **Interactive Elements**:
  - Same as Arpeggio Tempo Popup
  - [VALUE] dial or [INC][DEC] to adjust tempo
  - [E5] CLICK toggle
  - [E6] CLOSE
  - Tap tempo via [TEMPO] button
- **Currently Implemented?**: No
- **Notes**: Same tempo popup used throughout the system. Tempo is shared between arpeggio, rhythm pattern, and sequencer. The tempo value is stored in the scene.

---

## Screen Transition Map

```
Scene Select (home)
  |-- [ENTER] --> Bank Select Popup --> (select bank) --> Scene Select (updated bank)
  |-- Touch search (Q) --> Scene Search Keyboard --> (OK) --> Scene Search Results --> (touch Q) --> Scene Select
  |-- Touch rating (star) --> Scene Rating Filter --> (touch star) --> Scene Select
  |-- Touch EDIT + [E4] --> Scene Rating Edit --> (WRITE) --> Scene Select
  |-- [SINGLE TONE] --> Single Tone Play --> [SINGLE TONE] again --> Single Zone Play Confirm Popup
  |                                                                      |-- YES --> Scene Write (p.56)
  |                                                                      |-- NO --> Single Tone Play
  |                                                                      |-- CANCEL --> Single Tone Play
  |-- [ZONE VIEW] --> Zone View (1 Zone) --> [ZONE VIEW] --> Zone View (4 Zone) --> (8) --> (16) --> (1)...
  |
Zone View (any mode)
  |-- cursor to tone name + [ENTER] --> Tone List
  |     |-- Touch search (Q) --> Tone Search Keyboard --> (OK) --> Tone Search Results
  |     |-- Touch rating (star) --> Tone Rating Filter
  |     |-- [E4] --> Tone Rating Edit
  |     |-- [E6] OK --> Zone View (tone updated)
  |     |-- [E5] CANCEL --> Zone View (no change)
  |-- cursor to KEY RANGE --> Key Range Setup (Zone View variant)
  |-- [SHIFT] + [SPLIT] --> Key Range Edit (Zone Edit sub-screen)
  |-- ARP toggle ON + [ARPEGGIO] --> Arpeggio Screen
  |-- [CHORD MEMORY] --> Chord Memory Screen
  |
Zone View / Scene Select
  |-- E1-E6 knobs --> Quick Edit Bar (overlay on current screen)
  |-- [SPLIT] held + key press --> Split Point Display (temporary)
  |-- [TRANSPOSE] + OCTAVE --> Transpose Display (temporary)
  |-- OCTAVE [DOWN]/[UP] --> Octave Display (temporary)
  |
Arpeggio Screen
  |-- [TEMPO] --> Arpeggio Tempo Popup --> [E6] CLOSE --> Arpeggio Screen
  |-- [E1] HOLD --> toggle hold
  |-- [E6] EXIT --> Zone View
  |
Chord Memory Screen
  |-- [E6] EXIT --> Zone View
  |
Rhythm Pattern Screen
  |-- [TEMPO] --> Rhythm Pattern Tempo Popup --> [E6] CLOSE --> Rhythm Pattern Screen
  |-- [WRITE] + <RHYTHM PATTERN GROUP> --> Rhythm Pattern Group Write Screen
  |     |-- [E6] OK --> Confirmation --> saved
  |     |-- [E5] CANCEL --> Rhythm Pattern Screen
  |-- Touch pattern slot --> plays that pattern
  |-- [E1] KEY TRIGGER toggle
  |-- [E6] LEVEL control
```

---

## Implementation Priority Notes

Screens already implemented (7): Scene Select (`home`), Zone View 1/4/8/16 (`zone-view`), Tone List (`tone-select`), Key Range (`key-range`), Write (`write`), Menu (`menu`), Effect (`effect`).

High-priority candidates for implementation from this section:
1. **Arpeggio Screen** -- Commonly used performance feature, relatively simple parameter list layout
2. **Chord Memory Screen** -- Similar parameter list layout, pairs with Arpeggio
3. **Rhythm Pattern Screen** -- More complex layout but important performance feature
4. **Tempo Popup** -- Shared by Arpeggio, Rhythm Pattern, and Sequencer
5. **Bank Select Popup** -- Simple overlay, enhances Scene Select usability
6. **Quick Edit Bar** -- Already partially visible in Scene Select, formalizing the overlay
7. **Scene/Tone Search** -- On-screen keyboard shared between Scene and Tone search flows
