'use client';

import { motion } from 'framer-motion';
import { ZoneDisplayInfo } from '@/types/display';
import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';

/**
 * ZONE EDIT tabs as documented in the Reference Manual p.54-55.
 *
 * INT settings — controls for the internal sound engine:
 *   TONE, LEVEL/PAN, KEY RANGE, VEL RANGE, EQ, PITCH,
 *   SCALE TUNE, VIBRATO, OFFSET, MONO/POLY, PEDAL CTRL,
 *   BEND CTRL, S1S2 CTRL, ASSIGN KNOB, ASSIGN SLIDER,
 *   VOICE RESERVE, MIDI Rx FILTER
 *
 * EXT settings — controls for external sound modules:
 *   NAME, OUT/PC, LEVEL/PAN, KEY RANGE, VEL RANGE, PITCH,
 *   OFFSET, MONO/POLY, PEDAL CTRL, BEND CTRL, S1S2 CTRL,
 *   ASSIGN KNOB, ASSIGN SLIDER
 */
const INT_TABS = [
  'TONE',
  'LEVEL/PAN',
  'KEY RANGE',
  'VEL RANGE',
  'EQ',
  'PITCH',
  'SCALE TUNE',
  'VIBRATO',
  'OFFSET',
  'MONO/POLY',
  'PEDAL CTRL',
  'BEND CTRL',
  'S1S2 CTRL',
  'ASSIGN KNOB',
  'ASSIGN SLIDER',
  'VOICE RESERVE',
  'MIDI Rx FILTER',
] as const;

const EXT_TABS = [
  'NAME',
  'OUT/PC',
  'LEVEL/PAN',
  'KEY RANGE',
  'VEL RANGE',
  'PITCH',
  'OFFSET',
  'MONO/POLY',
  'PEDAL CTRL',
  'BEND CTRL',
  'S1S2 CTRL',
  'ASSIGN KNOB',
  'ASSIGN SLIDER',
] as const;

interface ZoneEditScreenProps {
  zones?: ZoneDisplayInfo[];
  activeTab?: string;
  category?: 'INT' | 'EXT';
  selectedIndex?: number;
}

/** Category toggle — INT / EXT at the top */
function CategoryToggle({
  category,
  activeTab,
}: {
  category: 'INT' | 'EXT';
  activeTab: string;
}) {
  return (
    <div
      className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
      style={{
        borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
        backgroundColor: `${DISPLAY_COLORS.border}15`,
      }}
    >
      <div className="flex items-center gap-1">
        {(['INT', 'EXT'] as const).map((cat) => (
          <span
            key={cat}
            className="text-[10px] font-mono font-bold px-1.5 py-px rounded"
            style={{
              color: cat === category ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              backgroundColor: cat === category ? `${DISPLAY_COLORS.active}20` : 'transparent',
              border: `1px solid ${cat === category ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '30'}`,
            }}
          >
            {cat}
          </span>
        ))}
        <span
          className="text-[10px] font-mono font-bold ml-2"
          style={{ color: DISPLAY_COLORS.header }}
        >
          {activeTab}
        </span>
      </div>
      <span
        className="text-[9px] px-1 py-px rounded"
        style={{
          color: DISPLAY_COLORS.zoneMuted,
          backgroundColor: `${DISPLAY_COLORS.border}40`,
        }}
      >
        UTILITY
      </span>
    </div>
  );
}

