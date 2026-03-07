'use client';

import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface DeckTopControlsProps {
  deckNumber: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DeckTopControls({ deckNumber, panelState, highlightedControls, onButtonClick }: DeckTopControlsProps) {
  const d = `d${deckNumber}`;

  const btn = (id: string, label: string, opts: Partial<Parameters<typeof PanelButton>[0]> = {}) => (
    <PanelButton
      key={id}
      id={id}
      label={label}
      variant="function"
      size="sm"
      labelPosition="above"
      active={panelState[id]?.active ?? false}
      highlighted={highlightedControls.includes(id)}
      onClick={() => onButtonClick?.(id)}
      {...opts}
    />
  );

  return (
    <div className="flex flex-col gap-2">
      {/* Row 1: IN, OUT buttons + 4BEAT/EXIT + ACTIVE */}
      <div className="flex items-end gap-2">
        <div className="flex gap-2">
          {btn(`${d}-in`, 'IN', { size: 'md', hasLed: true, ledOn: panelState[`${d}-in`]?.ledOn ?? false, ledColor: '#F57C00' })}
          {btn(`${d}-out`, 'OUT', { size: 'md', hasLed: true, ledOn: panelState[`${d}-out`]?.ledOn ?? false, ledColor: '#F57C00' })}
        </div>
        <div className="flex gap-1.5 ml-2">
          {btn(`${d}-4beat-exit`, '4BEAT/EXIT')}
          {btn(`${d}-active`, 'ACTIVE', { hasLed: true, ledOn: panelState[`${d}-active`]?.ledOn ?? false, ledColor: '#F57C00' })}
        </div>
      </div>

      {/* Row 2: CUE/LOOP CALL section */}
      <div className="flex items-end gap-2">
        <div className="flex items-end gap-1 ml-auto">
          <span className="text-[7px] text-neutral-500 tracking-wider mb-1">CUE/LOOP CALL</span>
        </div>
      </div>

      {/* Row 3: CUE/LOOP CALL ◀/▶, DEL, LOOP, MEMORY + MASTER label + BEAT SYNC */}
      <div className="flex items-end gap-2">
        <div className="flex gap-1">
          {btn(`${d}-cue-loop-left`, '1/2X', { variant: 'standard' })}
          {btn(`${d}-del`, 'DEL', { variant: 'standard' })}
        </div>
        <div className="flex gap-1">
          {btn(`${d}-loop`, 'LOOP')}
        </div>
        <div className="flex gap-1">
          {btn(`${d}-cue-loop-right`, '2X', { variant: 'standard' })}
          {btn(`${d}-memory`, 'MEMORY', { variant: 'standard' })}
        </div>
        <div className="ml-auto flex items-end gap-2">
          <span className="text-[7px] text-neutral-500 tracking-wider mb-1">MASTER</span>
          {btn(`${d}-beat-sync`, 'BEAT SYNC', {
            size: 'md',
            hasLed: true,
            ledOn: panelState[`${d}-beat-sync`]?.ledOn ?? false,
            ledColor: '#F57C00',
          })}
        </div>
      </div>

      {/* TEMPO RANGE */}
      <div className="flex justify-end">
        {btn(`${d}-tempo-range`, 'TEMPO RANGE', { variant: 'standard' })}
      </div>
    </div>
  );
}
