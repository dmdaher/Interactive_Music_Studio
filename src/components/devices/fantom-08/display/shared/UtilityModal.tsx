'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

export interface UtilityAction {
  label: string;
  description?: string;
  disabled?: boolean;
}

interface UtilityModalProps {
  /** Modal title */
  title: string;
  /** List of action buttons */
  actions: UtilityAction[];
  /** Selected action index */
  selectedIndex?: number;
  /** Optional status message at bottom */
  statusMessage?: string;
}

/**
 * UtilityModal — settings modal with action button list.
 *
 * Used for: ~10 utility windows including Tone Utility, Scene Utility,
 * PTN UTILITY, and various management screens. Shows a titled list
 * of selectable actions.
 */
export default function UtilityModal({
  title,
  actions,
  selectedIndex = 0,
  statusMessage,
}: UtilityModalProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Title bar */}
      <div
        className="flex items-center px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[10px] font-bold"
          style={{ color: DISPLAY_COLORS.header }}
        >
          {title}
        </span>
      </div>

      {/* Action list */}
      <div className="flex-1 overflow-auto">
        {actions.map((action, index) => {
          const isSelected = index === selectedIndex;
          return (
            <motion.div
              key={`${action.label}-${index}`}
              className="flex items-center justify-between px-2 py-[4px]"
              style={{
                backgroundColor: isSelected
                  ? `${DISPLAY_COLORS.active}15`
                  : 'transparent',
                borderLeft: isSelected
                  ? `2px solid ${DISPLAY_COLORS.active}`
                  : '2px solid transparent',
                borderBottom: `1px solid ${DISPLAY_COLORS.border}20`,
                opacity: action.disabled ? 0.4 : 1,
              }}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: action.disabled ? 0.4 : 1, x: 0 }}
              transition={{ duration: 0.12, delay: index * 0.03 }}
            >
              <span
                className="text-[11px]"
                style={{
                  color: isSelected
                    ? DISPLAY_COLORS.highlight
                    : DISPLAY_COLORS.text,
                }}
              >
                {action.label}
              </span>
              {action.description && (
                <span
                  className="text-[9px]"
                  style={{ color: DISPLAY_COLORS.zoneMuted }}
                >
                  {action.description}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Status / footer */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          {statusMessage ?? `${actions.length} actions`}
        </span>
        <div className="flex gap-2">
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E1:Cursor
          </span>
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            ENTER:Execute
          </span>
        </div>
      </div>
    </div>
  );
}
