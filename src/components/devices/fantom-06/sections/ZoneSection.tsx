'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import Slider from '@/components/controls/Slider';
import { PanelState } from '@/types/panel';

interface ZoneSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function ZoneSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: ZoneSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <div data-section-id="zone">
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 265,
              top: 118,
              width: 39,
              height: 32,
            }}
          >
            <Knob
              id="master-volume"
              label=""
              value={getState('master-volume').value ?? 64}
              highlighted={isHighlighted('master-volume')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 312,
              top: 81,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="pan-level"
                label=""
                width={32}
                height={20}
                active={getState('pan-level').active}
                highlighted={isHighlighted('pan-level')}
                onClick={() => onButtonClick?.('pan-level')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 351,
              top: 83,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="ctrl"
                label=""
                width={32}
                height={20}
                active={getState('ctrl').active}
                highlighted={isHighlighted('ctrl')}
                onClick={() => onButtonClick?.('ctrl')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 351,
              top: 124,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="assign"
                label=""
                width={32}
                height={20}
                active={getState('assign').active}
                highlighted={isHighlighted('assign')}
                onClick={() => onButtonClick?.('assign')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 312,
              top: 165,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-9-16"
                label=""
                width={32}
                height={20}
                active={getState('zone-9-16').active}
                highlighted={isHighlighted('zone-9-16')}
                onClick={() => onButtonClick?.('zone-9-16')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 351,
              top: 164,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-select"
                label=""
                width={32}
                height={20}
                active={getState('zone-select').active}
                highlighted={isHighlighted('zone-select')}
                onClick={() => onButtonClick?.('zone-select')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 402,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-1"
              label=""
              value={getState('knob-1').value ?? 64}
              highlighted={isHighlighted('knob-1')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 445,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-2"
              label=""
              value={getState('knob-2').value ?? 64}
              highlighted={isHighlighted('knob-2')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 487,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-3"
              label=""
              value={getState('knob-3').value ?? 64}
              highlighted={isHighlighted('knob-3')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 529,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-4"
              label=""
              value={getState('knob-4').value ?? 64}
              highlighted={isHighlighted('knob-4')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 572,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-5"
              label=""
              value={getState('knob-5').value ?? 64}
              highlighted={isHighlighted('knob-5')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 614,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-6"
              label=""
              value={getState('knob-6').value ?? 64}
              highlighted={isHighlighted('knob-6')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 656,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-7"
              label=""
              value={getState('knob-7').value ?? 64}
              highlighted={isHighlighted('knob-7')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 698,
              top: 77,
              width: 32,
              height: 32,
            }}
          >
            <Knob
              id="knob-8"
              label=""
              value={getState('knob-8').value ?? 64}
              highlighted={isHighlighted('knob-8')}
              outerSize={32}
              innerSize={22}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 400,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-1"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-1').active}
                highlighted={isHighlighted('zone-int-ext-1')}
                onClick={() => onButtonClick?.('zone-int-ext-1')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 443,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-2"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-2').active}
                highlighted={isHighlighted('zone-int-ext-2')}
                onClick={() => onButtonClick?.('zone-int-ext-2')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 484,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-3"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-3').active}
                highlighted={isHighlighted('zone-int-ext-3')}
                onClick={() => onButtonClick?.('zone-int-ext-3')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 527,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-4"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-4').active}
                highlighted={isHighlighted('zone-int-ext-4')}
                onClick={() => onButtonClick?.('zone-int-ext-4')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 568,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-5"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-5').active}
                highlighted={isHighlighted('zone-int-ext-5')}
                onClick={() => onButtonClick?.('zone-int-ext-5')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 611,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-6"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-6').active}
                highlighted={isHighlighted('zone-int-ext-6')}
                onClick={() => onButtonClick?.('zone-int-ext-6')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 652,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-7"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-7').active}
                highlighted={isHighlighted('zone-int-ext-7')}
                onClick={() => onButtonClick?.('zone-int-ext-7')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 695,
              top: 139,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="zone-int-ext-8"
                label=""
                width={32}
                height={20}
                active={getState('zone-int-ext-8').active}
                highlighted={isHighlighted('zone-int-ext-8')}
                onClick={() => onButtonClick?.('zone-int-ext-8')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 408,
              top: 187,
              width: 18,
              height: 75,
            }}
          >
            <Slider
              id="slider-1"
              label=""
              value={getState('slider-1').value ?? 64}
              highlighted={isHighlighted('slider-1')}
              trackHeight={55}
              trackWidth={8}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 449,
              top: 187,
              width: 19,
              height: 75,
            }}
          >
            <Slider
              id="slider-2"
              label=""
              value={getState('slider-2').value ?? 64}
              highlighted={isHighlighted('slider-2')}
              trackHeight={55}
              trackWidth={9}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 490,
              top: 187,
              width: 19,
              height: 75,
            }}
          >
            <Slider
              id="slider-3"
              label=""
              value={getState('slider-3').value ?? 64}
              highlighted={isHighlighted('slider-3')}
              trackHeight={55}
              trackWidth={9}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 533,
              top: 187,
              width: 19,
              height: 75,
            }}
          >
            <Slider
              id="slider-4"
              label=""
              value={getState('slider-4').value ?? 64}
              highlighted={isHighlighted('slider-4')}
              trackHeight={55}
              trackWidth={9}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 576,
              top: 187,
              width: 18,
              height: 75,
            }}
          >
            <Slider
              id="slider-5"
              label=""
              value={getState('slider-5').value ?? 64}
              highlighted={isHighlighted('slider-5')}
              trackHeight={55}
              trackWidth={8}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 617,
              top: 187,
              width: 19,
              height: 75,
            }}
          >
            <Slider
              id="slider-6"
              label=""
              value={getState('slider-6').value ?? 64}
              highlighted={isHighlighted('slider-6')}
              trackHeight={55}
              trackWidth={9}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 660,
              top: 187,
              width: 18,
              height: 75,
            }}
          >
            <Slider
              id="slider-7"
              label=""
              value={getState('slider-7').value ?? 64}
              highlighted={isHighlighted('slider-7')}
              trackHeight={55}
              trackWidth={8}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 703,
              top: 187,
              width: 18,
              height: 75,
            }}
          >
            <Slider
              id="slider-8"
              label=""
              value={getState('slider-8').value ?? 64}
              highlighted={isHighlighted('slider-8')}
              trackHeight={55}
              trackWidth={8}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 271,
              top: 204,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="split"
                label=""
                width={32}
                height={20}
                active={getState('split').active}
                highlighted={isHighlighted('split')}
                onClick={() => onButtonClick?.('split')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 312,
              top: 204,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="chord-memory"
                label=""
                width={32}
                height={20}
                active={getState('chord-memory').active}
                highlighted={isHighlighted('chord-memory')}
                onClick={() => onButtonClick?.('chord-memory')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 351,
              top: 205,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="arpeggio"
                label=""
                width={32}
                height={20}
                active={getState('arpeggio').active}
                highlighted={isHighlighted('arpeggio')}
                onClick={() => onButtonClick?.('arpeggio')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 271,
              top: 245,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="transpose"
                label=""
                width={32}
                height={20}
                active={getState('transpose').active}
                highlighted={isHighlighted('transpose')}
                onClick={() => onButtonClick?.('transpose')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 312,
              top: 245,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="octave-down"
                label=""
                width={32}
                height={20}
                active={getState('octave-down').active}
                highlighted={isHighlighted('octave-down')}
                onClick={() => onButtonClick?.('octave-down')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 351,
              top: 245,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="octave-up"
                label=""
                width={32}
                height={20}
                active={getState('octave-up').active}
                highlighted={isHighlighted('octave-up')}
                onClick={() => onButtonClick?.('octave-up')}
              />
            </div>
          </div>
      </div>
    </motion.div>
  );
}
