'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';
import { ZONE_COLORS } from '@/lib/constants';

interface ZoneSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const zoneButtons = [
  { id: 'zone-1', label: '1', ledColor: ZONE_COLORS.zone1 },
  { id: 'zone-2', label: '2', ledColor: ZONE_COLORS.zone2 },
  { id: 'zone-3', label: '3', ledColor: ZONE_COLORS.zone3 },
  { id: 'zone-4', label: '4', ledColor: ZONE_COLORS.zone4 },
  { id: 'zone-5', label: '5', ledColor: ZONE_COLORS.zone5 },
  { id: 'zone-6', label: '6', ledColor: ZONE_COLORS.zone6 },
  { id: 'zone-7', label: '7', ledColor: ZONE_COLORS.zone7 },
  { id: 'zone-8', label: '8', ledColor: ZONE_COLORS.zone8 },
];

export default function ZoneSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: ZoneSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        ZONE
      </span>
      <div className="flex items-center gap-1">
        {zoneButtons.map((btn) => {
          const state = panelState[btn.id];
          return (
            <PanelButton
              key={btn.id}
              id={btn.id}
              label={btn.label}
              variant="zone"
              size="md"
              hasLed
              ledOn={state?.ledOn ?? false}
              ledColor={btn.ledColor}
              active={state?.active ?? false}
              highlighted={highlightedControls.includes(btn.id)}
              onClick={() => onButtonClick?.(btn.id)}
            />
          );
        })}
        <div className="w-px h-6 bg-neutral-700 mx-1" />
        <PanelButton
          id="zone-int"
          label="INT"
          variant="zone"
          size="sm"
          hasLed
          ledOn={panelState['zone-int']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['zone-int']?.active ?? false}
          highlighted={highlightedControls.includes('zone-int')}
          onClick={() => onButtonClick?.('zone-int')}
        />
      </div>
    </motion.div>
  );
}
