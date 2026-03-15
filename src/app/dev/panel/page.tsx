'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import DeepMindPanel from '@/components/devices/deepmind-12/DeepMindPanel';
import { DM_PANEL_WIDTH } from '@/lib/devices/deepmind-12-constants';

function PanelPreview() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section') || undefined;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      overflowX: 'scroll',
      overflowY: 'auto',
      background: '#000',
    }}>
      <div style={{ width: DM_PANEL_WIDTH + 200, padding: '20px 100px 20px 20px' }}>
        {section && (
          <div style={{ color: '#666', fontSize: 12, marginBottom: 8, fontFamily: 'monospace' }}>
            Isolated: {section}
          </div>
        )}
        <DeepMindPanel
          panelState={{}}
          displayState={{ screenType: 'home' }}
          highlightedControls={[]}
          isolateSection={section}
        />
      </div>
    </div>
  );
}

export default function DevPanelPage() {
  return (
    <Suspense fallback={<div style={{ color: '#666', padding: 40 }}>Loading panel...</div>}>
      <PanelPreview />
    </Suspense>
  );
}
