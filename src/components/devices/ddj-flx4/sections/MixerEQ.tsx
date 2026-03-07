'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

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

interface MixerEQProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function MixerEQ({ panelState, highlightedControls, onButtonClick }: MixerEQProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Load buttons + Browse + Master Level */}
      <div className="flex items-center justify-between gap-2">
        <PanelButton
          id="load-1"
          label="LOAD"
          variant="function"
          size="sm"
          labelPosition="above"
          active={panelState['load-1']?.active ?? false}
          highlighted={highlightedControls.includes('load-1')}
          onClick={() => onButtonClick?.('load-1')}
        />
        {/* Browse encoder */}
        <div className="flex flex-col items-center gap-0.5" data-control-id="browse">
          <motion.div
            className="w-8 h-8 rounded-full cursor-pointer"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #666 0%, #444 40%, #333 70%, #222 100%)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.1)',
            }}
            {...(highlightedControls.includes('browse') ? highlightAnimation : {})}
          />
        </div>
        <PanelButton
          id="load-2"
          label="LOAD"
          variant="function"
          size="sm"
          labelPosition="above"
          active={panelState['load-2']?.active ?? false}
          highlighted={highlightedControls.includes('load-2')}
          onClick={() => onButtonClick?.('load-2')}
        />
        <Knob
          id="master-level"
          label="MASTER"
          value={panelState['master-level']?.value ?? 100}
          highlighted={highlightedControls.includes('master-level')}
          size="md"
        />
      </div>

      {/* Trim knobs */}
      <div className="flex items-center justify-between px-4">
        <Knob
          id="trim-1"
          label="TRIM"
          value={panelState['trim-1']?.value ?? 64}
          highlighted={highlightedControls.includes('trim-1')}
          size="sm"
        />
        <Knob
          id="trim-2"
          label="TRIM"
          value={panelState['trim-2']?.value ?? 64}
          highlighted={highlightedControls.includes('trim-2')}
          size="sm"
        />
      </div>

      {/* Branding */}
      <div className="flex flex-col items-start gap-0.5 px-2 py-1">
        <span className="text-[8px] tracking-[0.15em] text-neutral-500 font-medium">PERFORMANCE</span>
        <span className="text-[8px] tracking-[0.15em] text-neutral-500 font-medium">DJ CONTROLLER</span>
        <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-bold">DDJ-FLX4</span>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[7px] text-neutral-500">rekordbox</span>
          <span className="text-[7px] text-neutral-600">serato</span>
        </div>
      </div>

      {/* Master CUE */}
      <div className="flex justify-end px-4">
        <PanelButton
          id="master-cue"
          label="CUE"
          variant="function"
          size="sm"
          hasLed
          ledOn={panelState['master-cue']?.ledOn ?? false}
          ledColor="#F57C00"
          active={panelState['master-cue']?.active ?? false}
          highlighted={highlightedControls.includes('master-cue')}
          onClick={() => onButtonClick?.('master-cue')}
        />
      </div>

      {/* EQ Section: Ch1 | Level Meters | Ch2 */}
      <div className="flex items-center gap-3">
        {/* Ch1 EQ */}
        <div className="flex flex-col items-center gap-3">
          <Knob id="hi-1" label="HI" value={panelState['hi-1']?.value ?? 64} highlighted={highlightedControls.includes('hi-1')} size="sm" />
          <Knob id="mid-1" label="MID" value={panelState['mid-1']?.value ?? 64} highlighted={highlightedControls.includes('mid-1')} size="sm" />
          <Knob id="low-1" label="LOW" value={panelState['low-1']?.value ?? 64} highlighted={highlightedControls.includes('low-1')} size="sm" />
        </div>

        {/* Level Meters */}
        <div className="flex gap-1.5 px-1">
          {[1, 2].map((ch) => (
            <div key={ch} className="flex flex-col-reverse gap-[2px]" style={{ width: 6, height: 80 }}>
              {Array.from({ length: 12 }).map((_, i) => {
                const color = i >= 10 ? '#ef4444' : i >= 7 ? '#f59e0b' : '#22c55e';
                return (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 5,
                      borderRadius: 1,
                      backgroundColor: i < 4 ? color : `${color}33`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Ch2 EQ */}
        <div className="flex flex-col items-center gap-3">
          <Knob id="hi-2" label="HI" value={panelState['hi-2']?.value ?? 64} highlighted={highlightedControls.includes('hi-2')} size="sm" />
          <Knob id="mid-2" label="MID" value={panelState['mid-2']?.value ?? 64} highlighted={highlightedControls.includes('mid-2')} size="sm" />
          <Knob id="low-2" label="LOW" value={panelState['low-2']?.value ?? 64} highlighted={highlightedControls.includes('low-2')} size="sm" />
        </div>
      </div>
    </div>
  );
}
