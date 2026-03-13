'use client';

import { motion } from 'framer-motion';

interface SliderProps {
  id: string;
  label: string;
  value?: number;
  highlighted?: boolean;
  trackHeight?: number;
  trackWidth?: number;
  thumbHeight?: number;
  showScale?: boolean;
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

export default function Slider({
  id,
  label,
  value = 0,
  highlighted = false,
  trackHeight = 120,
  trackWidth = 16,
  thumbHeight = 14,
  showScale = false,
}: SliderProps) {
  const travel = trackHeight - thumbHeight;
  const clampedValue = Math.max(0, Math.min(127, value));
  // Map 0 (bottom) to 127 (top) -- bottom offset is max when value=0
  const thumbOffset = travel - (clampedValue / 127) * travel;

  return (
    <div className="flex flex-col items-center gap-1" data-control-id={id}>
      {/* Fader assembly */}
      <motion.div
        className="relative rounded-md"
        style={{
          width: trackWidth,
          height: trackHeight,
          background: 'linear-gradient(to bottom, #1a1a1a, #111111)',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)',
          borderLeft: '1px solid #0a0a0a',
          borderRight: '1px solid #0a0a0a',
        }}
        {...(highlighted ? highlightAnimation : {})}
      >
        {/* Center track line */}
        <div
          className="absolute left-1/2 rounded-full"
          style={{
            width: 2,
            height: trackHeight - 12,
            top: 6,
            marginLeft: -1,
            background: 'linear-gradient(to bottom, #333, #222)',
          }}
        />

        {/* Track markings */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <div
            key={pct}
            className="absolute"
            style={{
              width: 6,
              height: 1,
              right: -2,
              top: 6 + (trackHeight - 12) * (1 - pct),
              backgroundColor: '#444',
            }}
          />
        ))}

        {/* Scale numbers (0, 5, 10) — matches hardware silkscreen */}
        {showScale && [
          { pct: 1, text: '10' },
          { pct: 0.5, text: '5' },
          { pct: 0, text: '0' },
        ].map(({ pct, text }) => (
          <span
            key={text}
            className="absolute pointer-events-none select-none"
            style={{
              right: -14,
              top: 6 + (trackHeight - 12) * (1 - pct) - 4,
              fontSize: 6,
              color: '#555',
              fontFamily: 'system-ui, sans-serif',
              lineHeight: 1,
            }}
          >
            {text}
          </span>
        ))}

        {/* Thumb / fader cap */}
        <div
          className="absolute left-1/2 rounded-sm cursor-pointer"
          style={{
            width: 14,
            height: thumbHeight,
            marginLeft: -7,
            top: thumbOffset,
            background: 'linear-gradient(to bottom, #888 0%, #666 30%, #555 60%, #444 100%)',
            boxShadow:
              '0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
            borderRadius: 2,
          }}
        >
          {/* Grip lines on thumb */}
          <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
            <div className="h-[1px] bg-[rgba(255,255,255,0.15)]" />
            <div className="h-[1px] bg-[rgba(0,0,0,0.3)]" />
            <div className="h-[1px] bg-[rgba(255,255,255,0.15)]" />
            <div className="h-[1px] bg-[rgba(0,0,0,0.3)]" />
            <div className="h-[1px] bg-[rgba(255,255,255,0.15)]" />
          </div>
        </div>
      </motion.div>

      {/* Label */}
      <span className="text-[9px] font-medium text-gray-400 uppercase tracking-wider text-center leading-none">
        {label}
      </span>
    </div>
  );
}
