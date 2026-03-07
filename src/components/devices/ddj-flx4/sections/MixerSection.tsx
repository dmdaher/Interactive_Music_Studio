'use client';

import { PanelState } from '@/types/panel';
import MixerEQ from './MixerEQ';
import MixerFX from './MixerFX';
import MixerFaders from './MixerFaders';

interface MixerSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function MixerSection({ panelState, highlightedControls, onButtonClick }: MixerSectionProps) {
  return (
    <div className="flex flex-col gap-2 h-full">
      {/* R1-R2: Load, Trim, EQ, Level Meters, Master */}
      <MixerEQ
        panelState={panelState}
        highlightedControls={highlightedControls}
        onButtonClick={onButtonClick}
      />

      {/* R3: CFX, Headphone, Beat FX */}
      <MixerFX
        panelState={panelState}
        highlightedControls={highlightedControls}
        onButtonClick={onButtonClick}
      />

      {/* R4-R5: Channel Faders, Crossfader */}
      <MixerFaders
        panelState={panelState}
        highlightedControls={highlightedControls}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
