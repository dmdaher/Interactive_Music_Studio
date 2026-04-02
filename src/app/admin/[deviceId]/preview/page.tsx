'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { DEVICE_REGISTRY } from '@/lib/deviceRegistry';

export default function PreviewPage() {
  const { deviceId } = useParams<{ deviceId: string }>();
  const [panelState, setPanelState] = useState<Record<string, { active: boolean }>>({});
  const [highlightedControls, setHighlightedControls] = useState<string[]>([]);
  const [previewScale, setPreviewScale] = useState(1);

  if (!deviceId) return null;

  const entry = DEVICE_REGISTRY[deviceId];
  const PanelComponent = entry?.PanelComponent;

  const handleButtonClick = (id: string) => {
    setPanelState(prev => ({
      ...prev,
      [id]: { active: !prev[id]?.active },
    }));
    setHighlightedControls([id]);
    setTimeout(() => setHighlightedControls([]), 1500);
  };

  return (
    <div className="h-full overflow-auto flex flex-col bg-[#0a0a0f]">
      {/* Scale slider */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800 flex-shrink-0">
        <label className="text-[10px] uppercase tracking-wider text-gray-500">Preview Scale</label>
        <input
          type="range"
          min={25}
          max={200}
          step={5}
          value={Math.round(previewScale * 100)}
          onChange={(e) => setPreviewScale(Number(e.target.value) / 100)}
          className="h-1 w-32 cursor-pointer accent-blue-500"
        />
        <span className="text-[10px] text-gray-400 w-8">{Math.round(previewScale * 100)}%</span>
        <button
          onClick={() => setPreviewScale(1)}
          className="text-[10px] text-gray-500 hover:text-gray-300 px-1"
        >
          Reset
        </button>
      </div>

      {/* Panel */}
      <div className="flex-1 overflow-auto flex items-start justify-center p-8">
        {PanelComponent ? (
          <div
            className="shadow-2xl"
            style={{
              transform: `scale(${previewScale})`,
              transformOrigin: 'top center',
            }}
          >
            <PanelComponent
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={handleButtonClick}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center mt-20">
            <h2 className="text-xl font-semibold text-gray-300">Panel Not Generated Yet</h2>
            <p className="text-sm text-gray-500 max-w-md">
              Use the Editor tab to position controls, then click &quot;Approve &amp; Build&quot; to generate the panel.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
