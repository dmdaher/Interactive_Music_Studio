'use client';

import { motion } from 'framer-motion';
import Lever from '@/components/controls/Lever';
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
      className="flex items-end gap-1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      {/* Pitch bend / modulation lever */}
      <Lever
        id="pitch-mod-lever"
        label="P.Bend"
        highlighted={highlightedControls.includes('pitch-mod-lever')}
      />
      {/* Pitch bend wheel */}
      <Wheel
        id="pitch-wheel"
        label="Pitch"
        value={getValue('pitch-wheel') || 64}
        highlighted={highlightedControls.includes('pitch-wheel')}
      />
      {/* Mod wheel */}
      <Wheel
        id="mod-wheel"
        label="Mod"
        value={getValue('mod-wheel')}
        highlighted={highlightedControls.includes('mod-wheel')}
      />
      {/* S1/S2 assignable buttons (stacked vertically) */}
      <div className="flex flex-col gap-1 pb-0.5">
        <PanelButton
          id="s1-btn"
          label="S1"
          variant="function"
          size="sm"
          active={panelState['s1-btn']?.active ?? false}
          highlighted={highlightedControls.includes('s1-btn')}
        />
        <PanelButton
          id="s2-btn"
          label="S2"
          variant="function"
          size="sm"
          active={panelState['s2-btn']?.active ?? false}
          highlighted={highlightedControls.includes('s2-btn')}
        />
      </div>
    </motion.div>
  );
}
