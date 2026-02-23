import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SynthModeSection from '@/components/devices/fantom-08/sections/SynthModeSection';

describe('SynthModeSection', () => {
  const defaultProps = {
    panelState: {},
    highlightedControls: [] as string[],
  };

  it('renders OSC, AMP, FX, LFO buttons', () => {
    const { container } = render(<SynthModeSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="synth-mode-osc"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-mode-amp"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-mode-fx"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-mode-lfo"]')).toBeInTheDocument();
  });

  it('renders CUTOFF and RESONANCE knobs', () => {
    const { container } = render(<SynthModeSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="synth-cutoff"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-resonance"]')).toBeInTheDocument();
  });

  it('renders PARAM and FILTER TYPE buttons', () => {
    const { container } = render(<SynthModeSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="synth-param"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="synth-mode-filter"]')).toBeInTheDocument();
  });

  it('has FILTER label inline with connecting line', () => {
    render(<SynthModeSection {...defaultProps} />);
    expect(screen.getByText('FILTER')).toBeInTheDocument();
  });

  it('has "SYNTH CTRL" label', () => {
    render(<SynthModeSection {...defaultProps} />);
    expect(screen.getByText('SYNTH CTRL')).toBeInTheDocument();
  });

  it('renders embedded SEQUENCER section with box', () => {
    render(<SynthModeSection {...defaultProps} />);
    expect(screen.getByText('SEQUENCER')).toBeInTheDocument();
    expect(screen.getByText('WORKFLOW')).toBeInTheDocument();
  });

  it('renders sequencer controls: pattern, group, song, tr-rec, rhythm-ptn, transport', () => {
    const { container } = render(<SynthModeSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="pattern"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="group"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="song"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="tr-rec"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="rhythm-ptn"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="play"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="stop"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="rec"]')).toBeInTheDocument();
  });

  it('renders all expected controls (16 total)', () => {
    const { container } = render(<SynthModeSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // Synth: 4 buttons (OSC, AMP, FX, LFO) + 2 knobs (cutoff, reso) + 2 buttons (PARAM, FLT TYPE) = 8
    // Sequencer: 5 buttons (ptn, grp, song, tr-rec, rhy-ptn) + 3 transport (stop, play, rec) = 8
    // Total = 16
    expect(allControls.length).toBe(16);
  });
});
