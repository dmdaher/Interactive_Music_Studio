'use client';

import { motion } from 'framer-motion';
import DirectionSwitch from '@/components/controls/DirectionSwitch';
import PanelButton from '@/components/controls/PanelButton';
import Wheel from '@/components/controls/Wheel';
import { PanelState } from '@/types/panel';

interface ControllerSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function ControllerSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: ControllerSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.00 }}
    >
      <div data-section-id="controller">
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 130,
              top: 105,
              width: 14,
              height: 75,
            }}
          >
            <Wheel
              id="wheel-1"
              label=""
              width={14}
              height={75}
              highlighted={isHighlighted('wheel-1')}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 194,
              top: 101,
              width: 14,
              height: 71,
            }}
          >
            <Wheel
              id="wheel-2"
              label=""
              width={14}
              height={71}
              highlighted={isHighlighted('wheel-2')}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 116,
              top: 363,
              width: 19,
              height: 14,
            }}
          >
            <div>
              <PanelButton
                id="s1"
                label=""
                width={19}
                height={14}
                active={getState('s1').active}
                highlighted={isHighlighted('s1')}
                onClick={() => onButtonClick?.('s1')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 150,
              top: 361,
              width: 19,
              height: 14,
            }}
          >
            <div>
              <PanelButton
                id="s2"
                label=""
                width={19}
                height={14}
                active={getState('s2').active}
                highlighted={isHighlighted('s2')}
                onClick={() => onButtonClick?.('s2')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 136,
              top: 410,
              width: 61,
              height: 61,
            }}
          >
            <DirectionSwitch
              id="pitch-bend-lever"
              label=""
              positions={["FWD","REV","SLIP REV"]}
              highlighted={isHighlighted('pitch-bend-lever')}
              width={61}
              height={61}
            />
          </div>
      </div>
    </motion.div>
  );
}
