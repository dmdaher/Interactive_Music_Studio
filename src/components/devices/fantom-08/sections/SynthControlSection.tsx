'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import { PanelState } from '@/types/panel';

interface SynthControlSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
}

const synthKnobs = [
  { id: 'cutoff-knob', label: 'Cutoff', defaultValue: 64 },
  { id: 'resonance-knob', label: 'Resonance', defaultValue: 0 },
  { id: 'attack-knob', label: 'Attack', defaultValue: 0 },
  { id: 'decay-knob', label: 'Decay', defaultValue: 64 },
  { id: 'sustain-knob', label: 'Sustain', defaultValue: 100 },
  { id: 'release-knob', label: 'Release', defaultValue: 40 },
  { id: 'effects-knob', label: 'Effects', defaultValue: 0 },
  { id: 'lfo-rate-knob', label: 'LFO Rate', defaultValue: 0 },
];

export default function SynthControlSection({
  panelState,
  highlightedControls,
}: SynthControlSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        SYNTH CONTROL
      </span>
      <div className="flex items-center gap-3">
        {synthKnobs.map((knob) => (
          <Knob
            key={knob.id}
            id={knob.id}
            label={knob.label}
            value={panelState[knob.id]?.value ?? knob.defaultValue}
            highlighted={highlightedControls.includes(knob.id)}
            size="sm"
          />
        ))}
      </div>
    </motion.div>
  );
}
