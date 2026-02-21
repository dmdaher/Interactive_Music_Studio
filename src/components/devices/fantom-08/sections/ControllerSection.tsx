'use client';

import { motion } from 'framer-motion';
import Wheel from '@/components/controls/Wheel';
import Slider from '@/components/controls/Slider';
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
      className="flex items-end gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      {/* Wheels stacked vertically */}
      <div className="flex flex-col gap-3 items-center">
        <Wheel
          id="pitch-wheel"
          label="Pitch"
          value={getValue('pitch-wheel') || 64}
          highlighted={highlightedControls.includes('pitch-wheel')}
        />
        <Wheel
          id="mod-wheel"
          label="Mod"
          value={getValue('mod-wheel')}
          highlighted={highlightedControls.includes('mod-wheel')}
        />
      </div>

      {/* Sliders on the right */}
      <div className="flex gap-2 items-end">
        <Slider
          id="s1-slider"
          label="S1"
          value={getValue('s1-slider')}
          highlighted={highlightedControls.includes('s1-slider')}
        />
        <Slider
          id="s2-slider"
          label="S2"
          value={getValue('s2-slider')}
          highlighted={highlightedControls.includes('s2-slider')}
        />
      </div>
    </motion.div>
  );
}
