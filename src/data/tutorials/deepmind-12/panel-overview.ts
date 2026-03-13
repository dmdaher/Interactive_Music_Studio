import { Tutorial } from '@/types/tutorial';

export const panelOverview: Tutorial = {
  id: 'panel-overview',
  deviceId: 'deepmind-12',
  title: 'Panel Overview',
  description:
    'Get to know every section of the Behringer DeepMind 12 — from the performance controls and oscillators to the filter, envelopes, and programmer display.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '10 min',
  tags: ['overview', 'controls', 'getting-started', 'panel'],
  steps: [
    {
      id: 'welcome',
      title: 'Welcome to the DeepMind 12',
      instruction:
        'The Behringer DeepMind 12 is a true analog 12-voice polyphonic synthesizer. It features 2 oscillators per voice, a dual-mode low-pass filter, 3 ADSR envelope generators, 2 LFOs, a 32-step control sequencer, an arpeggiator, and 4 simultaneous effects.',
      details:
        'This overview will walk you through every section of the front panel, left to right. There are 64 physical controls including 26 sliders, illuminated switches, rotary knobs, and the pitch/modulation wheels.',
      highlightControls: [],
      panelStateChanges: {},
    },
    {
      id: 'performance-wheels',
      title: 'Pitch Bend & Modulation Wheels',
      instruction:
        'On the far left, the backlit Pitch Bend wheel allows expressive pitch bending. It is spring-loaded and returns to center when released. The Modulation wheel next to it controls vibrato or any parameter assigned via the mod matrix.',
      details:
        'Both wheels are illuminated by LEDs so they can be seen in low-light conditions. The pitch bend range is configurable from the POLY EDIT menu.',
      highlightControls: ['pitch-bend', 'mod-wheel'],
      panelStateChanges: {
        'pitch-bend': { active: true, value: 64 },
        'mod-wheel': { active: true, value: 0 },
      },
    },
    {
      id: 'volume-portamento',
      title: 'Volume & Portamento',
      instruction:
        'The VOLUME knob controls the main output level for both the headphones and the stereo outputs simultaneously. PORTAMENTO controls the glide time between notes — from 0 (instant) to 10 seconds.',
      details:
        'Portamento can be fine-tuned through 14 different modes in the POLY EDIT menu, and the glide ratio between OSC 1 and OSC 2 can be adjusted independently.',
      highlightControls: ['volume', 'portamento'],
      panelStateChanges: {
        'volume': { active: true, value: 100 },
        'portamento': { active: true, value: 0 },
      },
    },
    {
      id: 'octave-shift',
      title: 'Octave Shift',
      instruction:
        'The OCT UP and OCT DOWN buttons shift the keyboard pitch range in octave steps. The five LEDs above show the current octave offset from -2 to +2. Pressing both buttons simultaneously resets to octave 0.',
      highlightControls: ['oct-down', 'oct-up'],
      panelStateChanges: {
        'oct-down': { active: true },
        'oct-up': { active: true },
      },
    },
    {
      id: 'arp-seq',
      title: 'Arpeggiator / Sequencer',
      instruction:
        'The ARP/SEQ section controls the built-in arpeggiator and 32-step control sequencer. Press ON/OFF to activate. RATE sets the tempo, GATE TIME controls note duration. CHORD and POLY CHORD enable chord mapping features.',
      details:
        'TAP/HOLD lets you tap the tempo in real time or hold notes. The EDIT button opens the full arpeggiator/sequencer parameter editor on the display.',
      highlightControls: ['arp-on', 'arp-rate', 'arp-gate', 'arp-chord', 'arp-poly', 'arp-tap', 'arp-edit'],
      panelStateChanges: {
        'arp-on': { active: true, ledOn: true },
        'arp-rate': { active: true, value: 80 },
        'arp-gate': { active: true, value: 64 },
      },
    },
    {
      id: 'lfo1',
      title: 'LFO 1',
      instruction:
        'LFO 1 (Low Frequency Oscillator) generates cyclical modulation waveforms. The RATE slider sets speed, DELAY TIME controls how long before the LFO effect kicks in. Seven waveform shapes are available — the active waveform LED lights up.',
      details:
        'Available waveforms: Sine, Triangle, Square, Ramp Up, Ramp Down, Sample & Hold, and Glide. The LFO can be synced to MIDI clock and has key sync and envelope auto-trigger options via the EDIT page.',
      highlightControls: ['lfo1-rate', 'lfo1-delay', 'lfo1-edit'],
      panelStateChanges: {
        'lfo1-rate': { active: true, value: 64 },
        'lfo1-delay': { active: true, value: 0 },
      },
    },
    {
      id: 'lfo2',
      title: 'LFO 2',
      instruction:
        'LFO 2 is identical in function to LFO 1 — it provides a second independent modulation source. Having two LFOs per voice allows complex evolving textures and cross-modulation effects.',
      highlightControls: ['lfo2-rate', 'lfo2-delay', 'lfo2-edit'],
      panelStateChanges: {
        'lfo2-rate': { active: true, value: 40 },
        'lfo2-delay': { active: true, value: 20 },
      },
    },
    {
      id: 'oscillators',
      title: 'Oscillators (OSC 1 & 2)',
      instruction:
        'The OSC section houses both oscillators — the core sound generators. OSC 1 offers sawtooth and square/pulse waves with pulse width modulation. OSC 2 adds square waves with tone modulation, a separate pitch control, and a level control.',
      details:
        'NOISE LEVEL adds white noise to the oscillator mix. The SYNC button hard-syncs OSC 2 to OSC 1 for aggressive timbral effects. Each oscillator spans 3 octave ranges (16\', 8\', 4\').',
      highlightControls: [
        'osc1-pitch-mod', 'osc1-square', 'osc1-pwm', 'osc1-saw',
        'osc2-tone-mod', 'osc2-pitch', 'osc2-level', 'osc-noise',
        'osc-sync', 'osc-edit',
      ],
      panelStateChanges: {
        'osc1-saw': { active: true, ledOn: true },
        'osc1-square': { active: true, ledOn: true },
        'osc2-level': { active: true, value: 100 },
        'osc-noise': { active: true, value: 0 },
      },
    },
    {
      id: 'programmer',
      title: 'Programmer Section',
      instruction:
        'The central PROGRAMMER section houses the LCD display and all navigation controls. The five menu buttons — PROG, FX, GLOBAL, COMPARE, and WRITE — access different menu pages. Navigate with BANK/UP, BANK/DOWN, -/NO, and +/YES buttons.',
      details:
        'The rotary DATA ENTRY knob provides precise parameter control, while the DATA ENTRY slider allows rapid adjustment across the full range. The MOD button opens the 8-channel modulation matrix.',
      highlightControls: [
        'display', 'prog', 'fx', 'global', 'compare', 'write',
        'bank-up', 'bank-down', 'nav-no', 'nav-yes',
        'data-entry-knob', 'data-entry-slider', 'mod-btn',
      ],
      panelStateChanges: {
        'prog': { active: true, ledOn: true },
      },
    },
    {
      id: 'poly',
      title: 'Poly Section',
      instruction:
        'The POLY section controls voice allocation. UNISON DETUNE adjusts the detuning spread when voices are stacked in unison mode. The 12 VOICE LEDs show which voices are active as you play.',
      details:
        'Voice modes include standard Poly, Unison (1-12 voices stacked), and Mono. The EDIT button accesses advanced polyphony parameters including pan spread and voice drift.',
      highlightControls: ['poly-detune', 'poly-edit'],
      panelStateChanges: {
        'poly-detune': { active: true, value: 30 },
      },
    },
    {
      id: 'vcf',
      title: 'Voltage Controlled Filter (VCF)',
      instruction:
        'The VCF is a Midas-designed analog low-pass filter. FREQ sets the cutoff frequency, RES adjusts resonance. The 2-POLE switch changes the filter slope from 24dB (4-pole) to 12dB (2-pole). ENV controls filter envelope amount, and INVERT reverses the envelope polarity.',
      details:
        'LFO controls how much the selected LFO modulates the filter. KYBD adjusts keyboard tracking — how the cutoff follows the notes you play. The filter can self-oscillate at high resonance settings.',
      highlightControls: ['vcf-freq', 'vcf-res', 'vcf-env', 'vcf-lfo', 'vcf-kybd', 'vcf-2pole', 'vcf-edit', 'vcf-invert'],
      panelStateChanges: {
        'vcf-freq': { active: true, value: 90 },
        'vcf-res': { active: true, value: 40 },
        'vcf-env': { active: true, value: 64 },
        'vcf-kybd': { active: true, value: 64 },
      },
    },
    {
      id: 'vca',
      title: 'Voltage Controlled Amplifier (VCA)',
      instruction:
        'The VCA controls the output level of each voice. The LEVEL slider sets the overall amplitude. The EDIT button accesses additional VCA parameters on the display, including pan spread and individual voice panning.',
      highlightControls: ['vca-level', 'vca-edit'],
      panelStateChanges: {
        'vca-level': { active: true, value: 100 },
      },
    },
    {
      id: 'hpf',
      title: 'High Pass Filter (HPF)',
      instruction:
        'The HPF removes low frequencies from the signal. FREQ adjusts the cutoff point. The BOOST switch adds a +12 dB bass boost to the signal path — useful for adding weight before the HPF trims the lows.',
      highlightControls: ['hpf-freq', 'hpf-boost'],
      panelStateChanges: {
        'hpf-freq': { active: true, value: 0 },
      },
    },
    {
      id: 'envelopes',
      title: 'Envelopes (ADSR)',
      instruction:
        'The ENVELOPES section provides three independent ADSR envelope generators. The four sliders control Attack, Decay, Sustain, and Release. Use the VCA, VCF, and MOD buttons to select which envelope you are editing.',
      details:
        'The CURVES button toggles the envelope curve shape between exponential, linear, and reverse exponential — each changes the character of the envelope dramatically. The three curve icons on the right show the available shapes.',
      highlightControls: [
        'env-attack', 'env-decay', 'env-sustain', 'env-release',
        'env-vca', 'env-vcf', 'env-mod', 'env-curves',
      ],
      panelStateChanges: {
        'env-attack': { active: true, value: 10 },
        'env-decay': { active: true, value: 50 },
        'env-sustain': { active: true, value: 90 },
        'env-release': { active: true, value: 40 },
        'env-vca': { active: true, ledOn: true },
      },
    },
    {
      id: 'keyboard',
      title: 'The 49-Key Keyboard',
      instruction:
        'The DeepMind 12 features 49 semi-weighted full-size keys with velocity sensitivity and aftertouch. The keyboard spans four octaves and can be shifted up or down using the OCT buttons for an eight-octave total range.',
      details:
        'Velocity and aftertouch response curves can be individually customized in the GLOBAL/KEYBOARD settings menu. You can also set fixed ON/OFF velocities for consistent dynamics.',
      highlightControls: [],
      panelStateChanges: {},
    },
    {
      id: 'summary',
      title: 'Panel Overview Complete',
      instruction:
        'You now know every section of the DeepMind 12 front panel. The signal path flows: Oscillators → VCF (low-pass filter) → VCA (amplifier) → HPF (high-pass filter) → Effects → Output. The three envelopes, two LFOs, and 8-channel mod matrix connect everything together for deep sound design.',
      details:
        'Explore the individual section tutorials to dive deeper into oscillator programming, filter techniques, modulation routing, effects chains, and the arpeggiator/sequencer.',
      highlightControls: [],
      panelStateChanges: {},
    },
  ],
};
