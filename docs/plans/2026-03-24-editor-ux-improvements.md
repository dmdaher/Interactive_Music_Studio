# Editor UX Improvements Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Make the editor intuitive for contractors — easy section dragging, consistent control resizing, and smooth interaction patterns.

---

## Task 1: Section drag handle

**Problem:** Section frame and child controls overlap. Clicking near a section edge grabs a control resize handle instead of the section. Contractor can't find the draggable area.

**Solution:** Add a visible drag handle bar at the top of each SectionFrame.

**Implementation:**
- Add a header bar (~16px tall) at the top of SectionFrame showing the section name (e.g., "ZONE", "COMMON")
- The header bar is the drag handle — only it initiates section drag
- Clicking inside the section body (below the header) selects child controls, not the section
- Use react-rnd's `dragHandleClassName` prop to restrict drag to the header
- Header shows: grip icon (⋮⋮) + section name + control count
- Subtle styling: dark background, small text, visible on hover

**Files:**
- Modify: `src/components/panel-editor/SectionFrame.tsx`
  - Add header div with `className="section-drag-handle"`
  - Add `dragHandleClassName="section-drag-handle"` to Rnd component
  - Remove section click handler from body (only header selects section)

---

## Task 2: Controls fill their container (responsive components)

**Problem:** Some components (TouchDisplay, Slider) respect container dimensions. Others (PanelButton, Knob, PadButton) have fixed internal pixel sizes and ignore the container. When the contractor resizes a control's container, the component inside doesn't stretch.

**Solution:** Make all control components accept and respect `width`/`height` props from their container.

**Components to update:**

| Component | Current | Change needed |
|---|---|---|
| PanelButton | Uses `sizeClasses` with hardcoded px | Accept optional `width`/`height` props. If provided, use them instead of sizeClasses. Button face fills container. |
| Knob | Fixed `sm=26px, md=34px` | Accept optional `outerSize` prop (already exists). Editor should pass container size. |
| PadButton | Fixed `64x64px` default | Accept `width`/`height` props. Already has them but may not fully respect. |
| ValueDial | Fixed `sm=48px, lg=96px` | Accept `outerSize` prop (already exists). Pass from container. |
| Wheel | Fixed sizes per variant | Accept `width`/`height` props. |
| TouchDisplay | Already respects `width`/`height` | No change needed ✓ |
| Slider | Already respects container | No change needed ✓ |
| LEDIndicator | Fixed sm/md/lg sizes | Accept size prop from container. |

**The key change:** In ControlNode's `renderControl()` function, pass the container's `control.w` and `control.h` to each component so they fill their container. Components use these as their outer dimensions instead of hardcoded sizes.

**Files:**
- Modify: `src/components/panel-editor/ControlNode.tsx` — pass w/h to renderControl
- Modify: `src/components/controls/PanelButton.tsx` — accept optional width/height
- Modify: `src/components/controls/Knob.tsx` — use outerSize from container
- Modify: `src/components/controls/PadButton.tsx` — respect width/height
- Modify: `src/components/controls/ValueDial.tsx` — use outerSize from container

**Important:** This only affects the EDITOR rendering. Codegen already passes `pxW`/`pxH` to components in the generated panel — those dimensions come from the manifest's editorPosition percentages. The editor just needs to do the same thing.

---

## Task 3: Section-by-section editing mode (future)

**Problem:** With 121 controls on screen, the editor is overwhelming. Controls from different sections overlap, making it hard to position individual sections.

**Solution:** Toggle to show one section at a time. Contractor positions controls for that section, marks it done, moves to next.

**Deferred** — design this after Tasks 1 and 2 are working. The section drag handle (Task 1) may reduce the need for this.
