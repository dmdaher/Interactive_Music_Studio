import { PanelLayout, PanelControl, PanelSection } from '@/types/panel';

// ============================================================
// CDJ-3000 — Structural Panel Layout
// Portrait device: 800 x 1100
// Manual references: pages 14-16
// ============================================================

// --- Navigation Bar Controls (Row 1) ---
const navigationControls: PanelControl[] = [
  { id: 'source', type: 'button', label: 'SOURCE', section: 'navigation', variant: 'function', size: 'sm', hasLed: true, ledColor: '#4FC3F7' },
  { id: 'browse', type: 'button', label: 'BROWSE', section: 'navigation', variant: 'function', size: 'sm', hasLed: true, ledColor: '#4FC3F7' },
  { id: 'tag-list', type: 'button', label: 'TAG LIST', section: 'navigation', variant: 'function', size: 'sm', hasLed: true, ledColor: '#4FC3F7' },
  { id: 'source-indicator', type: 'led', label: 'SOURCE', section: 'navigation' },
  { id: 'playlist', type: 'button', label: 'PLAYLIST', section: 'navigation', variant: 'function', size: 'sm' },
  { id: 'search-nav', type: 'button', label: 'SEARCH', section: 'navigation', variant: 'function', size: 'sm' },
  { id: 'utility', type: 'button', label: 'UTILITY', section: 'navigation', variant: 'function', size: 'sm' },
  { id: 'menu', type: 'button', label: 'MENU', section: 'navigation', variant: 'function', size: 'sm' },
];

// --- Media Section Controls (Row 2 Left) ---
const mediaControls: PanelControl[] = [
  { id: 'sd-indicator', type: 'led', label: 'SD', section: 'media', ledColor: '#66BB6A' },
  { id: 'sd-slot', type: 'button', label: 'SD SLOT', section: 'media', variant: 'standard', size: 'sm' },
  { id: 'usb-stop', type: 'button', label: 'USB STOP', section: 'media', variant: 'standard', size: 'sm' },
  { id: 'usb-port', type: 'button', label: 'USB', section: 'media', variant: 'standard', size: 'sm' },
  { id: 'usb-indicator', type: 'led', label: 'USB', section: 'media', ledColor: '#66BB6A' },
];

// --- Display Section (Row 2 Center) ---
const displayControls: PanelControl[] = [
  { id: 'touch-display', type: 'display', label: 'Touch Display', section: 'display' },
];

// --- Browse Controls (Row 2 Right) ---
const browseControls: PanelControl[] = [
  { id: 'back', type: 'button', label: 'BACK', section: 'browse-controls', variant: 'function', size: 'sm' },
  { id: 'tag-track', type: 'button', label: 'TAG TRACK/REMOVE', section: 'browse-controls', variant: 'function', size: 'sm' },
  { id: 'rotary-selector', type: 'encoder', label: 'Rotary Selector', section: 'browse-controls' },
  { id: 'track-filter', type: 'button', label: 'TRACK FILTER', section: 'browse-controls', variant: 'function', size: 'sm' },
  { id: 'shortcut', type: 'button', label: 'SHORTCUT', section: 'browse-controls', variant: 'function', size: 'sm' },
];

