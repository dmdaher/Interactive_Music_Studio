'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface CueMemorySectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function CueMemorySection({
  panelState,
  highlightedControls,
  onButtonClick,
}: CueMemorySectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.35 }}
    >
      <div data-section-id="CUE_MEMORY" className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="CUE_LOOP_CALL_BACK"
              label=""
              size="md"
              active={getState('CUE_LOOP_CALL_BACK').active}
              highlighted={isHighlighted('CUE_LOOP_CALL_BACK')}
              onClick={() => onButtonClick?.('CUE_LOOP_CALL_BACK')}
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="CUE_LOOP_CALL_FWD"
              label=""
              size="md"
              active={getState('CUE_LOOP_CALL_FWD').active}
              highlighted={isHighlighted('CUE_LOOP_CALL_FWD')}
              onClick={() => onButtonClick?.('CUE_LOOP_CALL_FWD')}
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="DELETE"
              label=""
              size="md"
              active={getState('DELETE').active}
              highlighted={isHighlighted('DELETE')}
              onClick={() => onButtonClick?.('DELETE')}
            />
          </motion.div>
          <motion.div whileTap={{ scale: 0.95, y: 2 }}>
            <PanelButton
              id="MEMORY"
              label=""
              size="md"
              active={getState('MEMORY').active}
              highlighted={isHighlighted('MEMORY')}
              onClick={() => onButtonClick?.('MEMORY')}
            />
          </motion.div>
      </div>
    </motion.div>
  );
}
