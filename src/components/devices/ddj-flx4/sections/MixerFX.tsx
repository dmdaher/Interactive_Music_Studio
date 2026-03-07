'use client';

import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface MixerFXProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function MixerFX({ panelState, highlightedControls, onButtonClick }: MixerFXProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* CFX Filters + Smart CFX */}
      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-center justify-between">
          <Knob id="cfx-1" label="CFX" value={panelState['cfx-1']?.value ?? 64} highlighted={highlightedControls.includes('cfx-1')} size="sm" />
          <div className="flex flex-col items-center">
            <span className="text-[7px] text-neutral-500 tracking-wider">LO</span>
            <div className="w-8 h-[1px] bg-neutral-600 my-0.5" />
            <span className="text-[7px] text-neutral-500 tracking-wider">HI</span>
          </div>
          <Knob id="cfx-2" label="CFX" value={panelState['cfx-2']?.value ?? 64} highlighted={highlightedControls.includes('cfx-2')} size="sm" />
        </div>
        <div className="flex justify-center">
          <PanelButton
            id="smart-cfx"
            label="SMART CFX"
            variant="function"
            size="sm"
            hasLed
            ledOn={panelState['smart-cfx']?.ledOn ?? false}
            ledColor="#F57C00"
            active={panelState['smart-cfx']?.active ?? false}
            highlighted={highlightedControls.includes('smart-cfx')}
            onClick={() => onButtonClick?.('smart-cfx')}
          />
        </div>
      </div>

      {/* Beat FX Section */}
      <div
        className="flex flex-col gap-2 rounded-md px-2 py-2"
        style={{
          background: 'rgba(0,0,0,0.2)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <span className="text-[8px] text-neutral-400 tracking-[0.2em] font-bold text-right">BEAT FX</span>

        {/* Channel select: 1, 2, 1&2 */}
        <div className="flex items-center gap-1 justify-end">
          {(['fx-ch-1', 'fx-ch-2', 'fx-ch-1-2'] as const).map((id) => (
            <PanelButton
              key={id}
              id={id}
              label={id === 'fx-ch-1' ? '1' : id === 'fx-ch-2' ? '2' : '1&2'}
              variant="function"
              size="sm"
              active={panelState[id]?.active ?? false}
              highlighted={highlightedControls.includes(id)}
              onClick={() => onButtonClick?.(id)}
            />
          ))}
        </div>

        {/* FX Select */}
        <div className="flex justify-end">
          <PanelButton
            id="fx-select"
            label="FX SELECT"
            variant="function"
            size="sm"
            labelPosition="above"
            active={panelState['fx-select']?.active ?? false}
            highlighted={highlightedControls.includes('fx-select')}
            onClick={() => onButtonClick?.('fx-select')}
          />
        </div>

        {/* Beat controls */}
        <div className="flex items-center gap-1 justify-end">
          <span className="text-[7px] text-neutral-500 tracking-wider mr-1">BEAT</span>
          <PanelButton id="fx-beat-auto" label="AUTO" variant="function" size="sm"
            active={panelState['fx-beat-auto']?.active ?? false}
            highlighted={highlightedControls.includes('fx-beat-auto')}
            onClick={() => onButtonClick?.('fx-beat-auto')} />
          <PanelButton id="fx-beat-left" label="<" variant="standard" size="sm"
            active={panelState['fx-beat-left']?.active ?? false}
            highlighted={highlightedControls.includes('fx-beat-left')}
            onClick={() => onButtonClick?.('fx-beat-left')} />
          <PanelButton id="fx-beat-right" label=">" variant="standard" size="sm"
            active={panelState['fx-beat-right']?.active ?? false}
            highlighted={highlightedControls.includes('fx-beat-right')}
            onClick={() => onButtonClick?.('fx-beat-right')} />
        </div>

        {/* Level/Depth + ON/OFF */}
        <div className="flex items-center justify-end gap-3">
          <Knob id="fx-level-depth" label="LEVEL/DEPTH" value={panelState['fx-level-depth']?.value ?? 64} highlighted={highlightedControls.includes('fx-level-depth')} size="sm" />
          <PanelButton id="fx-on-off" label="ON/OFF" variant="function" size="sm"
            hasLed ledOn={panelState['fx-on-off']?.ledOn ?? false} ledColor="#F57C00"
            active={panelState['fx-on-off']?.active ?? false}
            highlighted={highlightedControls.includes('fx-on-off')}
            onClick={() => onButtonClick?.('fx-on-off')} />
        </div>
      </div>

      {/* Headphone + Mic Section */}
      <div className="flex flex-col gap-2 px-2">
        <Knob id="mic-level" label="MIC LEVEL" value={panelState['mic-level']?.value ?? 0} highlighted={highlightedControls.includes('mic-level')} size="sm" />
        <Knob id="hp-mix" label="HP MIX" value={panelState['hp-mix']?.value ?? 64} highlighted={highlightedControls.includes('hp-mix')} size="sm" />
        <Knob id="hp-level" label="HP LEVEL" value={panelState['hp-level']?.value ?? 80} highlighted={highlightedControls.includes('hp-level')} size="sm" />
      </div>
    </div>
  );
}
