'use client';

import { useCallback, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useEditorStore } from './store';
import type { ControlDef } from './store';
import PanelButton from '@/components/controls/PanelButton';
import Knob from '@/components/controls/Knob';
import Slider from '@/components/controls/Slider';
import LEDIndicator from '@/components/controls/LEDIndicator';
import Wheel from '@/components/controls/Wheel';
import PadButton from '@/components/controls/PadButton';
import ValueDial from '@/components/controls/ValueDial';
import Lever from '@/components/controls/Lever';

interface ControlNodeProps {
  controlId: string;
  sectionId: string;
}

/** Render the real hardware control component based on control type */
function renderControl(control: ControlDef, isSelected: boolean) {
  switch (control.type) {
    case 'button':
      return (
        <PanelButton
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'knob':
      return (
        <Knob
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'fader':
    case 'slider':
      return (
        <Slider
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'led':
    case 'indicator':
      return (
        <LEDIndicator
          id={control.id}
          highlighted={isSelected}
        />
      );
    case 'wheel':
      return (
        <Wheel
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'pad':
      return (
        <PadButton
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'encoder':
      return (
        <ValueDial
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'switch':
    case 'lever':
      return (
        <Lever
          id={control.id}
          label={control.label}
          highlighted={isSelected}
        />
      );
    case 'screen':
    case 'display':
      return (
        <div className="flex h-full w-full items-center justify-center rounded border border-gray-700 bg-gray-900 text-xs text-gray-500">
          {control.label}
        </div>
      );
    default:
      return <div className="text-xs text-red-400">Unknown: {control.type}</div>;
  }
}

export default function ControlNode({ controlId, sectionId }: ControlNodeProps) {
  const control = useEditorStore((s) => s.controls[controlId]);
  const section = useEditorStore((s) => s.sections[sectionId]);
  const selectedIds = useEditorStore((s) => s.selectedIds);
  const zoom = useEditorStore((s) => s.zoom);
  const snapGrid = useEditorStore((s) => s.snapGrid);
  const moveControl = useEditorStore((s) => s.moveControl);
  const moveSelectedControls = useEditorStore((s) => s.moveSelectedControls);
  const resizeControl = useEditorStore((s) => s.resizeControl);
  const pushSnapshot = useEditorStore((s) => s.pushSnapshot);
  const toggleSelected = useEditorStore((s) => s.toggleSelected);
  const setSelectedIds = useEditorStore((s) => s.setSelectedIds);
  const updateControlProp = useEditorStore((s) => s.updateControlProp);

  const isSelected = selectedIds.includes(controlId);
  const isMultiSelected = isSelected && selectedIds.length > 1;

  // ── Inline label editing (component-local state) ──────────────────────────
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Control positions are absolute canvas coords in the store.
  // Inside a SectionFrame they render relative to the section origin.
  const relX = control ? control.x - section.x : 0;
  const relY = control ? control.y - section.y : 0;

  // Track drag start position for multi-select delta computation
  const dragStartRef = useRef({ x: 0, y: 0 });

  const handleDragStart = useCallback(
    (_e: unknown, d: { x: number; y: number }) => {
      dragStartRef.current = { x: d.x, y: d.y };
    },
    [],
  );

  const handleDragStop = useCallback(
    (_e: unknown, d: { x: number; y: number }) => {
      const dx = d.x - dragStartRef.current.x;
      const dy = d.y - dragStartRef.current.y;
      if (dx === 0 && dy === 0) return;

      if (isMultiSelected) {
        // Move all selected (non-locked) controls by the same delta
        moveSelectedControls(dx, dy);
      } else {
        moveControl(controlId, dx, dy);
      }
      pushSnapshot();
    },
    [isMultiSelected, controlId, moveControl, moveSelectedControls, pushSnapshot],
  );

  const handleResizeStop = useCallback(
    (
      _e: unknown,
      _dir: unknown,
      ref: HTMLElement,
      _delta: unknown,
      position: { x: number; y: number },
    ) => {
      const newW = parseInt(ref.style.width, 10);
      const newH = parseInt(ref.style.height, 10);
      // Handle position shift from top/left resize handles
      const dx = position.x - relX;
      const dy = position.y - relY;
      if (dx !== 0 || dy !== 0) {
        moveControl(controlId, dx, dy);
      }
      resizeControl(controlId, newW, newH);
      pushSnapshot();
    },
    [relX, relY, controlId, moveControl, resizeControl, pushSnapshot],
  );

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

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!control) return;
      setEditValue(control.label);
      setIsEditing(true);
      // Focus the input after React renders it
      requestAnimationFrame(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      });
    },
    [control],
  );

  const commitEdit = useCallback(() => {
    if (!control) return;
    if (editValue !== control.label) {
      updateControlProp([controlId], 'label', editValue);
      pushSnapshot();
    }
    setIsEditing(false);
  }, [control, controlId, editValue, updateControlProp, pushSnapshot]);

  const cancelEdit = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleEditKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        commitEdit();
      } else if (e.key === 'Escape') {
        cancelEdit();
      }
    },
    [commitEdit, cancelEdit],
  );

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      // Select this control if it's not already selected
      if (!isSelected) {
        setSelectedIds([controlId]);
      }
      // Dispatch a custom event that the ContextMenu component listens for
      const detail = { controlId, clientX: e.clientX, clientY: e.clientY };
      window.dispatchEvent(new CustomEvent('editor-context-menu', { detail }));
    },
    [controlId, isSelected, setSelectedIds],
  );

  if (!control || !section) return null;

  const isLocked = control.locked;

  return (
    <Rnd
      position={{ x: relX, y: relY }}
      size={{ width: control.w, height: control.h }}
      scale={zoom}
      dragGrid={[snapGrid, snapGrid]}
      resizeGrid={[snapGrid, snapGrid]}
      disableDragging={isLocked}
      enableResizing={!isLocked}
      onDragStart={handleDragStart}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      style={{
        outline: isSelected
          ? '2px solid rgba(59,130,246,0.8)'
          : 'none',
        outlineOffset: 1,
        borderRadius: 2,
        zIndex: isSelected ? 10 : 1,
        boxShadow: isSelected
          ? '0 0 8px 2px rgba(59,130,246,0.3)'
          : 'none',
        opacity: isLocked ? 0.7 : 1,
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
    >
      {/* Lock icon badge (top-right) */}
      {isLocked && (
        <div
          className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-800 text-[8px] text-yellow-400 border border-gray-600 pointer-events-none"
          style={{ zIndex: 20 }}
          title="Locked"
        >
          L
        </div>
      )}

      {/* Control rendering */}
      <div className="flex h-full w-full items-center justify-center overflow-hidden pointer-events-none">
        {renderControl(control, isSelected)}
      </div>

      {/* Inline label editor overlay */}
      {isEditing && (
        <div
          className="absolute inset-x-0 bottom-0 flex items-center justify-center"
          style={{ zIndex: 30, pointerEvents: 'auto' }}
        >
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={commitEdit}
            onKeyDown={handleEditKeyDown}
            className="w-full bg-gray-900 border border-blue-500 text-[10px] text-white px-1 py-0.5 rounded text-center outline-none"
            style={{ maxWidth: control.w }}
          />
        </div>
      )}
    </Rnd>
  );
}
