'use client';

import Wheel from '@/components/controls/Wheel';

import { PanelState } from '@/types/panel';

interface JogSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function JogSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: JogSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
      <div data-section-id="jog" className="flex flex-col items-center gap-1">
        <Wheel
          id="jog-wheel"
          label="Jog wheel (–REV/+FWD)"
          highlighted={isHighlighted('jog-wheel')}
        />
        <div
          data-control-id="jog-display"
          className="bg-gray-900 rounded border border-gray-700 flex items-center justify-center text-xs text-gray-500"
          style={{ minHeight: 120, minWidth: 200 }}
        >
          Jog display
        </div>
      </div>
  );
}
