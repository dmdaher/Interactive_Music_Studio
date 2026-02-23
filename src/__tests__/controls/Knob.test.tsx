import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Knob from '@/components/controls/Knob';

describe('Knob', () => {
  it('renders label text', () => {
    render(<Knob id="test-knob" label="Cutoff" />);
    expect(screen.getByText('Cutoff')).toBeInTheDocument();
  });

  it('sm outer size is 26px', () => {
    const { container } = render(<Knob id="test-knob" label="Test" size="sm" />);
    const knobBody = container.querySelector('.rounded-full.cursor-pointer') as HTMLElement;
    expect(knobBody?.style.width).toBe('26px');
    expect(knobBody?.style.height).toBe('26px');
  });

  it('md outer size is 34px', () => {
    const { container } = render(<Knob id="test-knob" label="Test" size="md" />);
    const knobBody = container.querySelector('.rounded-full.cursor-pointer') as HTMLElement;
    expect(knobBody?.style.width).toBe('34px');
    expect(knobBody?.style.height).toBe('34px');
  });

  it('indicator rotation maps value 0 to -135deg', () => {
    const { container } = render(<Knob id="test" label="Test" value={0} />);
    const indicator = container.querySelectorAll('[data-control-id="test"] .absolute');
    // Find the indicator line (the one with transform containing rotate)
    let found = false;
    indicator.forEach((el) => {
      const style = (el as HTMLElement).style.transform;
      if (style && style.includes('rotate(-135deg)')) {
        found = true;
      }
    });
    expect(found).toBe(true);
  });

  it('indicator rotation maps value 127 to +135deg', () => {
    const { container } = render(<Knob id="test" label="Test" value={127} />);
    const indicator = container.querySelectorAll('[data-control-id="test"] .absolute');
    let found = false;
    indicator.forEach((el) => {
      const style = (el as HTMLElement).style.transform;
      if (style && style.includes('rotate(135deg)')) {
        found = true;
      }
    });
    expect(found).toBe(true);
  });

  it('indicator rotation maps value 64 to approximately 0deg', () => {
    const { container } = render(<Knob id="test" label="Test" value={64} />);
    const indicator = container.querySelectorAll('[data-control-id="test"] .absolute');
    let rotationFound = false;
    indicator.forEach((el) => {
      const style = (el as HTMLElement).style.transform;
      if (style && style.includes('rotate(')) {
        const match = style.match(/rotate\(([-.0-9]+)deg\)/);
        if (match) {
          const deg = parseFloat(match[1]);
          // value=64 → rotation = -135 + (64/127)*270 ≈ 1.06deg
          if (Math.abs(deg) < 5) {
            rotationFound = true;
          }
        }
      }
    });
    expect(rotationFound).toBe(true);
  });

  it('sets data-control-id', () => {
    const { container } = render(<Knob id="cutoff-knob" label="Cutoff" />);
    expect(container.querySelector('[data-control-id="cutoff-knob"]')).toBeInTheDocument();
  });
});
