'use client';

import { motion } from 'framer-motion';
import { ZoneDisplayInfo } from '@/types/display';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * EFFECTS EDIT screen as documented in the Reference Manual p.66-67.
 *
 * Top-level tabs:
 *   INTERNAL — Internal sound engine effects & routing
 *   AUDIO IN — Sampling input effect
 *   PAD      — Sampler pad routing
 *   USB      — USB input routing
 *   CLICK    — Click audio output routing
 *   OUTPUT   — Output routing
 *
 * The INTERNAL tab shows a signal-flow routing diagram:
 *   Left panel: Zone selector, MFX/EQ/EDIT toggles, serial/parallel mode
 *   Center: IFX1 → IFX2, CHORUS, REVERB routing blocks
 *   Right panel: MASTER FX (M.COMP, CHORUS, TFX, REVERB + EDIT)
 *   Bottom: Effect type labels
 */
const EFFECTS_TABS = [
  'INTERNAL',
  'AUDIO IN',
  'PAD',
  'USB',
  'CLICK',
  'OUTPUT',
] as const;

interface EffectsEditScreenProps {
  zones?: ZoneDisplayInfo[];
  activeTab?: string;
  selectedIndex?: number;
}

/** Top tab bar */
function TabBar({ activeTab }: { activeTab: string }) {
  return (
    <div
      className="flex items-center gap-0.5 px-1.5 py-0.5 flex-shrink-0"
      style={{
        borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
        backgroundColor: `${DISPLAY_COLORS.border}15`,
      }}
    >
      {EFFECTS_TABS.map((tab, i) => {
        const isActive = tab === activeTab;
        return (
          <motion.span
            key={tab}
            className="text-[9px] font-mono font-bold px-1.5 py-px rounded"
            style={{
              color: isActive ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
              border: `1px solid ${isActive ? DISPLAY_COLORS.active + '40' : 'transparent'}`,
            }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: i * 0.03 }}
          >
            {tab}
          </motion.span>
        );
      })}
    </div>
  );
}

