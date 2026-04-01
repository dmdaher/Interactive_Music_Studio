# Alignment & Distribution Tools — Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Figma/Sketch-style alignment and distribution tools for selected controls. Select 2+ controls, click align/distribute, only those controls move. Replaces "Clean Up" as the primary positioning tool.

**Branch:** `feature/pipeline-architecture-upgrade` (targets `test`)

---

## Tools

| Tool | Icon | What it does | Keyboard |
|------|------|-------------|----------|
| Align Left | `⫷` | All selected snap to leftmost x | — |
| Align Center H | `⫿` | All selected snap to average centerX | Shift+H |
| Align Right | `⫸` | All selected snap to rightmost right edge | — |
| Align Top | `⊤` | All selected snap to topmost y | — |
| Align Middle V | `⊞` | All selected snap to average centerY | Shift+V |
| Align Bottom | `⊥` | All selected snap to bottommost bottom edge | — |
| Distribute H | `⫼H` | Equal horizontal gaps between selected | Cmd+Shift+H |
| Distribute V | `⫼V` | Equal vertical gaps between selected | Cmd+Shift+V |

---

## UI Locations (3 places)

### 1. Properties Panel (primary — visible when 2+ controls selected)

**File:** `src/components/panel-editor/PropertiesPanel/index.tsx`

Insert after geometry fields (x/y/w/h), before "Match Sizes" button. Only visible when `selectedControls.length >= 2`.

```
┌─ PROPERTIES ──────────────────┐
│ 3 Controls Selected           │
│ x: Mixed  y: Mixed            │
│ w: 42     h: 28               │
│                                │
│ ── ALIGN ──────────────────── │
│ [⫷] [⫿] [⫸]  [⊤] [⊞] [⊥]  │
│ [Distribute H] [Distribute V] │
│                                │
│ [Match Sizes]                  │
└────────────────────────────────┘
```

6 alignment buttons in a 2×3 grid (left/center/right on top, top/middle/bottom below). Then Distribute H and V as two wider buttons.

### 2. Context Menu (secondary — right-click on multi-selection)

**File:** `src/components/panel-editor/ContextMenu.tsx`

Add "Align" submenu when 2+ controls selected:
```
Duplicate       Cmd+D
Delete          Del
Lock
─────────────
Align Left
Align Center
Align Right
Align Top
Align Middle
Align Bottom
─────────────
Distribute Horizontally
Distribute Vertically
```

### 3. Keyboard Shortcuts

**File:** `src/components/panel-editor/hooks/useEditorKeyboard.ts`

- `Shift+H` — Align Center H (most common alignment)
- `Shift+V` — Align Middle V
- `Cmd+Shift+H` — Distribute Horizontally
- `Cmd+Shift+V` — Distribute Vertically

---

## Store Actions

**File:** `src/components/panel-editor/store/manifestSlice.ts`

### alignControls

```typescript
alignControls: (alignment: 'left' | 'center-x' | 'right' | 'top' | 'center-y' | 'bottom') => void;
```

Implementation:
```typescript
alignControls: (alignment) => {
  const { selectedIds, controls } = get();
  if (selectedIds.length < 2) return;

  const selected = selectedIds.map(id => controls[id]).filter(Boolean);

  let targetValue: number;
  switch (alignment) {
    case 'left':
      targetValue = Math.min(...selected.map(c => c.x));
      break;
    case 'center-x': {
      const centers = selected.map(c => c.x + c.w / 2);
      targetValue = centers.reduce((a, b) => a + b, 0) / centers.length;
      break;
    }
    case 'right':
      targetValue = Math.max(...selected.map(c => c.x + c.w));
      break;
    case 'top':
      targetValue = Math.min(...selected.map(c => c.y));
      break;
    case 'center-y': {
      const centers = selected.map(c => c.y + c.h / 2);
      targetValue = centers.reduce((a, b) => a + b, 0) / centers.length;
      break;
    }
    case 'bottom':
      targetValue = Math.max(...selected.map(c => c.y + c.h));
      break;
  }

  set((s) => {
    const updated = { ...s.controls };
    for (const id of selectedIds) {
      const ctrl = updated[id];
      if (!ctrl || ctrl.locked) continue;
      switch (alignment) {
        case 'left': updated[id] = { ...ctrl, x: targetValue }; break;
        case 'center-x': updated[id] = { ...ctrl, x: targetValue - ctrl.w / 2 }; break;
        case 'right': updated[id] = { ...ctrl, x: targetValue - ctrl.w }; break;
        case 'top': updated[id] = { ...ctrl, y: targetValue }; break;
        case 'center-y': updated[id] = { ...ctrl, y: targetValue - ctrl.h / 2 }; break;
        case 'bottom': updated[id] = { ...ctrl, y: targetValue - ctrl.h }; break;
      }
    }
    return { controls: updated };
  });
};
```

