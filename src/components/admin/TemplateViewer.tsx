'use client';

import { useState, useEffect } from 'react';

interface TemplateSpec {
  sectionId: string;
  archetype: string;
  cssArchitecture: {
    display: string;
    properties: Record<string, string>;
    childContainers?: Array<{
      role: string;
      display: string;
      properties: Record<string, string>;
    }>;
  };
  componentStructure: string;
  controlSlots: string[];
  notes: string[];
}

interface LayoutEngineOutput {
  deviceId: string;
  deviceName: string;
  generatedAt: string;
  templates: TemplateSpec[];
  panelArchitecture: {
    layoutType: string;
    sectionOrder: string[];
    sectionWidths: Record<string, string>;
    totalSections: number;
    totalControls: number;
  };
  warnings: string[];
}

interface TemplateViewerProps {
  deviceId: string;
}

// --- Visual wireframe rendering ---

const SLOT_COLORS = [
  'rgba(96, 165, 250, 0.25)',   // blue
  'rgba(52, 211, 153, 0.25)',   // green
  'rgba(251, 191, 36, 0.25)',   // amber
  'rgba(167, 139, 250, 0.25)',  // purple
  'rgba(251, 113, 133, 0.25)',  // rose
  'rgba(45, 212, 191, 0.25)',   // teal
  'rgba(249, 115, 22, 0.25)',   // orange
  'rgba(139, 92, 246, 0.25)',   // violet
];

const SLOT_BORDERS = [
  'rgba(96, 165, 250, 0.5)',
  'rgba(52, 211, 153, 0.5)',
  'rgba(251, 191, 36, 0.5)',
  'rgba(167, 139, 250, 0.5)',
  'rgba(251, 113, 133, 0.5)',
  'rgba(45, 212, 191, 0.5)',
  'rgba(249, 115, 22, 0.5)',
  'rgba(139, 92, 246, 0.5)',
];

function ControlSlot({ name, index }: { name: string; index: number }) {
  const colorIdx = index % SLOT_COLORS.length;
  // Shorten long names for display
  const shortName = name.length > 14 ? name.slice(0, 12) + '..' : name;
  return (
    <div
      className="rounded flex items-center justify-center text-center px-1"
      style={{
        backgroundColor: SLOT_COLORS[colorIdx],
        border: `1px solid ${SLOT_BORDERS[colorIdx]}`,
        minHeight: '28px',
        fontSize: '8px',
        color: '#d1d5db',
        fontFamily: 'monospace',
      }}
      title={name}
    >
      {shortName}
    </div>
  );
}

