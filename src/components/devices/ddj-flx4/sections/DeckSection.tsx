'use client';

import Slider from '@/components/controls/Slider';
import { PanelState } from '@/types/panel';
import LoopControls from './LoopControls';
import JogWheel from './JogWheel';
import TransportControls from './TransportControls';
import PadGrid from './PadGrid';

interface DeckSectionProps {
  deck: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DeckSection({ deck, panelState, highlightedControls, onButtonClick }: DeckSectionProps) {
  const d = `d${deck}`;
  const isHl = (id: string) => highlightedControls.includes(id);

  return (
    <div
      className="flex flex-col gap-2 p-3 rounded-lg flex-1"
      style={{
        background: 'linear-gradient(180deg, rgba(40,40,44,0.8) 0%, rgba(30,30,34,0.9) 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      {/* Row 1: Loop controls */}
      <LoopControls deck={deck} panelState={panelState}
        highlightedControls={highlightedControls} onButtonClick={onButtonClick} />

      {/* Row 2: Jog wheel + tempo slider */}
      <div className="flex items-center gap-3 justify-center px-2 flex-1">
        {deck === 1 ? (
          <>
            <JogWheel id={`${d}-jog`} highlighted={isHl(`${d}-jog`)} size={220} />
            <div className="flex flex-col items-center gap-1 ml-2">
              <Slider id={`${d}-tempo`} label="TEMPO"
                value={panelState[`${d}-tempo`]?.value ?? 64}
                highlighted={isHl(`${d}-tempo`)} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-1 mr-2">
              <Slider id={`${d}-tempo`} label="TEMPO"
                value={panelState[`${d}-tempo`]?.value ?? 64}
                highlighted={isHl(`${d}-tempo`)} />
            </div>
            <JogWheel id={`${d}-jog`} highlighted={isHl(`${d}-jog`)} size={220} />
          </>
        )}
      </div>

      {/* Row 3: Transport controls */}
      <TransportControls deck={deck} panelState={panelState}
        highlightedControls={highlightedControls} onButtonClick={onButtonClick} />

      {/* Row 4: Pad grid */}
      <PadGrid deck={deck} panelState={panelState}
        highlightedControls={highlightedControls} onButtonClick={onButtonClick} />
    </div>
  );
}