/** Effect block — a styled box representing an effect processor */
function EffectBlock({
  label,
  enabled = true,
  hasEdit = false,
  variant = 'normal',
  delay = 0,
}: {
  label: string;
  enabled?: boolean;
  hasEdit?: boolean;
  variant?: 'normal' | 'master' | 'zone';
  delay?: number;
}) {
  const bgColor =
    variant === 'master'
      ? `${DISPLAY_COLORS.header}20`
      : variant === 'zone'
        ? `${DISPLAY_COLORS.active}15`
        : `${DISPLAY_COLORS.border}30`;

  const borderColor = enabled
    ? variant === 'master'
      ? `${DISPLAY_COLORS.header}60`
      : `${DISPLAY_COLORS.active}50`
    : `${DISPLAY_COLORS.border}40`;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15, delay }}
    >
      <div
        className="flex flex-col items-center px-1.5 py-0.5 rounded"
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${borderColor}`,
          opacity: enabled ? 1 : 0.4,
        }}
      >
        <span
          className="text-[9px] font-mono font-bold"
          style={{ color: enabled ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted }}
        >
          {label}
        </span>
        {hasEdit && (
          <span
            className="text-[7px] font-mono px-1 rounded mt-px"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              backgroundColor: `${DISPLAY_COLORS.border}40`,
            }}
          >
            EDIT
          </span>
        )}
      </div>
    </motion.div>
  );
}

/** Arrow connector between effect blocks */
function Arrow({ direction = 'right' }: { direction?: 'right' | 'down' }) {
  return (
    <span
      className="text-[10px] font-mono"
      style={{ color: DISPLAY_COLORS.zoneMuted }}
    >
      {direction === 'right' ? '→' : '↓'}
    </span>
  );
}

/** Zone selector panel — left side */
function ZonePanel({
  zones,
  selectedIndex,
}: {
  zones: ZoneDisplayInfo[];
  selectedIndex: number;
}) {
  const selectedZone = zones[selectedIndex];
  const zoneNum = selectedZone?.zoneNumber ?? 1;
  const zoneColor = ZONE_COLOR_MAP[((zoneNum - 1) % 8) + 1] ?? DISPLAY_COLORS.text;

  return (
    <div
      className="flex flex-col gap-1 px-1.5 py-1 flex-shrink-0"
      style={{
        borderRight: `1px solid ${DISPLAY_COLORS.border}40`,
        width: 56,
      }}
    >
      {/* Zone selector */}
      <div
        className="flex items-center justify-between px-1 py-0.5 rounded"
        style={{
          backgroundColor: `${zoneColor}15`,
          border: `1px solid ${zoneColor}40`,
        }}
      >
        <span className="text-[9px] font-mono font-bold" style={{ color: zoneColor }}>
          Z{zoneNum}
        </span>
        <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>▼</span>
      </div>

      {/* Zone effect toggles */}
      <EffectBlock
        label="MFX"
        enabled={selectedZone?.mfxEnabled ?? true}
        variant="zone"
        delay={0.05}
      />
      <EffectBlock
        label="EQ"
        enabled={selectedZone?.eqEnabled ?? true}
        variant="zone"
        delay={0.1}
      />
      <div
        className="text-[8px] font-mono text-center px-1 py-0.5 rounded"
        style={{
          color: DISPLAY_COLORS.zoneMuted,
          backgroundColor: `${DISPLAY_COLORS.border}20`,
        }}
      >
        EDIT
      </div>

      {/* Serial/Parallel mode */}
      <div className="mt-auto">
        <span
          className="text-[8px] font-mono"
          style={{ color: DISPLAY_COLORS.zoneMuted }}
        >
          SERIAL▼
        </span>
      </div>
    </div>
  );
}

/** Signal routing diagram — center area */
function RoutingDiagram() {
  return (
    <div className="flex flex-col flex-1 min-w-0 px-2 py-1 gap-1.5">
      {/* Top row: IFX1 → IFX2 */}
      <div className="flex items-center gap-1 justify-center">
        <EffectBlock label="IFX1" hasEdit delay={0.1} />
        <Arrow />
        <EffectBlock label="IFX2" hasEdit delay={0.15} />
      </div>

      {/* Center: MAIN path label */}
      <div className="flex items-center justify-center">
        <span
          className="text-[9px] font-mono px-2 py-px rounded"
          style={{
            color: DISPLAY_COLORS.header,
            backgroundColor: `${DISPLAY_COLORS.header}15`,
            border: `1px solid ${DISPLAY_COLORS.header}30`,
          }}
        >
          MAIN
        </span>
      </div>

      {/* Bottom row: CHORUS / REVERB */}
      <div className="flex items-center gap-2 justify-center">
        <EffectBlock label="CHORUS" hasEdit delay={0.2} />
        <EffectBlock label="REVERB" hasEdit delay={0.25} />
      </div>

      {/* Effect type info */}
      <div
        className="flex items-center gap-2 mt-auto pt-1"
        style={{ borderTop: `1px solid ${DISPLAY_COLORS.border}20` }}
      >
        <span className="text-[8px] font-mono" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          MFX:---
        </span>
        <span className="text-[8px] font-mono" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          IFX1:---
        </span>
        <span className="text-[8px] font-mono" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          IFX2:---
        </span>
      </div>
    </div>
  );
}

/** Master FX panel — right side */
function MasterFxPanel() {
  return (
    <div
      className="flex flex-col gap-1 px-1.5 py-1 flex-shrink-0"
      style={{
        borderLeft: `1px solid ${DISPLAY_COLORS.border}40`,
        width: 60,
      }}
    >
      <span
        className="text-[8px] font-mono font-bold text-center"
        style={{ color: DISPLAY_COLORS.header }}
      >
        MASTER FX
      </span>
      <EffectBlock label="M.COMP" variant="master" delay={0.1} />
      <EffectBlock label="CHORUS" variant="master" hasEdit delay={0.15} />
      <EffectBlock label="TFX" variant="master" hasEdit delay={0.2} />
      <EffectBlock label="REVERB" variant="master" hasEdit delay={0.25} />
    </div>
  );
}

/** Placeholder for non-INTERNAL tabs */
function PlaceholderTab({ tabName }: { tabName: string }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <span className="text-[10px] font-mono" style={{ color: DISPLAY_COLORS.zoneMuted }}>
        {tabName} routing
      </span>
    </div>
  );
}

export default function EffectsEditScreen({
  zones = [],
  activeTab = 'INTERNAL',
  selectedIndex = 0,
}: EffectsEditScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top: Tab bar */}
      <TabBar activeTab={activeTab} />

      {/* Main content */}
      <div className="flex flex-1 min-h-0">
        {activeTab === 'INTERNAL' ? (
          <>
            {/* Left: Zone panel */}
            {zones.length > 0 && (
              <ZonePanel zones={zones} selectedIndex={selectedIndex} />
            )}

            {/* Center: Signal routing diagram */}
            <RoutingDiagram />

            {/* Right: Master FX panel */}
            <MasterFxPanel />
          </>
        ) : (
          <PlaceholderTab tabName={activeTab} />
        )}
      </div>

      {/* Footer — E-knob hints */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-2">
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E1:Cursor
          </span>
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E6:Value
          </span>
        </div>
      </div>
    </div>
  );
}
