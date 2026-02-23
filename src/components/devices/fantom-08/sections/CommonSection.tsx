'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import ValueDial from '@/components/controls/ValueDial';
import { PanelState } from '@/types/panel';

interface CommonSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function CommonSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: CommonSectionProps) {
  const getState = (id: string) => panelState[id] ?? { active: false };
  const isHighlighted = (id: string) => highlightedControls.includes(id);

  return (
    <motion.div
      className="flex gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {/* Left column: Scene buttons (evenly spaced) */}
      <div className="flex flex-col gap-4 flex-shrink-0">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[9px] font-semibold tracking-widest uppercase text-neutral-400">
            SCENE
          </span>
          <PanelButton
            id="scene-select"
            label="Select"
            variant="function"
            size="md"
            labelPosition="above"
            active={getState('scene-select').active}
            highlighted={isHighlighted('scene-select')}
            onClick={() => onButtonClick?.('scene-select')}
          />
        </div>
        <PanelButton
          id="scene-chain"
          label="Chain"
          variant="function"
          size="md"
          labelPosition="above"
          active={getState('scene-chain').active}
          highlighted={isHighlighted('scene-chain')}
          onClick={() => onButtonClick?.('scene-chain')}
        />
        <PanelButton
          id="zone-view"
          label="Zone Vw"
          variant="function"
          size="md"
          labelPosition="above"
          active={getState('zone-view').active}
          highlighted={isHighlighted('zone-view')}
          onClick={() => onButtonClick?.('zone-view')}
        />
        <PanelButton
          id="single-tone"
          label="Single"
          variant="function"
          size="md"
          labelPosition="above"
          active={getState('single-tone').active}
          highlighted={isHighlighted('single-tone')}
          onClick={() => onButtonClick?.('single-tone')}
        />
        <PanelButton
          id="tempo"
          label="Tempo"
          variant="function"
          size="md"
          labelPosition="above"
          active={getState('tempo').active}
          highlighted={isHighlighted('tempo')}
          onClick={() => onButtonClick?.('tempo')}
        />
      </div>

      {/* Right column: Wheel on top, nav buttons + bottom row below */}
      <div className="flex flex-col items-center gap-4">
        {/* Wheel */}
        <ValueDial
          id="value-dial"
          size="lg"
          highlighted={isHighlighted('value-dial')}
        />

        {/* Dec ▲ Inc */}
        <div className="flex items-center gap-2">
          <PanelButton
            id="dec"
            label="Dec"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('dec').active}
            highlighted={isHighlighted('dec')}
            onClick={() => onButtonClick?.('dec')}
          />
          <PanelButton
            id="cursor-up"
            label="▲"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('cursor-up').active}
            highlighted={isHighlighted('cursor-up')}
            onClick={() => onButtonClick?.('cursor-up')}
          />
          <PanelButton
            id="inc"
            label="Inc"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('inc').active}
            highlighted={isHighlighted('inc')}
            onClick={() => onButtonClick?.('inc')}
          />
        </div>

        {/* ◀ ▼ ▶ */}
        <div className="flex items-center gap-2">
          <PanelButton
            id="cursor-left"
            label="◀"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('cursor-left').active}
            highlighted={isHighlighted('cursor-left')}
            onClick={() => onButtonClick?.('cursor-left')}
          />
          <PanelButton
            id="cursor-down"
            label="▼"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('cursor-down').active}
            highlighted={isHighlighted('cursor-down')}
            onClick={() => onButtonClick?.('cursor-down')}
          />
          <PanelButton
            id="cursor-right"
            label="▶"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('cursor-right').active}
            highlighted={isHighlighted('cursor-right')}
            onClick={() => onButtonClick?.('cursor-right')}
          />
        </div>

        {/* Shift, Exit, Enter */}
        <div className="flex items-start gap-2">
          <PanelButton
            id="shift"
            label="Shift"
            variant="standard"
            size="md"
            labelPosition="above"
            active={getState('shift').active}
            highlighted={isHighlighted('shift')}
            onClick={() => onButtonClick?.('shift')}
          />
          <div className="flex flex-col items-center gap-0.5">
            <PanelButton
              id="exit"
              label="Exit"
              variant="standard"
              size="md"
              labelPosition="above"
              active={getState('exit').active}
              highlighted={isHighlighted('exit')}
              onClick={() => onButtonClick?.('exit')}
            />
            <span className="text-[6px] tracking-wide text-neutral-400 uppercase font-medium">
              [PANIC]
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <PanelButton
              id="enter"
              label="Enter"
              variant="standard"
              size="md"
              labelPosition="above"
              active={getState('enter').active}
              highlighted={isHighlighted('enter')}
              onClick={() => onButtonClick?.('enter')}
            />
            <span className="text-[6px] tracking-wide text-neutral-400 uppercase font-medium">
              [NUMERIC]
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
