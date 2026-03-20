# Editor V2 Architecture — Complete Plan

> **Context:** Consolidates all feedback from initial build, user testing, and Gemini's architectural review. This replaces the piecemeal plans from the first session with a unified roadmap.

## Core Principle

**"Correct Topology, Approximate Geometry"**
- The pipeline must get the TOPOLOGY right (rows are rows, groups are groups)
- The contractor only fixes GEOMETRY (spacing, sizing, exact positioning)
- If a contractor has to re-group sections or change archetypes, the pipeline failed
- The editor output must be production-grade — thousands of users will see it daily

## Architecture Overview

```
Pipeline Phase 0 (AI + Deterministic)
  ├── Diagram Parser (vision) → spatial-blueprint.json
  │   └── NEW: Silkscreen boundary detection
  ├── Gatekeeper (judge LLM) → manifest.json
  │   └── NEW: Visual/behavioral/relational field extraction
  ├── Manifest Completeness Validator (mechanical) → validated manifest
  │   └── NEW: Rules-based field checker + auto-fixer
  └── Layout Engine (deterministic) → templates.json

Editor (Contractor)
  ├── Load: manifest → editor renders archetype-based layout
  ├── Edit: contractor drags/resizes/adjusts freely (absolute pixels)
  ├── Save: auto-saves absolute positions to manifest-editor.json
  └── Approve & Build:
      ├── Layout Inference: re-derives archetypes from final positions
      ├── Codegen: generates clean flex/grid React components
      └── Validation: contractor reviews generated panel
```

---

## Phase 1: Manifest Schema Expansion

### 1A. ManifestControl — New Fields

```typescript
export interface ManifestControl {
  // ─── Existing ─────────────────────────────────────────────────────
  id: string;
  verbatimLabel: string;
  type: 'button' | 'knob' | 'slider' | 'fader' | 'switch' | 'lever'
      | 'led' | 'screen' | 'encoder' | 'wheel' | 'pad'
      | 'port' | 'slot';  // NEW types
  section: string;
  functionalGroup: string;
  spatialNeighbors: {
    above: string | null;
    below: string | null;
    left: string | null;
    right: string | null;
  };

  // ─── Visual Appearance (NEW) ──────────────────────────────────────
  shape?: 'rectangle' | 'circle' | 'pill' | 'square';
  sizeClass?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  surfaceColor?: string | null;
  buttonStyle?: 'raised' | 'flat-key' | 'rubber' | 'transport';

  // ─── Label Rendering (NEW) ────────────────────────────────────────
  labelDisplay?: 'on-button' | 'above' | 'below' | 'left' | 'right'
               | 'icon-only' | 'hidden';
  icon?: string | null;
  primaryLabel?: string;
  secondaryLabel?: string | null;

  // ─── LED Properties (NEW) ─────────────────────────────────────────
  hasLed?: boolean;
  ledColor?: string | null;
  ledBehavior?: 'steady' | 'blink-on-activity' | 'dynamic-color';
  ledPosition?: 'above' | 'below' | 'inside' | 'ring';
  ledVariant?: 'dot' | 'dual-label' | 'bar';

  // ─── Interaction Model (NEW) ──────────────────────────────────────
  interactionType?: 'momentary' | 'toggle' | 'hold' | 'rotary' | 'slide';
  secondaryFunction?: string | null;
  positions?: number;
  positionLabels?: string[];
  encoderHasPush?: boolean;
  orientation?: 'vertical' | 'horizontal';

  // ─── Relationships (NEW) ──────────────────────────────────────────
  pairedWith?: string | null;
  sharedLabel?: string | null;
  groupId?: string | null;
  nestedIn?: string | null;
}
```

### 1B. ManifestSection — New Archetype

Add `'transport-pair'` to the archetype union for the CUE + PLAY/PAUSE pattern:

```typescript
export type LayoutArchetype =
  | 'grid-NxM'
  | 'single-column'
  | 'single-row'
  | 'anchor-layout'
  | 'cluster-above-anchor'
  | 'cluster-below-anchor'
  | 'dual-column'
  | 'stacked-rows'
  | 'transport-pair';  // NEW: two large circular buttons (CUE + PLAY)
```

### 1C. Top-Level Manifest — Device Dimensions

```typescript
export interface MasterManifest {
  // Existing fields...

  // NEW: Physical device dimensions for correct aspect ratio
  deviceDimensions?: {
    widthMm: number;   // e.g., 329 for CDJ-3000
    depthMm: number;   // e.g., 453 for CDJ-3000
  };

  // NEW: Group labels that span multiple controls
  groupLabels?: Array<{
    id: string;
    text: string;
    controlIds: string[];  // controls this label spans
    position: 'above' | 'below';
  }>;
}
```

