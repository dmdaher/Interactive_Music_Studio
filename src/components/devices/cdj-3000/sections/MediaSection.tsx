'use client';

import { motion } from 'framer-motion';
import LEDIndicator from '@/components/controls/LEDIndicator';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface MediaSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function MediaSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: MediaSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <div data-section-id="MEDIA" className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 justify-center">
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="USB_PORT"
                label=""
                size="md"
                active={getState('USB_PORT').active}
                highlighted={isHighlighted('USB_PORT')}
                onClick={() => onButtonClick?.('USB_PORT')}
              />
            </motion.div>
            <LEDIndicator
              id="USB_INDICATOR"
              on={getState('USB_INDICATOR').ledOn ?? false}
              color={getState('USB_INDICATOR').ledColor}
              highlighted={isHighlighted('USB_INDICATOR')}
            />
        </div>
        <div className="flex flex-row gap-1 justify-center">
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="USB_STOP"
                label=""
                size="md"
                active={getState('USB_STOP').active}
                highlighted={isHighlighted('USB_STOP')}
                onClick={() => onButtonClick?.('USB_STOP')}
              />
            </motion.div>
        </div>
        <div className="flex flex-row gap-1 justify-center">
            <LEDIndicator
              id="SD_INDICATOR"
              on={getState('SD_INDICATOR').ledOn ?? false}
              color={getState('SD_INDICATOR').ledColor}
              highlighted={isHighlighted('SD_INDICATOR')}
            />
            <motion.div whileTap={{ scale: 0.95, y: 2 }}>
              <PanelButton
                id="SD_SLOT"
                label=""
                size="md"
                active={getState('SD_SLOT').active}
                highlighted={isHighlighted('SD_SLOT')}
                onClick={() => onButtonClick?.('SD_SLOT')}
              />
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
