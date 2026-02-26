import { Tutorial } from '@/types/tutorial';

export const songArrangement: Tutorial = {
  id: 'song-arrangement',
  deviceId: 'fantom-08',
  title: 'Arranging a Complete Song',
  description:
    'Learn how to arrange groups into a complete song using the Song screen. Add, reorder, loop, and skip song sections to build a full arrangement from your recorded patterns.',
  category: 'sequencer',
  difficulty: 'advanced',
  estimatedTime: '8 min',
  tags: ['sequencer', 'song', 'arrangement', 'advanced'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Songs',
      instruction:
        'A song is the highest level of the sequencer hierarchy. It arranges your groups (Intro, Verse, Chorus, etc.) into a complete playback sequence of up to 32 positions.',
      details:
        'The hierarchy is: Patterns (individual loops per track) → Groups (combined patterns for a song section) → Songs (ordered sequence of groups). Each scene can have one song.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'D001',
        sceneName: 'Full Arrange',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Song Screen',
      instruction:
        'Press the Song button in the Sequencer section to open the Song screen. This shows a grid of up to 32 positions where groups are arranged.',
      details:
        'The Song screen shows numbered positions (1-32) in a grid. Each position displays the assigned group name and repeat count. Functions: E1=MAKE SONG, E2=EDIT, E3=DELETE, E4=SKIP, E5=MEAS, E6=EXPORT.',
      highlightControls: ['song'],
      panelStateChanges: {
        song: { active: true },
      },
      displayState: {
        screenType: 'song',
        selectedIndex: 0,
      },
      tipText:
        'If the song is empty, use E1 (MAKE SONG) to start building from your groups.',
    },
    {
      id: 'step-3',
      title: 'Enter Make Song Mode',
      instruction:
        'Press E1 (MAKE SONG) to enter the song builder. The screen splits into GROUP LIST on the left and the SONG timeline on the right.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 0,
        menuItems: [
          { label: '01: Intro', selected: true },
          { label: '02: Verse A' },
          { label: '03: Verse B' },
          { label: '04: Chorus A' },
        ],
      },
    },
    {
      id: 'step-4',
      title: 'Add Groups to the Song',
      instruction:
        'In the GROUP LIST, touch each group you want to add to the song. Each touch adds the group to the next position in the timeline. Build an arrangement: Intro → Verse A → Verse B → Chorus A.',
      details:
        'Touch groups in order: the red input cursor advances after each addition. Use E3 to toggle between ADD (insert) and REPLACE (overwrite) modes. E5 (BACK DEL) removes the last added group.',
      highlightControls: ['display', 'enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 3,
        menuItems: [
          { label: '01: Intro' },
          { label: '02: Verse A' },
          { label: '03: Verse B' },
          { label: '04: Chorus A', selected: true },
        ],
      },
    },
    {
      id: 'step-5',
      title: 'View the Song Timeline',
      instruction:
        'Press E6 (SONG) to switch to the Song timeline view. The grid shows all positions with their assigned groups and repeat counts.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 0,
      },
      tipText:
        'Each position shows the group name and a repeat multiplier (x1 by default).',
    },
    {
      id: 'step-6',
      title: 'Navigate the Timeline',
      instruction:
        'Use the Cursor buttons to move through song positions. Select position 4 (Chorus A) to see its details.',
      highlightControls: ['cursor-right', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 3,
      },
    },
    {
      id: 'step-7',
      title: 'Edit Song Structure',
      instruction:
        'Press E2 (EDIT) to enter the Song Edit screen. From here you can MOVE, COPY, DELETE, set LOOP regions, and adjust REPEAT counts for individual groups.',
      details:
        'Song Edit functions: E1=MOVE (reposition groups), E2=COPY (duplicate), E3=DELETE (remove), E4=LOOP (set loop region), E5=Repeat (set repeat count x1-x64), E6=PATTERN (view patterns).',
      highlightControls: ['function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 1,
      },
    },
    {
      id: 'step-8',
      title: 'Set a Loop Region',
      instruction:
        'Press E4 (LOOP) to define a loop region. Use E3 to set the start position and E4 to set the end position. Turn E6 to enable loop playback.',
      details:
        'When loop is enabled, the song plays through the loop region repeatedly until you stop it. This is useful for rehearsing a specific section.',
      highlightControls: ['function-e4', 'function-e3'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 2,
      },
    },
    {
      id: 'step-9',
      title: 'Set Group Repeats',
      instruction:
        'Select a group and press E5 (Repeat) to set how many times it plays. For example, set the Verse to repeat x2 so it plays twice before moving to the Chorus.',
      highlightControls: ['function-e5', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'song',
        selectedIndex: 4,
      },
      tipText:
        'Repeat counts (x1-x64) let you extend sections without duplicating groups in the timeline.',
    },
    {
      id: 'step-10',
      title: 'Choose a Group to Insert',
      instruction:
        'To add another group at a specific position, use the dropdown selector. Choose from your available groups like Verse A, Chorus A, or Ending.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        selectedIndex: 0,
        popupData: {
          popupType: 'dropdown',
          options: ['Intro', 'Verse A', 'Verse B', 'Chorus A', 'Ending'],
        },
      },
      tipText:
        'The dropdown shows all available groups. Select one and it will be inserted at the current position.',
    },
    {
      id: 'step-11',
      title: 'Song Arrangement Complete!',
      instruction:
        "Press Exit to return to the Song screen, then press Play to hear your complete arrangement. You've learned to build songs from groups, set loops, and configure repeats.",
      details:
        'Save your scene with Write to keep the song data. You can export your song as an SMF (Standard MIDI File) using E6 (EXPORT) on the Song screen.',
      highlightControls: ['exit', 'play'],
      panelStateChanges: {
        song: { active: false },
        play: { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'song',
        selectedIndex: 0,
        menuItems: [
          { label: '01: Intro', selected: true },
          { label: '02: Verse A' },
          { label: '03: Chorus A' },
          { label: '04: Ending' },
        ],
      },
      tipText:
        'Use the Mixer screen to fine-tune volume balance across all tracks before exporting.',
    },
  ],
};
