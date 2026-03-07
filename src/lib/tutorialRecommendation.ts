import { Tutorial } from '@/types/tutorial';
import { CATEGORY_LABELS, CATEGORY_PROGRESSION } from './constants';

export interface TutorialRecommendation {
  tutorial: Tutorial;
  reason: string;
}

export function getNextTutorial(
  current: Tutorial,
  all: Tutorial[]
): TutorialRecommendation | null {
  const sameCat = all.filter((t) => t.category === current.category);
  const currentIdx = sameCat.findIndex((t) => t.id === current.id);
  const categoryLabel = CATEGORY_LABELS[current.category] ?? current.category;

  // 1. Same category, next in list
  if (currentIdx >= 0 && currentIdx < sameCat.length - 1) {
    return {
      tutorial: sameCat[currentIdx + 1],
      reason: `Next in ${categoryLabel}`,
    };
  }

  // 2. Same category, higher difficulty (wrap around to first higher-difficulty tutorial)
  const diffOrder = ['beginner', 'intermediate', 'advanced'];
  const currentDiffIdx = diffOrder.indexOf(current.difficulty);
  if (currentDiffIdx < diffOrder.length - 1) {
    const harder = sameCat.find(
      (t) => diffOrder.indexOf(t.difficulty) > currentDiffIdx
    );
    if (harder) {
      return {
        tutorial: harder,
        reason: `Level up in ${categoryLabel}`,
      };
    }
  }

  // 3. Cross-category: next category per progression, first beginner tutorial
  const currentCatIdx = CATEGORY_PROGRESSION.indexOf(
    current.category as (typeof CATEGORY_PROGRESSION)[number]
  );
  for (let i = 1; i < CATEGORY_PROGRESSION.length; i++) {
    const nextCatId =
      CATEGORY_PROGRESSION[(currentCatIdx + i) % CATEGORY_PROGRESSION.length];
    const nextCatTutorials = all.filter((t) => t.category === nextCatId);
    const beginner = nextCatTutorials.find((t) => t.difficulty === 'beginner');
    const first = beginner ?? nextCatTutorials[0];
    if (first) {
      const nextCatLabel = CATEGORY_LABELS[nextCatId] ?? nextCatId;
      return {
        tutorial: first,
        reason: `Continue to ${nextCatLabel}`,
      };
    }
  }

  return null;
}
