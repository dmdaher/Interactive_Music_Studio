'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * ARPEGGIO screen — Arpeggiator settings (manual p.40-42).
 *
 * Layout:
 * - Top: STYLE selector bar ("P001: NOTE VALUES")
 * - Middle: Parameter list (Hold, Variation, Motif, Keyboard Velocity,
 *   Octave Range, Accent Rate, Shuffle Rate, Shuffle Resolution)
 * - Bottom: HOLD (E1), EXIT (E6)
 */

const ARP_PARAMS = [
  { label: 'Hold', value: 'OFF' },
  { label: 'Variation', value: '4' },
  { label: 'Motif', value: 'UP' },
  { label: 'Keyboard Velocity', value: 'REAL' },
  { label: 'Octave Range', value: '0' },
  { label: 'Accent Rate', value: '100%' },
  { label: 'Shuffle Rate', value: '50%' },
  { label: 'Shuffle Resolution', value: '16TH' },
];

interface ArpeggioScreenProps {
  selectedIndex?: number;
}

export default function ArpeggioScreen({
  selectedIndex = 0,
}: ArpeggioScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Style selector */}
      <div
        className="px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
        }}
      >
        <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          STYLE
        </span>
        <div
          className="mt-0.5 px-1.5 py-[3px] rounded"
          style={{
            backgroundColor: `${DISPLAY_COLORS.active}20`,
            border: `1px solid ${DISPLAY_COLORS.active}40`,
          }}
        >
          <span className="text-[9px] font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
            P001: NOTE VALUES
          </span>
        </div>
      </div>

      {/* Parameter list */}
      <div className="flex-1 overflow-auto">
        {ARP_PARAMS.map((param, index) => {
          const isSelected = index === selectedIndex;
          return (
            <motion.div
              key={param.label}
              className="flex items-center justify-between px-2 py-[3px]"
              style={{
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                borderLeft: isSelected
                  ? `2px solid ${DISPLAY_COLORS.active}`
                  : '2px solid transparent',
                borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
              }}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: index * 0.03 }}
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

      {/* Footer: HOLD + EXIT */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[8px] px-1.5 py-0.5 rounded"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            border: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          HOLD
        </span>
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
