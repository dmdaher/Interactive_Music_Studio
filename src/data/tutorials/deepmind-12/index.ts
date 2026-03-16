import { panelOverview } from './panel-overview';
import { displayNavigation } from './display-navigation';
import { selectingPrograms } from './selecting-programs';
import { keyboardPerformance } from './keyboard-performance';
import { oscillatorFundamentals } from './oscillator-fundamentals';
import { filterFundamentals } from './filter-fundamentals';
import { envelopeShaping } from './envelope-shaping';
import { oscillatorMixing } from './oscillator-mixing';
import { hpfBassBoost } from './hpf-bass-boost';
import { signalPath } from './signal-path';
import { arpeggiatorBasics } from './arpeggiator-basics';
import { Tutorial } from '@/types/tutorial';

export const deepmind12Tutorials: Tutorial[] = [
  panelOverview,
  displayNavigation,
  selectingPrograms,
  keyboardPerformance,
  oscillatorFundamentals,
  filterFundamentals,
  envelopeShaping,
  oscillatorMixing,
  hpfBassBoost,
  signalPath,
  arpeggiatorBasics,
];

export { panelOverview };
export { displayNavigation };
export { selectingPrograms };
export { keyboardPerformance };
export { oscillatorFundamentals };
export { filterFundamentals };
export { envelopeShaping };
export { oscillatorMixing };
export { hpfBassBoost };
export { signalPath };
export { arpeggiatorBasics };
