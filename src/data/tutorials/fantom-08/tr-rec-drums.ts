import { Tutorial } from '@/types/tutorial';

export const trRecDrums: Tutorial = {
  id: 'tr-rec-drums',
  deviceId: 'fantom-08',
  title: 'TR-REC Drum Programming',
  description:
    'Learn to program drum patterns using the Fantom 08\'s TR-REC mode — a classic grid-based drum machine workflow. Use the Tone Category buttons [1]–[16] as step buttons to build beats instrument by instrument.',
  category: 'sequencer',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['sequencer', 'tr-rec', 'drums', 'pattern', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'What is TR-REC?',
      instruction:
        'TR-REC is a grid-based recording method inspired by classic Roland drum machines (TR-808, TR-909). Instead of playing in real time, you use the TONE CATEGORY buttons [1]–[16] as step buttons to toggle notes on or off for each instrument.',
      details:
        'For example, to create a basic rock pattern: light buttons 01, 05, 09, 13 for bass drum (4-on-the-floor), buttons 05 and 13 for snare, and all 16 for hi-hat. You select one instrument at a time using the keyboard, then toggle its steps.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A005',
        sceneName: 'Drum Workshop',
        tempo: 100,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Pattern Screen',
      instruction:
        'Press the Pattern button and select a track assigned to a Drum Kit tone (typically Track 10 / Zone 10). Navigate to an empty pattern.',
      highlightControls: ['pattern'],
      panelStateChanges: {
        pattern: { active: true },
      },
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 9,
          selectedVariation: 0,
        },
      },
      tipText:
        'Zones and tracks correspond — Zone 10 is always Track 10. Drum Kit tones work best with TR-REC since each key is a different instrument.',
    },
    {
      id: 'step-3',
      title: 'Enter Recording Standby',
      instruction:
        'Press the REC button to enter Recording Standby mode.',
      highlightControls: ['rec'],
      panelStateChanges: {
        rec: { active: true, ledOn: true, ledColor: '#ff2222' },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 0,
        sequencerData: {
          recMode: 'realtime',
          selectedTrack: 9,
        },
      },
    },
    {
      id: 'step-4',
      title: 'Select TR-REC Mode',
      instruction:
        'Touch the TR-REC tab at the bottom of the REC STANDBY screen, or press the TR-REC button in the Sequencer section. The TR-REC screen appears and the TONE CATEGORY buttons become step buttons.',
      details:
        'You can also access TR-REC directly by pressing the [TR-REC] button instead of the [REC] button. Set NEW/MIX, TRACK, and PATTERN parameters as needed.',
      highlightControls: ['tr-rec'],
      panelStateChanges: {
        'tr-rec': { active: true },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 1,
        sequencerData: {
          recMode: 'tr-rec',
          selectedTrack: 9,
        },
      },
    },
    {
      id: 'step-5',
      title: 'Select the Bass Drum',
      instruction:
        'Play the bass drum key on the keyboard (or touch the instrument on the TR-REC screen). The display shows "Bass Drum" as the current instrument, and buttons [1]–[16] represent 16 steps.',
      details:
        'For a Drum Kit tone, the TR-REC screen shows a list of instruments on the left side (Kick, Snare, Hi-Hat, etc.) with a step grid on the right. For a pitched tone, the display shows a piano roll with the pitch to be entered.',
      highlightControls: ['tone-cat-14'],
      panelStateChanges: {},
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 2,
        sequencerData: {
          recMode: 'tr-rec',
          selectedTrack: 9,
        },
        statusText: 'Instrument: Bass Drum',
      },
      tipText:
        'The Scale parameter (bottom left) controls the grid resolution: 1/16 is standard, 1/8 gives 8 steps per measure, 1/32 gives fine detail.',
    },
    {
      id: 'step-6',
      title: 'Program the Bass Drum Pattern',
      instruction:
        'Press TONE CATEGORY buttons [1], [5], [9], and [13] to light them up — this creates a four-on-the-floor bass drum pattern. Lit buttons mean the instrument will sound on that step.',
      details:
        'Each button represents one step in the measure. With Scale at 1/16, buttons 1–16 cover one full measure. Pressing a lit button toggles it off. The velocity is set by the Velocity parameter (default: REAL uses keyboard velocity, or set 1–127 for fixed).',
      highlightControls: ['tone-cat-1', 'tone-cat-5', 'tone-cat-9', 'tone-cat-13'],
      panelStateChanges: {
        'tone-cat-1': { active: true },
        'tone-cat-5': { active: true },
        'tone-cat-9': { active: true },
        'tone-cat-13': { active: true },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 3,
        sequencerData: {
          recMode: 'tr-rec',
          selectedTrack: 9,
        },
        statusText: 'Bass Drum — Steps: 1,5,9,13',
      },
    },
    {
      id: 'step-7',
      title: 'Switch to Snare Drum',
      instruction:
        'Play the snare drum key on the keyboard to switch instruments. The step buttons update to show the snare drum\'s step pattern (currently empty). Press buttons [5] and [13] for a backbeat snare.',
      highlightControls: ['tone-cat-5', 'tone-cat-13'],
      panelStateChanges: {
        'tone-cat-1': { active: false },
        'tone-cat-9': { active: false },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 4,
        sequencerData: {
          recMode: 'tr-rec',
          selectedTrack: 9,
        },
        statusText: 'Snare Drum — Steps: 5,13',
      },
      tipText:
        'Pressing a Tone Category button toggles that step between lit (active) and unlit (inactive). Each instrument\'s pattern is independent.',
    },
    {
      id: 'step-8',
      title: 'Add Closed Hi-Hat',
      instruction:
        'Switch to closed hi-hat on the keyboard and program all 16 step buttons — creating a steady sixteenth-note hi-hat pattern. (Representative buttons highlighted below.)',
      details:
        'Press all TONE CATEGORY buttons [1]–[16] so they are all lit. You can create more groove by leaving some steps off or varying velocity. The Length parameter controls how many measures the pattern spans (1–64).',
      highlightControls: ['tone-cat-1', 'tone-cat-5', 'tone-cat-9', 'tone-cat-13'],
      panelStateChanges: {
        'tone-cat-1': { active: true },
        'tone-cat-5': { active: true },
        'tone-cat-9': { active: true },
        'tone-cat-13': { active: true },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 5,
        sequencerData: {
          recMode: 'tr-rec',
          selectedTrack: 9,
        },
        statusText: 'Closed Hi-Hat — Steps: all 16',
      },
    },
    {
      id: 'step-9',
      title: 'Preview Your Beat',
      instruction:
        'Press the Play button to hear your TR-REC pattern loop. You can continue toggling steps on and off while the pattern plays to refine the groove in real time.',
      highlightControls: ['play'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
        'tone-cat-1': { active: false },
        'tone-cat-5': { active: false },
        'tone-cat-9': { active: false },
        'tone-cat-13': { active: false },
      },
      displayState: {
        screenType: 'rec-standby',
        selectedIndex: 5,
        sequencerData: {
          recMode: 'tr-rec',
          selectedTrack: 9,
          currentMeasure: 1,
          totalMeasures: 2,
        },
        statusText: 'Playing — edit steps in real time',
      },
    },
    {
      id: 'step-10',
      title: 'TR-REC Complete!',
      instruction:
        'Press Stop then Exit to leave TR-REC mode and return to the Pattern screen. Your drum pattern is saved in the pattern.',
      details:
        'TR-REC is the fastest way to create drum patterns. Combine it with realtime recording on other tracks for a complete arrangement. Use the Pattern Utility (PTN UTILITY) to copy, paste, or modify your patterns.',
      highlightControls: ['stop', 'exit'],
      panelStateChanges: {
        play: { active: false, ledOn: false },
        rec: { active: false, ledOn: false },
        'tr-rec': { active: false },
        pattern: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A005',
        sceneName: 'Drum Workshop',
        tempo: 100,
        beatSignature: '4/4',
      },
      tipText:
        'You can record multiple instruments in one TR-REC session — just switch instruments on the keyboard and toggle different steps.',
    },
  ],
};
