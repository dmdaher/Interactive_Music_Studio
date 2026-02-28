import { fantom08Layout } from '@/data/panelLayouts/fantom-08';
import { PANEL_NATURAL_WIDTH, PANEL_NATURAL_HEIGHT } from '@/lib/constants';

/**
 * Section regions as percentage coordinates (0-100) within the panel.
 * Each entry maps a panel section ID to its approximate center position.
 */
const SECTION_REGIONS: Record<string, { x: number; y: number }> = {
  controller:      { x: 3,  y: 50 },
  zone:            { x: 22, y: 50 },
  display:         { x: 42, y: 40 },
  scene:           { x: 42, y: 40 },
  common:          { x: 55, y: 50 },
  'synth-mode':    { x: 72, y: 30 },
  sequencer:       { x: 72, y: 70 },
  pad:             { x: 88, y: 30 },
  'tone-category': { x: 80, y: 85 },
  keyboard:        { x: 50, y: 95 },
};

/** Build a map of controlId → sectionId from the panel layout */
const controlSectionMap: Record<string, string> = {};
for (const section of fantom08Layout.sections) {
  for (const control of section.controls) {
    controlSectionMap[control.id] = section.id;
  }
}

export interface ZoomTarget {
  x: number;       // percentage (0-100)
  y: number;       // percentage (0-100)
  sectionKey: string; // sorted deduplicated section IDs, e.g. "common|pad"
}

/**
 * Given a list of highlighted control IDs, compute the zoom target
 * as percentage coordinates within the panel. Returns null if no
 * controls are highlighted or if highlighted controls span too
 * many different sections (full panel view is better).
 */
export function getZoomTarget(
  highlightedControls: string[]
): ZoomTarget | null {
  if (!highlightedControls.length) return null;

  // Resolve each control to its section — deduplicate sections first
  const sectionIds = new Set<string>();

  for (const controlId of highlightedControls) {
    if (controlId === 'display' || controlId === 'lcd-display') {
      sectionIds.add('display');
      continue;
    }

    const sectionId = controlSectionMap[controlId];
    if (sectionId) sectionIds.add(sectionId);
  }

  if (sectionIds.size === 0) return null;

  // If highlights span 4+ different sections, the zoom won't help — show full panel
  if (sectionIds.size >= 4) return null;

  // Collect one point per unique section (fixes double-counting)
  const points: { x: number; y: number }[] = [];
  for (const sectionId of sectionIds) {
    const region = SECTION_REGIONS[sectionId];
    if (region) points.push(region);
  }

  if (points.length === 0) return null;

  // Compute centroid of unique section regions
  const centroid = {
    x: points.reduce((sum, p) => sum + p.x, 0) / points.length,
    y: points.reduce((sum, p) => sum + p.y, 0) / points.length,
  };

  const sectionKey = [...sectionIds].sort().join('|');

  return { x: centroid.x, y: centroid.y, sectionKey };
}

export interface ZoomTransform {
  scale: number;
  x: number;  // pixels
  y: number;  // pixels
}

/**
 * Pure function: given a zoom target (or null for overview) and container size,
 * compute the CSS transform values (transform-origin: 0 0).
 *
 * transform: translate(Xpx, Ypx) scale(S)
 * A point P at (px, py) in panel coords ends up at screen position (px*S + X, py*S + Y).
 */
export function computeZoomTransform(
  target: ZoomTarget | null,
  containerWidth: number,
  containerHeight: number,
): ZoomTransform {
  if (containerWidth === 0 || containerHeight === 0) {
    return { scale: 0, x: 0, y: 0 };
  }

  const baseScale = containerWidth / PANEL_NATURAL_WIDTH;

  if (!target) {
    // Base state: fit full panel width, center vertically
    const y = (containerHeight - PANEL_NATURAL_HEIGHT * baseScale) / 2;
    return { scale: baseScale, x: 0, y: Math.max(0, y) };
  }

  // Zoomed state: dynamic cap
  // On small screens (baseScale ~0.5): zoom to 0.8
  // On large screens (baseScale ~0.96): zoom to baseScale (never shrink below base)
  // On very large screens (baseScale >= 1): zoom to 1.0 (native size)
  const zoomedScale = Math.max(baseScale, Math.min(baseScale * 1.6, 0.8));

  // Convert percentage target to pixel coordinates in panel space
  const targetX = (target.x / 100) * PANEL_NATURAL_WIDTH;
  const targetY = (target.y / 100) * PANEL_NATURAL_HEIGHT;

  // Center the target in the viewport
  let x = containerWidth / 2 - targetX * zoomedScale;
  let y = containerHeight / 2 - targetY * zoomedScale;

  // Clamp to prevent gaps at edges
  const minX = containerWidth - PANEL_NATURAL_WIDTH * zoomedScale;
  const minY = containerHeight - PANEL_NATURAL_HEIGHT * zoomedScale;
  x = Math.min(0, Math.max(minX, x));
  y = Math.min(0, Math.max(minY, y));

  return { scale: zoomedScale, x, y };
}
