'use client';

import { useTutorialStore } from '@/store/tutorialStore';

export function useDisplayState() {
  const displayState = useTutorialStore((s) => s.displayState);
  return displayState;
}
