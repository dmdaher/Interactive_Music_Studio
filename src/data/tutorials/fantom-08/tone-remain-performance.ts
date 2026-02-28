import { Tutorial } from '@/types/tutorial';

export const toneRemainPerformance: Tutorial = {
  id: 'tone-remain-performance',
  deviceId: 'fantom-08',
  title: 'Tone Remain, Master Tune & Performance Settings',
  description:
    'Configure the Fantom 08 for seamless live performance: enable Scene Remain and Tone Remain for smooth transitions, adjust Master Tune for alternate tuning, set Master Key Shift for transposition, and enable Scale Tune for just intonation or Arabic scales.',
  category: 'performance',
  difficulty: 'intermediate',
  estimatedTime: '6 min',
  tags: ['performance', 'tone-remain', 'scene-remain', 'tuning', 'scale-tune', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Seamless Live Performance',
      instruction:
        'Live performance requires seamless scene changes and precise tuning control. The Fantom has system settings for smooth sound transitions between scenes, alternate tuning systems, and global transposition.',
      details:
        'In this tutorial you will configure Scene Remain, Tone Remain, Master Tune, Master Key Shift, and Scale Tune — all essential settings for professional live performance.',
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
        'Press Menu, then touch SYSTEM to open the System Settings screen. The GENERAL tab is shown by default.',
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
      title: 'Find Scene Remain',
      instruction:
        'Scroll down the GENERAL tab parameters with E2 to find Scene Remain (OFF by default). This is near the bottom of the GENERAL parameter list.',
      highlightControls: ['function-e2'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'Zone Int/Ext Control: BASIC' },
          { label: 'Encoder Speed: FAST' },
          { label: 'Scene Remain: OFF', selected: true },
          { label: 'Startup Scene: A001' },
          { label: 'Pad Mode: Sample Pad' },
        ],
        selectedIndex: 2,
      },
    },
    {
      id: 'step-4',
      title: 'Enable Scene Remain',
      instruction:
        'Turn Scene Remain ON using E6. When enabled, the previous scene\'s sound continues to ring out even after switching to a new scene — preventing awkward silence during transitions.',
      details:
        'Note: When Scene Remain is ON, zones 9–16 do not make any sound. Also, you can use the rhythm pattern with the Scene Remain function on.',
      highlightControls: ['function-e6'],
      panelStateChanges: {
        'function-e2': { active: false },
      },
      displayState: {
        screenType: 'popup',
        title: 'GENERAL',
        parameterName: 'Scene Remain',
        parameterValue: 'ON',
        popupData: { popupType: 'value' },
      },
      tipText:
        'Scene Remain only works for zones 1–8. Plan your live scenes to use zones 1–8 if you need this feature.',
    },
    {
      id: 'step-5',
      title: 'Navigate to SOUND Tab',
      instruction:
        'Scroll to the SOUND tab using E1. This tab contains Tone Remain, Master Tune, Master Key Shift, Master Level, Scale Tune, and Output Gain — critical performance parameters.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SOUND',
        menuItems: [
          { label: 'Local Switch: ON', selected: true },
          { label: 'Tone Remain Sw: OFF' },
          { label: 'Master Tune: 440.0 Hz' },
          { label: 'Master Key Shift: 0' },
          { label: 'Master Level: 127' },
          { label: 'Scale Tune Sw: OFF' },
          { label: 'Output Gain: 0 dB' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-6',
      title: 'Enable Tone Remain',
      instruction:
        'Select Tone Remain Sw and turn it ON. When enabled, the currently-heard sound continues to ring out even when you select a different tone — no abrupt cutoffs.',
      highlightControls: ['function-e6'],
      panelStateChanges: {
        'function-e1': { active: false },
      },
      displayState: {
        screenType: 'popup',
        title: 'SOUND',
        parameterName: 'Tone Remain Sw',
        parameterValue: 'ON',
        popupData: { popupType: 'value' },
      },
      tipText:
        'Even with Tone Remain ON, some effect sounds might not be held in certain cases.',
    },
    {
      id: 'step-7',
      title: 'Adjust Master Tune',
      instruction:
        'Select Master Tune and adjust the frequency. The default is 440.0 Hz (standard A4 concert pitch). Range is 415.3–466.2 Hz. Set to 442.0 Hz to match orchestras that tune slightly sharp.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        title: 'SOUND',
        parameterName: 'Master Tune',
        parameterValue: '442.0 Hz',
        popupData: { popupType: 'value' },
      },
    },
    {
      id: 'step-8',
      title: 'Master Key Shift',
      instruction:
        'Select Master Key Shift and set the value. This transposes the entire instrument in semitone steps (range: -24 to +24). Useful for playing in a different key without changing your fingering.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        title: 'SOUND',
        parameterName: 'Master Key Shift',
        parameterValue: '0',
        popupData: { popupType: 'value' },
      },
      tipText:
        'Master Key Shift affects all zones globally. For per-zone transposition, use the zone Transpose parameter in the Scene Edit screen instead.',
    },
    {
      id: 'step-9',
      title: 'Enable Scale Tune',
      instruction:
        'Select Scale Tune Sw and turn it ON to use alternative tuning systems such as just intonation, Pythagorean, Arabic, or other historical temperaments. The scale type is configured per scene.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        title: 'SOUND',
        parameterName: 'Scale Tune Sw',
        parameterValue: 'ON',
        popupData: { popupType: 'value' },
      },
    },
    {
      id: 'step-10',
      title: 'Performance Settings Complete!',
      instruction:
        'Your live performance settings are configured. Scene Remain and Tone Remain ensure smooth transitions, Master Tune matches your ensemble, and Scale Tune opens up alternative temperaments. Press Write to save.',
      highlightControls: ['write'],
      panelStateChanges: {
        write: { active: true, ledOn: true, ledColor: '#ff2222' },
        'function-e6': { active: false },
      },
      displayState: {
        screenType: 'popup',
        title: 'SYSTEM',
        confirmText: 'Save system settings?',
        popupData: { popupType: 'confirm' },
      },
    },
  ],
};
