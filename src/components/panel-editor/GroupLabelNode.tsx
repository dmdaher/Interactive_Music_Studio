'use client';

import { useCallback, useRef } from 'react';
import { Rnd } from 'react-rnd';
import { useEditorStore } from './store';
import type { GroupLabel } from '@/types/manifest';

interface GroupLabelNodeProps {
  groupLabel: GroupLabel;
}

/**
 * GroupLabelNode renders a draggable text label on the canvas that spans
 * a group of controls. It uses Rnd for drag/resize, similar to ControlNode
 * but simpler — just a centered text element.
 */
export default function GroupLabelNode({ groupLabel }: GroupLabelNodeProps) {
  const controls = useEditorStore((s) => s.controls);
  const zoom = useEditorStore((s) => s.zoom);
  const snapGrid = useEditorStore((s) => s.snapGrid);

  // Compute bounding box from the controls this label spans
  const memberControls = groupLabel.controlIds
    .map((id) => controls[id])
    .filter(Boolean);

  // If no controls found, don't render
  if (memberControls.length === 0) return null;

  const minX = Math.min(...memberControls.map((c) => c.x));
  const maxX = Math.max(...memberControls.map((c) => c.x + c.w));
  const minY = Math.min(...memberControls.map((c) => c.y));
  const maxY = Math.max(...memberControls.map((c) => c.y + c.h));

  const spanW = maxX - minX;
  const labelH = 16;
  const labelY = groupLabel.position === 'above' ? minY - labelH - 4 : maxY + 4;

  const posRef = useRef({ x: minX, y: labelY });

  const handleDragStop = useCallback(
    (_e: unknown, d: { x: number; y: number }) => {
      posRef.current = { x: d.x, y: d.y };
    },
    [],
  );

  return (
    <Rnd
      position={{ x: posRef.current.x, y: posRef.current.y }}
      size={{ width: spanW, height: labelH }}
      scale={zoom}
      dragGrid={[snapGrid, snapGrid]}
      enableResizing={false}
      onDragStop={handleDragStop}
      style={{
        zIndex: 0,
        pointerEvents: 'auto',
        cursor: 'move',
      }}
    >
      <div
        className="flex items-center justify-center w-full h-full select-none"
        style={{
          borderBottom: groupLabel.position === 'above' ? '1px solid rgba(255,255,255,0.1)' : undefined,
          borderTop: groupLabel.position === 'below' ? '1px solid rgba(255,255,255,0.1)' : undefined,
        }}
      >
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest text-center leading-tight truncate">
          {groupLabel.text}
        </span>
      </div>
    </Rnd>
  );
}
