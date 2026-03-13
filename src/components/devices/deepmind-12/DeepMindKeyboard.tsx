'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface DeepMindKeyboardProps {
  highlightedKeys?: number[];
}

/** Check whether a MIDI note is a black key */
function isBlackKey(note: number): boolean {
  const n = note % 12;
  return [1, 3, 6, 8, 10].includes(n);
}

/** Return the note name for C keys (e.g. "C2", "C3") or undefined for non-C keys */
function cLabel(midi: number): string | undefined {
  if (midi % 12 !== 0) return undefined;
  const octave = Math.floor(midi / 12) - 2; // MIDI 48 = C2
  return `C${octave}`;
}

/** Find the index of the white key immediately below a given black key */
function findPrecedingWhiteKeyIndex(
  blackMidi: number,
  whiteKeyIndexMap: Map<number, number>,
): number | undefined {
  for (let m = blackMidi - 1; m >= 0; m--) {
    const idx = whiteKeyIndexMap.get(m);
    if (idx !== undefined) return idx;
  }
  return undefined;
}

/**
 * 49-key piano keyboard for the Behringer DeepMind 12.
 * Spans C2 (MIDI 48) to C6 (MIDI 96).
 */
export default function DeepMindKeyboard({ highlightedKeys = [] }: DeepMindKeyboardProps) {
  // Generate all notes from C2 (48) to C6 (96)
  const allNotes = useMemo(() => {
    const notes: { midiNote: number; isBlack: boolean }[] = [];
    for (let midi = 48; midi <= 96; midi++) {
      notes.push({ midiNote: midi, isBlack: isBlackKey(midi) });
    }
    return notes;
  }, []);

  const whiteNotes = useMemo(() => allNotes.filter((n) => !n.isBlack), [allNotes]);
  const blackNotes = useMemo(() => allNotes.filter((n) => n.isBlack), [allNotes]);

  const whiteKeyIndexMap = useMemo(() => {
    const map = new Map<number, number>();
    whiteNotes.forEach((note, idx) => {
      map.set(note.midiNote, idx);
    });
    return map;
  }, [whiteNotes]);

  const totalWhiteKeys = whiteNotes.length;

  return (
    <motion.div
      className="flex flex-col w-full"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
    >
      {/* Keyboard container */}
      <div className="relative w-full h-28 select-none">
        {/* White keys */}
        <div className="flex h-full">
          {whiteNotes.map((note) => {
            const isHighlighted = highlightedKeys.includes(note.midiNote);
            const label = cLabel(note.midiNote);

            return (
              <div
                key={note.midiNote}
                className="relative flex-1 border-r border-neutral-300"
                style={{
                  backgroundColor: isHighlighted ? '#ffffcc' : '#f5f5f0',
                  borderRightWidth: 1,
                  borderColor: '#bbb',
                  borderRadius: '0 0 4px 4px',
                  boxShadow:
                    '0 2px 3px rgba(0,0,0,0.15) inset, -1px 0 0 rgba(0,0,0,0.04)',
                }}
              >
                {/* C note label */}
                {label && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[6px] text-neutral-500 pointer-events-none">
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Black keys */}
        {blackNotes.map((note) => {
          const precWhiteIdx = findPrecedingWhiteKeyIndex(
            note.midiNote,
            whiteKeyIndexMap,
          );
          if (precWhiteIdx === undefined) return null;

          const leftPercent = ((precWhiteIdx + 0.55) / totalWhiteKeys) * 100;
          const widthPercent = (0.65 / totalWhiteKeys) * 100;

          const isHighlighted = highlightedKeys.includes(note.midiNote);

          return (
            <div
              key={note.midiNote}
              className="absolute top-0 rounded-b-sm"
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
                height: '62%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                boxShadow:
                  '1px 3px 4px rgba(0,0,0,0.5), inset 0 -2px 3px rgba(255,255,255,0.05)',
                background: isHighlighted
                  ? '#666644'
                  : 'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 60%, #111 100%)',
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
