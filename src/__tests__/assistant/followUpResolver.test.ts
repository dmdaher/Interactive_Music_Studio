import { describe, it, expect } from 'vitest';
import { resolveFollowUp } from '@/lib/assistant/followUpResolver';
import { SearchResult } from '@/types/assistant';

function makeMockResult(id: string, title: string): SearchResult {
  return {
    tutorial: {
      tutorialId: id,
      deviceId: 'fantom-08',
      title,
      description: `Description for ${title}`,
      category: 'basics',
      difficulty: 'beginner',
      estimatedTime: '10 min',
      tags: ['tag1', 'tag2'],
      stepCount: 8,
      searchableText: '',
      topics: [],
      controlsReferenced: [],
      screensReferenced: [],
    },
    score: 0.8,
    matchReasons: ['test'],
  };
}

const twoResults: SearchResult[] = [
  makeMockResult('effects-routing', 'Effects Routing'),
  makeMockResult('master-effects', 'Master Effects Output'),
];

const oneResult: SearchResult[] = [
  makeMockResult('effects-routing', 'Effects Routing'),
];

describe('resolveFollowUp', () => {
  it('"the first one" with 2 lastResults resolves to first', () => {
    const result = resolveFollowUp('the first one', twoResults);
    expect(result).toEqual({
      type: 'resolved',
      tutorial: twoResults[0],
      action: 'navigate',
    });
  });

  it('"the second one" with 2 lastResults resolves to second', () => {
    const result = resolveFollowUp('the second one', twoResults);
    expect(result).toEqual({
      type: 'resolved',
      tutorial: twoResults[1],
      action: 'navigate',
    });
  });

  it('"1" resolves to first result', () => {
    const result = resolveFollowUp('1', twoResults);
    expect(result?.type).toBe('resolved');
    if (result?.type === 'resolved') {
      expect(result.tutorial).toBe(twoResults[0]);
    }
  });

  it('"start it" with 1 lastResult resolves to that one', () => {
    const result = resolveFollowUp('start it', oneResult);
    expect(result).toEqual({
      type: 'resolved',
      tutorial: oneResult[0],
      action: 'navigate',
    });
  });

  it('"go" resolves to first result', () => {
    const result = resolveFollowUp('go', twoResults);
    expect(result?.type).toBe('resolved');
    if (result?.type === 'resolved') {
      expect(result.tutorial).toBe(twoResults[0]);
    }
  });

  it('"which one" with 1 lastResult resolves to it', () => {
    const result = resolveFollowUp('which one', oneResult);
    expect(result).toEqual({
      type: 'resolved',
      tutorial: oneResult[0],
      action: 'navigate',
    });
  });

  it('"which one" with 2+ lastResults asks for clarification', () => {
    const result = resolveFollowUp('which one', twoResults);
    expect(result).toEqual({
      type: 'clarify',
      message: "Which one? You can say 'the first one' or 'the second one'.",
    });
  });

  it('"tell me more" resolves to detail action', () => {
    const result = resolveFollowUp('tell me more', twoResults);
    expect(result).toEqual({
      type: 'resolved',
      tutorial: twoResults[0],
      action: 'detail',
    });
  });

  it('"more about it" resolves to detail action', () => {
    const result = resolveFollowUp('more about it', oneResult);
    expect(result?.type).toBe('resolved');
    if (result?.type === 'resolved') {
      expect(result.action).toBe('detail');
    }
  });

  it('normal query like "how do I add reverb" returns null', () => {
    const result = resolveFollowUp('how do I add reverb', twoResults);
    expect(result).toBeNull();
  });

  it('empty lastResults + "the first one" returns null', () => {
    const result = resolveFollowUp('the first one', []);
    expect(result).toBeNull();
  });

  it('empty query returns null', () => {
    const result = resolveFollowUp('', twoResults);
    expect(result).toBeNull();
  });

  it('"the third one" with only 2 results returns null (out of range)', () => {
    const result = resolveFollowUp('the third one', twoResults);
    expect(result).toBeNull();
  });
});
