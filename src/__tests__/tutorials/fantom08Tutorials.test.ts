import { describe, it, expect } from 'vitest';
import { fantom08Tutorials } from '@/data/tutorials/fantom-08';
import { allFantom08ControlIds } from '@/data/panelLayouts/fantom-08';
import { Tutorial } from '@/types/tutorial';

// Valid control IDs from the panel layout, plus 'display' (used in tutorials for the LCD area)
const validControlIds = [...allFantom08ControlIds, 'display'];

const hexRegex = /^#[0-9A-Fa-f]{6}$/;

// Expected step counts per tutorial (update when tutorials change)
const expectedStepCounts: Record<string, number> = {
  'panel-overview': 8,
  'selecting-scenes': 7,
  'selecting-tones': 8,
  'saving-your-work': 8,
  'split-keyboard-zones': 10,
  'layering-zones': 9,
  'four-zone-setup': 12,
  'transpose-octave': 7,
  'using-sliders-knobs': 10,
  'editing-mfx': 8,
};

describe('Fantom 08 tutorial collection', () => {
  it('has 10 tutorials', () => {
    expect(fantom08Tutorials).toHaveLength(11);
  });

  it('all tutorials have unique IDs', () => {
    const ids = fantom08Tutorials.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all tutorials target fantom-08', () => {
    fantom08Tutorials.forEach((t) => {
      expect(t.deviceId).toBe('fantom-08');
    });
  });

  it('all tutorials have required metadata', () => {
    fantom08Tutorials.forEach((t) => {
      expect(t.title).toBeTruthy();
      expect(t.description).toBeTruthy();
      expect(t.category).toBeTruthy();
      expect(t.difficulty).toBeTruthy();
      expect(t.estimatedTime).toBeTruthy();
      expect(t.tags.length).toBeGreaterThan(0);
      expect(t.steps.length).toBeGreaterThan(0);
    });
  });
});

// Parameterized tests for each tutorial
describe.each(fantom08Tutorials)('$id tutorial data integrity', (tutorial: Tutorial) => {
  it('has the expected number of steps', () => {
    const expected = expectedStepCounts[tutorial.id];
    if (expected !== undefined) {
      expect(tutorial.steps).toHaveLength(expected);
    }
  });

  it('has unique step IDs', () => {
    const ids = tutorial.steps.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each step has title and instruction', () => {
    tutorial.steps.forEach((step) => {
      expect(step.title).toBeTruthy();
      expect(step.instruction).toBeTruthy();
    });
  });

  it('highlighted controls are valid control IDs', () => {
    tutorial.steps.forEach((step) => {
      step.highlightControls.forEach((controlId) => {
        expect(
          validControlIds,
          `Invalid control ID "${controlId}" in step "${step.id}" of tutorial "${tutorial.id}"`
        ).toContain(controlId);
      });
    });
  });

  it('zone configs have valid MIDI ranges (21-108)', () => {
    tutorial.steps.forEach((step) => {
      if (step.zones) {
        step.zones.forEach((zone) => {
          expect(zone.lowNote).toBeGreaterThanOrEqual(21);
          expect(zone.lowNote).toBeLessThanOrEqual(108);
          expect(zone.highNote).toBeGreaterThanOrEqual(21);
          expect(zone.highNote).toBeLessThanOrEqual(108);
          expect(zone.lowNote).toBeLessThanOrEqual(zone.highNote);
        });
      }
    });
  });

  it('zone colors are valid hex strings', () => {
    tutorial.steps.forEach((step) => {
      if (step.zones) {
        step.zones.forEach((zone) => {
          expect(zone.color).toMatch(hexRegex);
        });
      }
    });
  });

  it('display states have valid screen types', () => {
    const validScreenTypes = ['home', 'zone-view', 'key-range', 'write', 'menu', 'tone-select', 'effect', 'mixer', 'scene-edit', 'zone-edit', 'effects-edit'];
    tutorial.steps.forEach((step) => {
      if (step.displayState) {
        expect(
          validScreenTypes,
          `Invalid screenType "${step.displayState.screenType}" in step "${step.id}"`
        ).toContain(step.displayState.screenType);
      }
    });
  });

  it('panel state changes reference valid control IDs', () => {
    tutorial.steps.forEach((step) => {
      Object.keys(step.panelStateChanges).forEach((controlId) => {
        expect(
          validControlIds,
          `Invalid panel state control ID "${controlId}" in step "${step.id}" of tutorial "${tutorial.id}"`
        ).toContain(controlId);
      });
    });
  });
});
