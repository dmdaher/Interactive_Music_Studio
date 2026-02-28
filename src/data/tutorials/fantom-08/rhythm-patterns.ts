import { Tutorial } from '@/types/tutorial';

export const rhythmPatterns: Tutorial = {
  id: 'rhythm-patterns',
  deviceId: 'fantom-08',
  title: 'Performing with Rhythm Patterns',
  description:
    'Learn to select, play, and edit built-in rhythm patterns on the Fantom 08. Understand rhythm pattern groups (Intro, Verse, Fill, Ending), drum kit selection, tempo adjustment, and Key Trigger mode.',
  category: 'performance',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  tags: ['rhythm', 'patterns', 'drums', 'performance', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Rhythm Patterns',
      instruction:
        'The Fantom 08 can automatically play a variety of rhythms while you perform. These are called "rhythm patterns" — fixed drum patterns organized into categories like Intro, Verse, Fill-In, and Ending.',
      details:
        'A "rhythm pattern group" contains six rhythm patterns: Intro, Pattern A–D, and Ending. The FANTOM provides Preset (PRST) groups that cannot be modified, and User groups that you can edit and save. Rhythm pattern settings are stored in the scene.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Grand Piano',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Rhythm Pattern Screen',
      instruction:
        'Press the RHYTHM PTN button in the Sequencer section to open the Rhythm Pattern screen.',
      details:
        'The screen shows the current rhythm group (e.g., PRST 01:ROCK 1), the drum kit used by Zone 10, and six pattern slots: Intro, Pattern A (Verse 1), Pattern B (Fill-In 1), Pattern C (Verse 2), Pattern D (Fill-In 2), and Ending.',
      highlightControls: ['rhythm-ptn'],
      panelStateChanges: {
        'rhythm-ptn': { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'RHYTHM PATTERN',
        menuItems: [
          { label: 'RHYTHM GROUP: PRST 01:ROCK 1' },
          { label: 'ZONE 10: 0001:LD Std Kit 1' },
          { label: 'P001: Intro — 1 Meas' },
          { label: 'P002: Verse 1 — 2 Meas' },
          { label: 'P003: Fill-In 1 — 2 Meas' },
          { label: 'P004: Verse 2 — 2 Meas' },
          { label: 'P005: Fill-In 2 — 2 Meas' },
          { label: 'P006: Ending — 4 Meas' },
        ],
        selectedIndex: 0,
        statusText: 'STOP',
      },
      tipText:
        'The drum sounds are played by Zone 10\'s Drum Kit tone in the current scene.',
    },
    {
      id: 'step-3',
      title: 'Select a Rhythm Pattern Group',
      instruction:
        'Move the cursor to the "rhythm group number" field and use the Value dial to browse through the available rhythm pattern groups.',
      details:
        'Groups are organized by genre: ROCK, POP, JAZZ, BLUES, FUNK, LATIN, R&B, and more. Each group has its own set of Intro, Verse, Fill-In, and Ending patterns.',
      highlightControls: ['cursor-up', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'RHYTHM PATTERN',
        menuItems: [
          { label: 'RHYTHM GROUP: PRST 03:POP 1' },
          { label: 'ZONE 10: 0001:LD Std Kit 1' },
          { label: 'P001: Intro — 1 Meas' },
          { label: 'P002: Verse 1 — 2 Meas' },
          { label: 'P003: Fill-In 1 — 2 Meas' },
          { label: 'P004: Verse 2 — 2 Meas' },
          { label: 'P005: Fill-In 2 — 2 Meas' },
          { label: 'P006: Ending — 4 Meas' },
        ],
        selectedIndex: 0,
        statusText: 'STOP — Group select',
      },
    },
    {
      id: 'step-4',
      title: 'Select a Drum Kit',
      instruction:
        'Move the cursor to the drum kit number field and use the Value dial to select a different drum kit for the rhythm patterns.',
      details:
        'The drum kit is the Zone 10 tone. Changing it here changes the sound of all rhythm patterns in this group. You can choose from standard kits, electronic kits, jazz kits, and more.',
      highlightControls: ['cursor-down', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'RHYTHM PATTERN',
        menuItems: [
          { label: 'RHYTHM GROUP: PRST 03:POP 1' },
          { label: 'ZONE 10: 0045:PowerKit 2' },
          { label: 'P001: Intro — 1 Meas' },
          { label: 'P002: Verse 1 — 2 Meas' },
          { label: 'P003: Fill-In 1 — 2 Meas' },
          { label: 'P004: Verse 2 — 2 Meas' },
          { label: 'P005: Fill-In 2 — 2 Meas' },
          { label: 'P006: Ending — 4 Meas' },
        ],
        selectedIndex: 1,
        statusText: 'STOP — Kit select',
      },
    },
    {
      id: 'step-5',
      title: 'Play a Rhythm Pattern',
      instruction:
        'Touch the Intro pattern icon on the screen (or navigate to it with the cursor buttons). The RHYTHM PTN button lights up and the rhythm pattern begins playing.',
      details:
        'If you play the Intro pattern, playback automatically transitions to Pattern A (Verse 1) when the Intro finishes. Touch the Ending pattern to end playback — it stops automatically after the Ending finishes.',
      highlightControls: ['play'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'menu',
        title: 'RHYTHM PATTERN',
        menuItems: [
          { label: 'RHYTHM GROUP: PRST 03:POP 1' },
          { label: 'ZONE 10: 0045:PowerKit 2' },
          { label: 'P001: Intro — 1 Meas ▶' },
          { label: 'P002: Verse 1 — 2 Meas' },
          { label: 'P003: Fill-In 1 — 2 Meas' },
          { label: 'P004: Verse 2 — 2 Meas' },
          { label: 'P005: Fill-In 2 — 2 Meas' },
          { label: 'P006: Ending — 4 Meas' },
        ],
        selectedIndex: 2,
        statusText: 'PLAYING — Meas 01-01',
      },
      tipText:
        'If you select a different pattern while one is playing, it switches at the next measure division.',
    },
    {
      id: 'step-6',
      title: 'Stop and Adjust Tempo',
      instruction:
        'Press the Stop button to stop the rhythm pattern. Then press the Tempo button to open the tempo dialog and use the Value dial to adjust the BPM.',
      details:
        'The tempo is shared with the arpeggiator and the sequencer. You can also "tap tempo" by pressing the Tempo button at least 3 times at the desired rate.',
      highlightControls: ['stop', 'tempo', 'value-dial'],
      panelStateChanges: {
        stop: { active: true },
        play: { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'popup',
        parameterName: 'Tempo',
        parameterValue: '140.00',
        popupData: {
          popupType: 'value',
        },
        statusText: 'Tap or dial to set tempo',
      },
    },
    {
      id: 'step-7',
      title: 'Enable Key Trigger',
      instruction:
        'Back on the Rhythm Pattern screen, find the KEY TRIGGER option controlled by [E1]. Turn it ON so the rhythm pattern starts the moment you play the keyboard.',
      details:
        'With Key Trigger ON, the rhythm pattern starts automatically when you press a key and stops when you release all keys. This is great for performance — the band starts and stops with you.',
      highlightControls: ['function-e1'],
      panelStateChanges: {
        stop: { active: false },
      },
      displayState: {
        screenType: 'menu',
        title: 'RHYTHM PATTERN',
        menuItems: [
          { label: 'RHYTHM GROUP: PRST 03:POP 1' },
          { label: 'ZONE 10: 0045:PowerKit 2' },
          { label: 'P001: Intro — 1 Meas' },
          { label: 'P002: Verse 1 — 2 Meas' },
          { label: 'P003: Fill-In 1 — 2 Meas' },
          { label: 'P004: Verse 2 — 2 Meas' },
          { label: 'KEY TRIGGER: ON' },
          { label: '[E6] LEVEL: 100' },
        ],
        selectedIndex: 6,
        statusText: 'Key Trigger enabled',
      },
      tipText:
        'Use [E6] LEVEL to control the volume of the drum kit independently.',
    },
    {
      id: 'step-8',
      title: 'Rhythm Patterns Complete!',
      instruction:
        'Press Exit to return to the home screen. You now know how to select rhythm pattern groups, choose drum kits, play and stop patterns, adjust tempo, and enable Key Trigger mode.',
      details:
        'Rhythm pattern settings are saved in the scene. To keep your changes, save the scene using the Write button (p. 56). You can also edit rhythm pattern groups — assign different patterns to the Intro–Ending slots and save them as User groups.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'rhythm-ptn': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Grand Piano',
        tempo: 140,
        beatSignature: '4/4',
      },
      tipText:
        'To save your edited rhythm pattern group, press Write and select "Rhythm Pattern Group" from the Write menu.',
    },
  ],
};
