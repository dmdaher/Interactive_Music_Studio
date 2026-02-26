import { Tutorial } from '@/types/tutorial';

export const toneEditingZoom: Tutorial = {
  id: 'tone-editing-zoom',
  deviceId: 'fantom-08',
  title: 'Editing Tone Parameters (Zoom View)',
  description:
    'Learn how to access and navigate the Tone Edit ZOOM screen to shape your sound. Adjust oscillator, filter, and amp parameters for any Z-Core tone using the intuitive tabbed ZOOM interface.',
  category: 'sound-design',
  difficulty: 'beginner',
  estimatedTime: '6 min',
  tags: ['tone-edit', 'zoom', 'sound-design', 'beginner', 'z-core'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Tone Editing',
      instruction:
        "The Fantom 08 lets you edit every aspect of a tone's sound using the Tone Edit screens. In this tutorial, you'll learn the ZOOM view — a focused, tab-by-tab editor that shows one parameter section at a time.",
      details:
        "There are two Tone Edit views: ZOOM (focused, one section at a time) and PRO (grid showing all parameters at once). We'll start with ZOOM because it's easier to navigate for beginners.",
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A005',
        sceneName: 'Synth Lead',
        tempo: 128,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Select Zone 1',
      instruction:
        'Press the Zone 1 button to select the zone containing our Saw Lead tone. This ensures any edits we make apply to Zone 1.',
      highlightControls: ['zone-1'],
      panelStateChanges: {
        'zone-1': { active: true, ledOn: true, ledColor: '#3B82F6' },
      },
      displayState: {
        screenType: 'zone-view',
        title: 'ZONE VIEW',
        sceneNumber: 'A005',
        sceneName: 'Synth Lead',
        tempo: 128,
        beatSignature: '4/4',
        zoneViewMode: 1,
        zones: [
          {
            zoneNumber: 1,
            zoneName: 'Zone 1',
            toneName: 'Saw Lead',
            toneType: 'Z-Core',
            toneBank: 'PR-A',
            toneCategory: 'Synth',
            toneNumber: '0145',
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
          label: 'Zone 1 (Saw Lead)',
        },
      ],
    },
    {
      id: 'step-3',
      title: 'Enter Tone Edit ZOOM',
      instruction:
        'Press the OSC button in the Synth Control section to jump directly into the Tone Edit ZOOM screen on the OSC tab.',
      details:
        'The Synth Control buttons (OSC, FILTER TYPE, AMP, FX, LFO) are shortcuts that open Tone Edit ZOOM directly on the corresponding tab. You can also access Tone Edit via Menu > Tone Edit.',
      highlightControls: ['synth-mode-osc'],
      panelStateChanges: {
        'synth-mode-osc': { active: true },
      },
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'OSC',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'Z-CORE',
          activePartials: [true, true, false, false],
          selectedPartial: 0,
        },
        menuItems: [
          { label: 'Wave Type: SAW', selected: true },
          { label: 'Wave Variation: ---' },
          { label: 'Gain: 0dB' },
          { label: 'Detune: 0' },
        ],
      },
      tipText:
        'The OSC button is the quickest shortcut to start editing oscillator settings.',
    },
    {
      id: 'step-4',
      title: 'Browse Tabs with E1',
      instruction:
        "Turn the E1 knob to scroll through the available tabs. Navigate to the FILTER tab to adjust the tone's brightness.",
      details:
        'The ZOOM screen has many tabs: COMMON, STRUCTURE, KEYBOARD, OSC, Pitch, PITCH ENV, FILTER, FILTER ENV, AMP, AMP ENV, LFO, and more. E1 scrolls through them.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'FILTER',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'Z-CORE',
          activePartials: [true, true, false, false],
          selectedPartial: 0,
        },
        menuItems: [
          { label: 'Filter Type: LPF', selected: true },
          { label: 'Cutoff: 80' },
          { label: 'Resonance: 30' },
          { label: 'Key Follow: +100' },
        ],
      },
      tipText: 'E1 always scrolls between tabs in the ZOOM editor.',
    },
    {
      id: 'step-5',
      title: 'Select a Parameter',
      instruction:
        'Use the Cursor Down button or E2 knob to move the selection to the "Cutoff" parameter.',
      details:
        'E2 scrolls the cursor up/down to select a parameter. You can also use the cursor buttons for the same purpose.',
      highlightControls: ['cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'FILTER',
        selectedIndex: 1,
        toneEditData: {
          toneType: 'Z-CORE',
          activePartials: [true, true, false, false],
          selectedPartial: 0,
        },
        menuItems: [
          { label: 'Filter Type: LPF' },
          { label: 'Cutoff: 80', selected: true },
          { label: 'Resonance: 30' },
          { label: 'Key Follow: +100' },
        ],
      },
    },
    {
      id: 'step-6',
      title: 'Adjust the Cutoff Value',
      instruction:
        'Turn the Value dial to change the Cutoff frequency. Increase it to 110 for a brighter sound, or decrease it for a darker, more muffled tone.',
      details:
        'Cutoff controls how much of the harmonic spectrum passes through the filter. Higher values = brighter sound, lower values = darker sound. The range is 0-127.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'FILTER',
        selectedIndex: 1,
        toneEditData: {
          toneType: 'Z-CORE',
          activePartials: [true, true, false, false],
          selectedPartial: 0,
        },
        menuItems: [
          { label: 'Filter Type: LPF' },
          { label: 'Cutoff: 110', selected: true },
          { label: 'Resonance: 30' },
          { label: 'Key Follow: +100' },
        ],
      },
      tipText:
        'Play notes while adjusting the cutoff to hear the change in real time.',
    },
    {
      id: 'step-7',
      title: 'Focused Value Editing',
      instruction:
        'Press Enter to open a focused value popup for precise editing. The popup shows the parameter name, current value, and lets you use the Value dial for fine adjustments.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        parameterName: 'Cutoff',
        parameterValue: '110',
        selectedIndex: 110,
        popupData: {
          popupType: 'value',
        },
      },
      tipText:
        'The value popup is useful for precise adjustments — you can see the exact numeric value.',
    },
    {
      id: 'step-8',
      title: 'Navigate to AMP Tab',
      instruction:
        'Press Exit to close the popup, then turn E1 to navigate to the AMP tab. Here you can adjust the volume envelope and output level for the tone.',
      highlightControls: ['exit', 'function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'AMP',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'Z-CORE',
          activePartials: [true, true, false, false],
          selectedPartial: 0,
        },
        menuItems: [
          { label: 'Level: 100', selected: true },
          { label: 'Velocity Sens: +63' },
          { label: 'Pan: 0' },
          { label: 'Tone Delay Type: OFF' },
        ],
      },
    },
    {
      id: 'step-9',
      title: 'Tone Editing Complete!',
      instruction:
        "Press Exit to return to the main screen. You've learned how to navigate the Tone Edit ZOOM screen — browsing tabs with E1, selecting parameters, and editing values.",
      details:
        'Remember to save your changes with the Write button if you want to keep them. Next, try the PRO view (touch <To PRO> in ZOOM) for a detailed grid showing all partials at once.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'synth-mode-osc': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A005',
        sceneName: 'Synth Lead',
        tempo: 128,
        beatSignature: '4/4',
      },
      tipText:
        'Try the other Synth Control buttons (FILTER TYPE, AMP, LFO) — they all jump to the corresponding ZOOM tab.',
    },
  ],
};
