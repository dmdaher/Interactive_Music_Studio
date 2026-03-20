'use client';

import { useZoomPan } from './hooks/useZoomPan';
import PanCanvas from './PanCanvas';

interface EditorWorkspaceProps {
  /** Used by photo overlay (Task 8) to load the device reference image. */
  deviceId: string;
  /** When true, the canvas is read-only (preview mode). */
  readOnly?: boolean;
}

export default function EditorWorkspace({ deviceId: _deviceId, readOnly }: EditorWorkspaceProps) {
  const { onWheel, onPointerDown, onPointerMove, onPointerUp } = useZoomPan();

  return (
    <div
      className={`relative flex-1 overflow-hidden ${
        readOnly
          ? 'cursor-default'
          : 'cursor-grab active:cursor-grabbing'
      }`}
      onWheel={onWheel}
      onPointerDown={readOnly ? undefined : onPointerDown}
      onPointerMove={readOnly ? undefined : onPointerMove}
      onPointerUp={readOnly ? undefined : onPointerUp}
    >
      {readOnly && (
        <div
          className="absolute inset-0 z-50"
          style={{ pointerEvents: 'auto' }}
        />
      )}
      <PanCanvas />
    </div>
  );
}
