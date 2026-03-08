'use client';

import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface TransportControlsProps {
  deck: 1 | 2;
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function TransportControls({ deck, panelState, highlightedControls, onButtonClick }: TransportControlsProps) {
  const d = `d${deck}`;
  const isHl = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <div className="flex items-center gap-2 px-2">
      <div className="flex flex-col items-center gap-0.5">
        <PanelButton id={`${d}-shift`} label="SHIFT" variant="standard" size="sm"
          active={getState(`${d}-shift`).active} highlighted={isHl(`${d}-shift`)}
          onClick={() => onButtonClick?.(`${d}-shift`)} />
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <PanelButton id={`${d}-cue`} label="CUE" variant="standard" size="lg"
          active={getState(`${d}-cue`).active} highlighted={isHl(`${d}-cue`)}
          onClick={() => onButtonClick?.(`${d}-cue`)} />
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <PanelButton id={`${d}-play`} label="▶/❚❚" variant="standard" size="lg"
          active={getState(`${d}-play`).active} highlighted={isHl(`${d}-play`)}
          onClick={() => onButtonClick?.(`${d}-play`)} />
        <span className="text-[7px] text-gray-500">PLAY/PAUSE</span>
      </div>
    </div>
  );
}
