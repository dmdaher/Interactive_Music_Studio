'use client';

import { motion } from 'framer-motion';
import { PanelState } from '@/types/panel';
import { DisplayState } from '@/types/display';
import { ZoneConfig } from '@/types/keyboard';
import DisplayScreen from './display/DisplayScreen';
import ZoneSection from './sections/ZoneSection';
import SceneSection from './sections/SceneSection';
import CommonSection from './sections/CommonSection';
import ControllerSection from './sections/ControllerSection';
import SynthControlSection from './sections/SynthControlSection';
import SequencerSection from './sections/SequencerSection';
import PadSection from './sections/PadSection';
import Keyboard from './Keyboard';

interface FantomPanelProps {
  panelState: PanelState;
  displayState: DisplayState;
  highlightedControls: string[];
  zones?: ZoneConfig[];
  onButtonClick?: (id: string) => void;
}

export default function FantomPanel({
  panelState,
  displayState,
  highlightedControls,
  zones,
  onButtonClick,
}: FantomPanelProps) {
  return (
    <motion.div
      className="relative w-full rounded-xl overflow-hidden select-none"
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage:
          'radial-gradient(ellipse at 30% 20%, rgba(60,60,60,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(40,40,40,0.08) 0%, transparent 50%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Panel texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.005) 1px, rgba(255,255,255,0.005) 2px)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-4 p-4">
        {/* Top bar: branding */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold tracking-[0.3em] text-neutral-500">
              ROLAND
            </span>
            <span className="text-xs tracking-widest text-neutral-600">
              FANTOM-08
            </span>
          </div>
        </div>

        {/* TOP ROW: Display + Common + Scene */}
        <div className="flex items-start gap-4">
          {/* Display (center-left) */}
          <div className="flex-shrink-0">
            <DisplayScreen
              displayState={displayState}
              highlighted={highlightedControls.includes('display')}
            />
          </div>

          {/* Common section (center-right) */}
          <div className="flex-shrink-0">
            <CommonSection
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>

          {/* Scene section (far right) */}
          <div className="flex-shrink-0 ml-auto">
            <SceneSection
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>
        </div>

        {/* MIDDLE ROW: Synth controls, Zone section, Pad section */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <SynthControlSection
              panelState={panelState}
              highlightedControls={highlightedControls}
            />
          </div>

          <div className="flex-shrink-0">
            <ZoneSection
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>

          <div className="flex-shrink-0 ml-auto">
            <PadSection
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>
        </div>

        {/* BOTTOM AREA: Controller, Sequencer, then full-width keyboard */}
        <div className="flex items-end gap-4">
          <div className="flex-shrink-0">
            <ControllerSection
              panelState={panelState}
              highlightedControls={highlightedControls}
            />
          </div>

          <div className="flex-shrink-0">
            <SequencerSection
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={onButtonClick}
            />
          </div>
        </div>

        {/* Keyboard spanning full width */}
        <div className="w-full">
          <Keyboard
            zones={zones}
            highlightedKeys={[]}
          />
        </div>
      </div>
    </motion.div>
  );
}
