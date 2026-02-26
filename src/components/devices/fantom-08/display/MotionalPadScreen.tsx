'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * MOTIONAL PAD screen — 2D XY pad for zone volume control (manual p.50-51).
 *
 * Layout:
 * - Four corners: ZONE badges with zone number + tone name
 * - Center: Circular pointer (draggable in real hardware)
 * - Left: EDIT, MOTIONAL PAD buttons
 * - Right: AUTO, HOLD buttons
 * - The pointer position controls volume balance of 4 zones
 */

const DEMO_ZONES = [
  { zone: 1, tone: 'Syn Bass 1', position: 'top-left' },
  { zone: 2, tone: 'Tone Bass 2 Atk3', position: 'top-right' },
  { zone: 3, tone: 'JP Brass1', position: 'bottom-left' },
  { zone: 4, tone: 'JUNO Str Flm', position: 'bottom-right' },
];

interface MotionalPadScreenProps {
  selectedIndex?: number;
}

export default function MotionalPadScreen({
  selectedIndex = 0,
}: MotionalPadScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono relative">
      {/* Main XY pad area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Gradient background for the pad */}
        <div
          className="absolute inset-2 rounded"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${DISPLAY_COLORS.active}15 0%, ${DISPLAY_COLORS.border}10 70%)`,
            border: `1px solid ${DISPLAY_COLORS.border}30`,
          }}
        />

        {/* Cross-hair lines */}
        <div
          className="absolute left-1/2 top-2 bottom-2"
          style={{ width: 1, backgroundColor: `${DISPLAY_COLORS.border}25` }}
        />
        <div
          className="absolute top-1/2 left-2 right-2"
          style={{ height: 1, backgroundColor: `${DISPLAY_COLORS.border}25` }}
        />

        {/* Zone corner badges */}
        {DEMO_ZONES.map((z, i) => {
          const color = ZONE_COLOR_MAP[z.zone] ?? DISPLAY_COLORS.active;
          const isTop = z.position.includes('top');
          const isLeft = z.position.includes('left');
          const isSelected = i === selectedIndex;

          return (
            <motion.div
              key={z.zone}
              className="absolute flex flex-col rounded"
              style={{
                [isTop ? 'top' : 'bottom']: 8,
                [isLeft ? 'left' : 'right']: 8,
                padding: '2px 4px',
                backgroundColor: `${color}20`,
                border: isSelected
                  ? `1px solid ${DISPLAY_COLORS.active}`
                  : `1px solid ${color}40`,
                minWidth: 50,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: i * 0.05 }}
            >
              <span className="text-[7px] font-bold" style={{ color }}>
                ZONE {z.zone}
              </span>
              <span
                className="text-[6px] truncate"
                style={{ color: DISPLAY_COLORS.text, maxWidth: 55 }}
              >
                {z.tone}
              </span>
            </motion.div>
          );
        })}

        {/* Center pointer circle */}
        <motion.div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: 14,
            height: 14,
            transform: 'translate(-50%, -50%)',
            backgroundColor: `${DISPLAY_COLORS.active}40`,
            border: `2px solid ${DISPLAY_COLORS.active}`,
            boxShadow: `0 0 8px ${DISPLAY_COLORS.active}40`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        />

        {/* Side buttons: EDIT + MOTIONAL PAD (left) */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <span
            className="text-[6px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              border: `1px solid ${DISPLAY_COLORS.border}30`,
            }}
          >
            EDIT
          </span>
          <span
            className="text-[6px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.active,
              border: `1px solid ${DISPLAY_COLORS.active}30`,
            }}
          >
            MOTIONAL PAD
          </span>
        </div>

        {/* Side buttons: AUTO + HOLD (right) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <span
            className="text-[6px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              border: `1px solid ${DISPLAY_COLORS.border}30`,
            }}
          >
            AUTO
          </span>
          <span
            className="text-[6px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              border: `1px solid ${DISPLAY_COLORS.border}30`,
            }}
          >
            HOLD
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-end px-2 py-0.5 flex-shrink-0"
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
