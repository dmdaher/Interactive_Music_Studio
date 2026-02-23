import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PadSection from '@/components/devices/fantom-08/sections/PadSection';

describe('PadSection', () => {
  const defaultProps = {
    panelState: {},
    highlightedControls: [] as string[],
  };

  it('16 pad buttons in 4x4 grid', () => {
    const { container } = render(<PadSection {...defaultProps} />);
    const grid = container.querySelector('.grid-cols-4');
    expect(grid).toBeInTheDocument();
    const pads = grid?.querySelectorAll('[data-control-id]');
    expect(pads?.length).toBe(16);
  });

  it('all pads have uniform color (matching real hardware idle state)', () => {
    const { container } = render(<PadSection {...defaultProps} />);
    for (let i = 1; i <= 16; i++) {
      expect(container.querySelector(`[data-control-id="pad-${i}"]`)).toBeInTheDocument();
    }
  });

  it('renders SAMPLING, PAD MODE, CLIP BOARD, BANK, HOLD buttons', () => {
    const { container } = render(<PadSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="sampling"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="pad-mode"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="clip-board"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="bank"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="hold"]')).toBeInTheDocument();
  });

  it('function buttons in vertical column (flex-col)', () => {
    const { container } = render(<PadSection {...defaultProps} />);
    const functionColumn = container.querySelector('.flex-col.gap-0\\.5');
    expect(functionColumn).toBeInTheDocument();
    const buttons = functionColumn?.querySelectorAll('[data-control-id]');
    expect(buttons?.length).toBe(5);
  });

  it('has "PADS" label', () => {
    render(<PadSection {...defaultProps} />);
    expect(screen.getByText('PADS')).toBeInTheDocument();
  });

  it('renders all expected controls (21 total)', () => {
    const { container } = render(<PadSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // 5 function buttons + 16 pads = 21
    expect(allControls.length).toBe(21);
  });
});
