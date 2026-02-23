import { PanelLayout, PanelControl, PanelSection } from '@/types/panel';

// --- Zone Section Controls (② on real Fantom) ---
const zoneControls: PanelControl[] = [
  // Master Volume knob
  { id: 'master-volume', type: 'knob', label: 'Master Volume', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  // PAN/LEVEL, CTRL, ASSIGN buttons
  { id: 'pan-level', type: 'button', label: 'PAN/LEVEL', section: 'zone', variant: 'function', size: 'sm', hasLed: true, ledColor: '#00ff44' },
  { id: 'ctrl', type: 'button', label: 'CTRL', section: 'zone', variant: 'function', size: 'sm', hasLed: true, ledColor: '#00ff44' },
  { id: 'assign', type: 'button', label: 'ASSIGN', section: 'zone', variant: 'function', size: 'sm' },
  // Control knobs [1]-[8] (merged from SynthControlSection)
  { id: 'ctrl-knob-1', type: 'knob', label: '[1]', section: 'zone', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-2', type: 'knob', label: '[2]', section: 'zone', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-3', type: 'knob', label: '[3]', section: 'zone', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-4', type: 'knob', label: '[4]', section: 'zone', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-5', type: 'knob', label: '[5]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-6', type: 'knob', label: '[6]', section: 'zone', defaultValue: 40, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-7', type: 'knob', label: '[7]', section: 'zone', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'ctrl-knob-8', type: 'knob', label: '[8]', section: 'zone', defaultValue: 0, minValue: 0, maxValue: 127 },
  // Sliders [1]-[8]
  { id: 'slider-1', type: 'slider', label: '[1]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-2', type: 'slider', label: '[2]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-3', type: 'slider', label: '[3]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-4', type: 'slider', label: '[4]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-5', type: 'slider', label: '[5]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-6', type: 'slider', label: '[6]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-7', type: 'slider', label: '[7]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'slider-8', type: 'slider', label: '[8]', section: 'zone', defaultValue: 100, minValue: 0, maxValue: 127 },
  // Zone buttons [1]-[8]
  { id: 'zone-1', type: 'button', label: 'Zone 1', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#3B82F6' },
  { id: 'zone-2', type: 'button', label: 'Zone 2', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#EF4444' },
  { id: 'zone-3', type: 'button', label: 'Zone 3', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#10B981' },
  { id: 'zone-4', type: 'button', label: 'Zone 4', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#F59E0B' },
  { id: 'zone-5', type: 'button', label: 'Zone 5', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#8B5CF6' },
  { id: 'zone-6', type: 'button', label: 'Zone 6', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#EC4899' },
  { id: 'zone-7', type: 'button', label: 'Zone 7', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#06B6D4' },
  { id: 'zone-8', type: 'button', label: 'Zone 8', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#F97316' },
  { id: 'zone-int', type: 'button', label: 'INT', section: 'zone', variant: 'zone', size: 'sm', hasLed: true, ledColor: '#00ff44' },
  // ZONE 9-16, ZONE SELECT
  { id: 'zone-9-16', type: 'button', label: 'Zone 9-16', section: 'zone', variant: 'function', size: 'sm' },
  { id: 'zone-select', type: 'button', label: 'Zone Select', section: 'zone', variant: 'function', size: 'sm' },
  // Function buttons
  { id: 'split', type: 'button', label: 'Split', section: 'zone', variant: 'function', size: 'sm', hasLed: true, ledColor: '#00ff44' },
  { id: 'chord-memory', type: 'button', label: 'Chord Mem', section: 'zone', variant: 'function', size: 'sm', hasLed: true, ledColor: '#00ff44' },
  { id: 'arpeggio', type: 'button', label: 'Arpeggio', section: 'zone', variant: 'function', size: 'sm', hasLed: true, ledColor: '#00ff44' },
  { id: 'transpose', type: 'button', label: 'Transpose', section: 'zone', variant: 'function', size: 'sm' },
  { id: 'octave-down', type: 'button', label: 'Oct Down', section: 'zone', variant: 'standard', size: 'sm' },
  { id: 'octave-up', type: 'button', label: 'Oct Up', section: 'zone', variant: 'standard', size: 'sm' },
];

// --- Scene Section Controls (④) ---
const sceneControls: PanelControl[] = [
  { id: 'scene-select', type: 'button', label: 'Scene Select', section: 'scene', variant: 'function', size: 'sm' },
  { id: 'scene-chain', type: 'button', label: 'Scene Chain', section: 'scene', variant: 'function', size: 'sm' },
  { id: 'zone-view', type: 'button', label: 'Zone View', section: 'scene', variant: 'function', size: 'sm' },
  { id: 'single-tone', type: 'button', label: 'Single Tone', section: 'scene', variant: 'function', size: 'sm' },
];

// --- Common Section Controls (③) ---
const commonControls: PanelControl[] = [
  { id: 'write', type: 'button', label: 'Write', section: 'common', variant: 'function', size: 'md', hasLed: true, ledColor: '#ff2222' },
  { id: 'master-fx', type: 'button', label: 'Master FX', section: 'common', variant: 'function', size: 'sm' },
  { id: 'motional-pad', type: 'button', label: 'Motional Pad', section: 'common', variant: 'function', size: 'sm' },
  { id: 'daw-ctrl', type: 'button', label: 'DAW Ctrl', section: 'common', variant: 'function', size: 'sm' },
  { id: 'menu', type: 'button', label: 'Menu', section: 'common', variant: 'menu', size: 'md' },
  // Function knobs E1-E6 (below display)
  { id: 'function-e1', type: 'knob', label: 'E1', section: 'common', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'function-e2', type: 'knob', label: 'E2', section: 'common', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'function-e3', type: 'knob', label: 'E3', section: 'common', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'function-e4', type: 'knob', label: 'E4', section: 'common', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'function-e5', type: 'knob', label: 'E5', section: 'common', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'function-e6', type: 'knob', label: 'E6', section: 'common', defaultValue: 64, minValue: 0, maxValue: 127 },
  // Tempo button
  { id: 'tempo', type: 'button', label: 'Tempo', section: 'common', variant: 'function', size: 'sm' },
  // Value dial
  { id: 'value-dial', type: 'dial', label: 'Value', section: 'common' },
  // DEC / INC
  { id: 'dec', type: 'button', label: 'Dec', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'inc', type: 'button', label: 'Inc', section: 'common', variant: 'standard', size: 'sm' },
  // Cursor
  { id: 'cursor-up', type: 'button', label: 'Up', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'cursor-down', type: 'button', label: 'Down', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'cursor-left', type: 'button', label: 'Left', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'cursor-right', type: 'button', label: 'Right', section: 'common', variant: 'standard', size: 'sm' },
  // Shift
  { id: 'shift', type: 'button', label: 'Shift', section: 'common', variant: 'function', size: 'sm' },
  // Enter / Exit
  { id: 'enter', type: 'button', label: 'Enter', section: 'common', variant: 'function', size: 'md' },
  { id: 'exit', type: 'button', label: 'Exit', section: 'common', variant: 'function', size: 'md' },
];

// --- Controller Section Controls (①) ---
const controllerControls: PanelControl[] = [
  { id: 'pitch-wheel', type: 'wheel', label: 'Pitch', section: 'controller', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'mod-wheel', type: 'wheel', label: 'Mod', section: 'controller', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'pitch-mod-lever', type: 'wheel', label: 'Pitch/Mod', section: 'controller', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 's1-btn', type: 'button', label: 'S1', section: 'controller', variant: 'function', size: 'sm' },
  { id: 's2-btn', type: 'button', label: 'S2', section: 'controller', variant: 'function', size: 'sm' },
];

// --- Synth Control Section (⑤, right of display) ---
const synthModeControls: PanelControl[] = [
  { id: 'synth-mode-osc', type: 'button', label: 'OSC', section: 'synth-mode', variant: 'function', size: 'sm' },
  { id: 'synth-cutoff', type: 'knob', label: 'Cutoff', section: 'synth-mode', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'synth-resonance', type: 'knob', label: 'Resonance', section: 'synth-mode', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'synth-mode-filter', type: 'button', label: 'FILTER TYPE', section: 'synth-mode', variant: 'function', size: 'sm' },
  { id: 'synth-param', type: 'button', label: 'PARAM', section: 'synth-mode', variant: 'function', size: 'sm' },
  { id: 'synth-mode-amp', type: 'button', label: 'AMP', section: 'synth-mode', variant: 'function', size: 'sm' },
  { id: 'synth-mode-fx', type: 'button', label: 'FX', section: 'synth-mode', variant: 'function', size: 'sm' },
  { id: 'synth-mode-lfo', type: 'button', label: 'LFO', section: 'synth-mode', variant: 'function', size: 'sm' },
];

// --- Sequencer Section Controls (⑥) ---
const sequencerControls: PanelControl[] = [
  { id: 'pattern', type: 'button', label: 'Pattern', section: 'sequencer', variant: 'function', size: 'sm' },
  { id: 'group', type: 'button', label: 'Group', section: 'sequencer', variant: 'function', size: 'sm' },
  { id: 'song', type: 'button', label: 'Song', section: 'sequencer', variant: 'function', size: 'sm' },
  { id: 'tr-rec', type: 'button', label: 'TR-REC', section: 'sequencer', variant: 'function', size: 'sm' },
  { id: 'rhythm-ptn', type: 'button', label: 'Rhythm Ptn', section: 'sequencer', variant: 'function', size: 'sm' },

  { id: 'play', type: 'transport', label: 'Play', section: 'sequencer', variant: 'function', size: 'md', hasLed: true, ledColor: '#00ff44' },
  { id: 'stop', type: 'transport', label: 'Stop', section: 'sequencer', variant: 'function', size: 'md', hasLed: true, ledColor: '#ff2222' },
  { id: 'rec', type: 'transport', label: 'Rec', section: 'sequencer', variant: 'function', size: 'md', hasLed: true, ledColor: '#ff2222' },
];

// --- Tone Category Controls (bottom strip) ---
const toneCategoryControls: PanelControl[] = [
  { id: 'tone-cat-1', type: 'button', label: 'A.Piano', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-2', type: 'button', label: 'E.Piano', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-3', type: 'button', label: 'Organ', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-4', type: 'button', label: 'Keys', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-5', type: 'button', label: 'Guitar', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-6', type: 'button', label: 'Bass', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-7', type: 'button', label: 'Strings', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-8', type: 'button', label: 'Brass', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-9', type: 'button', label: 'Wind', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-10', type: 'button', label: 'Choir', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-11', type: 'button', label: 'Synth', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-12', type: 'button', label: 'Pad', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-13', type: 'button', label: 'FX', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-14', type: 'button', label: 'Drums', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-15', type: 'button', label: 'User', section: 'tone-category', variant: 'category', size: 'sm' },
  { id: 'tone-cat-16', type: 'button', label: 'Assign', section: 'tone-category', variant: 'category', size: 'sm' },
];

// --- Pad Section Controls (⑦) ---
const padControls: PanelControl[] = [
  { id: 'sampling', type: 'button', label: 'Sampling', section: 'pad', variant: 'function', size: 'sm' },
  { id: 'pad-mode', type: 'button', label: 'Pad Mode', section: 'pad', variant: 'function', size: 'sm' },
  { id: 'clip-board', type: 'button', label: 'Clip Board', section: 'pad', variant: 'function', size: 'sm' },
  { id: 'bank', type: 'button', label: 'Bank', section: 'pad', variant: 'function', size: 'sm' },
  { id: 'hold', type: 'button', label: 'Hold', section: 'pad', variant: 'function', size: 'sm' },
  { id: 'pad-1', type: 'pad', label: 'Pad 1', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-2', type: 'pad', label: 'Pad 2', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-3', type: 'pad', label: 'Pad 3', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-4', type: 'pad', label: 'Pad 4', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-5', type: 'pad', label: 'Pad 5', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-6', type: 'pad', label: 'Pad 6', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-7', type: 'pad', label: 'Pad 7', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-8', type: 'pad', label: 'Pad 8', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-9', type: 'pad', label: 'Pad 9', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-10', type: 'pad', label: 'Pad 10', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-11', type: 'pad', label: 'Pad 11', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-12', type: 'pad', label: 'Pad 12', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-13', type: 'pad', label: 'Pad 13', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-14', type: 'pad', label: 'Pad 14', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-15', type: 'pad', label: 'Pad 15', section: 'pad', size: 'lg', hasLed: true },
  { id: 'pad-16', type: 'pad', label: 'Pad 16', section: 'pad', size: 'lg', hasLed: true },
];

// --- Panel Sections ---
const sections: PanelSection[] = [
  {
    id: 'zone',
    label: 'Zone',
    controls: zoneControls,
  },
  {
    id: 'scene',
    label: 'Scene',
    controls: sceneControls,
  },
  {
    id: 'common',
    label: 'Common',
    controls: commonControls,
  },
  {
    id: 'controller',
    label: 'Controller',
    controls: controllerControls,
  },
  {
    id: 'synth-mode',
    label: 'Synth Control',
    controls: synthModeControls,
  },
  {
    id: 'sequencer',
    label: 'Sequencer',
    controls: sequencerControls,
  },
  {
    id: 'tone-category',
    label: 'Tone Category',
    controls: toneCategoryControls,
  },
  {
    id: 'pad',
    label: 'Pad',
    controls: padControls,
  },
];

// --- Full Panel Layout ---
export const fantom08Layout: PanelLayout = {
  deviceId: 'fantom-08',
  sections,
};

// --- Convenience: flat list of all controls ---
export const allFantom08Controls: PanelControl[] = sections.flatMap(s => s.controls);

// --- Convenience: all control IDs ---
export const allFantom08ControlIds: string[] = allFantom08Controls.map(c => c.id);
