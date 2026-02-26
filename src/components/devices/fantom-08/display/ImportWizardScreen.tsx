'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * IMPORT WIZARD screen — Multi-step import workflow (manual p.152-155).
 *
 * Steps:
 * 1. SELECT FILE — Choose file from USB/Internal
 * 2. SELECT SOURCE — Checkbox list of items to import ("Number marked / Number of items")
 * 3. SELECT DESTINATION — Checkbox list of destination slots
 * 4. EXECUTE — Confirmation + progress
 *
 * Used for: IMPORT TONE, IMPORT SCENE, IMPORT SAMPLE
 */

interface ImportWizardScreenProps {
  selectedIndex?: number;
  activeTab?: string;
}

const DEMO_ITEMS = [
  { name: '001: Grand Piano', checked: true },
  { name: '002: Bright Piano', checked: true },
  { name: '003: Stage EP', checked: false },
  { name: '004: FM EP', checked: false },
  { name: '005: Pad Strings', checked: true },
  { name: '006: Warm Pad', checked: false },
];

const STEPS = ['SELECT FILE', 'SELECT SOURCE', 'SELECT DEST', 'EXECUTE'];

export default function ImportWizardScreen({
  selectedIndex = 1,
  activeTab = 'SELECT SOURCE',
}: ImportWizardScreenProps) {
  const activeStepIndex = STEPS.indexOf(activeTab);
  const resolvedStep = activeStepIndex >= 0 ? activeStepIndex : 1;

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
          IMPORT TONE
        </span>
        <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          {DEMO_ITEMS.filter((i) => i.checked).length} marked / {DEMO_ITEMS.length} items
        </span>
      </div>

      {/* Checkbox list */}
      <div className="flex-1 overflow-auto">
        {DEMO_ITEMS.map((item, i) => {
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
        })}
      </div>

      {/* Footer: SELECT ALL / CANCEL / NEXT */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[7px] px-1.5 py-0.5 rounded"
          style={{
            color: DISPLAY_COLORS.text,
            border: `1px solid ${DISPLAY_COLORS.border}40`,
          }}
        >
          SELECT ALL
        </span>
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
            NEXT &#9654;
          </span>
        </div>
      </div>
    </div>
  );
}
