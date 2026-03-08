import { describe, it, expect } from 'vitest';
import { cdj3000Layout, allCDJ3000ControlIds } from '@/data/panelLayouts/cdj-3000';

describe('CDJ-3000 Layout', () => {
  it('uses structural layout mode', () => {
    expect(cdj3000Layout.layoutMode).toBe('structural');
  });

  it('has rows defined', () => {
    expect(cdj3000Layout.rows).toBeDefined();
    expect(cdj3000Layout.rows!.length).toBeGreaterThan(0);
  });

  it('every row references existing sections', () => {
    const sectionIds = new Set(cdj3000Layout.sections.map(s => s.id));
    for (const row of cdj3000Layout.rows!) {
      for (const sectionId of row.sections) {
        expect(sectionIds.has(sectionId)).toBe(true);
      }
    }
  });

  it('every section has a controlLayout', () => {
    for (const section of cdj3000Layout.sections) {
      expect(section.controlLayout).toBeDefined();
    }
  });

  it('has all expected control IDs from the manual', () => {
    const requiredControls = [
      'play-pause', 'cue', 'source', 'browse', 'jog-wheel',
      'tempo-slider', 'beat-sync', 'master-tempo',
      'hot-cue-a', 'hot-cue-b', 'hot-cue-c', 'hot-cue-d',
      'hot-cue-e', 'hot-cue-f', 'hot-cue-g', 'hot-cue-h',
      'loop-in', 'loop-out', 'rotary-selector',
    ];
    for (const id of requiredControls) {
      expect(allCDJ3000ControlIds).toContain(id);
    }
  });

  it('controls in non-absolute sections have NO position', () => {
    for (const section of cdj3000Layout.sections) {
      if (section.controlLayout?.type === 'absolute') continue;
      for (const control of section.controls) {
        expect(control.position).toBeUndefined();
      }
    }
  });

  it('exports flat control ID list with no duplicates', () => {
    expect(allCDJ3000ControlIds.length).toBeGreaterThan(40);
    expect(new Set(allCDJ3000ControlIds).size).toBe(allCDJ3000ControlIds.length);
  });
});
