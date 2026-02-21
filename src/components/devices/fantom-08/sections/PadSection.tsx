'use client';

import { motion } from 'framer-motion';
import PadButton from '@/components/controls/PadButton';
import { PanelState } from '@/types/panel';

interface PadSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const padColors = [
  '#3B82F6', '#EF4444', '#10B981', '#F59E0B',
  '#8B5CF6', '#EC4899', '#06B6D4', '#F97316',
  '#3B82F6', '#EF4444', '#10B981', '#F59E0B',
  '#8B5CF6', '#EC4899', '#06B6D4', '#F97316',
];

const padIds = Array.from({ length: 16 }, (_, i) => ({
  id: `pad-${i + 1}`,
  label: `${i + 1}`,
}));

export default function PadSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: PadSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        PADS
      </span>
      <div className="grid grid-cols-4 gap-1.5">
        {padIds.map((pad, index) => {
          const state = panelState[pad.id];
          return (
            <PadButton
              key={pad.id}
              id={pad.id}
              label={pad.label}
              active={state?.active ?? false}
              color={padColors[index]}
              highlighted={highlightedControls.includes(pad.id)}
              onClick={() => onButtonClick?.(pad.id)}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
