'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * REC STANDBY screen — Recording parameters (manual p.117-119).
 *
 * Layout:
 * - Top: Track/Pattern selector (TRACK: A-H, PATTERN: 1-8 with INIT PTN)
 * - Middle: Recording parameters list (Count In, Time Signature, Input Quantize, REC EVENT, etc.)
 * - Bottom: REC mode buttons (REALTIME REC | STEP REC)
 */

/** Default recording parameters */
const REC_PARAMETERS = [
  { label: 'Count In', value: '1 MEAS' },
  { label: 'Time Signature', value: '4/4' },
  { label: 'Input Quantize', value: 'OFF' },
  { label: 'REC EVENT', value: 'Note' },
  { label: 'Loop Recording', value: 'OFF' },
  { label: 'Metronome', value: 'ON' },
  { label: 'Metronome Level', value: '8' },
];

interface RecStandbyScreenProps {
  selectedIndex?: number;
  recMode?: 'realtime' | 'step' | 'tr-rec';
  selectedTrack?: number;
}

export default function RecStandbyScreen({
  selectedIndex = 0,
  recMode = 'realtime',
  selectedTrack = 0,
}: RecStandbyScreenProps) {
  const trackLabel = String.fromCharCode(65 + selectedTrack); // A=0, B=1, etc.

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top: Track/Pattern selector */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              TRACK
            </span>
            <span
              className="text-[10px] font-bold px-1.5 py-px rounded"
              style={{
                color: DISPLAY_COLORS.highlight,
                backgroundColor: `${DISPLAY_COLORS.active}20`,
                border: `1px solid ${DISPLAY_COLORS.active}40`,
              }}
            >
              {trackLabel}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              PATTERN
            </span>
            <span
              className="text-[10px] font-bold px-1.5 py-px rounded"
              style={{
                color: DISPLAY_COLORS.text,
                backgroundColor: `${DISPLAY_COLORS.border}30`,
              }}
            >
              INIT PTN
            </span>
          </div>
        </div>
        {/* REC indicator */}
        <span
          className="text-[9px] px-1.5 py-px rounded font-bold"
          style={{
            color: DISPLAY_COLORS.mute,
            backgroundColor: `${DISPLAY_COLORS.mute}15`,
            border: `1px solid ${DISPLAY_COLORS.mute}40`,
          }}
        >
          ● REC
        </span>
      </div>

      {/* Parameter list */}
      <div className="flex-1 overflow-auto">
        {REC_PARAMETERS.map((param, index) => {
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
                className="text-[10px]"
                style={{
                  color: isSelected ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted,
                }}
              >
                {param.label}
              </span>
              <span
                className="text-[10px] font-bold"
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

      {/* Footer: REC mode buttons */}
      <div
        className="flex items-center justify-center gap-3 px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {(['realtime', 'step', 'tr-rec'] as const).map((mode) => {
          const isActive = mode === recMode;
          const label = mode === 'realtime' ? 'REALTIME REC' : mode === 'step' ? 'STEP REC' : 'TR-REC';
          return (
            <span
              key={mode}
              className="text-[9px] px-2 py-0.5 rounded font-bold"
              style={{
                color: isActive ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
                border: `1px solid ${isActive ? DISPLAY_COLORS.active + '60' : DISPLAY_COLORS.border + '40'}`,
              }}
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