### distributeControls

```typescript
distributeControls: (axis: 'horizontal' | 'vertical') => void;
```

Implementation:
```typescript
distributeControls: (axis) => {
  const { selectedIds, controls } = get();
  if (selectedIds.length < 3) return; // Need 3+ to distribute

  const selected = selectedIds
    .map(id => controls[id])
    .filter(Boolean)
    .filter(c => !c.locked);

  if (axis === 'horizontal') {
    selected.sort((a, b) => a.x - b.x);
    const first = selected[0];
    const last = selected[selected.length - 1];
    const totalSpace = (last.x + last.w) - first.x;
    const totalContent = selected.reduce((sum, c) => sum + c.w, 0);
    const gap = (totalSpace - totalContent) / (selected.length - 1);

    let pos = first.x;
    set((s) => {
      const updated = { ...s.controls };
      for (const ctrl of selected) {
        updated[ctrl.id] = { ...ctrl, x: Math.round(pos) };
        pos += ctrl.w + gap;
      }
      return { controls: updated };
    });
  } else {
    selected.sort((a, b) => a.y - b.y);
    const first = selected[0];
    const last = selected[selected.length - 1];
    const totalSpace = (last.y + last.h) - first.y;
    const totalContent = selected.reduce((sum, c) => sum + c.h, 0);
    const gap = (totalSpace - totalContent) / (selected.length - 1);

    let pos = first.y;
    set((s) => {
      const updated = { ...s.controls };
      for (const ctrl of selected) {
        updated[ctrl.id] = { ...ctrl, y: Math.round(pos) };
        pos += ctrl.h + gap;
      }
      return { controls: updated };
    });
  }
};
```

---

## Implementation Order

1. **Add store actions** — `alignControls` + `distributeControls` to manifestSlice
2. **Properties Panel UI** — alignment button grid in MultiControlProperties
3. **Keyboard shortcuts** — Shift+H/V, Cmd+Shift+H/V in useEditorKeyboard
4. **Context menu** — alignment submenu in ContextMenu
5. **Playwright test** — multi-select 3 knobs, align, verify positions

---

## Files Changed

| File | Change |
|------|--------|
| `src/components/panel-editor/store/manifestSlice.ts` | Add `alignControls` + `distributeControls` actions |
| `src/components/panel-editor/PropertiesPanel/index.tsx` | Add alignment button grid to MultiControlProperties |
| `src/components/panel-editor/hooks/useEditorKeyboard.ts` | Add Shift+H/V, Cmd+Shift+H/V shortcuts |
| `src/components/panel-editor/ContextMenu.tsx` | Add Align/Distribute submenu |

## Files NOT Changed

- `manifestSlice.ts` control/section data model — no new fields
- `historySlice.ts` — existing pushSnapshot pattern used
- `useAutoSave.ts` — no changes (controls changes auto-save as usual)
- `PanelEditor.tsx` — no changes
- `EditorToolbar.tsx` — no changes (tools live in PropertiesPanel + context menu)

---

## Interaction with Clean Up

Clean Up (Gap=0) remains as a conservative "align rows" tool. The new alignment tools are the primary positioning workflow:

1. Select 6 zone knobs
2. Click **Align Top** → all snap to same Y
3. Click **Distribute H** → equal horizontal gaps
4. Done — no guessing, no surprises

Clean Up can be kept for quick row-snapping or removed entirely in favor of these tools.
