'use client';

import { motion } from 'framer-motion';
import { MenuItem, ToneType } from '@/types/display';
import { DISPLAY_COLORS } from '@/lib/constants';
import ParameterTabEditor, { TabSidebar } from './shared/ParameterTabEditor';

/**
 * TONE EDIT PRO tabs per tone type — from Reference Manual p.59-63.
 *
 * Z-Core PRO (p.59): Multi-column grid with Partial 1-4 columns.
 * Drum PRO (p.60): Multi-column grid with instrument columns.
 * SN-A/SN-AP/SN-EP (p.61-63): Simple 4-tab parameter list.
 * VTW (p.61): Same as SN-A layout.
 * JP8 (p.63): Same as SN-A layout.
 */
const PRO_TABS: Record<ToneType, readonly string[]> = {
  'Z-CORE': [
    'COMMON', 'STRUCTURE', 'KEYBOARD', 'OSC', 'Pitch', 'PITCH ENV',
    'FILTER', 'FILTER ENV', 'AMP', 'AMP ENV', 'LFO Dest', 'LFO1', 'LFO2',
    'STEP LFO1', 'STEP LFO2', 'PARTIAL EQ', 'OUTPUT', 'CONTROL',
    'MATRIX CTRL', 'MFX', 'MFX CTRL',
  ],
  'DRUM': [
    'KIT COMMON', 'KIT MFX', 'KIT MFX CTRL', 'KIT COMP1', 'KIT COMP2',
    'KIT COMP3', 'KIT COMP4', 'KIT COMP5', 'KIT COMP6',
    'KEY PARAM', 'KEY EQ', 'INST COMMON', 'INST WAVE', 'INST WMT',
    'PITCH ENV', 'INST FILTER', 'FILTER ENV', 'INST AMP', 'AMP ENV',
  ],
  'SN-A': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'VTW': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'SN-AP': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'SN-EP': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'JP8': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
};

/** Tone types that use multi-column grid (partials/instruments as columns) */
const GRID_TYPES: ToneType[] = ['Z-CORE', 'DRUM'];

interface ToneEditProScreenProps {
  toneType?: ToneType;
  activeTab?: string;
  parameters?: MenuItem[];
  selectedIndex?: number;
  selectedPartial?: number;
}

/** Column headers for grid-based PRO screens */
function getGridHeaders(toneType: ToneType): string[] {
  if (toneType === 'Z-CORE') return ['Partial1', 'Partial2', 'Partial3', 'Partial4'];
  if (toneType === 'DRUM') return ['Inst1', 'Inst2', 'Inst3', 'Inst4'];
  return [];
}

/**
 * Grid-based PRO view for Z-Core and Drum tone types.
 * Displays parameter rows with values across partial/instrument columns.
 * Layout matches ZoneEditScreen pattern (manual p.59-60).
 */
function GridProView({
  tabs,
  activeTab,
  parameters = [],
  selectedIndex = 0,
  selectedPartial = 0,
  toneType,
}: {
  tabs: readonly string[];
  activeTab: string;
  parameters: MenuItem[];
  selectedIndex: number;
  selectedPartial: number;
  toneType: ToneType;
}) {
  const headers = getGridHeaders(toneType);

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Main content: tab sidebar + grid */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Tab sidebar */}
        <TabSidebar tabs={tabs} activeTab={activeTab} width={68} fontSize="text-[9px]" />

        {/* Right: Parameter grid */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Tab header */}
          <div
            className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}15`,
            }}
          >
            <span className="text-[10px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
              {activeTab}
            </span>
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

          {/* Column headers */}
          <div
            className="flex items-center px-1.5 py-[2px] flex-shrink-0"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
              backgroundColor: `${DISPLAY_COLORS.border}10`,
            }}
          >
            <span
              className="text-[8px] font-bold flex-shrink-0"
              style={{ color: DISPLAY_COLORS.header, width: 60 }}
            />
            {headers.map((h, ci) => (
              <span
                key={h}
                className="text-[8px] font-bold flex-1 text-center truncate"
                style={{
                  color: ci === selectedPartial
                    ? DISPLAY_COLORS.highlight
                    : DISPLAY_COLORS.header,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Parameter rows */}
          <div className="flex-1 overflow-auto">
            {parameters.length > 0 ? (
              parameters.map((param, index) => {
                const isSelected = param.selected ?? index === selectedIndex;
                const values = param.values ?? [];
                return (
                  <motion.div
                    key={`${param.label}-${index}`}
                    className="flex items-center px-1.5 py-[2px]"
                    style={{
                      backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                      borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
                    }}
                    initial={{ opacity: 0, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.12, delay: index * 0.025 }}
                  >
                    <span
                      className="text-[9px] flex-shrink-0 truncate"
                      style={{
                        color: isSelected ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted,
                        width: 60,
                      }}
                    >
                      {param.label}
                    </span>
                    {values.length > 0
                      ? values.map((v, vi) => (
                          <span
                            key={vi}
                            className="text-[9px] flex-1 text-center truncate"
                            style={{
                              color:
                                isSelected && vi === selectedPartial
                                  ? DISPLAY_COLORS.highlight
                                  : DISPLAY_COLORS.text,
                            }}
                          >
                            {v.trim()}
                          </span>
                        ))
                      : headers.map((_, vi) => (
                          <span
                            key={vi}
                            className="text-[9px] flex-1 text-center"
                            style={{ color: DISPLAY_COLORS.zoneMuted }}
                          >
                            ---
                          </span>
                        ))}
                  </motion.div>
                );
              })
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                  No parameters
                </span>
              </div>
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
                To ZOOM
              </span>
              <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                UTILITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ToneEditProScreen({
  toneType = 'Z-CORE',
  activeTab,
  parameters = [],
  selectedIndex = 0,
  selectedPartial = 0,
}: ToneEditProScreenProps) {
  const tabs = PRO_TABS[toneType] ?? PRO_TABS['Z-CORE'];
  const defaultTab = tabs[0];
  const currentTab = activeTab ?? defaultTab;

  // Grid-based types (Z-Core, Drum) use multi-column layout
  if (GRID_TYPES.includes(toneType)) {
    return (
      <GridProView
        tabs={tabs}
        activeTab={currentTab}
        parameters={parameters}
        selectedIndex={selectedIndex}
        selectedPartial={selectedPartial}
        toneType={toneType}
      />
    );
  }

  // Simple types (SN-A, SN-AP, SN-EP, VTW, JP8) use ParameterTabEditor
  return (
    <ParameterTabEditor
      tabs={tabs}
      activeTab={currentTab}
      parameters={parameters}
      selectedIndex={selectedIndex}
      eKnobHints={{
        left: ['E1:Tab', 'E2:Cursor'],
        right: ['E6:Value'],
      }}
    />
  );
}