/** Tab sidebar — left column with scrollable tabs */
function TabSidebar({
  tabs,
  activeTab,
}: {
  tabs: readonly string[];
  activeTab: string;
}) {
  return (
    <div
      className="flex flex-col flex-shrink-0 border-r overflow-auto"
      style={{
        borderColor: `${DISPLAY_COLORS.border}60`,
        width: 72,
      }}
    >
      {tabs.map((tab, i) => {
        const isActive = tab === activeTab;
        return (
          <motion.div
            key={tab}
            className="flex items-center justify-between px-1.5 py-[2px]"
            style={{
              backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
              borderLeft: isActive
                ? `2px solid ${DISPLAY_COLORS.active}`
                : '2px solid transparent',
              borderBottom: `1px solid ${DISPLAY_COLORS.border}20`,
            }}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.12, delay: i * 0.02 }}
          >
            <span
              className="text-[9px] font-mono truncate"
              style={{
                color: isActive ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              }}
            >
              {tab}
            </span>
            {isActive && (
              <span className="text-[8px] ml-0.5" style={{ color: DISPLAY_COLORS.active }}>
                ◄
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/** Returns the grid columns and cell values based on the active tab */
function getGridColumns(
  tab: string
): { headers: string[]; getCells: (z: ZoneDisplayInfo) => string[] } {
  switch (tab) {
    case 'TONE':
      return {
        headers: ['Type', 'Bank', 'Tone'],
        getCells: (z) => [
          z.toneType ?? 'Z-Core',
          z.toneBank ?? 'PR-A',
          z.toneName,
        ],
      };
    case 'LEVEL/PAN':
      return {
        headers: ['Level', 'Pan'],
        getCells: (z) => [
          String(z.volume),
          z.pan === 0 ? 'C' : z.pan > 0 ? `R${z.pan}` : `L${Math.abs(z.pan)}`,
        ],
      };
    case 'KEY RANGE':
      return {
        headers: ['Low', 'High'],
        getCells: (z) => [z.keyRangeLow, z.keyRangeHigh],
      };
    default:
      return {
        headers: ['Value'],
        getCells: () => ['---'],
      };
  }
}

/** Zone parameter grid — right side with zone rows × parameter columns */
function ZoneGrid({
  zones,
  activeTab,
  selectedIndex = 0,
}: {
  zones: ZoneDisplayInfo[];
  activeTab: string;
  selectedIndex?: number;
}) {
  const { headers, getCells } = getGridColumns(activeTab);

  return (
    <div className="flex-1 overflow-auto">
      {/* Column header row */}
      <div
        className="flex items-center px-1.5 py-[2px]"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        <span
          className="text-[9px] font-mono font-bold flex-shrink-0"
          style={{ color: DISPLAY_COLORS.header, width: 20 }}
        >
          Z
        </span>
        {headers.map((h) => (
          <span
            key={h}
            className="text-[9px] font-mono font-bold flex-1 truncate"
            style={{ color: DISPLAY_COLORS.header }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Zone rows */}
      {zones.map((zone, index) => {
        const isSelected = index === selectedIndex;
        const zoneColor = ZONE_COLOR_MAP[((zone.zoneNumber - 1) % 8) + 1] ?? DISPLAY_COLORS.text;
        const cells = getCells(zone);

        return (
          <motion.div
            key={zone.zoneNumber}
            className="flex items-center px-1.5 py-[2px]"
            style={{
              backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
              borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
              borderLeft: isSelected
                ? `2px solid ${DISPLAY_COLORS.active}`
                : `2px solid transparent`,
              opacity: zone.active ? 1 : 0.4,
            }}
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: zone.active ? 1 : 0.4, x: 0 }}
            transition={{ duration: 0.12, delay: index * 0.025 }}
          >
            {/* Zone number with zone color */}
            <span
              className="text-[10px] font-mono font-bold flex-shrink-0"
              style={{ color: zoneColor, width: 20 }}
            >
              {zone.zoneNumber}
            </span>

            {/* Cell values */}
            {cells.map((cell, ci) => (
              <span
                key={ci}
                className="text-[10px] font-mono flex-1 truncate"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {cell}
              </span>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ZoneEditScreen({
  zones = [],
  activeTab = 'TONE',
  category = 'INT',
  selectedIndex = 0,
}: ZoneEditScreenProps) {
  const tabs = category === 'INT' ? INT_TABS : EXT_TABS;

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top: INT/EXT toggle + active tab label */}
      <CategoryToggle category={category} activeTab={activeTab} />

      {/* Main content: tab sidebar + zone grid */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Tab sidebar */}
        <TabSidebar tabs={tabs} activeTab={activeTab} />

        {/* Right: Zone parameter grid */}
        <div className="flex flex-col flex-1 min-w-0">
          {zones.length > 0 ? (
            <ZoneGrid zones={zones} activeTab={activeTab} selectedIndex={selectedIndex} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                No zone data
              </span>
            </div>
          )}

          {/* Footer — E-knob hints (per manual p.54) */}
          <div
            className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
            style={{
              borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}15`,
            }}
          >
            <div className="flex gap-2">
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                E1:Tab
              </span>
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                E2:↕
              </span>
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                E3:↔
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                NUMERIC
              </span>
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                DEC/INC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
