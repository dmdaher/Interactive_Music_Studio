'use client';

import { motion } from 'framer-motion';
import { PanelState } from '@/types/panel';
import { DDJ_FLX4_PANEL_WIDTH, DDJ_FLX4_PANEL_HEIGHT } from '@/lib/constants';
import DeckSection from './sections/DeckSection';
import MixerSection from './sections/MixerSection';

interface DDJFlx4PanelProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DDJFlx4Panel({
  panelState,
  highlightedControls,
  onButtonClick,
}: DDJFlx4PanelProps) {
  return (
    <div className="w-full h-full overflow-x-auto">
      <motion.div
        className="relative rounded-2xl overflow-hidden select-none"
        style={{
          width: DDJ_FLX4_PANEL_WIDTH,
          minWidth: DDJ_FLX4_PANEL_WIDTH,
          height: DDJ_FLX4_PANEL_HEIGHT,
          backgroundColor: '#1a1a1e',
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.005) 2px, rgba(255,255,255,0.005) 3px), radial-gradient(ellipse at 30% 20%, rgba(60,60,60,0.08) 0%, transparent 60%)',
          boxShadow:
            '0 0 0 1px rgba(80,80,80,0.3), 0 2px 0 0 rgba(255,255,255,0.03) inset, 0 -2px 0 0 rgba(0,0,0,0.4) inset, 0 8px 32px rgba(0,0,0,0.6)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top bezel highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 70%, transparent 95%)',
          }}
        />

        <div className="relative z-10 flex h-full p-4 gap-4">
          {/* Column A: Deck 1 */}
          <div
            className="flex-1 rounded-xl p-4"
            style={{
              background: 'rgba(0,0,0,0.15)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            <DeckSection
              deckNumber={1}
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>

          {/* Column B: Mixer */}
          <div
            className="flex-shrink-0 rounded-xl p-4"
            style={{
              width: 340,
              background: 'rgba(0,0,0,0.2)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.35)',
            }}
          >
            <MixerSection
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>

          {/* Column C: Deck 2 */}
          <div
            className="flex-1 rounded-xl p-4"
            style={{
              background: 'rgba(0,0,0,0.15)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            <DeckSection
              deckNumber={2}
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
