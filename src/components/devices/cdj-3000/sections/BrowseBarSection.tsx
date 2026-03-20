'use client';

import LEDIndicator from '@/components/controls/LEDIndicator';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface BrowseBarSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function BrowseBarSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: BrowseBarSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
      <div data-section-id="browse-bar" className="flex flex-row items-center gap-1">
        <PanelButton
          id="source-btn"
          label="SOURCE"
          active={getState('source-btn').active}
          highlighted={isHighlighted('source-btn')}
          onClick={() => onButtonClick?.('source-btn')}
        />
        <PanelButton
          id="browse-btn"
          label="BROWSE"
          active={getState('browse-btn').active}
          highlighted={isHighlighted('browse-btn')}
          onClick={() => onButtonClick?.('browse-btn')}
        />
        <PanelButton
          id="tag-list-btn"
          label="TAG LIST"
          active={getState('tag-list-btn').active}
          highlighted={isHighlighted('tag-list-btn')}
          onClick={() => onButtonClick?.('tag-list-btn')}
        />
        <LEDIndicator
          id="source-indicator"
          on={getState('source-indicator').ledOn ?? false}
          color={getState('source-indicator').ledColor}
          highlighted={isHighlighted('source-indicator')}
        />
        <PanelButton
          id="playlist-btn"
          label="PLAYLIST"
          active={getState('playlist-btn').active}
          highlighted={isHighlighted('playlist-btn')}
          onClick={() => onButtonClick?.('playlist-btn')}
        />
        <PanelButton
          id="search-btn"
          label="SEARCH"
          active={getState('search-btn').active}
          highlighted={isHighlighted('search-btn')}
          onClick={() => onButtonClick?.('search-btn')}
        />
        <PanelButton
          id="menu-utility-btn"
          label="MENU/UTILITY"
          active={getState('menu-utility-btn').active}
          highlighted={isHighlighted('menu-utility-btn')}
          onClick={() => onButtonClick?.('menu-utility-btn')}
        />
      </div>
  );
}
