'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface SelectorSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function SelectorSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SelectorSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <div data-section-id="SELECTOR" className="flex flex-col gap-1 items-center">
          <Knob
            id="ROTARY_SELECTOR"
            label=""
            value={getState('ROTARY_SELECTOR').value ?? 64}
            highlighted={isHighlighted('ROTARY_SELECTOR')}
          />
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="BACK"
              label=""
              size="md"
              active={getState('BACK').active}
              highlighted={isHighlighted('BACK')}
              onClick={() => onButtonClick?.('BACK')}
            />
          </motion.div>
      </div>
    </motion.div>
  );
}
