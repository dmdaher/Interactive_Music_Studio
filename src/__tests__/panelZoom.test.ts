import { describe, it, expect } from 'vitest';
import { getZoomTarget, computeZoomTransform } from '@/lib/panelZoom';
import { PANEL_NATURAL_WIDTH, PANEL_NATURAL_HEIGHT } from '@/lib/constants';

describe('getZoomTarget', () => {
  it('returns null for empty array', () => {
    expect(getZoomTarget([])).toBeNull();
  });

  it('returns section center for a single zone control', () => {
    const result = getZoomTarget(['zone-1']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(22); // zone section x
    expect(result!.y).toBe(50); // zone section y
    expect(result!.sectionKey).toBe('zone');
  });

  it('returns section center for a pad control', () => {
    const result = getZoomTarget(['pad-1']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(88); // pad section x
    expect(result!.y).toBe(30); // pad section y
    expect(result!.sectionKey).toBe('pad');
  });

  it('returns centroid for controls across 2 sections', () => {
    // zone (22, 50) + common (55, 50) → centroid (38.5, 50)
    const result = getZoomTarget(['zone-1', 'menu']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(38.5);
    expect(result!.y).toBe(50);
    expect(result!.sectionKey).toBe('common|zone');
  });

  it('returns centroid for controls across 3 sections', () => {
    // zone (22, 50) + common (55, 50) + pad (88, 30) → centroid (55, 43.33...)
    const result = getZoomTarget(['zone-1', 'menu', 'pad-1']);
    expect(result).not.toBeNull();
    expect(result!.x).toBeCloseTo(55, 0);
    expect(result!.y).toBeCloseTo(43.3, 0);
    expect(result!.sectionKey).toBe('common|pad|zone');
  });

  it('returns null for controls across 4+ sections', () => {
    const result = getZoomTarget(['zone-1', 'menu', 'pad-1', 'wheel-1']);
    expect(result).toBeNull();
  });

  it('handles display special case', () => {
    const result = getZoomTarget(['display']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(42); // display section x
    expect(result!.y).toBe(40); // display section y
    expect(result!.sectionKey).toBe('display');
  });

  it('handles lcd-display special case', () => {
    const result = getZoomTarget(['lcd-display']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(42);
    expect(result!.y).toBe(40);
    expect(result!.sectionKey).toBe('display');
  });

  it('returns null for unknown control IDs', () => {
    const result = getZoomTarget(['nonexistent-control', 'also-fake']);
    expect(result).toBeNull();
  });

  it('deduplicates section points in centroid', () => {
    // Two controls in the same section should produce the section center, not double-count
    const single = getZoomTarget(['zone-1']);
    const double = getZoomTarget(['zone-1', 'zone-2']);
    expect(single).toEqual(double);
  });
});

describe('computeZoomTransform', () => {
  it('returns scale 0 for zero container size', () => {
    const result = computeZoomTransform(null, 0, 0);
    expect(result.scale).toBe(0);
  });

  it('base state (no target): scale = containerWidth/panelWidth, centered vertically', () => {
    const cw = 1200;
    const ch = 800;
    const result = computeZoomTransform(null, cw, ch);
    const expectedScale = cw / PANEL_NATURAL_WIDTH;
    expect(result.scale).toBeCloseTo(expectedScale, 6);
    expect(result.x).toBe(0);
    // Vertical centering: (ch - PANEL_HEIGHT * scale) / 2
    const expectedY = (ch - PANEL_NATURAL_HEIGHT * expectedScale) / 2;
    expect(result.y).toBeCloseTo(expectedY, 4);
  });

  it('zoomed state: target centered, clamped to edges', () => {
    const cw = 1200;
    const ch = 800;
    const target = { x: 50, y: 50, sectionKey: 'display' };
    const result = computeZoomTransform(target, cw, ch);
    // Zoomed scale should be > base scale
    const baseScale = cw / PANEL_NATURAL_WIDTH;
    expect(result.scale).toBeGreaterThan(baseScale);
    expect(result.scale).toBeLessThanOrEqual(0.8);
  });

  it('edge clamping: far-right target (pads) does not create left gap', () => {
    const cw = 1200;
    const ch = 800;
    const target = { x: 88, y: 30, sectionKey: 'pad' };
    const result = computeZoomTransform(target, cw, ch);
    // X should be >= containerWidth - panelWidth * scale (minX)
    const minX = cw - PANEL_NATURAL_WIDTH * result.scale;
    expect(result.x).toBeGreaterThanOrEqual(minX - 0.001);
    // X should be <= 0
    expect(result.x).toBeLessThanOrEqual(0.001);
  });

  it('edge clamping: far-left target (controller) does not create right gap', () => {
    const cw = 1200;
    const ch = 800;
    const target = { x: 3, y: 50, sectionKey: 'controller' };
    const result = computeZoomTransform(target, cw, ch);
    // X clamped to max 0 (no right gap)
    expect(result.x).toBeLessThanOrEqual(0.001);
    // With a far-left target, X should be 0 (clamped at left edge)
    expect(result.x).toBe(0);
  });

  it('dynamic cap — small screen (1366px): zoomedScale = 0.8', () => {
    const cw = 1366;
    const ch = 768;
    const target = { x: 50, y: 50, sectionKey: 'display' };
    const result = computeZoomTransform(target, cw, ch);
    const baseScale = cw / PANEL_NATURAL_WIDTH; // ~0.5117
    // baseScale * 1.6 = ~0.819, min(0.819, 0.8) = 0.8, max(0.5117, 0.8) = 0.8
    expect(result.scale).toBeCloseTo(0.8, 2);
    expect(result.scale).toBeGreaterThan(baseScale);
  });

  it('dynamic cap — large screen (2560px): zoomedScale = max(baseScale, 0.8) = baseScale', () => {
    const cw = 2560;
    const ch = 1440;
    const target = { x: 50, y: 50, sectionKey: 'display' };
    const result = computeZoomTransform(target, cw, ch);
    const baseScale = cw / PANEL_NATURAL_WIDTH; // ~0.9588
    // baseScale * 1.6 = ~1.534, min(1.534, 0.8) = 0.8, max(0.9588, 0.8) = 0.9588
    expect(result.scale).toBeCloseTo(baseScale, 4);
  });

  it('very large screen (2670px+): baseScale >= 1.0', () => {
    const cw = 2670;
    const ch = 1500;
    const result = computeZoomTransform(null, cw, ch);
    expect(result.scale).toBeCloseTo(1.0, 4);
    // When zoomed on a very large screen
    const target = { x: 50, y: 50, sectionKey: 'display' };
    const zoomed = computeZoomTransform(target, cw, ch);
    // max(1.0, min(1.6, 0.8)) = max(1.0, 0.8) = 1.0
    expect(zoomed.scale).toBeCloseTo(1.0, 4);
  });
});
