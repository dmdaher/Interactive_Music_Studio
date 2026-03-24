'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import LEDIndicator from '@/components/controls/LEDIndicator';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface JogControlsSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function JogControlsSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: JogControlsSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.25 }}
    >
      <div data-section-id="JOG_CONTROLS" className="grid grid-cols-2 gap-1">
        <div className="flex flex-col gap-1">
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="TRACK_FILTER_EDIT"
                label=""
                size="md"
                active={getState('TRACK_FILTER_EDIT').active}
                highlighted={isHighlighted('TRACK_FILTER_EDIT')}
                onClick={() => onButtonClick?.('TRACK_FILTER_EDIT')}
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="SHORTCUT"
                label=""
                size="md"
                active={getState('SHORTCUT').active}
                highlighted={isHighlighted('SHORTCUT')}
                onClick={() => onButtonClick?.('SHORTCUT')}
              />
            </motion.div>
            <Knob
              id="VINYL_SPEED_ADJ"
              label=""
              value={getState('VINYL_SPEED_ADJ').value ?? 64}
              highlighted={isHighlighted('VINYL_SPEED_ADJ')}
            />
        </div>
        <div className="flex flex-col gap-1">
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="JOG_MODE"
                label=""
                size="md"
                active={getState('JOG_MODE').active}
                highlighted={isHighlighted('JOG_MODE')}
                onClick={() => onButtonClick?.('JOG_MODE')}
              />
            </motion.div>
            <LEDIndicator
              id="VINYL_CDJ_INDICATOR"
              on={getState('VINYL_CDJ_INDICATOR').ledOn ?? false}
              color={getState('VINYL_CDJ_INDICATOR').ledColor}
              highlighted={isHighlighted('VINYL_CDJ_INDICATOR')}
            />
            <Knob
              id="JOG_ADJUST"
              label=""
              value={getState('JOG_ADJUST').value ?? 64}
              highlighted={isHighlighted('JOG_ADJUST')}
            />
        </div>
      </div>
    </motion.div>
  );
}
