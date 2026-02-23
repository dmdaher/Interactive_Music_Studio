import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PanelButton from '@/components/controls/PanelButton';

describe('PanelButton', () => {
  it('renders label text', () => {
    render(<PanelButton id="test" label="Zone 1" />);
    expect(screen.getByText('Zone 1')).toBeInTheDocument();
  });

  it('applies correct size classes for sm', () => {
    const { container } = render(<PanelButton id="test" label="A" size="sm" />);
    const button = container.querySelector('button');
    expect(button?.className).toContain('w-8');
    expect(button?.className).toContain('h-6');
  });

  it('applies correct size classes for md', () => {
    const { container } = render(<PanelButton id="test" label="A" size="md" />);
    const button = container.querySelector('button');
    expect(button?.className).toContain('w-10');
    expect(button?.className).toContain('h-7');
  });

  it('applies correct size classes for lg', () => {
    const { container } = render(<PanelButton id="test" label="A" size="lg" />);
    const button = container.querySelector('button');
    expect(button?.className).toContain('w-14');
    expect(button?.className).toContain('h-9');
  });

  it('sets data-control-id attribute', () => {
    const { container } = render(<PanelButton id="zone-1" label="1" />);
    expect(container.querySelector('[data-control-id="zone-1"]')).toBeInTheDocument();
  });

  it('renders LED when hasLed=true', () => {
    const { container } = render(<PanelButton id="test" label="A" hasLed />);
    const leds = container.querySelectorAll('.rounded-full');
    expect(leds.length).toBeGreaterThan(0);
  });

  it('does not render LED when hasLed=false', () => {
    const { container } = render(<PanelButton id="test" label="A" hasLed={false} />);
    // The wrapper div should only contain the button, no LED div
    const wrapper = container.querySelector('[data-control-id="test"]');
    // No LED indicator present (no rounded-full div before button)
    const children = wrapper?.children;
    expect(children?.length).toBe(1); // only the button
  });

  it('LED glows when ledOn=true', () => {
    const { container } = render(<PanelButton id="test" label="A" hasLed ledOn />);
    const led = container.querySelector('.rounded-full');
    expect(led).toBeInTheDocument();
    const style = (led as HTMLElement)?.style;
    expect(style.backgroundColor).not.toBe('#1a1a1a');
  });

  it('click handler fires onClick', () => {
    const onClick = vi.fn();
    render(<PanelButton id="test" label="Click me" onClick={onClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('all 6 variants render without crashing', () => {
    const variants = ['standard', 'zone', 'scene', 'category', 'function', 'menu'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <PanelButton id={`test-${variant}`} label={variant} variant={variant} />,
      );
      expect(screen.getByText(variant)).toBeInTheDocument();
      unmount();
    });
  });
});
