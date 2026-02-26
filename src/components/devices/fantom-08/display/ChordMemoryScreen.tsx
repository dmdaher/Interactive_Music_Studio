'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * CHORD MEMORY screen — Chord memory settings (manual p.43).
 *
 * Layout:
 * - Top: CHORD FORM selector ("01:Pop 1")
 * - Middle: Parameters (Chord Memory Key, Rolled Chord Sw, Rolled Chord Type)
 * - Bottom: EXIT (E6)
 */

const CHORD_PARAMS = [
  { label: 'Chord Memory Key', value: 'C' },
  { label: 'Rolled Chord Sw', value: 'ON' },
  { label: 'Rolled Chord Type', value: 'UP' },
];

interface ChordMemoryScreenProps {
  selectedIndex?: number;
}

export default function ChordMemoryScreen({
  selectedIndex = 0,
}: ChordMemoryScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Chord form selector */}
      <div
        className="px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
        }}
      >
        <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          CHORD FORM
        </span>
        <div
          className="mt-0.5 px-1.5 py-[3px] rounded"
          style={{
            backgroundColor: `${DISPLAY_COLORS.active}20`,
            border: `1px solid ${DISPLAY_COLORS.active}40`,
          }}
        >
          <span className="text-[9px] font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
            01:Pop 1
          </span>
        </div>
      </div>

      {/* Parameter list */}
      <div className="flex-1 overflow-auto">
        {CHORD_PARAMS.map((param, index) => {
          const isSelected = index === selectedIndex;
          return (
            <motion.div
              key={param.label}
              className="flex items-center justify-between px-2 py-[4px]"
              style={{
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                borderLeft: isSelected
                  ? `2px solid ${DISPLAY_COLORS.active}`
                  : '2px solid transparent',
                borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
              }}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: index * 0.04 }}
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

      {/* Footer: EXIT */}
      <div
        className="flex items-center justify-end px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[8px] px-1.5 py-0.5 rounded"
          style={{
            color: DISPLAY_COLORS.header,
            border: `1px solid ${DISPLAY_COLORS.header}40`,
          }}
        >
          EXIT
        </span>
      </div>
    </div>
  );
}
