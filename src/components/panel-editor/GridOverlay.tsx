'use client';

import { useEditorStore, CANVAS_BASE_W, CANVAS_BASE_H } from './store';

/**
 * SVG pattern that draws grid lines at the current snapGrid interval.
 * Covers the full canvas. Rendered behind section frames.
 */
export default function GridOverlay() {
  const showGrid = useEditorStore((s) => s.showGrid);
  const snapGrid = useEditorStore((s) => s.snapGrid);

  if (!showGrid) return null;

  const patternId = `editor-grid-${snapGrid}`;

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={CANVAS_BASE_W}
      height={CANVAS_BASE_H}
      style={{ zIndex: 1 }}
    >
      <defs>
        <pattern
          id={patternId}
          width={snapGrid}
          height={snapGrid}
          patternUnits="userSpaceOnUse"
        >
          {/* Vertical line */}
          <line
            x1={snapGrid}
            y1={0}
            x2={snapGrid}
            y2={snapGrid}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={0.5}
          />
          {/* Horizontal line */}
          <line
            x1={0}
            y1={snapGrid}
            x2={snapGrid}
            y2={snapGrid}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={0.5}
          />
        </pattern>
      </defs>
      <rect
        width={CANVAS_BASE_W}
        height={CANVAS_BASE_H}
        fill={`url(#${patternId})`}
      />
    </svg>
  );
}
