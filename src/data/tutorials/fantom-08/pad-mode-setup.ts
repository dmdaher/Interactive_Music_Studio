import { Tutorial } from '@/types/tutorial';

export const padModeSetup: Tutorial = {
  id: 'pad-mode-setup',
  deviceId: 'fantom-08',
  title: 'Pad Mode Setup — Configure Pad Functions',
  description:
    'Learn how to configure the 16 pad modes on the Fantom 08. Switch between Sample Pad, Note Pad, Zone Mute, DAW Control, and more to customize your pads for any workflow.',
  category: 'sampling',
  difficulty: 'intermediate',
  estimatedTime: '10 min',
  tags: ['pads', 'pad-mode', 'sample-pad', 'note-pad', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Pad Modes',
      instruction:
        'The Fantom 08 has 16 velocity-sensitive pads that can do much more than trigger samples. Using Pad Mode, you can assign each pad to a different function — from sample playback and note triggering to zone muting, DAW control, and sequencer patterns.',
      details:
        "In this tutorial, you'll learn how to access the Pad Mode selection screen, switch between different pad modes, edit pad settings, and switch pad banks for even more assignments.",
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
      title: 'Open the Pad Mode Screen',
      instruction:
        'Press the Pad Mode button (in the Pad section) to open the Pad Mode selection screen. A 4x4 grid of available pad modes appears on the display.',
      details:
        'The Pad Mode button launches a popup screen showing all available pad functions. Each grid position corresponds to a physical pad — press a pad or touch a mode icon to select it.',
      highlightControls: ['pad-mode'],
      panelStateChanges: {
        'pad-mode': { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Press the pads to select.',
        menuItems: [
          { label: '1: Sample Pad', selected: true },
          { label: '2: Note Pad' },
          { label: '3: Partial Sw/Sel' },
          { label: '4: DAW Control' },
          { label: '5: Zone Mute' },
          { label: '6: Zone Solo' },
          { label: '7: Kbd Sw Group' },
          { label: '8: Rhythm Pattern' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'The Pad Mode button is in the Pad section, above the 16 performance pads.',
    },
    {
      id: 'step-3',
      title: 'Understand the Pad Mode Grid',
      instruction:
        'The display shows a 4x4 grid of pad mode icons. Each position maps to a physical pad: Pad 1 = Sample Pad, Pad 2 = Note Pad, Pad 5 = Zone Mute, Pad 8 = Rhythm Pattern, Pad 9 = Pattern, and more.',
      details:
        'Not all 16 pads have assigned modes — some positions may be empty. The most commonly used modes are Sample Pad (trigger samples), Note Pad (play notes like keys), Zone Mute/Solo (live mixing), and Pattern (sequencer control). The currently active mode is highlighted.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Current: Sample Pad',
        menuItems: [
          { label: '1: Sample Pad', selected: true },
          { label: '2: Note Pad' },
          { label: '3: Partial Sw/Sel' },
          { label: '4: DAW Control' },
          { label: '5: Zone Mute' },
          { label: '6: Zone Solo' },
          { label: '7: Kbd Sw Group' },
          { label: '8: Rhythm Pattern' },
          { label: '9: Pattern' },
          { label: '10: Variation Play' },
          { label: '11: Group Play' },
          { label: '16: System' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'Pads 12-15 are reserved and have no mode assignment on the Fantom-0 series.',
    },
    {
      id: 'step-4',
      title: 'Select Sample Pad Mode',
      instruction:
        'Press Pad 1 to select Sample Pad mode. In this mode, each pad triggers a sample from the current pad bank — ideal for playing drum hits, sound effects, or vocal snippets.',
      details:
        'Sample Pad is the default pad mode. When active, the 16 pads trigger individual samples loaded into the current bank. You can record and assign samples using the Sampling workflow.',
      highlightControls: ['pad-1'],
      panelStateChanges: {
        'pad-1': { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Selected: Sample Pad',
        menuItems: [
          { label: '1: Sample Pad', selected: true },
          { label: '2: Note Pad' },
          { label: '3: Partial Sw/Sel' },
          { label: '4: DAW Control' },
          { label: '5: Zone Mute' },
          { label: '6: Zone Solo' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'Sample Pad mode is the default mode. Samples are stored per pad bank, so you can have up to 32 samples across Bank A and Bank B.',
    },
    {
      id: 'step-5',
      title: 'Switch to Note Pad Mode',
      instruction:
        'Press Pad 2 to switch to Note Pad mode. In this mode, each pad plays a chromatic note using the tone assigned to the current zone — like having 16 extra keyboard keys.',
      details:
        'Note Pad mode maps each pad to a specific MIDI note. The starting note and velocity curve can be edited in the pad settings. This is great for playing melodies or chord stabs from the pads.',
      highlightControls: ['pad-2'],
      panelStateChanges: {
        'pad-1': { active: false, ledOn: false },
        'pad-2': { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Selected: Note Pad',
        menuItems: [
          { label: '1: Sample Pad' },
          { label: '2: Note Pad', selected: true },
          { label: '3: Partial Sw/Sel' },
          { label: '4: DAW Control' },
          { label: '5: Zone Mute' },
          { label: '6: Zone Solo' },
        ],
        selectedIndex: 1,
      },
      tipText:
        'In Note Pad mode, the pads use the same tone as the selected zone. Change the zone tone to change what the pads sound like.',
    },
    {
      id: 'step-6',
      title: 'Select Zone Mute Mode',
      instruction:
        'Press Pad 5 to switch to Zone Mute mode. Each pad now toggles the mute state of a zone — press Pad 1 to mute/unmute Zone 1, Pad 2 for Zone 2, and so on. This is essential for live performance.',
      details:
        'Zone Mute mode turns your pads into a live mixing controller. Muted zones show a dimmed LED, active zones glow brightly. You can mute and unmute zones in real time while playing the keyboard, creating dynamic arrangements on the fly.',
      highlightControls: ['pad-5'],
      panelStateChanges: {
        'pad-2': { active: false, ledOn: false },
        'pad-5': { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Selected: Zone Mute',
        menuItems: [
          { label: '1: Sample Pad' },
          { label: '2: Note Pad' },
          { label: '3: Partial Sw/Sel' },
          { label: '4: DAW Control' },
          { label: '5: Zone Mute', selected: true },
          { label: '6: Zone Solo' },
        ],
        selectedIndex: 4,
      },
      tipText:
        'Zone Mute and Zone Solo (Pad 6) work the same way — but Solo isolates one zone while muting all others.',
    },
    {
      id: 'step-7',
      title: 'Open Pad Mode Edit Screen',
      instruction:
        'Hold SHIFT and press the Pad Mode button to open the Pad Mode Edit screen. This lets you configure detailed settings like velocity curve, hold behavior, and pad sensitivity for the current mode.',
      details:
        'The Edit screen provides per-mode parameters. For Sample Pad mode, you can set loop on/off, play mode (one-shot vs gate), and velocity curve. For Note Pad mode, you can set the base note and octave range. Use the E-knobs and Value dial to adjust parameters.',
      highlightControls: ['shift', 'pad-mode'],
      panelStateChanges: {
        'pad-5': { active: false, ledOn: false },
        shift: { active: true },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE EDIT',
        statusText: 'Edit pad settings',
        menuItems: [
          { label: 'Velocity Curve: Linear', selected: true },
          { label: 'Hold Mode: OFF' },
          { label: 'Pad Sensitivity: MED' },
          { label: 'Play Mode: One-Shot' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'Hold mode keeps a sample playing after you release the pad. Useful for long samples or loops.',
    },
    {
      id: 'step-8',
      title: 'Test a Pad in the Current Mode',
      instruction:
        'Press Pad 1 to test the current pad mode in action. If you are in Sample Pad mode, the pad triggers its assigned sample. If in Note Pad mode, it plays a note. Verify the mode is working as expected.',
      details:
        'Testing pads after changing modes ensures everything is configured correctly. The pad LED will flash when struck, and you should hear the assigned sound or see the expected behavior (such as a zone muting if in Zone Mute mode).',
      highlightControls: ['pad-1'],
      panelStateChanges: {
        shift: { active: false },
        'pad-1': { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Testing: Pad 1',
        menuItems: [
          { label: '1: Sample Pad', selected: true },
          { label: '2: Note Pad' },
          { label: '5: Zone Mute' },
          { label: '6: Zone Solo' },
          { label: '8: Rhythm Pattern' },
          { label: '9: Pattern' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'Strike the pad at different velocities to test the velocity curve response.',
    },
    {
      id: 'step-9',
      title: 'Switch Pad Bank',
      instruction:
        'Press the Bank button to switch from Bank A to Bank B. Each bank holds a separate set of pad assignments, giving you 32 pads total across two banks.',
      details:
        'The Bank button toggles between Bank A and Bank B. Each bank stores independent pad mode assignments and sample mappings. Use Bank A for drum samples and Bank B for sound effects, or configure them however you like.',
      highlightControls: ['bank'],
      panelStateChanges: {
        'pad-1': { active: false, ledOn: false },
        bank: { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'pad-mode',
        title: 'PAD MODE',
        statusText: 'Bank B selected',
        menuItems: [
          { label: 'Bank: B', selected: true },
          { label: '1: Sample Pad' },
          { label: '2: Note Pad' },
          { label: '3: Partial Sw/Sel' },
          { label: '4: DAW Control' },
          { label: '5: Zone Mute' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'Bank A and Bank B each have their own pad mode and sample assignments. Switching banks does not affect the keyboard zones.',
    },
    {
      id: 'step-10',
      title: 'Pad Mode Setup Complete!',
      instruction:
        'Press Exit to close the Pad Mode screen and return to the home screen. Your pad mode configuration is saved with the current scene — use Write to store it permanently.',
      details:
        'You now know how to switch between pad modes, edit pad settings, and use pad banks. Try Zone Solo mode for live sound isolation, Rhythm Pattern mode for triggering drum patterns, or DAW Control mode to control your recording software directly from the pads.',
      highlightControls: ['exit'],
      panelStateChanges: {
        bank: { active: false, ledOn: false },
        'pad-mode': { active: false, ledOn: false },
        exit: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Pad mode configured',
      },
      tipText:
        'Pad modes are saved per scene. Use Write to save your pad mode setup so it persists after power off.',
    },
  ],
};
