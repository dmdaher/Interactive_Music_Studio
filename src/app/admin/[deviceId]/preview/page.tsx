'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { DEVICE_REGISTRY } from '@/lib/deviceRegistry';

export default function PreviewPage() {
  const { deviceId } = useParams<{ deviceId: string }>();
  const router = useRouter();
  const [panelState, setPanelState] = useState<Record<string, { active: boolean }>>({});
  const [highlightedControls, setHighlightedControls] = useState<string[]>([]);
  const [deviceInfo, setDeviceInfo] = useState<{ deviceName: string; manufacturer: string } | null>(null);

  useEffect(() => {
    if (!deviceId) return;
    // Fetch device info from pipeline state
    fetch(`/api/pipeline/${deviceId}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) setDeviceInfo({ deviceName: data.deviceName, manufacturer: data.manufacturer });
      })
      .catch(() => {});
  }, [deviceId]);

  if (!deviceId) return null;

  const entry = DEVICE_REGISTRY[deviceId];
  const PanelComponent = entry?.PanelComponent;

  const handleButtonClick = (id: string) => {
    // Toggle button active state for interactive preview
    setPanelState(prev => ({
      ...prev,
      [id]: { active: !prev[id]?.active },
    }));
    // Flash highlight
    setHighlightedControls([id]);
    setTimeout(() => setHighlightedControls([]), 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="flex h-12 items-center justify-between border-b border-gray-800 px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push(`/admin/${deviceId}`)}
            className="text-sm text-gray-500 hover:text-gray-300"
          >
            ← Back
          </button>
          <div>
            <span className="text-sm font-semibold text-gray-200">
              {deviceInfo?.deviceName ?? deviceId}
            </span>
            {deviceInfo?.manufacturer && (
              <span className="ml-2 text-xs text-gray-500">{deviceInfo.manufacturer}</span>
            )}
          </div>
          <span className="rounded-full border border-green-600/30 bg-green-600/10 px-2 py-0.5 text-[10px] text-green-400">
            Preview
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push(`/admin/${deviceId}/editor`)}
            className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-gray-700"
          >
            Back to Editor
          </button>
          <button
            onClick={() => {
              // TODO: Submit for review API call
              alert('Submit for Review — coming soon');
            }}
            className="rounded border border-green-600 bg-green-700/30 px-3 py-1.5 text-xs font-medium text-green-300 transition-colors hover:bg-green-700/50"
          >
            Submit for Review
          </button>
        </div>
      </div>

      {/* Panel render area */}
      <div className="flex-1 overflow-auto flex items-start justify-center p-8 bg-[#0a0a0f]">
        {PanelComponent ? (
          <div className="shadow-2xl">
            <PanelComponent
              panelState={panelState}
              highlightedControls={highlightedControls}
              onButtonClick={handleButtonClick}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center mt-20">
            <div className="text-6xl">🎹</div>
            <h2 className="text-xl font-semibold text-gray-300">Panel Not Generated Yet</h2>
            <p className="text-sm text-gray-500 max-w-md">
              Use the Visual Editor to position controls, then click &quot;Approve &amp; Build&quot; to generate the panel.
            </p>
            <button
              onClick={() => router.push(`/admin/${deviceId}/editor`)}
              className="rounded border border-blue-600 bg-blue-700/30 px-4 py-2 text-sm text-blue-300 hover:bg-blue-700/50"
            >
              Open Editor
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
