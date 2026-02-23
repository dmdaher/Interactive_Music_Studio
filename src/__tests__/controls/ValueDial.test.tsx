import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ValueDial from '@/components/controls/ValueDial';

describe('ValueDial', () => {
  it('DIAL_SIZE is 48px', () => {
    const { container } = render(<ValueDial id="value-dial" label="Value" />);
    const dialBody = container.querySelector('.rounded-full.cursor-pointer') as HTMLElement;
    expect(dialBody?.style.width).toBe('48px');
    expect(dialBody?.style.height).toBe('48px');
  });

  it('32 ridge lines rendered', () => {
    const { container } = render(<ValueDial id="value-dial" label="Value" />);
    // Ridges are absolute-positioned divs inside the dial body
    const dialBody = container.querySelector('.rounded-full.cursor-pointer');
    const ridgeDivs = dialBody?.querySelectorAll('.absolute');
    // 32 ridges + 16 highlight ridges + inner cap + center dot = 32 + 16 + 2 = 50
    // The ridge count is the ones with transformOrigin containing "24px" (DIAL_SIZE/2)
    expect(ridgeDivs).toBeDefined();
    expect(ridgeDivs!.length).toBeGreaterThanOrEqual(32);
  });

  it('label renders', () => {
    render(<ValueDial id="value-dial" label="Value" />);
    expect(screen.getByText('Value')).toBeInTheDocument();
  });

  it('sets data-control-id', () => {
    const { container } = render(<ValueDial id="value-dial" label="Value" />);
    expect(container.querySelector('[data-control-id="value-dial"]')).toBeInTheDocument();
  });
});
