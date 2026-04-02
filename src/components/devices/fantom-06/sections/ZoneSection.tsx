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
              left: 164,
              top: 76,
              width: 44,
              height: 24,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 184,
              top: 49,
              width: 56,
              height: 32,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 222,
              top: 57,
              width: 24,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 200,
              top: 81,
              width: 64,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 193,
              top: 106,
              width: 36,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 202,
              top: 103,
              width: 64,
              height: 20,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 247,
              top: 50,
              width: 40,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 273,
              top: 48,
              width: 42,
              height: 28,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 297,
              top: 49,
              width: 44,
              height: 28,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 324,
              top: 49,
              width: 42,
              height: 28,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 351,
              top: 48,
              width: 42,
              height: 28,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 381,
              top: 46,
              width: 40,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 407,
              top: 46,
              width: 40,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 430,
              top: 48,
              width: 42,
              height: 28,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 242,
              top: 91,
              width: 44,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 268,
              top: 90,
              width: 40,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 296,
              top: 90,
              width: 40,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 325,
              top: 89,
              width: 40,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 349,
              top: 92,
              width: 44,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 379,
              top: 92,
              width: 40,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 405,
              top: 93,
              width: 40,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 430,
              top: 92,
              width: 44,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 257,
              top: 105,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 285,
              top: 104,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 310,
              top: 104,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 337,
              top: 104,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 367,
              top: 105,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 393,
              top: 104,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 419,
              top: 105,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 440,
              top: 107,
              width: 24,
              height: 72,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 158,
              top: 128,
              width: 56,
              height: 16,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 185,
              top: 125,
              width: 56,
              height: 28,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 212,
              top: 132,
              width: 44,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 157,
              top: 155,
              width: 60,
              height: 12,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 182,
              top: 155,
              width: 56,
              height: 32,
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
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 214,
              top: 156,
              width: 40,
              height: 16,
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
      </div>
    </motion.div>
  );
}
