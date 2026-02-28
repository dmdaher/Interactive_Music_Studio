import { Tutorial } from '@/types/tutorial';

export const pedalWheelSetup: Tutorial = {
  id: 'pedal-wheel-setup',
  deviceId: 'fantom-08',
  title: 'Pedal, Wheel & S1/S2 Button Setup',
  description:
    'Configure the Fantom 08 physical controllers — pedals, wheels, and S1/S2 buttons — through the System Settings screen. Assign expression, bend, modulation, and other functions to enhance your live performance.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '6 min',
  tags: ['pedal', 'wheel', 'S1', 'S2', 'system-settings', 'controller', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Controller Setup',
      instruction:
        'Pedals, wheels, and the S1/S2 buttons are customizable controllers that enhance live performance. In this tutorial you will learn how to assign different functions to each controller through the System Settings.',
      details:
        'The Fantom 08 has two pedal jacks, two wheels (Wheel 1 for modulation, Wheel 2), a pitch bend lever, and two assignable S1/S2 buttons. Each can be configured globally (SYS) or per-scene (SCENE).',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open System Settings',
      instruction:
        'Press Menu, then touch SYSTEM to open the System Settings screen. The GENERAL tab is shown by default with tabs listed on the left sidebar.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'Auto Off: 4 Hours', selected: true },
          { label: 'USB Driver: VENDOR' },
          { label: 'LCD Brightness: 10' },
          { label: 'LED Brightness: MAX' },
          { label: 'Zone Sw Indicator: ON' },
          { label: 'Encoder Speed: FAST' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-3',
      title: 'Navigate to PEDAL Tab',
      instruction:
        'Use E1 to scroll the tab list to PEDAL. This tab configures the two pedal jacks — assign source (SYS or SCENE), polarity, continuous hold pedal, and pedal function assignments.',
      highlightControls: ['function-e1'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'PEDAL',
        menuItems: [
          { label: 'Pedal Assign Source: SYS', selected: true },
          { label: 'Pedal1,2 Polarity: STANDARD' },
          { label: 'Continuous Hold Pedal: OFF' },
          { label: 'Hold Pedal Polarity: STANDARD' },
          { label: 'Pedal1 Assign: CC04' },
          { label: 'Pedal2 Assign: OFF' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'If your pedal works backwards (pressing = off), change the Polarity to REVERSE.',
    },
    {
      id: 'step-4',
      title: 'Set Pedal Function',
      instruction:
        'Select Pedal1 Assign and use E6 to change it to CC11 (Expression). Expression control lets you smoothly fade volume up and down with your foot while playing.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        title: 'PEDAL',
        parameterName: 'Pedal1 Assign',
        parameterValue: 'CC11',
        popupData: { popupType: 'value' },
      },
    },
    {
      id: 'step-5',
      title: 'Navigate to WHEEL 1/2 Tab',
      instruction:
        'Scroll to the WHEEL 1/2 tab. Here you configure Wheel Assign Source, Wheel 1 and Wheel 2 function assignments, and their minimum/maximum range values.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'WHEEL 1/2',
        menuItems: [
          { label: 'Wheel Assign Source: SYS', selected: true },
          { label: 'Wheel1 Assign: CC01' },
          { label: 'Wheel2 Assign: OFF' },
          { label: 'Wheel1 Range Min: 0' },
          { label: 'Wheel1 Range Max: 127' },
          { label: 'Wheel2 Range Min: 0' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-6',
      title: 'Set Wheel 2 Function',
      instruction:
        'Select Wheel2 Assign and set it to BEND. This gives you pitch bend control from Wheel 2 in addition to the dedicated pitch bend lever.',
      highlightControls: ['function-e6', 'wheel-2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        title: 'WHEEL 1/2',
        parameterName: 'Wheel2 Assign',
        parameterValue: 'BEND',
        popupData: { popupType: 'value' },
      },
    },
    {
      id: 'step-7',
      title: 'Navigate to S1/S2 Tab',
      instruction:
        'Scroll to the S1/S2 tab. The S1 and S2 buttons can be set to MOMENTARY (active while held) or LATCH (toggle on/off) mode, and assigned to a wide range of functions.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'S1/S2',
        menuItems: [
          { label: 'S1,S2 Assign Source: SYS', selected: true },
          { label: 'S1 Switch Mode: MOMENTARY' },
          { label: 'S2 Switch Mode: MOMENTARY' },
          { label: 'S1 Switch Assign: OFF' },
          { label: 'S2 Switch Assign: OFF' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'MOMENTARY mode is best for effects you want to trigger only while pressing. LATCH mode is better for on/off toggles like chorus or reverb.',
    },
    {
      id: 'step-8',
      title: 'Assign S1 to Chorus',
      instruction:
        'Select S1 Switch Assign and set it to CHORUS SW. Now pressing the S1 button will toggle the chorus effect on and off during performance.',
      highlightControls: ['s1-btn', 'function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        title: 'S1/S2',
        parameterName: 'S1 Switch Assign',
        parameterValue: 'CHORUS SW',
        popupData: { popupType: 'value' },
      },
    },
    {
      id: 'step-9',
      title: 'Navigate to CLICK Tab',
      instruction:
        'Scroll to the CLICK tab using E1. This tab configures the metronome click — its mode, level, sound, accent, and output routing.',
      details:
        'Click settings: Click Mode controls when the click sounds (OFF, PLAY-ONLY, REC-ONLY, PLAY&REC, ALWAYS). Click Level adjusts volume (0-10). Click Sound selects the sound type (TYPE1 = conventional metronome, TYPE2 = click, TYPE3 = beep, TYPE4 = cowbell). Click Accent Switch adds emphasis on beat 1. Click Output Assign routes the click to MAIN or SUB output.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'CLICK',
        menuItems: [
          { label: 'Click Mode: OFF', selected: true },
          { label: 'Click Level: 5' },
          { label: 'Click Sound: TYPE1' },
          { label: 'Click Accent Switch: ON' },
          { label: 'Click Output Assign: MAIN' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-10',
      title: 'Configure Click Settings',
      instruction:
        'Select Click Mode and change it to PLAY&REC so the metronome sounds during both playback and recording. This is the most useful setting for working with the sequencer.',
      details:
        'Click Mode options: OFF (no click), PLAY-ONLY (click only during song/pattern playback), REC-ONLY (click only when recording), PLAY&REC (click during both), ALWAYS (click sounds at all times). For practice, ALWAYS is useful. For recording, REC-ONLY keeps the click out of your playback.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        parameterName: 'Click Mode',
        parameterValue: 'PLAY&REC',
        popupData: { popupType: 'value' },
        statusText: 'Click Mode: PLAY&REC — metronome during play and record',
      },
      tipText:
        'Use REC-ONLY if you want the click only while recording, so playback stays clean.',
    },
    {
      id: 'step-11',
      title: 'Navigate to CONTROL Tab',
      instruction:
        'Scroll to the CONTROL tab using E1. This tab configures the Control Function Settings — including the Control Source Select and System Control Source assignments.',
      details:
        'Control Function Settings: Control Source Select determines whether tone control uses system settings (SYS) or per-scene settings (SCENE). System Control Source 1-4 lets you assign up to four MIDI messages (OFF, CC01-95, BEND, AFT) that apply in common to the entire Fantom for volume, tone, and effects control.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'CONTROL',
        menuItems: [
          { label: 'Control Source Select: SYS', selected: true },
          { label: 'System Control Source1: CC01' },
          { label: 'System Control Source2: OFF' },
          { label: 'System Control Source3: OFF' },
          { label: 'System Control Source4: OFF' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-12',
      title: 'Knob and Slider Mode',
      instruction:
        'Navigate to the KNOB or SLIDER tabs to set the Knob Mode and Slider Mode. Choose between CATCH (value only changes when the knob/slider position matches the parameter) and DIRECT (value jumps immediately to the knob/slider position).',
      details:
        'CATCH mode prevents sudden jumps when a knob/slider physical position does not match the stored parameter value. The parameter only changes once the knob passes through the current value. DIRECT mode immediately sets the parameter to the knob position — faster but may cause audible jumps. CATCH is recommended for live performance.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'KNOB',
        menuItems: [
          { label: 'Knob Mode: CATCH', selected: true },
          { label: 'Knob1-8 Assign: OFF' },
          { label: 'Knob1-8 Range Min: 0' },
          { label: 'Knob1-8 Range Max: 127' },
        ],
        selectedIndex: 0,
        statusText: 'CATCH mode recommended for live performance',
      },
      tipText:
        'CATCH mode prevents sudden volume or parameter jumps when switching scenes — highly recommended for live use.',
    },
    {
      id: 'step-13',
      title: 'Save System Settings',
      instruction:
        'Press the Write button to save all your system settings changes — pedals, wheels, S1/S2, click, and control settings. The indication "Completed" appears when the save is finished.',
      highlightControls: ['write'],
      panelStateChanges: {
        write: { active: true, ledOn: true, ledColor: '#ff2222' },
      },
      displayState: {
        screenType: 'popup',
        title: 'SYSTEM',
        confirmText: 'Save system settings?',
        popupData: { popupType: 'confirm' },
      },
    },
    {
      id: 'step-14',
      title: 'Controller Setup Complete!',
      instruction:
        'Your pedals, wheels, S1/S2 buttons, metronome click, and control settings are now configured. Pedal 1 controls expression, Wheel 2 controls pitch bend, S1 toggles chorus, and the click sounds during play and record.',
      details:
        'You can set Assign Source to SCENE instead of SYS for different controller assignments per scene. Use CATCH mode for knobs and sliders in live performance to prevent sudden parameter jumps. The System Control Source assignments provide global controller mapping for tone and effects control.',
      highlightControls: [],
      panelStateChanges: {
        write: { active: false, ledOn: false },
        's1-btn': { active: false },
        'function-e1': { active: false },
        'function-e6': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
  ],
};
