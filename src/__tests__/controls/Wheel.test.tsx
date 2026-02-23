import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Wheel from '@/components/controls/Wheel';

describe('Wheel', () => {
  it('track height is 80px and width is 20px', () => {
    const { container } = render(<Wheel id="pitch-wheel" label="Pitch" />);
    const track = container.querySelector('.cursor-pointer') as HTMLElement;
    expect(track?.style.height).toBe('80px');
    expect(track?.style.width).toBe('20px');
  });

  it('thumb height is 14px', () => {
    const { container } = render(<Wheel id="pitch-wheel" label="Pitch" />);
    // Thumb is the absolute div with height: 14
    const thumbCandidates = container.querySelectorAll('.absolute.left-0.right-0');
    let thumbFound = false;
    thumbCandidates.forEach((el) => {
      if ((el as HTMLElement).style.height === '14px') {
        thumbFound = true;
      }
    });
    expect(thumbFound).toBe(true);
  });

  it('thumb position maps value 0 to bottom', () => {
    const { container } = render(<Wheel id="pitch-wheel" label="Pitch" value={0} />);
    const thumbCandidates = container.querySelectorAll('.absolute.left-0.right-0');
    let thumbTop: number | null = null;
    thumbCandidates.forEach((el) => {
      if ((el as HTMLElement).style.height === '14px') {
        thumbTop = parseFloat((el as HTMLElement).style.top);
      }
    });
    // value=0: thumbOffset = TRAVEL - 0 = 66
    expect(thumbTop).toBe(66);
  });

  it('thumb position maps value 127 to top', () => {
    const { container } = render(<Wheel id="pitch-wheel" label="Pitch" value={127} />);
    const thumbCandidates = container.querySelectorAll('.absolute.left-0.right-0');
    let thumbTop: number | null = null;
    thumbCandidates.forEach((el) => {
      if ((el as HTMLElement).style.height === '14px') {
        thumbTop = parseFloat((el as HTMLElement).style.top);
      }
    });
    // value=127: thumbOffset = 0
    expect(thumbTop).toBe(0);
  });

  it('label renders', () => {
    render(<Wheel id="pitch-wheel" label="Pitch" />);
    expect(screen.getByText('Pitch')).toBeInTheDocument();
  });

  it('sets data-control-id', () => {
    const { container } = render(<Wheel id="pitch-wheel" label="Pitch" />);
    expect(container.querySelector('[data-control-id="pitch-wheel"]')).toBeInTheDocument();
  });
});
