'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * WAVE EDIT screen — Waveform editor (manual p.82, 99-100).
 *
 * Layout:
 * - Top: SAMPLE selector, WRITE/RELOAD/MODIFY/UTILITY tabs (KBD) or simple header (Pad)
 * - Center: Large waveform display with start/loop/end point markers
 * - Right side: GATE, LOOP, EFFECT SW toggles, SAMPLE UTILITY button
 * - Bottom: START POINT, END POINT, ZOOM HORZ, ZOOM VERT, LEVEL, PREVIEW
 */

/** Demo waveform data points (normalized 0-1) */
const WAVEFORM_POINTS = [
  0.1, 0.3, 0.5, 0.8, 0.6, 0.9, 0.7, 1.0, 0.8, 0.6,
  0.9, 0.7, 0.5, 0.8, 0.6, 0.4, 0.7, 0.5, 0.3, 0.6,
  0.4, 0.2, 0.5, 0.3, 0.1, 0.4, 0.2, 0.3, 0.1, 0.2,
  0.3, 0.5, 0.7, 0.9, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1,
];

interface WaveEditScreenProps {
  selectedIndex?: number;
}

export default function WaveEditScreen({
  selectedIndex = 0,
}: WaveEditScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top: sample selector + tabs */}
      <div
        className="flex items-center justify-between px-1.5 py-[2px] flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            SAMPLE
          </span>
          <span
            className="text-[8px] px-1 py-px rounded font-bold"
            style={{
              color: DISPLAY_COLORS.active,
              backgroundColor: `${DISPLAY_COLORS.active}15`,
            }}
          >
            1-1:PartA_Riff_B_80B
          </span>
        </div>
        <div className="flex gap-0.5">
          {['WRITE', 'RELOAD', 'MODIFY', 'UTILITY'].map((tab, i) => (
            <span
              key={tab}
              className="text-[7px] px-1 py-px rounded"
              style={{
                color: i === 0 ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                backgroundColor: i === 0 ? `${DISPLAY_COLORS.active}20` : 'transparent',
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Main: waveform + right panel */}
      <div className="flex flex-1 min-h-0">
        {/* Waveform display */}
        <div className="flex-1 relative overflow-hidden p-1">
          {/* Waveform center line */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: '50%',
              height: 1,
              backgroundColor: `${DISPLAY_COLORS.border}40`,
            }}
          />

          {/* Start point marker */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: '5%',
              width: 1,
              backgroundColor: DISPLAY_COLORS.highlight,
              zIndex: 3,
            }}
          >
            <span
              className="absolute -top-0 left-0.5 text-[6px]"
              style={{ color: DISPLAY_COLORS.highlight }}
            >
              S
            </span>
          </div>

          {/* End point marker */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: '90%',
              width: 1,
              backgroundColor: DISPLAY_COLORS.mute,
              zIndex: 3,
            }}
          >
            <span
              className="absolute -top-0 left-0.5 text-[6px]"
              style={{ color: DISPLAY_COLORS.mute }}
            >
              E
            </span>
          </div>

          {/* Waveform bars */}
          <div className="absolute inset-0 flex items-center px-2">
            {WAVEFORM_POINTS.map((val, i) => (
              <motion.div
                key={i}
                className="flex-1 mx-px"
                style={{
                  height: `${val * 80}%`,
                  backgroundColor: `${DISPLAY_COLORS.active}80`,
                  borderRadius: 1,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.15, delay: i * 0.01 }}
              />
            ))}
          </div>
        </div>

        {/* Right panel: toggles */}
        <div
          className="flex flex-col gap-1 px-1.5 py-1 flex-shrink-0"
          style={{
            width: 60,
            borderLeft: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          <span className="text-[7px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
            SAMPLE UTILITY
          </span>
          {[
            { label: 'GATE', value: 'ON', color: DISPLAY_COLORS.highlight },
            { label: 'LOOP', value: 'ON', color: DISPLAY_COLORS.active },
            { label: 'EFFECT SW', value: 'OFF', color: DISPLAY_COLORS.zoneMuted },
          ].map((toggle) => (
            <div key={toggle.label} className="flex flex-col">
              <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                {toggle.label}
              </span>
              <span
                className="text-[7px] font-bold"
                style={{ color: toggle.color }}
              >
                {toggle.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: point values + controls */}
      <div
        className="flex items-center justify-between px-1.5 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-2">
          {[
            { label: 'START', value: '0000061952' },
            { label: 'END', value: '0000286905' },
          ].map((point, i) => (
            <div key={point.label} className="flex flex-col">
              <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                {point.label}
              </span>
              <span
                className="text-[7px]"
                style={{
                  color: i === selectedIndex ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {point.value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          {['ZOOM H', 'ZOOM V', 'LEVEL', 'PREVIEW'].map((btn) => (
            <span
              key={btn}
              className="text-[7px] px-1 py-px rounded"
              style={{
                color: DISPLAY_COLORS.zoneMuted,
                border: `1px solid ${DISPLAY_COLORS.border}40`,
              }}
            >
              {btn}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
