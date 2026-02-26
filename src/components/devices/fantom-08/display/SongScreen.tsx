'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * SONG screen — 4×8 grid of numbered group boxes (manual p.135-138).
 *
 * Layout:
 * - Main: 4 rows × 8 columns of group boxes (32 slots total)
 * - Each box shows: position number, repeat count (x1/x2), group name
 * - Selected box has red frame, skipped boxes are grayed out
 * - Bottom: MAKE SONG | EDIT | SKIP | MEAS | EXPORT
 */

/** Demo song data — first 12 slots filled */
const DEMO_SONG_SLOTS: { groupNum: string; name: string; repeats: number; skipped?: boolean }[] = [
  { groupNum: '01', name: 'Intro', repeats: 1 },
  { groupNum: '02', name: 'Verse A', repeats: 1 },
  { groupNum: '02', name: 'Verse A', repeats: 1 },
  { groupNum: '03', name: 'Verse B', repeats: 1 },
  { groupNum: '05', name: 'Chorus A', repeats: 2 },
  { groupNum: '02', name: 'Verse A', repeats: 1 },
  { groupNum: '04', name: 'Verse C', repeats: 1 },
  { groupNum: '05', name: 'Chorus A', repeats: 2 },
  { groupNum: '06', name: 'Chorus B', repeats: 1 },
  { groupNum: '02', name: 'Verse A', repeats: 1 },
  { groupNum: '05', name: 'Chorus A', repeats: 1 },
  { groupNum: '07', name: 'Ending', repeats: 1 },
];

const COLS = 8;
const ROWS = 4;

interface SongScreenProps {
  selectedIndex?: number;
}

export default function SongScreen({
  selectedIndex = 0,
}: SongScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Grid: 4×8 */}
      <div className="flex-1 overflow-auto p-1">
        {Array.from({ length: ROWS }, (_, row) => (
          <div key={row} className="flex gap-0.5 mb-0.5">
            {Array.from({ length: COLS }, (_, col) => {
              const slotIndex = row * COLS + col;
              const slot = DEMO_SONG_SLOTS[slotIndex];
              const isSelected = slotIndex === selectedIndex;
              const isEmpty = !slot;
              const color = slot
                ? ZONE_COLOR_MAP[((parseInt(slot.groupNum, 10) - 1) % 8) + 1] ?? DISPLAY_COLORS.active
                : DISPLAY_COLORS.border;

              return (
                <motion.div
                  key={col}
                  className="flex-1 flex flex-col items-center justify-center rounded"
                  style={{
                    minHeight: 28,
                    backgroundColor: isEmpty
                      ? `${DISPLAY_COLORS.border}15`
                      : slot.skipped
                        ? `${DISPLAY_COLORS.border}20`
                        : `${color}20`,
                    border: isSelected
                      ? `2px solid ${DISPLAY_COLORS.mute}`
                      : `1px solid ${isEmpty ? DISPLAY_COLORS.border + '30' : color + '40'}`,
                    opacity: slot?.skipped ? 0.4 : 1,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: slot?.skipped ? 0.4 : 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: slotIndex * 0.015 }}
                >
                  {/* Position number */}
                  <span
                    className="text-[7px]"
                    style={{ color: DISPLAY_COLORS.zoneMuted }}
                  >
                    {slotIndex + 1}
                  </span>
                  {slot ? (
                    <>
                      {/* Group number + repeats */}
                      <div className="flex items-center gap-px">
                        <span
                          className="text-[8px] font-bold"
                          style={{
                            color: isSelected ? DISPLAY_COLORS.highlight : color,
                          }}
                        >
                          {slot.groupNum}
                        </span>
                        {slot.repeats > 1 && (
                          <span className="text-[6px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                            x{slot.repeats}
                          </span>
                        )}
                      </div>
                      {/* Group name */}
                      <span
                        className="text-[6px] truncate max-w-full px-0.5"
                        style={{ color: DISPLAY_COLORS.text }}
                      >
                        {slot.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-[7px]" style={{ color: DISPLAY_COLORS.border }}>
                      ---
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer buttons */}
      <div
        className="flex items-center justify-between px-1.5 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-1.5">
          {['MAKE SONG', 'EDIT'].map((btn) => (
            <span
              key={btn}
              className="text-[8px] px-1 py-px rounded"
              style={{
                color: DISPLAY_COLORS.zoneMuted,
                border: `1px solid ${DISPLAY_COLORS.border}40`,
              }}
            >
              {btn}
            </span>
          ))}
        </div>
        <div className="flex gap-1.5">
          {['SKIP', 'MEAS', 'EXPORT'].map((btn) => (
            <span
              key={btn}
              className="text-[8px] px-1 py-px rounded"
              style={{
                color: DISPLAY_COLORS.header,
                border: `1px solid ${DISPLAY_COLORS.header}40`,
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
