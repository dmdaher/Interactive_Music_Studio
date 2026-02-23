import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ControllerSection from '@/components/devices/fantom-08/sections/ControllerSection';

describe('ControllerSection', () => {
  const defaultProps = {
    panelState: {},
    highlightedControls: [] as string[],
  };

  it('pitch-mod lever, pitch wheel, mod wheel, S1 button, S2 button all rendered', () => {
    const { container } = render(<ControllerSection {...defaultProps} />);
    expect(container.querySelector('[data-control-id="pitch-mod-lever"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="pitch-wheel"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="mod-wheel"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="s1-btn"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="s2-btn"]')).toBeInTheDocument();
  });

  it('labels are present', () => {
    render(<ControllerSection {...defaultProps} />);
    expect(screen.getByText('P.Bend')).toBeInTheDocument();
    expect(screen.getByText('Pitch')).toBeInTheDocument();
    expect(screen.getByText('Mod')).toBeInTheDocument();
    expect(screen.getByText('S1')).toBeInTheDocument();
    expect(screen.getByText('S2')).toBeInTheDocument();
  });

  it('horizontal arrangement (flex items-end)', () => {
    const { container } = render(<ControllerSection {...defaultProps} />);
    const root = container.firstElementChild as HTMLElement;
    expect(root?.className).toContain('items-end');
  });

  it('renders all expected controls (5 total)', () => {
    const { container } = render(<ControllerSection {...defaultProps} />);
    const allControls = container.querySelectorAll('[data-control-id]');
    // pitch-mod-lever + pitch-wheel + mod-wheel + s1-btn + s2-btn = 5
    expect(allControls.length).toBe(5);
  });
});
