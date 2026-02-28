'use client';

import { useEffect, useCallback } from 'react';
import { useTutorialStore } from '@/store/tutorialStore';
import { Tutorial } from '@/types/tutorial';

export function useTutorialEngine(tutorial: Tutorial) {
  const store = useTutorialStore();

  useEffect(() => {
    store.loadTutorial(tutorial);
    return () => store.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tutorial]);

  // Autoplay interval
  useEffect(() => {
    if (!store.autoplay || !store.isActive) return;

    const interval = setInterval(() => {
      const state = useTutorialStore.getState();
      if (state.isLastStep()) {
        // Explicitly set false (not toggle) to avoid race with user clicks
        useTutorialStore.setState({ autoplay: false });
      } else {
        state.nextStep();
      }
    }, store.autoplaySpeed * 1000);

    return () => clearInterval(interval);
  }, [store.autoplay, store.autoplaySpeed, store.isActive, store.currentStepIndex]);

  // Reset autoplay timer on manual navigation
  const handleManualNav = useCallback((direction: 'next' | 'prev') => {
    const state = useTutorialStore.getState();
    if (direction === 'next') {
      state.nextStep();
    } else {
      state.prevStep();
    }
    // The interval will restart because currentStepIndex changed (in the dependency array)
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleManualNav('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handleManualNav('prev');
      } else if (e.key === ' ') {
        e.preventDefault();
        useTutorialStore.getState().toggleAutoplay();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleManualNav]);

  return store;
}
