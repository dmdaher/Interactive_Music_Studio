'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface DeckTransportProps {
  deckNumber: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const highlightAnimation = {
  animate: {
    boxShadow: [
      '0 0 8px 2px rgba(0,170,255,0.4)',
      '0 0 20px 8px rgba(0,170,255,0.8)',
      '0 0 8px 2px rgba(0,170,255,0.4)',
    ],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export default function DeckTransport({ deckNumber, panelState, highlightedControls, onButtonClick }: DeckTransportProps) {
  const d = `d${deckNumber}`;

  return (
    <div className="flex flex-col gap-3">
      {/* SHIFT button */}
      <PanelButton
        id={`${d}-shift`}
        label="SHIFT"
        variant="function"
        size="sm"
        active={panelState[`${d}-shift`]?.active ?? false}
        highlighted={highlightedControls.includes(`${d}-shift`)}
        onClick={() => onButtonClick?.(`${d}-shift`)}
      />

      {/* CUE button - large round */}
      <div className="flex flex-col items-center gap-0.5" data-control-id={`${d}-cue`}>
        <motion.button
          type="button"
          onClick={() => onButtonClick?.(`${d}-cue`)}
          className="w-14 h-14 rounded-full cursor-pointer select-none flex items-center justify-center"
          style={{
            background: panelState[`${d}-cue`]?.active
              ? 'radial-gradient(circle at 40% 35%, #666 0%, #444 50%, #333 100%)'
              : 'radial-gradient(circle at 40% 35%, #4a4a4a 0%, #333 50%, #222 100%)',
            boxShadow: panelState[`${d}-cue`]?.active
              ? 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'
              : '0 4px 8px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '1px solid #1a1a1a',
          }}
          {...(highlightedControls.includes(`${d}-cue`) ? highlightAnimation : {})}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-[10px] font-bold text-gray-300 tracking-wider">CUE</span>
        </motion.button>
      </div>

      {/* PLAY/PAUSE button - large round */}
      <div className="flex flex-col items-center gap-0.5" data-control-id={`${d}-play`}>
        <motion.button
          type="button"
          onClick={() => onButtonClick?.(`${d}-play`)}
          className="w-14 h-14 rounded-full cursor-pointer select-none flex items-center justify-center"
          style={{
            background: panelState[`${d}-play`]?.active
              ? 'radial-gradient(circle at 40% 35%, #666 0%, #444 50%, #333 100%)'
              : 'radial-gradient(circle at 40% 35%, #4a4a4a 0%, #333 50%, #222 100%)',
            boxShadow: panelState[`${d}-play`]?.active
              ? 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'
              : '0 4px 8px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '1px solid #1a1a1a',
          }}
          {...(highlightedControls.includes(`${d}-play`) ? highlightAnimation : {})}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-[9px] font-bold text-gray-300 tracking-wider">PLAY</span>
        </motion.button>
        <span className="text-[7px] text-neutral-500 tracking-wider">PLAY/PAUSE</span>
      </div>
    </div>
  );
}
