# Structural Panel Layout — Design Document

> **Date**: 2026-03-07
> **Proof of Concept**: Pioneer CDJ-3000
> **Goal**: Replace absolute pixel positioning with structural layout so AI can reliably generate panel data

## Problem

The data-driven panel renderer uses absolute pixel coordinates for all 62 CDJ-3000 controls. AI estimated these coordinates from a manual diagram — the result looks wrong because:

1. AI cannot estimate precise pixel positions from photos/diagrams (~70% accuracy)
2. Absolute positioning enforces no spatial relationships between controls
3. A row of 8 pads with slightly wrong x-coordinates looks immediately broken
4. The Fantom 08 looks good because it uses flexbox/grid, which guarantees even spacing

## Solution: Structural Layout

Move precision from the data to the renderer. AI describes **topology** (what's next to what), the renderer handles **geometry** (exact spacing, sizing, alignment) via flexbox/grid.

### Three Layout Levels

| Level | What it solves | Who provides the answer |
|---|---|---|
| Panel rows | Which sections are side-by-side vs stacked | AI (topology — reliable) |
| Section layout | How controls arrange within a section | AI (grid/flex hints — reliable) |
| Control spacing | Exact gaps, sizes, alignment | Renderer (flexbox/CSS Grid — proven) |

### Type System Extensions

All extensions are backward-compatible. Existing `layoutMode: 'absolute'` (default) preserves Fantom 08 behavior.

```typescript
// Panel-level: ordered rows of sections
interface StructuralRow {
  sections: string[];        // section IDs, left-to-right
  stretch?: string;          // which section gets flex-grow:1
  height?: number | 'auto';  // fixed px or auto-size
  gap?: number;              // gap between sections (px)
}

// Section-level: how controls arrange
type SectionControlLayout =
  | { type: 'grid'; columns: number; gap?: number; rowGap?: number }
  | { type: 'flex-row'; gap?: number; wrap?: boolean; align?: 'start' | 'center' | 'end' }
  | { type: 'flex-col'; gap?: number; align?: 'start' | 'center' | 'end' }
  | { type: 'absolute'; width: number; height: number }  // escape hatch

// PanelLayout additions
interface PanelLayout {
  layoutMode?: 'structural' | 'absolute';  // default 'absolute'
  rows?: StructuralRow[];
  aspectRatio?: number;
  // ... existing fields unchanged
}

// PanelSection additions
interface PanelSection {
  controlLayout?: SectionControlLayout;
  padding?: number;
  minWidth?: number;
  minHeight?: number;
  // ... existing fields unchanged
}

// PanelControl additions
interface PanelControl {
  gridColumn?: number | string;   // e.g. 'span 2'
  gridRow?: number | string;
  flexOrder?: number;
  // position kept for absolute-mode sections only
}
```

### Renderer Behavior (DataDrivenPanel.tsx)

When `layoutMode === 'structural'`:

1. Outer container: `flex-col` with panel background/chrome
2. Each `StructuralRow`: `flex-row` with sections as flex items
3. `stretch` section gets `flex-grow: 1`; others size to content or `minWidth`
4. Within each section, `controlLayout` determines arrangement:
   - `grid` → CSS Grid with specified columns/gap
   - `flex-row` → horizontal flex with gap
   - `flex-col` → vertical flex with gap
   - `absolute` → positioned container (escape hatch for jog wheel)
5. Controls rendered in declaration order; `gridColumn`/`gridRow` overrides placement

When `layoutMode === 'absolute'` (default): current behavior, unchanged.

### CDJ-3000 Structural Layout

```
Row 1: [nav-bar] — full width, flex-row, 8 nav buttons
Row 2: [media | display | browse-controls] — display stretches
Row 3: [hot-cue-strip] — full width, grid 8 cols for pads + extra controls
Row 4: [loop-beat | jog-wheel | jog-controls] — jog-wheel stretches (absolute mode)
Row 5: [transport | spacer | tempo-sync] — transport left, tempo right
```

### JogWheel Component Extraction

The inline `renderJogWheel` function in `DataDrivenPanel.tsx` becomes `src/components/controls/JogWheel.tsx` — a reusable component following the same pattern as Knob, Slider, PadButton. Props: `id`, `size`, `highlighted`, `active`.

### What This Does NOT Change

- Fantom 08 panel: untouched (hand-crafted flexbox, `layoutMode` defaults to `'absolute'`)
- Tutorial system: unchanged (tutorials reference control IDs, which stay the same)
- Panel state management: unchanged (Zustand store, cumulative state)
- Existing control components: unchanged (Knob, Slider, PadButton, etc.)

## Success Criteria

- CDJ-3000 renders with correct proportions and spacing from structural data alone
- No pixel coordinates in the CDJ-3000 layout data (except jog wheel sizing)
- Visual quality approaches Fantom 08 level (proper spacing, proportional sections)
- Build + tests pass
- Fantom 08 panel unaffected
