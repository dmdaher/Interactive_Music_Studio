import { describe, it, expect, beforeEach } from 'vitest';
import { useTutorialStore } from '@/store/tutorialStore';
import { Tutorial } from '@/types/tutorial';

const makeTutorial = (stepCount = 3): Tutorial => ({
  id: 'test-tutorial',
  deviceId: 'fantom-08',
  title: 'Test Tutorial',
  description: 'A test tutorial',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  tags: ['test'],
  steps: Array.from({ length: stepCount }, (_, i) => ({
    id: `step-${i + 1}`,
    title: `Step ${i + 1}`,
    instruction: `Do step ${i + 1}`,
    highlightControls: i === 0 ? ['zone-1'] : [],
    panelStateChanges: i === 0 ? { 'zone-1': { active: true, ledOn: true } } : {},
    displayState: { screenType: 'home' as const },
    zones: [],
  })),
});

describe('tutorialStore', () => {
  beforeEach(() => {
    useTutorialStore.getState().reset();
  });

  describe('loadTutorial', () => {
    it('sets isActive to true', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().isActive).toBe(true);
    });

    it('sets panelState from step 0', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().panelState['zone-1']?.active).toBe(true);
    });

    it('sets displayState from step 0', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().displayState.screenType).toBe('home');
    });

    it('sets highlightedControls from step 0', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().highlightedControls).toEqual(['zone-1']);
    });

    it('sets zones from step 0', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().zones).toEqual([]);
    });
  });

  describe('nextStep / prevStep', () => {
    it('advances to next step', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().nextStep();
      expect(useTutorialStore.getState().currentStepIndex).toBe(1);
    });

    it('retreats to previous step', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().nextStep();
      useTutorialStore.getState().prevStep();
      expect(useTutorialStore.getState().currentStepIndex).toBe(0);
    });

    it('prevStep at step 0 stays at step 0', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().prevStep();
      expect(useTutorialStore.getState().currentStepIndex).toBe(0);
    });

    it('nextStep at last step stays at last step', () => {
      const tutorial = makeTutorial(3);
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().nextStep();
      useTutorialStore.getState().nextStep();
      useTutorialStore.getState().nextStep(); // should not exceed
      expect(useTutorialStore.getState().currentStepIndex).toBe(2);
    });

    it('builds cumulative state correctly', () => {
      const tutorial: Tutorial = {
        ...makeTutorial(2),
        steps: [
          {
            id: 'step-1',
            title: 'Step 1',
            instruction: 'Step 1',
            highlightControls: [],
            panelStateChanges: { 'zone-1': { active: true, ledOn: true } },
          },
          {
            id: 'step-2',
            title: 'Step 2',
            instruction: 'Step 2',
            highlightControls: [],
            panelStateChanges: { 'zone-2': { active: true, ledOn: true } },
          },
        ],
      };
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().nextStep();
      const state = useTutorialStore.getState().panelState;
      expect(state['zone-1']?.active).toBe(true);
      expect(state['zone-2']?.active).toBe(true);
    });
  });

  describe('goToStep', () => {
    it('jumps to arbitrary step with correct cumulative state', () => {
      const tutorial: Tutorial = {
        ...makeTutorial(3),
        steps: [
          {
            id: 'step-1',
            title: 'Step 1',
            instruction: 'Step 1',
            highlightControls: [],
            panelStateChanges: { 'zone-1': { active: true, ledOn: true } },
          },
          {
            id: 'step-2',
            title: 'Step 2',
            instruction: 'Step 2',
            highlightControls: [],
            panelStateChanges: { menu: { active: true } },
          },
          {
            id: 'step-3',
            title: 'Step 3',
            instruction: 'Step 3',
            highlightControls: ['write'],
            panelStateChanges: { write: { active: true, ledOn: true } },
          },
        ],
      };
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().goToStep(2);
      const state = useTutorialStore.getState();
      expect(state.currentStepIndex).toBe(2);
      expect(state.panelState['zone-1']?.active).toBe(true);
      expect(state.panelState['menu']?.active).toBe(true);
      expect(state.panelState['write']?.active).toBe(true);
      expect(state.highlightedControls).toEqual(['write']);
    });
  });

  describe('reset', () => {
    it('clears all state back to defaults', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      useTutorialStore.getState().nextStep();
      useTutorialStore.getState().reset();
      const state = useTutorialStore.getState();
      expect(state.tutorial).toBeNull();
      expect(state.currentStepIndex).toBe(0);
      expect(state.isActive).toBe(false);
      expect(state.panelState).toEqual({});
      expect(state.displayState).toEqual({ screenType: 'home' });
      expect(state.highlightedControls).toEqual([]);
      expect(state.zones).toEqual([]);
    });
  });

  describe('computed values', () => {
    it('currentStep returns correct step', () => {
      const tutorial = makeTutorial();
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().currentStep()?.id).toBe('step-1');
      useTutorialStore.getState().nextStep();
      expect(useTutorialStore.getState().currentStep()?.id).toBe('step-2');
    });

    it('totalSteps returns correct count', () => {
      const tutorial = makeTutorial(5);
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().totalSteps()).toBe(5);
    });

    it('isFirstStep / isLastStep', () => {
      const tutorial = makeTutorial(3);
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().isFirstStep()).toBe(true);
      expect(useTutorialStore.getState().isLastStep()).toBe(false);

      useTutorialStore.getState().goToStep(2);
      expect(useTutorialStore.getState().isFirstStep()).toBe(false);
      expect(useTutorialStore.getState().isLastStep()).toBe(true);
    });

    it('progress calculates correctly', () => {
      const tutorial = makeTutorial(10);
      useTutorialStore.getState().loadTutorial(tutorial);
      expect(useTutorialStore.getState().progress()).toBe(10); // step 1/10 = 10%

      useTutorialStore.getState().goToStep(4);
      expect(useTutorialStore.getState().progress()).toBe(50); // step 5/10 = 50%

      useTutorialStore.getState().goToStep(9);
      expect(useTutorialStore.getState().progress()).toBe(100); // step 10/10 = 100%
    });
  });

  describe('empty tutorial (0 steps)', () => {
    it('handles gracefully', () => {
      const tutorial: Tutorial = {
        ...makeTutorial(0),
        steps: [],
      };
      useTutorialStore.getState().loadTutorial(tutorial);
      const state = useTutorialStore.getState();
      expect(state.isActive).toBe(true);
      expect(state.currentStep()).toBeNull();
      expect(state.totalSteps()).toBe(0);
      expect(state.progress()).toBe(0);
    });
  });
});
