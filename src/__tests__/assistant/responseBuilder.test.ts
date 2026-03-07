import { describe, it, expect } from 'vitest';
import { buildResponse } from '@/lib/assistant/responseBuilder';
import { SearchResult } from '@/types/assistant';

function makeMockResult(id: string, title: string, score: number): SearchResult {
  return {
    tutorial: {
      tutorialId: id,
      deviceId: 'fantom-08',
      title,
      description: `Description for ${title}`,
      category: 'effects',
      difficulty: 'intermediate',
      estimatedTime: '12 min',
      tags: ['effects', 'mfx', 'reverb'],
      stepCount: 8,
      searchableText: '',
      topics: [],
      controlsReferenced: [],
      screensReferenced: [],
    },
    score,
    matchReasons: ['test'],
  };
}

describe('buildResponse', () => {
  it('1 high-score result returns 1 tutorial with confident text', () => {
    const results = [
      makeMockResult('effects-routing', 'Effects Routing', 0.9),
      makeMockResult('master-effects', 'Master Effects', 0.2),
    ];
    const { text, tutorials } = buildResponse(results, 'reverb');
    expect(tutorials).toHaveLength(1);
    expect(tutorials[0].tutorial.tutorialId).toBe('effects-routing');
    expect(text).toContain('Effects Routing');
    expect(text).toContain('covers exactly what you need');
  });

  it('2 close-score results returns 2 tutorials with recommendation', () => {
    const results = [
      makeMockResult('effects-routing', 'Effects Routing', 0.5),
      makeMockResult('master-effects', 'Master Effects Output', 0.45),
    ];
    const { text, tutorials } = buildResponse(results, 'reverb');
    expect(tutorials).toHaveLength(2);
    expect(text).toContain('Effects Routing');
    expect(text).toContain('Master Effects Output');
    expect(text).toContain("I'd start with");
  });

  it('3 close-score results returns 3 tutorials', () => {
    const results = [
      makeMockResult('effects-routing', 'Effects Routing', 0.5),
      makeMockResult('master-effects', 'Master Effects Output', 0.42),
      makeMockResult('editing-mfx', 'Editing MFX', 0.35),
    ];
    const { text, tutorials } = buildResponse(results, 'effects');
    expect(tutorials).toHaveLength(3);
    expect(text).toContain('A few tutorials');
  });

  it('5 results with varying scores returns max 3', () => {
    const results = [
      makeMockResult('a', 'Tutorial A', 0.5),
      makeMockResult('b', 'Tutorial B', 0.45),
      makeMockResult('c', 'Tutorial C', 0.38),
      makeMockResult('d', 'Tutorial D', 0.15),
      makeMockResult('e', 'Tutorial E', 0.10),
    ];
    const { tutorials } = buildResponse(results, 'something');
    expect(tutorials.length).toBeLessThanOrEqual(3);
  });

  it('0 results returns helpful fallback text', () => {
    const { text, tutorials } = buildResponse([], 'xyzzy');
    expect(tutorials).toHaveLength(0);
    expect(text).toContain("I don't have a specific tutorial");
    expect(text).toContain('effects, zones, sampling');
  });

  it('response text never says "Found N tutorials matching your search"', () => {
    const results = [
      makeMockResult('effects-routing', 'Effects Routing', 0.9),
      makeMockResult('master-effects', 'Master Effects', 0.3),
    ];
    const { text } = buildResponse(results, 'reverb');
    expect(text).not.toContain('Found');
    expect(text).not.toContain('matching your search');
  });

  it('filters out results below minimum score threshold', () => {
    const results = [
      makeMockResult('a', 'Tutorial A', 0.5),
      makeMockResult('b', 'Tutorial B', 0.05),
      makeMockResult('c', 'Tutorial C', 0.02),
    ];
    const { tutorials } = buildResponse(results, 'test');
    expect(tutorials.every(t => t.score >= 0.08)).toBe(true);
  });

  it('single low-score result still returns if above threshold', () => {
    const results = [
      makeMockResult('a', 'Tutorial A', 0.12),
    ];
    const { tutorials } = buildResponse(results, 'test');
    expect(tutorials).toHaveLength(1);
  });
});