// --- Performance Strip Controls (Row 3) ---
const performanceStripControls: PanelControl[] = [
  { id: 'slip', type: 'button', label: 'SLIP', section: 'performance-strip', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'quantize', type: 'button', label: 'QUANTIZE', section: 'performance-strip', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'time-mode', type: 'button', label: 'TIME MODE', section: 'performance-strip', variant: 'function', size: 'sm' },
  // Hot Cue Pads A-D (warm colors)
  { id: 'hot-cue-a', type: 'pad', label: 'A', section: 'performance-strip', size: 'md', hasLed: true, color: '#EF5350' },
  { id: 'hot-cue-b', type: 'pad', label: 'B', section: 'performance-strip', size: 'md', hasLed: true, color: '#FF7043' },
  { id: 'hot-cue-c', type: 'pad', label: 'C', section: 'performance-strip', size: 'md', hasLed: true, color: '#FFA726' },
  { id: 'hot-cue-d', type: 'pad', label: 'D', section: 'performance-strip', size: 'md', hasLed: true, color: '#FFCA28' },
  // Hot Cue Pads E-H (cool colors)
  { id: 'hot-cue-e', type: 'pad', label: 'E', section: 'performance-strip', size: 'md', hasLed: true, color: '#66BB6A' },
  { id: 'hot-cue-f', type: 'pad', label: 'F', section: 'performance-strip', size: 'md', hasLed: true, color: '#42A5F5' },
  { id: 'hot-cue-g', type: 'pad', label: 'G', section: 'performance-strip', size: 'md', hasLed: true, color: '#7E57C2' },
  { id: 'hot-cue-h', type: 'pad', label: 'H', section: 'performance-strip', size: 'md', hasLed: true, color: '#EC407A' },
  // Cue/Loop Call + Memory controls
  { id: 'cue-loop-call-left', type: 'button', label: '◀', section: 'performance-strip', variant: 'standard', size: 'sm' },
  { id: 'cue-loop-call-right', type: 'button', label: '▶', section: 'performance-strip', variant: 'standard', size: 'sm' },
  { id: 'delete', type: 'button', label: 'DELETE', section: 'performance-strip', variant: 'function', size: 'sm' },
  { id: 'memory', type: 'button', label: 'MEMORY', section: 'performance-strip', variant: 'function', size: 'sm', hasLed: true, ledColor: '#F57C00' },
  { id: 'vinyl-speed-adj', type: 'knob', label: 'VINYL SPEED ADJ', section: 'performance-strip', defaultValue: 64, minValue: 0, maxValue: 127 },
];

// --- Left Controls: Loop + Transport (Row 4 Left) ---
const leftControls: PanelControl[] = [
  // Loop section
  { id: '4-beat-loop', type: 'button', label: '4 BEAT', section: 'left-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#66BB6A' },
  { id: '8-beat-loop', type: 'button', label: '8 BEAT', section: 'left-controls', variant: 'function', size: 'sm' },
  { id: 'loop-in', type: 'button', label: 'LOOP IN/CUE', section: 'left-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#66BB6A' },
  { id: 'loop-out', type: 'button', label: 'LOOP OUT', section: 'left-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#66BB6A' },
  { id: 'reloop-exit', type: 'button', label: 'RELOOP/EXIT', section: 'left-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#66BB6A' },
  { id: 'beat-jump-left', type: 'button', label: '◀ BEAT JUMP', section: 'left-controls', variant: 'standard', size: 'sm' },
  { id: 'beat-jump-right', type: 'button', label: 'BEAT JUMP ▶', section: 'left-controls', variant: 'standard', size: 'sm' },
  // Transport section
  { id: 'direction', type: 'lever', label: 'DIRECTION', section: 'left-controls' },
  { id: 'track-search-back', type: 'button', label: '◀◀ TRACK', section: 'left-controls', variant: 'standard', size: 'sm' },
  { id: 'track-search-fwd', type: 'button', label: 'TRACK ▶▶', section: 'left-controls', variant: 'standard', size: 'sm' },
  { id: 'search-back', type: 'button', label: '◀ SEARCH', section: 'left-controls', variant: 'standard', size: 'sm' },
  { id: 'search-fwd', type: 'button', label: 'SEARCH ▶', section: 'left-controls', variant: 'standard', size: 'sm' },
  { id: 'cue', type: 'transport', label: 'CUE', section: 'left-controls', size: 'lg', hasLed: true, ledColor: '#F57C00' },
  { id: 'play-pause', type: 'transport', label: 'PLAY/PAUSE ▶/❚❚', section: 'left-controls', size: 'lg', hasLed: true, ledColor: '#66BB6A' },
];

// --- Jog Area Controls (Row 4 Center) ---
const jogAreaControls: PanelControl[] = [
  { id: 'jog-wheel', type: 'jog-wheel', label: 'Jog Wheel', section: 'jog-area', position: { x: 0, y: 0, width: 360 } },
  { id: 'jog-display', type: 'display', label: 'Jog Display', section: 'jog-area' },
];

