'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * GROUP screen — Split layout with GROUP LIST + GROUP Info grid (manual p.132-134).
 *
 * Layout:
 * - Left: GROUP LIST table (Num, Name, Length, colored play icon)
 * - Right: GROUP Info — colored track×pattern mini-grid showing data presence
 * - Bottom: PATTERN | [cursor] | UTILITY | RENAME | LENGTH | MAKE SONG
 */

/** Demo group data */
const DEMO_GROUPS = [
  { num: '01', name: 'Intro', length: 32 },
  { num: '02', name: 'Verse A', length: 24 },
  { num: '03', name: 'Verse B', length: 32 },
  { num: '04', name: 'Verse C', length: 32 },
  { num: '05', name: 'Chorus A', length: 16 },
  { num: '06', name: 'Chorus B', length: 16 },
  { num: '07', name: 'Ending', length: 8 },
  { num: '08', name: 'INIT GRP', length: 0 },
];

const TRACK_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

interface GroupScreenProps {
  selectedIndex?: number;
}

export default function GroupScreen({
  selectedIndex = 0,
}: GroupScreenProps) {
  const selectedGroup = DEMO_GROUPS[selectedIndex] ?? DEMO_GROUPS[0];

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Main: split layout */}
      <div className="flex flex-1 min-h-0">
        {/* Left: GROUP LIST */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{
            width: '45%',
            borderRight: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          <div
            className="px-1.5 py-[2px] flex-shrink-0"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}15`,
            }}
          >
            <span className="text-[9px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
              GROUP LIST
            </span>
          </div>
          <div className="flex-1 overflow-auto">
            {DEMO_GROUPS.map((group, i) => {
              const isSelected = i === selectedIndex;
              const color = ZONE_COLOR_MAP[(i % 8) + 1] ?? DISPLAY_COLORS.active;
              const isEmpty = group.length === 0;
              return (
                <motion.div
                  key={group.num}
                  className="flex items-center gap-1 px-1.5 py-[2px]"
                  style={{
                    backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                    borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
                    borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
                  }}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1, delay: i * 0.02 }}
                >
                  <span className="text-[8px] w-5" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                    {group.num}
                  </span>
                  <span
                    className="text-[9px] flex-1 truncate"
                    style={{
                      color: isEmpty ? DISPLAY_COLORS.zoneMuted : (isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text),
                    }}
                  >
                    {group.name}
                  </span>
                  <span className="text-[8px] w-6 text-right" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                    {isEmpty ? '---' : group.length}
                  </span>
                  {/* Play icon */}
                  {!isEmpty && (
                    <div
                      className="w-2 h-2 rounded-sm"
                      style={{ backgroundColor: `${color}60` }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: GROUP Info — mini track×variation grid */}
        <div className="flex flex-col flex-1 min-w-0">
          <div
            className="px-1.5 py-[2px] flex-shrink-0"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}15`,
            }}
          >
            <span className="text-[9px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
              {selectedGroup.num}: {selectedGroup.name}
            </span>
          </div>
          <div className="flex-1 overflow-auto p-1">
            {/* Mini grid showing track data presence */}
            {TRACK_LABELS.map((track, ti) => {
              const color = ZONE_COLOR_MAP[ti + 1] ?? DISPLAY_COLORS.active;
              return (
                <div key={track} className="flex items-center gap-0.5 mb-0.5">
                  <span
                    className="text-[7px] w-3 flex-shrink-0"
                    style={{ color }}
                  >
                    {track}
                  </span>
                  {/* 16 mini cells representing variation data */}
                  {Array.from({ length: 16 }, (_, ci) => {
                    const hasData = selectedGroup.length > 0 && ci < 4 && ti < 5;
                    return (
                      <div
                        key={ci}
                        className="flex-1 h-1.5 rounded-sm"
                        style={{
                          backgroundColor: hasData ? `${color}50` : `${DISPLAY_COLORS.border}20`,
                        }}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
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
          {['PATTERN', 'UTILITY', 'RENAME'].map((btn) => (
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
          {['LENGTH', 'MAKE SONG'].map((btn) => (
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
