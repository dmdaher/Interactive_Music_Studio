import { Tutorial } from '@/types/tutorial';

export const panelOverview: Tutorial = {
  id: 'panel-overview',
  deviceId: 'deepmind-12',
  title: 'Getting to Know the DeepMind 12 Panel',
  description:
    "Take a guided tour of the Behringer DeepMind 12's front panel. Learn where the oscillators, filter, envelopes, LFOs, and performance controls are located.",
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  tags: ['overview', 'panel', 'controls', 'beginner', 'synthesizer'],
  steps: [
    {
      id: 'step-1',
      title: 'Welcome to the DeepMind 12',
      instruction:
        'This tutorial gives you a guided tour of the DeepMind 12 front panel. Each step highlights a different section so you can find your way around.',
      details:
        'The DeepMind 12 is a 12-voice polyphonic analog synthesizer. Its panel is laid out in a signal-flow order from left to right: performance controls, arpeggiator, LFOs, oscillators, filter, amplifier, and envelopes.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneName: 'DeepMind 12',
        sceneNumber: 'A001',
      },
    },
    {
      id: 'step-2',
      title: 'Performance Controls',
      instruction:
        'On the far left are the performance controls: Volume knob, Portamento knob, Octave buttons, Pitch Bend wheel, and Mod wheel.',
      details:
        'The Volume knob sets the overall output level. Portamento controls the glide time between notes. The Pitch Bend and Mod wheels give you real-time expression while playing.',
      highlightControls: ['volume', 'portamento', 'pitch-wheel', 'mod-wheel', 'oct-up', 'oct-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneName: 'DeepMind 12',
        sceneNumber: 'A001',
      },
      tipText: 'The wood end cheeks on both sides are a nod to classic analog synth design.',
    },
    {
      id: 'step-3',
      title: 'Arpeggiator / Sequencer',
      instruction:
        'The ARP/SEQ section controls the built-in arpeggiator and step sequencer with Rate and Gate Time sliders.',
      details:
        'Turn the arpeggiator on/off, adjust its speed with Rate, and control note length with Gate Time. Chord and Poly Chord modes let you arpeggiate held chords.',
      highlightControls: ['arp-on-off', 'arp-rate', 'arp-gate-time', 'arp-chord', 'arp-tap-hold'],
      panelStateChanges: {
        'arp-on-off': { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'home',
        sceneName: 'ARP ON',
        sceneNumber: 'A001',
      },
    },
    {
      id: 'step-4',
      title: 'LFO 1 & LFO 2',
      instruction:
        'The two LFO sections provide low-frequency oscillators for modulation. Each has Rate, Delay Time, and waveform indicators.',
      details:
        'LFOs modulate other parameters to create vibrato, tremolo, filter sweeps, and more. The six waveform LEDs show which shape is selected: Sine, Triangle, Square, Ramp Up, Ramp Down, or Sample & Hold.',
      highlightControls: ['lfo1-rate', 'lfo1-delay', 'lfo2-rate', 'lfo2-delay'],
      panelStateChanges: {
        'lfo1-sine': { active: false, ledOn: true },
        'lfo2-triangle': { active: false, ledOn: true },
      },
      displayState: {
        screenType: 'home',
        sceneName: 'LFO SETUP',
        sceneNumber: 'A001',
      },
    },
    {
      id: 'step-5',
      title: 'Oscillators (OSC 1 & 2)',
      instruction:
        'The largest section contains both oscillators. OSC 1 has Pitch Mod, PWM, and waveform selectors. OSC 2 adds Tone Mod, Pitch, and Level controls.',
      details:
        'Each voice has two oscillators that can be mixed together. OSC 1 offers Sawtooth and Squarewave shapes. The Sync button hard-syncs OSC 2 to OSC 1 for aggressive timbres. Noise Level adds white noise to the mix.',
      highlightControls: [
        'osc1-pitch-mod', 'osc1-pwm', 'osc1-saw', 'osc1-pulse',
        'osc2-pitch-mod', 'osc2-tone-mod', 'osc2-pitch', 'osc2-level',
        'noise-level', 'osc-sync',
      ],
      panelStateChanges: {
        'osc1-saw': { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'home',
        sceneName: 'OSC EDIT',
        sceneNumber: 'A001',
      },
      tipText: 'OSC Sync creates the classic "sync sweep" sound when you sweep OSC 2\'s pitch.',
    },
    {
      id: 'step-6',
      title: 'Display & Navigation',
      instruction:
        'The center display section features an LCD screen, program navigation buttons, and a Data Entry dial and slider.',
      details:
        'Use Prog, FX, and Global buttons to access different menus. Bank Up/Down navigate program banks, while +/Yes and −/No scroll through values. The Data Entry dial and fader provide quick value adjustment.',
      highlightControls: ['prog', 'fx-btn', 'global', 'data-entry', 'data-entry-fader', 'bank-up', 'bank-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneName: 'PROGRAM',
        sceneNumber: 'A001',
      },
    },
    {
      id: 'step-7',
      title: 'VCF (Voltage Controlled Filter)',
      instruction:
        'The VCF section is the heart of the DeepMind\'s sound shaping. Five sliders control Frequency, Resonance, Envelope amount, LFO modulation, and Keyboard tracking.',
      details:
        'The filter is a classic 4-pole (24dB/oct) low-pass design with an optional 2-Pole (12dB/oct) mode. The Invert button reverses the envelope modulation direction.',
      highlightControls: ['vcf-freq', 'vcf-res', 'vcf-env', 'vcf-lfo', 'vcf-kybd', 'vcf-2pole', 'vcf-invert'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneName: 'VCF EDIT',
        sceneNumber: 'A001',
      },
      tipText: 'Turn up Resonance to make the filter self-oscillate — it becomes a sine wave generator!',
    },
    {
      id: 'step-8',
      title: 'VCA, HPF & Poly',
      instruction:
        'The VCA section controls the output amplifier level. The HPF (High Pass Filter) removes low frequencies. The Poly section handles unison detune and voice modes.',
      details:
        'VCA Level sets the overall amplitude. HPF Freq sweeps the high-pass cutoff, and Boost adds resonance. Unison Detune fattens the sound by detuning stacked voices.',
      highlightControls: ['vca-level', 'hpf-freq', 'hpf-boost', 'unison-detune', 'poly-mod'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneName: 'VCA/HPF',
        sceneNumber: 'A001',
      },
    },
    {
      id: 'step-9',
      title: 'Envelopes (ADSR)',
      instruction:
        'The Envelopes section has four sliders for Attack, Decay, Sustain, and Release. Buttons select whether the envelope controls the VCA, VCF, or Mod bus.',
      details:
        'ADSR envelopes shape how a sound evolves over time. Attack is how fast the sound reaches full level, Decay is how quickly it drops to the Sustain level, and Release is how long it takes to fade after you release the key.',
      highlightControls: ['env-attack', 'env-decay', 'env-sustain', 'env-release', 'env-vca', 'env-vcf', 'env-mod'],
      panelStateChanges: {
        'env-vca': { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'home',
        sceneName: 'ENV EDIT',
        sceneNumber: 'A001',
      },
      tipText: 'The Curves button lets you change the envelope shape from linear to exponential.',
    },
    {
      id: 'step-10',
      title: 'Voices & Keyboard',
      instruction:
        'The far right shows 12 voice LEDs in a grid — each lights up when that voice is active. Below the panel is a 49-key keyboard.',
      details:
        'The DeepMind 12 has 12 independent analog voices. The LED grid shows voice allocation in real time. The 49-key keyboard spans 4 octaves and can be transposed using the Octave buttons.',
      highlightControls: ['voice-led-1', 'voice-led-6', 'voice-led-12'],
      panelStateChanges: {
        'voice-led-1': { active: false, ledOn: true },
        'voice-led-3': { active: false, ledOn: true },
        'voice-led-5': { active: false, ledOn: true },
      },
      displayState: {
        screenType: 'home',
        sceneName: 'READY',
        sceneNumber: 'A001',
      },
    },
  ],
};
