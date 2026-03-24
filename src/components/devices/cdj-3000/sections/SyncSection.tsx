'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface SyncSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function SyncSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SyncSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.40 }}
    >
      <div data-section-id="SYNC" className="flex flex-col gap-1 items-center">
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="SYNC_BTN"
              label=""
              size="md"
              active={getState('SYNC_BTN').active}
              highlighted={isHighlighted('SYNC_BTN')}
              onClick={() => onButtonClick?.('SYNC_BTN')}
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="MASTER"
              label=""
              size="md"
              active={getState('MASTER').active}
              highlighted={isHighlighted('MASTER')}
              onClick={() => onButtonClick?.('MASTER')}
            />
          </motion.div>
      </div>
    </motion.div>
  );
}
