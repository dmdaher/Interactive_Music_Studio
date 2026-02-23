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

  it('renders SCENE label and scene buttons: Select, Chain, Zone View, Single', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(screen.getByText('SCENE')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="scene-select"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="scene-chain"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="zone-view"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="single-tone"]')).toBeInTheDocument();
  });

  it('renders nav buttons: Dec, Inc, arrows', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="dec"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-up"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="inc"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-left"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-down"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="cursor-right"]')).toBeInTheDocument();
  });

  it('all buttons fire onButtonClick', () => {
    const onClick = vi.fn();
    const { container } = render(
      <CommonSection {...defaultProps} onButtonClick={onClick} />,
    );

    const selectBtn = container.querySelector('[data-control-id="scene-select"] button') as HTMLElement;
    fireEvent.click(selectBtn);
    expect(onClick).toHaveBeenCalledWith('scene-select');
  });

  it('renders Tempo, Shift, Exit, Enter with PANIC and NUMERIC labels', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="tempo"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="shift"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="exit"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="enter"]')).toBeInTheDocument();
    expect(screen.getByText('[PANIC]')).toBeInTheDocument();
    expect(screen.getByText('[NUMERIC]')).toBeInTheDocument();
  });

  it('renders all expected controls (15 total)', () => {
    const { container } = render(<CommonSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // Scene: select + chain + zone-view + single-tone = 4
    // Nav row 1: dec + cursor-up + inc = 3
    // Nav row 2: cursor-left + cursor-down + cursor-right = 3
    // Bottom: tempo + shift + exit + enter = 4
    // Wheel: value-dial = 1
    // Total = 4 + 3 + 3 + 4 + 1 = 15
    expect(allControls.length).toBe(15);
  });
});
