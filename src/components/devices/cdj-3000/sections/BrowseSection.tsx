'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface BrowseSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function BrowseSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: BrowseSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.0 }}
    >
      <div data-section-id="BROWSE" className="flex flex-row gap-1 items-center">
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="BROWSE_BTN"
              label=""
              size="md"
              active={getState('BROWSE_BTN').active}
              highlighted={isHighlighted('BROWSE_BTN')}
              onClick={() => onButtonClick?.('BROWSE_BTN')}
            />
          </motion.div>
      </div>
    </motion.div>
  );
}
