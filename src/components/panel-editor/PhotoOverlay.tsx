'use client';

import { useEffect, useState } from 'react';
import { useEditorStore } from './store';

/**
 * Renders the first hardware reference photo behind the canvas content.
 * Reads deviceId from the editor store.
 * Fetches the photo list from the pipeline API.
 */
export default function PhotoOverlay() {
  const showPhoto = useEditorStore((s) => s.showPhoto);
  const photoOpacity = useEditorStore((s) => s.photoOpacity);
  const photoOffsetX = useEditorStore((s) => s.photoOffsetX);
  const photoOffsetY = useEditorStore((s) => s.photoOffsetY);
  const photoScale = useEditorStore((s) => s.photoScale);
  const canvasWidth = useEditorStore((s) => s.canvasWidth);
  const canvasHeight = useEditorStore((s) => s.canvasHeight);
  const setCanvasSize = useEditorStore((s) => s.setCanvasSize);
  const deviceId = useEditorStore((s) => s.deviceId);
  const [aspectMatched, setAspectMatched] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!deviceId) return;

    let cancelled = false;

    async function fetchPhotos() {
      try {
        const res = await fetch(`/api/pipeline/${deviceId}/photos`);
        if (!res.ok) return;
        const data = await res.json();
        // API returns { photos: [{ name, path, size }] }
        const photos = data.photos ?? data;
        if (!cancelled && Array.isArray(photos) && photos.length > 0) {
          // Prefer the top-view photo if available, otherwise first photo
          const topView = photos.find((p: { name: string }) =>
            p.name.toLowerCase().includes('top-view') || p.name.toLowerCase().includes('top_view')
          );
          const chosen = topView ?? photos[0];
          // API serves photos via ?file= query param, not subpath
          const url = `/api/pipeline/${deviceId}/photos?file=${encodeURIComponent(chosen.name)}`;
          setPhotoUrl(url);
        }
      } catch {
        // Silently ignore — photo overlay is optional
      }
    }

    fetchPhotos();
    return () => {
      cancelled = true;
    };
  }, [deviceId]);

  if (!showPhoto || !photoUrl) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photoUrl}
        alt="Hardware reference photo"
        onLoad={(e) => {
          // Auto-match canvas aspect ratio to the photo on first load
          if (!aspectMatched) {
            const img = e.currentTarget;
            const photoW = img.naturalWidth;
            const photoH = img.naturalHeight;
            if (photoW > 0 && photoH > 0) {
              const aspect = photoW / photoH;
              // Keep current canvas width, adjust height to match aspect ratio
              const newH = Math.round(canvasWidth / aspect);
              setCanvasSize(canvasWidth, newH);
              setAspectMatched(true);
            }
          }
        }}
        style={{
          width: canvasWidth,
          height: canvasHeight,
          objectFit: 'fill',
          opacity: photoOpacity,
          transform: `translate(${photoOffsetX}px, ${photoOffsetY}px) scale(${photoScale})`,
          transformOrigin: '0 0',
        }}
      />
    </div>
  );
}
