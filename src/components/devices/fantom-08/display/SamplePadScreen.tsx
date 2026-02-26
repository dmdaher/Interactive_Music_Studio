'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * SAMPLE PAD screen — 4×4 pad grid with sample info (manual p.94, 97, 99).
 *
 * Layout:
 * - Top: Bank tabs (BANK1-4), SAMPLING button, SAMPLE UTILITY button
 * - Main: 4×4 grid of 16 pads, each showing:
 *   - Pad number, GATE/LOOP/FX SW indicators
 *   - Sample name, Stereo/Mono, Sample size
 * - Bottom: WAVE EDIT | QUICK EDIT | IMPORT
 */

const BANK_TABS = ['BANK1', 'BANK2', 'BANK3', 'BANK4'];

/** Demo pad data */
const DEMO_PADS = [
  { name: 'PartA_Riff_B_80B', format: 'STEREO', size: '2.1MB' },
  { name: 'PartB_Riff_B_80B', format: 'STEREO', size: '2.1MB' },
  { name: 'PartC_Riff_B_80B', format: 'STEREO', size: '2.1MB' },
  { name: 'Break_Riff_B_80B', format: 'STEREO', size: '2.1MB' },
  { name: 'PartA_Riff_A_80B', format: 'STEREO', size: '1.9MB' },
  { name: 'PartB_Riff_A_80B', format: 'STEREO', size: '1.9MB' },
  { name: 'PartC_Riff_A_80B', format: 'STEREO', size: '1.9MB' },
  { name: 'Break_Riff_A_80B', format: 'STEREO', size: '1.9MB' },
  { name: 'PartA_Bass_80BPM', format: 'STEREO', size: '2.1MB' },
  { name: 'PartB_Bass_80BPM', format: 'STEREO', size: '2.1MB' },
  { name: 'PartC_Bass_80BPM', format: 'STEREO', size: '1.8MB' },
  { name: 'Break_Bass_80BPM', format: 'STEREO', size: '1.8MB' },
  { name: 'PartA_Drums_80B', format: 'STEREO', size: '3.1MB' },
  { name: 'PartB_Drums_80B', format: 'STEREO', size: '3.1MB' },
  { name: 'PartC_Drums_80B', format: 'STEREO', size: '3.1MB' },
  { name: 'Break_Drums_80B', format: 'STEREO', size: '3.1MB' },
];

interface SamplePadScreenProps {
  selectedIndex?: number;
  activeTab?: string;
}

export default function SamplePadScreen({
  selectedIndex = 0,
  activeTab = 'BANK1',
}: SamplePadScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Bank tabs + buttons */}
      <div
        className="flex items-center justify-between px-1.5 py-[2px] flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-0.5">
          {BANK_TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <span
                key={tab}
                className="text-[8px] px-1.5 py-px rounded"
                style={{
                  color: isActive ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                  backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
                  border: `1px solid ${isActive ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '30'}`,
                }}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="flex gap-1">
          <span
            className="text-[8px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.mute,
              border: `1px solid ${DISPLAY_COLORS.mute}40`,
            }}
          >
            SAMPLING
          </span>
          <span
            className="text-[8px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.header,
              border: `1px solid ${DISPLAY_COLORS.header}40`,
            }}
          >
            SAMPLE UTILITY
          </span>
        </div>
      </div>

      {/* 4×4 Pad Grid */}
      <div className="flex-1 overflow-auto p-0.5">
        {Array.from({ length: 4 }, (_, row) => (
          <div key={row} className="flex gap-0.5 mb-0.5">
            {Array.from({ length: 4 }, (_, col) => {
              const padIndex = row * 4 + col;
              const pad = DEMO_PADS[padIndex];
              const isSelected = padIndex === selectedIndex;
              const color = ZONE_COLOR_MAP[(padIndex % 8) + 1] ?? DISPLAY_COLORS.active;

              return (
                <motion.div
                  key={col}
                  className="flex-1 flex flex-col rounded"
                  style={{
                    minHeight: 28,
                    padding: '1px 2px',
                    backgroundColor: `${color}10`,
                    border: isSelected
                      ? `2px solid ${DISPLAY_COLORS.active}`
                      : `1px solid ${color}30`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: padIndex * 0.015 }}
                >
                  {/* Pad number + indicators */}
                  <div className="flex items-center gap-px">
                    <span
                      className="text-[7px] font-bold"
                      style={{ color }}
                    >
                      {padIndex + 1}
                    </span>
                    <span className="text-[5px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                      GATE
                    </span>
                    <span className="text-[5px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                      LOOP
                    </span>
                    <span className="text-[5px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                      FX SW
                    </span>
                  </div>
                  {/* Sample name */}
                  {pad && (
                    <>
                      <span
                        className="text-[6px] truncate"
                        style={{
                          color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                        }}
                      >
                        {pad.name}
                      </span>
                      {/* Format + size */}
                      <div className="flex items-center justify-between">
                        <span className="text-[5px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                          {pad.format}
                        </span>
                        <span className="text-[5px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                          {pad.size}
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer buttons */}
      <div
        className="flex items-center justify-center gap-2 px-1.5 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {['WAVE EDIT', 'QUICK EDIT', 'IMPORT'].map((btn) => (
          <span
            key={btn}
            className="text-[8px] px-1.5 py-px rounded"
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
  );
}
