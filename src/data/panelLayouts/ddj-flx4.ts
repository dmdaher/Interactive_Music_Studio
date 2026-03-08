import { PanelLayout, PanelControl, PanelSection } from '@/types/panel';

// --- Helper: Create deck controls for Deck 1 or Deck 2 ---
function createDeckControls(deck: 1 | 2): PanelControl[] {
  const d = `d${deck}`;
  const section = `deck-${deck}`;
  const LED = '#F57C00'; // orange — matches real hardware

  return [
    // Loop controls
    { id: `${d}-in`, type: 'button', label: 'IN', section, variant: 'function', hasLed: true, ledColor: LED },
    { id: `${d}-out`, type: 'button', label: 'OUT', section, variant: 'function', hasLed: true, ledColor: LED },
    { id: `${d}-4beat`, type: 'button', label: '4BEAT/EXIT', section, variant: 'standard', size: 'sm' },
    { id: `${d}-cue-loop-left`, type: 'button', label: '◀', section, variant: 'standard', size: 'sm' },
    { id: `${d}-cue-loop-right`, type: 'button', label: '▶', section, variant: 'standard', size: 'sm' },

    // Beat Sync
    { id: `${d}-beat-sync`, type: 'button', label: 'BEAT SYNC', section, variant: 'function', size: 'md', hasLed: true, ledColor: LED },

    // Jog wheel
    { id: `${d}-jog`, type: 'dial', label: 'Jog', section },

    // Transport
    { id: `${d}-shift`, type: 'button', label: 'SHIFT', section, variant: 'standard', size: 'sm' },
    { id: `${d}-cue`, type: 'button', label: 'CUE', section, variant: 'standard', size: 'md' },
    { id: `${d}-play`, type: 'button', label: '▶/❚❚', section, variant: 'standard', size: 'md' },

    // Pad mode selectors
    { id: `${d}-hot-cue`, type: 'button', label: 'HOT CUE', section, variant: 'function', size: 'sm', hasLed: true, ledColor: LED },
    { id: `${d}-pad-fx1`, type: 'button', label: 'PAD FX1', section, variant: 'function', size: 'sm', hasLed: true, ledColor: LED },
    { id: `${d}-beat-jump`, type: 'button', label: 'BEAT JUMP', section, variant: 'function', size: 'sm', hasLed: true, ledColor: LED },
    { id: `${d}-sampler`, type: 'button', label: 'SAMPLER', section, variant: 'function', size: 'sm', hasLed: true, ledColor: LED },

    // Performance pads 1-8
    { id: `${d}-pad-1`, type: 'pad', label: 'Pad 1', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-2`, type: 'pad', label: 'Pad 2', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-3`, type: 'pad', label: 'Pad 3', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-4`, type: 'pad', label: 'Pad 4', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-5`, type: 'pad', label: 'Pad 5', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-6`, type: 'pad', label: 'Pad 6', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-7`, type: 'pad', label: 'Pad 7', section, size: 'lg', hasLed: true },
    { id: `${d}-pad-8`, type: 'pad', label: 'Pad 8', section, size: 'lg', hasLed: true },

    // Tempo slider
    { id: `${d}-tempo`, type: 'slider', label: 'TEMPO', section, defaultValue: 64, minValue: 0, maxValue: 127 },
  ];
}

// --- Browse Section Controls ---
const browseControls: PanelControl[] = [
  { id: 'd1-load', type: 'button', label: 'LOAD', section: 'browse', variant: 'standard', size: 'md' },
  { id: 'browse', type: 'dial', label: 'Browse', section: 'browse' },
  { id: 'd2-load', type: 'button', label: 'LOAD', section: 'browse', variant: 'standard', size: 'md' },
];

// --- Mixer Section Controls ---
const mixerControls: PanelControl[] = [
  // Trim knobs
  { id: 'ch1-trim', type: 'knob', label: 'TRIM', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ch2-trim', type: 'knob', label: 'TRIM', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },

  // Master
  { id: 'master-level', type: 'knob', label: 'MASTER LEVEL', section: 'mixer', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'master-cue', type: 'button', label: 'MASTER CUE', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },

  // Channel 1 EQ
  { id: 'ch1-hi', type: 'knob', label: 'HI', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ch1-mid', type: 'knob', label: 'MID', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ch1-low', type: 'knob', label: 'LOW', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },

  // Channel 2 EQ
  { id: 'ch2-hi', type: 'knob', label: 'HI', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ch2-mid', type: 'knob', label: 'MID', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ch2-low', type: 'knob', label: 'LOW', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },

  // Mic
  { id: 'mic-level', type: 'knob', label: 'MIC LEVEL', section: 'mixer', defaultValue: 0, minValue: 0, maxValue: 127 },

  // Color FX
  { id: 'ch1-cfx', type: 'knob', label: 'COLOR FX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ch2-cfx', type: 'knob', label: 'COLOR FX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'smart-cfx', type: 'button', label: 'SMART CFX', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },

  // Cue
  { id: 'ch1-cue', type: 'button', label: 'CUE', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'ch2-cue', type: 'button', label: 'CUE', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },

  // Headphone
  { id: 'hp-mix', type: 'knob', label: 'HP MIX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'hp-level', type: 'knob', label: 'HP LEVEL', section: 'mixer', defaultValue: 80, minValue: 0, maxValue: 127 },

  // Smart Fader
  { id: 'smart-fader', type: 'button', label: 'SMART FADER', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },

  // Channel faders + crossfader
  { id: 'ch1-fader', type: 'slider', label: 'CH 1', section: 'mixer', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'ch2-fader', type: 'slider', label: 'CH 2', section: 'mixer', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'crossfader', type: 'slider', label: 'CROSSFADER', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
];

// --- Effects Section Controls ---
const effectsControls: PanelControl[] = [
  { id: 'fx-ch-select', type: 'button', label: 'CH SELECT', section: 'effects', variant: 'function', size: 'sm' },
  { id: 'fx-select', type: 'button', label: 'FX SELECT', section: 'effects', variant: 'function', size: 'sm' },
  { id: 'fx-beat-left', type: 'button', label: '◀', section: 'effects', variant: 'standard', size: 'sm' },
  { id: 'fx-beat-right', type: 'button', label: '▶', section: 'effects', variant: 'standard', size: 'sm' },
  { id: 'fx-level-depth', type: 'knob', label: 'LEVEL/DEPTH', section: 'effects', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'fx-on-off', type: 'button', label: 'ON/OFF', section: 'effects', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
];

// --- Panel Sections ---
const sections: PanelSection[] = [
  {
    id: 'browse',
    label: 'Browse',
    controls: browseControls,
  },
  {
    id: 'deck-1',
    label: 'Deck 1',
    controls: createDeckControls(1),
  },
  {
    id: 'deck-2',
    label: 'Deck 2',
    controls: createDeckControls(2),
  },
  {
    id: 'mixer',
    label: 'Mixer',
    controls: mixerControls,
  },
  {
    id: 'effects',
    label: 'Beat FX',
    controls: effectsControls,
  },
];

// --- Full Panel Layout ---
export const ddjFlx4Layout: PanelLayout = {
  deviceId: 'ddj-flx4',
  sections,
};

// --- Convenience: flat list of all controls ---
const allDdjFlx4Controls: PanelControl[] = sections.flatMap(s => s.controls);

// --- Convenience: all control IDs ---
export const allDdjFlx4ControlIds: string[] = allDdjFlx4Controls.map(c => c.id);
