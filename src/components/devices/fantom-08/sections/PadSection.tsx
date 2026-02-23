'use client';

import { motion } from 'framer-motion';
import PadButton from '@/components/controls/PadButton';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface PadSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const PAD_COLOR = '#3a3a3a';

const padIds = Array.from({ length: 16 }, (_, i) => ({
  id: `pad-${i + 1}`,
  label: `${i + 1}`,
}));

export default function PadSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: PadSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <span className="text-[8px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        PADS
      </span>

      <div className="flex gap-5">
        {/* Pad function buttons: vertical column on the left */}
        <div className="flex flex-col gap-0.5 justify-center">
          <PanelButton
            id="sampling"
            label="Samp"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['sampling']?.active ?? false}
            highlighted={highlightedControls.includes('sampling')}
            onClick={() => onButtonClick?.('sampling')}
          />
          <PanelButton
            id="pad-mode"
            label="Mode"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['pad-mode']?.active ?? false}
            highlighted={highlightedControls.includes('pad-mode')}
            onClick={() => onButtonClick?.('pad-mode')}
          />
          <PanelButton
            id="clip-board"
            label="Clip"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['clip-board']?.active ?? false}
            highlighted={highlightedControls.includes('clip-board')}
            onClick={() => onButtonClick?.('clip-board')}
          />
          <PanelButton
            id="bank"
            label="Bank"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['bank']?.active ?? false}
            highlighted={highlightedControls.includes('bank')}
            onClick={() => onButtonClick?.('bank')}
          />
          <PanelButton
            id="hold"
            label="Hold"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['hold']?.active ?? false}
            highlighted={highlightedControls.includes('hold')}
            onClick={() => onButtonClick?.('hold')}
          />
        </div>

        {/* 4x4 pad grid */}
        <div className="grid grid-cols-4 gap-1">
          {padIds.map((pad) => {
            const state = panelState[pad.id];
            return (
              <PadButton
                key={pad.id}
                id={pad.id}
                label={pad.label}
                active={state?.active ?? false}
                color={PAD_COLOR}
                highlighted={highlightedControls.includes(pad.id)}
                onClick={() => onButtonClick?.(pad.id)}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
