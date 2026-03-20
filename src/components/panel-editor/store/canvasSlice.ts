import { StateCreator } from 'zustand';

// ─── Types ──────────────────────────────────────────────────────────────────

export type SnapGrid = 4 | 8 | 16 | 32;

export interface CanvasSlice {
  // State
  zoom: number;
  panX: number;
  panY: number;
  snapGrid: SnapGrid;
  showGrid: boolean;
  showPhoto: boolean;
  photoOpacity: number;

  // Actions
  setZoom: (z: number) => void;
  setPan: (x: number, y: number) => void;
  setSnapGrid: (g: SnapGrid) => void;
  toggleGrid: () => void;
  togglePhoto: () => void;
  setPhotoOpacity: (o: number) => void;
}

// ─── Slice Creator ──────────────────────────────────────────────────────────

export const createCanvasSlice: StateCreator<
  CanvasSlice,
  [],
  [],
  CanvasSlice
> = (set) => ({
  // Default state
  zoom: 1,
  panX: 0,
  panY: 0,
  snapGrid: 8,
  showGrid: true,
  showPhoto: false,
  photoOpacity: 0.3,

  // Actions
  setZoom: (z) => set({ zoom: Math.max(0.1, Math.min(5, z)) }),

  setPan: (x, y) => set({ panX: x, panY: y }),

  setSnapGrid: (g) => set({ snapGrid: g }),

  toggleGrid: () => set((s) => ({ showGrid: !s.showGrid })),

  togglePhoto: () => set((s) => ({ showPhoto: !s.showPhoto })),

  setPhotoOpacity: (o) => set({ photoOpacity: Math.max(0, Math.min(1, o)) }),
});
