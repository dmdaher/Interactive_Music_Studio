'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useEditorStore } from './store';

/** Truncate a string to maxLen characters, adding ellipsis if needed */
function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + '\u2026';
}

// ─── Section item ───────────────────────────────────────────────────────────

function SectionItem({ sectionId }: { sectionId: string }) {
  const section = useEditorStore((s) => s.sections[sectionId]);
  const selectedIds = useEditorStore((s) => s.selectedIds);
  const setSelectedIds = useEditorStore((s) => s.setSelectedIds);

  const isSelected = selectedIds.includes(sectionId);
  const itemRef = useRef<HTMLButtonElement>(null);

  // Bi-directional sync: scroll into view when selected on canvas
  useEffect(() => {
    if (isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [isSelected]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedIds([sectionId]);
    },
    [sectionId, setSelectedIds],
  );

  if (!section) return null;

  const displayName = section.headerLabel || section.id;
  const controlCount = section.childIds.length;

  return (
    <button
      ref={itemRef}
      onClick={handleClick}
      className={`flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left transition-colors ${
        isSelected
          ? 'bg-blue-600/20 text-white'
          : 'text-gray-300 hover:bg-white/5 hover:text-gray-100'
      }`}
    >
      <span className="flex-1 truncate text-[11px] font-medium">
        {truncate(displayName, 20)}
      </span>

      {/* Control count */}
      <span className="flex-shrink-0 text-[9px] text-gray-500">
        {controlCount}
      </span>

      {/* Archetype badge */}
      <span className="flex-shrink-0 rounded bg-gray-700/60 px-1 py-0.5 text-[8px] text-gray-400 uppercase leading-none">
        {truncate(section.archetype, 10)}
      </span>
    </button>
  );
}

// ─── Layers Panel ───────────────────────────────────────────────────────────

export default function LayersPanel() {
  const sections = useEditorStore((s) => s.sections);
  const [collapsed, setCollapsed] = useState(false);

  // Sort sections by Y position (top to bottom), then by X (left to right)
  const sortedSectionIds = useMemo(() => {
    return Object.values(sections)
      .sort((a, b) => a.y - b.y || a.x - b.x)
      .map((s) => s.id);
  }, [sections]);

  const handleToggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  if (collapsed) {
    return (
      <div className="flex flex-col border-r border-gray-800 bg-[#0d0d1a]">
        <button
          onClick={handleToggleCollapse}
          className="flex h-10 w-8 items-center justify-center text-gray-400 hover:text-gray-200"
          aria-label="Expand layers panel"
          title="Show Layers"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 3l5 5-5 5z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-56 flex-col border-r border-gray-800 bg-[#0d0d1a]">
      {/* Header */}
      <div className="flex h-10 items-center justify-between border-b border-gray-800 px-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Layers
        </span>
        <button
          onClick={handleToggleCollapse}
          className="flex h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-white/10 hover:text-gray-300"
          aria-label="Collapse layers panel"
          title="Hide Layers"
        >
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3l-5 5 5 5z" />
          </svg>
        </button>
      </div>

      {/* Section list */}
      <div className="flex-1 overflow-y-auto px-1 py-1 space-y-0.5">
        {sortedSectionIds.length === 0 ? (
          <div className="px-2 py-4 text-center text-[11px] text-gray-600">
            No sections loaded
          </div>
        ) : (
          sortedSectionIds.map((id) => (
            <SectionItem key={id} sectionId={id} />
          ))
        )}
      </div>

      {/* Footer summary */}
      <div className="border-t border-gray-800 px-3 py-2 text-[10px] text-gray-600">
        {sortedSectionIds.length} sections
      </div>
    </div>
  );
}
