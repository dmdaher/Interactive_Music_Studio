import { panelOverview } from './panel-overview';
import { displayNavigation } from './display-navigation';
import { selectingPrograms } from './selecting-programs';
import { keyboardPerformance } from './keyboard-performance';
import { oscillatorFundamentals } from './oscillator-fundamentals';
import { filterFundamentals } from './filter-fundamentals';
import { envelopeShaping } from './envelope-shaping';
import { Tutorial } from '@/types/tutorial';

export const deepmind12Tutorials: Tutorial[] = [
  panelOverview,
  displayNavigation,
  selectingPrograms,
  keyboardPerformance,
  oscillatorFundamentals,
  filterFundamentals,
  envelopeShaping,
];

export { panelOverview };
export { displayNavigation };
export { selectingPrograms };
export { keyboardPerformance };
export { oscillatorFundamentals };
export { filterFundamentals };
export { envelopeShaping };
