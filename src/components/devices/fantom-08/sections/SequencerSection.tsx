'use client';

import { motion } from 'framer-motion';
import TransportButton from '@/components/controls/TransportButton';
import Knob from '@/components/controls/Knob';
import { PanelState } from '@/types/panel';

interface SequencerSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function SequencerSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SequencerSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.25 }}
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        SEQUENCER
      </span>
      <div className="flex items-center gap-3">
        <TransportButton
          id="play"
          icon="play"
          active={panelState['play']?.active ?? false}
          highlighted={highlightedControls.includes('play')}
          onClick={() => onButtonClick?.('play')}
        />
        <TransportButton
          id="stop"
          icon="stop"
          active={panelState['stop']?.active ?? false}
          highlighted={highlightedControls.includes('stop')}
          onClick={() => onButtonClick?.('stop')}
        />
        <TransportButton
          id="rec"
          icon="rec"
          active={panelState['rec']?.active ?? false}
          highlighted={highlightedControls.includes('rec')}
          onClick={() => onButtonClick?.('rec')}
        />
        <Knob
          id="tempo-knob"
          label="Tempo"
          value={panelState['tempo-knob']?.value ?? 120}
          highlighted={highlightedControls.includes('tempo-knob')}
          size="md"
        />
      </div>
    </motion.div>
  );
}
