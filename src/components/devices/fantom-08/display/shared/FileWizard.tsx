'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

export interface FileWizardStep {
  label: string;
  description?: string;
}

export interface FileItem {
  name: string;
  type?: 'file' | 'folder';
  size?: string;
  selected?: boolean;
}

interface FileWizardProps {
  /** Wizard steps (e.g., ['Select', 'Source', 'Destination']) */
  steps: FileWizardStep[];
  /** Current step index (0-based) */
  currentStep?: number;
  /** File/folder items to display in the current step */
  items?: FileItem[];
  /** Selected item index */
  selectedIndex?: number;
  /** Wizard title */
  title?: string;
  /** Optional footer buttons */
  footerButtons?: string[];
}

/**
 * FileWizard — multi-step file selection wizard.
 *
 * Used for: All import/export screens (~20 screens) including
 * SMF Import/Export, Scene Import/Export, Sample Import, Backup/Restore.
 * Shows step indicator + file list + navigation buttons.
 */
export default function FileWizard({
  steps,
  currentStep = 0,
  items = [],
  selectedIndex = 0,
  title,
  footerButtons = ['CANCEL', 'OK'],
}: FileWizardProps) {
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
        {steps.map((step, i) => {
          const isCurrent = i === currentStep;
          const isComplete = i < currentStep;
          return (
            <div key={`step-${i}`} className="flex items-center gap-1">
              {i > 0 && (
                <span
                  className="text-[8px]"
                  style={{ color: DISPLAY_COLORS.zoneMuted }}
                >
                  ›
                </span>
              )}
              <motion.span
                className="text-[9px] px-1.5 py-px rounded"
                style={{
                  color: isCurrent
                    ? DISPLAY_COLORS.highlight
                    : isComplete
                      ? DISPLAY_COLORS.text
                      : DISPLAY_COLORS.zoneMuted,
                  backgroundColor: isCurrent
                    ? `${DISPLAY_COLORS.active}20`
                    : 'transparent',
                  border: isCurrent
                    ? `1px solid ${DISPLAY_COLORS.active}40`
                    : '1px solid transparent',
                }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.05 }}
              >
                {step.label}
              </motion.span>
            </div>
          );
        })}
      </div>

      {/* Step description */}
      {steps[currentStep]?.description && (
        <div
          className="px-2 py-0.5 flex-shrink-0"
          style={{ borderBottom: `1px solid ${DISPLAY_COLORS.border}20` }}
        >
          <span className="text-[10px]" style={{ color: DISPLAY_COLORS.text }}>
            {steps[currentStep].description}
          </span>
        </div>
      )}

      {/* File list */}
      <div className="flex-1 overflow-auto">
        {items.length > 0 ? (
          items.map((item, index) => {
            const isSelected = item.selected ?? index === selectedIndex;
            const icon = item.type === 'folder' ? '📁' : '📄';

            return (
              <motion.div
                key={`${item.name}-${index}`}
                className="flex items-center justify-between px-2 py-[3px]"
                style={{
                  backgroundColor: isSelected
                    ? `${DISPLAY_COLORS.active}20`
                    : 'transparent',
                  borderLeft: isSelected
                    ? `2px solid ${DISPLAY_COLORS.active}`
                    : '2px solid transparent',
                  borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
                }}
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1, delay: index * 0.025 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]">{icon}</span>
                  <span
                    className="text-[11px]"
                    style={{
                      color: isSelected
                        ? DISPLAY_COLORS.highlight
                        : DISPLAY_COLORS.text,
                    }}
                  >
                    {item.name}
                  </span>
                </div>
                {item.size && (
                  <span
                    className="text-[9px]"
                    style={{ color: DISPLAY_COLORS.zoneMuted }}
                  >
                    {item.size}
                  </span>
                )}
              </motion.div>
            );
          })
        ) : (
          <div className="flex-1 flex items-center justify-center py-4">
            <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
              No items
            </span>
          </div>
        )}
      </div>

      {/* Footer with navigation buttons */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        {title && (
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            {title}
          </span>
        )}
        <div className="flex gap-2 ml-auto">
          {footerButtons.map((btn) => (
            <span
              key={btn}
              className="text-[10px] px-1.5 py-0.5 rounded border"
              style={{
                color:
                  btn === 'OK'
                    ? DISPLAY_COLORS.highlight
                    : btn === 'CANCEL'
                      ? DISPLAY_COLORS.warning
                      : DISPLAY_COLORS.text,
                borderColor:
                  btn === 'OK'
                    ? `${DISPLAY_COLORS.highlight}60`
                    : btn === 'CANCEL'
                      ? `${DISPLAY_COLORS.warning}60`
                      : `${DISPLAY_COLORS.border}60`,
              }}
            >
              {btn}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
