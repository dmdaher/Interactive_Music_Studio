'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

interface ConfirmDialogProps {
  /** Main message text */
  message: string;
  /** Optional secondary detail text */
  detail?: string;
  /** Button labels (default ['CANCEL', 'OK']) */
  buttons?: string[];
  /** Index of the highlighted/focused button */
  focusedButton?: number;
}

/**
 * ConfirmDialog — message + OK/CANCEL overlay.
 *
 * Used for: ~15 confirm dialogs across the Fantom 08 including
 * Scene Write confirmation, Delete confirmation, Initialize confirmation.
 * Renders as a centered modal-style overlay within the display area.
 */
export default function ConfirmDialog({
  message,
  detail,
  buttons = ['CANCEL', 'OK'],
  focusedButton = 1,
}: ConfirmDialogProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full font-mono px-4">
      <motion.div
        className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg w-full max-w-[200px]"
        style={{
          backgroundColor: `${DISPLAY_COLORS.backgroundDark}e0`,
          border: `1px solid ${DISPLAY_COLORS.border}80`,
          boxShadow: `0 2px 8px rgba(0,0,0,0.4)`,
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        {/* Message */}
        <span
          className="text-[11px] text-center leading-tight"
          style={{ color: DISPLAY_COLORS.text }}
        >
          {message}
        </span>

        {/* Detail */}
        {detail && (
          <span
            className="text-[10px] text-center"
            style={{ color: DISPLAY_COLORS.zoneMuted }}
          >
            {detail}
          </span>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          {buttons.map((btn, i) => {
            const isFocused = i === focusedButton;
            return (
              <motion.span
                key={btn}
                className="text-[11px] px-2 py-0.5 rounded border font-bold"
                style={{
                  color: isFocused
                    ? btn === 'OK'
                      ? DISPLAY_COLORS.highlight
                      : DISPLAY_COLORS.warning
                    : DISPLAY_COLORS.zoneMuted,
                  borderColor: isFocused
                    ? btn === 'OK'
                      ? `${DISPLAY_COLORS.highlight}60`
                      : `${DISPLAY_COLORS.warning}60`
                    : `${DISPLAY_COLORS.border}40`,
                  backgroundColor: isFocused
                    ? `${DISPLAY_COLORS.active}15`
                    : 'transparent',
                }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.05 }}
              >
                {btn}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
