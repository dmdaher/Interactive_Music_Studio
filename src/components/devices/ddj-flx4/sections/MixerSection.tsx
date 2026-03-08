'use client';

import Knob from '@/components/controls/Knob';
import Slider from '@/components/controls/Slider';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';
import { DDJ_FLX4_COLORS } from '@/lib/constants';
import EQChannel from './EQChannel';

interface MixerSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function MixerSection({ panelState, highlightedControls, onButtonClick }: MixerSectionProps) {
  const isHl = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };
  const getValue = (id: string) => panelState[id]?.value ?? 64;

  return (
    <div className="flex flex-col gap-3 px-3 py-2">
      {/* Branding */}
      <div className="text-center">
        <div className="text-[7px] text-gray-500 uppercase tracking-widest">Performance DJ Controller</div>
        <div className="text-sm font-bold text-gray-300 tracking-wider">DDJ-FLX4</div>
        <div className="flex justify-center gap-2 mt-0.5">
          <span className="text-[7px] text-gray-500">rekordbox</span>
          <span className="text-[7px] text-gray-500">serato</span>
        </div>
      </div>

      {/* TRIM + MASTER LEVEL row */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[7px] text-gray-500">TRIM</span>
          <Knob id="ch1-trim" label="" value={getValue('ch1-trim')} highlighted={isHl('ch1-trim')} size="sm" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[7px] text-gray-500">TRIM</span>
          <Knob id="ch2-trim" label="" value={getValue('ch2-trim')} highlighted={isHl('ch2-trim')} size="sm" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[7px] text-gray-500">MASTER LEVEL</span>
          <Knob id="master-level" label="" value={getValue('master-level')} highlighted={isHl('master-level')} size="sm" />
          <PanelButton id="master-cue" label="CUE" variant="standard" size="sm"
            active={getState('master-cue').active} hasLed ledOn={getState('master-cue').ledOn}
            ledColor={DDJ_FLX4_COLORS.accent} highlighted={isHl('master-cue')}
            onClick={() => onButtonClick?.('master-cue')} />
        </div>
      </div>

      {/* MIC LEVEL */}
      <div className="flex items-center gap-2">
        <span className="text-[7px] text-gray-500">MIC LEVEL</span>
        <Knob id="mic-level" label="" value={getValue('mic-level')} highlighted={isHl('mic-level')} size="sm" />
      </div>

      {/* EQ columns */}
      <div className="flex justify-between gap-4">
        <EQChannel channel={1} panelState={panelState} highlightedControls={highlightedControls} />
        <EQChannel channel={2} panelState={panelState} highlightedControls={highlightedControls} />
      </div>

      {/* CFX knobs */}
      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[7px] text-gray-500">CFX</span>
          <Knob id="ch1-cfx" label="" value={getValue('ch1-cfx')} highlighted={isHl('ch1-cfx')} size="sm" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[7px] text-gray-500">CFX</span>
          <Knob id="ch2-cfx" label="" value={getValue('ch2-cfx')} highlighted={isHl('ch2-cfx')} size="sm" />
        </div>
      </div>

      {/* SMART CFX */}
      <div className="flex justify-center">
        <PanelButton id="smart-cfx" label="SMART CFX" variant="function" size="sm"
          active={getState('smart-cfx').active} hasLed ledOn={getState('smart-cfx').ledOn}
          ledColor={DDJ_FLX4_COLORS.accent} highlighted={isHl('smart-cfx')}
          onClick={() => onButtonClick?.('smart-cfx')} />
      </div>

      {/* Headphones */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[7px] text-gray-500">H.MIX</span>
          <Knob id="hp-mix" label="" value={getValue('hp-mix')} highlighted={isHl('hp-mix')} size="sm" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[7px] text-gray-500">H.LEVEL</span>
          <Knob id="hp-level" label="" value={getValue('hp-level')} highlighted={isHl('hp-level')} size="sm" />
        </div>
      </div>

      {/* Channel CUE buttons */}
      <div className="flex justify-between px-4">
        <PanelButton id="ch1-cue" label="CUE" variant="standard" size="sm"
          active={getState('ch1-cue').active} hasLed ledOn={getState('ch1-cue').ledOn}
          ledColor={DDJ_FLX4_COLORS.accent} highlighted={isHl('ch1-cue')}
          labelPosition="above" onClick={() => onButtonClick?.('ch1-cue')} />
        <span className="text-[9px] text-gray-400 self-center">1</span>
        <span className="text-[9px] text-gray-400 self-center">2</span>
        <PanelButton id="ch2-cue" label="CUE" variant="standard" size="sm"
          active={getState('ch2-cue').active} hasLed ledOn={getState('ch2-cue').ledOn}
          ledColor={DDJ_FLX4_COLORS.accent} highlighted={isHl('ch2-cue')}
          labelPosition="above" onClick={() => onButtonClick?.('ch2-cue')} />
      </div>

      {/* Channel faders */}
      <div className="flex justify-between px-6">
        <Slider id="ch1-fader" label="" value={getValue('ch1-fader')} highlighted={isHl('ch1-fader')} />
        <Slider id="ch2-fader" label="" value={getValue('ch2-fader')} highlighted={isHl('ch2-fader')} />
      </div>

      {/* Pioneer DJ logo */}
      <div className="text-center text-[10px] text-gray-500 italic font-semibold tracking-wider py-1">
        Pioneer DJ
      </div>

      {/* SMART FADER */}
      <div className="flex justify-center">
        <PanelButton id="smart-fader" label="SMART FADER" variant="function" size="sm"
          active={getState('smart-fader').active} hasLed ledOn={getState('smart-fader').ledOn}
          ledColor={DDJ_FLX4_COLORS.accent} highlighted={isHl('smart-fader')}
          onClick={() => onButtonClick?.('smart-fader')} />
      </div>

      {/* Crossfader */}
      <div className="flex flex-col items-center gap-1 px-2">
        <div
          className="relative w-full h-5 rounded-full"
          style={{ background: 'linear-gradient(180deg, #1a1a1e 0%, #2a2a2e 100%)' }}
          data-control-id="crossfader"
        >
          <div
            className="absolute top-0.5 bottom-0.5 w-10 rounded-full"
            style={{
              left: `clamp(0px, calc(${((getValue('crossfader')) / 127) * 100}% - 20px), calc(100% - 40px))`,
              background: 'linear-gradient(180deg, #666 0%, #444 100%)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
