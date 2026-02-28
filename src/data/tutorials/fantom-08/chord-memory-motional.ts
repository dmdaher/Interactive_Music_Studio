import { Tutorial } from '@/types/tutorial';

export const chordMemoryMotional: Tutorial = {
  id: 'chord-memory-motional',
  deviceId: 'fantom-08',
  title: 'Chord Memory & Motional Pad',
  description:
    'Learn how to use Chord Memory to play full chords from single keys, then use Motional Pad to blend between four zone sounds by dragging an XY pointer. Two powerful performance features that transform your live playing.',
  category: 'performance',
  difficulty: 'intermediate',
  estimatedTime: '10 min',
  tags: ['chord-memory', 'motional-pad', 'performance', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Chord Memory & Motional Pad',
      instruction:
        'In this tutorial you will learn two powerful performance features. Chord Memory plays full chords from single keys — press one note and hear a complete chord. Motional Pad lets you morph between four sounds in real time by dragging an XY pointer.',
      details:
        'Both features are saved per scene and are designed for live performance. Chord Memory works with arpeggios for even more creative possibilities. Motional Pad blends the volume of four zones based on pointer position.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A045',
        sceneName: 'Live Stage',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open Chord Memory',
      instruction:
        'Press the Chord Memory button in the Zone section to open the Chord Memory settings screen.',
      details:
        'The Chord Memory screen shows a vertical parameter list: Chord Form, Chord Memory Key, Rolled Chord Sw, and Rolled Chord Type. Use the cursor and Value dial to navigate and edit parameters.',
      highlightControls: ['chord-memory'],
      panelStateChanges: {
        'chord-memory': { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'chord-memory',
        title: 'CHORD MEMORY',
        menuItems: [
          { label: 'CHORD FORM', value: '01:Pop 1', selected: true },
          { label: 'Chord Memory Key', value: 'C' },
          { label: 'Rolled Chord Sw', value: 'OFF' },
          { label: 'Rolled Chord Type', value: 'UP' },
        ],
        selectedIndex: 0,
      },
      tipText: 'The Chord Memory LED lights up green when the screen is open.',
    },
    {
      id: 'step-3',
      title: 'Set the Chord Form',
      instruction:
        'The cursor is on CHORD FORM. Turn the Value dial to browse the 17 chord forms. Select "01:Pop 1" — a natural-sounding pop chord voicing.',
      details:
        'There are 17 chord forms (01–17) with names like Pop 1, Pop 2, Rock, Jazz, etc. Each form defines a specific chord voicing that is transposed based on the key you press. The form determines the interval structure of the chord.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'chord-memory',
        title: 'CHORD MEMORY',
        menuItems: [
          { label: 'CHORD FORM', value: '01:Pop 1', selected: true },
          { label: 'Chord Memory Key', value: 'C' },
          { label: 'Rolled Chord Sw', value: 'OFF' },
          { label: 'Rolled Chord Type', value: 'UP' },
        ],
        selectedIndex: 0,
      },
      tipText: 'Each chord form produces a different voicing — try them all to find one that fits your style.',
    },
    {
      id: 'step-4',
      title: 'Set the Chord Memory Key',
      instruction:
        'Press the Cursor Down button to move to Chord Memory Key, then turn the Value dial to set the root key to C. This determines which key triggers the root chord with no transposition.',
      details:
        'The Chord Memory Key sets the reference key. When you play this key, you hear the chord form exactly as designed. Other keys transpose the chord up or down. Available keys range from G to F#.',
      highlightControls: ['cursor-down', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'chord-memory',
        title: 'CHORD MEMORY',
        menuItems: [
          { label: 'CHORD FORM', value: '01:Pop 1' },
          { label: 'Chord Memory Key', value: 'C', selected: true },
          { label: 'Rolled Chord Sw', value: 'OFF' },
          { label: 'Rolled Chord Type', value: 'UP' },
        ],
        selectedIndex: 1,
      },
      tipText: 'Setting the key to C means pressing C plays the untransposed chord. Other notes transpose it.',
    },
    {
      id: 'step-5',
      title: 'Enable Rolled Chord',
      instruction:
        'Press the Cursor Down button to move to Rolled Chord Sw, then turn the Value dial to set it to ON. Rolled chords strum the notes sequentially instead of playing them all at once.',
      details:
        'When Rolled Chord is ON, the chord notes are played one after another like a guitar strum or harp glissando. The Rolled Chord Type (UP, DOWN, or ALTERNATE) controls the direction of the strum.',
      highlightControls: ['cursor-down', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'chord-memory',
        title: 'CHORD MEMORY',
        menuItems: [
          { label: 'CHORD FORM', value: '01:Pop 1' },
          { label: 'Chord Memory Key', value: 'C' },
          { label: 'Rolled Chord Sw', value: 'ON', selected: true },
          { label: 'Rolled Chord Type', value: 'UP' },
        ],
        selectedIndex: 2,
      },
      tipText: 'Rolled chords add a natural strumming feel — great for guitar or harp-style parts.',
    },
    {
      id: 'step-6',
      title: 'Exit Chord Memory and Open Motional Pad',
      instruction:
        'Press Exit to leave the Chord Memory screen, then press the Motional Pad button to open the Motional Pad.',
      details:
        'The Motional Pad is a full-screen XY pad that blends the volume of four zones based on a draggable pointer position. Each corner of the pad is assigned to a different zone.',
      highlightControls: ['exit', 'motional-pad'],
      panelStateChanges: {
        'chord-memory': { active: false, ledOn: false },
        'motional-pad': { active: true },
      },
      displayState: {
        screenType: 'motional-pad',
        title: 'MOTIONAL PAD',
        menuItems: [
          { label: 'Area 1 (top-left)', value: 'Zone 1: Concert Grand' },
          { label: 'Area 2 (top-right)', value: 'Zone 2: JP Strings' },
          { label: 'Area 3 (bottom-left)', value: 'Zone 3: Warm Pad' },
          { label: 'Area 4 (bottom-right)', value: 'Zone 4: Bell Synth' },
        ],
        selectedIndex: 0,
        statusText: 'MOTIONAL PAD ON',
      },
      tipText: 'Chord Memory settings are preserved — they remain active when you return to playing.',
    },
    {
      id: 'step-7',
      title: 'Motional Pad Overview',
      instruction:
        'The Motional Pad shows an XY area with four corner zones. Area 1 (top-left), Area 2 (top-right), Area 3 (bottom-left), and Area 4 (bottom-right) each display a zone number and tone name. A circular pointer in the center controls the volume blend.',
      details:
        'Moving the pointer toward a corner increases that zone\'s volume and decreases the others. The center position gives equal volume to all four zones. This creates smooth crossfades between completely different sounds.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'motional-pad',
        title: 'MOTIONAL PAD',
        menuItems: [
          { label: 'Area 1 (top-left)', value: 'Zone 1: Concert Grand' },
          { label: 'Area 2 (top-right)', value: 'Zone 2: JP Strings' },
          { label: 'Area 3 (bottom-left)', value: 'Zone 3: Warm Pad' },
          { label: 'Area 4 (bottom-right)', value: 'Zone 4: Bell Synth' },
        ],
        selectedIndex: 1,
        statusText: 'Pointer: center',
      },
      tipText: 'Each corner can be reassigned to any zone — touch the zone area to change the assignment.',
    },
    {
      id: 'step-8',
      title: 'Drag the Pointer to Blend Sounds',
      instruction:
        'Touch and drag the circular pointer across the XY pad to blend the four zone volumes in real time. Move it toward a corner to hear that zone dominate the mix. Use the Value dial to fine-tune the X position.',
      details:
        'The volume balance changes continuously as you drag. Moving to the top-left corner isolates Zone 1 (Concert Grand), while centering the pointer gives an equal mix of all four sounds. This is ideal for creating evolving textures during a live performance.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'motional-pad',
        title: 'MOTIONAL PAD',
        menuItems: [
          { label: 'Area 1 (top-left)', value: 'Zone 1: Concert Grand' },
          { label: 'Area 2 (top-right)', value: 'Zone 2: JP Strings' },
          { label: 'Area 3 (bottom-left)', value: 'Zone 3: Warm Pad' },
          { label: 'Area 4 (bottom-right)', value: 'Zone 4: Bell Synth' },
        ],
        selectedIndex: 2,
        statusText: 'Pointer: top-left bias',
      },
      tipText: 'In a live set, assign contrasting sounds to the corners for dramatic tonal shifts.',
    },
    {
      id: 'step-9',
      title: 'Enable HOLD and AUTO',
      instruction:
        'Press the E5 function button to enable HOLD — this locks the pointer at its current position. Then press the E6 function button to enable AUTO — the pointer moves automatically in a pattern for hands-free morphing.',
      details:
        'HOLD keeps the current volume blend locked so you can play with both hands. AUTO makes the pointer orbit automatically, creating evolving textures without any manual input. You can combine both: enable AUTO for movement and toggle HOLD to freeze at any moment.',
      highlightControls: ['function-e5', 'function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'motional-pad',
        title: 'MOTIONAL PAD',
        menuItems: [
          { label: 'Area 1 (top-left)', value: 'Zone 1: Concert Grand' },
          { label: 'Area 2 (top-right)', value: 'Zone 2: JP Strings' },
          { label: 'Area 3 (bottom-left)', value: 'Zone 3: Warm Pad' },
          { label: 'Area 4 (bottom-right)', value: 'Zone 4: Bell Synth' },
        ],
        selectedIndex: 3,
        statusText: 'HOLD ON | AUTO ON',
      },
      tipText: 'AUTO movement syncs to the scene tempo — adjust tempo to control the morphing speed.',
    },
    {
      id: 'step-10',
      title: 'Tutorial Complete!',
      instruction:
        'Press Exit to return to the home screen. You have learned Chord Memory for playing full chords from single keys and Motional Pad for blending four zone sounds with an XY pointer.',
      details:
        'Both features shine in live performance. Use Chord Memory to play complex chords effortlessly, and Motional Pad to create evolving textures between contrasting sounds. Combine them with the arpeggiator for even more creative possibilities. Save your scene to preserve all settings.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'motional-pad': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A045',
        sceneName: 'Live Stage',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Chord Memory & Motional Pad configured',
      },
      tipText:
        'Try combining Chord Memory with the arpeggiator — arpeggiated chords create rich, evolving patterns.',
    },
  ],
};
