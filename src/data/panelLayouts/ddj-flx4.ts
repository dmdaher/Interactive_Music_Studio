import { PanelLayout, PanelControl, PanelSection } from '@/types/panel';

// --- Deck 1 Controls ---
const deck1Controls: PanelControl[] = [
  // Loop controls
  { id: 'd1-in', type: 'button', label: 'IN', section: 'deck1', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
  { id: 'd1-out', type: 'button', label: 'OUT', section: 'deck1', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
  // Beat controls
  { id: 'd1-4beat-exit', type: 'button', label: '4BEAT/EXIT', section: 'deck1', variant: 'function', size: 'sm' },
  { id: 'd1-active', type: 'button', label: 'ACTIVE', section: 'deck1', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  // CUE/LOOP CALL
  { id: 'd1-cue-loop-left', type: 'button', label: '1/2X', section: 'deck1', variant: 'standard', size: 'sm' },
  { id: 'd1-loop', type: 'button', label: 'LOOP', section: 'deck1', variant: 'function', size: 'sm' },
  { id: 'd1-cue-loop-right', type: 'button', label: '2X', section: 'deck1', variant: 'standard', size: 'sm' },
  { id: 'd1-del', type: 'button', label: 'DEL', section: 'deck1', variant: 'standard', size: 'sm' },
  { id: 'd1-memory', type: 'button', label: 'MEMORY', section: 'deck1', variant: 'standard', size: 'sm' },
  // Beat Sync
  { id: 'd1-beat-sync', type: 'button', label: 'BEAT SYNC', section: 'deck1', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
  { id: 'd1-tempo-range', type: 'button', label: 'TEMPO RANGE', section: 'deck1', variant: 'standard', size: 'sm' },
  // Jog wheel
  { id: 'd1-jog', type: 'dial', label: 'Jog Wheel', section: 'deck1' },
  // Transport
  { id: 'd1-shift', type: 'button', label: 'SHIFT', section: 'deck1', variant: 'function', size: 'sm' },
  { id: 'd1-cue', type: 'button', label: 'CUE', section: 'deck1', variant: 'function', size: 'lg' },
  { id: 'd1-play', type: 'button', label: 'PLAY/PAUSE', section: 'deck1', variant: 'function', size: 'lg' },
  // Pad mode selectors
  { id: 'd1-hot-cue', type: 'button', label: 'HOT CUE', section: 'deck1', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd1-pad-fx1', type: 'button', label: 'PAD FX 1', section: 'deck1', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd1-beat-jump', type: 'button', label: 'BEAT JUMP', section: 'deck1', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd1-sampler', type: 'button', label: 'SAMPLER', section: 'deck1', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  // Performance pads
  { id: 'd1-pad-1', type: 'pad', label: '1', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-2', type: 'pad', label: '2', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-3', type: 'pad', label: '3', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-4', type: 'pad', label: '4', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-5', type: 'pad', label: '5', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-6', type: 'pad', label: '6', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-7', type: 'pad', label: '7', section: 'deck1', size: 'lg', hasLed: true },
  { id: 'd1-pad-8', type: 'pad', label: '8', section: 'deck1', size: 'lg', hasLed: true },
  // Tempo slider
  { id: 'd1-tempo', type: 'slider', label: 'TEMPO', section: 'deck1', defaultValue: 64, minValue: 0, maxValue: 127 },
];

// --- Deck 2 Controls ---
const deck2Controls: PanelControl[] = [
  { id: 'd2-in', type: 'button', label: 'IN', section: 'deck2', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-out', type: 'button', label: 'OUT', section: 'deck2', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-4beat-exit', type: 'button', label: '4BEAT/EXIT', section: 'deck2', variant: 'function', size: 'sm' },
  { id: 'd2-active', type: 'button', label: 'ACTIVE', section: 'deck2', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-cue-loop-left', type: 'button', label: '1/2X', section: 'deck2', variant: 'standard', size: 'sm' },
  { id: 'd2-loop', type: 'button', label: 'LOOP', section: 'deck2', variant: 'function', size: 'sm' },
  { id: 'd2-cue-loop-right', type: 'button', label: '2X', section: 'deck2', variant: 'standard', size: 'sm' },
  { id: 'd2-del', type: 'button', label: 'DEL', section: 'deck2', variant: 'standard', size: 'sm' },
  { id: 'd2-memory', type: 'button', label: 'MEMORY', section: 'deck2', variant: 'standard', size: 'sm' },
  { id: 'd2-beat-sync', type: 'button', label: 'BEAT SYNC', section: 'deck2', variant: 'function', size: 'md', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-tempo-range', type: 'button', label: 'TEMPO RANGE', section: 'deck2', variant: 'standard', size: 'sm' },
  { id: 'd2-jog', type: 'dial', label: 'Jog Wheel', section: 'deck2' },
  { id: 'd2-shift', type: 'button', label: 'SHIFT', section: 'deck2', variant: 'function', size: 'sm' },
  { id: 'd2-cue', type: 'button', label: 'CUE', section: 'deck2', variant: 'function', size: 'lg' },
  { id: 'd2-play', type: 'button', label: 'PLAY/PAUSE', section: 'deck2', variant: 'function', size: 'lg' },
  { id: 'd2-hot-cue', type: 'button', label: 'HOT CUE', section: 'deck2', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-pad-fx1', type: 'button', label: 'PAD FX 1', section: 'deck2', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-beat-jump', type: 'button', label: 'BEAT JUMP', section: 'deck2', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-sampler', type: 'button', label: 'SAMPLER', section: 'deck2', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'd2-pad-1', type: 'pad', label: '1', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-2', type: 'pad', label: '2', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-3', type: 'pad', label: '3', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-4', type: 'pad', label: '4', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-5', type: 'pad', label: '5', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-6', type: 'pad', label: '6', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-7', type: 'pad', label: '7', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-pad-8', type: 'pad', label: '8', section: 'deck2', size: 'lg', hasLed: true },
  { id: 'd2-tempo', type: 'slider', label: 'TEMPO', section: 'deck2', defaultValue: 64, minValue: 0, maxValue: 127 },
];

// --- Mixer Controls ---
const mixerControls: PanelControl[] = [
  // Load buttons
  { id: 'load-1', type: 'button', label: 'LOAD', section: 'mixer', variant: 'function', size: 'sm' },
  { id: 'load-2', type: 'button', label: 'LOAD', section: 'mixer', variant: 'function', size: 'sm' },
  // Browse encoder
  { id: 'browse', type: 'dial', label: 'Browse', section: 'mixer' },
  // Trim knobs
  { id: 'trim-1', type: 'knob', label: 'TRIM', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'trim-2', type: 'knob', label: 'TRIM', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  // Master level
  { id: 'master-level', type: 'knob', label: 'MASTER LEVEL', section: 'mixer', defaultValue: 100, minValue: 0, maxValue: 127 },
  // Master cue
  { id: 'master-cue', type: 'button', label: 'CUE', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  // EQ Ch1
  { id: 'hi-1', type: 'knob', label: 'HI', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'mid-1', type: 'knob', label: 'MID', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'low-1', type: 'knob', label: 'LOW', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  // EQ Ch2
  { id: 'hi-2', type: 'knob', label: 'HI', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'mid-2', type: 'knob', label: 'MID', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'low-2', type: 'knob', label: 'LOW', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  // CFX filters
  { id: 'cfx-1', type: 'knob', label: 'CFX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'cfx-2', type: 'knob', label: 'CFX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  // Smart CFX
  { id: 'smart-cfx', type: 'button', label: 'SMART CFX', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  // Headphone
  { id: 'mic-level', type: 'knob', label: 'MIC LEVEL', section: 'mixer', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'hp-cue', type: 'knob', label: 'CUE/MIX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'hp-mix', type: 'knob', label: 'MIX', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'hp-level', type: 'knob', label: 'LEVEL', section: 'mixer', defaultValue: 80, minValue: 0, maxValue: 127 },
  // Channel CUE buttons
  { id: 'ch1-cue', type: 'button', label: 'CUE', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'ch2-cue', type: 'button', label: 'CUE', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  // Channel faders
  { id: 'ch1-fader', type: 'slider', label: 'CH 1', section: 'mixer', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'ch2-fader', type: 'slider', label: 'CH 2', section: 'mixer', defaultValue: 100, minValue: 0, maxValue: 127 },
  // Crossfader
  { id: 'crossfader', type: 'slider', label: 'CROSSFADER', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  // Beat FX
  { id: 'fx-select', type: 'button', label: 'FX SELECT', section: 'mixer', variant: 'function', size: 'sm' },
  { id: 'fx-ch-1', type: 'button', label: '1', section: 'mixer', variant: 'function', size: 'sm' },
  { id: 'fx-ch-2', type: 'button', label: '2', section: 'mixer', variant: 'function', size: 'sm' },
  { id: 'fx-ch-1-2', type: 'button', label: '1&2', section: 'mixer', variant: 'function', size: 'sm' },
  { id: 'fx-beat-auto', type: 'button', label: 'AUTO', section: 'mixer', variant: 'function', size: 'sm' },
  { id: 'fx-beat-left', type: 'button', label: '<', section: 'mixer', variant: 'standard', size: 'sm' },
  { id: 'fx-beat-right', type: 'button', label: '>', section: 'mixer', variant: 'standard', size: 'sm' },
  { id: 'fx-level-depth', type: 'knob', label: 'LEVEL/DEPTH', section: 'mixer', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'fx-on-off', type: 'button', label: 'ON/OFF', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  // Smart Fader
  { id: 'smart-fader', type: 'button', label: 'SMART FADER', section: 'mixer', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
];

// --- Panel Sections ---
const sections: PanelSection[] = [
  { id: 'deck1', label: 'Deck 1', controls: deck1Controls },
  { id: 'deck2', label: 'Deck 2', controls: deck2Controls },
  { id: 'mixer', label: 'Mixer', controls: mixerControls },
];

// --- Full Panel Layout ---
export const ddjFlx4Layout: PanelLayout = {
  deviceId: 'ddj-flx4',
  sections,
};

// --- Convenience: flat list of all controls ---
export const allDDJFLX4Controls: PanelControl[] = sections.flatMap(s => s.controls);

// --- Convenience: all control IDs ---
export const allDDJFLX4ControlIds: string[] = allDDJFLX4Controls.map(c => c.id);
