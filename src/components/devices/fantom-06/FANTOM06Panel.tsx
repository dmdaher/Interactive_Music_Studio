'use client';

import { motion } from 'framer-motion';
import DirectionSwitch from '@/components/controls/DirectionSwitch';
import Knob from '@/components/controls/Knob';
import PadButton from '@/components/controls/PadButton';
import PanelButton from '@/components/controls/PanelButton';
import PanelShell from '@/components/controls/PanelShell';
import SectionContainer from '@/components/controls/SectionContainer';
import Slider from '@/components/controls/Slider';
import TouchDisplay from '@/components/controls/TouchDisplay';
import ValueDial from '@/components/controls/ValueDial';
import Wheel from '@/components/controls/Wheel';
import { PanelState } from '@/types/panel';
import { FANTOM06_PANEL } from '@/lib/devices/fantom-06-constants';

interface FANTOM06PanelProps {
  panelState: PanelState;
  displayState?: any;
  highlightedControls: string[];
  zones?: any[];
  onButtonClick?: (id: string) => void;
}

export default function FANTOM06Panel({
  panelState,
  highlightedControls,
  onButtonClick,
}: FANTOM06PanelProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <PanelShell
      manufacturer={FANTOM06_PANEL.manufacturer}
      deviceName={FANTOM06_PANEL.deviceName}
      width={FANTOM06_PANEL.width}
      height={FANTOM06_PANEL.height}
      keyboard={{ keys: 61, startNote: 'C2', panelHeightPercent: 55, leftPercent: 5, widthPercent: 93 }}
    >
        {/* Section backgrounds — decorative only */}
        {/* controller background */}
        <SectionContainer id="controller" x={47} y={15} w={110} h={338} />

        {/* ZONE background */}
        <SectionContainer id="zone" x={120} y={8} w={368} h={184} headerLabel="ZONE" />

        {/* common background */}
        <SectionContainer id="common" x={462} y={9} w={240} h={100} />

        {/* SCENE CTRL background */}
        <SectionContainer id="scene" x={672} y={19} w={80} h={140} headerLabel="SCENE CTRL" />

        {/* SYNTH CTRL background */}
        <SectionContainer id="synth" x={756} y={16} w={127} h={116} headerLabel="SYNTH CTRL" />

        {/* SEQUENCER background */}
        <SectionContainer id="sequencer" x={882} y={16} w={179} h={184} headerLabel="SEQUENCER" />

        {/* PAD background */}
        <SectionContainer id="pad" x={1050} y={16} w={147} h={184} headerLabel="PAD" />

        {/* All controls — panel-level percentage positioning */}
        {/* wheel-1 */}
        <div
          className="absolute"
          style={{
            left: 71,
            top: 24,
            width: 36,
            height: 148,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Wheel
              id="wheel-1"
              label=""
              width={36}
              height={148}
              highlighted={isHighlighted('wheel-1')}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 71,
            top: 12,
            width: 36,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            WHEEL1
          </span>
        </div>

        {/* wheel-2 */}
        <div
          className="absolute"
          style={{
            left: 112,
            top: 23,
            width: 36,
            height: 148,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Wheel
              id="wheel-2"
              label=""
              width={36}
              height={148}
              highlighted={isHighlighted('wheel-2')}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 112,
            top: 11,
            width: 36,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            WHEEL2
          </span>
        </div>

        {/* s1 */}
        <div
          className="absolute"
          style={{
            left: 51,
            top: 235,
            width: 60,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="s1"
                label=""
                width={60}
                height={16}
                active={getState('s1').active}
                highlighted={isHighlighted('s1')}
                onClick={() => onButtonClick?.('s1')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 51,
            top: 223,
            width: 60,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S1
          </span>
        </div>

        {/* s2 */}
        <div
          className="absolute"
          style={{
            left: 70,
            top: 234,
            width: 60,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="s2"
                label=""
                width={60}
                height={16}
                active={getState('s2').active}
                highlighted={isHighlighted('s2')}
                onClick={() => onButtonClick?.('s2')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 70,
            top: 222,
            width: 60,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S2
          </span>
        </div>

        {/* pitch-bend-lever */}
        <div
          className="absolute"
          style={{
            left: 85,
            top: 260,
            width: 56,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <DirectionSwitch
              id="pitch-bend-lever"
              label=""
              positions={["FWD","REV","SLIP REV"]}
              highlighted={isHighlighted('pitch-bend-lever')}
              width={56}
              height={64}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 85,
            top: 248,
            width: 56,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PITCH BEND/MOD
          </span>
        </div>

        {/* master-volume */}
        <div
          className="absolute"
          style={{
            left: 164,
            top: 76,
            width: 44,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="master-volume"
              label=""
              value={getState('master-volume').value ?? 64}
              highlighted={isHighlighted('master-volume')}
              outerSize={24}
              innerSize={17}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 164,
            top: 102,
            width: 44,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            MASTER VOLUME
          </span>
        </div>

        {/* pan-level */}
        <div
          className="absolute"
          style={{
            left: 184,
            top: 49,
            width: 56,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="pan-level"
                label=""
                width={56}
                height={32}
                active={getState('pan-level').active}
                highlighted={isHighlighted('pan-level')}
                onClick={() => onButtonClick?.('pan-level')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 184,
            top: 37,
            width: 56,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PAN/ LEVEL
          </span>
        </div>

        {/* ctrl */}
        <div
          className="absolute"
          style={{
            left: 222,
            top: 57,
            width: 24,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="ctrl"
                label=""
                width={24}
                height={12}
                active={getState('ctrl').active}
                highlighted={isHighlighted('ctrl')}
                onClick={() => onButtonClick?.('ctrl')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 222,
            top: 45,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CTRL
          </span>
        </div>

        {/* assign */}
        <div
          className="absolute"
          style={{
            left: 200,
            top: 81,
            width: 64,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="assign"
                label=""
                width={64}
                height={12}
                active={getState('assign').active}
                highlighted={isHighlighted('assign')}
                onClick={() => onButtonClick?.('assign')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 200,
            top: 69,
            width: 64,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ASSIGN
          </span>
        </div>

        {/* zone-9-16 */}
        <div
          className="absolute"
          style={{
            left: 193,
            top: 106,
            width: 36,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-9-16"
                label=""
                width={36}
                height={12}
                active={getState('zone-9-16').active}
                highlighted={isHighlighted('zone-9-16')}
                onClick={() => onButtonClick?.('zone-9-16')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 193,
            top: 94,
            width: 36,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ZONE 9-16
          </span>
        </div>

        {/* zone-select */}
        <div
          className="absolute"
          style={{
            left: 202,
            top: 103,
            width: 64,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-select"
                label=""
                width={64}
                height={20}
                active={getState('zone-select').active}
                highlighted={isHighlighted('zone-select')}
                onClick={() => onButtonClick?.('zone-select')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 202,
            top: 91,
            width: 64,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ZONE SELECT
          </span>
        </div>

        {/* knob-1 */}
        <div
          className="absolute"
          style={{
            left: 247,
            top: 50,
            width: 40,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          className="absolute pointer-events-none"
          style={{
            left: 247,
            top: 84,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            1
          </span>
        </div>

        {/* knob-2 */}
        <div
          className="absolute"
          style={{
            left: 273,
            top: 48,
            width: 42,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="knob-2"
              label=""
              value={getState('knob-2').value ?? 64}
              highlighted={isHighlighted('knob-2')}
              outerSize={28}
              innerSize={20}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 273,
            top: 78,
            width: 42,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            2
          </span>
        </div>

        {/* knob-3 */}
        <div
          className="absolute"
          style={{
            left: 297,
            top: 49,
            width: 44,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="knob-3"
              label=""
              value={getState('knob-3').value ?? 64}
              highlighted={isHighlighted('knob-3')}
              outerSize={28}
              innerSize={20}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 297,
            top: 79,
            width: 44,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            3
          </span>
        </div>

        {/* knob-4 */}
        <div
          className="absolute"
          style={{
            left: 324,
            top: 49,
            width: 42,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="knob-4"
              label=""
              value={getState('knob-4').value ?? 64}
              highlighted={isHighlighted('knob-4')}
              outerSize={28}
              innerSize={20}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 324,
            top: 79,
            width: 42,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            4
          </span>
        </div>

        {/* knob-5 */}
        <div
          className="absolute"
          style={{
            left: 351,
            top: 48,
            width: 42,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="knob-5"
              label=""
              value={getState('knob-5').value ?? 64}
              highlighted={isHighlighted('knob-5')}
              outerSize={28}
              innerSize={20}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 351,
            top: 78,
            width: 42,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            5
          </span>
        </div>

        {/* knob-6 */}
        <div
          className="absolute"
          style={{
            left: 381,
            top: 46,
            width: 40,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          className="absolute pointer-events-none"
          style={{
            left: 381,
            top: 80,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            6
          </span>
        </div>

        {/* knob-7 */}
        <div
          className="absolute"
          style={{
            left: 407,
            top: 46,
            width: 40,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          className="absolute pointer-events-none"
          style={{
            left: 407,
            top: 80,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            7
          </span>
        </div>

        {/* knob-8 */}
        <div
          className="absolute"
          style={{
            left: 430,
            top: 48,
            width: 42,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="knob-8"
              label=""
              value={getState('knob-8').value ?? 64}
              highlighted={isHighlighted('knob-8')}
              outerSize={28}
              innerSize={20}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 430,
            top: 78,
            width: 42,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            8
          </span>
        </div>

        {/* zone-int-ext-1 */}
        <div
          className="absolute"
          style={{
            left: 242,
            top: 91,
            width: 44,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-1"
                label=""
                width={44}
                height={16}
                active={getState('zone-int-ext-1').active}
                highlighted={isHighlighted('zone-int-ext-1')}
                onClick={() => onButtonClick?.('zone-int-ext-1')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 242,
            top: 79,
            width: 44,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            1
          </span>
        </div>

        {/* zone-int-ext-2 */}
        <div
          className="absolute"
          style={{
            left: 268,
            top: 90,
            width: 40,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-2"
                label=""
                width={40}
                height={16}
                active={getState('zone-int-ext-2').active}
                highlighted={isHighlighted('zone-int-ext-2')}
                onClick={() => onButtonClick?.('zone-int-ext-2')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 268,
            top: 78,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            2
          </span>
        </div>

        {/* zone-int-ext-3 */}
        <div
          className="absolute"
          style={{
            left: 296,
            top: 90,
            width: 40,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-3"
                label=""
                width={40}
                height={16}
                active={getState('zone-int-ext-3').active}
                highlighted={isHighlighted('zone-int-ext-3')}
                onClick={() => onButtonClick?.('zone-int-ext-3')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 296,
            top: 78,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            3
          </span>
        </div>

        {/* zone-int-ext-4 */}
        <div
          className="absolute"
          style={{
            left: 325,
            top: 89,
            width: 40,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-4"
                label=""
                width={40}
                height={16}
                active={getState('zone-int-ext-4').active}
                highlighted={isHighlighted('zone-int-ext-4')}
                onClick={() => onButtonClick?.('zone-int-ext-4')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 325,
            top: 77,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            4
          </span>
        </div>

        {/* zone-int-ext-5 */}
        <div
          className="absolute"
          style={{
            left: 349,
            top: 92,
            width: 44,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-5"
                label=""
                width={44}
                height={16}
                active={getState('zone-int-ext-5').active}
                highlighted={isHighlighted('zone-int-ext-5')}
                onClick={() => onButtonClick?.('zone-int-ext-5')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 349,
            top: 80,
            width: 44,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            5
          </span>
        </div>

        {/* zone-int-ext-6 */}
        <div
          className="absolute"
          style={{
            left: 379,
            top: 92,
            width: 40,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-6"
                label=""
                width={40}
                height={16}
                active={getState('zone-int-ext-6').active}
                highlighted={isHighlighted('zone-int-ext-6')}
                onClick={() => onButtonClick?.('zone-int-ext-6')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 379,
            top: 80,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            6
          </span>
        </div>

        {/* zone-int-ext-7 */}
        <div
          className="absolute"
          style={{
            left: 405,
            top: 93,
            width: 40,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-7"
                label=""
                width={40}
                height={12}
                active={getState('zone-int-ext-7').active}
                highlighted={isHighlighted('zone-int-ext-7')}
                onClick={() => onButtonClick?.('zone-int-ext-7')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 405,
            top: 81,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            7
          </span>
        </div>

        {/* zone-int-ext-8 */}
        <div
          className="absolute"
          style={{
            left: 430,
            top: 92,
            width: 44,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-int-ext-8"
                label=""
                width={44}
                height={12}
                active={getState('zone-int-ext-8').active}
                highlighted={isHighlighted('zone-int-ext-8')}
                onClick={() => onButtonClick?.('zone-int-ext-8')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 430,
            top: 80,
            width: 44,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            8
          </span>
        </div>

        {/* slider-1 */}
        <div
          className="absolute"
          style={{
            left: 257,
            top: 105,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-1"
              label=""
              value={getState('slider-1').value ?? 64}
              highlighted={isHighlighted('slider-1')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 257,
            top: 179,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            1
          </span>
        </div>

        {/* slider-2 */}
        <div
          className="absolute"
          style={{
            left: 285,
            top: 104,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-2"
              label=""
              value={getState('slider-2').value ?? 64}
              highlighted={isHighlighted('slider-2')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 285,
            top: 178,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            2
          </span>
        </div>

        {/* slider-3 */}
        <div
          className="absolute"
          style={{
            left: 310,
            top: 104,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-3"
              label=""
              value={getState('slider-3').value ?? 64}
              highlighted={isHighlighted('slider-3')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 310,
            top: 178,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            3
          </span>
        </div>

        {/* slider-4 */}
        <div
          className="absolute"
          style={{
            left: 337,
            top: 104,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-4"
              label=""
              value={getState('slider-4').value ?? 64}
              highlighted={isHighlighted('slider-4')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 337,
            top: 178,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            4
          </span>
        </div>

        {/* slider-5 */}
        <div
          className="absolute"
          style={{
            left: 367,
            top: 105,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-5"
              label=""
              value={getState('slider-5').value ?? 64}
              highlighted={isHighlighted('slider-5')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 367,
            top: 179,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            5
          </span>
        </div>

        {/* slider-6 */}
        <div
          className="absolute"
          style={{
            left: 393,
            top: 104,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-6"
              label=""
              value={getState('slider-6').value ?? 64}
              highlighted={isHighlighted('slider-6')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 393,
            top: 178,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            6
          </span>
        </div>

        {/* slider-7 */}
        <div
          className="absolute"
          style={{
            left: 419,
            top: 105,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-7"
              label=""
              value={getState('slider-7').value ?? 64}
              highlighted={isHighlighted('slider-7')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 419,
            top: 179,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            7
          </span>
        </div>

        {/* slider-8 */}
        <div
          className="absolute"
          style={{
            left: 440,
            top: 107,
            width: 24,
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Slider
              id="slider-8"
              label=""
              value={getState('slider-8').value ?? 64}
              highlighted={isHighlighted('slider-8')}
              trackHeight={52}
              trackWidth={14}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 440,
            top: 181,
            width: 24,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            8
          </span>
        </div>

        {/* split */}
        <div
          className="absolute"
          style={{
            left: 158,
            top: 128,
            width: 56,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="split"
                label=""
                width={56}
                height={16}
                active={getState('split').active}
                highlighted={isHighlighted('split')}
                onClick={() => onButtonClick?.('split')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 158,
            top: 116,
            width: 56,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SPLIT
          </span>
        </div>

        {/* chord-memory */}
        <div
          className="absolute"
          style={{
            left: 185,
            top: 125,
            width: 56,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="chord-memory"
                label=""
                width={56}
                height={28}
                active={getState('chord-memory').active}
                highlighted={isHighlighted('chord-memory')}
                onClick={() => onButtonClick?.('chord-memory')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 185,
            top: 113,
            width: 56,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CHORD MEMORY
          </span>
        </div>

        {/* arpeggio */}
        <div
          className="absolute"
          style={{
            left: 212,
            top: 132,
            width: 44,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="arpeggio"
                label=""
                width={44}
                height={12}
                active={getState('arpeggio').active}
                highlighted={isHighlighted('arpeggio')}
                onClick={() => onButtonClick?.('arpeggio')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 212,
            top: 120,
            width: 44,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ARPEGGIO
          </span>
        </div>

        {/* transpose */}
        <div
          className="absolute"
          style={{
            left: 157,
            top: 155,
            width: 60,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="transpose"
                label=""
                width={60}
                height={12}
                active={getState('transpose').active}
                highlighted={isHighlighted('transpose')}
                onClick={() => onButtonClick?.('transpose')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 157,
            top: 143,
            width: 60,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            TRANSPOSE
          </span>
        </div>

        {/* octave-down */}
        <div
          className="absolute"
          style={{
            left: 182,
            top: 155,
            width: 56,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="octave-down"
                label=""
                width={56}
                height={32}
                active={getState('octave-down').active}
                highlighted={isHighlighted('octave-down')}
                onClick={() => onButtonClick?.('octave-down')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 182,
            top: 143,
            width: 56,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            DOWN
          </span>
        </div>

        {/* octave-up */}
        <div
          className="absolute"
          style={{
            left: 214,
            top: 156,
            width: 40,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="octave-up"
                label=""
                width={40}
                height={16}
                active={getState('octave-up').active}
                highlighted={isHighlighted('octave-up')}
                onClick={() => onButtonClick?.('octave-up')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 214,
            top: 144,
            width: 40,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            UP
          </span>
        </div>

        {/* write */}
        <div
          className="absolute"
          style={{
            left: 34.2,
            top: 84,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="write"
                label=""
                width={4.2}
                height={7.8}
                active={getState('write').active}
                highlighted={isHighlighted('write')}
                onClick={() => onButtonClick?.('write')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 34,
            top: 72,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            WRITE
          </span>
        </div>

        {/* master-fx */}
        <div
          className="absolute"
          style={{
            left: 38.7,
            top: 84,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="master-fx"
                label=""
                width={4.2}
                height={7.8}
                active={getState('master-fx').active}
                highlighted={isHighlighted('master-fx')}
                onClick={() => onButtonClick?.('master-fx')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 39,
            top: 72,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            MASTER FX
          </span>
        </div>

        {/* motional-pad */}
        <div
          className="absolute"
          style={{
            left: 43.2,
            top: 84,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="motional-pad"
                label=""
                width={4.2}
                height={7.8}
                active={getState('motional-pad').active}
                highlighted={isHighlighted('motional-pad')}
                onClick={() => onButtonClick?.('motional-pad')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 43,
            top: 72,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            MOTIONAL PAD
          </span>
        </div>

        {/* daw-ctrl */}
        <div
          className="absolute"
          style={{
            left: 47.7,
            top: 84,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="daw-ctrl"
                label=""
                width={4.2}
                height={7.8}
                active={getState('daw-ctrl').active}
                highlighted={isHighlighted('daw-ctrl')}
                onClick={() => onButtonClick?.('daw-ctrl')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 48,
            top: 72,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            DAW CTRL
          </span>
        </div>

        {/* menu */}
        <div
          className="absolute"
          style={{
            left: 52.2,
            top: 84,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="menu"
                label=""
                width={4.2}
                height={7.8}
                active={getState('menu').active}
                highlighted={isHighlighted('menu')}
                onClick={() => onButtonClick?.('menu')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 52,
            top: 72,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            MENU
          </span>
        </div>

        {/* display */}
        <div
          className="absolute"
          style={{
            left: 522,
            top: 49,
            width: 136,
            height: 88,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <TouchDisplay
              id="display"
              label=""
              variant="main"
              showMockContent
              width={136}
              height={88}
              highlighted={isHighlighted('display')}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 522,
            top: 37,
            width: 136,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            Display
          </span>
        </div>

        {/* e1 */}
        <div
          className="absolute"
          style={{
            left: 34.2,
            top: 92.8,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="e1"
              label=""
              value={getState('e1').value ?? 64}
              highlighted={isHighlighted('e1')}
              outerSize={4.2}
              innerSize={3}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 34,
            top: 103,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E1
          </span>
        </div>

        {/* e2 */}
        <div
          className="absolute"
          style={{
            left: 38.7,
            top: 92.8,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="e2"
              label=""
              value={getState('e2').value ?? 64}
              highlighted={isHighlighted('e2')}
              outerSize={4.2}
              innerSize={3}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 39,
            top: 103,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E2
          </span>
        </div>

        {/* e3 */}
        <div
          className="absolute"
          style={{
            left: 43.2,
            top: 92.8,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="e3"
              label=""
              value={getState('e3').value ?? 64}
              highlighted={isHighlighted('e3')}
              outerSize={4.2}
              innerSize={3}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 43,
            top: 103,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E3
          </span>
        </div>

        {/* e4 */}
        <div
          className="absolute"
          style={{
            left: 47.7,
            top: 92.8,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="e4"
              label=""
              value={getState('e4').value ?? 64}
              highlighted={isHighlighted('e4')}
              outerSize={4.2}
              innerSize={3}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 48,
            top: 103,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E4
          </span>
        </div>

        {/* e5 */}
        <div
          className="absolute"
          style={{
            left: 52.2,
            top: 92.8,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="e5"
              label=""
              value={getState('e5').value ?? 64}
              highlighted={isHighlighted('e5')}
              outerSize={4.2}
              innerSize={3}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 52,
            top: 103,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E5
          </span>
        </div>

        {/* e6 */}
        <div
          className="absolute"
          style={{
            left: 34.2,
            top: 101.7,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="e6"
              label=""
              value={getState('e6').value ?? 64}
              highlighted={isHighlighted('e6')}
              outerSize={4.2}
              innerSize={3}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 34,
            top: 112,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E6
          </span>
        </div>

        {/* tempo */}
        <div
          className="absolute"
          style={{
            left: 38.7,
            top: 101.7,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tempo"
                label=""
                width={4.2}
                height={7.8}
                active={getState('tempo').active}
                highlighted={isHighlighted('tempo')}
                onClick={() => onButtonClick?.('tempo')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 39,
            top: 90,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            TEMPO
          </span>
        </div>

        {/* value-dial */}
        <div
          className="absolute"
          style={{
            left: 43.2,
            top: 101.7,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <ValueDial
              id="value-dial"
              label=""
              outerSize={4.2}
              highlighted={isHighlighted('value-dial')}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 43,
            top: 112,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            VALUE
          </span>
        </div>

        {/* dec */}
        <div
          className="absolute"
          style={{
            left: 47.7,
            top: 101.7,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="dec"
                label=""
                width={4.2}
                height={7.8}
                active={getState('dec').active}
                highlighted={isHighlighted('dec')}
                onClick={() => onButtonClick?.('dec')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 48,
            top: 90,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            DEC
          </span>
        </div>

        {/* inc */}
        <div
          className="absolute"
          style={{
            left: 52.2,
            top: 101.7,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="inc"
                label=""
                width={4.2}
                height={7.8}
                active={getState('inc').active}
                highlighted={isHighlighted('inc')}
                onClick={() => onButtonClick?.('inc')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 52,
            top: 90,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            INC
          </span>
        </div>

        {/* cursor-up */}
        <div
          className="absolute"
          style={{
            left: 34.2,
            top: 110.5,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="cursor-up"
                label=""
                width={4.2}
                height={7.8}
                active={getState('cursor-up').active}
                highlighted={isHighlighted('cursor-up')}
                onClick={() => onButtonClick?.('cursor-up')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 34,
            top: 99,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CURSOR UP
          </span>
        </div>

        {/* cursor-down */}
        <div
          className="absolute"
          style={{
            left: 47.7,
            top: 110.5,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="cursor-down"
                label=""
                width={4.2}
                height={7.8}
                active={getState('cursor-down').active}
                highlighted={isHighlighted('cursor-down')}
                onClick={() => onButtonClick?.('cursor-down')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 48,
            top: 99,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CURSOR DOWN
          </span>
        </div>

        {/* cursor-left */}
        <div
          className="absolute"
          style={{
            left: 38.7,
            top: 110.5,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="cursor-left"
                label=""
                width={4.2}
                height={7.8}
                active={getState('cursor-left').active}
                highlighted={isHighlighted('cursor-left')}
                onClick={() => onButtonClick?.('cursor-left')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 39,
            top: 99,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CURSOR LEFT
          </span>
        </div>

        {/* cursor-right */}
        <div
          className="absolute"
          style={{
            left: 43.2,
            top: 110.5,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="cursor-right"
                label=""
                width={4.2}
                height={7.8}
                active={getState('cursor-right').active}
                highlighted={isHighlighted('cursor-right')}
                onClick={() => onButtonClick?.('cursor-right')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 43,
            top: 99,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CURSOR RIGHT
          </span>
        </div>

        {/* shift */}
        <div
          className="absolute"
          style={{
            left: 52.2,
            top: 110.5,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="shift"
                label=""
                width={4.2}
                height={7.8}
                active={getState('shift').active}
                highlighted={isHighlighted('shift')}
                onClick={() => onButtonClick?.('shift')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 52,
            top: 99,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SHIFT
          </span>
        </div>

        {/* exit */}
        <div
          className="absolute"
          style={{
            left: 34.2,
            top: 119.4,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="exit"
                label=""
                width={4.2}
                height={7.8}
                active={getState('exit').active}
                highlighted={isHighlighted('exit')}
                onClick={() => onButtonClick?.('exit')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 34,
            top: 107,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            EXIT
          </span>
        </div>

        {/* enter */}
        <div
          className="absolute"
          style={{
            left: 38.7,
            top: 119.4,
            width: 4.2,
            height: 7.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="enter"
                label=""
                width={4.2}
                height={7.8}
                active={getState('enter').active}
                highlighted={isHighlighted('enter')}
                onClick={() => onButtonClick?.('enter')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 39,
            top: 107,
            width: 4,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ENTER
          </span>
        </div>

        {/* scene-select */}
        <div
          className="absolute"
          style={{
            left: 680,
            top: 27,
            width: 64,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="scene-select"
                label=""
                width={64}
                height={28}
                active={getState('scene-select').active}
                highlighted={isHighlighted('scene-select')}
                onClick={() => onButtonClick?.('scene-select')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 680,
            top: 15,
            width: 64,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SCENE SELECT
          </span>
        </div>

        {/* scene-chain */}
        <div
          className="absolute"
          style={{
            left: 680,
            top: 67,
            width: 64,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="scene-chain"
                label=""
                width={64}
                height={28}
                active={getState('scene-chain').active}
                highlighted={isHighlighted('scene-chain')}
                onClick={() => onButtonClick?.('scene-chain')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 680,
            top: 55,
            width: 64,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SCENE CHAIN
          </span>
        </div>

        {/* zone-view */}
        <div
          className="absolute"
          style={{
            left: 680,
            top: 91,
            width: 64,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="zone-view"
                label=""
                width={64}
                height={28}
                active={getState('zone-view').active}
                highlighted={isHighlighted('zone-view')}
                onClick={() => onButtonClick?.('zone-view')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 680,
            top: 79,
            width: 64,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ZONE VIEW
          </span>
        </div>

        {/* single-tone */}
        <div
          className="absolute"
          style={{
            left: 680,
            top: 123,
            width: 64,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="single-tone"
                label=""
                width={64}
                height={28}
                active={getState('single-tone').active}
                highlighted={isHighlighted('single-tone')}
                onClick={() => onButtonClick?.('single-tone')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 680,
            top: 111,
            width: 64,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SINGLE TONE
          </span>
        </div>

        {/* cutoff */}
        <div
          className="absolute"
          style={{
            left: 764,
            top: 24,
            width: 48,
            height: 39,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="cutoff"
              label=""
              value={getState('cutoff').value ?? 64}
              highlighted={isHighlighted('cutoff')}
              outerSize={39}
              innerSize={27}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 764,
            top: 65,
            width: 48,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CUTOFF
          </span>
        </div>

        {/* resonance */}
        <div
          className="absolute"
          style={{
            left: 827,
            top: 24,
            width: 48,
            height: 39,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Knob
              id="resonance"
              label=""
              value={getState('resonance').value ?? 64}
              highlighted={isHighlighted('resonance')}
              outerSize={39}
              innerSize={27}
            />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 827,
            top: 65,
            width: 48,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            RESONANCE
          </span>
        </div>

        {/* osc */}
        <div
          className="absolute"
          style={{
            left: 773,
            top: 72,
            width: 31,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="osc"
                label=""
                width={31}
                height={28}
                active={getState('osc').active}
                highlighted={isHighlighted('osc')}
                onClick={() => onButtonClick?.('osc')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 773,
            top: 60,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            OSC
          </span>
        </div>

        {/* filter-type */}
        <div
          className="absolute"
          style={{
            left: 805,
            top: 72,
            width: 31,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="filter-type"
                label=""
                width={31}
                height={28}
                active={getState('filter-type').active}
                highlighted={isHighlighted('filter-type')}
                onClick={() => onButtonClick?.('filter-type')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 805,
            top: 60,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            FILTER TYPE
          </span>
        </div>

        {/* param */}
        <div
          className="absolute"
          style={{
            left: 837,
            top: 72,
            width: 31,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="param"
                label=""
                width={31}
                height={28}
                active={getState('param').active}
                highlighted={isHighlighted('param')}
                onClick={() => onButtonClick?.('param')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 837,
            top: 60,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PARAM
          </span>
        </div>

        {/* amp */}
        <div
          className="absolute"
          style={{
            left: 773,
            top: 96,
            width: 31,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="amp"
                label=""
                width={31}
                height={28}
                active={getState('amp').active}
                highlighted={isHighlighted('amp')}
                onClick={() => onButtonClick?.('amp')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 773,
            top: 84,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            AMP
          </span>
        </div>

        {/* fx */}
        <div
          className="absolute"
          style={{
            left: 805,
            top: 96,
            width: 31,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="fx"
                label=""
                width={31}
                height={28}
                active={getState('fx').active}
                highlighted={isHighlighted('fx')}
                onClick={() => onButtonClick?.('fx')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 805,
            top: 84,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            FX
          </span>
        </div>

        {/* lfo */}
        <div
          className="absolute"
          style={{
            left: 837,
            top: 96,
            width: 31,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="lfo"
                label=""
                width={31}
                height={28}
                active={getState('lfo').active}
                highlighted={isHighlighted('lfo')}
                onClick={() => onButtonClick?.('lfo')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 837,
            top: 84,
            width: 31,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            LFO
          </span>
        </div>

        {/* pattern */}
        <div
          className="absolute"
          style={{
            left: 900,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="pattern"
                label=""
                width={28}
                height={54}
                active={getState('pattern').active}
                highlighted={isHighlighted('pattern')}
                onClick={() => onButtonClick?.('pattern')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 900,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PATTERN
          </span>
        </div>

        {/* group */}
        <div
          className="absolute"
          style={{
            left: 900,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="group"
                label=""
                width={28}
                height={54}
                active={getState('group').active}
                highlighted={isHighlighted('group')}
                onClick={() => onButtonClick?.('group')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 900,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            GROUP
          </span>
        </div>

        {/* song */}
        <div
          className="absolute"
          style={{
            left: 935,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="song"
                label=""
                width={28}
                height={54}
                active={getState('song').active}
                highlighted={isHighlighted('song')}
                onClick={() => onButtonClick?.('song')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 935,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SONG
          </span>
        </div>

        {/* tr-rec */}
        <div
          className="absolute"
          style={{
            left: 935,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tr-rec"
                label=""
                width={28}
                height={54}
                active={getState('tr-rec').active}
                highlighted={isHighlighted('tr-rec')}
                onClick={() => onButtonClick?.('tr-rec')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 935,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            TR-REC
          </span>
        </div>

        {/* rhythm-ptn */}
        <div
          className="absolute"
          style={{
            left: 958,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="rhythm-ptn"
                label=""
                width={28}
                height={54}
                active={getState('rhythm-ptn').active}
                highlighted={isHighlighted('rhythm-ptn')}
                onClick={() => onButtonClick?.('rhythm-ptn')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 958,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            RHYTHM PTN
          </span>
        </div>

        {/* stop */}
        <div
          className="absolute"
          style={{
            left: 991,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="stop"
                label=""
                width={28}
                height={54}
                active={getState('stop').active}
                highlighted={isHighlighted('stop')}
                onClick={() => onButtonClick?.('stop')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 991,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            STOP
          </span>
        </div>

        {/* play */}
        <div
          className="absolute"
          style={{
            left: 1007,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="play"
                label=""
                width={28}
                height={54}
                active={getState('play').active}
                highlighted={isHighlighted('play')}
                onClick={() => onButtonClick?.('play')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1007,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PLAY
          </span>
        </div>

        {/* rec */}
        <div
          className="absolute"
          style={{
            left: 1025,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="rec"
                label=""
                width={28}
                height={54}
                active={getState('rec').active}
                highlighted={isHighlighted('rec')}
                onClick={() => onButtonClick?.('rec')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1025,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            REC
          </span>
        </div>

        {/* tone-cat-1 */}
        <div
          className="absolute"
          style={{
            left: 890,
            top: 104,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-1"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-1').active}
                highlighted={isHighlighted('tone-cat-1')}
                onClick={() => onButtonClick?.('tone-cat-1')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            A.PIANO
          </span>
        </div>

        {/* tone-cat-2 */}
        <div
          className="absolute"
          style={{
            left: 928,
            top: 104,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-2"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-2').active}
                highlighted={isHighlighted('tone-cat-2')}
                onClick={() => onButtonClick?.('tone-cat-2')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E.PIANO
          </span>
        </div>

        {/* tone-cat-3 */}
        <div
          className="absolute"
          style={{
            left: 955,
            top: 104,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-3"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-3').active}
                highlighted={isHighlighted('tone-cat-3')}
                onClick={() => onButtonClick?.('tone-cat-3')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ORGAN
          </span>
        </div>

        {/* tone-cat-4 */}
        <div
          className="absolute"
          style={{
            left: 1006,
            top: 104,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-4"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-4').active}
                highlighted={isHighlighted('tone-cat-4')}
                onClick={() => onButtonClick?.('tone-cat-4')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            GUITAR/BASS
          </span>
        </div>

        {/* tone-cat-5 */}
        <div
          className="absolute"
          style={{
            left: 890,
            top: 124,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-5"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-5').active}
                highlighted={isHighlighted('tone-cat-5')}
                onClick={() => onButtonClick?.('tone-cat-5')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            STRINGS
          </span>
        </div>

        {/* tone-cat-6 */}
        <div
          className="absolute"
          style={{
            left: 928,
            top: 124,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-6"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-6').active}
                highlighted={isHighlighted('tone-cat-6')}
                onClick={() => onButtonClick?.('tone-cat-6')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            BRASS
          </span>
        </div>

        {/* tone-cat-7 */}
        <div
          className="absolute"
          style={{
            left: 955,
            top: 124,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-7"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-7').active}
                highlighted={isHighlighted('tone-cat-7')}
                onClick={() => onButtonClick?.('tone-cat-7')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SYNTH LEAD
          </span>
        </div>

        {/* tone-cat-8 */}
        <div
          className="absolute"
          style={{
            left: 1006,
            top: 124,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-8"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-8').active}
                highlighted={isHighlighted('tone-cat-8')}
                onClick={() => onButtonClick?.('tone-cat-8')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SYNTH PAD
          </span>
        </div>

        {/* tone-cat-9 */}
        <div
          className="absolute"
          style={{
            left: 890,
            top: 144,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-9"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-9').active}
                highlighted={isHighlighted('tone-cat-9')}
                onClick={() => onButtonClick?.('tone-cat-9')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            BELL/MALLET
          </span>
        </div>

        {/* tone-cat-10 */}
        <div
          className="absolute"
          style={{
            left: 928,
            top: 144,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-10"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-10').active}
                highlighted={isHighlighted('tone-cat-10')}
                onClick={() => onButtonClick?.('tone-cat-10')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            HIT/OTHER
          </span>
        </div>

        {/* tone-cat-11 */}
        <div
          className="absolute"
          style={{
            left: 955,
            top: 144,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-11"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-11').active}
                highlighted={isHighlighted('tone-cat-11')}
                onClick={() => onButtonClick?.('tone-cat-11')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            RHYTHM
          </span>
        </div>

        {/* tone-cat-12 */}
        <div
          className="absolute"
          style={{
            left: 1006,
            top: 144,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-12"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-12').active}
                highlighted={isHighlighted('tone-cat-12')}
                onClick={() => onButtonClick?.('tone-cat-12')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S.N. ACOUSTIC
          </span>
        </div>

        {/* tone-cat-13 */}
        <div
          className="absolute"
          style={{
            left: 890,
            top: 164,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-13"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-13').active}
                highlighted={isHighlighted('tone-cat-13')}
                onClick={() => onButtonClick?.('tone-cat-13')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S.N.S
          </span>
        </div>

        {/* tone-cat-14 */}
        <div
          className="absolute"
          style={{
            left: 928,
            top: 164,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-14"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-14').active}
                highlighted={isHighlighted('tone-cat-14')}
                onClick={() => onButtonClick?.('tone-cat-14')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            VTW
          </span>
        </div>

        {/* tone-cat-15 */}
        <div
          className="absolute"
          style={{
            left: 955,
            top: 164,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-15"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-15').active}
                highlighted={isHighlighted('tone-cat-15')}
                onClick={() => onButtonClick?.('tone-cat-15')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            MODEL
          </span>
        </div>

        {/* tone-cat-16 */}
        <div
          className="absolute"
          style={{
            left: 1006,
            top: 164,
            width: 34,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="tone-cat-16"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-16').active}
                highlighted={isHighlighted('tone-cat-16')}
                onClick={() => onButtonClick?.('tone-cat-16')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            DRUM
          </span>
        </div>

        {/* sampling */}
        <div
          className="absolute"
          style={{
            left: 1058,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="sampling"
                label=""
                width={28}
                height={54}
                active={getState('sampling').active}
                highlighted={isHighlighted('sampling')}
                onClick={() => onButtonClick?.('sampling')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1058,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SAMPLING
          </span>
        </div>

        {/* pad-mode */}
        <div
          className="absolute"
          style={{
            left: 1090,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="pad-mode"
                label=""
                width={28}
                height={54}
                active={getState('pad-mode').active}
                highlighted={isHighlighted('pad-mode')}
                onClick={() => onButtonClick?.('pad-mode')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1090,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PAD MODE
          </span>
        </div>

        {/* clip-board */}
        <div
          className="absolute"
          style={{
            left: 1109,
            top: 24,
            width: 28,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="clip-board"
                label=""
                width={28}
                height={54}
                active={getState('clip-board').active}
                highlighted={isHighlighted('clip-board')}
                onClick={() => onButtonClick?.('clip-board')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1109,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            CLIP BOARD
          </span>
        </div>

        {/* bank */}
        <div
          className="absolute"
          style={{
            left: 1125,
            top: 24,
            width: 30,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="bank"
                label=""
                width={30}
                height={54}
                active={getState('bank').active}
                highlighted={isHighlighted('bank')}
                onClick={() => onButtonClick?.('bank')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1125,
            top: 12,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            BANK
          </span>
        </div>

        {/* hold */}
        <div
          className="absolute"
          style={{
            left: 1160,
            top: 24,
            width: 30,
            height: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PanelButton
                id="hold"
                label=""
                width={30}
                height={54}
                active={getState('hold').active}
                highlighted={isHighlighted('hold')}
                onClick={() => onButtonClick?.('hold')}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1160,
            top: 12,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            HOLD
          </span>
        </div>

        {/* pad-1 */}
        <div
          className="absolute"
          style={{
            left: 1058,
            top: 104,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-1"
                label=""
                active={getState('pad-1').active}
                highlighted={isHighlighted('pad-1')}
                onClick={() => onButtonClick?.('pad-1')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1058,
            top: 92,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            1
          </span>
        </div>

        {/* pad-2 */}
        <div
          className="absolute"
          style={{
            left: 1092,
            top: 104,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-2"
                label=""
                active={getState('pad-2').active}
                highlighted={isHighlighted('pad-2')}
                onClick={() => onButtonClick?.('pad-2')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1092,
            top: 92,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            2
          </span>
        </div>

        {/* pad-3 */}
        <div
          className="absolute"
          style={{
            left: 1126,
            top: 104,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-3"
                label=""
                active={getState('pad-3').active}
                highlighted={isHighlighted('pad-3')}
                onClick={() => onButtonClick?.('pad-3')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1126,
            top: 92,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            3
          </span>
        </div>

        {/* pad-4 */}
        <div
          className="absolute"
          style={{
            left: 1160,
            top: 104,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-4"
                label=""
                active={getState('pad-4').active}
                highlighted={isHighlighted('pad-4')}
                onClick={() => onButtonClick?.('pad-4')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1160,
            top: 92,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            4
          </span>
        </div>

        {/* pad-5 */}
        <div
          className="absolute"
          style={{
            left: 1058,
            top: 124,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-5"
                label=""
                active={getState('pad-5').active}
                highlighted={isHighlighted('pad-5')}
                onClick={() => onButtonClick?.('pad-5')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1058,
            top: 112,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            5
          </span>
        </div>

        {/* pad-6 */}
        <div
          className="absolute"
          style={{
            left: 1092,
            top: 124,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-6"
                label=""
                active={getState('pad-6').active}
                highlighted={isHighlighted('pad-6')}
                onClick={() => onButtonClick?.('pad-6')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1092,
            top: 112,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            6
          </span>
        </div>

        {/* pad-7 */}
        <div
          className="absolute"
          style={{
            left: 1126,
            top: 124,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-7"
                label=""
                active={getState('pad-7').active}
                highlighted={isHighlighted('pad-7')}
                onClick={() => onButtonClick?.('pad-7')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1126,
            top: 112,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            7
          </span>
        </div>

        {/* pad-8 */}
        <div
          className="absolute"
          style={{
            left: 1160,
            top: 124,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-8"
                label=""
                active={getState('pad-8').active}
                highlighted={isHighlighted('pad-8')}
                onClick={() => onButtonClick?.('pad-8')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1160,
            top: 112,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            8
          </span>
        </div>

        {/* pad-9 */}
        <div
          className="absolute"
          style={{
            left: 1058,
            top: 144,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-9"
                label=""
                active={getState('pad-9').active}
                highlighted={isHighlighted('pad-9')}
                onClick={() => onButtonClick?.('pad-9')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1058,
            top: 132,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            9
          </span>
        </div>

        {/* pad-10 */}
        <div
          className="absolute"
          style={{
            left: 1092,
            top: 144,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-10"
                label=""
                active={getState('pad-10').active}
                highlighted={isHighlighted('pad-10')}
                onClick={() => onButtonClick?.('pad-10')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1092,
            top: 132,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            10
          </span>
        </div>

        {/* pad-11 */}
        <div
          className="absolute"
          style={{
            left: 1126,
            top: 144,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-11"
                label=""
                active={getState('pad-11').active}
                highlighted={isHighlighted('pad-11')}
                onClick={() => onButtonClick?.('pad-11')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1126,
            top: 132,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            11
          </span>
        </div>

        {/* pad-12 */}
        <div
          className="absolute"
          style={{
            left: 1160,
            top: 144,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-12"
                label=""
                active={getState('pad-12').active}
                highlighted={isHighlighted('pad-12')}
                onClick={() => onButtonClick?.('pad-12')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1160,
            top: 132,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            12
          </span>
        </div>

        {/* pad-13 */}
        <div
          className="absolute"
          style={{
            left: 1058,
            top: 164,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-13"
                label=""
                active={getState('pad-13').active}
                highlighted={isHighlighted('pad-13')}
                onClick={() => onButtonClick?.('pad-13')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1058,
            top: 152,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            13
          </span>
        </div>

        {/* pad-14 */}
        <div
          className="absolute"
          style={{
            left: 1092,
            top: 164,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-14"
                label=""
                active={getState('pad-14').active}
                highlighted={isHighlighted('pad-14')}
                onClick={() => onButtonClick?.('pad-14')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1092,
            top: 152,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            14
          </span>
        </div>

        {/* pad-15 */}
        <div
          className="absolute"
          style={{
            left: 1126,
            top: 164,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-15"
                label=""
                active={getState('pad-15').active}
                highlighted={isHighlighted('pad-15')}
                onClick={() => onButtonClick?.('pad-15')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1126,
            top: 152,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            15
          </span>
        </div>

        {/* pad-16 */}
        <div
          className="absolute"
          style={{
            left: 1160,
            top: 164,
            width: 30,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div>
              <PadButton
                id="pad-16"
                label=""
                active={getState('pad-16').active}
                highlighted={isHighlighted('pad-16')}
                onClick={() => onButtonClick?.('pad-16')}
                width={30}
                height={28}
              />
            </div>
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1160,
            top: 152,
            width: 30,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            16
          </span>
        </div>

        {/* Group labels */}

    </PanelShell>
  );
}
