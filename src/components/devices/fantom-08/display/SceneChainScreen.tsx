'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * SCENE CHAIN screen — Sequential scene playback editor (manual p.76-77).
 *
 * Layout:
 * - Top: Chain set name + UTILITY/EDIT buttons
 * - Middle-top: Horizontal row of scene boxes (scrollable)
 * - Middle: Selected scene preview (name)
 * - Bottom: Edit actions (Select Scene, Delete, Copy, Cut, Paste, Insert, Swap)
 * - Footer: MARKER label, RENAME, WRITE
 */

/** Demo chain data */
const DEMO_CHAIN = [
  { id: 'A011', label: 'A', num: '011' },
  { id: 'A003', label: 'A', num: '003' },
  { id: 'A043', label: 'A', num: '043' },
  { id: 'A070', label: 'A', num: '070' },
  { id: 'A023', label: 'A', num: '023' },
  { id: 'A005', label: 'A', num: '005' },
  { id: 'A008', label: 'A', num: '008' },
  { id: 'B041', label: 'B', num: '041' },
  { id: 'A007', label: 'A', num: '007' },
  { id: 'A014', label: 'A', num: '014' },
  { id: 'A033', label: 'A', num: '033' },
  { id: 'A065', label: 'A', num: '065' },
  { id: 'A010', label: 'A', num: '010' },
];

interface SceneChainScreenProps {
  selectedIndex?: number;
}

export default function SceneChainScreen({
  selectedIndex = 0,
}: SceneChainScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Header: chain set name + buttons */}
      <div
        className="flex items-center justify-between px-1.5 py-[2px] flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            CHAIN SET
          </span>
          <span className="text-[8px] font-bold" style={{ color: DISPLAY_COLORS.text }}>
            001:My Chain 1
          </span>
        </div>
        <div className="flex gap-1">
          <span
            className="text-[7px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.highlight,
              border: `1px solid ${DISPLAY_COLORS.highlight}40`,
            }}
          >
            RENAME
          </span>
          <span
            className="text-[7px] px-1 py-px rounded font-bold"
            style={{
              color: DISPLAY_COLORS.warning,
              border: `1px solid ${DISPLAY_COLORS.warning}40`,
            }}
          >
            WRITE
          </span>
        </div>
      </div>

      {/* Scene box timeline */}
      <div
        className="flex items-center gap-0.5 px-1 py-1.5 overflow-auto flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
        }}
      >
        {DEMO_CHAIN.map((scene, i) => {
          const isSelected = i === selectedIndex;
          const color = ZONE_COLOR_MAP[(i % 8) + 1] ?? DISPLAY_COLORS.active;
          return (
            <motion.div
              key={`${scene.id}-${i}`}
              className="flex flex-col items-center justify-center rounded"
              style={{
                minWidth: 24,
                minHeight: 22,
                padding: '1px 2px',
                backgroundColor: `${color}25`,
                border: isSelected
                  ? `2px solid ${DISPLAY_COLORS.active}`
                  : `1px solid ${color}40`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.08, delay: i * 0.02 }}
            >
              <span
                className="text-[7px] font-bold"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : color,
                }}
              >
                {scene.label}
              </span>
              <span className="text-[6px]" style={{ color: DISPLAY_COLORS.text }}>
                {scene.num}
              </span>
            </motion.div>
          );
        })}
        {/* "Next" placeholder */}
        <div
          className="flex items-center justify-center rounded"
          style={{
            minWidth: 24,
            minHeight: 22,
            border: `1px dashed ${DISPLAY_COLORS.border}40`,
          }}
        >
          <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            Next
          </span>
        </div>
      </div>

      {/* Selected scene preview */}
      <div className="flex-1 flex flex-col px-2 py-1 min-h-0">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            Page 1/32
          </span>
        </div>
        <span
          className="text-[10px] font-bold"
          style={{ color: DISPLAY_COLORS.highlight }}
        >
          {selectedIndex < DEMO_CHAIN.length
            ? `A${DEMO_CHAIN[selectedIndex].num}:Jazz Cafe`
            : '---'}
        </span>

        {/* Edit action buttons */}
        <div className="flex flex-wrap gap-1 mt-1.5">
          {['Select Scene', 'Delete', 'Copy', 'Cut', 'Paste', 'Insert'].map((btn) => (
            <span
              key={btn}
              className="text-[7px] px-1.5 py-px rounded"
              style={{
                color: DISPLAY_COLORS.zoneMuted,
                border: `1px solid ${DISPLAY_COLORS.border}40`,
              }}
            >
              {btn}
            </span>
          ))}
        </div>
        <div className="mt-1">
          <span
            className="text-[7px] px-1.5 py-px rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              border: `1px solid ${DISPLAY_COLORS.border}40`,
            }}
          >
            Swap
          </span>
        </div>
      </div>

      {/* Footer: MARKER */}
      <div
        className="flex items-center px-2 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          MARKER
        </span>
      </div>
    </div>
  );
}
