'use client';

import { PanelState } from '@/types/panel';
import { CDJ3000_PANEL } from '@/lib/devices/cdj-3000-constants';
import BrowseBarSection from './sections/BrowseBarSection';
import MediaSection from './sections/MediaSection';
import DisplaySection from './sections/DisplaySection';
import NavigationSection from './sections/NavigationSection';
import PerformanceModesSection from './sections/PerformanceModesSection';
import HotCueSection from './sections/HotCueSection';
import LoopSection from './sections/LoopSection';
import CueLoopMemorySection from './sections/CueLoopMemorySection';
import LeftTransportSection from './sections/LeftTransportSection';
import JogSection from './sections/JogSection';
import JogModeControlsSection from './sections/JogModeControlsSection';
import BeatSyncSection from './sections/BeatSyncSection';
import TempoSection from './sections/TempoSection';

interface CDJ3000PanelProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function CDJ3000Panel({
  panelState,
  highlightedControls,
  onButtonClick,
}: CDJ3000PanelProps) {
  return (
    <div className="w-full h-full overflow-x-auto">
      <div
        className="relative rounded-2xl overflow-hidden select-none"
        style={{
          width: CDJ3000_PANEL.width,
          minWidth: CDJ3000_PANEL.width,
          height: CDJ3000_PANEL.height,
          backgroundColor: '#1a1a1a',
        }}
      >
        <div
          className="absolute"
          style={{
            left: '12%',
            top: '0%',
            width: '68%',
            height: '4%',
          }}
        >
          <BrowseBarSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '0%',
            top: '2%',
            width: '12%',
            height: '20%',
          }}
        >
          <MediaSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '12%',
            top: '4%',
            width: '64%',
            height: '29%',
          }}
        >
          <DisplaySection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '76%',
            top: '2%',
            width: '24%',
            height: '31%',
          }}
        >
          <NavigationSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '0%',
            top: '22%',
            width: '12%',
            height: '12%',
          }}
        >
          <PerformanceModesSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '2%',
            top: '34%',
            width: '53%',
            height: '5%',
          }}
        >
          <HotCueSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '2%',
            top: '39%',
            width: '48%',
            height: '9%',
          }}
        >
          <LoopSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '76%',
            top: '33%',
            width: '24%',
            height: '12%',
          }}
        >
          <CueLoopMemorySection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '0%',
            top: '48%',
            width: '18%',
            height: '48%',
          }}
        >
          <LeftTransportSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '14%',
            top: '44%',
            width: '55%',
            height: '50%',
          }}
        >
          <JogSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '76%',
            top: '45%',
            width: '20%',
            height: '11%',
          }}
        >
          <JogModeControlsSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '76%',
            top: '56%',
            width: '20%',
            height: '12%',
          }}
        >
          <BeatSyncSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
        <div
          className="absolute"
          style={{
            left: '78%',
            top: '66%',
            width: '22%',
            height: '34%',
          }}
        >
          <TempoSection
            panelState={panelState}
            highlightedControls={highlightedControls}
            onButtonClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
