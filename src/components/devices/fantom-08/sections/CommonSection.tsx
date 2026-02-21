'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
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
      className="flex flex-col gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {/* Function buttons row */}
      <div className="flex items-center gap-2">
        <PanelButton
          id="menu"
          label="Menu"
          variant="menu"
          size="md"
          active={getState('menu').active}
          highlighted={isHighlighted('menu')}
          onClick={() => onButtonClick?.('menu')}
        />
        <PanelButton
          id="write"
          label="Write"
          variant="function"
          size="md"
          hasLed
          ledOn={getState('write').ledOn ?? false}
          ledColor="#ff2222"
          active={getState('write').active}
          highlighted={isHighlighted('write')}
          onClick={() => onButtonClick?.('write')}
        />
        <PanelButton
          id="tone-select"
          label="Tone Select"
          variant="category"
          size="md"
          hasLed
          ledOn={getState('tone-select').ledOn ?? false}
          ledColor="#00aaff"
          active={getState('tone-select').active}
          highlighted={isHighlighted('tone-select')}
          onClick={() => onButtonClick?.('tone-select')}
        />
      </div>

      {/* Cursor cross + Enter/Exit */}
      <div className="flex items-center gap-4">
        {/* Cursor cross */}
        <div className="grid grid-cols-3 grid-rows-3 gap-0.5 w-fit">
          {/* Row 1 */}
          <div />
          <PanelButton
            id="cursor-up"
            label="Up"
            variant="standard"
            size="sm"
            active={getState('cursor-up').active}
            highlighted={isHighlighted('cursor-up')}
            onClick={() => onButtonClick?.('cursor-up')}
          />
          <div />
          {/* Row 2 */}
          <PanelButton
            id="cursor-left"
            label="Left"
            variant="standard"
            size="sm"
            active={getState('cursor-left').active}
            highlighted={isHighlighted('cursor-left')}
            onClick={() => onButtonClick?.('cursor-left')}
          />
          <PanelButton
            id="enter"
            label="Enter"
            variant="function"
            size="sm"
            active={getState('enter').active}
            highlighted={isHighlighted('enter')}
            onClick={() => onButtonClick?.('enter')}
          />
          <PanelButton
            id="cursor-right"
            label="Right"
            variant="standard"
            size="sm"
            active={getState('cursor-right').active}
            highlighted={isHighlighted('cursor-right')}
            onClick={() => onButtonClick?.('cursor-right')}
          />
          {/* Row 3 */}
          <div />
          <PanelButton
            id="cursor-down"
            label="Down"
            variant="standard"
            size="sm"
            active={getState('cursor-down').active}
            highlighted={isHighlighted('cursor-down')}
            onClick={() => onButtonClick?.('cursor-down')}
          />
          <div />
        </div>

        {/* Exit button */}
        <PanelButton
          id="exit"
          label="Exit"
          variant="function"
          size="md"
          active={getState('exit').active}
          highlighted={isHighlighted('exit')}
          onClick={() => onButtonClick?.('exit')}
        />
      </div>
    </motion.div>
  );
}
