'use client';

import { motion } from 'framer-motion';
import { ZoneDisplayInfo } from '@/types/display';
import { DISPLAY_COLORS, ZONE_COLORS } from '@/lib/constants';

interface ZoneViewScreenProps {
  zones: ZoneDisplayInfo[];
}

const zoneColorMap: Record<number, string> = {
  1: ZONE_COLORS.zone1,
  2: ZONE_COLORS.zone2,
  3: ZONE_COLORS.zone3,
  4: ZONE_COLORS.zone4,
  5: ZONE_COLORS.zone5,
  6: ZONE_COLORS.zone6,
  7: ZONE_COLORS.zone7,
  8: ZONE_COLORS.zone8,
};

export default function ZoneViewScreen({ zones }: ZoneViewScreenProps) {
  return (
    <div className="flex flex-col gap-0.5 p-2 font-mono text-[11px]">
      {/* Column headers */}
      <div
        className="grid gap-1 px-1 pb-1 border-b text-[9px] tracking-wider"
        style={{
          gridTemplateColumns: '28px 1fr 1fr 60px 80px',
          color: DISPLAY_COLORS.header,
          borderColor: DISPLAY_COLORS.border,
        }}
      >
        <span>ZN</span>
        <span>NAME</span>
        <span>TONE</span>
        <span>VOL</span>
        <span>RANGE</span>
      </div>

      {/* Zone rows */}
      {zones.map((zone) => {
        const color = zoneColorMap[zone.zoneNumber] ?? DISPLAY_COLORS.text;
        const isMuted = zone.muted;
        const isActive = zone.active;

        return (
          <motion.div
            key={zone.zoneNumber}
            className="grid gap-1 px-1 py-0.5 rounded-sm items-center"
            style={{
              gridTemplateColumns: '28px 1fr 1fr 60px 80px',
              opacity: isMuted ? 0.35 : 1,
              backgroundColor: isActive ? `${color}15` : 'transparent',
            }}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: isMuted ? 0.35 : 1, x: 0 }}
            transition={{ duration: 0.2, delay: zone.zoneNumber * 0.03 }}
          >
            {/* Zone number indicator */}
            <span
              className="font-bold"
              style={{ color }}
            >
              {zone.zoneNumber}
            </span>

            {/* Zone name */}
            <span
              className="truncate"
              style={{ color: isActive ? DISPLAY_COLORS.zoneActive : DISPLAY_COLORS.text }}
            >
              {zone.zoneName}
            </span>

            {/* Tone name */}
            <span className="truncate" style={{ color: DISPLAY_COLORS.text }}>
              {zone.toneName}
            </span>

            {/* Volume bar */}
            <div className="flex items-center gap-1">
              <div
                className="h-2 rounded-sm flex-1"
                style={{ backgroundColor: `${DISPLAY_COLORS.border}` }}
              >
                <div
                  className="h-full rounded-sm transition-all duration-200"
                  style={{
                    width: `${(zone.volume / 127) * 100}%`,
                    backgroundColor: isMuted ? DISPLAY_COLORS.zoneMuted : color,
                  }}
                />
              </div>
              <span className="text-[8px] w-5 text-right" style={{ color: DISPLAY_COLORS.text }}>
                {zone.volume}
              </span>
            </div>

            {/* Key range */}
            <span className="text-[9px]" style={{ color: DISPLAY_COLORS.text }}>
              {zone.keyRangeLow} - {zone.keyRangeHigh}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
