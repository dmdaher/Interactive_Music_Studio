'use client';

import { create } from 'zustand';
import { Tutorial, TutorialStep } from '@/types/tutorial';
import { PanelState } from '@/types/panel';
import { DisplayState } from '@/types/display';
import { ZoneConfig } from '@/types/keyboard';
import { buildCumulativeState } from '@/lib/panelMapping';

interface TutorialStore {
  // Tutorial data
  tutorial: Tutorial | null;
  currentStepIndex: number;
  isActive: boolean;

  // Derived state (computed from cumulative steps)
  panelState: PanelState;
  displayState: DisplayState;
  highlightedControls: string[];
  zones: ZoneConfig[];

  // Autoplay state
  autoplay: boolean;
  autoplaySpeed: number; // seconds per step (4, 8, 15)

  // Actions
  loadTutorial: (tutorial: Tutorial) => void;
  goToStep: (index: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  toggleAutoplay: () => void;
  setAutoplaySpeed: (speed: number) => void;

  // Computed
  currentStep: () => TutorialStep | null;
  totalSteps: () => number;
  isFirstStep: () => boolean;
  isLastStep: () => boolean;
  progress: () => number;
}

const defaultDisplayState: DisplayState = { screenType: 'home' };
const defaultPanelState: PanelState = {};

export const useTutorialStore = create<TutorialStore>((set, get) => ({
  // Tutorial data
  tutorial: null,
  currentStepIndex: 0,
  isActive: false,

  // Derived state
  panelState: defaultPanelState,
  displayState: defaultDisplayState,
  highlightedControls: [],
  zones: [],

  // Autoplay state
  autoplay: false,
  autoplaySpeed: 8,

  // Actions
  loadTutorial: (tutorial: Tutorial) => {
    if (!tutorial.steps.length) {
      set({
        tutorial,
        currentStepIndex: 0,
        isActive: true,
        panelState: defaultPanelState,
        displayState: defaultDisplayState,
        highlightedControls: [],
        zones: [],
      });
      return;
    }

    const firstStep = tutorial.steps[0];
    const panelState = buildCumulativeState(defaultPanelState, tutorial.steps, 0);

    set({
      tutorial,
      currentStepIndex: 0,
      isActive: true,
      panelState,
      displayState: firstStep.displayState ?? defaultDisplayState,
      highlightedControls: firstStep.highlightControls,
      zones: firstStep.zones ?? [],
    });
  },

  goToStep: (index: number) => {
    const { tutorial } = get();
    if (!tutorial || index < 0 || index >= tutorial.steps.length) return;

    const targetStep = tutorial.steps[index];
    const panelState = buildCumulativeState(defaultPanelState, tutorial.steps, index);

    set({
      currentStepIndex: index,
      panelState,
      displayState: targetStep.displayState ?? defaultDisplayState,
      highlightedControls: targetStep.highlightControls,
      zones: targetStep.zones ?? [],
    });
  },

  nextStep: () => {
    const { currentStepIndex, tutorial, goToStep } = get();
    if (!tutorial) return;
    if (currentStepIndex < tutorial.steps.length - 1) {
      goToStep(currentStepIndex + 1);
    }
  },

  prevStep: () => {
    const { currentStepIndex, goToStep } = get();
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    }
  },

  reset: () => {
    set({
      tutorial: null,
      currentStepIndex: 0,
      isActive: false,
      panelState: defaultPanelState,
      displayState: defaultDisplayState,
      highlightedControls: [],
      zones: [],
      autoplay: false,
      autoplaySpeed: 8,
    });
  },

  toggleAutoplay: () => {
    set((state) => ({ autoplay: !state.autoplay }));
  },

  setAutoplaySpeed: (speed: number) => {
    set({ autoplaySpeed: speed });
  },

  // Computed
  currentStep: () => {
    const { tutorial, currentStepIndex } = get();
    if (!tutorial || !tutorial.steps.length) return null;
    return tutorial.steps[currentStepIndex] ?? null;
  },

  totalSteps: () => {
    const { tutorial } = get();
    return tutorial?.steps.length ?? 0;
  },

  isFirstStep: () => {
    return get().currentStepIndex === 0;
  },

  isLastStep: () => {
    const { currentStepIndex, tutorial } = get();
    if (!tutorial) return true;
    return currentStepIndex === tutorial.steps.length - 1;
  },

  progress: () => {
    const { currentStepIndex, tutorial } = get();
    if (!tutorial || !tutorial.steps.length) return 0;
    return ((currentStepIndex + 1) / tutorial.steps.length) * 100;
  },
}));
