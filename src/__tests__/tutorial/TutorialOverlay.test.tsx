import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TutorialOverlay from '@/components/tutorial/TutorialOverlay';
import { TutorialStep } from '@/types/tutorial';

const makeStep = (overrides: Partial<TutorialStep> = {}): TutorialStep => ({
  id: 'step-1',
  title: 'Test Step Title',
  instruction: 'Test instruction text',
  details: 'Some extra details',
  highlightControls: [],
  panelStateChanges: {},
  tipText: 'A helpful tip',
  ...overrides,
});

describe('TutorialOverlay', () => {
  const defaultProps = {
    step: makeStep(),
    stepNumber: 3,
    totalSteps: 10,
    onNext: vi.fn(),
    onPrev: vi.fn(),
    onClose: vi.fn(),
    isFirst: false,
    isLast: false,
    progress: 30,
  };

  it('renders step title, instruction, details, tipText', () => {
    render(<TutorialOverlay {...defaultProps} />);
    expect(screen.getByText('Test Step Title')).toBeInTheDocument();
    expect(screen.getByText('Test instruction text')).toBeInTheDocument();
    expect(screen.getByText('Some extra details')).toBeInTheDocument();
    expect(screen.getByText('A helpful tip')).toBeInTheDocument();
  });

  it('Back/Next navigation buttons present', () => {
    render(<TutorialOverlay {...defaultProps} />);
    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('Back disabled on first step', () => {
    render(<TutorialOverlay {...defaultProps} isFirst />);
    const backBtn = screen.getByText('Back').closest('button');
    expect(backBtn).toBeDisabled();
  });

  it('Next disabled on last step', () => {
    render(<TutorialOverlay {...defaultProps} isLast />);
    const nextBtn = screen.getByText('Next').closest('button');
    expect(nextBtn).toBeDisabled();
  });

  it('progress bar rendered', () => {
    const { container } = render(<TutorialOverlay {...defaultProps} />);
    // ProgressBar renders a div with bg-white/10 rounded-full
    const progressBar = container.querySelector('.rounded-full.overflow-hidden');
    expect(progressBar).toBeInTheDocument();
  });

  it('step counter shows "Step N of M"', () => {
    render(<TutorialOverlay {...defaultProps} />);
    expect(screen.getByText(/Step 3 of 10/i)).toBeInTheDocument();
  });

  it('clicking Next calls onNext', () => {
    const onNext = vi.fn();
    render(<TutorialOverlay {...defaultProps} onNext={onNext} />);
    fireEvent.click(screen.getByText('Next'));
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('clicking Back calls onPrev', () => {
    const onPrev = vi.fn();
    render(<TutorialOverlay {...defaultProps} onPrev={onPrev} />);
    fireEvent.click(screen.getByText('Back'));
    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it('minimize toggle button present', () => {
    render(<TutorialOverlay {...defaultProps} />);
    expect(screen.getByLabelText('Minimize tutorial panel')).toBeInTheDocument();
  });

  it('clicking minimize collapses to compact bar', () => {
    render(<TutorialOverlay {...defaultProps} />);
    // Initially expanded - title visible
    expect(screen.getByText('Test Step Title')).toBeInTheDocument();

    // Click minimize
    fireEvent.click(screen.getByLabelText('Minimize tutorial panel'));

    // Now minimized - title should still be visible as truncated text, but full instruction hidden
    expect(screen.queryByText('Test instruction text')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Expand tutorial panel')).toBeInTheDocument();
  });

  it('clicking expand restores full content', () => {
    render(<TutorialOverlay {...defaultProps} />);

    // Minimize
    fireEvent.click(screen.getByLabelText('Minimize tutorial panel'));
    expect(screen.queryByText('Test instruction text')).not.toBeInTheDocument();

    // Expand
    fireEvent.click(screen.getByLabelText('Expand tutorial panel'));
    expect(screen.getByText('Test instruction text')).toBeInTheDocument();
  });

  it('is not fixed positioned (in-flow)', () => {
    const { container } = render(<TutorialOverlay {...defaultProps} />);
    const root = container.firstElementChild as HTMLElement;
    expect(root.className).toContain('w-full');
    expect(root.className).not.toContain('fixed');
  });
});
