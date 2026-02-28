import { fantom08Layout } from '@/data/panelLayouts/fantom-08';

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

/**
 * Given a list of highlighted control IDs, compute the zoom target
 * as percentage coordinates within the panel. Returns null if no
 * controls are highlighted or if highlighted controls span too
 * many different sections (full panel view is better).
 */
export function getZoomTarget(
  highlightedControls: string[]
): { x: number; y: number } | null {
  if (!highlightedControls.length) return null;

  // Resolve each control to its section, then to section region coordinates
  const sectionIds = new Set<string>();
  const points: { x: number; y: number }[] = [];

  for (const controlId of highlightedControls) {
    // Special handling for display-related controls
    if (controlId === 'display' || controlId === 'lcd-display') {
      sectionIds.add('display');
      const region = SECTION_REGIONS['display'];
      if (region) points.push(region);
      continue;
    }

    const sectionId = controlSectionMap[controlId];
    if (!sectionId) continue;

    sectionIds.add(sectionId);
    const region = SECTION_REGIONS[sectionId];
    if (region) points.push(region);
  }

  if (points.length === 0) return null;

  // If highlights span 4+ different sections, the zoom won't help — show full panel
  if (sectionIds.size >= 4) return null;

  // Compute centroid of all section regions
  const centroid = {
    x: points.reduce((sum, p) => sum + p.x, 0) / points.length,
    y: points.reduce((sum, p) => sum + p.y, 0) / points.length,
  };

  return centroid;
}
