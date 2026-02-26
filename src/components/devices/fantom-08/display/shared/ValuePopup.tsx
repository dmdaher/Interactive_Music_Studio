'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

interface ValuePopupProps {
  /** Parameter name (e.g., 'Volume', 'Cutoff') */
  parameterName: string;
  /** Current value (e.g., '127', 'L32') */
  value: string;
  /** Optional min/max range for indicator bar */
  range?: { min: number; max: number; current: number };
  /** Optional unit label (e.g., 'dB', 'Hz') */
  unit?: string;
}

/**
 * ValuePopup — auto-dismiss parameter display.
 *
 * Used for: ~11 value popups that appear when turning knobs/sliders.
 * Shows parameter name, current value, and optional range indicator.
 * On the real Fantom, these auto-dismiss after a few seconds.
 * Reference: manual p.14 (Value Popup).
 */
export default function ValuePopup({
  parameterName,
  value,
  range,
  unit,
}: ValuePopupProps) {
  const normalizedPosition =
    range != null
      ? ((range.current - range.min) / (range.max - range.min)) * 100
      : null;

  return (
    <div className="flex items-center justify-center h-full font-mono">
      <motion.div
        className="flex flex-col items-center gap-1.5 px-6 py-3 rounded-lg"
        style={{
          backgroundColor: `${DISPLAY_COLORS.backgroundDark}e0`,
          border: `1px solid ${DISPLAY_COLORS.border}80`,
          boxShadow: `0 2px 12px rgba(0,0,0,0.5)`,
          minWidth: 140,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.12 }}
      >
        {/* Parameter name */}
        <span
          className="text-[10px] tracking-wider"
          style={{ color: DISPLAY_COLORS.zoneMuted }}
        >
          {parameterName}
        </span>

        {/* Value */}
        <span
          className="text-[16px] font-bold"
          style={{ color: DISPLAY_COLORS.highlight }}
        >
          {value}
          {unit && (
            <span
              className="text-[10px] ml-0.5 font-normal"
              style={{ color: DISPLAY_COLORS.text }}
            >
              {unit}
            </span>
          )}
        </span>

        {/* Range indicator bar */}
        {normalizedPosition != null && (
          <div className="w-full mt-1">
            <div
              className="w-full h-1.5 rounded-full"
              style={{ backgroundColor: `${DISPLAY_COLORS.border}40` }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: DISPLAY_COLORS.active,
                  width: `${normalizedPosition}%`,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${normalizedPosition}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-0.5">
              <span
                className="text-[7px]"
                style={{ color: DISPLAY_COLORS.zoneMuted }}
              >
                {range!.min}
              </span>
              <span
                className="text-[7px]"
                style={{ color: DISPLAY_COLORS.zoneMuted }}
              >
                {range!.max}
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
