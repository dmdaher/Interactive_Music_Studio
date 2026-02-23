import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import TransportButton from '@/components/controls/TransportButton';

describe('TransportButton', () => {
  it('renders play icon', () => {
    const { container } = render(<TransportButton id="play" icon="play" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // play icon has a path element
    expect(container.querySelector('path')).toBeInTheDocument();
  });

  it('renders stop icon', () => {
    const { container } = render(<TransportButton id="stop" icon="stop" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // stop icon has a rect element
    expect(container.querySelector('rect')).toBeInTheDocument();
  });

  it('renders rec icon', () => {
    const { container } = render(<TransportButton id="rec" icon="rec" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // rec icon has a circle element
    expect(container.querySelector('circle')).toBeInTheDocument();
  });

  it('size is w-8 h-8 (32px)', () => {
    const { container } = render(<TransportButton id="play" icon="play" />);
    const button = container.querySelector('button');
    expect(button?.className).toContain('w-8');
    expect(button?.className).toContain('h-8');
  });

  it('active state changes glow', () => {
    const { container: c1 } = render(<TransportButton id="play" icon="play" active={false} />);
    const { container: c2 } = render(<TransportButton id="play2" icon="play" active />);
    const btn1 = c1.querySelector('button') as HTMLElement;
    const btn2 = c2.querySelector('button') as HTMLElement;
    expect(btn1.style.boxShadow).not.toBe(btn2.style.boxShadow);
  });

  it('sets data-control-id', () => {
    const { container } = render(<TransportButton id="play" icon="play" />);
    expect(container.querySelector('[data-control-id="play"]')).toBeInTheDocument();
  });

  it('click handler fires', () => {
    const onClick = vi.fn();
    const { container } = render(<TransportButton id="play" icon="play" onClick={onClick} />);
    const button = container.querySelector('button')!;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
