// Behringer DeepMind 12 — device-specific constants

export const DEEPMIND_KEY_COUNT = 49;
export const DEEPMIND_LOWEST_NOTE = 48; // C2
export const DEEPMIND_HIGHEST_NOTE = 96; // C6

export const PANEL_NATURAL_WIDTH = 2200;
export const PANEL_NATURAL_HEIGHT = 540;
export const PROGRAMMER_MIN_WIDTH = 590; // minimum to fit 340px display + nav cluster + data slider + padding
export const SINGLE_SLIDER_SECTION_MIN_WIDTH = 55; // VCA, HPF — sections with a single slider

// Section flex-grow ratios (derived from hardware front panel proportions)
// These sum to 100 for easy percentage reasoning.
// Each section gets (N/100) of the available panel width.
export const SECTION_FLEX = {
  perf: 6,       // Performance: wheels, volume, portamento, octave
  arp: 7,        // ARP/SEQ: 2 sliders + buttons
  lfo1: 6,       // LFO 1: 2 sliders + waveform LEDs
  lfo2: 6,       // LFO 2: 2 sliders + waveform LEDs
  osc: 15,       // OSC 1&2: 8 sliders + buttons (widest non-programmer section)
  prog: 23,      // PROGRAMMER: display + nav + data entry (largest section)
  poly: 6,       // POLY: 1 slider + voice LEDs
  vcf: 12,       // VCF: 5 sliders + buttons
  vca: 3,        // VCA: 1 slider (narrowest)
  hpf: 3,        // HPF: 1 slider + boost switch (narrowest)
  env: 13,       // ENVELOPES: 4 ADSR sliders + buttons + curve icons
} as const;

// Slider track heights (proportional to section density)
// Panel height 540px → section body ~353px. Sliders sized to fill ~75-85% of available space.
export const SLIDER_TRACK_HEIGHT = 250; // standard: ARP, LFO (constrained by ARP's chord buttons + bottom buttons)
export const SLIDER_TRACK_HEIGHT_ENV = 315; // ENVELOPES: tall ADSR sliders
export const SLIDER_TRACK_HEIGHT_VCF = 285; // VCF: 5-slider section
export const SLIDER_TRACK_HEIGHT_OSC = 260; // OSC 1&2 (has sub-labels + waveform buttons)
export const SLIDER_TRACK_HEIGHT_TALL = 290; // HPF (single-slider section with LED button)
export const SLIDER_TRACK_HEIGHT_VCA = 295; // VCA (single-slider section)
export const SLIDER_TRACK_HEIGHT_POLY = 290; // POLY (single-slider with button)
export const SLIDER_TRACK_HEIGHT_DATA = 250; // data-entry slider (inside nav cluster)
export const SLIDER_TRACK_WIDTH = 14; // universal slider track width
export const WHEEL_WIDTH = 36; // pitch bend / mod wheel width (hardware ratio ~1:5.5)
export const WHEEL_HEIGHT = 200; // pitch bend / mod wheel height
export const LED_SIZE = 4; // small LED indicator diameter
export const LED_SIZE_LARGE = LED_SIZE + 2; // larger LED (LFO rate indicator)
export const OSC_DIVIDER_HEIGHT = 64; // vertical divider between OSC 1 and OSC 2

// DeepMind 12 color palette (derived from reference photos)
export const DM_COLORS = {
  body: '#1c1c1c',
  bodyLight: '#242424',
  sectionHeader: '#6A1520',
  sectionHeaderDark: '#4E0E14',
  hpfHeader: '#1A4A7A',
  hpfHeaderDark: '#0E2E4E',
  headerText: '#ffffff',
  labelText: '#cccccc',
  labelDim: '#999999',
  wood: '#5C3A28',
  woodLight: '#7A4E38',
  woodDark: '#3E2418',
  lcdBackground: '#3A6E5C',
  lcdText: '#0A2A1C',
  lcdPixel: '#1A3A2C',
  lcdBacklight: '#5BA87A',
  buttonOrange: '#E8730E',
  buttonOrangeGlow: 'rgba(232, 115, 14, 0.5)',
  ledGreen: '#00ff44',
  ledOrange: '#ff8800',
  ledRed: '#ff2222',
  ledOff: '#1a1a1a',
  sliderTrack: '#111111',
  sliderThumb: '#666666',
  knobBody: '#444444',
  knobHighlight: '#888888',
  brandingText: '#aaaaaa',
  subtitleText: '#777777',
  inactiveIcon: '#555555',
  sectionBg: 'rgba(0,0,0,0.12)',
  sectionBgDeep: 'rgba(0,0,0,0.15)',
  sectionShadow: 'rgba(0,0,0,0.25)',
} as const;

// Voice LED positions (1-12)
export const VOICE_COUNT = 12;

// LFO Waveform types
export const LFO_WAVEFORMS = [
  'sine',
  'triangle',
  'square',
  'ramp-up',
  'ramp-down',
  'sample-hold',
  'glide',
] as const;

// Envelope curve types
export const ENVELOPE_CURVES = ['exponential', 'linear', 'reverse-exp'] as const;
