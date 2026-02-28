import { Tutorial } from '@/types/tutorial';

export const toneExpansionFavorites: Tutorial = {
  id: 'tone-expansion-favorites',
  deviceId: 'fantom-08',
  title: 'Tone Expansion Management',
  description:
    'Learn to install, manage, and use expansion tones on the Fantom 08. Add SOUND PACK or WAVE EXPANSION sounds (up to 16) from Roland Cloud or USB, optimize storage, and select expansion tones in your scenes.',
  category: 'sound-design',
  difficulty: 'intermediate',
  estimatedTime: '6 min',
  tags: ['expansion', 'sound-pack', 'install', 'roland-cloud', 'sound-design'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Tone Expansion',
      instruction:
        'The Fantom 08 can hold up to 16 expansion sounds — SOUND PACK or WAVE EXPANSION tones obtained from Roland Cloud or saved to a USB flash drive. These add new instrument types and sounds beyond the factory presets.',
      details:
        'Expansion tones include additional SN-AP pianos, SN-EP electric pianos, MODEL synths, and wave-based sounds. Some expansions (SN-AP, SN-EP) come pre-installed by factory default.',
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
      title: 'Access the EXPANSION Screen',
      instruction:
        'To access the EXPANSION screen, hold down the [TEMPO] button while turning on the power. The screen shows installed expansion slots, used storage space, and management buttons.',
      details:
        'The EXPANSION screen shows each installed tone as a named slot. The bottom bar displays: E1=UNINSTALL, E2=UNINSTALL ALL, E3=OPTIMIZE, E6=INSTALL. The storage bar shows used vs available space.',
      highlightControls: ['tempo'],
      panelStateChanges: {
        'tempo': { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'EXPANSION',
        menuItems: [
          { label: 'EXSN01: SN Ac.Piano 1' },
          { label: 'EXSN02: SN E.Piano 1' },
          { label: '(empty)' },
          { label: '(empty)' },
        ],
        selectedIndex: 0,
        statusText: 'Used Space: 2/16 — E1:UNINSTALL  E2:UNINSTALL ALL  E3:OPTIMIZE  E6:INSTALL',
      },
    },
    {
      id: 'step-3',
      title: 'Install a Tone from USB',
      instruction:
        'Connect a USB flash drive with sound data to the USB MEMORY port. Press E6 (INSTALL), then use E1 to select the tone you want to add. Press E6 (INSTALL) again to confirm.',
      details:
        'Save the downloaded sound data to the root directory of your USB flash drive before connecting. After selecting and confirming, a confirmation message appears — press E5 (OK) to proceed. Never turn off power while the screen indicates "working".',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'EXPANSION',
        menuItems: [
          { label: 'EXSN01: SN Ac.Piano 1' },
          { label: 'EXSN02: SN E.Piano 1' },
          { label: 'EXZ001: Stage Piano 1', selected: true },
          { label: '(empty)' },
        ],
        selectedIndex: 2,
        statusText: 'Used Space: 3/16 — Tone installed successfully',
      },
    },
    {
      id: 'step-4',
      title: 'Browse Installed Tones',
      instruction:
        'Use the cursor buttons to navigate through the installed expansion slots. Each slot shows the expansion ID and tone name. The storage bar updates to reflect used space.',
      highlightControls: ['cursor-up', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'EXPANSION',
        menuItems: [
          { label: 'EXSN01: SN Ac.Piano 1', selected: true },
          { label: 'EXSN02: SN E.Piano 1' },
          { label: 'EXZ001: Stage Piano 1' },
          { label: '(empty)' },
        ],
        selectedIndex: 0,
        statusText: 'Used Space: 3/16 — Slot 1 of 16',
      },
    },
    {
      id: 'step-5',
      title: 'Optimize Storage',
      instruction:
        'Press E3 (OPTIMIZE) to defragment the tone storage area. Over time, adding and removing tones can fragment memory — optimizing consolidates free space so new tones can be added.',
      details:
        'A confirmation message appears. Press E5 (OK) to proceed, or E6 (CANCEL) to abort. Never turn off power or remove USB during optimization.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        confirmText: 'Optimize tone storage area?',
        popupData: {
          popupType: 'confirm',
          message: 'Optimize tone storage area?',
        },
        statusText: 'E5:OK  E6:CANCEL',
      },
    },
    {
      id: 'step-6',
      title: 'Remove a Tone',
      instruction:
        'To remove an expansion tone, select it with the cursor buttons, then press E1 (UNINSTALL). Confirm with E5 (OK). Use E2 (UNINSTALL ALL) to remove all expansion tones at once.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        confirmText: 'Uninstall selected tone?',
        popupData: {
          popupType: 'confirm',
          message: 'Uninstall selected tone?',
        },
        statusText: 'E5:OK  E6:CANCEL',
      },
    },
    {
      id: 'step-7',
      title: 'Select Expansion Tones in Tone List',
      instruction:
        'After a power cycle, expansion tones appear in the Tone List. In the TONE LIST screen, select a category — expansion tones appear at the end of their category. In ZONE VIEW, expansion tones use the bank prefix "EXZ***".',
      details:
        'Different expansion types are accessed differently: EXP TONE tones appear in the TONE LIST; EXP TONE WAVE uses Wave Group "EXP" in TONE EDIT OSC; EXP RHYTHM INST and EXP RHYTHM WAVE use "EXZ***" in drum kit editing.',
      highlightControls: [],
      panelStateChanges: {
        'tempo': { active: false },
      },
      displayState: {
        screenType: 'tone-select',
        title: 'TONE LIST',
        menuItems: [
          { label: 'SN-AP PR-A 0001: Concert Grand' },
          { label: 'SN-AP PR-A 0002: Bright Concert' },
          { label: 'SN-AP PR-A 0003: Mellow Concert' },
          { label: 'SN-AP EXZ001: Stage Piano 1', selected: true },
        ],
        selectedIndex: 3,
        statusText: 'Category: Ac.Piano — Expansion tones at end of list',
      },
    },
    {
      id: 'step-8',
      title: 'Tone Expansion Complete!',
      instruction:
        'You now know how to manage expansion tones — installing from USB/Roland Cloud, browsing slots, optimizing storage, removing tones, and selecting expansion tones in your scenes.',
      details:
        'Expansion tones work just like built-in tones once installed — you can edit them with Tone Edit, use them in any zone, and save them in scenes. Check Roland Cloud regularly for new expansion packs.',
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
  ],
};
