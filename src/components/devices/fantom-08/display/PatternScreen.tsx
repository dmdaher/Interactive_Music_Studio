'use client';

import { DISPLAY_COLORS, ZONE_COLOR_MAP } from '@/lib/constants';
import GridSelector, { GridCell } from './shared/GridSelector';

/**
 * PATTERN screen — Track × Variation grid (manual p.110-111, p.132).
 *
 * Layout:
 * - Top bar: view mode (8Tr/16Tr), track info
 * - Main: Grid of tracks (rows A-H or A-P) × variations (columns 1-8)
 * - Each cell is a colored pattern box (empty, has data, or playing)
 * - Bottom: LOOP SETTING | PTN UTILITY | EDIT | UNDO | GROUPING | GROUP
 */

const TRACK_LABELS_8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const TRACK_LABELS_16 = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
];
const VARIATION_LABELS = ['1', '2', '3', '4', '5', '6', '7', '8'];

/** Generate demo pattern data — some cells filled, some empty */
function generateDemoGrid(trackCount: number): GridCell[][] {
  return Array.from({ length: trackCount }, (_, ri) => {
    const color = ZONE_COLOR_MAP[(ri % 8) + 1] ?? DISPLAY_COLORS.active;
    return VARIATION_LABELS.map((_, ci) => {
      // Scatter some pattern data — first 2-3 variations tend to have data
      const hasData = ci < 2 || (ci === 2 && ri < 4);
      return {
        label: hasData ? `PTN` : '---',
        color,
        enabled: hasData,
        active: ci === 0 && ri === 0, // first cell is "playing"
      };
    });
  });
}

interface PatternScreenProps {
  viewMode?: '8Tr' | '16Tr';
  selectedTrack?: number;
  selectedVariation?: number;
}

export default function PatternScreen({
  viewMode = '8Tr',
  selectedTrack = 0,
  selectedVariation = 0,
}: PatternScreenProps) {
  const trackLabels = viewMode === '16Tr' ? TRACK_LABELS_16 : TRACK_LABELS_8;
  const cells = generateDemoGrid(trackLabels.length);

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Top bar — view mode + MUTE/SOLO */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] px-1.5 py-px rounded font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              backgroundColor: `${DISPLAY_COLORS.active}20`,
              border: `1px solid ${DISPLAY_COLORS.active}40`,
            }}
          >
            {viewMode}
          </span>
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.text }}>
            TRACK PTN NAME
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="text-[9px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              backgroundColor: `${DISPLAY_COLORS.warning}15`,
              border: `1px solid ${DISPLAY_COLORS.warning}30`,
            }}
          >
            MUTE
          </span>
          <span
            className="text-[9px] px-1 py-px rounded"
            style={{
              color: DISPLAY_COLORS.active,
              backgroundColor: `${DISPLAY_COLORS.active}15`,
              border: `1px solid ${DISPLAY_COLORS.active}30`,
            }}
          >
            SOLO
          </span>
        </div>
      </div>

      {/* Grid body — uses GridSelector */}
      <div className="flex-1 min-h-0">
        <GridSelector
          rowLabels={trackLabels}
          columnLabels={VARIATION_LABELS}
          cells={cells}
          selectedCell={[selectedTrack, selectedVariation]}
          title="TRK"
          rowLabelWidth={24}
          footer={
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1.5">
                {['LOOP SET', 'PTN UTIL', 'EDIT', 'UNDO'].map((btn) => (
                  <span
                    key={btn}
                    className="text-[8px] px-1 py-px rounded"
                    style={{
                      color: DISPLAY_COLORS.zoneMuted,
                      border: `1px solid ${DISPLAY_COLORS.border}40`,
                    }}
                  >
                    {btn}
                  </span>
                ))}
              </div>
              <div className="flex gap-1.5">
                {['GROUPING', 'GROUP'].map((btn) => (
                  <span
                    key={btn}
                    className="text-[8px] px-1 py-px rounded"
                    style={{
                      color: DISPLAY_COLORS.header,
                      border: `1px solid ${DISPLAY_COLORS.header}40`,
                    }}
                  >
                    {btn}
                  </span>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
