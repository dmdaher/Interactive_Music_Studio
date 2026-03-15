'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import DeepMindPanel from '@/components/devices/deepmind-12/DeepMindPanel';

function PanelPreview() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section') || undefined;

  return (
    <div style={{ background: '#000', minHeight: '100vh', padding: 20 }}>
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
  );
}

export default function DevPanelPage() {
  return (
    <Suspense fallback={<div style={{ color: '#666', padding: 40 }}>Loading panel...</div>}>
      <PanelPreview />
    </Suspense>
  );
}
