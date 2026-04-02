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
              left: 71,
              top: 24,
              width: 36,
              height: 148,
            }}
          >
            <Wheel
              id="wheel-1"
              label=""
              width={36}
              height={148}
              highlighted={isHighlighted('wheel-1')}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 71,
            top: 12,
            width: 36,
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
              left: 112,
              top: 23,
              width: 36,
              height: 148,
            }}
          >
            <Wheel
              id="wheel-2"
              label=""
              width={36}
              height={148}
              highlighted={isHighlighted('wheel-2')}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 112,
            top: 11,
            width: 36,
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
              left: 51,
              top: 235,
              width: 60,
              height: 16,
            }}
          >
            <div>
              <PanelButton
                id="s1"
                label=""
                width={60}
                height={16}
                active={getState('s1').active}
                highlighted={isHighlighted('s1')}
                onClick={() => onButtonClick?.('s1')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 51,
            top: 223,
            width: 60,
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
              left: 70,
              top: 234,
              width: 60,
              height: 16,
            }}
          >
            <div>
              <PanelButton
                id="s2"
                label=""
                width={60}
                height={16}
                active={getState('s2').active}
                highlighted={isHighlighted('s2')}
                onClick={() => onButtonClick?.('s2')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 70,
            top: 222,
            width: 60,
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
              left: 85,
              top: 260,
              width: 56,
              height: 64,
            }}
          >
            <DirectionSwitch
              id="pitch-bend-lever"
              label=""
              positions={["FWD","REV","SLIP REV"]}
              highlighted={isHighlighted('pitch-bend-lever')}
              width={56}
              height={64}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 85,
            top: 248,
            width: 56,
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