// --- Right Controls: Jog Mode + Sync + Tempo (Row 4 Right) ---
const rightControls: PanelControl[] = [
  // Jog controls
  { id: 'jog-mode', type: 'button', label: 'JOG MODE', section: 'right-controls', variant: 'function', size: 'sm' },
  { id: 'vinyl-cdj-indicator', type: 'led', label: 'VINYL/CDJ', section: 'right-controls' },
  { id: 'jog-adjust', type: 'knob', label: 'JOG ADJUST', section: 'right-controls', defaultValue: 64, minValue: 0, maxValue: 127 },
  // Sync controls
  { id: 'master', type: 'button', label: 'MASTER', section: 'right-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#4FC3F7' },
  { id: 'key-sync', type: 'button', label: 'KEY SYNC', section: 'right-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#4FC3F7' },
  { id: 'beat-sync', type: 'button', label: 'BEAT SYNC', section: 'right-controls', variant: 'function', size: 'md', hasLed: true, ledColor: '#4FC3F7' },
  // Tempo controls
  { id: 'tempo-range', type: 'button', label: 'TEMPO RANGE', section: 'right-controls', variant: 'function', size: 'sm' },
  { id: 'master-tempo', type: 'button', label: 'MASTER TEMPO', section: 'right-controls', variant: 'function', size: 'sm', hasLed: true, ledColor: '#4FC3F7' },
  { id: 'tempo-slider', type: 'slider', label: 'TEMPO', section: 'right-controls', defaultValue: 64, minValue: 0, maxValue: 127, orientation: 'vertical' },
  { id: 'tempo-reset-indicator', type: 'led', label: 'RESET', section: 'right-controls', ledColor: '#66BB6A' },
  { id: 'tempo-reset', type: 'button', label: 'TEMPO RESET', section: 'right-controls', variant: 'function', size: 'sm' },
];

// --- Panel Sections ---
const sections: PanelSection[] = [
  {
    id: 'navigation',
    label: 'Navigation',
    controls: navigationControls,
    controlLayout: { type: 'flex-row', gap: 2 },
    background: 'rgba(0,0,0,0.15)',
    padding: 4,
  },
  {
    id: 'media',
    label: 'Media',
    controls: mediaControls,
    controlLayout: { type: 'flex-col', gap: 4 },
    minWidth: 60,
    background: 'rgba(0,0,0,0.15)',
    padding: 4,
  },
  {
    id: 'display',
    label: 'Display',
    controls: displayControls,
    controlLayout: { type: 'flex-col', gap: 0 },
    padding: 2,
  },
  {
    id: 'browse-controls',
    label: 'Browse',
    controls: browseControls,
    controlLayout: { type: 'flex-col', gap: 4 },
    minWidth: 100,
    background: 'rgba(0,0,0,0.15)',
    padding: 4,
  },
  {
    id: 'performance-strip',
    label: 'Performance',
    controls: performanceStripControls,
    controlLayout: { type: 'flex-row', gap: 3, wrap: true },
    background: 'rgba(0,0,0,0.15)',
    padding: 4,
  },
  {
    id: 'left-controls',
    label: 'Loop / Transport',
    controls: leftControls,
    controlLayout: { type: 'flex-col', gap: 6 },
    minWidth: 120,
    background: 'rgba(0,0,0,0.10)',
    padding: 4,
  },
  {
    id: 'jog-area',
    label: 'Jog Wheel',
    controls: jogAreaControls,
    controlLayout: { type: 'absolute', width: 400, height: 400 },
    padding: 8,
  },
  {
    id: 'right-controls',
    label: 'Jog / Sync / Tempo',
    controls: rightControls,
    controlLayout: { type: 'flex-col', gap: 4 },
    minWidth: 120,
    background: 'rgba(0,0,0,0.10)',
    padding: 4,
  },
];

// --- Full Panel Layout ---
export const cdj3000Layout: PanelLayout = {
  deviceId: 'cdj-3000',
  layoutMode: 'structural',
  dimensions: { width: 800, height: 1100 },
  aspectRatio: 800 / 1100,
  background: { color: '#1a1a1a' },
  rows: [
    { sections: ['navigation'], height: 'auto', gap: 0 },
    { sections: ['media', 'display', 'browse-controls'], stretch: 'display', gap: 4 },
    { sections: ['performance-strip'], height: 'auto', gap: 0 },
    { sections: ['left-controls', 'jog-area', 'right-controls'], stretch: 'jog-area', gap: 4 },
  ],
  sections,
};

// --- Convenience: flat list of all controls ---
const allCDJ3000Controls: PanelControl[] = sections.flatMap(s => s.controls);

// --- Convenience: all control IDs ---
export const allCDJ3000ControlIds: string[] = allCDJ3000Controls.map(c => c.id);
