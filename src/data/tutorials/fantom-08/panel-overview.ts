import { Tutorial } from '@/types/tutorial';

export const panelOverview: Tutorial = {
  id: 'panel-overview',
  deviceId: 'fantom-08',
  title: 'Getting to Know the Fantom 08 Panel',
  description:
    "Take a guided tour of the Fantom 08's front panel. Learn where the zone buttons, display, sliders, knobs, pads, and transport controls are located.",
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '3 min',
  tags: ['overview', 'panel', 'controls', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Welcome to the Fantom 08',
      instruction:
        'This tutorial gives you a quick tour of the Fantom 08 panel. Each step highlights a different section so you can find your way around.',
      details:
        "The Fantom 08 has eight main areas: controller wheels, zone section, display area, synth controls, tone categories, pads, and transport/sequencer. Let's explore each one.",
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
      title: 'Zone Buttons & Sliders',
      instruction:
        "The Zone section is the large area on the left. Zone buttons 1\u20138 select which zone you're editing, and the sliders control volume for each zone.",
      details:
        'Each zone can hold a different sound. The colored LEDs show which zones are active. Above the sliders are eight control knobs that can adjust various parameters.',
      highlightControls: [
        'zone-1',
        'zone-2',
        'zone-3',
        'zone-4',
        'slider-1',
        'slider-2',
        'slider-3',
        'slider-4',
      ],
      panelStateChanges: {
        'zone-1': { active: true, ledOn: true, ledColor: '#3B82F6' },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'The sliders and knobs change function depending on PAN/LEVEL, CTRL, and ASSIGN modes.',
    },
    {
      id: 'step-3',
      title: 'Scene & View Controls',
      instruction:
        'Above the display are buttons for browsing scenes, viewing zones, and switching to Single Tone mode.',
      details:
        'Scene Select browses saved scenes. Zone View shows all active zones at once. Single Tone focuses on one zone for quick sound selection.',
      highlightControls: [
        'scene-select',
        'zone-view',
        'single-tone',
        'scene-chain',
      ],
      panelStateChanges: {
        'scene-select': { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-4',
      title: 'Display & Value Dial',
      instruction:
        'The large LCD display shows scene info, zone settings, menus, and more. Use the Value dial to scroll through options and the cursor buttons to navigate.',
      details:
        'The Dec and Inc buttons make fine adjustments. Enter confirms selections and Exit goes back. The six E-knobs below the display control on-screen parameters.',
      highlightControls: [
        'display',
        'value-dial',
        'cursor-up',
        'cursor-down',
        'cursor-left',
        'cursor-right',
        'enter',
        'exit',
      ],
      panelStateChanges: {
        'scene-select': { active: false },
      },
      displayState: {
        screenType: 'menu',
        title: 'MENU',
        menuItems: [
          { label: 'Zone Edit', selected: true },
          { label: 'Effects' },
          { label: 'Arpeggio' },
          { label: 'System' },
        ],
        selectedIndex: 0,
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-5',
      title: 'Synth Control Knobs',
      instruction:
        "To the right of the display are dedicated synth controls \u2014 Cutoff, Resonance, and quick-access buttons for OSC, Filter, Amp, LFO, and FX editing.",
      details:
        "These let you tweak the currently selected zone's tone in real time without diving into menus. The Cutoff and Resonance knobs are the most commonly used.",
      highlightControls: [
        'synth-cutoff',
        'synth-resonance',
        'synth-mode-osc',
        'synth-mode-filter',
        'synth-mode-amp',
        'synth-mode-fx',
        'synth-mode-lfo',
      ],
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
      id: 'step-6',
      title: 'Tone Category Buttons',
      instruction:
        'The 16 buttons along the bottom are Tone Category buttons. Press any one to browse sounds in that category \u2014 from Acoustic Piano to Drums to Synth Pads.',
      details:
        'Categories: A.Piano, E.Piano, Organ, Keys, Guitar, Bass, Strings, Brass, Wind, Choir, Synth, Pad, FX, Drums, User, Assign.',
      highlightControls: [
        'tone-cat-1',
        'tone-cat-6',
        'tone-cat-11',
        'tone-cat-14',
      ],
      panelStateChanges: {
        'tone-cat-1': { active: true },
      },
      displayState: {
        screenType: 'tone-select',
        title: 'TONE LIST',
        menuItems: [
          { label: 'Concert Grand', selected: true },
          { label: 'Bright Piano' },
          { label: 'Stage Piano' },
        ],
        selectedIndex: 0,
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'You can also use the Value dial to scroll through tones within a category.',
    },
    {
      id: 'step-7',
      title: 'Pads & Transport',
      instruction:
        'On the far right are 16 velocity-sensitive pads for triggering samples and clips. Below the synth controls are Play, Stop, and Rec transport buttons for the sequencer.',
      details:
        'The pads have multiple modes \u2014 they can trigger samples, clips, or act as drum pads. The Sampling button enters sampling mode.',
      highlightControls: [
        'pad-1',
        'pad-2',
        'pad-5',
        'pad-6',
        'play',
        'stop',
        'rec',
      ],
      panelStateChanges: {
        'tone-cat-1': { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-8',
      title: 'Tour Complete!',
      instruction:
        'You now know where everything is on the Fantom 08. Try the other tutorials to learn how to use scenes, zones, tones, effects, and more.',
      details:
        "Start with 'Selecting Scenes' to learn how to browse and load sounds, or 'Split Keyboard Zones' to set up a keyboard split.",
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'INIT SCENE',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'Tip: Press Menu to access all Fantom 08 settings and features.',
    },
  ],
};
