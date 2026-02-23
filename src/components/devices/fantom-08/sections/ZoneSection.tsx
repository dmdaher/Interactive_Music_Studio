'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import Knob from '@/components/controls/Knob';
import Slider from '@/components/controls/Slider';
import { PanelState } from '@/types/panel';
import { ZONE_COLORS } from '@/lib/constants';

interface ZoneSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

const zoneButtons = [
  { id: 'zone-1', label: '1', ledColor: ZONE_COLORS.zone1 },
  { id: 'zone-2', label: '2', ledColor: ZONE_COLORS.zone2 },
  { id: 'zone-3', label: '3', ledColor: ZONE_COLORS.zone3 },
  { id: 'zone-4', label: '4', ledColor: ZONE_COLORS.zone4 },
  { id: 'zone-5', label: '5', ledColor: ZONE_COLORS.zone5 },
  { id: 'zone-6', label: '6', ledColor: ZONE_COLORS.zone6 },
  { id: 'zone-7', label: '7', ledColor: ZONE_COLORS.zone7 },
  { id: 'zone-8', label: '8', ledColor: ZONE_COLORS.zone8 },
];

const controlKnobs = [
  { id: 'ctrl-knob-1', label: '1', defaultValue: 64 },
  { id: 'ctrl-knob-2', label: '2', defaultValue: 0 },
  { id: 'ctrl-knob-3', label: '3', defaultValue: 0 },
  { id: 'ctrl-knob-4', label: '4', defaultValue: 64 },
  { id: 'ctrl-knob-5', label: '5', defaultValue: 100 },
  { id: 'ctrl-knob-6', label: '6', defaultValue: 40 },
  { id: 'ctrl-knob-7', label: '7', defaultValue: 0 },
  { id: 'ctrl-knob-8', label: '8', defaultValue: 0 },
];

const sliders = Array.from({ length: 8 }, (_, i) => ({
  id: `slider-${i + 1}`,
  label: `${i + 1}`,
  defaultValue: 100,
}));

