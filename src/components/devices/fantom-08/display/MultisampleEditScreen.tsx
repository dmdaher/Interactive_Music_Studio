'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * MULTISAMPLE EDIT screen — Keyboard area editor (manual p.86).
 *
 * Layout:
 * - Top: Current note info, Multisample name, edit status indicator
 * - Middle-top: Colored area bars showing sample assignments across keyboard range
 * - Middle: Keyboard display area (128-note piano miniature)
 * - Middle-bottom: Area list table (key range, sample name, level)
 * - Bottom: waveform icons, To PRO button
 */

/** Demo multisample areas */
const DEMO_AREAS = [
  { range: 'C-1 → A#(A 3)', sample: '0001: A_Syn4_E3', level: 5, color: 1 },
  { range: 'B(B 3) → B(B 3)', sample: '0001: A_Syn4_D5', level: 3, color: 2 },
  { range: 'C(C 4) → E(E 5)', sample: '0001: A_Syn4_C3', level: 4, color: 3 },
  { range: 'F(F 5) → G 9', sample: '0002: A_Syn4_F1', level: 6, color: 4 },
];

interface MultisampleEditScreenProps {
  selectedIndex?: number;
  activeTab?: string;
}

export default function MultisampleEditScreen({
  selectedIndex = 0,
}: MultisampleEditScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top: multisample info */}
      <div
        className="flex items-center justify-between px-1.5 py-[2px] flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            MULTI SAMPLE EDIT
          </span>
          <span
            className="text-[8px] px-1 py-px rounded font-bold"
            style={{
              color: DISPLAY_COLORS.active,
              backgroundColor: `${DISPLAY_COLORS.active}15`,
            }}
          >
            A_Syn4_C3
          </span>
        </div>
        <div className="flex gap-0.5">
          {['WRITE', 'MANAGER', 'UTILITY'].map((tab) => (
            <span
              key={tab}
              className="text-[7px] px-1 py-px rounded"
              style={{
                color: DISPLAY_COLORS.zoneMuted,
                border: `1px solid ${DISPLAY_COLORS.border}30`,
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Keyboard area bars — colored blocks representing sample zones */}
      <div
        className="flex items-center px-1 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
          height: 16,
        }}
      >
        {DEMO_AREAS.map((area, i) => {
          const color = ZONE_COLOR_MAP[area.color] ?? DISPLAY_COLORS.active;
          const widthPercent = i === 0 ? 35 : i === 2 ? 30 : i === 3 ? 20 : 15;
          return (
            <motion.div
              key={i}
              className="h-2 rounded-sm mx-px"
              style={{
                width: `${widthPercent}%`,
                backgroundColor: `${color}60`,
                border: i === selectedIndex ? `1px solid ${DISPLAY_COLORS.active}` : 'none',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.15, delay: i * 0.05 }}
            />
          );
        })}
      </div>

      {/* Mini keyboard display */}
      <div
        className="flex items-end px-1 flex-shrink-0"
        style={{
          height: 14,
          borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
        }}
      >
        {Array.from({ length: 52 }, (_, i) => {
          const noteInOctave = i % 12;
          const isBlack = [1, 3, 6, 8, 10].includes(noteInOctave);
          return (
            <div
              key={i}
              className="flex-1"
              style={{
                height: isBlack ? 8 : 12,
                backgroundColor: isBlack ? `${DISPLAY_COLORS.border}80` : `${DISPLAY_COLORS.text}30`,
                borderRight: `1px solid ${DISPLAY_COLORS.border}20`,
                marginTop: isBlack ? 4 : 0,
              }}
            />
          );
        })}
      </div>

      {/* Area list */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div
          className="flex items-center px-1.5 py-[1px]"
          style={{
            borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
            backgroundColor: `${DISPLAY_COLORS.border}10`,
          }}
        >
          <span className="text-[7px] flex-1" style={{ color: DISPLAY_COLORS.header }}>
            Range
          </span>
          <span className="text-[7px] flex-1" style={{ color: DISPLAY_COLORS.header }}>
            Sample
          </span>
          <span className="text-[7px] w-8 text-right" style={{ color: DISPLAY_COLORS.header }}>
            Level
          </span>
        </div>
        {/* Rows */}
        {DEMO_AREAS.map((area, index) => {
          const isSelected = index === selectedIndex;
          const color = ZONE_COLOR_MAP[area.color] ?? DISPLAY_COLORS.active;
          return (
            <motion.div
              key={index}
              className="flex items-center px-1.5 py-[2px]"
              style={{
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                borderLeft: isSelected ? `2px solid ${color}` : `2px solid transparent`,
                borderBottom: `1px solid ${DISPLAY_COLORS.border}10`,
              }}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: index * 0.03 }}
            >
              <span
                className="text-[8px] flex-1"
                style={{ color: DISPLAY_COLORS.text }}
              >
                {area.range}
              </span>
              <span
                className="text-[8px] flex-1"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {area.sample}
              </span>
              <span
                className="text-[8px] w-8 text-right"
                style={{ color: DISPLAY_COLORS.zoneMuted }}
              >
                {area.level}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-1.5 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-1">
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E1:Zoom
          </span>
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E2:Pro/Zoom
          </span>
        </div>
        <span
          className="text-[8px] px-1.5 py-px rounded"
          style={{
            color: DISPLAY_COLORS.header,
            border: `1px solid ${DISPLAY_COLORS.header}40`,
          }}
        >
          To PRO
        </span>
      </div>
    </div>
  );
}
