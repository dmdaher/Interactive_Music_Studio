'use client';

import { motion } from 'framer-motion';
import Wheel from '@/components/controls/Wheel';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface ControllerSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
}

export default function ControllerSection({
  panelState,
  highlightedControls,
}: ControllerSectionProps) {
  const getValue = (id: string): number => panelState[id]?.value ?? 0;

  return (
    <motion.div
      className="flex flex-col items-center justify-between h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      {/* Wheel 1 and Wheel 2 in 2 columns */}
      <div className="flex gap-3">
        <Wheel
          id="wheel-1"
          label="Wheel 1"
          value={getValue('wheel-1') || 64}
          highlighted={highlightedControls.includes('wheel-1')}
        />
        <Wheel
          id="wheel-2"
          label="Wheel 2"
          value={getValue('wheel-2')}
          highlighted={highlightedControls.includes('wheel-2')}
        />
      </div>

      {/* Bottom group: S1/S2 buttons + pitch wheel */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3">
          <PanelButton
            id="s1-btn"
            label="S1"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['s1-btn']?.active ?? false}
            highlighted={highlightedControls.includes('s1-btn')}
          />
          <PanelButton
            id="s2-btn"
            label="S2"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['s2-btn']?.active ?? false}
            highlighted={highlightedControls.includes('s2-btn')}
          />
        </div>

        {/* Pitch wheel centered below */}
        <Wheel
          id="pitch-wheel"
          label="Pitch"
          value={getValue('pitch-wheel') || 64}
          highlighted={highlightedControls.includes('pitch-wheel')}
        />
      </div>
    </motion.div>
  );
}
