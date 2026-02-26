'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * PIANO ROLL screen — Note editor (manual p.123-125).
 *
 * Layout:
 * - Top: Toolbar — DRAW | MOVE | DURATION | REDO | ERASE | COPY
 * - Left: Vertical pitch axis (piano keyboard strip)
 * - Center: Note grid with horizontal time divisions and note rectangles
 * - Bottom: Velocity lane + measure numbers
 *
 * This is a custom component — the vertical pitch axis makes it fundamentally
 * different from TimelineEditor (which has horizontal track rows).
 */

const TOOLBAR_BUTTONS = ['DRAW', 'MOVE', 'DUR', 'REDO', 'ERASE', 'COPY'];

/** Note names for the visible pitch range (2 octaves for demo) */
const VISIBLE_NOTES = ['C5', 'B4', 'A#4', 'A4', 'G#4', 'G4', 'F#4', 'F4', 'E4', 'D#4', 'D4', 'C#4', 'C4'];

/** Demo note events: [pitchIndex, startBeat, durationBeats, velocity] */
const DEMO_NOTES: [number, number, number, number][] = [
  [0, 0, 2, 100],   // C5 at beat 0, 2 beats
  [4, 2, 1, 80],    // G#4 at beat 2, 1 beat
  [6, 3, 2, 90],    // F#4 at beat 3, 2 beats
  [9, 6, 1, 70],    // D#4 at beat 6, 1 beat
  [12, 8, 4, 110],  // C4 at beat 8, 4 beats
  [0, 12, 2, 95],   // C5 at beat 12
  [6, 14, 2, 85],   // F#4 at beat 14
];

const TOTAL_BEATS = 16;
const BEAT_WIDTH_PERCENT = 100 / TOTAL_BEATS;

interface PianoRollScreenProps {
  selectedIndex?: number;
  currentMeasure?: number;
}

export default function PianoRollScreen({
  selectedIndex = 0,
  currentMeasure,
}: PianoRollScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Toolbar */}
      <div
        className="flex items-center gap-1 px-1.5 py-[2px] flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {TOOLBAR_BUTTONS.map((btn, i) => (
          <span
            key={btn}
            className="text-[8px] px-1.5 py-px rounded"
            style={{
              color: i === selectedIndex ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              backgroundColor: i === selectedIndex ? `${DISPLAY_COLORS.active}20` : 'transparent',
              border: `1px solid ${i === selectedIndex ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '30'}`,
            }}
          >
            {btn}
          </span>
        ))}
      </div>

      {/* Main area: keyboard + note grid */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Piano keyboard strip */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{
            width: 28,
            borderRight: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          {VISIBLE_NOTES.map((note) => {
            const isBlackKey = note.includes('#');
            return (
              <div
                key={note}
                className="flex-1 flex items-center justify-end pr-0.5"
                style={{
                  backgroundColor: isBlackKey ? `${DISPLAY_COLORS.border}30` : 'transparent',
                  borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
                  minHeight: 0,
                }}
              >
                <span
                  className="text-[6px]"
                  style={{
                    color: isBlackKey ? DISPLAY_COLORS.zoneMuted : DISPLAY_COLORS.text,
                  }}
                >
                  {note}
                </span>
              </div>
            );
          })}
        </div>

        {/* Center: Note grid */}
        <div className="flex-1 relative min-w-0 overflow-hidden">
          {/* Beat grid lines */}
          {Array.from({ length: TOTAL_BEATS }, (_, bi) => (
            <div
              key={`beat-${bi}`}
              className="absolute top-0 bottom-0"
              style={{
                left: `${bi * BEAT_WIDTH_PERCENT}%`,
                width: 1,
                backgroundColor: bi % 4 === 0
                  ? `${DISPLAY_COLORS.border}60`
                  : `${DISPLAY_COLORS.border}20`,
              }}
            />
          ))}

          {/* Pitch row backgrounds */}
          {VISIBLE_NOTES.map((note, ni) => {
            const isBlackKey = note.includes('#');
            return (
              <div
                key={`row-${ni}`}
                className="absolute left-0 right-0"
                style={{
                  top: `${(ni / VISIBLE_NOTES.length) * 100}%`,
                  height: `${100 / VISIBLE_NOTES.length}%`,
                  backgroundColor: isBlackKey ? `${DISPLAY_COLORS.border}08` : 'transparent',
                  borderBottom: `1px solid ${DISPLAY_COLORS.border}10`,
                }}
              />
            );
          })}

          {/* Playhead */}
          {currentMeasure != null && (
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${((currentMeasure - 1) * 4 * BEAT_WIDTH_PERCENT)}%`,
                backgroundColor: DISPLAY_COLORS.highlight,
                zIndex: 5,
              }}
            />
          )}

          {/* Note rectangles */}
          {DEMO_NOTES.map(([pitchIdx, startBeat, duration, velocity], ni) => {
            const color = ZONE_COLOR_MAP[(pitchIdx % 8) + 1] ?? DISPLAY_COLORS.active;
            const top = `${(pitchIdx / VISIBLE_NOTES.length) * 100}%`;
            const height = `${100 / VISIBLE_NOTES.length}%`;
            const left = `${startBeat * BEAT_WIDTH_PERCENT}%`;
            const width = `${duration * BEAT_WIDTH_PERCENT}%`;
            const opacity = 0.5 + (velocity / 127) * 0.5;

            return (
              <motion.div
                key={`note-${ni}`}
                className="absolute rounded-sm"
                style={{
                  top,
                  height,
                  left,
                  width,
                  backgroundColor: `${color}`,
                  opacity,
                  border: `1px solid ${color}`,
                  zIndex: 2,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.15, delay: ni * 0.03 }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom: Velocity lane + measure numbers */}
      <div
        className="flex-shrink-0"
        style={{
          height: 24,
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
        }}
      >
        {/* Measure numbers */}
        <div className="flex items-center h-full px-0.5">
          <div style={{ width: 28 }} className="flex-shrink-0" />
          <div className="flex-1 flex">
            {Array.from({ length: TOTAL_BEATS / 4 }, (_, mi) => (
              <div
                key={mi}
                className="flex-1 text-center"
                style={{
                  borderLeft: `1px solid ${DISPLAY_COLORS.border}30`,
                }}
              >
                <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                  {mi + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
