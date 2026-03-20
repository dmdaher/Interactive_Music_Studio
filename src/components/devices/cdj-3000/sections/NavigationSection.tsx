'use client';

import PanelButton from '@/components/controls/PanelButton';
import ValueDial from '@/components/controls/ValueDial';
import { PanelState } from '@/types/panel';

interface NavigationSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function NavigationSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: NavigationSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
      <div data-section-id="navigation" className="flex flex-col items-center gap-1">
        <PanelButton
          id="back-btn"
          label="BACK"
          active={getState('back-btn').active}
          highlighted={isHighlighted('back-btn')}
          onClick={() => onButtonClick?.('back-btn')}
        />
        <PanelButton
          id="tag-track-remove-btn"
          label="TAG TRACK/REMOVE"
          active={getState('tag-track-remove-btn').active}
          highlighted={isHighlighted('tag-track-remove-btn')}
          onClick={() => onButtonClick?.('tag-track-remove-btn')}
        />
        <ValueDial
          id="rotary-selector"
          label="Rotary selector"
          highlighted={isHighlighted('rotary-selector')}
        />
        <PanelButton
          id="track-filter-edit-btn"
          label="TRACK FILTER/EDIT"
          active={getState('track-filter-edit-btn').active}
          highlighted={isHighlighted('track-filter-edit-btn')}
          onClick={() => onButtonClick?.('track-filter-edit-btn')}
        />
        <PanelButton
          id="shortcut-btn"
          label="SHORTCUT"
          active={getState('shortcut-btn').active}
          highlighted={isHighlighted('shortcut-btn')}
          onClick={() => onButtonClick?.('shortcut-btn')}
        />
      </div>
  );
}
