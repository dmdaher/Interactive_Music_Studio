'use client';

import { motion } from 'framer-motion';
import { ZoneDisplayInfo } from '@/types/display';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

interface ZoneViewScreenProps {
  zones: ZoneDisplayInfo[];
  sceneName?: string;
  sceneNumber?: string;
  viewMode?: 1 | 4 | 8 | 16;
}

function MiniRangeBar({ low, high, color }: { low: string; high: string; color: string }) {
  const noteToPos = (note: string): number => {
    const match = note.match(/^([A-G]#?)(\d)$/);
    if (!match) return 0;
    const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const idx = names.indexOf(match[1]);
    const oct = parseInt(match[2]);
    const midi = (oct + 1) * 12 + idx;
    return ((midi - 21) / 87) * 100; // A0=21, C8=108
  };
  const left = noteToPos(low);
  const right = noteToPos(high);
  const width = Math.max(right - left, 2);

  return (
    <div
      className="relative h-1.5 rounded-sm overflow-hidden"
      style={{ backgroundColor: `${DISPLAY_COLORS.border}60` }}
    >
      <div
        className="absolute top-0 h-full rounded-sm"
        style={{
          left: `${left}%`,
          width: `${width}%`,
          backgroundColor: `${color}cc`,
        }}
      />
    </div>
  );
}

function EffectPills({ zone }: { zone: ZoneDisplayInfo }) {
  const pills = ['Z.EQ', 'MFX', 'ARP'];
  return (
    <div className="flex gap-1">
      {pills.map((p) => (
        <span
          key={p}
          className="text-[11px] px-1 rounded"
          style={{
            color: DISPLAY_COLORS.header,
            backgroundColor: `${DISPLAY_COLORS.border}60`,
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

// 1 ZONE VIEW — most detailed, single zone fills screen
function OneZoneView({ zone }: { zone: ZoneDisplayInfo }) {
  const color = ZONE_COLOR_MAP[zone.zoneNumber] ?? DISPLAY_COLORS.text;
  const toneLabel = zone.toneNumber
    ? `${zone.toneNumber}: ${zone.toneName}`
    : zone.toneName;
  const bankLine = [zone.toneType, zone.toneBank, zone.toneCategory]
    .filter(Boolean)
    .join('  ');

  return (
    <div className="p-2 font-mono">
      <div className="text-[11px] mb-1.5" style={{ color: DISPLAY_COLORS.header }}>
        ZONE {zone.zoneNumber}
      </div>
      <div
        className="rounded p-2.5"
        style={{
          backgroundColor: `${color}10`,
          border: `1px solid ${color}40`,
        }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[10px]">🎹</span>
          <span
            className="text-[11px] font-bold"
            style={{ color: DISPLAY_COLORS.highlight }}
          >
            {toneLabel}
          </span>
        </div>
        {bankLine && (
          <div className="text-[10px] mb-2" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            {bankLine}
          </div>
        )}

        <div className="flex items-center gap-3 mb-1.5">
          <span
            className="text-[10px] px-1 rounded"
            style={{
              color: DISPLAY_COLORS.text,
              backgroundColor: `${DISPLAY_COLORS.border}60`,
            }}
          >
            LOCK
          </span>
          <span className="text-[11px]" style={{ color: DISPLAY_COLORS.text }}>
            Lv:{zone.volume}
          </span>
          <span className="text-[11px]" style={{ color: DISPLAY_COLORS.text }}>
            Pan:{zone.pan}
          </span>
        </div>

        <EffectPills zone={zone} />

        <div className="mt-2">
          <MiniRangeBar low={zone.keyRangeLow} high={zone.keyRangeHigh} color={color} />
          <div className="flex justify-between mt-0.5">
            <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              {zone.keyRangeLow}
            </span>
            <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              {zone.keyRangeHigh}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4 ZONE VIEW — default for tutorials with 2-4 zones
function FourZoneView({ zones }: { zones: ZoneDisplayInfo[] }) {
  const slots = Array.from({ length: 4 }, (_, i) => zones.find((z) => z.zoneNumber === i + 1));

  return (
    <div className="flex flex-col font-mono divide-y" style={{ borderColor: DISPLAY_COLORS.border }}>
      {slots.map((zone, i) => {
        const num = i + 1;
        const color = ZONE_COLOR_MAP[num] ?? DISPLAY_COLORS.text;

        if (!zone) {
          return (
            <div
              key={num}
              className="px-2 py-1"
              style={{ borderColor: `${DISPLAY_COLORS.border}60` }}
            >
              <span className="text-[11px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                Z{num}{'  '}(empty)
              </span>
            </div>
          );
        }

        const toneLabel = zone.toneNumber
          ? `${zone.toneNumber}:${zone.toneName}`
          : zone.toneName;
        const bankLine = [zone.toneType, zone.toneBank, zone.toneCategory]
          .filter(Boolean)
          .join('  ');
        const isActive = zone.active;

        return (
          <motion.div
            key={num}
            className="px-2 py-1"
            style={{
              backgroundColor: isActive ? `${color}10` : 'transparent',
              borderColor: `${DISPLAY_COLORS.border}60`,
              opacity: zone.muted ? 0.4 : 1,
            }}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: zone.muted ? 0.4 : 1, x: 0 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold w-4" style={{ color }}>
                Z{num}
              </span>
              <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                INT
              </span>
              {isActive && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: color }}
                />
              )}
              <span
                className="text-[11px] font-bold truncate"
                style={{ color: DISPLAY_COLORS.highlight }}
              >
                {toneLabel}
              </span>
            </div>
            {bankLine && (
              <div className="ml-[22px] text-[11px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                {bankLine}
              </div>
            )}
            <div className="ml-[22px] flex items-center gap-2 mt-0.5">
              <span className="text-[10px]" style={{ color: DISPLAY_COLORS.text }}>
                Lv:{zone.volume}
              </span>
              <span className="text-[10px]" style={{ color: DISPLAY_COLORS.text }}>
                Pan:{zone.pan}
              </span>
              <EffectPills zone={zone} />
            </div>
            <div className="ml-[22px] flex items-center gap-2 mt-0.5">
              <div className="flex-1 max-w-[120px]">
                <MiniRangeBar low={zone.keyRangeLow} high={zone.keyRangeHigh} color={color} />
              </div>
              <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                {zone.keyRangeLow} --- {zone.keyRangeHigh}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// 8 ZONE VIEW — compact rows, less detail
function EightZoneView({ zones }: { zones: ZoneDisplayInfo[] }) {
  const slots = Array.from({ length: 8 }, (_, i) => zones.find((z) => z.zoneNumber === i + 1));

  return (
    <div className="flex flex-col font-mono text-[11px]">
      {slots.map((zone, i) => {
        const num = i + 1;
        const color = ZONE_COLOR_MAP[num] ?? DISPLAY_COLORS.text;

        if (!zone) {
          return (
            <div
              key={num}
              className="flex items-center gap-2 px-2 py-[2px]"
              style={{
                borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
              }}
            >
              <span className="font-bold w-4" style={{ color }}>Z{num}</span>
              <span style={{ color: DISPLAY_COLORS.zoneMuted }}>--- (empty)</span>
            </div>
          );
        }

        return (
          <div
            key={num}
            className="flex items-center gap-2 px-2 py-[2px]"
            style={{
              backgroundColor: zone.active ? `${color}10` : 'transparent',
              borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
              opacity: zone.muted ? 0.4 : 1,
            }}
          >
            <span className="font-bold w-4" style={{ color }}>Z{num}</span>
            <span className="text-[10px] w-5" style={{ color: DISPLAY_COLORS.zoneMuted }}>INT</span>
            <span
              className="truncate w-24"
              style={{ color: DISPLAY_COLORS.text }}
            >
              {zone.toneName}
            </span>
            <span className="w-10" style={{ color: DISPLAY_COLORS.text }}>
              Lv:{zone.volume}
            </span>
            <div className="w-16">
              <MiniRangeBar low={zone.keyRangeLow} high={zone.keyRangeHigh} color={color} />
            </div>
            <span className="text-[11px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              {zone.keyRangeLow}-{zone.keyRangeHigh}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// 16 ZONE VIEW — most compact, two columns
function SixteenZoneView({ zones }: { zones: ZoneDisplayInfo[] }) {
  const left = Array.from({ length: 8 }, (_, i) => ({
    num: i + 1,
    zone: zones.find((z) => z.zoneNumber === i + 1),
  }));
  const right = Array.from({ length: 8 }, (_, i) => ({
    num: i + 9,
    zone: zones.find((z) => z.zoneNumber === i + 9),
  }));

  const renderCol = (items: { num: number; zone?: ZoneDisplayInfo }[]) => (
    <div className="flex-1 flex flex-col font-mono text-[10px]">
      {items.map(({ num, zone }) => {
        const color = ZONE_COLOR_MAP[num] ?? DISPLAY_COLORS.text;
        return (
          <div
            key={num}
            className="flex items-center gap-1 px-1 py-[1px]"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}20`,
              opacity: zone?.muted ? 0.4 : 1,
            }}
          >
            <span className="font-bold w-5" style={{ color }}>Z{num}</span>
            <span
              className="truncate flex-1"
              style={{ color: zone ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted }}
            >
              {zone ? zone.toneName : '(empty)'}
            </span>
            <div className="w-10">
              {zone ? (
                <MiniRangeBar low={zone.keyRangeLow} high={zone.keyRangeHigh} color={color} />
              ) : (
                <div
                  className="h-1.5 rounded-sm"
                  style={{ backgroundColor: `${DISPLAY_COLORS.border}30` }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex">
      {renderCol(left)}
      <div className="w-px" style={{ backgroundColor: `${DISPLAY_COLORS.border}60` }} />
      {renderCol(right)}
    </div>
  );
}

export default function ZoneViewScreen({ zones, sceneName, sceneNumber, viewMode = 4 }: ZoneViewScreenProps) {
  // Auto-select view mode based on zone count if not explicitly set
  const effectiveMode = viewMode;

  return (
    <div className="flex flex-col h-full">
      {/* Scene info line */}
      {(sceneName || sceneNumber) && (
        <div
          className="px-2 py-0.5 text-[10px] font-mono border-b"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            borderColor: `${DISPLAY_COLORS.border}60`,
          }}
        >
          SCENE{'  '}
          <span style={{ color: DISPLAY_COLORS.text }}>
            {sceneNumber ? `${sceneNumber}: ` : ''}{sceneName}
          </span>
        </div>
      )}

      {/* Zone content */}
      <div className="flex-1 min-h-0 overflow-auto">
        {effectiveMode === 1 && zones.length > 0 && (
          <OneZoneView zone={zones.find((z) => z.active) ?? zones[0]} />
        )}
        {effectiveMode === 4 && <FourZoneView zones={zones} />}
        {effectiveMode === 8 && <EightZoneView zones={zones} />}
        {effectiveMode === 16 && <SixteenZoneView zones={zones} />}
      </div>
    </div>
  );
}
