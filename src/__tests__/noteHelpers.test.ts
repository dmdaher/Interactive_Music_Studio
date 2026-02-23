import { describe, it, expect } from 'vitest';
import {
  midiNoteToName,
  nameToMidiNote,
  isBlackKey,
  generateKeyboardNotes,
  noteInZone,
} from '@/lib/noteHelpers';

describe('midiNoteToName', () => {
  it('converts A0 (21) correctly', () => {
    expect(midiNoteToName(21)).toBe('A0');
  });

  it('converts C4 (60) correctly', () => {
    expect(midiNoteToName(60)).toBe('C4');
  });

  it('converts C8 (108) correctly', () => {
    expect(midiNoteToName(108)).toBe('C8');
  });

  it('converts C#4 (61) correctly', () => {
    expect(midiNoteToName(61)).toBe('C#4');
  });

  it('converts B7 (107) correctly', () => {
    expect(midiNoteToName(107)).toBe('B7');
  });

  it('converts MIDI 0 to C-1', () => {
    expect(midiNoteToName(0)).toBe('C-1');
  });
});

describe('nameToMidiNote', () => {
  it('round-trips with midiNoteToName for A0', () => {
    expect(nameToMidiNote('A0')).toBe(21);
    expect(midiNoteToName(nameToMidiNote('A0'))).toBe('A0');
  });

  it('round-trips with midiNoteToName for C4', () => {
    expect(nameToMidiNote('C4')).toBe(60);
    expect(midiNoteToName(nameToMidiNote('C4'))).toBe('C4');
  });

  it('round-trips with midiNoteToName for C8', () => {
    expect(nameToMidiNote('C8')).toBe(108);
  });

  it('round-trips with midiNoteToName for C#4', () => {
    expect(nameToMidiNote('C#4')).toBe(61);
    expect(midiNoteToName(nameToMidiNote('C#4'))).toBe('C#4');
  });

  it('returns -1 for invalid input', () => {
    expect(nameToMidiNote('invalid')).toBe(-1);
    expect(nameToMidiNote('')).toBe(-1);
    expect(nameToMidiNote('H4')).toBe(-1);
  });
});

describe('isBlackKey', () => {
  it('identifies sharps as black keys', () => {
    // C# = 1, D# = 3, F# = 6, G# = 8, A# = 10
    expect(isBlackKey(61)).toBe(true); // C#4
    expect(isBlackKey(63)).toBe(true); // D#4
    expect(isBlackKey(66)).toBe(true); // F#4
    expect(isBlackKey(68)).toBe(true); // G#4
    expect(isBlackKey(70)).toBe(true); // A#4
  });

  it('identifies naturals as white keys', () => {
    // C=0, D=2, E=4, F=5, G=7, A=9, B=11
    expect(isBlackKey(60)).toBe(false); // C4
    expect(isBlackKey(62)).toBe(false); // D4
    expect(isBlackKey(64)).toBe(false); // E4
    expect(isBlackKey(65)).toBe(false); // F4
    expect(isBlackKey(67)).toBe(false); // G4
    expect(isBlackKey(69)).toBe(false); // A4
    expect(isBlackKey(71)).toBe(false); // B4
  });
});

describe('generateKeyboardNotes', () => {
  const notes = generateKeyboardNotes();

  it('returns 88 notes', () => {
    expect(notes).toHaveLength(88);
  });

  it('starts with A0 (MIDI 21)', () => {
    expect(notes[0].midiNote).toBe(21);
    expect(notes[0].name).toBe('A');
    expect(notes[0].octave).toBe(0);
  });

  it('ends with C8 (MIDI 108)', () => {
    expect(notes[notes.length - 1].midiNote).toBe(108);
    expect(notes[notes.length - 1].name).toBe('C');
    expect(notes[notes.length - 1].octave).toBe(8);
  });

  it('has 52 white keys and 36 black keys', () => {
    const whiteKeys = notes.filter((n) => !n.isBlack);
    const blackKeys = notes.filter((n) => n.isBlack);
    expect(whiteKeys).toHaveLength(52);
    expect(blackKeys).toHaveLength(36);
  });
});

describe('noteInZone', () => {
  it('returns true for note in range', () => {
    expect(noteInZone(60, 21, 108)).toBe(true);
  });

  it('returns false for note out of range', () => {
    expect(noteInZone(20, 21, 108)).toBe(false);
    expect(noteInZone(109, 21, 108)).toBe(false);
  });

  it('includes boundary notes', () => {
    expect(noteInZone(21, 21, 108)).toBe(true);
    expect(noteInZone(108, 21, 108)).toBe(true);
  });
});
