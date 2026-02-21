'use client';

import { useTutorialStore } from '@/store/tutorialStore';

export function usePanelState() {
  const panelState = useTutorialStore((s) => s.panelState);
  const highlightedControls = useTutorialStore((s) => s.highlightedControls);
  return { panelState, highlightedControls };
}
