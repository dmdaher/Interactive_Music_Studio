'use client';

import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';
import { DDJ_FLX4_COLORS } from '@/lib/constants';

interface EffectsSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function EffectsSection({ panelState, highlightedControls, onButtonClick }: EffectsSectionProps) {
  const isHl = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };
  const getValue = (id: string) => panelState[id]?.value ?? 64;

  return (
    <div className="flex flex-col gap-2 px-2 py-2">
      <span className="text-[9px] text-gray-400 font-semibold tracking-wider text-center">BEAT FX</span>

      <div className="flex items-center justify-center gap-1">
        <span className="text-[7px] text-gray-500">1</span>
        <span className="text-[7px] text-gray-500">2</span>
        <span className="text-[7px] text-gray-500">1&2</span>
      </div>
      <div className="flex justify-center">
        <PanelButton id="fx-ch-select" label="CH" variant="standard" size="sm"
          active={getState('fx-ch-select').active} highlighted={isHl('fx-ch-select')}
          onClick={() => onButtonClick?.('fx-ch-select')} />
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[7px] text-gray-500">FX SELECT</span>
        <PanelButton id="fx-select" label="FX" variant="standard" size="sm"
          active={getState('fx-select').active} highlighted={isHl('fx-select')}
          onClick={() => onButtonClick?.('fx-select')} />
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[7px] text-gray-500">BEAT</span>
        <div className="flex gap-1">
          <PanelButton id="fx-beat-left" label="◀" variant="standard" size="sm"
            active={getState('fx-beat-left').active} highlighted={isHl('fx-beat-left')}
            onClick={() => onButtonClick?.('fx-beat-left')} />
          <PanelButton id="fx-beat-right" label="▶" variant="standard" size="sm"
            active={getState('fx-beat-right').active} highlighted={isHl('fx-beat-right')}
            onClick={() => onButtonClick?.('fx-beat-right')} />
        </div>
        <div className="flex gap-2 text-[6px] text-gray-500">
          <span>AUTO</span><span>TAP</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[7px] text-gray-500">LEVEL/DEPTH</span>
        <Knob id="fx-level-depth" label="" value={getValue('fx-level-depth')}
          highlighted={isHl('fx-level-depth')} size="sm" />
        <div className="flex justify-between w-full text-[6px] text-gray-500 px-1">
          <span>MIN</span><span>MAX</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[7px] text-gray-500">ON/OFF</span>
        <PanelButton id="fx-on-off" label="ON/OFF" variant="function" size="sm"
          active={getState('fx-on-off').active} hasLed ledOn={getState('fx-on-off').ledOn}
          ledColor={DDJ_FLX4_COLORS.accent} highlighted={isHl('fx-on-off')}
          onClick={() => onButtonClick?.('fx-on-off')} />
        <span className="text-[6px] text-gray-500">RELEASE FX</span>
      </div>
    </div>
  );
}
