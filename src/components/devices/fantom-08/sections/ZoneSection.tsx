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

const knobLabels = ['Attack', 'Release', 'Reverb', 'Chorus', 'Low Gain', 'Mid Gain', 'High Gain', 'EQ ON'];

const sliders = Array.from({ length: 8 }, (_, i) => ({
  id: `slider-${i + 1}`,
  label: `${i + 1}`,
  defaultValue: 100,
}));

// Fixed width for left 3 columns
const LEFT_WIDTH = 130;

export default function ZoneSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: ZoneSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Row 1: [_] [Pan/Lvl] [Ctrl] | 8 knobs */}
      <div className="flex items-end gap-3">
        <div className="flex gap-2 justify-end" style={{ width: LEFT_WIDTH }}>
          <PanelButton
            id="pan-level"
            label="Pan/Lvl"
            variant="function"
            size="sm"
            labelPosition="above"
            hasLed
            ledOn={getState('pan-level').ledOn ?? false}
            ledColor="#00ff44"
            active={getState('pan-level').active}
            highlighted={isHighlighted('pan-level')}
            onClick={() => onButtonClick?.('pan-level')}
          />
          <PanelButton
            id="ctrl"
            label="Ctrl"
            variant="function"
            size="sm"
            labelPosition="above"
            hasLed
            ledOn={getState('ctrl').ledOn ?? false}
            ledColor="#00ff44"
            active={getState('ctrl').active}
            highlighted={isHighlighted('ctrl')}
            onClick={() => onButtonClick?.('ctrl')}
          />
        </div>
        <div className="grid grid-cols-8 gap-3 flex-1">
          {controlKnobs.map((knob) => (
            <Knob
              key={knob.id}
              id={knob.id}
              label=""
              value={panelState[knob.id]?.value ?? knob.defaultValue}
              highlighted={isHighlighted(knob.id)}
              size="sm"
            />
          ))}
        </div>
      </div>

      {/* Rows 2-3 grouped tighter */}
      <div className="flex flex-col gap-0 -mt-3">
        {/* Row 2: [Master Volume] | 8 labels (Attk, Rels, etc.) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center" style={{ width: LEFT_WIDTH }}>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[7px] font-medium text-gray-400 uppercase tracking-wider text-center leading-tight">
                Master Volume
              </span>
              <Knob
                id="master-volume"
                label=""
                value={panelState['master-volume']?.value ?? 100}
                highlighted={isHighlighted('master-volume')}
                size="sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 gap-3 flex-1">
            {knobLabels.map((lbl) => (
              <span key={lbl} className="text-[7px] font-bold text-neutral-300 uppercase tracking-wider text-center">
                {lbl}
              </span>
            ))}
          </div>
        </div>

        {/* Zone buttons with Assign on left, right under Attk/Rels labels */}
        <div className="flex items-start gap-3 -mt-3">
          <div className="flex justify-end" style={{ width: LEFT_WIDTH }}>
            <PanelButton
              id="assign"
              label="Assign"
              variant="function"
              size="sm"
              labelPosition="above"
              active={getState('assign').active}
              highlighted={isHighlighted('assign')}
              onClick={() => onButtonClick?.('assign')}
            />
          </div>
          <div className="grid grid-cols-8 gap-3 flex-1">
            {zoneButtons.map((btn) => {
              const state = panelState[btn.id];
              return (
                <PanelButton
                  key={btn.id}
                  id={btn.id}
                  label={btn.label}
                  variant="zone"
                  size="sm"
                  labelPosition="above"
                  hasLed
                  ledOn={state?.ledOn ?? false}
                  ledColor={state?.ledColor ?? btn.ledColor}
                  active={state?.active ?? false}
                  highlighted={isHighlighted(btn.id)}
                  onClick={() => onButtonClick?.(btn.id)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Rows 5-7: Left buttons + 8 sliders spanning vertically */}
      <div className="flex gap-3">
        {/* Left cols 1-3 for rows 5, 6, 7 — 3 equal columns */}
        <div className="flex flex-col justify-between" style={{ width: LEFT_WIDTH }}>
          {/* Row 5: [_] [Z 9-16] [Z Select] */}
          <div className="grid grid-cols-3 gap-2">
            <div /> {/* empty col 1 */}
            <PanelButton
              id="zone-9-16"
              label="Z 9-16"
              variant="function"
              size="sm"
              labelPosition="above"
              active={getState('zone-9-16').active}
              highlighted={isHighlighted('zone-9-16')}
              onClick={() => onButtonClick?.('zone-9-16')}
            />
            <PanelButton
              id="zone-select"
              label="Z Select"
              variant="function"
              size="sm"
              labelPosition="above"
              active={getState('zone-select').active}
              highlighted={isHighlighted('zone-select')}
              onClick={() => onButtonClick?.('zone-select')}
            />
          </div>

          {/* Row 6: [Split] [Chord] [Arp] — Chord aligns with Z 9-16, Arp with Z Select */}
          <div className="grid grid-cols-3 gap-2">
            <PanelButton
              id="split"
              label="Split"
              variant="function"
              size="sm"
              labelPosition="above"
              hasLed
              ledOn={getState('split').ledOn ?? false}
              ledColor="#00ff44"
              active={getState('split').active}
              highlighted={isHighlighted('split')}
              onClick={() => onButtonClick?.('split')}
            />
            <PanelButton
              id="chord-memory"
              label="Chord"
              variant="function"
              size="sm"
              labelPosition="above"
              hasLed
              ledOn={getState('chord-memory').ledOn ?? false}
              ledColor="#00ff44"
              active={getState('chord-memory').active}
              highlighted={isHighlighted('chord-memory')}
              onClick={() => onButtonClick?.('chord-memory')}
            />
            <PanelButton
              id="arpeggio"
              label="Arp"
              variant="function"
              size="sm"
              labelPosition="above"
              hasLed
              ledOn={getState('arpeggio').ledOn ?? false}
              ledColor="#00ff44"
              active={getState('arpeggio').active}
              highlighted={isHighlighted('arpeggio')}
              onClick={() => onButtonClick?.('arpeggio')}
            />
          </div>

          {/* OCTAVE label centered above Down/Up, with space from row above */}
          <div className="flex flex-col gap-0.5 mt-3">
            <div className="grid grid-cols-3 gap-2">
              <div /> {/* spacer for Trans column */}
              <div className="col-span-2 flex flex-col items-center">
                <span className="text-[7px] font-bold tracking-widest uppercase text-neutral-300">
                  OCTAVE
                </span>
                <div className="border-t border-neutral-600 w-full mb-0.5" />
              </div>
            </div>
            {/* Row 7: [Trans] [Down] [Up] */}
            <div className="grid grid-cols-3 gap-2">
              <PanelButton
                id="transpose"
                label="Trans"
                variant="standard"
                size="sm"
                labelPosition="above"
                active={getState('transpose').active}
                highlighted={isHighlighted('transpose')}
                onClick={() => onButtonClick?.('transpose')}
              />
              <div className="flex flex-col items-center">
                <PanelButton
                  id="octave-down"
                  label="Down"
                  variant="standard"
                  size="sm"
                  labelPosition="above"
                  active={getState('octave-down').active}
                  highlighted={isHighlighted('octave-down')}
                  onClick={() => onButtonClick?.('octave-down')}
                />
                <span className="text-[8px] text-neutral-500 font-bold">-</span>
              </div>
              <div className="flex flex-col items-center">
                <PanelButton
                  id="octave-up"
                  label="Up"
                  variant="standard"
                  size="sm"
                  labelPosition="above"
                  active={getState('octave-up').active}
                  highlighted={isHighlighted('octave-up')}
                />
                <span className="text-[8px] text-neutral-500 font-bold">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right cols 4-11: 8 sliders spanning rows 5-7 */}
        <div className="grid grid-cols-8 gap-3 flex-1">
          {sliders.map((sl) => (
            <Slider
              key={sl.id}
              id={sl.id}
              label={sl.label}
              value={panelState[sl.id]?.value ?? sl.defaultValue}
              highlighted={isHighlighted(sl.id)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
