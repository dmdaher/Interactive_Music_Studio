'use client';

import { motion } from 'framer-motion';
import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import TouchDisplay from '@/components/controls/TouchDisplay';
import ValueDial from '@/components/controls/ValueDial';
import { PanelState } from '@/types/panel';

interface CommonSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function CommonSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: CommonSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.10 }}
    >
      <div data-section-id="common">
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 753,
              top: 74,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="write"
                label=""
                width={32}
                height={20}
                active={getState('write').active}
                highlighted={isHighlighted('write')}
                onClick={() => onButtonClick?.('write')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 753,
              top: 118,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="master-fx"
                label=""
                width={32}
                height={20}
                active={getState('master-fx').active}
                highlighted={isHighlighted('master-fx')}
                onClick={() => onButtonClick?.('master-fx')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 754,
              top: 162,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="motional-pad"
                label=""
                width={32}
                height={20}
                active={getState('motional-pad').active}
                highlighted={isHighlighted('motional-pad')}
                onClick={() => onButtonClick?.('motional-pad')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 754,
              top: 206,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="daw-ctrl"
                label=""
                width={32}
                height={20}
                active={getState('daw-ctrl').active}
                highlighted={isHighlighted('daw-ctrl')}
                onClick={() => onButtonClick?.('daw-ctrl')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 755,
              top: 250,
              width: 32,
              height: 20,
            }}
          >
            <div>
              <PanelButton
                id="menu"
                label=""
                width={32}
                height={20}
                active={getState('menu').active}
                highlighted={isHighlighted('menu')}
                onClick={() => onButtonClick?.('menu')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 800,
              top: 56,
              width: 281,
              height: 168,
            }}
          >
            <TouchDisplay
              id="display"
              label=""
              variant="main"
              showMockContent
              width={281}
              height={168}
              highlighted={isHighlighted('display')}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 820,
              top: 242,
              width: 24,
              height: 24,
            }}
          >
            <Knob
              id="e1"
              label=""
              value={getState('e1').value ?? 64}
              highlighted={isHighlighted('e1')}
              outerSize={24}
              innerSize={17}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 870,
              top: 242,
              width: 24,
              height: 24,
            }}
          >
            <Knob
              id="e2"
              label=""
              value={getState('e2').value ?? 64}
              highlighted={isHighlighted('e2')}
              outerSize={24}
              innerSize={17}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 920,
              top: 242,
              width: 24,
              height: 24,
            }}
          >
            <Knob
              id="e3"
              label=""
              value={getState('e3').value ?? 64}
              highlighted={isHighlighted('e3')}
              outerSize={24}
              innerSize={17}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 970,
              top: 242,
              width: 24,
              height: 24,
            }}
          >
            <Knob
              id="e4"
              label=""
              value={getState('e4').value ?? 64}
              highlighted={isHighlighted('e4')}
              outerSize={24}
              innerSize={17}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1019,
              top: 242,
              width: 24,
              height: 24,
            }}
          >
            <Knob
              id="e5"
              label=""
              value={getState('e5').value ?? 64}
              highlighted={isHighlighted('e5')}
              outerSize={24}
              innerSize={17}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1069,
              top: 242,
              width: 24,
              height: 24,
            }}
          >
            <Knob
              id="e6"
              label=""
              value={getState('e6').value ?? 64}
              highlighted={isHighlighted('e6')}
              outerSize={24}
              innerSize={17}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 916,
              top: 449,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="tempo"
                label=""
                width={24}
                height={15}
                active={getState('tempo').active}
                highlighted={isHighlighted('tempo')}
                onClick={() => onButtonClick?.('tempo')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1006,
              top: 449,
              width: 24,
              height: 24,
            }}
          >
            <ValueDial
              id="value-dial"
              label=""
              outerSize={24}
              highlighted={isHighlighted('value-dial')}
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1096,
              top: 449,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="dec"
                label=""
                width={24}
                height={15}
                active={getState('dec').active}
                highlighted={isHighlighted('dec')}
                onClick={() => onButtonClick?.('dec')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 556,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="inc"
                label=""
                width={24}
                height={15}
                active={getState('inc').active}
                highlighted={isHighlighted('inc')}
                onClick={() => onButtonClick?.('inc')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 646,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="cursor-up"
                label=""
                width={24}
                height={15}
                active={getState('cursor-up').active}
                highlighted={isHighlighted('cursor-up')}
                onClick={() => onButtonClick?.('cursor-up')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 736,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="cursor-down"
                label=""
                width={24}
                height={15}
                active={getState('cursor-down').active}
                highlighted={isHighlighted('cursor-down')}
                onClick={() => onButtonClick?.('cursor-down')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 826,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="cursor-left"
                label=""
                width={24}
                height={15}
                active={getState('cursor-left').active}
                highlighted={isHighlighted('cursor-left')}
                onClick={() => onButtonClick?.('cursor-left')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 916,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="cursor-right"
                label=""
                width={24}
                height={15}
                active={getState('cursor-right').active}
                highlighted={isHighlighted('cursor-right')}
                onClick={() => onButtonClick?.('cursor-right')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1006,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="shift"
                label=""
                width={24}
                height={15}
                active={getState('shift').active}
                highlighted={isHighlighted('shift')}
                onClick={() => onButtonClick?.('shift')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1096,
              top: 539,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="exit"
                label=""
                width={24}
                height={15}
                active={getState('exit').active}
                highlighted={isHighlighted('exit')}
                onClick={() => onButtonClick?.('exit')}
              />
            </div>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 556,
              top: 599,
              width: 24,
              height: 15,
            }}
          >
            <div>
              <PanelButton
                id="enter"
                label=""
                width={24}
                height={15}
                active={getState('enter').active}
                highlighted={isHighlighted('enter')}
                onClick={() => onButtonClick?.('enter')}
              />
            </div>
          </div>
      </div>
    </motion.div>
  );
}
