'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { DISPLAY_COLORS, ZONE_COLORS } from '@/lib/constants';
import { isBlackKey } from '@/lib/noteHelpers';
import { nameToMidiNote } from '@/lib/noteHelpers';

interface KeyRangeScreenProps {
  zoneNumber: number;
  lowNote: string;
  highNote: string;
  selectedField?: 'low' | 'high';
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

// Mini keyboard spanning C2 to C6 for visualization
const MINI_KB_LOW = 36;  // C2
const MINI_KB_HIGH = 84; // C6

export default function KeyRangeScreen({
  zoneNumber,
  lowNote,
  highNote,
  selectedField,
}: KeyRangeScreenProps) {
  const lowMidi = nameToMidiNote(lowNote);
  const highMidi = nameToMidiNote(highNote);
  const zoneColor = zoneColorByNumber[zoneNumber] ?? DISPLAY_COLORS.highlight;

  // Generate mini keyboard notes
  const miniKeys = useMemo(() => {
    const keys: { midi: number; black: boolean }[] = [];
    for (let m = MINI_KB_LOW; m <= MINI_KB_HIGH; m++) {
      keys.push({ midi: m, black: isBlackKey(m) });
    }
    return keys;
  }, []);

  const whiteKeys = miniKeys.filter((k) => !k.black);
  const blackKeys = miniKeys.filter((k) => k.black);

  const inRange = (midi: number) => midi >= lowMidi && midi <= highMidi;

  return (
    <div className="flex flex-col gap-3 p-3 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs" style={{ color: DISPLAY_COLORS.header }}>
          KEY RANGE - ZONE {zoneNumber}
        </span>
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: zoneColor }}
        />
      </div>

      {/* Note fields */}
      <div className="flex items-center justify-center gap-6">
        <motion.div
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded"
          style={{
            backgroundColor: selectedField === 'low' ? `${DISPLAY_COLORS.active}30` : 'transparent',
            borderWidth: 1,
            borderColor: selectedField === 'low' ? DISPLAY_COLORS.active : DISPLAY_COLORS.border,
          }}
          animate={{
            borderColor: selectedField === 'low' ? DISPLAY_COLORS.active : DISPLAY_COLORS.border,
          }}
        >
          <span className="text-[11px]" style={{ color: DISPLAY_COLORS.header }}>
            LOW
          </span>
          <span className="text-sm font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
            {lowNote}
          </span>
        </motion.div>

        <span className="text-xs" style={{ color: DISPLAY_COLORS.text }}>
          ---
        </span>

        <motion.div
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded"
          style={{
            backgroundColor: selectedField === 'high' ? `${DISPLAY_COLORS.active}30` : 'transparent',
            borderWidth: 1,
            borderColor: selectedField === 'high' ? DISPLAY_COLORS.active : DISPLAY_COLORS.border,
          }}
          animate={{
            borderColor: selectedField === 'high' ? DISPLAY_COLORS.active : DISPLAY_COLORS.border,
          }}
        >
          <span className="text-[11px]" style={{ color: DISPLAY_COLORS.header }}>
            HIGH
          </span>
          <span className="text-sm font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
            {highNote}
          </span>
        </motion.div>
      </div>

      {/* Mini keyboard visualization */}
      <div className="relative w-full h-12 mt-1">
        {/* White keys */}
        <div className="flex h-full">
          {whiteKeys.map((key) => (
            <div
              key={key.midi}
              className="flex-1 border-r"
              style={{
                borderColor: DISPLAY_COLORS.border,
                backgroundColor: inRange(key.midi)
                  ? `${zoneColor}60`
                  : DISPLAY_COLORS.background,
              }}
            />
          ))}
        </div>

        {/* Black keys overlay */}
        <div className="absolute top-0 left-0 w-full h-[60%] flex pointer-events-none">
          {miniKeys.map((key, idx) => {
            if (!key.black) return null;
            // Calculate position based on the preceding white keys
            const whiteIndex = miniKeys.filter((k, i) => i < idx && !k.black).length;
            const totalWhites = whiteKeys.length;
            const leftPercent = ((whiteIndex + 0.5) / totalWhites) * 100;
            const widthPercent = (0.65 / totalWhites) * 100;

            return (
              <div
                key={key.midi}
                className="absolute h-full rounded-b-sm"
                style={{
                  left: `${leftPercent}%`,
                  width: `${widthPercent}%`,
                  transform: 'translateX(-50%)',
                  backgroundColor: inRange(key.midi)
                    ? `${zoneColor}90`
                    : DISPLAY_COLORS.backgroundDark,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
