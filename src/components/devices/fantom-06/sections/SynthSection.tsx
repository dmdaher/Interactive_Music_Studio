'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface SynthSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function SynthSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SynthSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.20 }}
    >
      <div data-section-id="synth">
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 764,
              top: 24,
              width: 48,
              height: 39,
            }}
          >
            <Knob
              id="cutoff"
              label=""
              value={getState('cutoff').value ?? 64}
              highlighted={isHighlighted('cutoff')}
              outerSize={39}
              innerSize={27}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 764,
            top: 65,
            width: 48,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CUTOFF
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 827,
              top: 24,
              width: 48,
              height: 39,
            }}
          >
            <Knob
              id="resonance"
              label=""
              value={getState('resonance').value ?? 64}
              highlighted={isHighlighted('resonance')}
              outerSize={39}
              innerSize={27}
            />
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 827,
            top: 65,
            width: 48,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            RESONANCE
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 773,
              top: 72,
              width: 31,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="osc"
                label=""
                width={31}
                height={28}
                active={getState('osc').active}
                highlighted={isHighlighted('osc')}
                onClick={() => onButtonClick?.('osc')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 773,
            top: 60,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            OSC
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 805,
              top: 72,
              width: 31,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="filter-type"
                label=""
                width={31}
                height={28}
                active={getState('filter-type').active}
                highlighted={isHighlighted('filter-type')}
                onClick={() => onButtonClick?.('filter-type')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 805,
            top: 60,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            FILTER TYPE
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 837,
              top: 72,
              width: 31,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="param"
                label=""
                width={31}
                height={28}
                active={getState('param').active}
                highlighted={isHighlighted('param')}
                onClick={() => onButtonClick?.('param')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 837,
            top: 60,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PARAM
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 773,
              top: 96,
              width: 31,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="amp"
                label=""
                width={31}
                height={28}
                active={getState('amp').active}
                highlighted={isHighlighted('amp')}
                onClick={() => onButtonClick?.('amp')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 773,
            top: 84,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            AMP
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 805,
              top: 96,
              width: 31,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="fx"
                label=""
                width={31}
                height={28}
                active={getState('fx').active}
                highlighted={isHighlighted('fx')}
                onClick={() => onButtonClick?.('fx')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 805,
            top: 84,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            FX
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 837,
              top: 96,
              width: 31,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="lfo"
                label=""
                width={31}
                height={28}
                active={getState('lfo').active}
                highlighted={isHighlighted('lfo')}
                onClick={() => onButtonClick?.('lfo')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 837,
            top: 84,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            LFO
          </span>
        </div>
      </div>
    </motion.div>
  );
}
