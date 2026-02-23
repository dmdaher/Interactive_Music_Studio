import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ControllerSection from '@/components/devices/fantom-08/sections/ControllerSection';

describe('ControllerSection', () => {
  const defaultProps = {
    panelState: {},
    highlightedControls: [] as string[],
  };

  it('wheel-1, wheel-2, pitch wheel, S1 button, S2 button all rendered', () => {
    const { container } = render(<ControllerSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="wheel-1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="wheel-2"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="pitch-wheel"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="s1-btn"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="s2-btn"]')).toBeInTheDocument();
  });

  it('labels are present', () => {
    render(<ControllerSection {...defaultProps} />);
    expect(screen.getByText('Wheel 1')).toBeInTheDocument();
    expect(screen.getByText('Wheel 2')).toBeInTheDocument();
    expect(screen.getByText('Pitch')).toBeInTheDocument();
    expect(screen.getByText('S1')).toBeInTheDocument();
    expect(screen.getByText('S2')).toBeInTheDocument();
  });

  it('vertical arrangement (flex flex-col)', () => {
    const { container } = render(<ControllerSection {...defaultProps} />);
    const root = container.firstElementChild as HTMLElement;
    expect(root?.className).toContain('flex-col');
  });

  it('renders all expected controls (5 total)', () => {
    const { container } = render(<ControllerSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // wheel-1 + wheel-2 + pitch-wheel + s1-btn + s2-btn = 5
    expect(allControls.length).toBe(5);
  });
});