function LayoutWireframe({ template }: { template: TemplateSpec }) {
  const { archetype, cssArchitecture, controlSlots } = template;

  // Parse grid dimensions from CSS properties
  const colMatch = cssArchitecture.properties['grid-template-columns']?.match(/repeat\((\d+)/);
  const rowMatch = cssArchitecture.properties['grid-template-rows']?.match(/repeat\((\d+)/);
  const cols = colMatch ? parseInt(colMatch[1]) : 1;
  const rows = rowMatch ? parseInt(rowMatch[1]) : 1;

  // For archetypes with child containers, get flex splits
  const containers = cssArchitecture.childContainers ?? [];
  const clusterContainer = containers.find(c => c.role === 'cluster');
  const anchorContainer = containers.find(c => c.role === 'anchor');

  const clusterFlex = clusterContainer?.properties['flex']?.match(/(\d+)%/)?.[1];
  const anchorFlex = anchorContainer?.properties['flex']?.match(/(\d+)%/)?.[1];

  const clusterCols = clusterContainer?.properties['grid-template-columns']?.match(/repeat\((\d+)/)?.[1];
  const clusterRows = clusterContainer?.properties['grid-template-rows']?.match(/repeat\((\d+)/)?.[1];

  switch (archetype) {
    case 'grid-NxM': {
      return (
        <div
          className="gap-1 p-2 rounded"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            backgroundColor: '#0d0d1a',
            minHeight: `${Math.max(rows * 32, 60)}px`,
          }}
        >
          {controlSlots.map((id, i) => (
            <ControlSlot key={id} name={id} index={i} />
          ))}
        </div>
      );
    }

    case 'single-row': {
      return (
        <div
          className="flex flex-row gap-1 p-2 rounded"
          style={{ backgroundColor: '#0d0d1a', minHeight: '40px' }}
        >
          {controlSlots.map((id, i) => (
            <div key={id} className="flex-1">
              <ControlSlot name={id} index={i} />
            </div>
          ))}
        </div>
      );
    }

    case 'single-column': {
      return (
        <div
          className="flex flex-col gap-1 p-2 rounded"
          style={{ backgroundColor: '#0d0d1a', minHeight: '60px', maxWidth: '120px' }}
        >
          {controlSlots.map((id, i) => (
            <ControlSlot key={id} name={id} index={i} />
          ))}
        </div>
      );
    }

    case 'cluster-above-anchor': {
      const cCols = clusterCols ? parseInt(clusterCols) : 2;
      const cRows = clusterRows ? parseInt(clusterRows) : Math.ceil((controlSlots.length - 1) / cCols);
      const clusterSlots = controlSlots.slice(0, -1); // everything except last (anchor)
      const anchorSlot = controlSlots[controlSlots.length - 1];

      return (
        <div className="flex flex-col gap-1 p-2 rounded" style={{ backgroundColor: '#0d0d1a', minHeight: '120px' }}>
          {/* Cluster label */}
          <div className="text-[7px] uppercase tracking-wider" style={{ color: '#4b5563' }}>
            cluster {clusterFlex ? `(${clusterFlex}%)` : ''}
          </div>
          <div
            className="gap-1 rounded p-1"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cCols}, 1fr)`,
              flex: clusterFlex ? `0 0 ${clusterFlex}%` : '1',
              backgroundColor: 'rgba(96, 165, 250, 0.05)',
              border: '1px dashed rgba(96, 165, 250, 0.2)',
            }}
          >
            {clusterSlots.map((id, i) => (
              <ControlSlot key={id} name={id} index={i} />
            ))}
          </div>
          {/* Anchor label */}
          <div className="text-[7px] uppercase tracking-wider" style={{ color: '#4b5563' }}>
            anchor {anchorFlex ? `(${anchorFlex}%)` : ''}
          </div>
          <div
            className="rounded p-1 flex items-center justify-center"
            style={{
              flex: anchorFlex ? `0 0 ${anchorFlex}%` : '2',
              backgroundColor: 'rgba(52, 211, 153, 0.08)',
              border: '1px dashed rgba(52, 211, 153, 0.3)',
              minHeight: '40px',
            }}
          >
            <ControlSlot name={anchorSlot} index={controlSlots.length - 1} />
          </div>
        </div>
      );
    }

    case 'cluster-below-anchor': {
      const cCols2 = clusterCols ? parseInt(clusterCols) : 2;
      const anchorSlot2 = controlSlots[0];
      const clusterSlots2 = controlSlots.slice(1);

      return (
        <div className="flex flex-col gap-1 p-2 rounded" style={{ backgroundColor: '#0d0d1a', minHeight: '120px' }}>
          <div className="text-[7px] uppercase tracking-wider" style={{ color: '#4b5563' }}>
            anchor {anchorFlex ? `(${anchorFlex}%)` : ''}
          </div>
          <div
            className="rounded p-1 flex items-center justify-center"
            style={{
              flex: anchorFlex ? `0 0 ${anchorFlex}%` : '2',
              backgroundColor: 'rgba(52, 211, 153, 0.08)',
              border: '1px dashed rgba(52, 211, 153, 0.3)',
              minHeight: '40px',
            }}
          >
            <ControlSlot name={anchorSlot2} index={0} />
          </div>
          <div className="text-[7px] uppercase tracking-wider" style={{ color: '#4b5563' }}>
            cluster {clusterFlex ? `(${clusterFlex}%)` : ''}
          </div>
          <div
            className="gap-1 rounded p-1"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cCols2}, 1fr)`,
              flex: clusterFlex ? `0 0 ${clusterFlex}%` : '1',
              backgroundColor: 'rgba(96, 165, 250, 0.05)',
              border: '1px dashed rgba(96, 165, 250, 0.2)',
            }}
          >
            {clusterSlots2.map((id, i) => (
              <ControlSlot key={id} name={id} index={i + 1} />
            ))}
          </div>
        </div>
      );
    }

    case 'anchor-layout': {
      // Dominant element with smaller elements around it
      const secondary = controlSlots.slice(0, -1);
      const anchor = controlSlots[controlSlots.length - 1];
      return (
        <div className="flex flex-col gap-1 p-2 rounded" style={{ backgroundColor: '#0d0d1a', minHeight: '100px' }}>
          {secondary.length > 0 && (
            <>
              <div className="text-[7px] uppercase tracking-wider" style={{ color: '#4b5563' }}>secondary</div>
              <div className="flex flex-row gap-1">
                {secondary.map((id, i) => (
                  <div key={id} className="flex-1"><ControlSlot name={id} index={i} /></div>
                ))}
              </div>
            </>
          )}
          <div className="text-[7px] uppercase tracking-wider" style={{ color: '#4b5563' }}>anchor</div>
          <div
            className="rounded flex items-center justify-center"
            style={{
              flex: '1',
              minHeight: '50px',
              backgroundColor: 'rgba(52, 211, 153, 0.08)',
              border: '1px dashed rgba(52, 211, 153, 0.3)',
            }}
          >
            <ControlSlot name={anchor} index={controlSlots.length - 1} />
          </div>
        </div>
      );
    }

    case 'stacked-rows':
    case 'dual-column':
    default: {
      // Generic: show controls in rows of 3
      const rowSize = archetype === 'dual-column' ? 2 : 3;
      const rowChunks: string[][] = [];
      for (let i = 0; i < controlSlots.length; i += rowSize) {
        rowChunks.push(controlSlots.slice(i, i + rowSize));
      }
      return (
        <div className="flex flex-col gap-1 p-2 rounded" style={{ backgroundColor: '#0d0d1a', minHeight: '60px' }}>
          {rowChunks.map((row, ri) => (
            <div key={ri} className="flex flex-row gap-1">
              {row.map((id, ci) => (
                <div key={id} className="flex-1">
                  <ControlSlot name={id} index={ri * rowSize + ci} />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
}

// --- Main component ---

export default function TemplateViewer({ deviceId }: TemplateViewerProps) {
  const [data, setData] = useState<LayoutEngineOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'visual' | 'code'>('visual');

  useEffect(() => {
    fetch(`/api/pipeline/${deviceId}/templates`)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, [deviceId]);

  if (error) {
    return (
      <div className="rounded-lg p-4 text-xs" style={{ backgroundColor: 'var(--card-bg, #141420)', border: '1px solid var(--card-border, #2a2a3a)', color: '#6b7280' }}>
        Templates not available yet
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-lg p-4 text-xs animate-pulse" style={{ backgroundColor: 'var(--card-bg, #141420)', border: '1px solid var(--card-border, #2a2a3a)', color: '#6b7280' }}>
        Loading templates...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Summary + view toggle */}
      <div className="rounded-lg p-4" style={{ backgroundColor: 'var(--card-bg, #141420)', border: '1px solid var(--card-border, #2a2a3a)' }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--foreground, #e0e0e0)' }}>
            Layout Engine Templates
          </h3>
          <div className="flex gap-1 rounded p-0.5" style={{ backgroundColor: 'var(--surface, #1a1a2a)' }}>
            <button
              onClick={() => setViewMode('visual')}
              className="text-[10px] px-2 py-0.5 rounded cursor-pointer"
              style={{
                backgroundColor: viewMode === 'visual' ? 'var(--card-bg, #141420)' : 'transparent',
                color: viewMode === 'visual' ? 'var(--foreground, #e0e0e0)' : '#6b7280',
              }}
            >
              Visual
            </button>
            <button
              onClick={() => setViewMode('code')}
              className="text-[10px] px-2 py-0.5 rounded cursor-pointer"
              style={{
                backgroundColor: viewMode === 'code' ? 'var(--card-bg, #141420)' : 'transparent',
                color: viewMode === 'code' ? 'var(--foreground, #e0e0e0)' : '#6b7280',
              }}
            >
              Code
            </button>
          </div>
        </div>

        <div className="flex gap-4 text-[11px]" style={{ color: '#6b7280' }}>
          <span>{data.panelArchitecture.layoutType} layout</span>
          <span>{data.panelArchitecture.totalSections} sections</span>
          <span>{data.panelArchitecture.totalControls} controls</span>
        </div>

        {data.warnings.length > 0 && (
          <div className="mt-3 text-[10px] p-2 rounded" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            {data.warnings.map((w, i) => <div key={i}>{w}</div>)}
          </div>
        )}
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {data.templates.map((t) => {
          const isExpanded = expandedSection === t.sectionId;
          return (
            <div
              key={t.sectionId}
              className="rounded-lg p-3 cursor-pointer transition-colors"
              style={{
                backgroundColor: isExpanded ? 'rgba(59, 130, 246, 0.06)' : 'var(--card-bg, #141420)',
                border: isExpanded ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid var(--card-border, #2a2a3a)',
              }}
              onClick={() => setExpandedSection(isExpanded ? null : t.sectionId)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium" style={{ color: 'var(--foreground, #e0e0e0)' }}>
                    {t.sectionId}
                  </span>
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded font-mono"
                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}
                  >
                    {t.archetype}
                  </span>
                </div>
                <span className="text-[10px]" style={{ color: '#6b7280' }}>
                  {t.controlSlots.length} controls
                  {data.panelArchitecture.sectionWidths[t.sectionId] && (
                    <> &middot; {data.panelArchitecture.sectionWidths[t.sectionId]}</>
                  )}
                </span>
              </div>

              {/* Visual wireframe — always shown */}
              {viewMode === 'visual' && (
                <LayoutWireframe template={t} />
              )}

              {/* Code view */}
              {viewMode === 'code' && (
                <pre
                  className="text-[10px] p-2 rounded overflow-x-auto"
                  style={{ backgroundColor: '#0d0d1a', color: '#a5b4fc' }}
                >
                  {`display: ${t.cssArchitecture.display}\n${Object.entries(t.cssArchitecture.properties).map(([k, v]) => `${k}: ${v}`).join('\n')}`}
                  {t.cssArchitecture.childContainers?.map((c) => (
                    `\n\n/* ${c.role} */\ndisplay: ${c.display}\n${Object.entries(c.properties).map(([k, v]) => `${k}: ${v}`).join('\n')}`
                  )).join('') ?? ''}
                </pre>
              )}

              {/* Notes */}
              {t.notes.length > 0 && (
                <div className="mt-2 text-[10px]" style={{ color: '#6b7280' }}>
                  {t.notes[0]}
                </div>
              )}

              {/* Expanded: full details */}
              {isExpanded && (
                <div className="mt-3 pt-3 space-y-2" style={{ borderTop: '1px solid var(--card-border, #2a2a3a)' }}>
                  {/* JSX structure */}
                  <div>
                    <div className="text-[9px] font-semibold uppercase mb-1" style={{ color: '#9ca3af' }}>JSX Structure</div>
                    <pre
                      className="text-[10px] p-2 rounded overflow-x-auto"
                      style={{ backgroundColor: '#0d0d1a', color: '#86efac' }}
                    >
                      {t.componentStructure}
                    </pre>
                  </div>

                  {/* All notes */}
                  {t.notes.length > 1 && (
                    <div>
                      <div className="text-[9px] font-semibold uppercase mb-1" style={{ color: '#9ca3af' }}>Notes</div>
                      {t.notes.map((n, i) => (
                        <div key={i} className="text-[10px]" style={{ color: '#6b7280' }}>{n}</div>
                      ))}
                    </div>
                  )}

                  {/* Control list */}
                  <div>
                    <div className="text-[9px] font-semibold uppercase mb-1" style={{ color: '#9ca3af' }}>Control Slots</div>
                    <div className="flex flex-wrap gap-1">
                      {t.controlSlots.map((id, i) => (
                        <span
                          key={id}
                          className="text-[9px] px-1.5 py-0.5 rounded font-mono"
                          style={{
                            backgroundColor: SLOT_COLORS[i % SLOT_COLORS.length],
                            border: `1px solid ${SLOT_BORDERS[i % SLOT_BORDERS.length]}`,
                            color: '#d1d5db',
                          }}
                        >
                          {id}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
