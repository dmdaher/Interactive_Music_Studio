'use client';

import Knob from '@/components/controls/Knob';
import { PanelState } from '@/types/panel';

interface EQChannelProps {
  channel: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
}

export default function EQChannel({ channel, panelState, highlightedControls }: EQChannelProps) {
  const ch = `ch${channel}`;
  const isHl = (id: string) => highlightedControls.includes(id);
  const getValue = (id: string) => panelState[id]?.value ?? 64;

  const knobs = [
    { id: `${ch}-hi`, label: 'HI' },
    { id: `${ch}-mid`, label: 'MID' },
    { id: `${ch}-low`, label: 'LOW' },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-0.5 h-8">
        {[0.3, 0.5, 0.7, 0.9].map((threshold, i) => (
          <div key={i} className="w-1 rounded-full"
            style={{ height: '100%', background: i < 3 ? '#22c55e' : '#ef4444', opacity: 0.3 }} />
        ))}
      </div>
      {knobs.map(knob => (
        <Knob key={knob.id} id={knob.id} label={knob.label}
          value={getValue(knob.id)} highlighted={isHl(knob.id)} size="sm" />
      ))}
    </div>
  );
}
