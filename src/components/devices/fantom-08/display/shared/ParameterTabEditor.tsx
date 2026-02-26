'use client';

import { motion } from 'framer-motion';
import { MenuItem } from '@/types/display';
import { DISPLAY_COLORS } from '@/lib/constants';

interface ParameterTabEditorProps {
  tabs: readonly string[];
  activeTab: string;
  parameters?: MenuItem[];
  selectedIndex?: number;
  /** Optional E-knob hint labels shown in footer */
  eKnobHints?: { left: string[]; right: string[] };
  /** Optional element rendered in the tab header's right side */
  headerRight?: React.ReactNode;
  /** Optional label shown above tabs (e.g., category toggle) */
  headerTop?: React.ReactNode;
  /** Tab sidebar width in px (default 72) */
  tabWidth?: number;
  /** Tab font size class (default 'text-[10px]') */
  tabFontSize?: string;
  /** Empty state message */
  emptyMessage?: string;
}

/** Tab sidebar — left column with selectable tabs */
export function TabSidebar({
  tabs,
  activeTab,
  width = 72,
  fontSize = 'text-[10px]',
}: {
  tabs: readonly string[];
  activeTab: string;
  width?: number;
  fontSize?: string;
}) {
  return (
    <div
      className="flex flex-col flex-shrink-0 border-r overflow-auto"
      style={{
        borderColor: `${DISPLAY_COLORS.border}60`,
        width,
      }}
    >
      {tabs.map((tab, i) => {
        const isActive = tab === activeTab;
        return (
          <motion.div
            key={tab}
            className="flex items-center justify-between px-1.5 py-[3px]"
            style={{
              backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
              borderLeft: isActive ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
              borderBottom: `1px solid ${DISPLAY_COLORS.border}20`,
            }}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.12, delay: i * 0.02 }}
          >
            <span
              className={`${fontSize} font-mono truncate`}
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

/** Parameter list — scrollable name-value rows */
export function ParameterList({
  parameters,
  selectedIndex = 0,
}: {
  parameters: MenuItem[];
  selectedIndex?: number;
}) {
  return (
    <div className="flex-1 overflow-auto">
      {parameters.map((param, index) => {
        const isSelected = param.selected ?? index === selectedIndex;
        return (
          <motion.div
            key={`${param.label}-${index}`}
            className="flex items-center justify-between px-2 py-[3px]"
            style={{
              backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
              borderBottom: `1px solid ${DISPLAY_COLORS.border}20`,
            }}
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.12, delay: index * 0.03 }}
          >
            <span
              className="text-[11px] font-mono"
              style={{
                color: isSelected ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted,
              }}
            >
              {param.label}
            </span>
            {param.value != null && (
              <span
                className="text-[11px] font-mono font-bold"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {param.value}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/** Tab header bar — shows active tab name with optional right element */
function TabHeader({
  activeTab,
  headerRight,
}: {
  activeTab: string;
  headerRight?: React.ReactNode;
}) {
  return (
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
      {headerRight ?? (
        <span
          className="text-[9px] px-1 py-px rounded"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            backgroundColor: `${DISPLAY_COLORS.border}40`,
          }}
        >
          UTILITY
        </span>
      )}
    </div>
  );
}

/** E-knob hint footer */
function EKnobFooter({
  hints,
}: {
  hints: { left: string[]; right: string[] };
}) {
  return (
    <div
      className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
      style={{
        borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
        backgroundColor: `${DISPLAY_COLORS.border}15`,
      }}
    >
      <div className="flex gap-2">
        {hints.left.map((hint) => (
          <span key={hint} className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            {hint}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {hints.right.map((hint) => (
          <span key={hint} className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            {hint}
          </span>
        ))}
      </div>
    </div>
  );
}

const DEFAULT_EKNOB_HINTS = {
  left: ['E1:Tab', 'E2:Cursor'],
  right: ['E6:Value'],
};

/**
 * ParameterTabEditor — reusable tabbed parameter editor layout.
 *
 * Composes: TabSidebar (left) + TabHeader + ParameterList (right) + EKnobFooter.
 * This is the generalized pattern extracted from SceneEditScreen and used by
 * ~40% of all Fantom 08 screens (Scene Edit, Tone Edit PRO, Zone Utility, etc.).
 */
export default function ParameterTabEditor({
  tabs,
  activeTab,
  parameters = [],
  selectedIndex = 0,
  eKnobHints = DEFAULT_EKNOB_HINTS,
  headerRight,
  headerTop,
  tabWidth = 72,
  tabFontSize = 'text-[10px]',
  emptyMessage = 'No parameters',
}: ParameterTabEditorProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Optional top header (e.g., category toggle) */}
      {headerTop}

      {/* Main content: tab sidebar + parameter area */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Tab sidebar */}
        <TabSidebar
          tabs={tabs}
          activeTab={activeTab}
          width={tabWidth}
          fontSize={tabFontSize}
        />

        {/* Right: Header + parameters + footer */}
        <div className="flex flex-col flex-1 min-w-0">
          <TabHeader activeTab={activeTab} headerRight={headerRight} />

          {parameters.length > 0 ? (
            <ParameterList parameters={parameters} selectedIndex={selectedIndex} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                {emptyMessage}
              </span>
            </div>
          )}

          <EKnobFooter hints={eKnobHints} />
        </div>
      </div>
    </div>
  );
}
