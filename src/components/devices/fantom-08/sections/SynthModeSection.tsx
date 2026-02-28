'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import TransportButton from '@/components/controls/TransportButton';
import Knob from '@/components/controls/Knob';
import { PanelState } from '@/types/panel';

interface SynthModeSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function SynthModeSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SynthModeSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-300 text-center">
        SYNTH CTRL
      </span>

      {/* Top button row: [OSC]──FILTER──────────[AMP]──[FX]──[LFO] */}
      <div className="flex items-center">
        <PanelButton
          id="synth-mode-osc"
          label="OSC"
          variant="function"
          size="md"
          labelPosition="above"
          active={panelState['synth-mode-osc']?.active ?? false}
          highlighted={highlightedControls.includes('synth-mode-osc')}
          onClick={() => onButtonClick?.('synth-mode-osc')}
        />
        <div className="h-px w-12 bg-neutral-600" />
        <span className="text-[9px] font-bold tracking-wide text-neutral-400 px-1">
          FILTER
        </span>
        <div className="h-px w-24 bg-neutral-600" />
        <PanelButton
          id="synth-mode-amp"
          label="AMP"
          variant="function"
          size="md"
          labelPosition="above"
          active={panelState['synth-mode-amp']?.active ?? false}
          highlighted={highlightedControls.includes('synth-mode-amp')}
          onClick={() => onButtonClick?.('synth-mode-amp')}
        />
        <div className="h-px w-5 bg-neutral-600" />
        <PanelButton
          id="synth-mode-fx"
          label="FX"
          variant="function"
          size="md"
          labelPosition="above"
          active={panelState['synth-mode-fx']?.active ?? false}
          highlighted={highlightedControls.includes('synth-mode-fx')}
          onClick={() => onButtonClick?.('synth-mode-fx')}
        />
        <div className="h-px w-5 bg-neutral-600" />
        <PanelButton
          id="synth-mode-lfo"
          label="LFO"
          variant="function"
          size="md"
          labelPosition="above"
          active={panelState['synth-mode-lfo']?.active ?? false}
          highlighted={highlightedControls.includes('synth-mode-lfo')}
          onClick={() => onButtonClick?.('synth-mode-lfo')}
        />
      </div>

      {/* Main area: left (knobs/indicators) + right (sequencer box) */}
      <div className="flex gap-2">
        {/* Left column: CUTOFF, RESO+indicators, PARAM/FLT TYPE */}
        <div className="flex flex-col gap-2 ml-4">
          {/* Row 1: [_] [CUTOFF] */}
          <div className="grid grid-cols-2 gap-6">
            <div />
            <Knob
              id="synth-cutoff"
              label="Cutoff"
              value={panelState['synth-cutoff']?.value ?? 64}
              highlighted={highlightedControls.includes('synth-cutoff')}
              size="md"
            />
          </div>

          {/* Row 2: [RESO] [LPF/HPF/BPF/PKG] */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <Knob
              id="synth-resonance"
              label="Resonance"
              value={panelState['synth-resonance']?.value ?? 0}
              highlighted={highlightedControls.includes('synth-resonance')}
              size="md"
            />
            <div className="flex flex-col gap-1 pt-1">
              {['LPF', 'HPF', 'BPF', 'PKG'].map((filter) => (
                <div key={filter} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-600" />
                  <span className="text-[8px] font-medium tracking-wide text-neutral-500">
                    {filter}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1" />

          {/* PARAM + FILTER TYPE — bottom row, aligned with transport */}
          <div className="flex gap-6 whitespace-nowrap">
            <PanelButton
              id="synth-param"
              label="PARAM"
              variant="function"
              size="md"
              labelPosition="above"
              active={panelState['synth-param']?.active ?? false}
              highlighted={highlightedControls.includes('synth-param')}
              onClick={() => onButtonClick?.('synth-param')}
            />
            <PanelButton
              id="synth-mode-filter"
              label="FILTER TYPE"
              variant="function"
              size="md"
              labelPosition="above"
              active={panelState['synth-mode-filter']?.active ?? false}
              highlighted={highlightedControls.includes('synth-mode-filter')}
              onClick={() => onButtonClick?.('synth-mode-filter')}
            />
          </div>
        </div>

        {/* Right column: Sequencer box + transport below */}
        <div className="flex flex-col gap-3 flex-1 ml-14">
          <div
            className="flex flex-col gap-3 rounded-md px-12 py-4 flex-1"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(0,0,0,0.15)',
            }}
          >
            <span className="text-[8px] font-semibold tracking-widest uppercase text-neutral-400 text-center">
              SEQUENCER
            </span>

            {/* Ptn, Grp, Song */}
            <div className="flex items-center gap-4 justify-center">
              <PanelButton
                id="pattern"
                label="Pattern"
                variant="function"
                size="md"
                labelPosition="above"
                active={panelState['pattern']?.active ?? false}
                highlighted={highlightedControls.includes('pattern')}
                onClick={() => onButtonClick?.('pattern')}
              />
              <PanelButton
                id="group"
                label="Group"
                variant="function"
                size="md"
                labelPosition="above"
                active={panelState['group']?.active ?? false}
                highlighted={highlightedControls.includes('group')}
                onClick={() => onButtonClick?.('group')}
              />
              <PanelButton
                id="song"
                label="Song"
                variant="function"
                size="md"
                labelPosition="above"
                active={panelState['song']?.active ?? false}
                highlighted={highlightedControls.includes('song')}
                onClick={() => onButtonClick?.('song')}
              />
            </div>

            {/* Dotted line + WORKFLOW label */}
            <div className="flex flex-col items-center gap-0.5">
              <div
                className="w-full h-px"
                style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 3px, transparent 3px, transparent 7px)' }}
              />
              <span className="text-[8px] font-medium tracking-widest uppercase text-neutral-500">
                WORKFLOW
              </span>
            </div>

            {/* TR-REC (under Ptn) and Rhy Ptn (under Song) */}
            <div className="flex justify-between px-1">
              <PanelButton
                id="tr-rec"
                label="TR-REC"
                variant="function"
                size="md"
                labelPosition="above"
                active={panelState['tr-rec']?.active ?? false}
                highlighted={highlightedControls.includes('tr-rec')}
                onClick={() => onButtonClick?.('tr-rec')}
              />
              <PanelButton
                id="rhythm-ptn"
                label="Rhythm Pattern"
                variant="function"
                size="md"
                labelPosition="above"
                active={panelState['rhythm-ptn']?.active ?? false}
                highlighted={highlightedControls.includes('rhythm-ptn')}
                onClick={() => onButtonClick?.('rhythm-ptn')}
              />
            </div>

            <div className="flex-1" />

            {/* Transport: STOP, PLAY, REC */}
            <div className="flex items-center gap-4 justify-center">
              <TransportButton
                id="stop"
                icon="stop"
                active={panelState['stop']?.active ?? false}
                highlighted={highlightedControls.includes('stop')}
                onClick={() => onButtonClick?.('stop')}
              />
              <TransportButton
                id="play"
                icon="play"
                active={panelState['play']?.active ?? false}
                highlighted={highlightedControls.includes('play')}
                onClick={() => onButtonClick?.('play')}
              />
              <TransportButton
                id="rec"
                icon="rec"
                active={panelState['rec']?.active ?? false}
                highlighted={highlightedControls.includes('rec')}
                onClick={() => onButtonClick?.('rec')}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
