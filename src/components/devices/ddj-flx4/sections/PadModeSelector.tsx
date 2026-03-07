'use client';

import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface PadModeSelectorProps {
  deckNumber: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const padModes = [
  { suffix: 'hot-cue', label: 'HOT CUE', shiftLabel: 'KEYBOARD' },
  { suffix: 'pad-fx1', label: 'PAD FX 1', shiftLabel: 'PAD FX 2' },
  { suffix: 'beat-jump', label: 'BEAT JUMP', shiftLabel: 'BEAT LOOP' },
  { suffix: 'sampler', label: 'SAMPLER', shiftLabel: 'KEY SHIFT' },
];

export default function PadModeSelector({ deckNumber, panelState, highlightedControls, onButtonClick }: PadModeSelectorProps) {
  const d = `d${deckNumber}`;

  return (
    <div className="flex flex-col gap-0.5">
      {/* Mode buttons */}
      <div className="flex gap-1">
        {padModes.map((mode) => {
          const id = `${d}-${mode.suffix}`;
          return (
            <PanelButton
              key={id}
              id={id}
              label={mode.label}
              variant="function"
              size="sm"
              hasLed
              ledOn={panelState[id]?.ledOn ?? false}
              ledColor="#F57C00"
              active={panelState[id]?.active ?? false}
              highlighted={highlightedControls.includes(id)}
              onClick={() => onButtonClick?.(id)}
            />
          );
        })}
      </div>

      {/* Shift labels (printed on panel, not interactive) */}
      <div className="flex gap-1">
        {padModes.map((mode) => (
          <div key={mode.shiftLabel} className="flex-1 text-center">
            <span className="text-[6px] text-neutral-600 tracking-wider">{mode.shiftLabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
