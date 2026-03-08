'use client';

import PanelButton from '@/components/controls/PanelButton';
import PadButton from '@/components/controls/PadButton';
import { PanelState } from '@/types/panel';
import { DDJ_FLX4_COLORS } from '@/lib/constants';

interface PadGridProps {
  deck: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const PAD_MODES = [
  { suffix: 'hot-cue', label: 'HOT CUE', shiftLabel: 'KEYBOARD' },
  { suffix: 'pad-fx1', label: 'PAD FX1', shiftLabel: 'PAD FX2' },
  { suffix: 'beat-jump', label: 'BEAT JUMP', shiftLabel: 'BEAT LOOP' },
  { suffix: 'sampler', label: 'SAMPLER', shiftLabel: 'KEY SHIFT' },
];

export default function PadGrid({ deck, panelState, highlightedControls, onButtonClick }: PadGridProps) {
  const d = `d${deck}`;
  const isHl = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <div className="flex flex-col gap-1 px-2">
      <div className="flex gap-1">
        {PAD_MODES.map(mode => (
          <div key={mode.suffix} className="flex flex-col items-center">
            <PanelButton id={`${d}-${mode.suffix}`} label={mode.label} variant="function" size="sm"
              active={getState(`${d}-${mode.suffix}`).active} hasLed
              ledOn={getState(`${d}-${mode.suffix}`).ledOn} ledColor={DDJ_FLX4_COLORS.accent}
              highlighted={isHl(`${d}-${mode.suffix}`)}
              onClick={() => onButtonClick?.(`${d}-${mode.suffix}`)} />
            <span className="text-[6px] text-gray-500 mt-0.5">{mode.shiftLabel}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 8 }, (_, i) => {
          const padId = `${d}-pad-${i + 1}`;
          return (
            <PadButton key={padId} id={padId} label={`${i + 1}`}
              active={getState(padId).active} color={DDJ_FLX4_COLORS.accent}
              highlighted={isHl(padId)} onClick={() => onButtonClick?.(padId)} />
          );
        })}
      </div>
    </div>
  );
}
