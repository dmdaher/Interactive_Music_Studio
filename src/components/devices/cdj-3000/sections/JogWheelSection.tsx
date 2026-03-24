'use client';

import { motion } from 'framer-motion';
import TouchDisplay from '@/components/controls/TouchDisplay';
import Wheel from '@/components/controls/Wheel';
import { PanelState } from '@/types/panel';

interface JogWheelSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function JogWheelSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: JogWheelSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.50 }}
    >
      <div data-section-id="JOG_WHEEL" className="flex flex-col h-full">
        <div className="flex flex-row" style={{ flex: '0 0 10%' }}>

        </div>
        <div className="flex flex-col items-center justify-center" style={{ flex: '0 0 85%' }}>

        </div>
      </div>
    </motion.div>
  );
}
