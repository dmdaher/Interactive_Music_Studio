'use client';

import { useEffect, useState } from 'react';
import { useEditorStore, CANVAS_BASE_W, CANVAS_BASE_H } from './store';

/**
 * Renders the first hardware reference photo behind the canvas content.
 * Reads deviceId from the editor store.
 * Fetches the photo list from the pipeline API.
 */
export default function PhotoOverlay() {
  const showPhoto = useEditorStore((s) => s.showPhoto);
  const photoOpacity = useEditorStore((s) => s.photoOpacity);
  const deviceId = useEditorStore((s) => s.deviceId);
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
          const first = photos[0];
          // Use the path field (API serves images via ?file= query)
          const url = first.path ?? first.url ?? null;
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
        style={{
          width: CANVAS_BASE_W,
          height: CANVAS_BASE_H,
          objectFit: 'contain',
          opacity: photoOpacity,
        }}
      />
    </div>
  );
}
