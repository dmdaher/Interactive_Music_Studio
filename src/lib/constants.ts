export const MIDI_NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export const FANTOM_KEY_COUNT = 88;
export const FANTOM_LOWEST_NOTE = 21; // A0
export const FANTOM_HIGHEST_NOTE = 108; // C8

export const ZONE_COLORS = {
  zone1: '#3B82F6', // blue
  zone2: '#EF4444', // red
  zone3: '#10B981', // green
  zone4: '#F59E0B', // amber
  zone5: '#8B5CF6', // purple
  zone6: '#EC4899', // pink
  zone7: '#06B6D4', // cyan
  zone8: '#F97316', // orange
} as const;

export const DISPLAY_COLORS = {
  background: '#1a1a2e',
  text: '#e0e0e0',
  highlight: '#00ff88',
  warning: '#ffaa00',
  active: '#00aaff',
  zoneActive: '#00ff88',
  zoneMuted: '#666666',
  mute: '#ff4444',
  header: '#4488cc',
  border: '#333355',
  backgroundDark: '#111122',
} as const;

export const ZONE_COLOR_MAP: Record<number, string> = {
  1: ZONE_COLORS.zone1,
  2: ZONE_COLORS.zone2,
  3: ZONE_COLORS.zone3,
  4: ZONE_COLORS.zone4,
  5: ZONE_COLORS.zone5,
  6: ZONE_COLORS.zone6,
  7: ZONE_COLORS.zone7,
  8: ZONE_COLORS.zone8,
};

export const PANEL_COLORS = {
  background: '#1a1a1a',
  surface: '#2a2a2a',
  buttonFace: '#3a3a3a',
  buttonActive: '#5a5a5a',
  text: '#cccccc',
  ledOff: '#333333',
  ledOn: '#00ff44',
  ledRed: '#ff2222',
  ledOrange: '#ff8800',
  highlight: '#00aaff',
  knobMetal: '#888888',
  sliderTrack: '#222222',
  sliderThumb: '#666666',
} as const;

export const TUTORIAL_CATEGORIES: { id: string; label: string; icon: string }[] = [
  { id: 'basics', label: 'Basics', icon: '📘' },
  { id: 'zones-splits', label: 'Zones & Splits', icon: '🎹' },
  { id: 'sound-design', label: 'Sound Design', icon: '🎛️' },
  { id: 'effects', label: 'Effects', icon: '✨' },
  { id: 'midi', label: 'MIDI', icon: '🔌' },
  { id: 'performance', label: 'Performance', icon: '🎤' },
  { id: 'sequencer', label: 'Sequencer', icon: '🎵' },
  { id: 'sampling', label: 'Sampling', icon: '🎙️' },
];

// Panel design dimensions (px) — the "native" size of the Fantom 08 panel
export const PANEL_NATURAL_WIDTH = 2670;
export const PANEL_NATURAL_HEIGHT = 788;
