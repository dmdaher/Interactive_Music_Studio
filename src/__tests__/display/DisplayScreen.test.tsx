import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DisplayScreen from '@/components/devices/fantom-08/display/DisplayScreen';

describe('DisplayScreen', () => {
  it('renders home screen (scene select) by default', () => {
    render(<DisplayScreen displayState={{ screenType: 'home' }} />);
    // Status bar and scene select screen both show SCENE label
    const sceneTexts = screen.getAllByText('SCENE');
    expect(sceneTexts.length).toBeGreaterThanOrEqual(1);
  });

  it('home screen shows scene grid with A001', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'home',
          sceneNumber: 'A001',
          sceneName: 'Homecoming',
        }}
      />,
    );
    const a001Texts = screen.getAllByText(/A001/);
    expect(a001Texts.length).toBeGreaterThanOrEqual(1);
  });

  it('display is w-full with landscape aspect ratio', () => {
    const { container } = render(
      <DisplayScreen displayState={{ screenType: 'home' }} />,
    );
    const display = container.firstElementChild as HTMLElement;
    expect(display.className).toContain('w-full');
    // Widescreen aspect ratio (16:9) enforced via inline style
    expect(display.style.aspectRatio).toBe('16 / 9');
  });

  it('persistent status bar shows tempo', () => {
    render(
      <DisplayScreen
        displayState={{ screenType: 'home', tempo: 140, beatSignature: '3/4' }}
      />,
    );
    expect(screen.getByText(/140/)).toBeInTheDocument();
    expect(screen.getByText('3/4')).toBeInTheDocument();
  });

  it('status bar shows effect pills', () => {
    const { container } = render(
      <DisplayScreen displayState={{ screenType: 'home' }} />,
    );
    expect(container.textContent).toContain('IFX1');
    expect(container.textContent).toContain('CHO');
    expect(container.textContent).toContain('REV');
  });

  it('switches screen based on screenType: zone-view', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'zone-view',
          title: 'ZONE VIEW',
          zoneViewMode: 4,
          zones: [
            {
              zoneNumber: 1,
              zoneName: 'Zone 1',
              toneName: 'INIT TONE',
              keyRangeLow: 'A0',
              keyRangeHigh: 'C8',
              volume: 100,
              pan: 0,
              muted: false,
              active: true,
            },
          ],
        }}
      />,
    );
    expect(screen.getByText('ZONE VIEW')).toBeInTheDocument();
  });

  it('zone-view shows DISP mode indicator', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'zone-view',
          title: 'ZONE VIEW',
          zoneViewMode: 4,
          zones: [
            {
              zoneNumber: 1,
              zoneName: 'Zone 1',
              toneName: 'INIT TONE',
              keyRangeLow: 'A0',
              keyRangeHigh: 'C8',
              volume: 100,
              pan: 0,
              muted: false,
              active: true,
            },
          ],
        }}
      />,
    );
    expect(screen.getByText('DISP: 4')).toBeInTheDocument();
  });

  it('switches screen based on screenType: menu', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'menu',
          title: 'MENU',
          menuItems: [{ label: 'Zone Edit', selected: true }],
          selectedIndex: 0,
        }}
      />,
    );
    expect(screen.getByText('MENU')).toBeInTheDocument();
    // Menu items are uppercased in the 2-column grid
    expect(screen.getByText('ZONE EDIT')).toBeInTheDocument();
  });

  it('switches screen based on screenType: write', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'write',
          title: 'SCENE WRITE',
          sceneNumber: 'A001',
          sceneName: 'Homecoming',
        }}
      />,
    );
    expect(screen.getByText('SCENE WRITE')).toBeInTheDocument();
    expect(screen.getByText('WRITE SOURCE')).toBeInTheDocument();
    expect(screen.getByText('WRITE DESTINATION')).toBeInTheDocument();
  });

  it('write screen shows RENAME/CANCEL/OK buttons', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'write',
          title: 'SCENE WRITE',
          sceneNumber: 'A001',
          sceneName: 'Homecoming',
        }}
      />,
    );
    expect(screen.getByText('RENAME')).toBeInTheDocument();
    expect(screen.getByText('CANCEL')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });

  it('switches screen based on screenType: key-range', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'key-range',
          title: 'KEY RANGE',
          parameterName: 'A0',
          parameterValue: 'C8',
        }}
      />,
    );
    expect(screen.getByText('KEY RANGE')).toBeInTheDocument();
  });

  it('switches screen based on screenType: tone-select', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'tone-select',
          title: 'TONE LIST',
          menuItems: [{ label: 'Concert Grand' }],
          selectedIndex: 0,
        }}
      />,
    );
    // Header shows the title
    expect(screen.getByText('TONE LIST')).toBeInTheDocument();
    // Tone list shows the item with a number prefix
    expect(screen.getByText(/Concert Grand/)).toBeInTheDocument();
  });

  it('tone-select shows category tabs and footer', () => {
    render(
      <DisplayScreen
        displayState={{
          screenType: 'tone-select',
          title: 'TONE LIST - Zone 2',
          menuItems: [{ label: 'Concert Grand', selected: true }, { label: 'Bright Piano' }],
          selectedIndex: 0,
        }}
      />,
    );
    expect(screen.getByText('Piano')).toBeInTheDocument();
    expect(screen.getByText('Organ')).toBeInTheDocument();
    expect(screen.getByText(/PAGE/)).toBeInTheDocument();
  });

  it('scanline overlay present', () => {
    const { container } = render(
      <DisplayScreen displayState={{ screenType: 'home' }} />,
    );
    const scanlines = container.querySelectorAll('.pointer-events-none.z-10');
    expect(scanlines.length).toBeGreaterThan(0);
  });

  it('header shows title on non-home screens', () => {
    render(
      <DisplayScreen
        displayState={{ screenType: 'menu', title: 'MY TITLE', menuItems: [], selectedIndex: 0 }}
      />,
    );
    expect(screen.getByText('MY TITLE')).toBeInTheDocument();
  });

  it('header shows back arrow on non-home screens', () => {
    const { container } = render(
      <DisplayScreen
        displayState={{ screenType: 'menu', title: 'MENU', menuItems: [], selectedIndex: 0 }}
      />,
    );
    // Back arrow is ◀ character (U+25C0, decimal 9664)
    expect(container.textContent).toContain('\u25C0');
  });

  it('highlighted state adds blue glow border', () => {
    const { container: c1 } = render(
      <DisplayScreen displayState={{ screenType: 'home' }} highlighted />,
    );
    const { container: c2 } = render(
      <DisplayScreen displayState={{ screenType: 'home' }} highlighted={false} />,
    );
    const displayHighlighted = c1.firstElementChild as HTMLElement;
    const displayNormal = c2.firstElementChild as HTMLElement;
    expect(displayHighlighted.style.border).not.toBe(displayNormal.style.border);
  });
});
