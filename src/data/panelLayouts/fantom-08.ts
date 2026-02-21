import { PanelLayout, PanelControl, PanelSection } from '@/types/panel';

// --- Zone Section Controls ---
const zoneControls: PanelControl[] = [
  { id: 'zone-1', type: 'button', label: 'Zone 1', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#3B82F6' },
  { id: 'zone-2', type: 'button', label: 'Zone 2', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#EF4444' },
  { id: 'zone-3', type: 'button', label: 'Zone 3', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#10B981' },
  { id: 'zone-4', type: 'button', label: 'Zone 4', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#F59E0B' },
  { id: 'zone-5', type: 'button', label: 'Zone 5', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#8B5CF6' },
  { id: 'zone-6', type: 'button', label: 'Zone 6', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#EC4899' },
  { id: 'zone-7', type: 'button', label: 'Zone 7', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#06B6D4' },
  { id: 'zone-8', type: 'button', label: 'Zone 8', section: 'zone', variant: 'zone', size: 'md', hasLed: true, ledColor: '#F97316' },
  { id: 'zone-int', type: 'button', label: 'INT', section: 'zone', variant: 'zone', size: 'sm', hasLed: true, ledColor: '#00ff44' },
];

// --- Scene Section Controls ---
const sceneControls: PanelControl[] = [
  { id: 'scene-1', type: 'button', label: '1', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-2', type: 'button', label: '2', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-3', type: 'button', label: '3', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-4', type: 'button', label: '4', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-5', type: 'button', label: '5', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-6', type: 'button', label: '6', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-7', type: 'button', label: '7', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-8', type: 'button', label: '8', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-9', type: 'button', label: '9', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-10', type: 'button', label: '10', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-11', type: 'button', label: '11', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-12', type: 'button', label: '12', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-13', type: 'button', label: '13', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-14', type: 'button', label: '14', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-15', type: 'button', label: '15', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-16', type: 'button', label: '16', section: 'scene', variant: 'scene', size: 'sm', hasLed: true },
  { id: 'scene-up', type: 'button', label: 'Up', section: 'scene', variant: 'function', size: 'sm' },
  { id: 'scene-down', type: 'button', label: 'Down', section: 'scene', variant: 'function', size: 'sm' },
];

// --- Common Section Controls ---
const commonControls: PanelControl[] = [
  { id: 'menu', type: 'button', label: 'Menu', section: 'common', variant: 'menu', size: 'md' },
  { id: 'write', type: 'button', label: 'Write', section: 'common', variant: 'function', size: 'md', hasLed: true, ledColor: '#ff2222' },
  { id: 'enter', type: 'button', label: 'Enter', section: 'common', variant: 'function', size: 'md' },
  { id: 'exit', type: 'button', label: 'Exit', section: 'common', variant: 'function', size: 'md' },
  { id: 'cursor-up', type: 'button', label: 'Up', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'cursor-down', type: 'button', label: 'Down', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'cursor-left', type: 'button', label: 'Left', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'cursor-right', type: 'button', label: 'Right', section: 'common', variant: 'standard', size: 'sm' },
  { id: 'tone-select', type: 'button', label: 'Tone Select', section: 'common', variant: 'category', size: 'md', hasLed: true, ledColor: '#00aaff' },
];

// --- Controller Section Controls ---
const controllerControls: PanelControl[] = [
  { id: 'pitch-wheel', type: 'wheel', label: 'Pitch', section: 'controller', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'mod-wheel', type: 'wheel', label: 'Mod', section: 'controller', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 's1-slider', type: 'slider', label: 'S1', section: 'controller', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 's2-slider', type: 'slider', label: 'S2', section: 'controller', defaultValue: 0, minValue: 0, maxValue: 127 },
];

// --- Synth Controls ---
const synthControls: PanelControl[] = [
  { id: 'cutoff-knob', type: 'knob', label: 'Cutoff', section: 'synth', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'resonance-knob', type: 'knob', label: 'Resonance', section: 'synth', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'attack-knob', type: 'knob', label: 'Attack', section: 'synth', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'decay-knob', type: 'knob', label: 'Decay', section: 'synth', defaultValue: 64, minValue: 0, maxValue: 127 },
  { id: 'sustain-knob', type: 'knob', label: 'Sustain', section: 'synth', defaultValue: 100, minValue: 0, maxValue: 127 },
  { id: 'release-knob', type: 'knob', label: 'Release', section: 'synth', defaultValue: 40, minValue: 0, maxValue: 127 },
  { id: 'effects-knob', type: 'knob', label: 'Effects', section: 'synth', defaultValue: 0, minValue: 0, maxValue: 127 },
  { id: 'lfo-rate-knob', type: 'knob', label: 'LFO Rate', section: 'synth', defaultValue: 0, minValue: 0, maxValue: 127 },
];

// --- Sequencer Section Controls ---
const sequencerControls: PanelControl[] = [
  { id: 'play', type: 'transport', label: 'Play', section: 'sequencer', variant: 'function', size: 'md', hasLed: true, ledColor: '#00ff44' },
  { id: 'stop', type: 'transport', label: 'Stop', section: 'sequencer', variant: 'function', size: 'md', hasLed: true, ledColor: '#ff2222' },
  { id: 'rec', type: 'transport', label: 'Rec', section: 'sequencer', variant: 'function', size: 'md', hasLed: true, ledColor: '#ff2222' },
  { id: 'tempo-knob', type: 'knob', label: 'Tempo', section: 'sequencer', defaultValue: 120, minValue: 20, maxValue: 300 },
];

// --- Pad Section Controls ---
const padControls: PanelControl[] = [
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
    id: 'synth',
    label: 'Synth',
    controls: synthControls,
  },
  {
    id: 'sequencer',
    label: 'Sequencer',
    controls: sequencerControls,
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
