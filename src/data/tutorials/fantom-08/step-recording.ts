import { Tutorial } from '@/types/tutorial';

export const stepRecording: Tutorial = {
  id: 'step-recording',
  deviceId: 'fantom-08',
  title: 'Step Recording',
  description:
    'Learn to use Step REC mode on the Fantom 08 sequencer to enter notes one at a time with precise control over note length, velocity, and timing. Build patterns note-by-note without needing to play in real time.',
  category: 'sequencer',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['sequencer', 'step-recording', 'pattern', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'What is Step Recording?',
      instruction:
        'Step Recording lets you enter notes one at a time into a pattern, advancing by a fixed step size after each note. This is ideal for creating precise melodic lines, basslines, or arpeggiated patterns without needing real-time playing skills.',
      details:
        'Unlike realtime recording, Step REC pauses between notes so you can carefully choose each pitch. You control the note type (length of each step), gate time (how long each note sounds), and velocity (how loud).',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'C009',
        sceneName: 'Piano Studio',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Pattern Screen',
      instruction:
        'Press the Pattern button to open the Pattern screen and select a track and pattern to record into.',
      details:
        'The Pattern screen shows all 16 tracks and their pattern variations (A-H) in a grid. Colored boxes indicate tracks with recorded data. Select an empty pattern box for a fresh start.',
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
        'Select an empty pattern slot (no colored box) for a fresh start.',
    },
    {
      id: 'step-3',
      title: 'Enter Recording Standby',
      instruction:
        'Press the REC button to enter Recording Standby mode. The REC STANDBY screen appears with recording parameters.',
      highlightControls: ['rec'],
      panelStateChanges: {
        rec: { active: true, ledOn: true, ledColor: '#ff2222' },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 0,
        sequencerData: {
          recMode: 'realtime',
          selectedTrack: 0,
        },
      },
    },
    {
      id: 'step-4',
      title: 'Select Step REC Mode',
      instruction:
        'On the REC STANDBY screen, touch the STEP REC tab at the bottom left to switch to Step Recording mode.',
      details:
        'The REC STANDBY screen has three recording modes at the bottom: STEP REC, TR-REC, and REALTIME REC. Selecting Step REC changes the available parameters for step-based note entry.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 1,
        sequencerData: {
          recMode: 'step',
          selectedTrack: 0,
        },
      },
      tipText:
        'You can also configure TRACK and PATTERN before starting — select which track and variation to record into.',
    },
    {
      id: 'step-5',
      title: 'Start Step Recording',
      instruction:
        'Touch START or press the Play button to begin Step Recording. The STEP RECORDING screen appears with a piano roll view showing the input position cursor.',
      details:
        'The Step Recording screen displays: the piano roll grid (left), the input position marker, recording parameters at the bottom (Note Type, Gate Time, Velocity), and information about the last entered note.',
      highlightControls: ['play'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'piano-roll',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
          currentMeasure: 1,
          totalMeasures: 4,
        },
        statusText: 'Step REC active — ready for input',
      },
    },
    {
      id: 'step-6',
      title: 'Set Note Type (Step Length)',
      instruction:
        'Use the [E3] knob to set the Note Type — this determines how far the input position advances after each note. Set it to a quarter note (1/4) for basic patterns.',
      details:
        'Note Type values range from 1/64 to whole notes (2/1). Common values: 1/16 for fast arpeggios, 1/8 for eighth-note patterns, 1/4 for quarter-note melodies. The step time in ticks is shown (480 TPQN: quarter = 480, eighth = 240, sixteenth = 120).',
      highlightControls: ['function-e3'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
          currentMeasure: 1,
          totalMeasures: 4,
        },
        statusText: 'Note Type: 1/4',
      },
      tipText:
        'Gate Time [E4] controls the proportion of the note that sounds (e.g., 80% = slightly detached, 100% = legato). Velocity [E5] sets the loudness (REAL = use your actual keystroke velocity).',
    },
    {
      id: 'step-7',
      title: 'Enter Notes on the Keyboard',
      instruction:
        'Play a note on the keyboard. The note is recorded at the current input position, and the cursor advances by the step length. Play another note to continue building the pattern.',
      details:
        'You can enter chords by playing multiple notes simultaneously. Each keypress records the note and advances the position. The last entered note info (location, pitch, velocity, duration) is shown at the bottom of the screen.',
      highlightControls: ['display'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
          currentMeasure: 1,
          totalMeasures: 4,
        },
        statusText: 'Last: Eb3(51) vel:99 dur:0.084',
      },
    },
    {
      id: 'step-8',
      title: 'Enter Rests and Ties',
      instruction:
        'Press [E1] REST to enter a rest (silence) that advances the input position by one step. Use the TIE button on screen to extend the previous note across the next step.',
      details:
        'REST: inserts silence and moves forward one step. TIE: extends the previous note\'s duration by one step (legato). STEP BACK [E2]: moves the input position back one step, useful for correcting mistakes. [E6] Step: lets you change the input location directly.',
      highlightControls: ['function-e1', 'function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
          currentMeasure: 2,
          totalMeasures: 4,
        },
        statusText: 'REST entered — pos: 02-01-000',
      },
      tipText:
        'STEP BACK [E2] deletes the last step and moves the input position back — handy for correcting wrong notes.',
    },
    {
      id: 'step-9',
      title: 'Stop Step Recording',
      instruction:
        'Press the Exit button to stop step recording and return to the Pattern screen. Your recorded notes are now visible as colored data in the pattern grid.',
      details:
        'If you step-record beyond the specified pattern length, the Length parameter automatically adjusts. You can now press Play to hear your step-recorded pattern loop, or press REC to continue recording on another track.',
      highlightControls: ['exit'],
      panelStateChanges: {
        play: { active: false, ledOn: false },
        rec: { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
          currentMeasure: 4,
          totalMeasures: 4,
        },
      },
    },
    {
      id: 'step-10',
      title: 'Step Recording Complete!',
      instruction:
        'You\'ve learned how to use Step REC mode to precisely enter notes one at a time. Press Exit to return to the home screen.',
      details:
        'Step Recording is ideal for: complex melodies you can\'t play in real time, precise bass lines, intricate arpeggiated patterns, and correcting individual notes. Combine with the Piano Roll editor (E3 EDIT) for further refinement.',
      highlightControls: ['exit'],
      panelStateChanges: {
        pattern: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'C009',
        sceneName: 'Piano Studio',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'You can navigate the piano roll display by scrolling the keyboard area vertically and the scrollbar horizontally to review your recorded pattern.',
    },
  ],
};
