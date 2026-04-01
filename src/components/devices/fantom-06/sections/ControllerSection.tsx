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
              left: '5.50%',
              top: '6.40%',
              width: '3.00%',
              height: '41.00%',
            }}
          >
            <Wheel
              id="wheel-1"
              label=""
              width={32}
              height={133}
              highlighted={isHighlighted('wheel-1')}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: '5.5%',
            top: '5.2%',
            width: '3.0%',
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            WHEEL1
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: '9.30%',
              top: '6.40%',
              width: '3.00%',
              height: '41.00%',
            }}
          >
            <Wheel
              id="wheel-2"
              label=""
              width={32}
              height={133}
              highlighted={isHighlighted('wheel-2')}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: '9.3%',
            top: '5.2%',
            width: '3.0%',
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            WHEEL2
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: '4.50%',
              top: '61.20%',
              width: '4.80%',
              height: '7.80%',
            }}
          >
            <div>
              <PanelButton
                id="s1"
                label=""
                size="sm"
                active={getState('s1').active}
                highlighted={isHighlighted('s1')}
                onClick={() => onButtonClick?.('s1')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: '4.5%',
            top: '60.0%',
            width: '4.8%',
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S1
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: '6.90%',
              top: '83.40%',
              width: '4.80%',
              height: '7.80%',
            }}
          >
            <div>
              <PanelButton
                id="s2"
                label=""
                size="sm"
                active={getState('s2').active}
                highlighted={isHighlighted('s2')}
                onClick={() => onButtonClick?.('s2')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: '6.9%',
            top: '82.2%',
            width: '4.8%',
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S2
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: '6.80%',
              top: '59.00%',
              width: '5.00%',
              height: '36.60%',
            }}
          >
            <DirectionSwitch
              id="pitch-bend-lever"
              label=""
              positions={["FWD","REV","SLIP REV"]}
              highlighted={isHighlighted('pitch-bend-lever')}
              width={54}
              height={119}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: '6.8%',
            top: '57.8%',
            width: '5.0%',
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PITCH BEND/MOD
          </span>
        </div>
      </div>
    </motion.div>
  );
}
