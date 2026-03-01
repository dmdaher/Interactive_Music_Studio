import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Keyboard from '@/components/devices/fantom-08/Keyboard';

describe('Keyboard', () => {
  it('renders 52 white keys and 36 black keys (88 total)', () => {
    const { container } = render(<Keyboard />);
    // White keys are rendered in the flex container
    const whiteKeyContainer = container.querySelector('.flex.h-full');
    const whiteKeys = whiteKeyContainer?.children;
    expect(whiteKeys?.length).toBe(52);

    // Black keys are absolute positioned divs with top-0 class
    const blackKeys = container.querySelectorAll('.absolute.top-0.rounded-b-sm');
    expect(blackKeys.length).toBe(36);
  });

  it('height class is h-32 (128px)', () => {
    const { container } = render(<Keyboard />);
    const keyboardContainer = container.querySelector('.h-32');
    expect(keyboardContainer).toBeInTheDocument();
  });

  it('zone color overlays applied to keys in zone range', () => {
    const zones = [
      { zoneNumber: 1, color: '#3B82F6', lowNote: 21, highNote: 59, label: 'Zone 1' },
      { zoneNumber: 2, color: '#EF4444', lowNote: 60, highNote: 108, label: 'Zone 2' },
    ];
    const { container } = render(<Keyboard zones={zones} />);
    // Zone overlays are divs with pointer-events-none inside keys
    const overlays = container.querySelectorAll('.pointer-events-none');
    expect(overlays.length).toBeGreaterThan(0);
  });

  it('C note labels shown', () => {
    const { container } = render(<Keyboard />);
    // C labels are spans with note names like C1, C2, etc.
    const cLabels = container.querySelectorAll('span');
    // There should be C labels for each C on the keyboard (C1-C8 = 8)
    const cTexts = Array.from(cLabels).filter((el) => el.textContent?.match(/^C\d$/));
    expect(cTexts.length).toBeGreaterThan(0);
  });

  it('no zone labels rendered in Keyboard (handled by KeyboardZoneOverlay)', () => {
    const zones = [
      { zoneNumber: 1, color: '#3B82F6', lowNote: 21, highNote: 59, label: 'Zone 1 (Bass)' },
    ];
    const { container } = render(<Keyboard zones={zones} />);
    const label = container.querySelector('.font-mono.font-bold');
    expect(label).toBeNull();
  });
});
