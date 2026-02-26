'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * MICROSCOPE screen — Performance data list editor (manual p.126).
 *
 * Layout:
 * - Left: Mini piano roll overview (compressed)
 * - Right: Event list table with columns (Meas:Beat:Tick, Message, Value1, Value2)
 * - Bottom: CREATE | ERASE | MOVE | COPY | PASTE | VIEW
 */

/** Demo event data */
const DEMO_EVENTS = [
  { pos: '001:01:000', type: 'Note', msg: 'C4', val1: '100', val2: '480' },
  { pos: '001:02:000', type: 'Note', msg: 'E4', val1: '90', val2: '240' },
  { pos: '001:02:240', type: 'Note', msg: 'G4', val1: '85', val2: '240' },
  { pos: '001:03:000', type: 'Note', msg: 'C5', val1: '110', val2: '960' },
  { pos: '002:01:000', type: 'Note', msg: 'A4', val1: '95', val2: '480' },
  { pos: '002:02:000', type: 'CC', msg: 'CC#1', val1: '64', val2: '---' },
  { pos: '002:03:000', type: 'Note', msg: 'F4', val1: '80', val2: '240' },
  { pos: '003:01:000', type: 'Note', msg: 'D4', val1: '100', val2: '480' },
  { pos: '003:02:000', type: 'PBnd', msg: 'Bend', val1: '+24', val2: '---' },
  { pos: '003:03:000', type: 'Note', msg: 'G4', val1: '105', val2: '960' },
];

const FOOTER_BUTTONS = ['CREATE', 'ERASE', 'MOVE', 'COPY', 'PASTE', 'VIEW'];

interface MicroscopeScreenProps {
  selectedIndex?: number;
}

export default function MicroscopeScreen({
  selectedIndex = 0,
}: MicroscopeScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Main: split view */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Mini piano roll overview */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{
            width: '30%',
            borderRight: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          <div
            className="px-1 py-[2px] flex-shrink-0"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}15`,
            }}
          >
            <span className="text-[8px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
              OVERVIEW
            </span>
          </div>
          <div className="flex-1 relative overflow-hidden p-0.5">
            {/* Simplified piano roll mini-view */}
            {[0, 1, 2, 3].map((measure) => (
              <div
                key={measure}
                className="absolute"
                style={{
                  left: `${measure * 25}%`,
                  width: '25%',
                  top: 0,
                  bottom: 0,
                  borderLeft: `1px solid ${DISPLAY_COLORS.border}30`,
                }}
              >
                <span
                  className="absolute top-0 left-0.5 text-[6px]"
                  style={{ color: DISPLAY_COLORS.border }}
                >
                  {measure + 1}
                </span>
              </div>
            ))}
            {/* Mini note dots */}
            {DEMO_EVENTS.filter((e) => e.type === 'Note').map((event, i) => {
              const measure = parseInt(event.pos.split(':')[0], 10);
              const beat = parseInt(event.pos.split(':')[1], 10);
              const x = ((measure - 1) * 25) + (beat - 1) * 6 + 3;
              // Map note name to rough Y position
              const noteMap: Record<string, number> = { 'C5': 15, 'G4': 30, 'F4': 40, 'E4': 45, 'D4': 50, 'C4': 55, 'A4': 35 };
              const y = noteMap[event.msg] ?? 40;
              return (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute rounded-full"
                  style={{
                    left: `${Math.min(x, 95)}%`,
                    top: `${y}%`,
                    width: 3,
                    height: 3,
                    backgroundColor: DISPLAY_COLORS.active,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1, delay: i * 0.03 }}
                />
              );
            })}
          </div>
        </div>

        {/* Right: Event list table */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Table header */}
          <div
            className="flex items-center px-1 py-[2px] flex-shrink-0"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}15`,
            }}
          >
            <span className="text-[7px] font-bold flex-shrink-0" style={{ color: DISPLAY_COLORS.header, width: 62 }}>
              Meas:Bt:Tick
            </span>
            <span className="text-[7px] font-bold flex-shrink-0" style={{ color: DISPLAY_COLORS.header, width: 24 }}>
              Type
            </span>
            <span className="text-[7px] font-bold flex-1" style={{ color: DISPLAY_COLORS.header }}>
              Msg
            </span>
            <span className="text-[7px] font-bold flex-shrink-0 text-right" style={{ color: DISPLAY_COLORS.header, width: 24 }}>
              Val
            </span>
            <span className="text-[7px] font-bold flex-shrink-0 text-right" style={{ color: DISPLAY_COLORS.header, width: 24 }}>
              Dur
            </span>
          </div>

          {/* Event rows */}
          <div className="flex-1 overflow-auto">
            {DEMO_EVENTS.map((event, index) => {
              const isSelected = index === selectedIndex;
              return (
                <motion.div
                  key={`${event.pos}-${index}`}
                  className="flex items-center px-1 py-[2px]"
                  style={{
                    backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                    borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
                    borderBottom: `1px solid ${DISPLAY_COLORS.border}10`,
                  }}
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.02 }}
                >
                  <span
                    className="text-[8px] flex-shrink-0"
                    style={{ color: DISPLAY_COLORS.zoneMuted, width: 62 }}
                  >
                    {event.pos}
                  </span>
                  <span
                    className="text-[8px] flex-shrink-0"
                    style={{
                      color: event.type === 'Note'
                        ? DISPLAY_COLORS.active
                        : event.type === 'CC'
                          ? DISPLAY_COLORS.warning
                          : DISPLAY_COLORS.header,
                      width: 24,
                    }}
                  >
                    {event.type}
                  </span>
                  <span
                    className="text-[8px] flex-1"
                    style={{
                      color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                    }}
                  >
                    {event.msg}
                  </span>
                  <span
                    className="text-[8px] flex-shrink-0 text-right"
                    style={{ color: DISPLAY_COLORS.text, width: 24 }}
                  >
                    {event.val1}
                  </span>
                  <span
                    className="text-[8px] flex-shrink-0 text-right"
                    style={{ color: DISPLAY_COLORS.zoneMuted, width: 24 }}
                  >
                    {event.val2}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div
        className="flex items-center justify-center gap-1 px-1.5 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {FOOTER_BUTTONS.map((btn) => (
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
