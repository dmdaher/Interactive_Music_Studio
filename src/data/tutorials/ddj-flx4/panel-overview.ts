import { Tutorial } from '@/types/tutorial';

export const panelOverview: Tutorial = {
  id: 'panel-overview',
  deviceId: 'ddj-flx4',
  title: 'DDJ-FLX4 Panel Overview',
  description: 'Get to know the layout of your Pioneer DDJ-FLX4 DJ controller — decks, mixer, pads, and transport controls.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  steps: [
    {
      id: 'overview',
      title: 'Welcome to the DDJ-FLX4',
      instruction: 'This is the Pioneer DDJ-FLX4, a 2-channel DJ controller. The layout has three main sections: Deck 1 (left), Mixer (center), and Deck 2 (right).',
      details: 'The DDJ-FLX4 works with rekordbox and Serato DJ Lite software. All visual feedback (waveforms, track info) appears in the software — the controller itself has no built-in display.',
      highlightControls: [],
      panelStateChanges: {},
    },
    {
      id: 'deck-jog-wheels',
      title: 'Jog Wheels',
      instruction: 'The large jog wheels on each deck are used for scratching, pitch bending, and track navigation.',
      details: 'Press the top surface to scratch. Touch the outer ring to pitch bend. The SEARCH strip on the side lets you quickly scan through a track.',
      highlightControls: ['d1-jog', 'd2-jog'],
      panelStateChanges: {},
    },
    {
      id: 'deck-transport',
      title: 'Transport Controls',
      instruction: 'Each deck has CUE and PLAY/PAUSE buttons for playback control, plus a SHIFT button for secondary functions.',
      details: 'CUE sets a temporary cue point. PLAY/PAUSE toggles playback. Hold SHIFT to access secondary functions on other buttons.',
      highlightControls: ['d1-cue', 'd1-play', 'd1-shift'],
      panelStateChanges: {
        'd1-play': { active: true },
      },
    },
    {
      id: 'performance-pads',
      title: 'Performance Pads',
      instruction: 'Each deck has 8 performance pads (2 rows of 4) for triggering hot cues, effects, samples, and more.',
      details: 'The pad mode selectors above the pads switch between HOT CUE, PAD FX 1, BEAT JUMP, and SAMPLER modes. Hold SHIFT for additional modes: KEYBOARD, PAD FX 2, BEAT LOOP, KEY SHIFT.',
      highlightControls: ['d1-pad-1', 'd1-pad-2', 'd1-pad-3', 'd1-pad-4', 'd1-pad-5', 'd1-pad-6', 'd1-pad-7', 'd1-pad-8', 'd1-hot-cue'],
      panelStateChanges: {
        'd1-hot-cue': { active: true, ledOn: true },
        'd1-pad-1': { active: true },
        'd1-pad-3': { active: true },
      },
    },
    {
      id: 'loop-controls',
      title: 'Loop & Beat Controls',
      instruction: 'The top row of each deck controls looping: IN/OUT set loop points, 4BEAT/EXIT creates or exits auto loops, and the CUE/LOOP CALL buttons (◀/▶) manage saved cue and loop points.',
      details: 'CUE/LOOP CALL ◀ halves loop length or recalls the previous point. CUE/LOOP CALL ▶ doubles loop length or advances to the next point. BEAT SYNC synchronizes the deck tempo to the master. TEMPO RANGE cycles the tempo slider range (±6%/±10%/±16%/WIDE).',
      highlightControls: ['d1-in', 'd1-out', 'd1-4beat-exit', 'd1-active', 'd1-cue-loop-left', 'd1-cue-loop-right', 'd1-beat-sync'],
      panelStateChanges: {
        'd1-active': { active: true, ledOn: true },
        'd1-beat-sync': { active: true, ledOn: true },
      },
    },
    {
      id: 'mixer-eq',
      title: 'Mixer: EQ, Trim & CFX',
      instruction: 'The center mixer has per-channel EQ (HI, MID, LOW) and TRIM knobs for level adjustment. CFX knobs apply Color FX or Smart CFX effects to each channel.',
      details: 'LOAD buttons at the top load tracks from the software onto each deck. The MASTER LEVEL controls the main output volume. The SMART CFX button toggles Smart CFX mode — hold SHIFT and press it to change the preset.',
      highlightControls: ['trim-1', 'hi-1', 'mid-1', 'low-1', 'trim-2', 'hi-2', 'mid-2', 'low-2', 'master-level', 'cfx-1', 'cfx-2', 'smart-cfx'],
      panelStateChanges: {},
    },
    {
      id: 'mixer-faders',
      title: 'Mixer: Faders & Crossfader',
      instruction: 'Each channel has a vertical fader for volume control. The horizontal crossfader at the bottom blends between channels.',
      details: 'CUE buttons above the faders send channels to the headphone monitor. The SMART FADER button enables intelligent mixing — auto BPM matching, EQ automation, and echo effects during transitions.',
      highlightControls: ['ch1-fader', 'ch2-fader', 'crossfader', 'ch1-cue', 'ch2-cue', 'smart-fader'],
      panelStateChanges: {
        'ch1-cue': { active: true, ledOn: true },
      },
    },
    {
      id: 'beat-fx',
      title: 'Beat FX',
      instruction: 'The Beat FX section on the right side of the mixer adds effects synchronized to the beat.',
      details: 'Select which channel(s) to apply FX to (1, 2, or 1&2), choose an effect with FX SELECT, adjust timing with the BEAT buttons, and control intensity with LEVEL/DEPTH. ON/OFF activates the effect.',
      highlightControls: ['fx-select', 'fx-ch-1', 'fx-ch-2', 'fx-ch-1-2', 'fx-level-depth', 'fx-on-off'],
      panelStateChanges: {
        'fx-on-off': { active: true, ledOn: true },
        'fx-ch-1': { active: true },
      },
    },
  ],
  tags: ['overview', 'layout', 'basics', 'getting-started'],
};
