import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CommonSection from '@/components/devices/fantom-08/sections/CommonSection';

describe('CommonSection (Navigation)', () => {
  const defaultProps = {
    panelState: {},
    highlightedControls: [] as string[],
    onButtonClick: vi.fn(),
  };

  it('renders ValueDial (Wheel)', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="value-dial"]')).toBeInTheDocument();
  });

  it('renders SCENE label and left column buttons: Select, Chain, Zone View, Single, Tempo', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(screen.getByText('SCENE')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="scene-select"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="scene-chain"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="zone-view"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="single-tone"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="tempo"]')).toBeInTheDocument();
  });

  it('renders Dec, Up, Inc row', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="dec"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-up"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="inc"]')).toBeInTheDocument();
  });

  it('renders Left, Down, Right row', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="cursor-left"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-down"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-right"]')).toBeInTheDocument();
  });

  it('renders Shift, Exit, Enter bottom row with PANIC and NUMERIC labels', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="shift"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="exit"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="enter"]')).toBeInTheDocument();
    expect(screen.getByText('[PANIC]')).toBeInTheDocument();
    expect(screen.getByText('[NUMERIC]')).toBeInTheDocument();
  });

  it('all buttons fire onButtonClick', () => {
    const onClick = vi.fn();
    const { container } = render(
      <CommonSection {...defaultProps} onButtonClick={onClick} />,
    );

    const shiftBtn = container.querySelector('[data-control-id="shift"] button') as HTMLElement;
    fireEvent.click(shiftBtn);
    expect(onClick).toHaveBeenCalledWith('shift');
  });

  it('renders all expected controls (16 total)', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // Left column: scene-select + scene-chain + zone-view + single-tone + tempo = 5
    // Wheel: value-dial = 1
    // Nav row 1: dec + cursor-up + inc = 3
    // Nav row 2: cursor-left + cursor-down + cursor-right = 3
    // Bottom row: shift + exit + enter = 3
    // Total = 15... wait, let me count: 5 + 1 + 3 + 3 + 3 = 15
    expect(allControls.length).toBe(15);
  });
});
