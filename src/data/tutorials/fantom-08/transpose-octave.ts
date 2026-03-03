import { Tutorial } from '@/types/tutorial';

export const transposeOctave: Tutorial = {
  id: 'transpose-octave',
  deviceId: 'fantom-08',
  title: 'Transpose and Octave Shift',
  description:
    'Learn how to shift the keyboard pitch using the Transpose button and Octave Up/Down buttons. Extend your playing range without changing zones.',
  category: 'performance',
  difficulty: 'beginner',
  estimatedTime: '3 min',
  tags: ['transpose', 'octave', 'pitch', 'performance', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Shifting the Keyboard Pitch',
      instruction:
        'The Fantom 08 lets you shift the entire keyboard up or down in pitch — either by semitones (Transpose) or by full octaves (Octave Up/Down).',
      details:
        'Transpose shifts by semitones (half steps), useful for changing the key of a song. Octave shift moves by 12 semitones at a time, useful for reaching higher or lower notes.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Select Zone 1',
      instruction:
        'Press Zone 1 to select the zone you want to transpose. Transpose and octave settings are per-zone.',
      highlightControls: ['zone-1'],
      panelStateChanges: {
        'zone-1': { active: true, ledOn: true, ledColor: '#3B82F6' },
      },
      displayState: {
        screenType: 'zone-view',
        title: 'ZONE VIEW',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        zoneViewMode: 1,
        zones: [
          {
            zoneNumber: 1,
            zoneName: 'Zone 1',
            toneName: 'Concert Grand',
            toneType: 'SN-AP',
            toneBank: 'EXSN03',
            toneCategory: 'Ac.Piano',
            toneNumber: '0001',
            keyRangeLow: 'A0',
            keyRangeHigh: 'C8',
            volume: 100,
            pan: 0,
            muted: false,
            active: true,
          },
        ],
      },
      zones: [
        {
          zoneNumber: 1,
          color: '#3B82F6',
          lowNote: 21,
          highNote: 108,
          label: 'Zone 1 (Concert Grand)',
        },
      ],
      tipText:
        'Transpose applies only to the selected zone — other zones stay at their original pitch.',
    },
    {
      id: 'step-3',
      title: 'Shift Down One Octave',
      instruction:
        'Press the Octave Down button to shift Zone 1 down by one octave (12 semitones). The keyboard now plays one octave lower than normal.',
      details:
        'This is useful when you have a bass sound and need to reach even lower notes, or when playing a melody that sits too high.',
      highlightControls: ['octave-down'],
      panelStateChanges: {
        'octave-down': { active: true },
      },
      displayState: {
        screenType: 'zone-view',
        title: 'ZONE VIEW',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        zoneViewMode: 1,
        statusText: 'Octave: -1',
        zones: [
          {
            zoneNumber: 1,
            zoneName: 'Zone 1',
            toneName: 'Concert Grand',
            toneType: 'SN-AP',
            toneBank: 'EXSN03',
            toneCategory: 'Ac.Piano',
            toneNumber: '0001',
            keyRangeLow: 'A0',
            keyRangeHigh: 'C8',
            volume: 100,
            pan: 0,
            muted: false,
            active: true,
          },
        ],
      },
      zones: [
        {
          zoneNumber: 1,
          color: '#3B82F6',
          lowNote: 21,
          highNote: 108,
          label: 'Zone 1 (Octave -1)',
        },
      ],
    },
    {
      id: 'step-4',
      title: 'Shift Up One Octave',
      instruction:
        'Press the Octave Up button twice — once to return to normal, and once more to shift up one octave. The status bar shows the current octave offset.',
      highlightControls: ['octave-up'],
      panelStateChanges: {
        'octave-down': { active: false },
        'octave-up': { active: true },
      },
      displayState: {
        screenType: 'zone-view',
        title: 'ZONE VIEW',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        zoneViewMode: 1,
        statusText: 'Octave: +1',
        zones: [
          {
            zoneNumber: 1,
            zoneName: 'Zone 1',
            toneName: 'Concert Grand',
            toneType: 'SN-AP',
            toneBank: 'EXSN03',
            toneCategory: 'Ac.Piano',
            toneNumber: '0001',
            keyRangeLow: 'A0',
            keyRangeHigh: 'C8',
            volume: 100,
            pan: 0,
            muted: false,
            active: true,
          },
        ],
      },
      zones: [
        {
          zoneNumber: 1,
          color: '#3B82F6',
          lowNote: 21,
          highNote: 108,
          label: 'Zone 1 (Octave +1)',
        },
      ],
      tipText:
        'Press both Octave Up and Octave Down simultaneously to reset to 0.',
    },
    {
      id: 'step-5',
      title: 'Using Transpose',
      instruction:
        'Hold down the [TRANSPOSE] button and press Octave [UP] to transpose up by one semitone. Each press of Octave Up/Down shifts by one semitone while Transpose is held.',
      details:
        'Transpose range is -5 to +6 semitones. This is perfect for changing the key of a song without relearning fingerings. The screen briefly shows the current transpose value.',
      highlightControls: ['transpose', 'octave-up'],
      panelStateChanges: {
        'octave-up': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Transpose: +1',
      },
      tipText:
        'The transpose value flashes briefly on screen then disappears — this is normal.',
    },
    {
      id: 'step-6',
      title: 'Transpose Up Again',
      instruction:
        'While still holding [TRANSPOSE], press Octave [UP] once more. The display flashes "Transpose: +2" — you are now transposed up a whole step (e.g., play in C and hear in D).',
      highlightControls: ['transpose', 'octave-up'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Transpose: +2',
      },
      tipText:
        'Common transpose values: +2 (whole step up), -3 (minor third down), +5 (perfect fourth up).',
    },
    {
      id: 'step-7',
      title: 'Toggle and Reset Transpose',
      instruction:
        'Release Transpose, then press it once to toggle transpose off. Press it again to re-enable the previously set value. To reset to 0, hold [TRANSPOSE] and press Octave [DOWN] + [UP] simultaneously.',
      details:
        'Transpose and octave settings are saved per-zone within a scene. Different zones can have different transpose values — useful for creating harmonized layers.',
      highlightControls: ['transpose'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Transpose: off',
      },
      tipText:
        'Pressing Transpose toggles it on/off without losing the value. Hold Transpose + press both Octave buttons to reset to 0.',
    },
    {
      id: 'step-8',
      title: 'Transpose & Octave Complete!',
      instruction:
        'You now know how to shift the keyboard pitch using both octave and transpose. Remember to save your scene if you want to keep these settings.',
      highlightControls: ['exit'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'Save your scene with [WRITE] to preserve transpose and octave settings.',
    },
  ],
};
