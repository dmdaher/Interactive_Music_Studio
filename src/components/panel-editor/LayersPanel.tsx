'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useEditorStore } from './store';
import type { SectionDef, ControlDef } from './store';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Check if a control is outside its parent section bounds */
function isControlOutOfBounds(control: ControlDef, section: SectionDef): boolean {
  return (
    control.x < section.x ||
    control.y < section.y ||
    control.x + control.w > section.x + section.w ||
    control.y + control.h > section.y + section.h
  );
}

/** Truncate a string to maxLen characters, adding ellipsis if needed */
function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + '\u2026';
}

// ─── Type badge colors ──────────────────────────────────────────────────────

const TYPE_COLORS: Record<string, string> = {
  button: 'bg-blue-900/60 text-blue-300',
  knob: 'bg-purple-900/60 text-purple-300',
  fader: 'bg-green-900/60 text-green-300',
  slider: 'bg-green-900/60 text-green-300',
  led: 'bg-yellow-900/60 text-yellow-300',
  indicator: 'bg-yellow-900/60 text-yellow-300',
  wheel: 'bg-orange-900/60 text-orange-300',
  pad: 'bg-pink-900/60 text-pink-300',
  encoder: 'bg-cyan-900/60 text-cyan-300',
  switch: 'bg-gray-700/60 text-gray-300',
  lever: 'bg-gray-700/60 text-gray-300',
  screen: 'bg-indigo-900/60 text-indigo-300',
  display: 'bg-indigo-900/60 text-indigo-300',
};

function typeBadgeClass(type: string): string {
  return TYPE_COLORS[type] ?? 'bg-gray-700/60 text-gray-400';
}

// ─── Control item ───────────────────────────────────────────────────────────

interface ControlItemProps {
  controlId: string;
  sectionId: string;
}

function ControlItem({ controlId, sectionId }: ControlItemProps) {
  const control = useEditorStore((s) => s.controls[controlId]);
  const section = useEditorStore((s) => s.sections[sectionId]);
  const selectedIds = useEditorStore((s) => s.selectedIds);
  const setSelectedIds = useEditorStore((s) => s.setSelectedIds);
  const toggleSelected = useEditorStore((s) => s.toggleSelected);

  const isSelected = selectedIds.includes(controlId);
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
      if (e.shiftKey || e.metaKey) {
        toggleSelected(controlId);
      } else {
        setSelectedIds([controlId]);
      }
    },
    [controlId, toggleSelected, setSelectedIds],
  );

  if (!control || !section) return null;

  const outOfBounds = isControlOutOfBounds(control, section);

  return (
    <button
      ref={itemRef}
      onClick={handleClick}
      className={`flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-[11px] transition-colors ${
        isSelected
          ? 'bg-blue-600/30 text-white'
          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
      }`}
    >
      {/* Out-of-bounds red dot indicator */}
      {outOfBounds && (
        <span
          className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"
          title="Control is outside section bounds"
        />
      )}

      {/* Control label */}
      <span className="flex-1 truncate">
        {truncate(control.label || control.id, 20)}
      </span>

      {/* Type badge */}
      <span
        className={`flex-shrink-0 rounded px-1 py-0.5 text-[9px] font-medium uppercase leading-none ${typeBadgeClass(control.type)}`}
      >
        {control.type}
      </span>
    </button>
  );
}

// ─── Section item ───────────────────────────────────────────────────────────

interface SectionItemProps {
  sectionId: string;
}

function SectionItem({ sectionId }: SectionItemProps) {
  const section = useEditorStore((s) => s.sections[sectionId]);
  const selectedIds = useEditorStore((s) => s.selectedIds);
  const setSelectedIds = useEditorStore((s) => s.setSelectedIds);

  const [expanded, setExpanded] = useState(false);
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

  const handleToggleExpand = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setExpanded((prev) => !prev);
    },
    [],
  );

  if (!section) return null;

  const displayName = section.headerLabel || section.id;
  const controlCount = section.childIds.length;

  return (
    <div>
      {/* Section header row */}
      <div
        className={`flex items-center rounded transition-colors ${
          isSelected
            ? 'bg-blue-600/20'
            : 'hover:bg-white/5'
        }`}
      >
        {/* Expand/collapse arrow */}
        <button
          onClick={handleToggleExpand}
          className="flex h-6 w-5 flex-shrink-0 items-center justify-center text-gray-500 hover:text-gray-300"
          aria-label={expanded ? 'Collapse section' : 'Expand section'}
        >
          <svg
            className={`h-3 w-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M4 2l4 4-4 4z" />
          </svg>
        </button>

        {/* Section name + metadata */}
        <button
          ref={itemRef}
          onClick={handleClick}
          className={`flex flex-1 items-center gap-1.5 py-1 pr-2 text-left text-[11px] font-medium ${
            isSelected ? 'text-white' : 'text-gray-300'
          }`}
        >
          <span className="flex-1 truncate">{truncate(displayName, 18)}</span>

          {/* Control count */}
          <span className="flex-shrink-0 text-[9px] text-gray-500">
            {controlCount}
          </span>

          {/* Archetype badge */}
          <span className="flex-shrink-0 rounded bg-gray-700/60 px-1 py-0.5 text-[8px] text-gray-400 uppercase leading-none">
            {truncate(section.archetype, 10)}
          </span>
        </button>
      </div>

      {/* Expanded child controls */}
      {expanded && (
        <div className="ml-4 border-l border-gray-800 pl-1">
          {section.childIds.map((childId) => (
            <ControlItem
              key={childId}
              controlId={childId}
              sectionId={sectionId}
            />
          ))}
          {section.childIds.length === 0 && (
            <div className="px-2 py-1 text-[10px] text-gray-600 italic">
              No controls
            </div>
          )}
        </div>
      )}
    </div>
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
      <div className="flex-1 overflow-y-auto px-1 py-1">
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
