'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

interface WriteScreenProps {
  confirmText?: string;
  sceneName?: string;
  sceneNumber?: string;
}

export default function WriteScreen({ confirmText, sceneName, sceneNumber }: WriteScreenProps) {
  const sourceLabel = sceneNumber && sceneName
    ? `${sceneNumber}: ${sceneName}`
    : confirmText ?? 'Current Scene';
  const destLabel = sourceLabel;

  return (
    <div className="flex flex-col h-full p-3 font-mono">
      {/* Source */}
      <div className="mb-1">
        <span className="text-[11px] tracking-wider" style={{ color: DISPLAY_COLORS.header }}>
          WRITE SOURCE
        </span>
      </div>
      <div
        className="px-3 py-1.5 rounded mb-2"
        style={{
          backgroundColor: `${DISPLAY_COLORS.border}40`,
          border: `1px solid ${DISPLAY_COLORS.border}`,
        }}
      >
        <span className="text-[10px]" style={{ color: DISPLAY_COLORS.text }}>
          {sourceLabel}
        </span>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-1">
        <motion.span
          className="text-sm"
          style={{ color: DISPLAY_COLORS.active }}
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          &#9660;
        </motion.span>
      </div>

      {/* Destination */}
      <div className="mb-1">
        <span className="text-[11px] tracking-wider" style={{ color: DISPLAY_COLORS.header }}>
          WRITE DESTINATION
        </span>
      </div>
      <motion.div
        className="px-3 py-1.5 rounded mb-3"
        style={{
          backgroundColor: `${DISPLAY_COLORS.active}15`,
          border: `1px solid ${DISPLAY_COLORS.active}60`,
        }}
        animate={{
          borderColor: [`${DISPLAY_COLORS.active}60`, `${DISPLAY_COLORS.active}`, `${DISPLAY_COLORS.active}60`],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-[10px] font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
          {destLabel}
        </span>
      </motion.div>

      {/* Action buttons */}
      <div className="flex items-center justify-between mt-auto">
        <span
          className="text-[11px] px-2 py-1 rounded border"
          style={{
            color: DISPLAY_COLORS.header,
            borderColor: DISPLAY_COLORS.border,
          }}
        >
          RENAME
        </span>
        <div className="flex gap-2">
          <span
            className="text-[11px] px-2.5 py-1 rounded border"
            style={{
              color: DISPLAY_COLORS.warning,
              borderColor: DISPLAY_COLORS.warning,
            }}
          >
            CANCEL
          </span>
          <span
            className="text-[11px] px-3 py-1 rounded border font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              borderColor: DISPLAY_COLORS.highlight,
            }}
          >
            OK
          </span>
        </div>
      </div>
    </div>
  );
}
