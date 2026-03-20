'use client';

import LEDIndicator from '@/components/controls/LEDIndicator';
import PanelButton from '@/components/controls/PanelButton';

import { PanelState } from '@/types/panel';

interface MediaSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function MediaSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: MediaSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
      <div data-section-id="media" className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 justify-center">
          <PanelButton
            id="usb-port"
            label="USB port"
            active={getState('usb-port').active}
            highlighted={isHighlighted('usb-port')}
            onClick={() => onButtonClick?.('usb-port')}
          />
          <LEDIndicator
            id="usb-indicator"
            on={getState('usb-indicator').ledOn ?? false}
            color={getState('usb-indicator').ledColor}
            highlighted={isHighlighted('usb-indicator')}
          />
        </div>
        <div className="flex flex-row gap-1 justify-center">
          <PanelButton
            id="usb-stop-btn"
            label="USB STOP"
            active={getState('usb-stop-btn').active}
            highlighted={isHighlighted('usb-stop-btn')}
            onClick={() => onButtonClick?.('usb-stop-btn')}
          />
        </div>
        <div className="flex flex-row gap-1 justify-center">
          <PanelButton
            id="sd-card-slot"
            label="SD memory card slot"
            active={getState('sd-card-slot').active}
            highlighted={isHighlighted('sd-card-slot')}
            onClick={() => onButtonClick?.('sd-card-slot')}
          />
        </div>
        <div className="flex flex-row gap-1 justify-center">
          <LEDIndicator
            id="sd-indicator"
            on={getState('sd-indicator').ledOn ?? false}
            color={getState('sd-indicator').ledColor}
            highlighted={isHighlighted('sd-indicator')}
          />
        </div>
      </div>
  );
}
