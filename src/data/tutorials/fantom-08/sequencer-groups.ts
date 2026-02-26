import { Tutorial } from '@/types/tutorial';

export const sequencerGroups: Tutorial = {
  id: 'sequencer-groups',
  deviceId: 'fantom-08',
  title: 'Building Song Structure with Groups',
  description:
    'Learn how to organize your recorded patterns into groups that represent song sections like Intro, Verse, and Chorus. Name your groups and set loop lengths to build song structures.',
  category: 'sequencer',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['sequencer', 'group', 'song-structure', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'What Are Groups?',
      instruction:
        'A group is a combination of patterns across all tracks that represents a section of your song — like an Intro, Verse, or Chorus. You can create up to 16 groups per scene.',
      details:
        'Groups sit between patterns and songs in the sequencer hierarchy: Patterns (individual loops) → Groups (song sections) → Songs (complete arrangements).',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'D001',
        sceneName: 'Band Session',
        tempo: 118,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Pattern Screen',
      instruction:
        'Press the Pattern button to see your recorded patterns. You need recorded patterns before you can create groups.',
      highlightControls: ['pattern'],
      panelStateChanges: {
        pattern: { active: true },
      },
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
        },
      },
      tipText:
        'Make sure you have patterns recorded on multiple tracks — groups combine patterns from all tracks.',
    },
    {
      id: 'step-3',
      title: 'Open the Group Screen',
      instruction:
        'Press the Group button in the Sequencer section to open the Group screen. This shows a list of all groups and their details.',
      details:
        'The Group screen has two areas: GROUP LIST on the left (showing group names and lengths) and GROUP Info on the right (showing pattern data for the current group).',
      highlightControls: ['group'],
      panelStateChanges: {
        group: { active: true },
        pattern: { active: false },
      },
      displayState: {
        screenType: 'group',
        selectedIndex: 0,
      },
      tipText:
        'Functions: E1=PATTERN, E2=cursor, E3=UTILITY, E4=RENAME, E5=LENGTH, E6=MAKE SONG.',
    },
    {
      id: 'step-4',
      title: 'Browse the Group List',
      instruction:
        'Turn E2 or use Cursor Down to scroll through the group list. Groups with a length value have assigned patterns; empty groups show "--" for length.',
      highlightControls: ['cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'group',
        selectedIndex: 2,
      },
    },
    {
      id: 'step-5',
      title: 'Select a Group to Edit',
      instruction:
        'Navigate to a group and view its details in the GROUP Info area on the right. The info shows which tracks have pattern data and the current pattern for each track.',
      highlightControls: ['cursor-up'],
      panelStateChanges: {},
      displayState: {
        screenType: 'group',
        selectedIndex: 1,
      },
      tipText:
        'The GROUP Info area shows the same track/pattern grid as the Pattern screen, but for the selected group.',
    },
    {
      id: 'step-6',
      title: 'Rename a Group',
      instruction:
        'Press E4 (RENAME) to open the rename popup. Give your group a descriptive name like "Intro" or "Verse A" to keep your arrangement organized.',
      details:
        'Group names can be up to 8 characters. A clear naming convention makes it much easier to build songs later.',
      highlightControls: ['function-e4'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        popupData: {
          popupType: 'rename',
          currentText: 'Verse A',
        },
      },
      tipText:
        'Use the cursor buttons and Value dial to edit the group name character by character.',
    },
    {
      id: 'step-7',
      title: 'Confirm the Name',
      instruction:
        'Press E6 (OK) to confirm the group name. The Group screen reappears with the updated name in the list.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'group',
        selectedIndex: 1,
        menuItems: [
          { label: '01: Intro' },
          { label: '02: Verse A', selected: true },
          { label: '03: ---' },
          { label: '04: ---' },
        ],
      },
    },
    {
      id: 'step-8',
      title: 'Set Group Length',
      instruction:
        'Press E5 (LENGTH) and use the Value dial to set the loop length for this group. For example, set it to 16 measures for a standard verse.',
      details:
        'The loop length determines how many measures play when this group is active. The GROUP Info area grays out measures beyond the length setting.',
      highlightControls: ['function-e5', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'group',
        selectedIndex: 1,
        menuItems: [
          { label: '01: Intro' },
          { label: '02: Verse A', selected: true },
          { label: '03: ---' },
        ],
      },
    },
    {
      id: 'step-9',
      title: 'Preview the Group',
      instruction:
        'Press the Play button to audition the selected group. All tracks play their assigned patterns simultaneously, just as they would in a song.',
      highlightControls: ['play'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'group',
        selectedIndex: 1,
        menuItems: [
          { label: '01: Intro' },
          { label: '02: Verse A', selected: true },
          { label: '03: ---' },
        ],
      },
      tipText:
        'You can also audition by touching the play icon next to each group name in the list.',
    },
    {
      id: 'step-10',
      title: 'Groups Complete!',
      instruction:
        "Press Stop, then Exit to return to the main screen. You've learned how to create, name, and preview groups — the building blocks for complete songs.",
      details:
        'Next step: Use E6 (MAKE SONG) to arrange your groups into a full song, or press the Song button to open the Song screen directly.',
      highlightControls: ['stop', 'exit'],
      panelStateChanges: {
        play: { active: false, ledOn: false },
        group: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'D001',
        sceneName: 'Band Session',
        tempo: 118,
        beatSignature: '4/4',
      },
      tipText:
        'Save your scene with Write to keep all group data. Groups are stored as part of the scene.',
    },
  ],
};
