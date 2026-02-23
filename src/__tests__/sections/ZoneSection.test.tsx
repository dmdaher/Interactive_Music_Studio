import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ZoneSection from '@/components/devices/fantom-08/sections/ZoneSection';

describe('ZoneSection', () => {
  const defaultProps = {
    panelState: {},
    highlightedControls: [] as string[],
    onButtonClick: vi.fn(),
  };

  it('renders master volume knob', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="master-volume"]')).toBeInTheDocument();
  });

  it('renders PAN/LEVEL, CTRL, ASSIGN buttons', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="pan-level"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="ctrl"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="assign"]')).toBeInTheDocument();
  });

  it('renders 8 control knobs [1]-[8]', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    for (let i = 1; i <= 8; i++) {
      expect(container.querySelector(`[data-control-id="ctrl-knob-${i}"]`)).toBeInTheDocument();
    }
  });

  it('renders 8 sliders [1]-[8]', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    for (let i = 1; i <= 8; i++) {
      expect(container.querySelector(`[data-control-id="slider-${i}"]`)).toBeInTheDocument();
    }
  });

  it('renders 8 zone buttons', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    const zoneBtnIds = ['zone-1', 'zone-2', 'zone-3', 'zone-4', 'zone-5', 'zone-6', 'zone-7', 'zone-8'];
    zoneBtnIds.forEach((id) => {
      expect(container.querySelector(`[data-control-id="${id}"]`)).toBeInTheDocument();
    });
  });

  it('renders ZONE 9-16 and ZONE SELECT buttons', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="zone-9-16"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="zone-select"]')).toBeInTheDocument();
  });

  it('zone buttons arranged in 8-column grid', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    const grid = container.querySelector('.grid-cols-8');
    expect(grid).toBeInTheDocument();
  });

  it('each zone button has LED', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    const zoneBtnIds = ['zone-1', 'zone-2', 'zone-3', 'zone-4', 'zone-5', 'zone-6', 'zone-7', 'zone-8'];
    zoneBtnIds.forEach((id) => {
      const control = container.querySelector(`[data-control-id="${id}"]`);
      expect(control).toBeInTheDocument();
      // Each zone button wrapper should have 3 children (label + LED + button)
      expect(control?.children.length).toBe(3);
    });
  });

  it('Split, Arpeggio, Chord Memory buttons present', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="split"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arpeggio"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="chord-memory"]')).toBeInTheDocument();
  });

  it('Transpose, Octave Down, Octave Up buttons present', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="transpose"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="octave-down"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="octave-up"]')).toBeInTheDocument();
  });

  it('zone buttons fire onButtonClick with correct ID', () => {
    const onClick = vi.fn();
    const { container } = render(
      <ZoneSection {...defaultProps} onButtonClick={onClick} />,
    );

    const zone1 = container.querySelector('[data-control-id="zone-1"] button') as HTMLElement;
    fireEvent.click(zone1);
    expect(onClick).toHaveBeenCalledWith('zone-1');
  });

  it('has OCTAVE label', () => {
    render(<ZoneSection {...defaultProps} />);
    expect(screen.getByText('OCTAVE')).toBeInTheDocument();
  });

  it('renders all expected controls (36 total)', () => {
    const { container } = render(<ZoneSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // 1 master-vol + 3 buttons (pan-level, ctrl, assign) + 8 knobs + 8 sliders +
    // 8 zone buttons + 2 (zone-9-16, zone-select) +
    // 3 (split, arp, chord) + 3 (trans, oct-down, oct-up) = 36
    expect(allControls.length).toBe(36);
  });
});
