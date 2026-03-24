'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface TransportSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function TransportSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: TransportSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.45 }}
    >
      <div data-section-id="TRANSPORT" className="flex flex-col gap-1 items-center">
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="PLAY_PAUSE"
              label=""
              size="lg"
              active={getState('PLAY_PAUSE').active}
              highlighted={isHighlighted('PLAY_PAUSE')}
              onClick={() => onButtonClick?.('PLAY_PAUSE')}
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="CUE"
              label=""
              size="lg"
              active={getState('CUE').active}
              highlighted={isHighlighted('CUE')}
              onClick={() => onButtonClick?.('CUE')}
            />
          </motion.div>
      </div>
    </motion.div>
  );
}
