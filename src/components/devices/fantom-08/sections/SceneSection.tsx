'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface SceneSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const sceneIds = Array.from({ length: 16 }, (_, i) => ({
  id: `scene-${i + 1}`,
  label: `${i + 1}`,
}));

export default function SceneSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SceneSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        SCENE
      </span>

      {/* 4x4 grid of scene buttons */}
      <div className="grid grid-cols-4 gap-1">
        {sceneIds.map((btn) => {
          const state = panelState[btn.id];
          return (
            <PanelButton
              key={btn.id}
              id={btn.id}
              label={btn.label}
              variant="scene"
              size="sm"
              hasLed
              ledOn={state?.ledOn ?? false}
              active={state?.active ?? false}
              highlighted={highlightedControls.includes(btn.id)}
              onClick={() => onButtonClick?.(btn.id)}
            />
          );
        })}
      </div>

      {/* Up/Down navigation */}
      <div className="flex items-center justify-center gap-2 mt-1">
        <PanelButton
          id="scene-up"
          label="Up"
          variant="function"
          size="sm"
          active={panelState['scene-up']?.active ?? false}
          highlighted={highlightedControls.includes('scene-up')}
          onClick={() => onButtonClick?.('scene-up')}
        />
        <PanelButton
          id="scene-down"
          label="Down"
          variant="function"
          size="sm"
          active={panelState['scene-down']?.active ?? false}
          highlighted={highlightedControls.includes('scene-down')}
          onClick={() => onButtonClick?.('scene-down')}
        />
      </div>
    </motion.div>
  );
}
