import { GlossaryTerm } from '@/types/glossary';

export const fantom08Glossary: GlossaryTerm[] = [
  // ── CORE CONCEPTS ──────────────────────────────────────────────
  {
    term: 'Zone',
    definition:
      'A separate instrument layer on your keyboard. Each zone has its own sound (tone), key range, volume, and effects. The Fantom supports up to 16 zones playing simultaneously.',
    category: 'core',
    relatedTerms: ['Scene', 'Tone', 'Key Range'],
  },
  {
    term: 'Scene',
    definition:
      'A complete preset that saves everything — all your zone setups, tones, effects, and settings. Think of it as a saved snapshot of your entire keyboard configuration.',
    category: 'core',
    relatedTerms: ['Zone', 'Write / Save'],
  },
  {
    term: 'Tone',
    definition:
      'An individual sound assigned to a zone — like a piano, strings, synth pad, or drum kit. The Fantom has thousands of built-in tones organized by category.',
    category: 'core',
    relatedTerms: ['Tone Category', 'Tone Type', 'Zone'],
  },
  {
    term: 'Tone Category',
    definition:
      'One of 16 groups that organize tones by instrument type: A.Piano, E.Piano, Organ, Keys, Guitar, Bass, Strings, Brass, Wind, Choir, Synth, Pad, FX, Drums, User, Assign.',
    category: 'core',
    relatedTerms: ['Tone', 'Category Buttons'],
  },
  {
    term: 'Tone Type',
    definition:
      'The sound engine used to generate a tone. Types include ZEN-Core (general purpose), SN-AP (acoustic piano sampling), VTW (organ), Model JP8 (classic synth), and SN-Drum (drum kits).',
    category: 'core',
    relatedTerms: ['Tone'],
  },
  {
    term: 'Split',
    definition:
      'Dividing the keyboard so different sections play different sounds. For example, bass on the left hand and piano on the right hand.',
    category: 'core',
    relatedTerms: ['Split Point', 'Zone', 'Key Range'],
  },
  {
    term: 'Split Point',
    definition:
      'The specific key where a split boundary occurs. Notes below the split point play one zone; notes above play another.',
    category: 'core',
    relatedTerms: ['Split', 'Key Range'],
  },
  {
    term: 'Layer / Layering',
    definition:
      'Stacking multiple zones over the same key range so they all sound when you press a key. Used to blend sounds — like piano + strings together.',
    category: 'core',
    relatedTerms: ['Zone', 'Key Range'],
  },
  {
    term: 'Key Range',
    definition:
      "The span of notes a zone responds to. For example, C2–B3 means only keys in that range will trigger the zone's sound.",
    category: 'core',
    relatedTerms: ['Zone', 'Split Point'],
  },
  {
    term: 'Velocity',
    definition:
      'How hard you press a key. Higher velocity usually means louder volume and brighter tone. Many sounds respond differently to soft vs. hard playing.',
    category: 'core',
  },
  {
    term: 'Transpose',
    definition:
      'Shifting the pitch of the keyboard up or down by semitones or octaves without changing what keys you press.',
    category: 'core',
  },
  {
    term: 'Write / Save',
    definition:
      "Storing your current settings to the Fantom's memory. Until you \"Write,\" changes exist only temporarily and will be lost when you switch scenes.",
    category: 'core',
    relatedTerms: ['Scene'],
  },

  // ── CONTROLS ───────────────────────────────────────────────────
  {
    term: 'Value Dial',
    definition:
      'The large rotary knob used to scroll through lists, browse tones, select scenes, and adjust parameter values. Your main navigation tool.',
    category: 'controls',
  },
  {
    term: 'E-Knobs (E1–E6)',
    definition:
      "Six function knobs directly below the display. Their function changes based on what screen you're viewing — they always control whatever parameters are shown on screen.",
    category: 'controls',
  },
  {
    term: 'Zone Buttons (1–8)',
    definition:
      "Buttons on the left side of the panel that select which zone you're editing. The LED color shows each zone's status (active, selected, muted).",
    category: 'controls',
    relatedTerms: ['Zone'],
  },
  {
    term: 'Sliders (1–8)',
    definition:
      "Vertical faders paired with zone buttons. In the default mode, they control each zone's volume. Can be reassigned to other parameters.",
    category: 'controls',
    relatedTerms: ['Zone Buttons (1–8)', 'Control Knobs (1–8)'],
  },
  {
    term: 'Control Knobs (1–8)',
    definition:
      'Knobs paired with the sliders. Their function depends on the selected mode: PAN/LEVEL (panning), CTRL (custom), or ASSIGN (user-mapped).',
    category: 'controls',
    relatedTerms: ['Sliders (1–8)'],
  },
  {
    term: 'Category Buttons',
    definition:
      'The 16 buttons labeled with tone categories (A.Piano, Bass, Synth, etc.). Press one to browse all tones in that category.',
    category: 'controls',
    relatedTerms: ['Tone Category'],
  },
  {
    term: 'Pads (1–16)',
    definition:
      'Velocity-sensitive buttons used for triggering drum hits, launching samples, or controlling sequences. Can be assigned to different functions.',
    category: 'controls',
  },
  {
    term: 'Pitch Bend Wheel',
    definition:
      'A spring-loaded wheel on the left side that temporarily bends the pitch up or down. Returns to center when released.',
    category: 'controls',
    relatedTerms: ['Modulation Wheel'],
  },
  {
    term: 'Modulation Wheel',
    definition:
      'A wheel (no spring) that controls modulation effects like vibrato or filter sweeps. Stays where you leave it.',
    category: 'controls',
    relatedTerms: ['Pitch Bend Wheel'],
  },
  {
    term: 'Cursor Buttons',
    definition:
      'Up/Down/Left/Right navigation buttons used to move through menus and parameters on the display.',
    category: 'controls',
  },
  {
    term: 'Transport Controls',
    definition:
      'Play, Stop, and Record buttons for the built-in sequencer.',
    category: 'controls',
    relatedTerms: ['Sequencer'],
  },

  // ── EFFECTS & SOUND DESIGN ────────────────────────────────────
  {
    term: 'MFX (Multi-Effects)',
    definition:
      'A per-zone effect processor with 91 effect types. Each zone can have its own MFX — like giving each instrument its own effects pedal.',
    category: 'effects',
    relatedTerms: ['IFX (Insert Effects)', 'Signal Routing'],
  },
  {
    term: 'IFX (Insert Effects)',
    definition:
      'Two shared effect blocks (IFX1 and IFX2) applied after zones. Used for effects you want to share across multiple zones.',
    category: 'effects',
    relatedTerms: ['MFX (Multi-Effects)', 'Signal Routing'],
  },
  {
    term: 'TFX (Total Effects)',
    definition:
      'Master-level effect applied to the entire output. Affects everything you hear.',
    category: 'effects',
    relatedTerms: ['Signal Routing'],
  },
  {
    term: 'Reverb',
    definition:
      'An effect that simulates the natural reflections of a room or hall, adding depth and space to your sound.',
    category: 'effects',
    relatedTerms: ['Dry / Wet'],
  },
  {
    term: 'Delay',
    definition:
      'An echo effect that repeats the sound after a set time interval. Can be synced to tempo.',
    category: 'effects',
    relatedTerms: ['Dry / Wet'],
  },
  {
    term: 'Chorus',
    definition:
      'A widening effect that creates slight copies of the sound with tiny pitch and timing variations, making it sound fuller.',
    category: 'effects',
    relatedTerms: ['Dry / Wet'],
  },
  {
    term: 'Dry / Wet',
    definition:
      'The balance between the original unprocessed sound (dry) and the effect-processed sound (wet). 100% wet = only the effect.',
    category: 'effects',
  },
  {
    term: 'Signal Routing',
    definition:
      'The path audio takes through effects: Tone → MFX → Zone EQ → IFX → Chorus/Reverb → Master Effects → Output.',
    category: 'effects',
    relatedTerms: ['MFX (Multi-Effects)', 'IFX (Insert Effects)', 'TFX (Total Effects)'],
  },
  {
    term: 'Oscillator (OSC)',
    definition:
      'The sound generator inside a tone. Creates the initial waveform (sawtooth, square, sine, etc.) that everything else shapes.',
    category: 'effects',
    relatedTerms: ['Filter / Cutoff'],
  },
  {
    term: 'Filter / Cutoff',
    definition:
      'Removes frequencies from the oscillator\'s sound. The cutoff knob controls where it cuts — lower cutoff = darker/duller sound.',
    category: 'effects',
    relatedTerms: ['Oscillator (OSC)', 'Resonance'],
  },
  {
    term: 'Resonance',
    definition:
      "Emphasizes frequencies right at the filter's cutoff point. Adds a sharp, focused quality. High resonance creates a whistling/squealing effect.",
    category: 'effects',
    relatedTerms: ['Filter / Cutoff'],
  },
  {
    term: 'Envelope (ADSR)',
    definition:
      'Controls how a sound evolves over time: Attack (fade-in speed), Decay (drop to sustain), Sustain (held level), Release (fade-out after letting go).',
    category: 'effects',
    relatedTerms: ['LFO'],
  },
  {
    term: 'LFO',
    definition:
      'Low-Frequency Oscillator — a slow, repeating modulation that creates effects like vibrato (pitch wobble), tremolo (volume pulse), or filter sweeps.',
    category: 'effects',
    relatedTerms: ['Envelope (ADSR)'],
  },

  // ── WORKFLOW & FEATURES ───────────────────────────────────────
  {
    term: 'MIDI',
    definition:
      'Musical Instrument Digital Interface — the universal protocol instruments use to communicate with each other and with computers. Sends note, velocity, and control data.',
    category: 'workflow',
    relatedTerms: ['MIDI Channel'],
  },
  {
    term: 'MIDI Channel',
    definition:
      'One of 16 independent communication lanes. Each zone can send/receive on a different channel, letting you control multiple instruments independently.',
    category: 'workflow',
    relatedTerms: ['MIDI', 'Zone'],
  },
  {
    term: 'Arpeggiator',
    definition:
      'Automatically plays the notes of a held chord in rhythmic patterns — up, down, random, etc. Great for creating movement from simple chords.',
    category: 'workflow',
  },
  {
    term: 'Sequencer',
    definition:
      'A built-in recorder that captures your performance as MIDI data. You can record, edit, loop, and arrange patterns into full songs.',
    category: 'workflow',
    relatedTerms: ['Pattern', 'Transport Controls'],
  },
  {
    term: 'Pattern',
    definition:
      'A recorded musical phrase in the sequencer, up to 64 measures long. Patterns can be looped and arranged into songs.',
    category: 'workflow',
    relatedTerms: ['Sequencer'],
  },
  {
    term: 'Mixer',
    definition:
      'A bird\'s-eye view of all your zones showing volume, panning, mute/solo, EQ, and effects sends — like a mixing console for your keyboard.',
    category: 'workflow',
    relatedTerms: ['Zone', 'Sliders (1–8)'],
  },
  {
    term: 'DAW',
    definition:
      'Digital Audio Workstation — computer software for recording and producing music (Logic, Ableton, FL Studio, etc.). The Fantom can connect as a controller and audio interface.',
    category: 'workflow',
    relatedTerms: ['MIDI'],
  },
  {
    term: 'Sampling',
    definition:
      'Recording audio (from a mic, line input, or the Fantom itself) to create new playable sounds. Samples can be assigned to keys or pads.',
    category: 'workflow',
    relatedTerms: ['Pads (1–16)'],
  },
];