---

## Phase 2: Pipeline Improvements

### 2A. Diagram Parser SOUL Update

Add to the Parser's extraction protocol:

**Silkscreen Boundary Detection:**
- Look for printed lines/boxes on the panel surface that visually group controls
- If a printed boundary encloses N controls, those N controls MUST be one section
- Boundary lines provide horizontal/vertical constraints that override centroid-only analysis
- Output boundary boxes in the spatial blueprint alongside centroids

**Transport Button Recognition:**
- If two large circular controls are found in the bottom-left area, flag as `transport-pair`
- Transport buttons are physically larger than all other buttons — use relative size as a signal

### 2B. Gatekeeper SOUL Update

Add five new extraction protocols to the Gatekeeper SOUL:

**Visual Appearance Protocol:**
- For every control: determine shape, sizeClass, surfaceColor, buttonStyle
- Read manual diagrams and descriptions for color references
- CUE buttons are typically orange/amber, PLAY buttons green, HOT CUE pads multicolor
- Browse bar buttons are flat-key style, transport buttons are raised rubber

**Label Rendering Protocol:**
- Determine labelDisplay for every control (on-button, above, icon-only, hidden)
- Identify icon vs text display — transport buttons show icons (►/II, ◄◄)
- Split compound labels into primaryLabel + secondaryLabel (e.g., "LOOP IN/CUE (IN ADJUST)" → primary: "LOOP IN/CUE", secondary: "IN ADJUST")

**LED Properties Protocol:**
- Identify all controls with integrated LEDs (hasLed)
- Determine LED color from manual descriptions
- Determine LED behavior (steady on/off, blink during I/O, dynamic color per state)

**Interaction Model Protocol:**
- Classify every control: momentary, toggle, hold, rotary, slide
- Identify secondary functions (long-press, shift+press)
- For levers/switches: count positions and label each position
- For encoders: note if push-to-select is available

**Control Pairing Protocol:**
- Identify paired controls that share a label (SEARCH ◄◄ + ►►, BEAT JUMP ◄ + ►)
- Set pairedWith (symmetric: A→B and B→A)
- Set sharedLabel (the text printed once for the pair)
- Identify nesting (jog display nestedIn jog wheel)

**Type Accuracy Rules:**
- Physical ports/slots → type: 'port' or 'slot', NOT 'button'
- 3-position levers → type: 'lever' with positions: 3
- Encoders with push → encoderHasPush: true

### 2C. Manifest Completeness Validator (NEW)

A mechanical (non-LLM) validator that runs after the Gatekeeper, before the Layout Engine. Rules-based checks:

```
For every control:
  ✓ shape is set (not null/undefined)
  ✓ sizeClass is set
  ✓ labelDisplay is set
  ✓ If type is 'led': ledColor is set
  ✓ If type is 'button': buttonStyle is set
  ✓ If label contains "port" or "slot": type is 'port' or 'slot' (auto-fix)
  ✓ If label contains unicode arrows/symbols: icon field is set
  ✓ interactionType is set

For paired controls:
  ✓ If control A has pairedWith=B, then control B has pairedWith=A
  ✓ If controls share a sharedLabel, they are in the same section

For sections:
  ✓ If section has exactly 2 large circular buttons: suggest archetype 'transport-pair'
  ✓ All controls in containerAssignment exist in the section's controls array

For nesting:
  ✓ If control A has nestedIn=B, control B exists
  ✓ Jog display type controls have nestedIn set to a wheel type control

Scoring:
  - Each missing field: -0.5 from a 10.0 base
  - Each type accuracy error: -1.0
  - Each broken pairing: -1.0
  - Score >= 9.0: PASS
  - Score < 9.0: flag for Gatekeeper retry
```

Auto-fix rules (applied before scoring):
- Label contains "port" + type is "button" → change type to "port"
- Label contains "slot" + type is "button" → change type to "slot"
- Label contains "indicator" + type is "button" → change type to "led"

---

## Phase 3: New Control Components

### 3A. Components to Build

| Component | Props | Visual |
|---|---|---|
| `Port` | `id, label, variant ('usb-a'\|'sd-card'\|'ethernet'\|'rca'), highlighted, width, height` | Dark recessed rectangle with port icon silhouette |
| `TouchDisplay` | `id, label, variant ('main'\|'jog'), bezelWidth, showMockContent, highlighted, width, height` | Dark rectangle with rounded corners, subtle bezel gradient, optional static waveform mockup |
| `JogDisplay` | `id, label, size, highlighted, showMockContent` | Circular LCD with dark fill, optional artwork circle mockup |
| `DirectionSwitch` | `id, label, positions, positionLabels, currentPosition, ledColor, highlighted, width, height` | Flat horizontal rocker with position markers and embedded LED dots |
| `LEDRing` | `id, color, brightness, innerDiameter, outerDiameter, highlighted` | Annular (donut-shaped) LED strip |
| `JogWheelAssembly` | `id, wheelSize, displaySize, ringColor, highlighted` | Composite: Wheel + JogDisplay (center) + LEDRing (outer). Single drag target. |

