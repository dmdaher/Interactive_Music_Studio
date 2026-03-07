import { describe, it, expect } from 'vitest';
import { searchTutorials } from '@/lib/assistant/search';

describe('searchTutorials', () => {
  it('finds split-keyboard-zones for "split keyboard"', () => {
    const results = searchTutorials('split keyboard', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].tutorial.tutorialId).toBe('split-keyboard-zones');
  });

  it('finds midi-sync-clock for "MIDI clock"', () => {
    const results = searchTutorials('MIDI clock', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    const ids = results.map(r => r.tutorial.tutorialId);
    expect(ids).toContain('midi-sync-clock');
  });

  it('finds effects tutorials for "reverb"', () => {
    const results = searchTutorials('reverb', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    const ids = results.map(r => r.tutorial.tutorialId);
    expect(ids.some(id => id.includes('effect') || id.includes('master'))).toBe(true);
  });

  it('finds sampling-basics for "how do I sample audio"', () => {
    const results = searchTutorials('how do I sample audio', 'fantom-08');
    expect(results.length).toBeGreaterThan(0);
    const ids = results.map(r => r.tutorial.tutorialId);
    expect(ids).toContain('sampling-basics');
  });

  it('returns empty array for nonsense query', () => {
    const results = searchTutorials('xyzzy foobar baz', 'fantom-08');
    expect(results.length).toBe(0);
  });

  it('returns at most 10 results', () => {
    const results = searchTutorials('zone', 'fantom-08');
    expect(results.length).toBeLessThanOrEqual(10);
  });

  it('includes matchReasons', () => {
    const results = searchTutorials('split keyboard', 'fantom-08');
    expect(results[0].matchReasons.length).toBeGreaterThan(0);
  });

  it('scores are between 0 and 1', () => {
    const results = searchTutorials('effects', 'fantom-08');
    for (const r of results) {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(1);
    }
  });
});
