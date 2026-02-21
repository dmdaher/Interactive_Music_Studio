'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ZoneConfig } from '@/types/keyboard';
import { generateKeyboardNotes, noteInZone, midiNoteToName } from '@/lib/noteHelpers';
import { ZONE_COLORS } from '@/lib/constants';

interface KeyboardProps {
  zones?: ZoneConfig[];
  highlightedKeys?: number[];
}

const zoneColorByNumber: Record<number, string> = {
  1: ZONE_COLORS.zone1,
  2: ZONE_COLORS.zone2,
  3: ZONE_COLORS.zone3,
  4: ZONE_COLORS.zone4,
  5: ZONE_COLORS.zone5,
  6: ZONE_COLORS.zone6,
  7: ZONE_COLORS.zone7,
  8: ZONE_COLORS.zone8,
};

export default function Keyboard({ zones = [], highlightedKeys = [] }: KeyboardProps) {
  const allNotes = useMemo(() => generateKeyboardNotes(), []);
  const whiteNotes = useMemo(() => allNotes.filter((n) => !n.isBlack), [allNotes]);
  const blackNotes = useMemo(() => allNotes.filter((n) => n.isBlack), [allNotes]);

  // Find which zone(s) a note belongs to (first match)
  const getZoneForNote = (midi: number): ZoneConfig | undefined => {
    return zones.find((z) => noteInZone(midi, z.lowNote, z.highNote));
  };

  // Build a lookup for white key index by midi note
  const whiteKeyIndexMap = useMemo(() => {
    const map = new Map<number, number>();
    whiteNotes.forEach((note, idx) => {
      map.set(note.midiNote, idx);
    });
    return map;
  }, [whiteNotes]);

  const totalWhiteKeys = whiteNotes.length;

  // Calculate zone label positions
  const zoneLabels = useMemo(() => {
    return zones.map((zone) => {
      // Find the white key positions for the zone's range
      const lowWhiteIdx = findNearestWhiteKeyIndex(zone.lowNote, whiteNotes);
      const highWhiteIdx = findNearestWhiteKeyIndex(zone.highNote, whiteNotes);
      const centerPct = ((lowWhiteIdx + highWhiteIdx) / 2 / totalWhiteKeys) * 100;
      const widthPct = ((highWhiteIdx - lowWhiteIdx + 1) / totalWhiteKeys) * 100;
      const color = zoneColorByNumber[zone.zoneNumber] ?? '#888888';
      return {
        ...zone,
        centerPct,
        widthPct,
        color,
      };
    });
  }, [zones, whiteNotes, totalWhiteKeys]);

  return (
    <motion.div
      className="flex flex-col w-full"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
    >
      {/* Keyboard container */}
      <div className="relative w-full h-24 select-none">
        {/* White keys */}
        <div className="flex h-full">
          {whiteNotes.map((note) => {
            const zone = getZoneForNote(note.midiNote);
            const isHighlighted = highlightedKeys.includes(note.midiNote);
            const zoneColor = zone
              ? zoneColorByNumber[zone.zoneNumber] ?? '#888888'
              : undefined;
            const isC = note.name === 'C';

            return (
              <div
                key={note.midiNote}
                className="relative flex-1 border-r border-neutral-300"
                style={{
                  backgroundColor: isHighlighted ? '#ffffcc' : '#f5f5f0',
                  borderRightWidth: 1,
                  borderColor: '#bbb',
                  borderRadius: '0 0 3px 3px',
                }}
              >
                {/* Zone color overlay */}
                {zoneColor && (
                  <div
                    className="absolute inset-0 rounded-b-[3px] pointer-events-none"
                    style={{
                      backgroundColor: zoneColor,
                      opacity: 0.2,
                    }}
                  />
                )}

                {/* C note label */}
                {isC && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[7px] text-neutral-500 pointer-events-none">
                    {midiNoteToName(note.midiNote)}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Black keys */}
        {blackNotes.map((note) => {
          // Determine position: black key sits between the two adjacent white keys
          // Find the preceding white key index
          const precWhiteIdx = findPrecedingWhiteKeyIndex(note.midiNote, whiteKeyIndexMap, allNotes);
          if (precWhiteIdx === undefined) return null;

          const leftPercent = ((precWhiteIdx + 0.55) / totalWhiteKeys) * 100;
          const widthPercent = (0.65 / totalWhiteKeys) * 100;

          const zone = getZoneForNote(note.midiNote);
          const isHighlighted = highlightedKeys.includes(note.midiNote);
          const zoneColor = zone
            ? zoneColorByNumber[zone.zoneNumber] ?? '#888888'
            : undefined;

          return (
            <div
              key={note.midiNote}
              className="absolute top-0 rounded-b-sm"
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
                height: '60%',
                transform: 'translateX(-50%)',
                backgroundColor: isHighlighted ? '#666644' : '#222222',
                zIndex: 2,
                boxShadow: '1px 2px 3px rgba(0,0,0,0.4)',
              }}
            >
              {/* Zone color overlay on black key */}
              {zoneColor && (
                <div
                  className="absolute inset-0 rounded-b-sm pointer-events-none"
                  style={{
                    backgroundColor: zoneColor,
                    opacity: 0.3,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Zone labels below the keyboard */}
      {zoneLabels.length > 0 && (
        <div className="relative w-full h-5 mt-1">
          {zoneLabels.map((zl) => (
            <div
              key={zl.zoneNumber}
              className="absolute flex items-center justify-center"
              style={{
                left: `${zl.centerPct}%`,
                transform: 'translateX(-50%)',
                width: `${Math.max(zl.widthPct, 3)}%`,
              }}
            >
              <span
                className="text-[8px] font-mono font-bold tracking-wide px-1 rounded-sm"
                style={{
                  color: zl.color,
                  backgroundColor: `${zl.color}18`,
                }}
              >
                {zl.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/**
 * Find the nearest white key index for a given midi note.
 * If the note itself is white, returns its index; otherwise returns the preceding white key.
 */
function findNearestWhiteKeyIndex(midi: number, whiteNotes: { midiNote: number }[]): number {
  for (let i = whiteNotes.length - 1; i >= 0; i--) {
    if (whiteNotes[i].midiNote <= midi) return i;
  }
  return 0;
}

/**
 * Find the index of the white key that immediately precedes a black key.
 */
function findPrecedingWhiteKeyIndex(
  blackMidi: number,
  whiteKeyIndexMap: Map<number, number>,
  allNotes: { midiNote: number; isBlack: boolean }[],
): number | undefined {
  // Walk backward from the black key to find the nearest white key
  for (let m = blackMidi - 1; m >= 0; m--) {
    const idx = whiteKeyIndexMap.get(m);
    if (idx !== undefined) return idx;
  }
  return undefined;
}
