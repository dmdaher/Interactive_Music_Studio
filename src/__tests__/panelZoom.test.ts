import { describe, it, expect } from 'vitest';
import { getZoomTarget } from '@/lib/panelZoom';

describe('getZoomTarget', () => {
  it('returns null for empty array', () => {
    expect(getZoomTarget([])).toBeNull();
  });

  it('returns section center for a single zone control', () => {
    const result = getZoomTarget(['zone-1']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(22); // zone section x
    expect(result!.y).toBe(50); // zone section y
  });

  it('returns section center for a pad control', () => {
    const result = getZoomTarget(['pad-1']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(88); // pad section x
    expect(result!.y).toBe(30); // pad section y
  });

  it('returns centroid for controls across 2 sections', () => {
    // zone (22, 50) + common (55, 50) → centroid (38.5, 50)
    const result = getZoomTarget(['zone-1', 'menu']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(38.5);
    expect(result!.y).toBe(50);
  });

  it('returns centroid for controls across 3 sections', () => {
    // zone (22, 50) + common (55, 50) + pad (88, 30) → centroid (55, 43.33...)
    const result = getZoomTarget(['zone-1', 'menu', 'pad-1']);
    expect(result).not.toBeNull();
    expect(result!.x).toBeCloseTo(55, 0);
    expect(result!.y).toBeCloseTo(43.3, 0);
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
  });

  it('handles lcd-display special case', () => {
    const result = getZoomTarget(['lcd-display']);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(42);
    expect(result!.y).toBe(40);
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
