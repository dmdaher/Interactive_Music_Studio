'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

interface WriteScreenProps {
  confirmText?: string;
}

export default function WriteScreen({ confirmText }: WriteScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-4 font-mono">
      {/* Warning icon */}
      <motion.div
        className="text-2xl"
        style={{ color: DISPLAY_COLORS.warning }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        !
      </motion.div>

      {/* Confirm text */}
      <div className="text-center">
        <p className="text-xs mb-2" style={{ color: DISPLAY_COLORS.header }}>
          WRITE TO...
        </p>
        <p className="text-sm font-bold" style={{ color: DISPLAY_COLORS.text }}>
          {confirmText ?? 'Save current settings?'}
        </p>
      </div>

      {/* Action hints */}
      <div className="flex items-center gap-6 mt-2">
        <div className="flex flex-col items-center gap-0.5">
          <span
            className="text-[10px] px-3 py-1 rounded border"
            style={{
              color: DISPLAY_COLORS.highlight,
              borderColor: DISPLAY_COLORS.highlight,
            }}
          >
            ENTER
          </span>
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.text }}>
            Confirm
          </span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span
            className="text-[10px] px-3 py-1 rounded border"
            style={{
              color: DISPLAY_COLORS.warning,
              borderColor: DISPLAY_COLORS.warning,
            }}
          >
            EXIT
          </span>
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.text }}>
            Cancel
          </span>
        </div>
      </div>
    </div>
  );
}
