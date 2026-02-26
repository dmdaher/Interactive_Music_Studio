'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

export interface TimelineTrack {
  label: string;
  color?: string;
  muted?: boolean;
  /** Regions of content within this track — each is [startMeasure, endMeasure] */
  regions?: [number, number][];
}

interface TimelineEditorProps {
  tracks: TimelineTrack[];
  /** Total number of measures visible */
  totalMeasures?: number;
  /** Currently playing measure (1-based) */
  currentMeasure?: number;
  /** Selected track index */
  selectedTrack?: number;
  /** View mode label (e.g., '8Tr', '16Tr') */
  viewMode?: string;
  /** Measure labels at top (auto-generated if not provided) */
  measureLabels?: string[];
  /** Optional footer content */
  footer?: React.ReactNode;
  /** Track label width in px (default 28) */
  trackLabelWidth?: number;
}

/**
 * TimelineEditor — track-based horizontal timeline with measure grid.
 *
 * Used for: Pattern screen, Song screen, Group screen (sequencer views).
 * Displays rows of tracks with horizontal measure divisions and optional
 * content regions within each track.
 */
export default function TimelineEditor({
  tracks,
  totalMeasures = 8,
  currentMeasure,
  selectedTrack,
  viewMode,
  measureLabels,
  footer,
  trackLabelWidth = 28,
}: TimelineEditorProps) {
  const labels =
    measureLabels ??
    Array.from({ length: totalMeasures }, (_, i) => String(i + 1));

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top bar with view mode */}
      {viewMode && (
        <div
          className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
          style={{
            borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
            backgroundColor: `${DISPLAY_COLORS.border}15`,
          }}
        >
          <span
            className="text-[9px] font-bold"
            style={{ color: DISPLAY_COLORS.header }}
          >
            {viewMode}
          </span>
          {currentMeasure != null && (
            <span
              className="text-[9px]"
              style={{ color: DISPLAY_COLORS.text }}
            >
              M:{currentMeasure}
            </span>
          )}
        </div>
      )}

      {/* Measure header row */}
      <div
        className="flex items-center flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        <div
          className="flex-shrink-0 px-0.5"
          style={{ width: trackLabelWidth }}
        />
        {labels.map((label, mi) => {
          const isCurrent = currentMeasure === mi + 1;
          return (
            <div
              key={`m-${mi}`}
              className="flex-1 text-center py-[1px]"
              style={{
                borderLeft: `1px solid ${DISPLAY_COLORS.border}20`,
                backgroundColor: isCurrent
                  ? `${DISPLAY_COLORS.active}15`
                  : 'transparent',
              }}
            >
              <span
                className="text-[7px]"
                style={{
                  color: isCurrent
                    ? DISPLAY_COLORS.highlight
                    : DISPLAY_COLORS.zoneMuted,
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Track rows */}
      <div className="flex-1 overflow-auto">
        {tracks.map((track, ti) => {
          const isSelected = ti === selectedTrack;
          const trackColor = track.color ?? DISPLAY_COLORS.active;

          return (
            <motion.div
              key={`track-${ti}`}
              className="flex items-center"
              style={{
                borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
                backgroundColor: isSelected
                  ? `${DISPLAY_COLORS.active}10`
                  : 'transparent',
                opacity: track.muted ? 0.4 : 1,
              }}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: track.muted ? 0.4 : 1, x: 0 }}
              transition={{ duration: 0.1, delay: ti * 0.02 }}
            >
              {/* Track label */}
              <div
                className="flex-shrink-0 px-0.5 py-[3px]"
                style={{
                  width: trackLabelWidth,
                  borderRight: isSelected
                    ? `2px solid ${DISPLAY_COLORS.active}`
                    : `2px solid transparent`,
                }}
              >
                <span
                  className="text-[9px] font-bold"
                  style={{ color: trackColor }}
                >
                  {track.label}
                </span>
              </div>

              {/* Measure cells */}
              {labels.map((_, mi) => {
                const measureNum = mi + 1;
                const isCurrent = currentMeasure === measureNum;
                const hasContent = track.regions?.some(
                  ([start, end]) =>
                    measureNum >= start && measureNum <= end
                );

                return (
                  <div
                    key={`cell-${ti}-${mi}`}
                    className="flex-1 py-[3px]"
                    style={{
                      borderLeft: `1px solid ${DISPLAY_COLORS.border}20`,
                      backgroundColor: isCurrent
                        ? `${DISPLAY_COLORS.active}08`
                        : 'transparent',
                    }}
                  >
                    {hasContent && (
                      <div
                        className="mx-px h-2.5 rounded-sm"
                        style={{
                          backgroundColor: `${trackColor}40`,
                          border: `1px solid ${trackColor}60`,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>
          );
        })}
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
