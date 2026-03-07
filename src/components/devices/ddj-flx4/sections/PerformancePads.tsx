'use client';

import PadButton from '@/components/controls/PadButton';
import Slider from '@/components/controls/Slider';
import { PanelState } from '@/types/panel';

interface PerformancePadsProps {
  deckNumber: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function PerformancePads({ deckNumber, panelState, highlightedControls, onButtonClick }: PerformancePadsProps) {
  const d = `d${deckNumber}`;

  return (
    <div className="flex items-start gap-3">
      {/* 4x2 Pad grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
          const id = `${d}-pad-${n}`;
          return (
            <PadButton
              key={id}
              id={id}
              label={String(n)}
              active={panelState[id]?.active ?? false}
              color="#F57C00"
              highlighted={highlightedControls.includes(id)}
              onClick={() => onButtonClick?.(id)}
            />
          );
        })}
      </div>

      {/* TEMPO slider */}
      <div className="flex flex-col items-center">
        <Slider
          id={`${d}-tempo`}
          label="TEMPO"
          value={panelState[`${d}-tempo`]?.value ?? 64}
          highlighted={highlightedControls.includes(`${d}-tempo`)}
        />
      </div>
    </div>
  );
}
