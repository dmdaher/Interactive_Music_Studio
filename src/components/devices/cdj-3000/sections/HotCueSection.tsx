'use client';

import { motion } from 'framer-motion';
import PadButton from '@/components/controls/PadButton';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface HotCueSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function HotCueSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: HotCueSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.20 }}
    >
      <div data-section-id="HOT_CUE" className="grid grid-cols-2 gap-1">
        <div className="flex flex-col gap-1">
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="SLIP"
                label=""
                size="md"
                active={getState('SLIP').active}
                highlighted={isHighlighted('SLIP')}
                onClick={() => onButtonClick?.('SLIP')}
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="QUANTIZE"
                label=""
                size="md"
                active={getState('QUANTIZE').active}
                highlighted={isHighlighted('QUANTIZE')}
                onClick={() => onButtonClick?.('QUANTIZE')}
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="TIME_MODE_AUTO_CUE"
                label=""
                size="md"
                active={getState('TIME_MODE_AUTO_CUE').active}
                highlighted={isHighlighted('TIME_MODE_AUTO_CUE')}
                onClick={() => onButtonClick?.('TIME_MODE_AUTO_CUE')}
              />
            </motion.div>
        </div>
        <div className="flex flex-col gap-1">

        </div>
      </div>
    </motion.div>
  );
}