### 3B. PanelButton Variants to Add

| Variant | Visual | Used for |
|---|---|---|
| `flat-key` | Low-profile key-cap style, less 3D gradient, tighter spacing | Browse bar buttons (SOURCE, BROWSE, TAG LIST, etc.) |
| `transport` | Large, raised rubber, with icon display and colored accent ring | CUE (orange ring), PLAY/PAUSE (green ring) |
| `rubber-pad` | Already exists as PadButton, but PanelButton should support `variant: 'rubber'` for consistency | SLIP, QUANTIZE (small rubber toggle buttons) |

### 3C. Icon Library

Define a set of standard hardware icons for `icon-only` label display:

```typescript
const HARDWARE_ICONS: Record<string, string> = {
  'play': '▶',
  'pause': '❚❚',
  'play-pause': '▶/❚❚',
  'stop': '■',
  'record': '●',
  'fast-forward': '▶▶',
  'rewind': '◀◀',
  'skip-forward': '▶▶|',
  'skip-backward': '|◀◀',
  'arrow-left': '◀',
  'arrow-right': '▶',
  'eject': '⏏',
};
```

These render at 16-20px centered on the button face when `labelDisplay: 'icon-only'`.

---

## Phase 4: Editor Updates

### 4A. loadFromManifest Updates

Read all new manifest fields into ControlDef:
- `shape`, `sizeClass` → drive default pixel dimensions (instead of hardcoded DEFAULT_SIZES)
- `surfaceColor` → stored, passed to components
- `labelDisplay` → maps to labelPosition + iconMode
- `icon` → stored for icon-only rendering
- `hasLed`, `ledColor`, `ledBehavior` → stored, rendered on controls
- `pairedWith`, `sharedLabel`, `groupId` → stored for group label rendering
- `nestedIn` → stored for composite component rendering
- `interactionType` → stored for future tutorial state behavior
- `deviceDimensions` → compute canvas aspect ratio automatically
- `groupLabels` → render as standalone text elements on canvas

### 4B. ControlNode Rendering Updates

- Read `shape` → render circle vs rectangle buttons
- Read `surfaceColor` → apply as accent color to button/pad/LED
- Read `labelDisplay` → use `icon-only` mode, `hidden` mode
- Read `icon` → render large centered icon symbol
- Read `hasLed` + `ledColor` → show LED dot on buttons that have integrated LEDs
- Read `buttonStyle` → select PanelButton variant (flat-key, transport, rubber)
- Read `ledVariant` → render dot vs dual-label LED
- Render `Port`, `TouchDisplay`, `JogWheelAssembly`, `DirectionSwitch` for new types
- Composite controls with `nestedIn` render inside their parent

### 4C. GroupLabel Rendering

```typescript
interface GroupLabelDef {
  id: string;
  text: string;
  controlIds: string[];  // controls this label spans
  x: number;
  y: number;
  w: number;
  h: number;
  sectionId: string;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
}
```

- Render as draggable text elements on the canvas
- Auto-positioned above/below the controls they span (from manifest groupLabels)
- Contractor can adjust position but the text comes from the manifest

### 4D. Layout Inference (Approve & Build)

When the contractor clicks "Approve & Build":

1. **Analyze final positions** per section:
   - Group controls by similar Y values → detect rows
   - Group controls by similar X values → detect columns
   - Detect grids (consistent rows + columns)
   - Compute gaps between adjacent controls
   - Compute padding from section edges

2. **Re-derive archetype + parameters:**
   - If all controls share similar Y → `single-row` with computed gap
   - If all controls share similar X → `single-column` with computed gap
   - If controls form a grid pattern → `grid-NxM` with computed cols/rows/gap
   - If controls form stacked horizontal groups → `stacked-rows` with computed row assignments
   - If two large circles at bottom → `transport-pair`
   - Fallback: absolute positioning with inline styles

3. **Update manifest with inferred layout:**
   - Write back archetype, gap, padding, containerAssignment
   - Codegen reads the structural manifest and generates clean flex/grid CSS

4. **Contractor reviews generated panel:**
   - Side-by-side: editor view vs generated component
   - If layout inference got it wrong → contractor adjusts, re-approve
   - If it looks right → finalize

