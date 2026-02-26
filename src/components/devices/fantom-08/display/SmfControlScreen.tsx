'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * SMF CONTROL screen — Standard MIDI File player (manual p.139-140).
 *
 * Layout:
 * - Top: SMF SELECT button
 * - Middle-top: Time Signature, Tempo, Transpose display
 * - Middle: TRACK info (number, Meas, Beat, Tick) + MUTE/SOLO buttons
 * - Middle-bottom: Transport controls (rewind, FF, play/stop, forward)
 * - Bottom: LOOP A point, loop icon, LOOP B point, LOOP A-B CLEAR
 *   + playback position dots
 */

interface SmfControlScreenProps {
  selectedIndex?: number;
}

export default function SmfControlScreen({
  selectedIndex = 0,
}: SmfControlScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top: SMF SELECT */}
      <div
        className="flex items-center justify-between px-2 py-[3px] flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[8px] px-1.5 py-0.5 rounded"
          style={{
            color: DISPLAY_COLORS.active,
            backgroundColor: `${DISPLAY_COLORS.active}15`,
            border: `1px solid ${DISPLAY_COLORS.active}40`,
          }}
        >
          SMF SELECT
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="text-[7px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              border: `1px solid ${DISPLAY_COLORS.border}30`,
            }}
          >
            MUTE
          </span>
          <span
            className="text-[7px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              border: `1px solid ${DISPLAY_COLORS.border}30`,
            }}
          >
            SOLO
          </span>
        </div>
      </div>

      {/* Tempo + signature info */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              Time Signature
            </span>
            <span className="text-[9px] font-bold" style={{ color: DISPLAY_COLORS.text }}>
              4/4
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              Tempo
            </span>
            <span className="text-[9px] font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
              120.00
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            Transpose
          </span>
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.text }}>
            0
          </span>
        </div>
      </div>

      {/* Track info: TRACK, Meas, Beat, Tick */}
      <div
        className="flex items-center justify-between px-2 py-1.5 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
        }}
      >
        <div className="flex items-center gap-3">
          {[
            { label: 'TRACK', value: '001' },
            { label: 'Meas', value: '01' },
            { label: 'Beat', value: '01' },
            { label: 'Tick', value: '000' },
          ].map((item, i) => {
            const isSelected = i === selectedIndex;
            return (
              <div key={item.label} className="flex flex-col items-center">
                <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                  {item.label}
                </span>
                <span
                  className="text-[10px] font-bold"
                  style={{
                    color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                  }}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
        {/* Up/down arrows */}
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            &#9650;
          </span>
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            &#9660;
          </span>
        </div>
      </div>

      {/* Transport controls */}
      <div className="flex-1 flex items-center justify-center gap-3 px-2">
        {[
          { icon: '|◁', label: 'start' },
          { icon: '◁◁', label: 'rewind' },
          { icon: '▷/■', label: 'play' },
          { icon: '▷▷', label: 'forward' },
        ].map((btn, i) => (
          <motion.div
            key={btn.label}
            className="flex items-center justify-center rounded"
            style={{
              width: 28,
              height: 22,
              backgroundColor: `${DISPLAY_COLORS.border}20`,
              border: `1px solid ${DISPLAY_COLORS.border}40`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: i * 0.04 }}
          >
            <span className="text-[9px]" style={{ color: DISPLAY_COLORS.text }}>
              {btn.icon}
            </span>
          </motion.div>
        ))}
        {/* Position dots */}
        <div className="flex gap-0.5 ml-2">
          {[1, 2, 3, 4].map((d) => (
            <div
              key={d}
              className="rounded-full"
              style={{
                width: 4,
                height: 4,
                backgroundColor: d === 1 ? DISPLAY_COLORS.active : `${DISPLAY_COLORS.border}40`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer: Loop points */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="flex flex-col">
            <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              LOOP A
            </span>
            <span className="text-[7px]" style={{ color: DISPLAY_COLORS.text }}>
              001-01-000
            </span>
          </div>
          <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            &#8634;
          </span>
          <div className="flex flex-col">
            <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              LOOP B
            </span>
            <span className="text-[7px]" style={{ color: DISPLAY_COLORS.text }}>
              001-01-000
            </span>
          </div>
        </div>
        <span
          className="text-[7px] px-1 py-px rounded"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            border: `1px solid ${DISPLAY_COLORS.border}30`,
          }}
        >
          LOOP A-B CLEAR
        </span>
      </div>
    </div>
  );
}
