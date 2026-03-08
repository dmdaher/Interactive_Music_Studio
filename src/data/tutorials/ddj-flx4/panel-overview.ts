import { Tutorial } from '@/types/tutorial';

export const panelOverviewTutorial: Tutorial = {
  id: 'panel-overview',
  deviceId: 'ddj-flx4',
  title: 'DDJ-FLX4 Panel Overview',
  description: 'Get to know every section of the Pioneer DDJ-FLX4 — jog wheels, performance pads, mixer, and Beat FX.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  tags: ['overview', 'beginner', 'layout'],
  steps: [
    {
      id: 'welcome',
      title: 'Welcome to the DDJ-FLX4',
      instruction: 'This is the Pioneer DDJ-FLX4 — a 2-channel DJ controller. The layout has three columns: Deck 1 (left), the Mixer (center), and Deck 2 (right).',
      details: 'Each deck controls one track. The mixer blends them together. Use the arrow keys or buttons below to navigate through this tour.',
      highlightControls: [],
      panelStateChanges: {},
    },
    {
      id: 'jog-wheels',
      title: 'Jog Wheels',
      instruction: 'The large jog wheels are the centerpiece of each deck. Touch the top to scratch, or nudge the outer ring for pitch bending.',
      details: 'Try clicking and dragging the jog wheel to rotate it. In a real DJ setup, the top surface scratches the track while the outer edge temporarily adjusts the speed.',
      highlightControls: ['d1-jog', 'd2-jog'],
      panelStateChanges: {},
    },
    {
      id: 'transport',
      title: 'Transport Controls',
      instruction: 'Below each jog wheel are the transport controls: CUE sets/recalls a cue point, and PLAY/PAUSE starts or stops the track.',
      details: 'SHIFT accesses secondary functions on most buttons. Hold SHIFT + CUE to return to the beginning of the track.',
      highlightControls: ['d1-cue', 'd1-play', 'd1-shift'],
      panelStateChanges: {
        'd1-play': { active: true },
      },
    },
    {
      id: 'performance-pads',
      title: 'Performance Pads',
      instruction: 'Each deck has 8 backlit performance pads and 4 mode selectors: Hot Cue, Pad FX, Beat Jump, and Sampler.',
      details: 'Press a mode button to switch what the pads do. Hot Cue saves/recalls positions, Pad FX triggers effects, Beat Jump skips forward/back, and Sampler plays loaded samples.',
      highlightControls: ['d1-hot-cue', 'd1-pad-fx1', 'd1-beat-jump', 'd1-sampler', 'd1-pad-1', 'd1-pad-2', 'd1-pad-3', 'd1-pad-4', 'd1-pad-5', 'd1-pad-6', 'd1-pad-7', 'd1-pad-8'],
      panelStateChanges: {
        'd1-hot-cue': { active: true, ledOn: true, ledColor: '#F57C00' },
        'd1-pad-1': { active: true },
        'd1-pad-5': { active: true },
      },
    },
    {
      id: 'loop-controls',
      title: 'Loop & Beat Controls',
      instruction: 'The top row of each deck has loop controls: IN/OUT set loop points, 4BEAT starts a 4-beat auto loop, and CUE/LOOP CALL navigates saved loops.',
      details: 'BEAT SYNC automatically matches the tempo of both decks. Hold SHIFT + BEAT SYNC to cycle tempo ranges (±6%, ±10%, ±16%, WIDE).',
      highlightControls: ['d1-in', 'd1-out', 'd1-4beat', 'd1-cue-loop-left', 'd1-cue-loop-right', 'd1-beat-sync'],
      panelStateChanges: {
        'd1-beat-sync': { active: true, ledOn: true, ledColor: '#F57C00' },
      },
    },
    {
      id: 'mixer-eq',
      title: 'Mixer — EQ & Trim',
      instruction: 'The center mixer has a 3-band EQ (HI, MID, LOW) and TRIM knob per channel. These shape the sound of each deck before mixing.',
      details: 'Turn TRIM to adjust input volume. HI/MID/LOW boost or cut frequency bands. Channel level indicators show the signal strength.',
      highlightControls: ['ch1-trim', 'ch1-hi', 'ch1-mid', 'ch1-low', 'ch2-trim', 'ch2-hi', 'ch2-mid', 'ch2-low'],
      panelStateChanges: {
        'ch1-trim': { active: false, value: 80 },
        'ch2-trim': { active: false, value: 80 },
      },
    },
    {
      id: 'mixer-faders',
      title: 'Mixer — Faders & Crossfader',
      instruction: 'Channel faders control each deck\'s volume. The crossfader blends between decks — slide left for Deck 1, right for Deck 2.',
      details: 'CUE buttons route each channel to your headphones for previewing. SMART FADER automatically adjusts volume, bass, and BPM as you crossfade.',
      highlightControls: ['ch1-fader', 'ch2-fader', 'crossfader', 'ch1-cue', 'ch2-cue', 'smart-fader'],
      panelStateChanges: {
        'ch1-fader': { active: false, value: 100 },
        'ch2-fader': { active: false, value: 100 },
        'crossfader': { active: false, value: 64 },
        'ch1-cue': { active: true, ledOn: true, ledColor: '#F57C00' },
      },
    },
    {
      id: 'beat-fx',
      title: 'Beat FX',
      instruction: 'The Beat FX section (right side of mixer) adds beat-synced effects like Echo, Reverb, and Flanger to your mix.',
      details: 'FX SELECT cycles through effects. BEAT ◀/▶ sets the timing. LEVEL/DEPTH controls intensity. ON/OFF activates the effect. CH SELECT routes it to Deck 1, 2, or both.',
      highlightControls: ['fx-ch-select', 'fx-select', 'fx-beat-left', 'fx-beat-right', 'fx-level-depth', 'fx-on-off'],
      panelStateChanges: {
        'fx-on-off': { active: true, ledOn: true, ledColor: '#F57C00' },
        'fx-level-depth': { active: false, value: 90 },
      },
    },
  ],
};
