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
      title: 'Save System Settings',
      instruction:
        'Press the Write button to save your system settings changes. The indication "Completed" appears when the save is finished.',
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
      id: 'step-10',
      title: 'Controller Setup Complete!',
      instruction:
        'Your pedals, wheels, and S1/S2 buttons are now configured. Pedal 1 controls expression, Wheel 2 controls pitch bend, and S1 toggles chorus on/off. These settings apply globally across all scenes.',
      details:
        'You can also set Assign Source to SCENE instead of SYS to have different controller assignments per scene. This is useful when different sounds need different controller behaviors.',
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