### 4E. Properties Panel Updates

New sections in the properties panel when selecting controls:

- **Visual** (read from manifest, contractor can override):
  - Shape selector (rectangle/circle/pill) — already built
  - Button style (raised/flat-key/transport/rubber)
  - Surface color picker (preset palette)

- **LED** (read from manifest, contractor can override):
  - LED style (dot/dual-label) — already built
  - LED color picker
  - Has LED toggle

- **Label** (read from manifest, contractor can override):
  - Display mode (on-button/above/below/icon-only/hidden)
  - Icon selector (from HARDWARE_ICONS)
  - Primary + secondary label text
  - Already partially built

---

## Phase 5: Pipeline Rerun & Verification

1. Update ManifestControl type in `layout-engine.ts`
2. Update Gatekeeper SOUL with all new protocols
3. Add Manifest Completeness Validator to checkpoint-validators.ts
4. Build new components (Port, TouchDisplay, JogDisplay, DirectionSwitch, JogWheelAssembly)
5. Update editor (loadFromManifest, ControlNode, PropertiesPanel)
6. Rerun CDJ-3000 pipeline with enriched Gatekeeper
7. Open editor — panel should render at ~80% fidelity
8. Contractor does positioning/sizing pass
9. Approve & Build → layout inference → codegen
10. Final panel review

---

## Implementation Order

| Step | What | Where | Depends on |
|---|---|---|---|
| 1 | Expand ManifestControl schema | `scripts/layout-engine.ts` | Nothing |
| 2 | Update Gatekeeper SOUL | `.claude/agents/gatekeeper.md` | Step 1 |
| 3 | Add Manifest Completeness Validator | `src/lib/pipeline/checkpoint-validators.ts` | Step 1 |
| 4 | Build Port component | `src/components/controls/Port.tsx` | Nothing |
| 5 | Build TouchDisplay component | `src/components/controls/TouchDisplay.tsx` | Nothing |
| 6 | Build JogDisplay component | `src/components/controls/JogDisplay.tsx` | Nothing |
| 7 | Build DirectionSwitch component | `src/components/controls/DirectionSwitch.tsx` | Nothing |
| 8 | Build JogWheelAssembly composite | `src/components/controls/JogWheelAssembly.tsx` | Steps 5, 6 |
| 9 | Add PanelButton variants | `src/components/controls/PanelButton.tsx` | Nothing |
| 10 | Add icon library | `src/lib/hardware-icons.ts` | Nothing |
| 11 | Update editor loadFromManifest | `src/components/panel-editor/store/manifestSlice.ts` | Step 1 |
| 12 | Update editor ControlNode | `src/components/panel-editor/ControlNode.tsx` | Steps 4-10 |
| 13 | Update editor PropertiesPanel | `src/components/panel-editor/PropertiesPanel/` | Step 11 |
| 14 | Add GroupLabel support | `src/components/panel-editor/GroupLabelNode.tsx` | Step 1 |
| 15 | Build Layout Inference engine | `src/lib/layout-inference.ts` | Nothing |
| 16 | Wire inference into Approve & Build | `src/components/panel-editor/PanelEditor.tsx` | Step 15 |
| 17 | Update Diagram Parser SOUL | `.claude/agents/diagram-parser.md` | Nothing |
| 18 | Rerun CDJ-3000 pipeline | Pipeline runner | Steps 1-3, 17 |
| 19 | Verify in editor | Manual testing | Steps 11-16, 18 |

Steps 1-3 (schema + pipeline) and Steps 4-10 (components) can run in parallel.
Steps 11-16 (editor updates) depend on both.
Steps 17-19 are the final verification.

---

## Success Criteria

**Pipeline output (before contractor):**
- All controls render with correct component type (no buttons for ports)
- All controls have correct shape (CUE is circle, SOURCE is rectangle)
- All controls have correct colors (CUE is orange, PLAY is green)
- All LEDs show correct colors
- Transport buttons show icons, not text
- Paired controls share group labels
- Jog display renders inside jog wheel
- Canvas aspect ratio matches device dimensions
- Archetype assignments are topologically correct

**After contractor pass:**
- All controls positioned accurately against photo reference
- Spacing and sizing match the real hardware proportions
- No archetype changes needed (topology was correct from pipeline)
- Layout inference produces clean flex/grid CSS
- Generated panel looks production-grade at any reasonable viewport size

**What the contractor NEVER has to decide:**
- Button colors, shapes, or styles
- LED colors or behaviors
- Icon vs text display
- Which controls are paired
- What archetype a section uses
- How the jog wheel assembly is composed

---

## Branch

Work on: `feature/pipeline-architecture-upgrade` (targets `test`)
