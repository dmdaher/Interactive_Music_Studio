import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Slider from '@/components/controls/Slider';

describe('Slider', () => {
  it('track height is 80px and width is 16px', () => {
    const { container } = render(<Slider id="s1-slider" label="S1" />);
    const track = container.querySelector('.rounded-md') as HTMLElement;
    expect(track?.style.height).toBe('120px');
    expect(track?.style.width).toBe('16px');
  });

  it('thumb height is 14px', () => {
    const { container } = render(<Slider id="s1-slider" label="S1" />);
    const thumbCandidates = container.querySelectorAll('.cursor-pointer');
    let thumbFound = false;
    thumbCandidates.forEach((el) => {
      if ((el as HTMLElement).style.height === '14px') {
        thumbFound = true;
      }
    });
    expect(thumbFound).toBe(true);
  });

  it('renders label', () => {
    render(<Slider id="s1-slider" label="S1" />);
    expect(screen.getByText('S1')).toBeInTheDocument();
  });

  it('sets data-control-id', () => {
    const { container } = render(<Slider id="s1-slider" label="S1" />);
    expect(container.querySelector('[data-control-id="s1-slider"]')).toBeInTheDocument();
  });
});
