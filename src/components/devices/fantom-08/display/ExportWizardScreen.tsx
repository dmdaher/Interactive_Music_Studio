'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * EXPORT WIZARD screen — Multi-step export workflow (manual p.155-157).
 *
 * Steps:
 * 1. SELECT SOURCE — Checkbox list of items to export
 * 2. SELECT DESTINATION — Folder tree + Export Name field
 * 3. EXECUTE — Confirmation
 *
 * Used for: EXPORT TONE, EXPORT SCENE, EXPORT SAMPLE
 */

interface ExportWizardScreenProps {
  selectedIndex?: number;
  activeTab?: string;
}

const DEMO_SOURCE_ITEMS = [
  { name: '001: Grand Piano', checked: true },
  { name: '002: Bright Piano', checked: false },
  { name: '003: Stage EP', checked: true },
  { name: '004: FM EP', checked: false },
];

const DEMO_DEST_FOLDERS = [
  { name: 'USB MEMORY', depth: 0, expanded: true },
  { name: 'ROLAND', depth: 1, expanded: true },
  { name: 'FANTOM-0', depth: 2, expanded: false },
];

const STEPS = ['SELECT SOURCE', 'SELECT DEST', 'EXECUTE'];

export default function ExportWizardScreen({
  selectedIndex = 0,
  activeTab = 'SELECT SOURCE',
}: ExportWizardScreenProps) {
  const activeStepIndex = STEPS.indexOf(activeTab);
  const resolvedStep = activeStepIndex >= 0 ? activeStepIndex : 0;
  const isDestStep = resolvedStep === 1;

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Step indicator */}
      <div
        className="flex items-center gap-1 px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        {STEPS.map((step, i) => {
          const isCurrent = i === resolvedStep;
          const isCompleted = i < resolvedStep;
          return (
            <div key={step} className="flex items-center gap-0.5">
              <span
                className="text-[7px] px-1.5 py-0.5 rounded"
                style={{
                  color: isCurrent
                    ? DISPLAY_COLORS.highlight
                    : isCompleted
                      ? DISPLAY_COLORS.active
                      : DISPLAY_COLORS.zoneMuted,
                  backgroundColor: isCurrent ? `${DISPLAY_COLORS.active}20` : 'transparent',
                  border: `1px solid ${isCurrent ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '25'}`,
                  fontWeight: isCurrent ? 'bold' : 'normal',
                }}
              >
                {i + 1}. {step}
              </span>
              {i < STEPS.length - 1 && (
                <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                  &#9654;
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary line */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
        }}
      >
        <span className="text-[8px]" style={{ color: DISPLAY_COLORS.text }}>
          EXPORT TONE
        </span>
        <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          {isDestStep
            ? 'Choose destination folder'
            : `${DEMO_SOURCE_ITEMS.filter((i) => i.checked).length} marked / ${DEMO_SOURCE_ITEMS.length} items`}
        </span>
      </div>

      {/* Content area — source checkboxes OR destination folder tree */}
      <div className="flex-1 overflow-auto">
        {isDestStep ? (
          <>
            {/* Folder tree */}
            {DEMO_DEST_FOLDERS.map((folder, i) => {
              const isSelected = i === selectedIndex;
              const indent = folder.depth * 12;
              const icon = folder.expanded ? '\u25BC' : '\u25B6';

              return (
                <motion.div
                  key={`${folder.name}-${i}`}
                  className="flex items-center py-[2px]"
                  style={{
                    paddingLeft: 8 + indent,
                    backgroundColor: isSelected ? `${DISPLAY_COLORS.active}20` : 'transparent',
                    borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
                  }}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.08, delay: i * 0.03 }}
                >
                  <span
                    className="text-[7px] mr-1"
                    style={{ color: DISPLAY_COLORS.zoneMuted }}
                  >
                    {icon}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{
                      color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                      fontWeight: isSelected ? 'bold' : 'normal',
                    }}
                  >
                    {folder.name}
                  </span>
                </motion.div>
              );
            })}

            {/* Export Name field */}
            <div
              className="mx-2 mt-2 px-2 py-1 rounded"
              style={{
                border: `1px solid ${DISPLAY_COLORS.active}40`,
                backgroundColor: `${DISPLAY_COLORS.border}15`,
              }}
            >
              <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                Export Name
              </span>
              <div
                className="text-[9px] font-bold mt-0.5"
                style={{ color: DISPLAY_COLORS.highlight }}
              >
                TONE_EXPORT_001
              </div>
            </div>
          </>
        ) : (
          /* Source checkbox list */
          DEMO_SOURCE_ITEMS.map((item, i) => {
            const isSelected = i === selectedIndex;
            return (
              <motion.div
                key={item.name}
                className="flex items-center gap-2 px-2 py-[3px]"
                style={{
                  backgroundColor: isSelected ? `${DISPLAY_COLORS.active}20` : 'transparent',
                  borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
                  borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
                }}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.06, delay: i * 0.03 }}
              >
                {/* Checkbox */}
                <div
                  className="flex items-center justify-center rounded-sm"
                  style={{
                    width: 12,
                    height: 12,
                    border: `1px solid ${item.checked ? DISPLAY_COLORS.active : DISPLAY_COLORS.border}60`,
                    backgroundColor: item.checked ? `${DISPLAY_COLORS.active}30` : 'transparent',
                  }}
                >
                  {item.checked && (
                    <span className="text-[8px]" style={{ color: DISPLAY_COLORS.highlight }}>
                      &#10003;
                    </span>
                  )}
                </div>

                <span
                  className="text-[9px]"
                  style={{
                    color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                  }}
                >
                  {item.name}
                </span>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {isDestStep ? (
          <span
            className="text-[7px] px-1.5 py-0.5 rounded"
            style={{
              color: DISPLAY_COLORS.text,
              border: `1px solid ${DISPLAY_COLORS.border}40`,
            }}
          >
            RENAME
          </span>
        ) : (
          <span
            className="text-[7px] px-1.5 py-0.5 rounded"
            style={{
              color: DISPLAY_COLORS.text,
              border: `1px solid ${DISPLAY_COLORS.border}40`,
            }}
          >
            SELECT ALL
          </span>
        )}
        <div className="flex gap-2">
          <span
            className="text-[8px] px-2 py-0.5 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              border: `1px solid ${DISPLAY_COLORS.warning}50`,
            }}
          >
            CANCEL
          </span>
          <span
            className="text-[8px] px-2 py-0.5 rounded font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              border: `1px solid ${DISPLAY_COLORS.highlight}50`,
            }}
          >
            {isDestStep ? 'EXECUTE' : 'NEXT \u25B6'}
          </span>
        </div>
      </div>
    </div>
  );
}