export default function ZoneSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: ZoneSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top row: MASTER VOL | PAN/LEVEL  CTRL  ASSIGN */}
      <div className="flex items-end gap-3">
        <Knob
          id="master-volume"
          label="Vol"
          value={panelState['master-volume']?.value ?? 100}
          highlighted={highlightedControls.includes('master-volume')}
          size="sm"
        />
        <PanelButton
          id="pan-level"
          label="Pan/Lvl"
          variant="function"
          size="sm"
          hasLed
          ledOn={panelState['pan-level']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['pan-level']?.active ?? false}
          highlighted={highlightedControls.includes('pan-level')}
          onClick={() => onButtonClick?.('pan-level')}
        />
        <PanelButton
          id="ctrl"
          label="Ctrl"
          variant="function"
          size="sm"
          hasLed
          ledOn={panelState['ctrl']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['ctrl']?.active ?? false}
          highlighted={highlightedControls.includes('ctrl')}
          onClick={() => onButtonClick?.('ctrl')}
        />
        <PanelButton
          id="assign"
          label="Assign"
          variant="function"
          size="sm"
          active={panelState['assign']?.active ?? false}
          highlighted={highlightedControls.includes('assign')}
          onClick={() => onButtonClick?.('assign')}
        />
      </div>

      {/* Control knobs [1]-[8] — single row of 8 */}
      <div className="grid grid-cols-8 gap-1">
        {controlKnobs.map((knob) => (
          <Knob
            key={knob.id}
            id={knob.id}
            label={knob.label}
            value={panelState[knob.id]?.value ?? knob.defaultValue}
            highlighted={highlightedControls.includes(knob.id)}
            size="sm"
          />
        ))}
      </div>

      {/* Sliders [1]-[8] — single row, aligned to knob columns */}
      <div className="grid grid-cols-8 gap-1">
        {sliders.map((sl) => (
          <Slider
            key={sl.id}
            id={sl.id}
            label={sl.label}
            value={panelState[sl.id]?.value ?? sl.defaultValue}
            highlighted={highlightedControls.includes(sl.id)}
          />
        ))}
      </div>

      <span className="text-[8px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
        ZONE
      </span>

      {/* Single row of 8 zone buttons */}
      <div className="grid grid-cols-8 gap-0.5">
        {zoneButtons.map((btn) => {
          const state = panelState[btn.id];
          return (
            <PanelButton
              key={btn.id}
              id={btn.id}
              label={btn.label}
              variant="zone"
              size="sm"
              hasLed
              ledOn={state?.ledOn ?? false}
              ledColor={btn.ledColor}
              active={state?.active ?? false}
              highlighted={highlightedControls.includes(btn.id)}
              onClick={() => onButtonClick?.(btn.id)}
            />
          );
        })}
      </div>

      {/* INT + ZONE 9-16 + ZONE SELECT */}
      <div className="flex justify-center gap-0.5">
        <PanelButton
          id="zone-int"
          label="INT"
          variant="zone"
          size="sm"
          hasLed
          ledOn={panelState['zone-int']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['zone-int']?.active ?? false}
          highlighted={highlightedControls.includes('zone-int')}
          onClick={() => onButtonClick?.('zone-int')}
        />
        <PanelButton
          id="zone-9-16"
          label="9-16"
          variant="function"
          size="sm"
          active={panelState['zone-9-16']?.active ?? false}
          highlighted={highlightedControls.includes('zone-9-16')}
          onClick={() => onButtonClick?.('zone-9-16')}
        />
        <PanelButton
          id="zone-select"
          label="Select"
          variant="function"
          size="sm"
          active={panelState['zone-select']?.active ?? false}
          highlighted={highlightedControls.includes('zone-select')}
          onClick={() => onButtonClick?.('zone-select')}
        />
      </div>

      {/* Function row: Split, Arpeggio, Chord Mem */}
      <div className="grid grid-cols-3 gap-0.5">
        <PanelButton
          id="split"
          label="Split"
          variant="function"
          size="sm"
          hasLed
          ledOn={panelState['split']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['split']?.active ?? false}
          highlighted={highlightedControls.includes('split')}
          onClick={() => onButtonClick?.('split')}
        />
        <PanelButton
          id="arpeggio"
          label="Arp"
          variant="function"
          size="sm"
          hasLed
          ledOn={panelState['arpeggio']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['arpeggio']?.active ?? false}
          highlighted={highlightedControls.includes('arpeggio')}
          onClick={() => onButtonClick?.('arpeggio')}
        />
        <PanelButton
          id="chord-memory"
          label="Chord"
          variant="function"
          size="sm"
          hasLed
          ledOn={panelState['chord-memory']?.ledOn ?? false}
          ledColor="#00ff44"
          active={panelState['chord-memory']?.active ?? false}
          highlighted={highlightedControls.includes('chord-memory')}
          onClick={() => onButtonClick?.('chord-memory')}
        />
      </div>

      {/* Transpose + Octave row */}
      <div className="grid grid-cols-3 gap-0.5">
        <PanelButton
          id="transpose"
          label="Trans"
          variant="standard"
          size="sm"
          active={panelState['transpose']?.active ?? false}
          highlighted={highlightedControls.includes('transpose')}
          onClick={() => onButtonClick?.('transpose')}
        />
        <PanelButton
          id="octave-down"
          label="Oct-"
          variant="standard"
          size="sm"
          active={panelState['octave-down']?.active ?? false}
          highlighted={highlightedControls.includes('octave-down')}
          onClick={() => onButtonClick?.('octave-down')}
        />
        <PanelButton
          id="octave-up"
          label="Oct+"
          variant="standard"
          size="sm"
          active={panelState['octave-up']?.active ?? false}
          highlighted={highlightedControls.includes('octave-up')}
          onClick={() => onButtonClick?.('octave-up')}
        />
      </div>
    </motion.div>
  );
}
