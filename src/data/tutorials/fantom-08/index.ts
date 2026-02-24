import { splitKeyboardZones } from './split-keyboard-zones';
import { panelOverview } from './panel-overview';
import { selectingScenes } from './selecting-scenes';
import { selectingTones } from './selecting-tones';
import { savingYourWork } from './saving-your-work';
import { layeringZones } from './layering-zones';
import { fourZoneSetup } from './four-zone-setup';
import { transposeOctave } from './transpose-octave';
import { usingSlidersKnobs } from './using-sliders-knobs';
import { editingMfx } from './editing-mfx';
import { Tutorial } from '@/types/tutorial';

export const fantom08Tutorials: Tutorial[] = [
  panelOverview,
  selectingScenes,
  selectingTones,
  savingYourWork,
  splitKeyboardZones,
  layeringZones,
  fourZoneSetup,
  transposeOctave,
  usingSlidersKnobs,
  editingMfx,
];

export {
  panelOverview,
  selectingScenes,
  selectingTones,
  savingYourWork,
  splitKeyboardZones,
  layeringZones,
  fourZoneSetup,
  transposeOctave,
  usingSlidersKnobs,
  editingMfx,
};
