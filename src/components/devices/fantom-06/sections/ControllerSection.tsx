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
              left: 126,
              top: 107,
              width: 20,
              height: 100,
            }}
          >
            <Wheel
              id="wheel-1"
              label=""
              width={20}
              height={100}
              highlighted={isHighlighted('wheel-1')}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 188,
              top: 107,
              width: 20,
              height: 100,
            }}
          >
            <Wheel
              id="wheel-2"
              label=""
              width={20}
              height={100}
              highlighted={isHighlighted('wheel-2')}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 110,
              top: 359,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="s1"
                label=""
                width={32}
                height={20}
                active={getState('s1').active}
                highlighted={isHighlighted('s1')}
                onClick={() => onButtonClick?.('s1')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 155,
              top: 359,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="s2"
                label=""
                width={32}
                height={20}
                active={getState('s2').active}
                highlighted={isHighlighted('s2')}
                onClick={() => onButtonClick?.('s2')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 126,
              top: 400,
              width: 86,
              height: 86,
            }}
          >
            <DirectionSwitch
              id="pitch-bend-lever"
              label=""
              positions={["FWD","REV","SLIP REV"]}
              highlighted={isHighlighted('pitch-bend-lever')}
              width={86}
              height={86}
            />
          </div>
      </div>
    </motion.div>
  );
}
