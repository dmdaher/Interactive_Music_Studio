import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import StepContent from '@/components/tutorial/StepContent';
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

describe('StepContent', () => {
  it('renders title, instruction, and tip', () => {
    render(<StepContent step={makeStep()} />);
    expect(screen.getByText('Test Step Title')).toBeInTheDocument();
    expect(screen.getByText('Test instruction text')).toBeInTheDocument();
    expect(screen.getByText('A helpful tip')).toBeInTheDocument();
  });

  it('details expanded by default, "Hide details" visible', () => {
    render(<StepContent step={makeStep()} />);
    expect(screen.getByText('Some extra details')).toBeInTheDocument();
    expect(screen.getByText('Hide details')).toBeInTheDocument();
  });

  it('collapses and expands details on click', () => {
    render(<StepContent step={makeStep()} />);
    fireEvent.click(screen.getByText('Hide details'));
    expect(screen.getByText('Show details')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Show details'));
    expect(screen.getByText('Hide details')).toBeInTheDocument();
  });

  it('no tip box when tipText is absent', () => {
    render(<StepContent step={makeStep({ tipText: undefined })} />);
    expect(screen.queryByText('Tip:')).not.toBeInTheDocument();
  });

  it('no details toggle when details is absent', () => {
    render(<StepContent step={makeStep({ details: undefined })} />);
    expect(screen.queryByText('Show details')).not.toBeInTheDocument();
  });

  it('content wrapper has max-w-[800px]', () => {
    const { container } = render(<StepContent step={makeStep()} />);
    const wrapper = container.querySelector('.max-w-\\[800px\\]');
    expect(wrapper).toBeInTheDocument();
  });
});
