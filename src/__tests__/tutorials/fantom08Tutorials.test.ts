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
  'understanding-the-mixer': 8,
  'tone-editing-zoom': 9,
  'tone-editing-pro': 10,
  'scene-level-editing': 10,
  'effects-routing': 11,
  'sequencer-patterns': 9,
  'piano-roll-editing': 10,
  'sequencer-groups': 10,
  'song-arrangement': 11,
  'sampling-basics': 9,
  'wave-editing': 10,
  'pad-mode-setup': 10,
  'multisample-creation': 11,
  'arpeggio-setup': 9,
  'chord-memory-motional': 10,
  'scene-chain-smf': 10,
  'system-and-file-management': 11,
  'midi-concepts': 8,
  'midi-basics': 9,
  'midi-cc-mapping': 10,
  'daw-controller': 11,
  'midi-sync-clock': 11,
  'rhythm-patterns': 8,
  'step-recording': 10,
  'tr-rec-drums': 10,
  'sequencer-power-tools': 12,
  'vocoder-audio-input': 10,
  'quick-edit-function-knobs': 8,
};

describe('Fantom 08 tutorial collection', () => {
  it('has 38 tutorials', () => {
    expect(fantom08Tutorials).toHaveLength(38);
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
    const validScreenTypes = ['home', 'zone-view', 'key-range', 'write', 'menu', 'tone-select', 'effect', 'mixer', 'scene-edit', 'zone-edit', 'effects-edit', 'tone-edit-zoom', 'tone-edit-pro', 'pattern', 'piano-roll', 'group', 'song', 'rec-standby', 'microscope', 'sampling', 'sample-pad', 'wave-edit', 'pad-mode', 'multisample-edit', 'system-settings', 'arpeggio', 'chord-memory', 'motional-pad', 'scene-chain', 'smf-control', 'popup', 'file-browser', 'import-wizard', 'export-wizard'];
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
