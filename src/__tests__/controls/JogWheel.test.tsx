import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import JogWheel from '@/components/controls/JogWheel';

describe('JogWheel', () => {
  it('renders with data-control-id', () => {
    render(<JogWheel id="test-jog" />);
    const el = document.querySelector('[data-control-id="test-jog"]');
    expect(el).toBeTruthy();
  });

  it('renders at specified size', () => {
    render(<JogWheel id="test-jog" size={300} />);
    const el = document.querySelector('[data-control-id="test-jog"]') as HTMLElement;
    expect(el.style.width).toBe('300px');
    expect(el.style.height).toBe('300px');
  });

  it('renders with default size when none specified', () => {
    render(<JogWheel id="test-jog" />);
    const el = document.querySelector('[data-control-id="test-jog"]') as HTMLElement;
    expect(el.style.width).toBe('240px');
  });

  it('renders dimple dots', () => {
    const { container } = render(<JogWheel id="test-jog" />);
    const dots = container.querySelectorAll('.rounded-full');
    expect(dots.length).toBeGreaterThan(10);
  });
});
