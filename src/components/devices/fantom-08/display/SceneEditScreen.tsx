'use client';

import { MenuItem } from '@/types/display';
import { DISPLAY_COLORS } from '@/lib/constants';
import ParameterTabEditor from './shared/ParameterTabEditor';

/**
 * Scene Edit tabs as documented in the Reference Manual p.54.
 * GENERAL: Scene Level, Tempo, Pad Mode, etc.
 * CONTROL: MIDI control parameters for Tone Control 1-4
 * PEDAL: Pedal connection parameters
 * KNOB: Control knob ASSIGN 1 parameters
 * SLIDER: Slider ASSIGN 1 parameters
 * S1/S2: S1/S2 button parameters
 * WHEEL1/2: Wheel 1 and 2 parameters
 * VOCODER: Vocoder parameters (requires AUDIO IN)
 * SONG: Sequencer/SMF player settings
 */
const SCENE_EDIT_TABS = [
  'GENERAL',
  'CONTROL',
  'PEDAL',
  'KNOB',
  'SLIDER',
  'S1/S2',
  'WHEEL1/2',
  'VOCODER',
  'SONG',
] as const;

interface SceneEditScreenProps {
  activeTab?: string;
  parameters?: MenuItem[];
  selectedIndex?: number;
}

export default function SceneEditScreen({
  activeTab = 'GENERAL',
  parameters = [],
  selectedIndex = 0,
}: SceneEditScreenProps) {
  return (
    <ParameterTabEditor
      tabs={SCENE_EDIT_TABS}
      activeTab={activeTab}
      parameters={parameters}
      selectedIndex={selectedIndex}
      eKnobHints={{
        left: ['E1:Tab', 'E2:Cursor'],
        right: ['E6:Value'],
      }}
    />
  );
}
