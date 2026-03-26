# Editor Label & Section Features Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Better label handling and section creation tools for the contractor.

---

## Feature 1: Hide All Labels Toggle

**Why:** Labels get in the way during initial positioning. Contractor wants to see just the control shapes against the photo, then show labels after layout is done.

**Implementation:**
- Add `showLabels: boolean` to canvasSlice store (default: true)
- Add `toggleLabels()` action
- Toolbar button: "Labels" toggle (same style as Grid/Photo toggles)
- Keyboard shortcut: `T` for toggle
- When `showLabels === false`:
  - Floating labels in ControlNode hidden (`display: none`)
  - On-button labels still show (they're part of the component face)
  - Section header labels in SectionFrame hidden
  - GroupLabelNode hidden

**Files:**
- Modify: `src/components/panel-editor/store/canvasSlice.ts` — add showLabels + toggleLabels
- Modify: `src/components/panel-editor/ControlNode.tsx` — gate floating label render on showLabels
- Modify: `src/components/panel-editor/SectionFrame.tsx` — gate section header on showLabels
- Modify: `src/components/panel-editor/PanCanvas.tsx` — gate GroupLabelNode on showLabels
- Modify: `src/components/panel-editor/EditorToolbar.tsx` — add Labels toggle button
- Modify: `src/components/panel-editor/hooks/useEditorKeyboard.ts` — add T shortcut

**Complexity:** ~50 LOC

---

## Feature 2: Label Text Wrapping + Min Font Size

**Why:** Long labels like "BEAT SYNC/INST.DOUBLES" overflow as a single line. Hardware silkscreen prints them on 2 lines. Also the smallest label (6px) is still bigger than what's on the photo.

**Implementation:**

**Wrapping:**
- In ControlNode floating label render, change from `whitespace-nowrap` to `whitespace-normal`
- Add `text-wrap: balance` for even line breaks
- Set `max-width` based on control width (label shouldn't be wider than the control)
- Add `text-center` for centered multi-line labels

**Smaller labels:**
- Current labelFontSize returns minimum 6px
- Allow down to 4px for xs sizeClass
- Add a "Label Size" dropdown in PropertiesPanel: Auto (from sizeClass), XS (4px), S (6px), M (8px), L (10px)
- Store as `labelFontSize?: number` on ControlDef

**Files:**
- Modify: `src/components/panel-editor/ControlNode.tsx` — label wrapping + max-width
- Modify: `src/components/panel-editor/store/manifestSlice.ts` — add `labelFontSize?: number` to ControlDef
- Modify: `src/components/panel-editor/PropertiesPanel/index.tsx` — label size selector
- Modify: `scripts/panel-codegen.ts` — respect labelFontSize in generated floating labels

**Complexity:** ~80 LOC

---

## Feature 3: Standalone Labels (Free Text on Canvas)

**Why:** Hardware panels have printed text that isn't attached to any control — section titles ("HOT CUE"), group labels ("SEARCH"), branding text, descriptive text. The contractor needs to add, position, and style these independently.

**Implementation:**

**Data model:** Extend `groupLabels` array in the editor store:
```typescript
interface EditorLabel {
  id: string;
  text: string;
  x: number;          // canvas pixels
  y: number;
  fontSize: number;    // 6-16px
  color: string;       // default '#888'
  uppercase: boolean;  // default true
  letterSpacing: number; // 0-0.3em
}
```

**UI:**
- Toolbar button: "Add Label" (or right-click canvas → "Add Label Here")
- Creates a new label at click position with placeholder text "LABEL"
- Label renders as a draggable text element (using Rnd, like controls)
- Click to select → PropertiesPanel shows: text input, font size, color, uppercase toggle
- Delete key removes selected label
- Labels are included in auto-save (manifest-editor.json)
- Codegen renders them as absolute-positioned `<span>` elements in the generated panel

**Files:**
- Create: `src/components/panel-editor/StandaloneLabel.tsx` — draggable label component
- Modify: `src/components/panel-editor/store/manifestSlice.ts` — add `editorLabels: EditorLabel[]` to store
- Modify: `src/components/panel-editor/PanCanvas.tsx` — render standalone labels
- Modify: `src/components/panel-editor/PropertiesPanel/index.tsx` — label properties when selected
- Modify: `src/components/panel-editor/EditorToolbar.tsx` — "Add Label" button
- Modify: `src/components/panel-editor/hooks/useAutoSave.ts` — include editorLabels in save
- Modify: `scripts/panel-codegen.ts` — render standalone labels in generated panel

**Complexity:** ~300 LOC

---

## Feature 4: Create Section from Selection + Archetype Layout

**Why:** Contractor selects a group of controls and wants to organize them — make them a horizontal row, a vertical column, or a grid. Instead of dragging each one individually, choose an archetype and the controls auto-arrange with proper spacing.

**Implementation:**

**Selection → Section creation:**
1. Contractor multi-selects controls (shift+click or rubber band)
2. Right-click → "Group as Section" (or toolbar button "Group Selected")
3. Modal appears:
   - Section name input
   - Archetype selector: Horizontal Row | Vertical Column | Grid (2-col, 3-col, 4-col)
   - Spacing input (gap in px): default 4
   - Preview showing how controls would arrange
4. Click "Apply" → controls rearrange within a new section bounding box

**How the arrangement works:**
- **Horizontal Row:** Sort controls by current X position. Place side by side with gap.
- **Vertical Column:** Sort by current Y position. Stack vertically with gap.
- **Grid NxM:** Sort by Y then X. Place in grid cells with gap. User specifies columns.

**Section bounding box:** Computed from the arranged controls + padding.

**Reversible:** The arrangement is just position changes — undo (Cmd+Z) reverts to original positions.

**Files:**
- Create: `src/components/panel-editor/GroupSectionModal.tsx` — modal with archetype picker
- Modify: `src/components/panel-editor/store/manifestSlice.ts` — add `groupAsSection(controlIds, name, archetype, gap)` action
- Modify: `src/components/panel-editor/ContextMenu.tsx` — add "Group as Section" option
- Modify: `src/components/panel-editor/EditorToolbar.tsx` — "Group Selected" button (visible when multi-selected)

**Complexity:** ~350 LOC

---

## Execution Order

```
1. Hide All Labels (simplest, immediate value)
2. Label Wrapping + Min Size (small change, improves readability)
3. Standalone Labels (medium complexity, useful for hardware text)
4. Section from Selection (most complex, biggest layout impact)
```

---

## What This Does NOT Change

- Pipeline runner, agents, validators — unchanged
- Existing manifest format — extended, not broken (new optional fields)
- Generated panel components — extended to render new label types
- Shared control components — unchanged
- Auto-save format — extended to include new data
