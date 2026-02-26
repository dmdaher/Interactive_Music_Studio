'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

export interface GridCell {
  label: string;
  color?: string;
  enabled?: boolean;
  active?: boolean;
}

interface GridSelectorProps {
  /** Row labels (left header column) */
  rowLabels: string[];
  /** Column labels (top header row) */
  columnLabels: string[];
  /** Cell data indexed [row][col] — if absent, renders empty cells */
  cells?: GridCell[][];
  /** Currently selected cell [row, col] */
  selectedCell?: [number, number];
  /** Grid title shown in top-left corner */
  title?: string;
  /** Row label width in px (default 32) */
  rowLabelWidth?: number;
  /** Optional footer content */
  footer?: React.ReactNode;
}

/**
 * GridSelector — reusable N×M grid of selectable cells.
 *
 * Used for: Pattern track×variation grids, pad mode grids, scene chain grids.
 * Each cell can have a label, color, and enabled/active state.
 */
export default function GridSelector({
  rowLabels,
  columnLabels,
  cells,
  selectedCell,
  title,
  rowLabelWidth = 32,
  footer,
}: GridSelectorProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Column header row */}
      <div
        className="flex items-center flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        {/* Corner / title */}
        <div
          className="flex-shrink-0 px-1 py-[2px]"
          style={{ width: rowLabelWidth }}
        >
          {title && (
            <span
              className="text-[8px] font-bold"
              style={{ color: DISPLAY_COLORS.header }}
            >
              {title}
            </span>
          )}
        </div>
        {/* Column labels */}
        {columnLabels.map((col, ci) => (
          <div
            key={`col-${ci}`}
            className="flex-1 text-center px-0.5 py-[2px]"
          >
            <span
              className="text-[8px] font-bold"
              style={{ color: DISPLAY_COLORS.header }}
            >
              {col}
            </span>
          </div>
        ))}
      </div>

      {/* Grid body */}
      <div className="flex-1 overflow-auto">
        {rowLabels.map((rowLabel, ri) => (
          <motion.div
            key={`row-${ri}`}
            className="flex items-center"
            style={{
              borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
            }}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1, delay: ri * 0.02 }}
          >
            {/* Row label */}
            <div
              className="flex-shrink-0 px-1 py-[2px]"
              style={{ width: rowLabelWidth }}
            >
              <span
                className="text-[9px] font-bold"
                style={{ color: DISPLAY_COLORS.text }}
              >
                {rowLabel}
              </span>
            </div>

            {/* Cells */}
            {columnLabels.map((_, ci) => {
              const cell = cells?.[ri]?.[ci];
              const isSelected =
                selectedCell?.[0] === ri && selectedCell?.[1] === ci;
              const cellColor = cell?.color ?? DISPLAY_COLORS.border;
              const isEnabled = cell?.enabled ?? true;
              const isActive = cell?.active ?? false;

              return (
                <div
                  key={`cell-${ri}-${ci}`}
                  className="flex-1 flex items-center justify-center px-0.5 py-[3px]"
                >
                  <div
                    className="w-full text-center px-1 py-[2px] rounded"
                    style={{
                      backgroundColor: isActive
                        ? `${cellColor}30`
                        : isEnabled
                          ? `${cellColor}15`
                          : 'transparent',
                      border: isSelected
                        ? `1px solid ${DISPLAY_COLORS.active}`
                        : `1px solid ${isEnabled ? cellColor + '30' : DISPLAY_COLORS.border + '20'}`,
                      opacity: isEnabled ? 1 : 0.4,
                    }}
                  >
                    <span
                      className="text-[8px]"
                      style={{
                        color: isSelected
                          ? DISPLAY_COLORS.highlight
                          : isActive
                            ? cellColor
                            : DISPLAY_COLORS.text,
                      }}
                    >
                      {cell?.label ?? '---'}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* Optional footer */}
      {footer && (
        <div
          className="flex items-center px-2 py-0.5 flex-shrink-0"
          style={{
            borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
            backgroundColor: `${DISPLAY_COLORS.border}15`,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
