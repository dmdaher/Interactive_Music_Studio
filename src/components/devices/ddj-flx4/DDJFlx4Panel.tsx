'use client';

import { PanelState } from '@/types/panel';
import DeckSection from './sections/DeckSection';
import BrowseSection from './sections/BrowseSection';
import MixerSection from './sections/MixerSection';
import EffectsSection from './sections/EffectsSection';

interface DDJFlx4PanelProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DDJFlx4Panel({ panelState, highlightedControls, onButtonClick }: DDJFlx4PanelProps) {
  return (
    <div
      className="relative mx-auto overflow-hidden rounded-xl"
      style={{
        width: 2400,
        height: 1400,
        background: 'linear-gradient(180deg, var(--surface) 0%, rgba(20,20,24,1) 100%)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
        transformOrigin: 'top left',
      }}
    >
      <div className="flex h-full p-4 gap-3">
        {/* Column 1: Deck 1 */}
        <DeckSection deck={1} panelState={panelState}
          highlightedControls={highlightedControls} onButtonClick={onButtonClick} />

        {/* Column 2: Center (Browse + Mixer + Effects) */}
        <div className="flex flex-col gap-2" style={{ width: 360 }}>
          <BrowseSection panelState={panelState}
            highlightedControls={highlightedControls} onButtonClick={onButtonClick} />
          <div className="flex gap-2 flex-1">
            <div className="flex-1">
              <MixerSection panelState={panelState}
                highlightedControls={highlightedControls} onButtonClick={onButtonClick} />
            </div>
            <div style={{ width: 110 }}>
              <EffectsSection panelState={panelState}
                highlightedControls={highlightedControls} onButtonClick={onButtonClick} />
            </div>
          </div>
        </div>

        {/* Column 3: Deck 2 */}
        <DeckSection deck={2} panelState={panelState}
          highlightedControls={highlightedControls} onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}
