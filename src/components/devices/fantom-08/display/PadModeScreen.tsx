'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * PAD MODE screen — 4×4 pad mode selector (manual p.104).
 *
 * Layout:
 * - Header: "PAD MODE" title, "Press the pads to select." instruction
 * - Main: 4×4 grid of mode options, each with icon/label and pad number
 * - Bottom: EDIT | CLOSE buttons
 *
 * Modes (mapped to pads 1-16):
 * 1=Sample Pad, 2=Note Pad, 3=Partial Sw/Sel, 4=DAW Control,
 * 5=Zone Mute, 6=Zone Solo, 7=Kbd Sw Group, 8=Rhythm Pattern,
 * 9=Pattern, 10=Variation Play, 11=Group Play, 16=System
 */

const PAD_MODES = [
  { pad: 1, label: 'Sample Pad', color: DISPLAY_COLORS.mute },
  { pad: 2, label: 'Note Pad', color: DISPLAY_COLORS.active },
  { pad: 3, label: 'Partial Sw/Sel', color: DISPLAY_COLORS.highlight },
  { pad: 4, label: 'DAW Control', color: DISPLAY_COLORS.warning },
  { pad: 5, label: 'Zone Mute', color: DISPLAY_COLORS.mute },
  { pad: 6, label: 'Zone Solo', color: DISPLAY_COLORS.active },
  { pad: 7, label: 'Kbd Sw Group', color: DISPLAY_COLORS.highlight },
  { pad: 8, label: 'Rhythm Pattern', color: DISPLAY_COLORS.warning },
  { pad: 9, label: 'Pattern', color: DISPLAY_COLORS.mute },
  { pad: 10, label: 'Variation Play', color: DISPLAY_COLORS.active },
  { pad: 11, label: 'Group Play', color: DISPLAY_COLORS.highlight },
  { pad: 12, label: '', color: DISPLAY_COLORS.border },   // empty
  { pad: 13, label: '', color: DISPLAY_COLORS.border },   // empty
  { pad: 14, label: '', color: DISPLAY_COLORS.border },   // empty
  { pad: 15, label: '', color: DISPLAY_COLORS.border },   // empty
  { pad: 16, label: 'System', color: DISPLAY_COLORS.header },
];

interface PadModeScreenProps {
  selectedIndex?: number;
}

export default function PadModeScreen({
  selectedIndex = 0,
}: PadModeScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Header */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span className="text-[9px]" style={{ color: DISPLAY_COLORS.text }}>
          Press the pads to select.
        </span>
        <span
          className="text-[8px] px-1 py-px rounded"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            border: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          ✕
        </span>
      </div>

      {/* 4×4 Mode Grid */}
      <div className="flex-1 overflow-auto p-1">
        {Array.from({ length: 4 }, (_, row) => (
          <div key={row} className="flex gap-1 mb-1">
            {Array.from({ length: 4 }, (_, col) => {
              const modeIndex = row * 4 + col;
              const mode = PAD_MODES[modeIndex];
              const isSelected = modeIndex === selectedIndex;
              const isEmpty = !mode.label;
              const zoneColor = ZONE_COLOR_MAP[(modeIndex % 8) + 1] ?? DISPLAY_COLORS.active;

              return (
                <motion.div
                  key={col}
                  className="flex-1 flex flex-col items-center justify-center rounded"
                  style={{
                    minHeight: 28,
                    backgroundColor: isEmpty
                      ? `${DISPLAY_COLORS.border}10`
                      : `${zoneColor}15`,
                    border: isSelected
                      ? `2px solid ${DISPLAY_COLORS.active}`
                      : `1px solid ${isEmpty ? DISPLAY_COLORS.border + '20' : zoneColor + '30'}`,
                    opacity: isEmpty ? 0.3 : 1,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isEmpty ? 0.3 : 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: modeIndex * 0.02 }}
                >
                  <span
                    className="text-[8px] font-bold text-center px-0.5"
                    style={{
                      color: isSelected ? DISPLAY_COLORS.highlight : mode.color,
                    }}
                  >
                    {mode.label || '---'}
                  </span>
                  <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                    {mode.pad}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[8px] px-1.5 py-px rounded"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            border: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          EDIT
        </span>
        <span
          className="text-[8px] px-1.5 py-px rounded"
          style={{
            color: DISPLAY_COLORS.header,
            border: `1px solid ${DISPLAY_COLORS.header}40`,
          }}
        >
          CLOSE
        </span>
      </div>
    </div>
  );
}
