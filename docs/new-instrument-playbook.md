# New Instrument Playbook

> **Purpose**: Step-by-step process for adding a new instrument to the Interactive Music Studio.
> Follow this playbook end-to-end when building any new device — it captures the exact workflow
> we used for the Fantom 08, refined into a repeatable process.
>
> **Audience**: A Claude instance (or human developer) starting from scratch with a new device.

---

## Table of Contents

1. [Phase 0 — Gather Source Materials](#phase-0--gather-source-materials)
2. [Phase 1 — Full Manual Read & Screen Catalog](#phase-1--full-manual-read--screen-catalog)
3. [Phase 2 — Organize & Tag Confidence](#phase-2--organize--tag-confidence)
4. [Phase 3 — Panel Layout Design](#phase-3--panel-layout-design)
5. [Phase 4 — Core Implementation](#phase-4--core-implementation)
6. [Phase 5 — Screen Implementation](#phase-5--screen-implementation)
7. [Phase 6 — Tutorial Content](#phase-6--tutorial-content)
8. [Phase 7 — Validation & Polish](#phase-7--validation--polish)
9. [Appendix A — File Structure Template](#appendix-a--file-structure-template)
10. [Appendix B — Lessons from the Fantom 08](#appendix-b--lessons-from-the-fantom-08)

---

## Phase 0 — Gather Source Materials

**Goal**: Collect everything you'll need before writing any code.

### Checklist

- [ ] **Reference Manual PDF** — The official manual that documents every screen, button, and workflow. This is the primary source.
- [ ] **Parameter Guide PDF** (if available) — Lists every parameter, value range, and screen mapping. Secondary source for detail validation.
- [ ] **Hardware photos** — At least 2-3 high-quality photos of the physical device from different angles. Used for panel layout verification.
- [ ] **Owner's Manual / Quick Start** (optional) — Sometimes has clearer workflow diagrams than the reference manual.
- [ ] **MIDI Implementation docs** (optional) — Useful for MIDI-related screens and tutorials.

### Where to store

Put all source materials in the iCloud mirror directory under a folder named after the device:

```
/Users/devin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Fun & Stuff/Music/Music Studio/
├── [Device Name]/
│   ├── [Device] Reference Manual.pdf
│   ├── [Device] Parameter Guide.pdf
│   ├── [device]_photo_1.jpg
│   ├── [device]_photo_2.jpg
│   └── ...
```

### How We Did It (Fantom 08)

We had the Roland Fantom-0 Series Reference Manual (185 pages), Parameter Guide (102 pages), and 3 hardware photos. The Reference Manual was the primary source for all screen cataloging. The Parameter Guide was identified as a future cross-reference source but wasn't used in the initial catalog pass.

---

## Phase 1 — Full Manual Read & Screen Catalog

**Goal**: Read every page of the reference manual and catalog every screen, sub-screen, popup, and overlay.

### Process

1. **Read the manual systematically, cover to cover.** Don't skip sections. Don't skim. Every page gets read.

2. **For each screen you find, record:**
   - Screen name (as labeled in the manual)
   - Page number (for traceability back to the PDF)
   - Screen type: `Main`, `Sub-screen`, `Popup`, `Overlay`, or `Reference`
   - How to access it (button combo, menu path, or trigger condition)
   - Key UI elements visible in screenshots
   - Whether it maps to something already implemented

3. **Use agent parallelism.** The manual read is the most time-intensive phase. Use subagents to read different page ranges in parallel (e.g., agent 1 reads pp. 1-50, agent 2 reads pp. 51-100, etc.). Each agent produces a raw entry list. Then a coordinating pass merges and deduplicates.

4. **Don't interpret yet.** Just record what you see. Accuracy > completeness at this stage. If a screen is mentioned but not shown, record it with a note that it lacks visual detail.

### Output

A raw catalog of ~N screen entries (for Fantom 08 this was ~200 entries across 173 pages).

### How We Did It (Fantom 08)

We used the Task tool to spawn subagent researchers, each assigned a page range of the Reference Manual PDF. Each agent read their pages with the Read tool (using the `pages` parameter for PDFs) and produced structured entries. A coordinating agent merged the results into a single catalog. This took the equivalent of reading 173 pages and produced ~200 raw entries.

Key decisions:
- We chose to read the full manual before organizing, rather than doing it chapter-by-chapter. This gave us a complete picture before we started structuring.
- We recorded page numbers on every entry so we could always trace back to the source.
- We noted when a screen was "mentioned but not shown" vs. "shown in a screenshot" — this became the basis for confidence tagging later.

---

## Phase 2 — Organize & Tag Confidence

**Goal**: Turn raw entries into a structured, confidence-tagged catalog that guides implementation priority.

### Step 2a: Organize into Chapter Files

Group entries by manual chapter/section. Create one markdown file per chapter:

```
docs/[device]-screens/
├── README.md                    # Index, status dashboard, implementation roadmap
├── screen-catalog.md            # Master table with all entries
├── catalog-methodology.md       # How the catalog was built (this process)
├── 01-[chapter-name].md         # Detailed entries for chapter 1
├── 02-[chapter-name].md         # Detailed entries for chapter 2
├── ...
└── NN-popups-overlays.md        # Cross-cutting popups and overlays
```

Each chapter file should have detailed entries with:
- Layout description (ASCII sketch or element list)
- Key elements (buttons, labels, indicators)
- Interactive elements (what responds to input)
- Implementation notes (existing components to reuse, complexity estimate)

### Step 2b: Assign Confidence Tags

Every entry gets a confidence tag: **HIGH**, **MED**, or **LOW**.

| Tag | Criteria |
|-----|----------|
| **HIGH** | Screenshot clearly visible in PDF; specific UI elements (button labels, tab names, parameter values) readable from screenshot |
| **MED** | Described in text with some detail but no clear screenshot; OR screenshot is small/partially obscured; OR parameters listed but layout not fully shown |
| **LOW** | Inferred from brief mention ("The X screen appears"); no screenshot; minimal detail beyond existence |

**Tagging policy**: Be conservative. When in doubt, tag MED or LOW.

### Step 2c: Cross-Reference Pass

Many screens appear in multiple chapters. A screen may be briefly mentioned in an early chapter ("press PATTERN to open the pattern screen") and then fully documented later. Do a cross-reference pass:

1. Identify all LOW entries
2. Search the full catalog for the same screen name in other chapters
3. If detailed documentation exists elsewhere, upgrade the confidence tag
4. Document upgrades in the methodology file

### Step 2d: Compute Overall Confidence

Weighted formula:
```
score = (HIGH_count * 1.0 + MED_count * 0.9 + LOW_count * 0.5) / total_count
```

Apply a conservative adjustment for unknown unknowns (screens the manual doesn't mention). For Fantom 08, this gave us 88/100.

### Output

A confidence-tagged catalog with chapter files, a master index, and a methodology document.

### How We Did It (Fantom 08)

- 298 entries organized into 8 chapter files + 1 popups/overlays file
- Confidence distribution: 83 HIGH (28%), 201 MED (67%), 14 LOW (5%)
- Cross-referencing upgraded 12 of 15 initially-LOW entries (6 to HIGH, 6 to MED)
- Full details in `docs/fantom-08-screens/catalog-methodology.md`

---

## Phase 3 — Panel Layout Design

**Goal**: Design the physical panel layout (the hardware UI that wraps the display) before writing code.

### Process

1. **Study hardware photos.** Identify all physical sections: buttons, knobs, sliders, pads, displays, labels.

2. **Design in ASCII first.** Break the panel into rows and columns. Present the layout in the terminal for user review before writing any code.

   ```
   Row 1: [ZONE 1] [ZONE 2] [ZONE 3] [ZONE 4] | [COMMON] | [SCENE]
   Row 2: [Knob1] [Knob2] [Knob3] [Slider1]   | [Display] | [Pad1][Pad2]
   ```

3. **Define panel dimensions.** The Fantom 08 panel is 2600x580px. Choose dimensions that fit the device's physical proportions.

4. **Map control IDs.** Define a consistent naming convention for every control:
   - Zone buttons: `zone-1`..`zone-N`
   - Sliders: `slider-1`..`slider-N`
   - Knobs: `knob-1`..`knob-N`
   - Pads: `pad-1`..`pad-N`
   - Named buttons: descriptive IDs like `play`, `stop`, `rec`, `menu`

5. **Create the panel layout data file.** This defines which controls exist and where they are.

6. **Get user approval** on the ASCII layout before implementing.

### How We Did It (Fantom 08)

The Fantom 08 panel went through multiple iterations:
- Initial ASCII layout proposed in terminal
- User reviewed and approved the section structure
- Panel built section by section: ZoneSection, CommonSection, ControllerSection, SynthModeSection, PadSection
- Hardware photos used for verification at each step
- Control IDs defined in `src/data/panelLayouts/fantom-08.ts` with a canonical list (`allFantom08ControlIds`)
- Multiple refinement passes to match real hardware proportions (knob sizes, slider spacing, button groupings)

---

## Phase 4 — Core Implementation

**Goal**: Build the foundational files — types, device registration, panel component, display shell.

### Step-by-step

1. **Define types** in `src/types/`:
   - Device type in `device.ts`
   - Display types in `display.ts` (ScreenType union, DisplayState, ZoneDisplayInfo)
   - Panel types in `panel.ts` (control IDs, panel state)
   - Keyboard types if the device has keys

2. **Register the device** in `src/data/devices.ts`:
   ```typescript
   { id: 'device-id', name: 'Device Name', brand: 'Brand', status: 'active' }
   ```

3. **Create the panel layout** in `src/data/panelLayouts/[device-id].ts`:
   - Export control ID list
   - Export section definitions
   - Export the panel layout mapping

4. **Create the panel component** in `src/components/devices/[device-id]/`:
   ```
   [device-id]/
   ├── [Device]Panel.tsx        # Main panel wrapper
   ├── sections/                # Panel sections
   │   ├── ZoneSection.tsx
   │   ├── CommonSection.tsx
   │   └── ...
   └── display/                 # Display screens
       ├── DisplayScreen.tsx    # Screen router (switch on screenType)
       └── ...                  # Individual screen components
   ```

5. **Build the display shell** (`DisplayScreen.tsx`):
   - Status bar at top
   - Header bar with screen title and back arrow
   - Content area that routes to screen components
   - LCD visual effects (scanlines, bezel, glow)

### Patterns to Follow

- **`'use client'`** directive on all interactive components
- **DISPLAY_COLORS** from `@/lib/constants` — never hardcode display colors
- **font-mono** for all LCD text
- **text-[10px] / text-[11px]** for display text sizes
- **Framer Motion** for screen transitions and element animations
- **Zone colors** from `ZONE_COLORS` in constants

### How We Did It (Fantom 08)

Files were created in this order:
1. Types (`display.ts`, `panel.ts`, `keyboard.ts`, `device.ts`, `tutorial.ts`)
2. Constants (`lib/constants.ts` — ZONE_COLORS, DISPLAY_COLORS, PANEL_COLORS)
3. Device registration (`data/devices.ts`)
4. Panel layout (`data/panelLayouts/fantom-08.ts`)
5. Reusable controls (`components/controls/` — Knob, Slider, PadButton, PanelButton, etc.)
6. Panel sections (Zone, Common, Controller, SynthMode, Pad)
7. Display shell (DisplayScreen with StatusBar, header routing)
8. Initial screens (SceneSelectScreen, ZoneViewScreen)

---

## Phase 5 — Screen Implementation

**Goal**: Build display screen components based on the catalog, prioritized by tutorial needs.

### Prioritization

Use the catalog's confidence tags and implementation roadmap:

1. **Tier 1 — Core screens** needed by basic tutorials (home, zone view, tone select, write/save)
2. **Tier 2 — Editing screens** that unlock new tutorial categories (mixer, effects, scene edit)
3. **Tier 3 — Advanced screens** for specialized tutorials (sequencer, sampler, system settings)

### Per-Screen Implementation Steps

For each new screen:

1. **Read the catalog entry.** Check the chapter file for the detailed layout description, key elements, and implementation notes.

2. **Design in ASCII.** Sketch the screen layout before coding:
   ```
   ┌─────────────────────────────────────────┐
   │ ◄ SCREEN NAME                           │
   ├────┬────┬────┬────┬────────────────────┤
   │ C1 │ C2 │ C3 │ C4 │                    │
   │    │    │    │    │    [Right Panel]    │
   │    │    │    │    │                    │
   ├────┴────┴────┴────┴────────────────────┤
   │ [Footer with controls/status]           │
   └─────────────────────────────────────────┘
   ```

3. **Extend types.** Add the new `ScreenType` value and any new `DisplayState` fields.

4. **Create the component.** Follow conventions from existing screens.

5. **Register in DisplayScreen.** Add import, switch case, and screen title.

6. **Verify.** Run `npm run build` (type check) and `npm run test` (regression check).

### How We Did It (Fantom 08)

Screens were built in this order:
1. `SceneSelectScreen` (home) — the default view
2. `ZoneViewScreen` — 4 view modes (1/4/8/16 zone), most complex initial screen
3. `KeyRangeScreen` — split point editor
4. `WriteScreen` — save confirmation
5. `MenuScreen` — generic list (reused for menu, effect, tone-select base)
6. `ToneSelectScreen` — inline in DisplayScreen (category tabs + tone list)
7. `MixerScreen` — channel strip mixer with 8-zone and 16-zone views

Each screen followed the same steps: read catalog → ASCII design → extend types → create component → register → verify build + tests.

---

## Phase 6 — Tutorial Content

**Goal**: Write step-by-step tutorials that guide users through real workflows on the device.

### Tutorial Structure

Each tutorial is a TypeScript object in `src/data/tutorials/[device-id]/`:

```typescript
export const tutorialName: Tutorial = {
  id: 'tutorial-slug',
  deviceId: 'device-id',
  title: 'Tutorial Title',
  description: 'One-line description',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  steps: [
    {
      title: 'Step Title',
      instruction: 'What the user should do',
      details: 'Explanation of what this does and why',
      highlightedControls: ['control-id-1', 'control-id-2'],
      panelStateChanges: { 'control-id': { active: true } },
      displayState: {
        screenType: 'home',
        // ... screen-specific data
      },
      zones: [ /* zone data */ ],
      tips: ['Optional helpful tip'],
    },
    // ... more steps
  ],
};
```

### Key Patterns

- **Panel state is cumulative.** Each step builds on previous steps' state changes.
- **Highlighted controls** get a glow effect on the panel, guiding the user's eye.
- **Display state** changes the LCD screen content on each step.
- **Zones array** defines the zone configuration for that step.
- **Tips** are optional context shown in the tutorial overlay.

### Categories & Difficulty

| Category | What it covers |
|----------|---------------|
| basics | Navigation, scene selection, basic operations |
| zones-splits | Zone configuration, keyboard splits, layering |
| sound-design | Tone editing, oscillators, filters |
| effects | MFX, IFX, chorus, reverb |
| midi | MIDI routing, external control |
| performance | Live performance features |
| sequencer | Pattern recording, song mode |
| sampling | Sampling, wave editing |

Difficulty: `beginner` → `intermediate` → `advanced`

### Canonical Example

`src/data/tutorials/fantom-08/split-keyboard-zones.ts` — 10-step beginner tutorial covering zones, display states, panel state changes, tone selection, and write/save. Use this as the template for every new tutorial.

### How We Did It (Fantom 08)

- Phase 1: 10 beginner tutorials covering all basics
- Each tutorial was designed to exercise a specific set of screens and controls
- Tutorials were validated with Playwright visual tests
- The `split-keyboard-zones` tutorial was built first as the canonical example, then all others followed its pattern

---

## Phase 7 — Validation & Polish

**Goal**: Verify everything works and matches the real hardware.

### Checklist

- [ ] `npm run build` — no type errors
- [ ] `npm run test` — all tests pass, no regressions
- [ ] Visual comparison with hardware photos
- [ ] Each tutorial plays through from start to finish
- [ ] Screen transitions are smooth (Framer Motion)
- [ ] Panel controls highlight correctly during tutorials
- [ ] Display state updates correctly on each step
- [ ] Zone colors are consistent between panel and display

### Testing Strategy

- **Unit tests** in `src/__tests__/` for components, store, utilities
- **Integration tests** for tutorial loading and step navigation
- **Visual validation** comparing rendered screens to manual screenshots
- **Regression tests** — run full suite after every change

---

## Appendix A — File Structure Template

When adding a new device, create this structure:

```
src/
├── components/devices/[device-id]/
│   ├── [Device]Panel.tsx
│   ├── sections/
│   │   ├── [Section1]Section.tsx
│   │   └── ...
│   └── display/
│       ├── DisplayScreen.tsx
│       ├── [Screen1]Screen.tsx
│       └── ...
├── data/
│   ├── panelLayouts/[device-id].ts
│   └── tutorials/[device-id]/
│       ├── index.ts
│       ├── [tutorial-1].ts
│       └── ...
└── __tests__/
    ├── [Device]Panel.test.tsx
    ├── display/
    │   └── DisplayScreen.test.tsx
    └── tutorials/
        └── [device-id]Tutorials.test.ts

docs/
├── [device-id]-screens/
│   ├── README.md
│   ├── screen-catalog.md
│   ├── catalog-methodology.md
│   ├── 01-[chapter].md
│   └── ...
```

---

## Appendix B — Lessons from the Fantom 08

These are mistakes we made and corrections we received. Avoid repeating them.

1. **Always search before creating.** Before creating any new file, search broadly across all directories (including the iCloud mirror) to confirm it doesn't already exist.

2. **Read before editing.** Always read a file's current content before modifying it.

3. **Panel layout: ASCII first, code second.** Design in the terminal, get user approval, then implement. Don't jump to code.

4. **Screen catalog: full read before organizing.** Read the entire manual before structuring entries. This avoids duplicate entries and missed cross-references.

5. **Confidence tagging: be conservative.** Tag MED or LOW when in doubt. Upgrading is easy; downgrading erodes trust.

6. **Cross-reference pass is essential.** Screens mentioned briefly in early chapters often have full documentation later. The cross-reference pass upgraded 12 of 15 LOW entries for us.

7. **Zone colors wrap at 8.** The Fantom has 16 zones but only 8 distinct colors. Zones 9-16 reuse colors 1-8. Handle this in all zone-related displays.

8. **Panel state is cumulative.** Tutorial steps build on each other. Don't reset state between steps.

9. **Phantom controls.** If the real hardware doesn't have a control, don't add it to the panel layout. We had a phantom `zone-int` control that caused test failures.

10. **Display colors are sacred.** Always use `DISPLAY_COLORS` from constants. Never hardcode hex values in display components.

11. **Verify after every change.** Run `npm run build` and `npm run test` after each implementation step, not just at the end.

12. **Subagents for research, main context for implementation.** Use Task tool subagents for manual reading, codebase exploration, and parallel research. Keep the main conversation focused on implementation decisions and code writing.

13. **Document the process as you go.** Don't wait until the end to write methodology docs. Write them during the catalog phase so they're accurate and detailed.

14. **Always validate against the reference manual before designing tutorials or screens.** Before proposing any tutorial content or screen design, open the actual PDF manual pages and cross-reference your design against what the real hardware shows. Check: access paths (how the user gets to this screen), knob/button assignments (which physical controls do what in this context), visual layout (what elements appear where), and parameter ranges. Don't design from memory or assumptions — open the manual, read the specific pages, and confirm every detail. This caught multiple errors in our mixer tutorial design (wrong control highlights, incorrect knob assignments).

15. **Highlighted controls must match the real workflow context.** When a tutorial highlights a physical control on the panel, that control must be the one the user would actually interact with in that specific screen/mode context. Example: in PAN/LEVEL mode, slider-1 controls Zone 1 volume. But in the MIXER screen, Zone 1 volume is controlled by the E6 knob. Highlighting the wrong control teaches users incorrect muscle memory. Always verify which controls are active in the current screen context by checking the parameter table in the manual.

16. **Use subagents and the PDF manual together.** When designing new content, dispatch a subagent to search the screen catalog docs for relevant entries, AND separately read the actual manual pages yourself. The catalog is a summary — the manual screenshots contain visual details (layout, element positioning, exact labels) that the catalog may not fully capture. Both sources together give the most accurate picture.
