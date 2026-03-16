import { panelOverview } from './panel-overview';
import { displayNavigation } from './display-navigation';
import { selectingPrograms } from './selecting-programs';
import { keyboardPerformance } from './keyboard-performance';
import { Tutorial } from '@/types/tutorial';

export const deepmind12Tutorials: Tutorial[] = [
  panelOverview,
  displayNavigation,
  selectingPrograms,
  keyboardPerformance,
];

export { panelOverview };
export { displayNavigation };
export { selectingPrograms };
export { keyboardPerformance };
