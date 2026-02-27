import { Tutorial } from '@/types/tutorial';

export const multisampleCreation: Tutorial = {
  id: 'multisample-creation',
  deviceId: 'fantom-08',
  title: 'Multisample Creation — Map Samples Across the Keyboard',
  description:
    'Learn how to build multisamples on the Fantom 08: assign recorded samples to key ranges across the keyboard, adjust area boundaries, fine-tune placement, and save your multisample as a playable tone.',
  category: 'sampling',
  difficulty: 'advanced',
  estimatedTime: '12 min',
  tags: ['sampling', 'multisample', 'keyboard-mapping', 'advanced'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Multisamples',
      instruction:
        'A multisample maps multiple recorded samples across the keyboard so that each key range plays a different sample. This is how realistic instruments are built — for example, a piano multisample uses separate recordings for every few notes to capture the tonal differences across the instrument.',
      details:
        "In this tutorial, you'll open the Multisample Edit screen, view and add key-range areas, assign samples to ranges, adjust boundaries with the E-knobs, switch to Pro view for detailed editing, and save your finished multisample.",
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'You need recorded samples in the Fantom memory before building a multisample. Complete the Sampling Basics tutorial first if you have not recorded any samples yet.',
    },
    {
      id: 'step-2',
      title: 'Open the Sampling Menu',
      instruction:
        'Press the Menu button to open the main menu, then navigate to the SAMPLING submenu using the cursor buttons or Value dial.',
      details:
        'The Multisample Edit screen is accessed through Menu > SAMPLING > MULTISAMPLE menu. The SAMPLING submenu contains all sample-related functions: recording, wave editing, pad assignment, and multisample management.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'SAMPLING',
        menuItems: [
          { label: 'SAMPLING STANDBY' },
          { label: 'KBD SAMPLE' },
          { label: 'PAD SAMPLE' },
          { label: 'SAMPLE PAD' },
          { label: 'MULTISAMPLE', selected: true },
          { label: 'IMPORT/EXPORT' },
        ],
        selectedIndex: 4,
      },
      tipText:
        'You can also access Multisample Edit directly from the Imported Sample List screen by pressing E6 (NEXT).',
    },
    {
      id: 'step-3',
      title: 'Enter Multisample Edit',
      instruction:
        'Press Enter to open the Multisample Edit screen. You will see the keyboard map overview with colored area segments at the top, a two-row keyboard display, and an area list at the bottom.',
      details:
        'The Multisample Edit screen has several regions: the area bar at the top shows colored segments representing sample-to-key-range assignments. Below that are two keyboard rows — a zoomed view and a full 128-note overview. Red keys indicate the currently selected note, and green keys show the selected range. The bottom-right shows an area list table with key ranges and assigned samples.',
      highlightControls: ['enter'],
      panelStateChanges: {
        enter: { active: true },
      },
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1', selected: true },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3' },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
        ],
        selectedIndex: 0,
        statusText: 'E1:Zoom  E2:Pro/Zoom  E3:ShiftAll  E4:ShiftArea  E5:BottomNote  E6:TopNote',
      },
      tipText:
        'The area bar colors match the area list entries. Touch an area segment on the touchscreen to select it directly.',
    },
    {
      id: 'step-4',
      title: 'View Existing Areas',
      instruction:
        'Use the cursor buttons or touch the area bar to browse the existing areas. Each colored segment represents one sample mapped to a key range. Notice how the areas cover different portions of the keyboard without overlapping.',
      details:
        'In this example multisample, three piano samples cover the full keyboard: a low piano sample from C1 to B2, a mid piano sample from C3 to B4, and a high piano sample from C5 to C7. Each area is a different color for easy identification. The waveform display on the bottom-left shows the waveform of the currently selected area.',
      highlightControls: ['cursor-up', 'cursor-down'],
      panelStateChanges: {
        enter: { active: false },
      },
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1' },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3', selected: true },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
        ],
        selectedIndex: 1,
        statusText: 'Area 2 selected — C3 to B4 — PianoMid_C3',
      },
      tipText:
        'A well-built multisample has smooth transitions between areas. Record samples at intervals of a third or fifth for natural-sounding instruments.',
    },
    {
      id: 'step-5',
      title: 'Add a New Area with UTILITY',
      instruction:
        'Press the E6 knob to open the UTILITY tab menu. Select ADD to create a new area. A new empty area will appear in the area list, ready for sample assignment and key range configuration.',
      details:
        'The UTILITY menu provides area management functions: ADD (create new area), DELETE (remove selected area), COPY (duplicate an area), and SORT (reorder areas by key range). When you ADD a new area, it is created with a default single-key range at the current cursor position. You will expand it in the next steps.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1' },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3' },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
          { label: 'Area 4: (new)      | C3-C3  | ---', selected: true },
        ],
        selectedIndex: 3,
        statusText: 'New area added — assign sample and set key range',
      },
      tipText:
        'You can add up to 128 areas in a single multisample. Each area can reference a different sample from the Fantom sample memory.',
    },
    {
      id: 'step-6',
      title: 'Set the Bottom Note with E5',
      instruction:
        'Turn the E5 knob to set the bottom (low) note of the new area to C3. This defines where on the keyboard this sample will start playing.',
      details:
        'E5 shifts the bottom note of the currently selected area. As you turn E5, the green highlighted region on the keyboard display expands or contracts from the bottom. Watch the area list update in real time to reflect the new range. Set the bottom note to C3 for this area.',
      highlightControls: ['function-e5'],
      panelStateChanges: {},
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1' },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3' },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
          { label: 'Area 4: (new)      | C3-C3  | ---', selected: true },
        ],
        selectedIndex: 3,
        statusText: 'Bottom note set to C3 — turn E6 to set top note',
      },
      tipText:
        'Areas can overlap in key range. When areas overlap, the Fantom layers the samples for that key region, which can create rich, blended textures.',
    },
    {
      id: 'step-7',
      title: 'Set the Top Note with E6',
      instruction:
        'Turn the E6 knob to set the top (high) note of the new area to B4. The area now spans a full two octaves from C3 to B4.',
      details:
        'E6 shifts the top note of the currently selected area. The green region on the keyboard display extends upward as you turn E6 clockwise. Setting the top note to B4 gives this area a two-octave range. The area bar at the top updates to show the expanded segment.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1' },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3' },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
          { label: 'Area 4: StringPad  | C3-B4  | StringPad_C3', selected: true },
        ],
        selectedIndex: 3,
        statusText: 'Area 4: C3 to B4 — two-octave range set',
      },
      tipText:
        'For velocity layers, create multiple areas with the same key range but different velocity thresholds. The Fantom selects the sample based on how hard you play.',
    },
    {
      id: 'step-8',
      title: 'Shift Sample Position with E4',
      instruction:
        'Turn the E4 knob to shift the entire area left or right on the keyboard. This moves both the bottom and top notes together, repositioning the sample without changing the range width.',
      details:
        'E4 shifts the current area sample left or right across the keyboard. Unlike E5 and E6 which adjust individual boundaries, E4 moves the entire area as a unit. This is useful when you want to reposition a sample to a different octave while keeping its range width intact. E3 shifts ALL areas together if you need to transpose the entire multisample.',
      highlightControls: ['function-e4'],
      panelStateChanges: {},
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1' },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3' },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
          { label: 'Area 4: StringPad  | D3-C5  | StringPad_C3', selected: true },
        ],
        selectedIndex: 3,
        statusText: 'Area shifted up — D3 to C5 (E3 shifts ALL areas)',
      },
      tipText:
        'Use E3 (Shift All) when you need to transpose the entire multisample up or down without changing the relative positions of areas.',
    },
    {
      id: 'step-9',
      title: 'Switch to Pro View with E2',
      instruction:
        'Press the E2 knob to switch from the standard Zoom view to the Pro view. The Pro view replaces the area list with a detailed per-sample parameter table showing Wave Number, Level, Fine Tune, and Original Key for each area.',
      details:
        'The Pro view gives you granular control over each sample within the multisample. In Pro view, E3 changes the Wave Number (which sample is assigned to the area), E4 adjusts Level (volume), E5 controls Fine Tune (pitch adjustment in cents), and E6 sets the Original Key (the note at which the sample plays at its recorded pitch). This is where you fine-tune the transition between areas.',
      highlightControls: ['function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT PRO',
        menuItems: [
          { label: 'Area 4: StringPad_C3' },
          { label: 'Wave Number: 0042', selected: true },
          { label: 'Level: 127' },
          { label: 'Fine Tune: +00' },
          { label: 'Original Key: C4' },
        ],
        selectedIndex: 1,
        statusText: 'PRO VIEW — E3:Wave  E4:Level  E5:FineTune  E6:OrigKey',
      },
      tipText:
        'Set the Original Key to match the pitch at which the sample was recorded. This ensures the sample plays at the correct pitch on that key without transposition artifacts.',
    },
    {
      id: 'step-10',
      title: 'Write the Multisample',
      instruction:
        'Press the Write button to save your multisample. The Fantom will prompt you to confirm the save. Press Enter to confirm and write the multisample to user memory.',
      details:
        'The Write button stores the multisample with all its area definitions, key ranges, and sample assignments. After writing, the multisample is saved as a user multisample that can be loaded into any Z-Core tone partial. Always write before exiting to avoid losing your work.',
      highlightControls: ['write'],
      panelStateChanges: {
        write: { active: true, ledOn: true, ledColor: '#ff2222' },
      },
      displayState: {
        screenType: 'multisample-edit',
        title: 'MULTISAMPLE EDIT',
        menuItems: [
          { label: 'Area 1: Piano Low  | C1-B2  | PianoLow_C1' },
          { label: 'Area 2: Piano Mid  | C3-B4  | PianoMid_C3' },
          { label: 'Area 3: Piano High | C5-C7  | PianoHi_C5' },
          { label: 'Area 4: StringPad  | D3-C5  | StringPad_C3' },
        ],
        selectedIndex: 0,
        statusText: 'WRITE — Save multisample to user memory?',
      },
      tipText:
        'Multisamples are stored in user sample memory. You can manage and back up your multisamples using the IMPORT/EXPORT function in the Sampling menu.',
    },
    {
      id: 'step-11',
      title: 'Multisample Complete!',
      instruction:
        'Press Exit to return to the home screen. Your multisample is saved and can now be assigned to a Z-Core tone partial. Open any tone edit screen, select a partial, and choose your user multisample as the wave source.',
      details:
        'Congratulations! You have built a multisample on the Fantom 08. Multisamples are the foundation of realistic sampled instruments — each key range plays a different recording, giving you natural tonal variation across the keyboard. From here, you can create more complex multisamples with velocity layers, round-robin variations, and crossfade regions between areas.',
      highlightControls: ['exit'],
      panelStateChanges: {
        write: { active: false, ledOn: false },
        exit: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Multisample saved — ready for tone assignment',
      },
      tipText:
        'To use your multisample in a performance, go to Tone Edit > select a Z-Core partial > set the Wave source to your user multisample. The Multisample View screen (Menu > SAMPLING > MULTISAMPLE) shows all four partials and their keyboard mappings.',
    },
  ],
};
