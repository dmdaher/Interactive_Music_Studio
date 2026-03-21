'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface InstrumentSummary {
  deviceId: string;
  deviceName: string;
  manufacturer: string;
  status: string;
  currentPhase: string;
  updatedAt: string;
}

const STATUS_STYLES: Record<string, string> = {
  running: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  paused: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  completed: 'border-green-500/30 bg-green-500/10 text-green-400',
  failed: 'border-red-500/30 bg-red-500/10 text-red-400',
};

export default function ReviewPage() {
  const router = useRouter();
  const [instruments, setInstruments] = useState<InstrumentSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/pipeline')
      .then(r => r.ok ? r.json() : [])
      .then(data => {
        setInstruments(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-500">Loading instruments...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <button
            onClick={() => router.push('/admin')}
            className="mb-2 text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            ← Dashboard
          </button>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Review Instruments</h1>
          <p className="mt-1 text-sm text-gray-500">Review and approve instrument panels before publishing</p>
        </div>
      </div>

      {instruments.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <div className="text-4xl">✓</div>
          <h2 className="text-xl font-semibold text-gray-300">No instruments to review</h2>
          <p className="text-sm text-gray-500">All instruments are up to date</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map(inst => (
            <div
              key={inst.deviceId}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 transition-colors hover:border-gray-600 cursor-pointer"
              onClick={() => router.push(`/admin/${inst.deviceId}/preview`)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold text-gray-200">{inst.deviceName}</h3>
                  <p className="text-xs text-gray-500">{inst.manufacturer}</p>
                </div>
                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${STATUS_STYLES[inst.status] ?? STATUS_STYLES.paused}`}>
                  {inst.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{inst.currentPhase}</span>
                <span>{new Date(inst.updatedAt).toLocaleDateString()}</span>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/admin/${inst.deviceId}/preview`); }}
                  className="flex-1 rounded border border-green-600/30 bg-green-600/10 py-1.5 text-[11px] font-medium text-green-400 transition-colors hover:bg-green-600/20"
                >
                  Preview
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/admin/${inst.deviceId}/editor`); }}
                  className="flex-1 rounded border border-blue-600/30 bg-blue-600/10 py-1.5 text-[11px] font-medium text-blue-400 transition-colors hover:bg-blue-600/20"
                >
                  Editor
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
