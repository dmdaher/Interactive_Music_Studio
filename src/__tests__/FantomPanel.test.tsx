import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FantomPanel from '@/components/devices/fantom-08/FantomPanel';

describe('FantomPanel', () => {
  const defaultProps = {
    panelState: {},
    displayState: { screenType: 'home' as const },
    highlightedControls: [] as string[],
  };

  it('all sections rendered with correct controls', () => {
    const { container } = render(<FantomPanel {...defaultProps} />);
    // Controller section (pitch-wheel)
    expect(container.querySelector('[data-control-id="pitch-wheel"]')).toBeInTheDocument();
    // Zone section
    expect(container.querySelector('[data-control-id="zone-1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="master-volume"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="ctrl-knob-1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="slider-1"]')).toBeInTheDocument();
    // Display
    const fantomTexts = screen.getAllByText('FANTOM-08');
    expect(fantomTexts.length).toBeGreaterThanOrEqual(1);
    // Display area: Write/MFX/M.Pad/DAW/Menu buttons (now at panel level)
    expect(container.querySelector('[data-control-id="write"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="master-fx"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="motional-pad"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="daw-ctrl"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="menu"]')).toBeInTheDocument();
    // E1-E6 knobs (now below display at panel level)
    expect(container.querySelector('[data-control-id="function-e1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="function-e6"]')).toBeInTheDocument();
    // Navigation section (wheel + nav pad)
    expect(container.querySelector('[data-control-id="value-dial"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="shift"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="scene-select"]')).toBeInTheDocument();
    // Synth ctrl + embedded sequencer
    expect(container.querySelector('[data-control-id="synth-mode-osc"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-mode-filter"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-cutoff"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-resonance"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="pattern"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="play"]')).toBeInTheDocument();
    // Tone categories at panel level
    expect(container.querySelector('[data-control-id="tone-cat-1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="tone-cat-16"]')).toBeInTheDocument();
    // Pad section
    expect(container.querySelector('[data-control-id="pad-1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="sampling"]')).toBeInTheDocument();
  });

  it('right side has 2-row structure with tone categories in bottom row', () => {
    const { container } = render(<FantomPanel {...defaultProps} />);
    const toneGrid = container.querySelector('[class*="grid-cols-16"]');
    expect(toneGrid).toBeInTheDocument();
    const toneButtons = toneGrid!.querySelectorAll('[data-control-id]');
    expect(toneButtons.length).toBe(16);
  });

  it('keyboard rendered below control row', () => {
    const { container } = render(<FantomPanel {...defaultProps} />);
    const keyboard = container.querySelector('.h-32');
    expect(keyboard).toBeInTheDocument();
  });

  it('"ROLAND" and "FANTOM-08" branding text present', () => {
    render(<FantomPanel {...defaultProps} />);
    expect(screen.getByText('ROLAND')).toBeInTheDocument();
    const fantomTexts = screen.getAllByText('FANTOM-08');
    expect(fantomTexts.length).toBeGreaterThanOrEqual(1);
  });

  it('panel has rounded-2xl corners', () => {
    const { container } = render(<FantomPanel {...defaultProps} />);
    const panel = container.querySelector('.rounded-2xl');
    expect(panel).toBeInTheDocument();
  });
});
