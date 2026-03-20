'use client';

import PanelButton from '@/components/controls/PanelButton';

import { PanelState } from '@/types/panel';

interface PerformanceModesSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function PerformanceModesSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: PerformanceModesSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
      <div data-section-id="performance-modes" className="flex flex-col items-center gap-1">
        <PanelButton
          id="time-mode-btn"
          label="TIME MODE/AUTO CUE"
          active={getState('time-mode-btn').active}
          highlighted={isHighlighted('time-mode-btn')}
          onClick={() => onButtonClick?.('time-mode-btn')}
        />
        <PanelButton
          id="quantize-btn"
          label="QUANTIZE"
          active={getState('quantize-btn').active}
          highlighted={isHighlighted('quantize-btn')}
          onClick={() => onButtonClick?.('quantize-btn')}
        />
        <PanelButton
          id="slip-btn"
          label="SLIP"
          active={getState('slip-btn').active}
          highlighted={isHighlighted('slip-btn')}
          onClick={() => onButtonClick?.('slip-btn')}
        />
      </div>
  );
}
