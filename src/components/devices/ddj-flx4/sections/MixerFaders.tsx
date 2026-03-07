'use client';

import { motion } from 'framer-motion';
import Slider from '@/components/controls/Slider';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface MixerFadersProps {
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

export default function MixerFaders({ panelState, highlightedControls, onButtonClick }: MixerFadersProps) {
  const crossfaderValue = panelState['crossfader']?.value ?? 64;
  const crossfaderHighlighted = highlightedControls.includes('crossfader');
  // Map 0-127 to horizontal position (0 = left, 127 = right)
  const crossfaderPos = (crossfaderValue / 127) * 100;

  return (
    <div className="flex flex-col gap-4">
      {/* Channel CUE buttons */}
      <div className="flex items-center justify-between px-6">
        <PanelButton id="ch1-cue" label="CUE" variant="function" size="sm"
          hasLed ledOn={panelState['ch1-cue']?.ledOn ?? false} ledColor="#F57C00"
          active={panelState['ch1-cue']?.active ?? false}
          highlighted={highlightedControls.includes('ch1-cue')}
          onClick={() => onButtonClick?.('ch1-cue')} />
        <PanelButton id="ch2-cue" label="CUE" variant="function" size="sm"
          hasLed ledOn={panelState['ch2-cue']?.ledOn ?? false} ledColor="#F57C00"
          active={panelState['ch2-cue']?.active ?? false}
          highlighted={highlightedControls.includes('ch2-cue')}
          onClick={() => onButtonClick?.('ch2-cue')} />
      </div>

      {/* Channel faders */}
      <div className="flex items-start justify-between px-8">
        <Slider id="ch1-fader" label="CH 1" value={panelState['ch1-fader']?.value ?? 100} highlighted={highlightedControls.includes('ch1-fader')} />
        <Slider id="ch2-fader" label="CH 2" value={panelState['ch2-fader']?.value ?? 100} highlighted={highlightedControls.includes('ch2-fader')} />
      </div>

      {/* Crossfader */}
      <div className="flex flex-col items-center gap-1 px-2">
        <motion.div
          className="relative w-full rounded-md"
          style={{
            height: 20,
            background: 'linear-gradient(to right, #111, #1a1a1a)',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)',
            border: '1px solid #0a0a0a',
          }}
          data-control-id="crossfader"
          {...(crossfaderHighlighted ? highlightAnimation : {})}
        >
          {/* Center line */}
          <div className="absolute left-1/2 top-1 bottom-1 w-[1px] bg-neutral-700" />
          {/* Thumb */}
          <div
            className="absolute top-0.5 rounded-sm cursor-pointer"
            style={{
              width: 24,
              height: 16,
              left: `calc(${crossfaderPos}% - 12px)`,
              background: 'linear-gradient(to bottom, #888 0%, #666 30%, #555 60%, #444 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
              <div className="h-[1px] bg-[rgba(255,255,255,0.15)]" />
              <div className="h-[1px] bg-[rgba(0,0,0,0.3)]" />
              <div className="h-[1px] bg-[rgba(255,255,255,0.15)]" />
            </div>
          </div>
        </motion.div>
        <span className="text-[8px] text-neutral-500 tracking-wider">CROSSFADER</span>
      </div>

      {/* Pioneer DJ branding + Smart Fader */}
      <div className="flex items-center justify-between px-2 pt-1">
        <span className="text-[9px] font-bold tracking-[0.2em] text-neutral-500">Pioneer DJ</span>
        <PanelButton id="smart-fader" label="SMART FADER" variant="function" size="sm"
          hasLed ledOn={panelState['smart-fader']?.ledOn ?? false} ledColor="#F57C00"
          active={panelState['smart-fader']?.active ?? false}
          highlighted={highlightedControls.includes('smart-fader')}
          onClick={() => onButtonClick?.('smart-fader')} />
      </div>
    </div>
  );
}
