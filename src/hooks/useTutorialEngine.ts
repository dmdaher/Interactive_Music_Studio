'use client';

import { useEffect } from 'react';
import { useTutorialStore } from '@/store/tutorialStore';
import { Tutorial } from '@/types/tutorial';

export function useTutorialEngine(tutorial: Tutorial) {
  const store = useTutorialStore();

  useEffect(() => {
    store.loadTutorial(tutorial);
    return () => store.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tutorial]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        store.nextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        store.prevStep();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return store;
}
