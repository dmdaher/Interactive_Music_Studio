'use client';



import { PanelState } from '@/types/panel';

interface DisplaySectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DisplaySection({
  panelState,
  highlightedControls,
  onButtonClick,
}: DisplaySectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
      <div data-section-id="display" className="flex flex-col items-center gap-1">
        <div
          data-control-id="touch-display"
          className="bg-gray-900 rounded border border-gray-700 flex items-center justify-center text-xs text-gray-500"
          style={{ minHeight: 120, minWidth: 200 }}
        >
          Touch display
        </div>
      </div>
  );
}
