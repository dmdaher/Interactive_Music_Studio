'use client';

import { motion } from 'framer-motion';
import { ZoneDisplayInfo } from '@/types/display';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

interface MixerScreenProps {
  zones: ZoneDisplayInfo[];
  viewMode?: 8 | 16;
  selectedZone?: number;
}

const EFFECT_TOGGLES = ['IFX1', 'IFX2', 'CHO', 'REV', 'CMP', 'MEQ'] as const;

/** Stereo level meter on the right side */
function LevelMeter() {
  // Simulated static meter levels for display
  const leftLevel = 72;
  const rightLevel = 65;
  const maxHeight = 80;

  return (
    <div className="flex flex-col items-center gap-0.5 font-mono">
      <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>LEVEL</span>
      <div className="flex gap-1 items-end" style={{ height: maxHeight }}>
        {[{ label: 'L', level: leftLevel }, { label: 'R', level: rightLevel }].map(({ label, level }) => {
          const height = (level / 127) * maxHeight;
          return (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <div
                className="relative w-2.5 rounded-sm overflow-hidden"
                style={{
                  height: maxHeight,
                  backgroundColor: `${DISPLAY_COLORS.border}40`,
                }}
              >
                <div
                  className="absolute bottom-0 w-full rounded-sm"
                  style={{
                    height,
                    background: `linear-gradient(to top, ${DISPLAY_COLORS.highlight}, ${DISPLAY_COLORS.active})`,
                  }}
                />
              </div>
              <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Pan indicator — small horizontal bar with center marker */
function PanIndicator({ pan, color }: { pan: number; color: string }) {
  // pan: -64 (L) to 0 (C) to +63 (R), map to 0-100%
  const position = ((pan + 64) / 127) * 100;

  return (
    <div
      className="relative h-1 rounded-sm"
      style={{ backgroundColor: `${DISPLAY_COLORS.border}60` }}
    >
      {/* Center marker */}
      <div
        className="absolute top-0 h-full w-px"
        style={{ left: '50%', backgroundColor: `${DISPLAY_COLORS.zoneMuted}80` }}
      />
      {/* Pan position */}
      <div
        className="absolute top-0 h-full w-1 rounded-sm"
        style={{
          left: `${Math.max(0, Math.min(95, position - 2.5))}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}

/** Volume level bar */
function LevelBar({ volume, color, height }: { volume: number; color: string; height: number }) {
  const fillHeight = (volume / 127) * height;

  return (
    <div
      className="relative w-full rounded-sm overflow-hidden"
      style={{
        height,
        backgroundColor: `${DISPLAY_COLORS.border}40`,
      }}
    >
      <div
        className="absolute bottom-0 w-full rounded-sm"
        style={{
          height: fillHeight,
          backgroundColor: `${color}cc`,
        }}
      />
    </div>
  );
}

/** 8-zone mixer view — full detail per channel strip */
function EightZoneView({ zones, selectedZone }: { zones: ZoneDisplayInfo[]; selectedZone?: number }) {
  const slots = Array.from({ length: 8 }, (_, i) => zones.find((z) => z.zoneNumber === i + 1));

  return (
    <div className="flex h-full">
      {/* Channel strips */}
      <div className="flex flex-1 min-w-0">
        {slots.map((zone, i) => {
          const num = i + 1;
          const color = ZONE_COLOR_MAP[num] ?? DISPLAY_COLORS.text;
          const isSelected = selectedZone === num;
          const isMuted = zone?.muted ?? false;
          const isSolo = zone?.solo ?? false;
          const volume = zone?.volume ?? 0;
          const pan = zone?.pan ?? 0;
          const choSend = zone?.chorusSend ?? 0;
          const revSend = zone?.reverbSend ?? 0;
          const mfxOn = zone?.mfxEnabled ?? false;
          const eqOn = zone?.eqEnabled ?? false;

          return (
            <motion.div
              key={num}
              className="flex flex-col items-center px-0.5 py-0.5 flex-1 min-w-0"
              style={{
                backgroundColor: isSelected ? `${color}15` : 'transparent',
                borderRight: i < 7 ? `1px solid ${DISPLAY_COLORS.border}30` : 'none',
                borderBottom: isSelected ? `2px solid ${color}` : '2px solid transparent',
                opacity: isMuted ? 0.4 : 1,
              }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: isMuted ? 0.4 : 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.03 }}
            >
              {/* Zone label */}
              <span
                className="text-[10px] font-mono font-bold"
                style={{ color }}
              >
                Z{num}
              </span>

              {/* Solo indicator */}
              <span
                className="text-[8px] font-mono px-0.5 rounded mt-0.5"
                style={{
                  color: isSolo ? DISPLAY_COLORS.warning : DISPLAY_COLORS.zoneMuted,
                  backgroundColor: isSolo ? `${DISPLAY_COLORS.warning}25` : 'transparent',
                }}
              >
                S
              </span>

              {/* Mute indicator */}
              <span
                className="text-[8px] font-mono px-0.5 rounded"
                style={{
                  color: isMuted ? DISPLAY_COLORS.mute : DISPLAY_COLORS.zoneMuted,
                  backgroundColor: isMuted ? `${DISPLAY_COLORS.mute}25` : 'transparent',
                }}
              >
                M
              </span>

              {/* EQ indicator */}
              <span
                className="text-[8px] font-mono mt-0.5"
                style={{
                  color: eqOn ? DISPLAY_COLORS.active : DISPLAY_COLORS.zoneMuted,
                }}
              >
                EQ
              </span>

              {/* Chorus send */}
              <span
                className="text-[8px] font-mono mt-0.5"
                style={{ color: DISPLAY_COLORS.zoneMuted }}
              >
                C{choSend}
              </span>

              {/* Reverb send */}
              <span
                className="text-[8px] font-mono"
                style={{ color: DISPLAY_COLORS.zoneMuted }}
              >
                R{revSend}
              </span>

              {/* Pan */}
              <div className="w-full px-0.5 mt-0.5">
                <PanIndicator pan={pan} color={color} />
              </div>

              {/* Level bar */}
              <div className="w-2 mt-0.5 flex-1 min-h-0">
                <LevelBar volume={volume} color={color} height={32} />
              </div>

              {/* MFX indicator */}
              <span
                className="text-[7px] font-mono mt-0.5"
                style={{
                  color: mfxOn ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                }}
              >
                MFX
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Right: Level meter */}
      <div
        className="flex-shrink-0 px-1.5 py-1 flex items-center"
        style={{ borderLeft: `1px solid ${DISPLAY_COLORS.border}40` }}
      >
        <LevelMeter />
      </div>
    </div>
  );
}

/** 16-zone mixer view — compact strips */
function SixteenZoneView({ zones, selectedZone }: { zones: ZoneDisplayInfo[]; selectedZone?: number }) {
  const slots = Array.from({ length: 16 }, (_, i) => zones.find((z) => z.zoneNumber === i + 1));

  return (
    <div className="flex h-full">
      {/* Channel strips */}
      <div className="flex flex-1 min-w-0">
        {slots.map((zone, i) => {
          const num = i + 1;
          // Zones 9-16 reuse colors 1-8
          const colorKey = ((num - 1) % 8) + 1;
          const color = ZONE_COLOR_MAP[colorKey] ?? DISPLAY_COLORS.text;
          const isSelected = selectedZone === num;
          const isMuted = zone?.muted ?? false;
          const isSolo = zone?.solo ?? false;
          const volume = zone?.volume ?? 0;
          const pan = zone?.pan ?? 0;
          const mfxOn = zone?.mfxEnabled ?? false;

          return (
            <motion.div
              key={num}
              className="flex flex-col items-center px-px py-0.5 flex-1 min-w-0"
              style={{
                backgroundColor: isSelected ? `${color}15` : 'transparent',
                borderRight: i < 15 ? `1px solid ${DISPLAY_COLORS.border}20` : 'none',
                borderBottom: isSelected ? `2px solid ${color}` : '2px solid transparent',
                opacity: isMuted ? 0.4 : 1,
              }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: isMuted ? 0.4 : 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.02 }}
            >
              {/* Zone label */}
              <span
                className="text-[8px] font-mono font-bold leading-none"
                style={{ color }}
              >
                {num <= 8 ? `Z${num}` : `${num}`}
              </span>

              {/* Solo */}
              <span
                className="text-[7px] font-mono leading-none mt-px"
                style={{
                  color: isSolo ? DISPLAY_COLORS.warning : DISPLAY_COLORS.zoneMuted,
                }}
              >
                S
              </span>

              {/* Mute */}
              <span
                className="text-[7px] font-mono leading-none"
                style={{
                  color: isMuted ? DISPLAY_COLORS.mute : DISPLAY_COLORS.zoneMuted,
                }}
              >
                M
              </span>

              {/* CHO/REV abbreviated */}
              <span className="text-[7px] font-mono leading-none mt-px" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                C
              </span>
              <span className="text-[7px] font-mono leading-none" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                R
              </span>

              {/* Pan */}
              <div className="w-full px-px mt-px">
                <PanIndicator pan={pan} color={color} />
              </div>

              {/* Level bar */}
              <div className="w-1.5 mt-px flex-1 min-h-0">
                <LevelBar volume={volume} color={color} height={24} />
              </div>

              {/* MFX */}
              <span
                className="text-[6px] font-mono leading-none mt-px"
                style={{
                  color: mfxOn ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                }}
              >
                Fx
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Right: Level meter */}
      <div
        className="flex-shrink-0 px-1 py-1 flex items-center"
        style={{ borderLeft: `1px solid ${DISPLAY_COLORS.border}40` }}
      >
        <LevelMeter />
      </div>
    </div>
  );
}

export default function MixerScreen({ zones, viewMode = 8, selectedZone }: MixerScreenProps) {
  const selectedZoneData = zones.find((z) => z.zoneNumber === selectedZone);

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Effect toggle row */}
      <div
        className="flex items-center gap-1 px-2 py-0.5 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span className="text-[10px] mr-1" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          {viewMode === 8 ? '8V' : '16V'}
        </span>
        {EFFECT_TOGGLES.map((effect) => (
          <span
            key={effect}
            className="text-[9px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.header,
              backgroundColor: `${DISPLAY_COLORS.border}50`,
            }}
          >
            {effect}
          </span>
        ))}
      </div>

      {/* Channel strips area */}
      <div className="flex-1 min-h-0">
        {viewMode === 8 ? (
          <EightZoneView zones={zones} selectedZone={selectedZone} />
        ) : (
          <SixteenZoneView zones={zones} selectedZone={selectedZone} />
        )}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span className="text-[10px]" style={{ color: DISPLAY_COLORS.text }}>
          {selectedZoneData
            ? `Zone ${selectedZoneData.zoneNumber}: ${selectedZoneData.toneName}`
            : `Zone ${selectedZone ?? 1}`}
        </span>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] px-1 rounded"
            style={{
              color: viewMode === 8 ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              backgroundColor: viewMode === 8 ? `${DISPLAY_COLORS.active}20` : 'transparent',
            }}
          >
            8V
          </span>
          <span
            className="text-[9px] px-1 rounded"
            style={{
              color: viewMode === 16 ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              backgroundColor: viewMode === 16 ? `${DISPLAY_COLORS.active}20` : 'transparent',
            }}
          >
            16V
          </span>
          {selectedZoneData && (
            <>
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                CHO:{selectedZoneData.chorusSend ?? 0}
              </span>
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                REV:{selectedZoneData.reverbSend ?? 0}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
