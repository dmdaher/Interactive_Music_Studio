'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * SAMPLING STANDBY screen — Recording setup (manual p.81, 83, 95).
 *
 * Layout:
 * - Top-left: Time counter (000:00:00), storage/pad indicator
 * - Top-right: Level meter (VU bars)
 * - Center: Parameters (Destination, Sampling Mode, Format, Loop Mode, Original Key)
 * - Bottom: CANCEL | START, recording status (STANDBY)
 *
 * Three variants: To Keyboard, To Storage, To Pad — same layout, different params.
 */

const SAMPLING_PARAMS = [
  { label: 'Destination Tone', value: '0001:INITIAL TONE' },
  { label: 'Sampling Mode', value: 'KBD+INPUT' },
  { label: 'Loop Mode', value: 'ONE-SHOT' },
  { label: 'Original Key', value: '60(C 4)' },
  { label: 'Format', value: 'STEREO' },
  { label: 'Audio In', value: 'OFF' },
];

interface SamplingScreenProps {
  selectedIndex?: number;
}

export default function SamplingScreen({
  selectedIndex = 0,
}: SamplingScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top section: time counter + level meter */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        {/* Time counter */}
        <div className="flex items-center gap-2">
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            Time
          </span>
          <span
            className="text-[14px] font-bold tracking-wider"
            style={{ color: DISPLAY_COLORS.text }}
          >
            000:00:00
          </span>
        </div>

        {/* Level meter (simplified VU bars) */}
        <div className="flex items-end gap-0.5">
          {[0.3, 0.5, 0.7, 0.4, 0.6, 0.8, 0.5, 0.3].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-sm"
              style={{
                height: h * 20,
                backgroundColor: h > 0.7 ? DISPLAY_COLORS.warning : DISPLAY_COLORS.active,
                opacity: 0.6,
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            />
          ))}
        </div>
      </div>

      {/* Parameter list */}
      <div className="flex-1 overflow-auto">
        {SAMPLING_PARAMS.map((param, index) => {
          const isSelected = index === selectedIndex;
          return (
            <motion.div
              key={param.label}
              className="flex items-center justify-between px-2 py-[3px]"
              style={{
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
                borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
              }}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.12, delay: index * 0.03 }}
            >
              <span
                className="text-[9px]"
                style={{
                  color: isSelected ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted,
                }}
              >
                {param.label}
              </span>
              <span
                className="text-[9px] font-bold"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {param.value}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer: recording status + buttons */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {/* Click on/off */}
        <div className="flex items-center gap-2">
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            Click
          </span>
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            TRIG: AUTO TRIG
          </span>
        </div>
        {/* Status + buttons */}
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] px-2 py-0.5 rounded font-bold"
            style={{
              color: DISPLAY_COLORS.text,
              backgroundColor: `${DISPLAY_COLORS.border}40`,
            }}
          >
            STANDBY
          </span>
          <span
            className="text-[8px] px-1.5 py-0.5 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              border: `1px solid ${DISPLAY_COLORS.warning}60`,
            }}
          >
            CANCEL
          </span>
          <span
            className="text-[8px] px-1.5 py-0.5 rounded font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              border: `1px solid ${DISPLAY_COLORS.highlight}60`,
            }}
          >
            START
          </span>
        </div>
      </div>
    </div>
  );
}
