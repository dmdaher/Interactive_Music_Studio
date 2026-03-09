// DeepMind 12 Panel Layout — THE single source of truth for all controls
// Every control id, type, label, and section assignment lives here.
// The panel component (DeepMindPanel.tsx) is a pure renderer — no control data there.

export interface DeepMindControl {
  id: string;
  type: 'slider' | 'knob' | 'button' | 'wheel' | 'dial' | 'led';
  label: string;
  hasLed?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface DeepMindSection {
  id: string;
  title: string;
  flexGrow: number;
  controls: DeepMindControl[];
  customSlot?: 'performance' | 'display' | 'lfo-waveforms' | 'voices' | 'keyboard';
  subGroups?: { label?: string; controlIds: string[] }[];
}

// ── SECTIONS ──────────────────────────────────────────

export const DEEPMIND_12_SECTIONS: DeepMindSection[] = [
  // 1. PERFORMANCE (far left, with wood end cheek)
  {
    id: 'performance',
    title: 'PERFORMANCE',
    flexGrow: 2,
    customSlot: 'performance',
    controls: [
      { id: 'volume', type: 'knob', label: 'Volume' },
      { id: 'portamento', type: 'knob', label: 'Portamento' },
      { id: 'oct-up', type: 'button', label: 'Octave Up', size: 'sm' },
      { id: 'oct-down', type: 'button', label: 'Octave Down', size: 'sm' },
      { id: 'oct-led--3', type: 'led', label: '-3' },
      { id: 'oct-led--2', type: 'led', label: '-2' },
      { id: 'oct-led--1', type: 'led', label: '-1' },
      { id: 'oct-led-0', type: 'led', label: '0' },
      { id: 'oct-led-1', type: 'led', label: '+1' },
      { id: 'oct-led-2', type: 'led', label: '+2' },
      { id: 'oct-led-3', type: 'led', label: '+3' },
      { id: 'pitch-wheel', type: 'wheel', label: 'Pitch Bend' },
      { id: 'mod-wheel', type: 'wheel', label: 'Mod' },
    ],
  },

  // 2. ARP/SEQ
  {
    id: 'arp-seq',
    title: 'ARP/SEQ',
    flexGrow: 1.5,
    controls: [
      { id: 'arp-on-off', type: 'button', label: 'On/Off', hasLed: true, size: 'sm' },
      { id: 'arp-rate', type: 'slider', label: 'Rate' },
      { id: 'arp-gate-time', type: 'slider', label: 'Gate Time' },
      { id: 'arp-chord', type: 'button', label: 'Chord', hasLed: true, size: 'sm' },
      { id: 'arp-poly-chord', type: 'button', label: 'Poly Chord', hasLed: true, size: 'sm' },
      { id: 'arp-tap-hold', type: 'button', label: 'Tap/Hold', hasLed: true, size: 'sm' },
      { id: 'arp-edit', type: 'button', label: 'Edit', size: 'sm' },
    ],
  },

  // 3. LFO 1
  {
    id: 'lfo1',
    title: 'LFO 1',
    flexGrow: 1,
    customSlot: 'lfo-waveforms',
    controls: [
      { id: 'lfo1-rate', type: 'slider', label: 'Rate' },
      { id: 'lfo1-delay', type: 'slider', label: 'Delay Time' },
      { id: 'lfo1-edit', type: 'button', label: 'Edit', size: 'sm' },
      { id: 'lfo1-sine', type: 'led', label: '∿' },
      { id: 'lfo1-triangle', type: 'led', label: '△' },
      { id: 'lfo1-square', type: 'led', label: '⊓' },
      { id: 'lfo1-ramp-up', type: 'led', label: '⟋' },
      { id: 'lfo1-ramp-down', type: 'led', label: '⟍' },
      { id: 'lfo1-s-h', type: 'led', label: 'S&H' },
    ],
  },

  // 4. LFO 2
  {
    id: 'lfo2',
    title: 'LFO 2',
    flexGrow: 1,
    customSlot: 'lfo-waveforms',
    controls: [
      { id: 'lfo2-rate', type: 'slider', label: 'Rate' },
      { id: 'lfo2-delay', type: 'slider', label: 'Delay Time' },
      { id: 'lfo2-edit', type: 'button', label: 'Edit', size: 'sm' },
      { id: 'lfo2-sine', type: 'led', label: '∿' },
      { id: 'lfo2-triangle', type: 'led', label: '△' },
      { id: 'lfo2-square', type: 'led', label: '⊓' },
      { id: 'lfo2-ramp-up', type: 'led', label: '⟋' },
      { id: 'lfo2-ramp-down', type: 'led', label: '⟍' },
      { id: 'lfo2-s-h', type: 'led', label: 'S&H' },
    ],
  },

  // 5. OSC 1 & 2 (largest section)
  {
    id: 'osc',
    title: 'OSC 1 & 2',
    flexGrow: 3,
    subGroups: [
      {
        label: 'OSC 1',
        controlIds: ['osc1-pitch-mod', 'osc1-pwm', 'osc1-saw', 'osc1-pulse'],
      },
      {
        label: 'OSC 2',
        controlIds: ['osc2-pitch-mod', 'osc2-tone-mod', 'osc2-pitch', 'osc2-level'],
      },
      {
        label: undefined,
        controlIds: ['noise-level', 'osc-edit', 'osc-sync'],
      },
    ],
    controls: [
      { id: 'osc1-pitch-mod', type: 'slider', label: 'Pitch Mod' },
      { id: 'osc1-pwm', type: 'slider', label: 'PWM' },
      { id: 'osc1-saw', type: 'button', label: 'Sawtooth', hasLed: true, size: 'sm' },
      { id: 'osc1-pulse', type: 'button', label: 'Squarewave', hasLed: true, size: 'sm' },
      { id: 'osc2-pitch-mod', type: 'slider', label: 'Pitch Mod' },
      { id: 'osc2-tone-mod', type: 'slider', label: 'Tone Mod' },
      { id: 'osc2-pitch', type: 'slider', label: 'Pitch' },
      { id: 'osc2-level', type: 'slider', label: 'Level' },
      { id: 'noise-level', type: 'slider', label: 'Noise Level' },
      { id: 'osc-edit', type: 'button', label: 'Edit', size: 'sm' },
      { id: 'osc-sync', type: 'button', label: 'Sync', hasLed: true, size: 'sm' },
    ],
  },

  // 6. DISPLAY (center, includes navigation)
  {
    id: 'display',
    title: 'DISPLAY',
    flexGrow: 2.5,
    customSlot: 'display',
    controls: [
      { id: 'prog', type: 'button', label: 'Prog', size: 'sm' },
      { id: 'fx-btn', type: 'button', label: 'FX', size: 'sm' },
      { id: 'global', type: 'button', label: 'Global', size: 'sm' },
      { id: 'compare', type: 'button', label: 'Compare', size: 'sm' },
      { id: 'write', type: 'button', label: 'Write', size: 'sm' },
      { id: 'bank-up', type: 'button', label: 'Bank Up', size: 'sm' },
      { id: 'bank-down', type: 'button', label: 'Bank Down', size: 'sm' },
      { id: 'inc-yes', type: 'button', label: '+/Yes', size: 'sm' },
      { id: 'dec-no', type: 'button', label: '\u2212/No', size: 'sm' },
      { id: 'data-entry', type: 'dial', label: 'Data Entry' },
      { id: 'data-entry-fader', type: 'slider', label: 'Data Entry' },
    ],
  },

  // 7. POLY
  {
    id: 'poly',
    title: 'POLY',
    flexGrow: 0.8,
    controls: [
      { id: 'unison-detune', type: 'slider', label: 'Unison Detune' },
      { id: 'poly-mod', type: 'button', label: 'Mod', hasLed: true, size: 'sm' },
      { id: 'poly-edit', type: 'button', label: 'Edit', size: 'sm' },
    ],
  },

  // 8. VCF
  {
    id: 'vcf',
    title: 'VCF',
    flexGrow: 1.8,
    controls: [
      { id: 'vcf-freq', type: 'slider', label: 'Freq' },
      { id: 'vcf-res', type: 'slider', label: 'Res' },
      { id: 'vcf-env', type: 'slider', label: 'Env' },
      { id: 'vcf-lfo', type: 'slider', label: 'LFO' },
      { id: 'vcf-kybd', type: 'slider', label: 'Kybd' },
      { id: 'vcf-2pole', type: 'button', label: '2-Pole', hasLed: true, size: 'sm' },
      { id: 'vcf-invert', type: 'button', label: 'Invert', hasLed: true, size: 'sm' },
      { id: 'vcf-edit', type: 'button', label: 'Edit', size: 'sm' },
    ],
  },

  // 9. VCA
  {
    id: 'vca',
    title: 'VCA',
    flexGrow: 0.5,
    controls: [
      { id: 'vca-level', type: 'slider', label: 'Level' },
      { id: 'vca-edit', type: 'button', label: 'Edit', size: 'sm' },
    ],
  },

  // 10. HPF
  {
    id: 'hpf',
    title: 'HPF',
    flexGrow: 0.5,
    controls: [
      { id: 'hpf-freq', type: 'slider', label: 'Freq' },
      { id: 'hpf-boost', type: 'button', label: 'Boost', hasLed: true, size: 'sm' },
    ],
  },

  // 11. ENVELOPES
  {
    id: 'envelopes',
    title: 'ENVELOPES',
    flexGrow: 1.8,
    controls: [
      { id: 'env-attack', type: 'slider', label: 'A' },
      { id: 'env-decay', type: 'slider', label: 'D' },
      { id: 'env-sustain', type: 'slider', label: 'S' },
      { id: 'env-release', type: 'slider', label: 'R' },
      { id: 'env-vca', type: 'button', label: 'VCA', hasLed: true, size: 'sm' },
      { id: 'env-vcf', type: 'button', label: 'VCF', hasLed: true, size: 'sm' },
      { id: 'env-mod', type: 'button', label: 'Mod', hasLed: true, size: 'sm' },
      { id: 'env-curves', type: 'button', label: 'Curves', size: 'sm' },
    ],
  },

  // 12. VOICES (far right, with wood end cheek)
  {
    id: 'voices',
    title: 'VOICES',
    flexGrow: 0.8,
    customSlot: 'voices',
    controls: [
      { id: 'voice-led-1', type: 'led', label: '1' },
      { id: 'voice-led-2', type: 'led', label: '2' },
      { id: 'voice-led-3', type: 'led', label: '3' },
      { id: 'voice-led-4', type: 'led', label: '4' },
      { id: 'voice-led-5', type: 'led', label: '5' },
      { id: 'voice-led-6', type: 'led', label: '6' },
      { id: 'voice-led-7', type: 'led', label: '7' },
      { id: 'voice-led-8', type: 'led', label: '8' },
      { id: 'voice-led-9', type: 'led', label: '9' },
      { id: 'voice-led-10', type: 'led', label: '10' },
      { id: 'voice-led-11', type: 'led', label: '11' },
      { id: 'voice-led-12', type: 'led', label: '12' },
    ],
  },
];

// Flat list of every control ID for validation/testing
export const allDeepMind12ControlIds: string[] = DEEPMIND_12_SECTIONS.flatMap(
  (section) => section.controls.map((c) => c.id)
);
