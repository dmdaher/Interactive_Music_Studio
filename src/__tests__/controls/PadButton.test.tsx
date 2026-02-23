import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PadButton from '@/components/controls/PadButton';

describe('PadButton', () => {
  it('renders with w-11 h-11 (44x44)', () => {
    const { container } = render(<PadButton id="pad-1" label="1" />);
    const button = container.querySelector('button');
    expect(button?.className).toContain('w-11');
    expect(button?.className).toContain('h-11');
  });

  it('shows label text', () => {
    render(<PadButton id="pad-1" label="1" />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('active state changes background', () => {
    const { container: c1 } = render(<PadButton id="pad-1" label="1" active={false} />);
    const { container: c2 } = render(<PadButton id="pad-2" label="2" active />);
    const btn1 = c1.querySelector('button') as HTMLElement;
    const btn2 = c2.querySelector('button') as HTMLElement;
    expect(btn1.style.background).not.toBe(btn2.style.background);
  });

  it('sets data-control-id', () => {
    const { container } = render(<PadButton id="pad-5" label="5" />);
    expect(container.querySelector('[data-control-id="pad-5"]')).toBeInTheDocument();
  });

  it('click handler fires', () => {
    const onClick = vi.fn();
    render(<PadButton id="pad-1" label="1" onClick={onClick} />);
    fireEvent.click(screen.getByText('1'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
