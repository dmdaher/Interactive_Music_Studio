import { describe, it, expect } from 'vitest';
import {
  MIDI_NOTE_NAMES,
  FANTOM_KEY_COUNT,
  FANTOM_LOWEST_NOTE,
  FANTOM_HIGHEST_NOTE,
  ZONE_COLORS,
  DISPLAY_COLORS,
} from '@/lib/constants';

describe('Fantom constants', () => {
  it('Fantom has 88 keys', () => {
    expect(FANTOM_HIGHEST_NOTE - FANTOM_LOWEST_NOTE + 1).toBe(88);
    expect(FANTOM_KEY_COUNT).toBe(88);
  });

  it('FANTOM_LOWEST_NOTE is 21 (A0)', () => {
    expect(FANTOM_LOWEST_NOTE).toBe(21);
  });

  it('FANTOM_HIGHEST_NOTE is 108 (C8)', () => {
    expect(FANTOM_HIGHEST_NOTE).toBe(108);
  });
});

describe('ZONE_COLORS', () => {
  it('has all 8 zone colors defined', () => {
    expect(Object.keys(ZONE_COLORS)).toHaveLength(8);
  });

  it('all zone colors are valid hex strings', () => {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    Object.values(ZONE_COLORS).forEach((color) => {
      expect(color).toMatch(hexRegex);
    });
  });
});

describe('DISPLAY_COLORS', () => {
  it('has all display colors defined', () => {
    expect(DISPLAY_COLORS.background).toBeDefined();
    expect(DISPLAY_COLORS.text).toBeDefined();
    expect(DISPLAY_COLORS.highlight).toBeDefined();
    expect(DISPLAY_COLORS.warning).toBeDefined();
    expect(DISPLAY_COLORS.active).toBeDefined();
    expect(DISPLAY_COLORS.zoneActive).toBeDefined();
    expect(DISPLAY_COLORS.zoneMuted).toBeDefined();
    expect(DISPLAY_COLORS.header).toBeDefined();
    expect(DISPLAY_COLORS.border).toBeDefined();
  });
});

describe('MIDI_NOTE_NAMES', () => {
  it('has exactly 12 entries', () => {
    expect(MIDI_NOTE_NAMES).toHaveLength(12);
  });

  it('contains all chromatic notes', () => {
    expect(MIDI_NOTE_NAMES).toContain('C');
    expect(MIDI_NOTE_NAMES).toContain('C#');
    expect(MIDI_NOTE_NAMES).toContain('D');
    expect(MIDI_NOTE_NAMES).toContain('D#');
    expect(MIDI_NOTE_NAMES).toContain('E');
    expect(MIDI_NOTE_NAMES).toContain('F');
    expect(MIDI_NOTE_NAMES).toContain('F#');
    expect(MIDI_NOTE_NAMES).toContain('G');
    expect(MIDI_NOTE_NAMES).toContain('G#');
    expect(MIDI_NOTE_NAMES).toContain('A');
    expect(MIDI_NOTE_NAMES).toContain('A#');
    expect(MIDI_NOTE_NAMES).toContain('B');
  });
});
