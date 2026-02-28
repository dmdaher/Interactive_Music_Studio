import { Tutorial } from '@/types/tutorial';

export const modelJp8Editing: Tutorial = {
  id: 'model-jp8-editing',
  deviceId: 'fantom-08',
  title: 'MODEL/JP-8 Tone Editing',
  description:
    'Explore the MODEL engine with its authentic Jupiter-8 modeling. Edit VCO oscillators, vintage VCF filter, VCA, and dual envelopes using a unique signal flow that recreates the classic JP-8 architecture.',
  category: 'sound-design',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['model', 'jp-8', 'jupiter-8', 'vintage', 'tone-edit', 'sound-design'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to the MODEL Engine',
      instruction:
        'The MODEL engine recreates the signal flow and character of the classic Roland Jupiter-8. It uses VCO-1/VCO-2 oscillators through a HPF → VCF → VCA chain with LFO, ENV-1, and ENV-2 modulation — just like the original hardware.',
      details:
        'To use MODEL tones, the Model tone expansion must be installed (check via EXPANSION screen at boot). The tabs and parameters differ depending on the model bank selected. The JP8 bank is covered in this tutorial.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'B020',
        sceneName: 'Berlin Night',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Select a MODEL Zone',
      instruction:
        'Press Zone 1 to select the zone containing our Berlin Night tone. The zone view shows the tone type as MODEL.',
      highlightControls: ['zone-1'],
      panelStateChanges: {
        'zone-1': { active: true, ledOn: true, ledColor: '#3B82F6' },
      },
      displayState: {
        screenType: 'zone-view',
        title: 'ZONE VIEW',
        sceneNumber: 'B020',
        sceneName: 'Berlin Night',
        tempo: 120,
        beatSignature: '4/4',
        zoneViewMode: 1,
        zones: [
          {
            zoneNumber: 1,
            zoneName: 'Zone 1',
            toneName: 'Berlin Night',
            toneType: 'MODEL',
            toneBank: 'EXZ',
            toneCategory: 'Synth',
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
          label: 'Zone 1 (Berlin Night)',
        },
      ],
    },
    {
      id: 'step-3',
      title: 'Enter JP-8 Tone Edit — GENERAL Tab',
      instruction:
        'Press the PARAM button to open the MODEL/JP-8 Tone Edit screen. The GENERAL tab shows the JUPITER-8 header and key play mode settings: KEY MODE, CONDITION, PITCH DRIFT, and PORTAMENT.',
      details:
        'KEY MODE options: POLY (polyphonic), SOLO (monophonic), UNISON (all voices stacked), SL-UNISON (solo + unison). E1 scrolls tabs, E2-E6 edit the corresponding parameters at the cursor position.',
      highlightControls: ['synth-param'],
      panelStateChanges: {
        'synth-param': { active: true },
      },
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'GENERAL',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'JP8',
        },
        menuItems: [
          { label: 'KEY MODE: POLY', selected: true },
          { label: 'CONDITION: 25' },
          { label: 'PITCH DRIFT: 16' },
          { label: 'PORTAMENT: 250' },
          { label: 'ORG: OFF' },
          { label: 'SL-UNISON: LINEAR' },
        ],
      },
    },
    {
      id: 'step-4',
      title: 'Understand the Signal Flow',
      instruction:
        'The JP-8 signal flow is shown visually on the GENERAL tab: VCO-1 and VCO-2 feed into HPF (high-pass filter), then VCF (voltage-controlled filter), then VCA (voltage-controlled amplifier), then MFX.',
      details:
        'LFO modulates multiple stages. ENV-1 controls the filter, ENV-2 controls the amplifier. This architecture mirrors the original Jupiter-8 panel layout, making it intuitive for vintage synth enthusiasts.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'GENERAL',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'JP8',
        },
        menuItems: [
          { label: 'KEY MODE: POLY', selected: true },
          { label: 'CONDITION: 25' },
          { label: 'PITCH DRIFT: 16' },
          { label: 'PORTAMENT: 250' },
          { label: 'ORG: OFF' },
          { label: 'SL-UNISON: LINEAR' },
        ],
        statusText: 'Signal: VCO-1/VCO-2 → HPF → VCF → VCA → MFX',
      },
    },
    {
      id: 'step-5',
      title: 'Navigate to OSC Tab',
      instruction:
        'Turn E1 to the OSC tab. Here you can edit VCO-1 and VCO-2 parameters: waveform, range, fine tune, and cross-modulation between the two oscillators.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'OSC',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'JP8',
        },
        menuItems: [
          { label: 'VCO-1 Wave: SAW', selected: true },
          { label: 'VCO-1 Range: 8\'' },
          { label: 'VCO-2 Wave: SQUARE' },
          { label: 'VCO-2 Range: 8\'' },
          { label: 'VCO-2 Fine Tune: +3' },
          { label: 'Cross Mod: 0' },
        ],
      },
    },
    {
      id: 'step-6',
      title: 'Navigate to VCF Tab',
      instruction:
        'Turn E1 to the VCF tab. This is the heart of the JP-8 sound — the voltage-controlled filter with vintage modeling that gives the Jupiter-8 its characteristic warmth.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'VCF',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'JP8',
        },
        menuItems: [
          { label: 'Cutoff: 80', selected: true },
          { label: 'Resonance: 30' },
          { label: 'HPF Cutoff: 0' },
          { label: 'ENV-1 Depth: +50' },
          { label: 'LFO Depth: 0' },
          { label: 'Key Follow: +100' },
        ],
      },
    },
    {
      id: 'step-7',
      title: 'Adjust VCF Cutoff',
      instruction:
        'Select Cutoff and press Enter to open the value popup. The JP-8 filter has a distinctive smooth response — sweep it to hear the classic Jupiter character.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        parameterName: 'Cutoff',
        parameterValue: '80',
        popupData: {
          popupType: 'value',
        },
      },
      tipText:
        'The JP-8 filter sounds different from the Z-Core filter — it models the original analog circuit behavior.',
    },
    {
      id: 'step-8',
      title: 'Navigate to ENV1 Tab',
      instruction:
        'Press Exit, then turn E1 to the ENV1 tab. Envelope 1 controls the filter — set Attack, Decay, Sustain, and Release to shape how the filter opens and closes over time.',
      highlightControls: ['exit', 'function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'ENV1',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'JP8',
        },
        menuItems: [
          { label: 'Attack: 0', selected: true },
          { label: 'Decay: 60' },
          { label: 'Sustain: 40' },
          { label: 'Release: 30' },
        ],
      },
    },
    {
      id: 'step-9',
      title: 'Navigate to ENV2 Tab',
      instruction:
        'Turn E1 to ENV2. Envelope 2 controls the amplifier — shaping the volume contour of the sound from initial attack through sustain to final release.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'tone-edit-zoom',
        activeTab: 'ENV2',
        selectedIndex: 0,
        toneEditData: {
          toneType: 'JP8',
        },
        menuItems: [
          { label: 'Attack: 0', selected: true },
          { label: 'Decay: 80' },
          { label: 'Sustain: 70' },
          { label: 'Release: 40' },
        ],
      },
    },
    {
      id: 'step-10',
      title: 'MODEL/JP-8 Editing Complete!',
      instruction:
        'Press Exit to return to the home screen. You\'ve explored the MODEL/JP-8 engine — its vintage oscillators, characteristic filter, and dual ADSR envelopes recreate the sound of the legendary Jupiter-8.',
      details:
        'The MODEL engine also has LFO/MOD, VCA, KBD (keyboard), and MFX tabs for further sound shaping. Different model banks may have different tab layouts and parameters.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'synth-param': { active: false },
        'zone-1': { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'B020',
        sceneName: 'Berlin Night',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
  ],
};
