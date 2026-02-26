import { Tutorial } from '@/types/tutorial';

export const sequencerPatterns: Tutorial = {
  id: 'sequencer-patterns',
  deviceId: 'fantom-08',
  title: 'Getting Started with Patterns',
  description:
    'Learn the basics of the Fantom 08 sequencer by creating and playing back patterns. Understand tracks, variations, and how to record your first pattern using realtime recording.',
  category: 'sequencer',
  difficulty: 'beginner',
  estimatedTime: '6 min',
  tags: ['sequencer', 'pattern', 'recording', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Patterns',
      instruction:
        "The Fantom 08 has a built-in 16-track sequencer. Patterns are the basic building blocks — each track can have up to 8 pattern variations (A-H), and each pattern can be up to 64 measures long.",
      details:
        "Tracks correspond to zones, so Track 1 records Zone 1's performance. You can record using realtime recording (play normally), step recording (enter notes one at a time), or TR-REC (grid-based drum programming).",
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
        'Press the Pattern button in the Sequencer section to open the Pattern screen.',
      details:
        'The Pattern screen shows all 16 tracks and their pattern variations in a grid. Colored boxes indicate tracks with recorded data.',
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
        'The Pattern screen shows tracks 1-8 by default. Touch <Tr 1-8/9-16 View> to see tracks 9-16.',
    },
    {
      id: 'step-3',
      title: 'Navigate the Pattern Grid',
      instruction:
        'Use the Cursor Down button to move through the track list. Navigate down to see how different tracks are organized in the grid.',
      details:
        'Each row represents a track (zone), and each column is a variation (A-H). You can select any pattern box to play it or set it for recording.',
      highlightControls: ['cursor-down', 'display'],
      panelStateChanges: {},
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 2,
          selectedVariation: 0,
        },
      },
    },
    {
      id: 'step-4',
      title: 'Explore Variations',
      instruction:
        'Use the Cursor Right button to move across the variation columns. Each track can have up to 8 variations (A-H) that you can switch between during playback.',
      highlightControls: ['cursor-right'],
      panelStateChanges: {},
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 2,
          selectedVariation: 1,
        },
      },
      tipText:
        'You can switch variations during playback by touching the pattern boxes on screen.',
    },
    {
      id: 'step-5',
      title: 'Enter Recording Standby',
      instruction:
        'Navigate back to Track 1, Variation A using the cursor buttons, then press the REC button to enter Recording Standby mode.',
      details:
        'The REC STANDBY screen shows recording parameters like Count In, Time Signature, Input Quantize, and recording mode (Realtime, Step, or TR-REC).',
      highlightControls: ['cursor-up', 'cursor-left', 'rec'],
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
      tipText: 'The REC LED lights up red when in recording standby.',
    },
    {
      id: 'step-6',
      title: 'Configure Recording Settings',
      instruction:
        'Use the cursor buttons and Value dial to set Count In to "1 MEAS" — this gives you a one-measure count-in before recording starts.',
      details:
        'Count In options: NONE (start immediately), 1 MEAS (one measure count), 2 MEAS (two measure count), WAIT NOTE (starts when you play a note). Other settings include Time Signature, Input Quantize, and Length.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 1,
        sequencerData: {
          recMode: 'realtime',
          selectedTrack: 0,
        },
      },
    },
    {
      id: 'step-7',
      title: 'Start Recording',
      instruction:
        'Press the Play button to start recording. After the one-measure count-in, play your piano part on the keyboard. The sequencer records your performance in real time.',
      highlightControls: ['play'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
          currentMeasure: 1,
          totalMeasures: 4,
        },
      },
      tipText:
        'The Play and REC LEDs both light up during recording.',
    },
    {
      id: 'step-8',
      title: 'Stop Recording',
      instruction:
        "Press the Stop button when you've finished playing. Your recorded pattern now appears as a colored box in the pattern grid.",
      details:
        'After stopping, you can press Play to hear your recorded pattern loop. The pattern length is determined by the Length setting (default 4 measures).',
      highlightControls: ['stop'],
      panelStateChanges: {
        stop: { active: true },
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
      id: 'step-9',
      title: 'Pattern Recording Complete!',
      instruction:
        "You've learned how to navigate the Pattern screen, enter recording standby, and record your first pattern. Press Exit to return to the main screen.",
      details:
        'Next steps: Try recording on other tracks, explore step recording for precise note entry, and use Groups to organize patterns into song sections.',
      highlightControls: ['exit'],
      panelStateChanges: {
        pattern: { active: false },
        stop: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'C009',
        sceneName: 'Piano Studio',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'You can record up to 8 variations (A-H) per track to create dynamic arrangements.',
    },
  ],
};
