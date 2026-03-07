'use client';

import { PanelState } from '@/types/panel';
import DeckTopControls from './DeckTopControls';
import JogWheel from './JogWheel';
import DeckTransport from './DeckTransport';
import PadModeSelector from './PadModeSelector';
import PerformancePads from './PerformancePads';

interface DeckSectionProps {
  deckNumber: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DeckSection({ deckNumber, panelState, highlightedControls, onButtonClick }: DeckSectionProps) {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* R1: Loop/Beat/Sync Controls */}
      <DeckTopControls
        deckNumber={deckNumber}
        panelState={panelState}
        highlightedControls={highlightedControls}
        onButtonClick={onButtonClick}
      />

      {/* R2: Jog Wheel */}
      <div className="flex justify-center">
        <JogWheel
          deckNumber={deckNumber}
          highlighted={highlightedControls.includes(`d${deckNumber}-jog`)}
        />
      </div>

      {/* R3: Transport */}
      <div className="flex items-start gap-4">
        <DeckTransport
          deckNumber={deckNumber}
          panelState={panelState}
          highlightedControls={highlightedControls}
          onButtonClick={onButtonClick}
        />
      </div>

      {/* R4: Pad Mode Selectors */}
      <PadModeSelector
        deckNumber={deckNumber}
        panelState={panelState}
        highlightedControls={highlightedControls}
        onButtonClick={onButtonClick}
      />

      {/* R5: Performance Pads + Tempo */}
      <PerformancePads
        deckNumber={deckNumber}
        panelState={panelState}
        highlightedControls={highlightedControls}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
