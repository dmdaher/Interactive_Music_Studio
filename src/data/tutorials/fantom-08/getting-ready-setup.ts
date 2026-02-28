import { Tutorial } from '@/types/tutorial';

export const gettingReadySetup: Tutorial = {
  id: 'getting-ready-setup',
  deviceId: 'fantom-08',
  title: 'Getting Ready — First-Time Setup',
  description:
    'Set up your Fantom 08 for the first time. Learn how to make connections, power on safely, understand the home screen, and navigate the basic controls.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  tags: ['setup', 'getting-started', 'connections', 'power', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Welcome to the Fantom 08',
      instruction:
        'Welcome! This tutorial walks you through the initial setup of your Fantom 08 — from making connections to understanding the home screen. Follow these steps before diving into sound design and performance.',
      details:
        'The Fantom 08 is an 88-key synthesizer workstation with a powerful sound engine, sequencer, and sampler. Before you can play, you need to connect it properly and understand the basic navigation.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Rear Panel Connections',
      instruction:
        'Connect the included AC adaptor to the DC IN jack on the rear panel. Connect audio cables from the MAIN OUTPUT L/MONO and R jacks to your amp, speakers, or headphones to the PHONES jack.',
      details:
        'The rear panel also has a USB COMPUTER port (for DAW/MIDI), MIDI IN/OUT connectors, PEDAL jacks (CTRL 1, CTRL 2, HOLD), and a SUB OUTPUT. Use the KS-10Z, KS-12, KS-G8B, or KS-20X stands if placing the Fantom on a stand.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Connect AC adaptor, audio cables, and headphones',
      },
    },
    {
      id: 'step-3',
      title: 'Connecting Pedals',
      instruction:
        'If you have expression or sustain pedals, connect them to the PEDAL CTRL 1, CTRL 2, and HOLD jacks on the rear panel. The HOLD jack accepts a footswitch for sustain.',
      details:
        'PEDAL CTRL 1 and CTRL 2 accept expression pedals or footswitches. The HOLD jack is specifically for a damper/sustain pedal. If the pedal response seems reversed, you can change the polarity in System Settings (PEDAL tab). See the Pedal, Wheel & S1/S2 Button Setup tutorial for full configuration.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Connect pedals to CTRL 1, CTRL 2, and HOLD jacks',
      },
      tipText:
        'If your pedal works backwards, change polarity in Menu > SYSTEM > PEDAL.',
    },
    {
      id: 'step-4',
      title: 'Power On',
      instruction:
        'Before powering on, minimize the MASTER VOLUME knob. Then press the POWER switch on the rear panel. The display backlight comes on and the home screen appears after a few seconds.',
      details:
        'Always minimize volume before powering on or off to prevent speaker damage. The power-on sequence: minimize volume → press POWER → wait for display → turn on external devices → adjust external volume → adjust MASTER VOLUME. To power off: minimize volume → turn off external devices → press POWER.',
      highlightControls: ['master-volume'],
      panelStateChanges: {
        'master-volume': { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Grand Piano',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Minimize volume, then press POWER',
      },
      tipText:
        'Always minimize volume before turning the unit on or off to protect your speakers.',
    },
    {
      id: 'step-5',
      title: 'Understanding the Home Screen',
      instruction:
        'The home screen shows the current scene number and name, tempo, beat signature, and a zone summary. This is your starting point for all operations on the Fantom 08.',
      details:
        'The home screen displays: scene number (e.g., A001) and name at the top, tempo and time signature, zone overview showing active zones and their tones, and the SAMPLE PAD area. The screen is touch-sensitive — you can tap elements to navigate.',
      highlightControls: ['display'],
      panelStateChanges: {
        'master-volume': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Grand Piano',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-6',
      title: 'Basic Navigation Controls',
      instruction:
        'Press the MENU button to access all settings and features. Use the Cursor buttons to navigate, the Value dial to change values, and ENTER to confirm. Press EXIT to go back.',
      details:
        'The MENU button opens a grid of all major functions: TONE EDIT, ZONE EDIT, EFFECTS EDIT, SCENE CHAIN, UTILITY, SYSTEM, and more. The six E-knobs (E1-E6) below the display change function based on the current screen — their assignments are shown at the bottom of the display.',
      highlightControls: ['menu', 'cursor-up', 'cursor-down', 'value-dial', 'enter', 'exit'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'MENU',
        menuItems: [
          { label: 'TONE EDIT' },
          { label: 'ZONE EDIT' },
          { label: 'EFFECTS EDIT' },
          { label: 'SCENE CHAIN' },
          { label: 'UTILITY' },
          { label: 'SYSTEM' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-7',
      title: 'Setup Complete!',
      instruction:
        'Press Exit to return to the home screen. Your Fantom 08 is ready to play! Next, try the Panel Overview tutorial to learn all the controls, or Selecting Scenes to explore the built-in sounds.',
      details:
        'The Auto Off feature will turn the unit off after 4 hours of inactivity by default. To change this, go to Menu > SYSTEM > GENERAL and adjust the Auto Off setting. Remember to save your system settings with the Write button if you change Auto Off.',
      highlightControls: ['exit'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Grand Piano',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Setup complete — ready to play!',
      },
      tipText:
        'Auto Off is set to 4 hours by default. Change it in Menu > SYSTEM > GENERAL if needed.',
    },
  ],
};
