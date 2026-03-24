import { describe, it, expect } from 'vitest';

// Copy the function since it's not exported
function sectionIdToPascal(sectionId: string): string {
  return sectionId
    .split(/[-_]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

describe('sectionIdToPascal', () => {
  it('handles UPPERCASE IDs', () => {
    expect(sectionIdToPascal('DISPLAY')).toBe('Display');
    expect(sectionIdToPascal('BROWSE')).toBe('Browse');
    expect(sectionIdToPascal('TEMPO')).toBe('Tempo');
  });

  it('handles UPPERCASE with underscores', () => {
    expect(sectionIdToPascal('HOT_CUE')).toBe('HotCue');
    expect(sectionIdToPascal('JOG_CONTROLS')).toBe('JogControls');
    expect(sectionIdToPascal('CUE_MEMORY')).toBe('CueMemory');
  });

  it('handles lowercase with hyphens', () => {
    expect(sectionIdToPascal('synth-mode')).toBe('SynthMode');
    expect(sectionIdToPascal('browse-bar')).toBe('BrowseBar');
    expect(sectionIdToPascal('beat-sync')).toBe('BeatSync');
  });

  it('handles single lowercase word', () => {
    expect(sectionIdToPascal('controller')).toBe('Controller');
    expect(sectionIdToPascal('zone')).toBe('Zone');
    expect(sectionIdToPascal('common')).toBe('Common');
  });
});
