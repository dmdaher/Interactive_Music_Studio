import { describe, it, expect } from 'vitest';
import { splitKeyboardZones } from '@/data/tutorials/fantom-08/split-keyboard-zones';

describe('splitKeyboardZones tutorial data integrity', () => {
  it('has 10 steps', () => {
    expect(splitKeyboardZones.steps).toHaveLength(10);
  });

  it('has unique step IDs', () => {
    const ids = splitKeyboardZones.steps.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('each step has title and instruction', () => {
    splitKeyboardZones.steps.forEach((step) => {
      expect(step.title).toBeTruthy();
      expect(step.instruction).toBeTruthy();
    });
  });

  it('steps that highlight controls list valid control IDs', () => {
    const validControlIds = [
      'zone-1', 'zone-2', 'zone-3', 'zone-4', 'zone-5', 'zone-6', 'zone-7', 'zone-8',
      'zone-int', 'menu', 'write', 'exit', 'enter', 'tone-select', 'value-dial',
      'cursor-up', 'cursor-down', 'cursor-left', 'cursor-right',
      'scene-up', 'scene-down',
      'wheel-1', 'wheel-2', 'pitch-wheel', 's1-btn', 's2-btn',
      'split', 'chord-memory', 'arpeggio', 'transpose', 'octave-down', 'octave-up',
      'cutoff-knob', 'resonance-knob', 'attack-knob', 'decay-knob',
      'sustain-knob', 'release-knob', 'effects-knob', 'lfo-rate-knob',
      'play', 'stop', 'rec', 'tempo-knob', 'display',
    ];
    // Add scene and pad IDs
    for (let i = 1; i <= 16; i++) {
      validControlIds.push(`scene-${i}`);
      validControlIds.push(`pad-${i}`);
    }

    splitKeyboardZones.steps.forEach((step) => {
      step.highlightControls.forEach((controlId) => {
        expect(validControlIds).toContain(controlId);
      });
    });
  });

  it('zone configs have valid MIDI ranges (21-108)', () => {
    splitKeyboardZones.steps.forEach((step) => {
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
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    splitKeyboardZones.steps.forEach((step) => {
      if (step.zones) {
        step.zones.forEach((zone) => {
          expect(zone.color).toMatch(hexRegex);
        });
      }
    });
  });
});
