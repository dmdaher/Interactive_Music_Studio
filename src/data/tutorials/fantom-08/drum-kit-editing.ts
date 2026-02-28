import { Tutorial } from '@/types/tutorial';

export const drumKitEditing: Tutorial = {
  id: 'drum-kit-editing',
  deviceId: 'fantom-08',
  title: 'Drum Kit Tone Editing',
  description:
    'Learn to edit Drum Kit tones where each key maps to a different instrument. Select individual drums by pressing keys on the keyboard, then tweak wave, filter, amp, and pitch parameters per instrument.',
  category: 'sound-design',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['drum-kit', 'tone-edit', 'per-key', 'wave', 'sound-design'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Drum Kit Editing',
      instruction:
        'Drum Kit tones assign a different drum sound (instrument) to each of the 88 keys (A0–C8). You can select and edit each key individually — adjusting waves, filters, pitch, and volume for every drum hit.',
      details:
        'Each instrument in the kit can use up to 4 waves (Wave1–Wave4), each with its own pitch envelope, filter, filter envelope, amp, and amp envelope. This gives you deep control over every drum sound.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A005',
        sceneName: 'Drum Workshop',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Select a Drum Kit Zone',
      instruction:
        'Press Zone 1 to select the zone containing our drum kit. The zone view shows the tone type as Drum.',
      highlightControls: ['zone-1'],
      panelStateChanges: {
        'zone-1': { active: true, ledOn: true, ledColor: '#3B82F6' },
      },
      displayState: {
        screenType: 'zone-view',
        title: 'ZONE VIEW',
        sceneNumber: 'A005',
        sceneName: 'Drum Workshop',
        tempo: 120,
        beatSignature: '4/4',
        zoneViewMode: 1,
        zones: [
          {
            zoneNumber: 1,
            zoneName: 'Zone 1',
            toneName: 'LD Std Kit 1',
            toneType: 'Drum',
            toneBank: 'PR-A',
            toneCategory: 'Drums',
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
          label: 'Zone 1 (LD Std Kit 1)',
        },
      ],
    },
    {
      id: 'step-3',
      title: 'Enter Drum Kit Edit',
      instruction:
        'Press the PARAM button to open the Drum Kit Tone Edit ZOOM screen. The KIT tab shows kit-level settings. Notice the tab list on the left — there are many more tabs than a standard tone.',
      details:
        'E1 scrolls through tabs. The tabs are organized in two groups: kit-level (KIT COMMON, KIT MFX, KIT MFX CTRL, KIT COMP1–6) and per-key (KEY PARAM, KEY EQ, INST COMMON, INST WAVE, INST WMT, and envelope tabs).',
      highlightControls: ['synth-param'],
      panelStateChanges: {
        'synth-param': { active: true },
      },
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'KIT COMMON',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'DRUM',
        },
        menuItems: [
          { label: 'Kit Level: 127', selected: true },
          { label: 'Kit Pan: 0' },
          { label: 'Kit Fine Tune: 0' },
          { label: 'Kit Chorus Send: 0' },
          { label: 'Kit Reverb Send: 0' },
        ],
      },
    },
    {
      id: 'step-4',
      title: 'Navigate to INST COMMON Tab',
      instruction:
        'Turn E1 to scroll to the INST COMMON tab. This shows basic settings for each individual instrument (drum hit) in the kit.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'INST COMMON',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'DRUM',
        },
        menuItems: [
          { label: 'Inst Number: 33 (A1)', selected: true },
          { label: 'Inst Name: Kick 2bP' },
          { label: 'Level: 100' },
          { label: 'Pan: 0' },
        ],
        statusText: 'Current Note: A1 — Kick 2bP',
      },
    },
    {
      id: 'step-5',
      title: 'Select an Instrument by Pressing a Key',
      instruction:
        'Press a different key on the keyboard to switch to that instrument. Try pressing the key for the snare drum — the display updates to show the new instrument name and parameters.',
      details:
        'The "Current Note" changes to match the key you pressed. Each key has its own independent set of parameters. You can also use the cursor to move to "Inst Number" and change it with the Value dial.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'INST COMMON',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'DRUM',
        },
        menuItems: [
          { label: 'Inst Number: 38 (D1)', selected: true },
          { label: 'Inst Name: Snare Drum' },
          { label: 'Level: 100' },
          { label: 'Pan: 0' },
        ],
        statusText: 'Current Note: D1 — Snare Drum',
      },
    },
    {
      id: 'step-6',
      title: 'Adjust Instrument Tuning',
      instruction:
        'Navigate to the KEY PARAM tab with E1 to access per-key pitch and tuning. Select the Tune parameter and press Enter to open the value popup.',
      highlightControls: ['function-e1', 'enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        parameterName: 'Tune',
        parameterValue: '+2',
        popupData: {
          popupType: 'value',
        },
      },
    },
    {
      id: 'step-7',
      title: 'Edit Instrument Level and Pan',
      instruction:
        'Press Exit to close the popup, then navigate back to INST COMMON. Move the cursor to Level and Pan to balance the snare drum in the kit mix.',
      highlightControls: ['exit', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'INST COMMON',
        selectedIndex: 2,
        toneEditData: {
          toneType: 'DRUM',
        },
        menuItems: [
          { label: 'Inst Number: 38 (D1)' },
          { label: 'Inst Name: Snare Drum' },
          { label: 'Level: 105', selected: true },
          { label: 'Pan: +5' },
        ],
        statusText: 'Current Note: D1 — Snare Drum',
      },
    },
    {
      id: 'step-8',
      title: 'Navigate to INST WAVE Tab',
      instruction:
        'Turn E1 to the INST WAVE tab. Each drum instrument can use up to 4 waves — toggle them on/off with Wave Sw buttons, and select which wave to edit with Wave Select.',
      details:
        'In the INST WAVE and INST WMT tabs, knobs E3–E6 correspond to editing Wave 1–4 respectively. You can use the [INC]/[DEC] buttons and [VALUE] dial to edit values while maintaining differences between waves.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'INST WAVE',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'DRUM',
          activePartials: [true, true, false, false],
          selectedPartial: 0,
        },
        menuItems: [
          { label: 'Wave Group: INT', selected: true },
          { label: 'Wave Number: 0489' },
          { label: 'Gain: 0dB' },
          { label: 'Tune: 0' },
        ],
        statusText: 'Wave1 selected — Current Note: D1',
      },
    },
    {
      id: 'step-9',
      title: 'Navigate to KIT MFX Tab',
      instruction:
        'Turn E1 to the KIT MFX tab. This controls the multi-effect applied to the entire drum kit — useful for adding compression, EQ, or spatial effects to the whole kit at once.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'KIT MFX',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'DRUM',
        },
        menuItems: [
          { label: 'MFX Type: 047:Compressor', selected: true },
          { label: 'MFX Switch: ON' },
          { label: 'Attack: 2' },
          { label: 'Release: 60' },
        ],
        statusText: 'Kit-level multi-effect',
      },
    },
    {
      id: 'step-10',
      title: 'Drum Kit Editing Complete!',
      instruction:
        'Press Exit to return to the home screen. You\'ve learned to navigate the Drum Kit editor — selecting instruments by key, editing per-instrument parameters, adjusting waves, and applying kit-level MFX.',
      details:
        'Drum Kit tones also have KIT COMP1–6 tabs for compressor settings (available when using Drum Kit Comp zones). Remember to save changes with Write.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'synth-param': { active: false },
        'zone-1': { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A005',
        sceneName: 'Drum Workshop',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
  ],
};
