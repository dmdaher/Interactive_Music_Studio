# CLAUDE.md — Music Studio Project

## Core Principle

Always check, validate, and confirm before acting. Measure twice, cut once.

---

## Project Overview

This is an **Interactive Music Studio** — a browser-based educational platform that simulates hardware control panels and guides users through step-by-step tutorials for learning music gear. The main app lives in `interactive-music-studio/`.

### Devices
- **Roland Fantom 08** — Fully built interactive panel with 88-key keyboard, LCD display, zone controls, knobs, sliders, pads, transport controls
- **Boss RC-505 MK2** — Placeholder ("Coming Soon")

### Working Directories
- **Primary**: `/Users/devin/Documents/Fun & Stuff/Music/Music Studio`
- **iCloud mirror**: `/Users/devin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Fun & Stuff/Music/Music Studio`
- The iCloud directory also contains Fantom hardware manuals (PDFs) and reference photos

---

## Tech Stack

- **Next.js 16** with App Router (`'use client'` on all interactive components)
- **React 19** — functional components with hooks
- **Zustand 5** — state management (single `tutorialStore`)
- **Tailwind CSS 4** — utility-first styling
- **Framer Motion 12** — animations (slide, fade, scale, glow highlights)
- **TypeScript 5** — strict mode, path alias `@/*` → `./src/*`
- **Vitest + React Testing Library** — tests in `src/__tests__/`

### Key Commands
- `npm run dev` — dev server on localhost:3000
- `npm run build` — production build
- `npm run test` — run tests (vitest)
- `npm run test:watch` — watch mode

---

## Architecture & Key Patterns

### File Structure
```
interactive-music-studio/src/
├── app/              # Next.js pages (home, tutorial/[deviceId]/[tutorialId])
├── components/
│   ├── ui/           # Shared: DeviceCard, TutorialCard, CategoryFilter, BrandingHeader
│   ├── controls/     # Reusable hardware controls: Knob, Slider, PadButton, PanelButton, etc.
│   ├── devices/      # Device-specific panels (fantom-08/, rc505-mk2/)
│   └── tutorial/     # TutorialRunner, TutorialOverlay, ProgressBar, NavigationControls
├── data/
│   ├── devices.ts           # Device registry
│   ├── panelLayouts/        # Physical control layout definitions
│   └── tutorials/           # Tutorial content as TypeScript objects
├── hooks/            # useTutorialEngine, usePanelState, useDisplayState
├── lib/              # Constants, noteHelpers, panelMapping utilities
├── store/            # Zustand tutorialStore
└── types/            # TypeScript interfaces: device, tutorial, panel, keyboard, display
```

### State Management (Zustand)
- Single store: `tutorialStore.ts`
- Holds: tutorial data, current step index, panel state, display state, highlighted controls, zones
- Panel state is **cumulative** — each step builds on previous steps' state
- Use `usePanelState` and `useDisplayState` hooks for selector-based subscriptions

### Data Flow
1. Home page → select device → filter/select tutorial
2. Navigate to `/tutorial/[deviceId]/[tutorialId]`
3. Tutorial loads into Zustand store → TutorialRunner renders device panel + overlay
4. Arrow keys or buttons navigate steps; panel state accumulates progressively

### Panel Design
- Fantom 08 panel is 2600x580px, organized into sections: Zone, Common, Controller, Synth Mode, Pads
- LCD display has multiple screen types: home, zone-view, key-range, menu, write, tone-select
- Controls use 3D effects (radial gradients, box shadows) to look like real hardware
- The panel was iteratively refined to match the real Fantom 08 hardware layout

### Tutorial Content Structure
- Tutorials defined in `data/tutorials/fantom-08/` as TypeScript objects
- Each step includes: title, instruction, details, highlightedControls, panelStateChanges, displayState, zones, tips
- Categories: Basics, Zones & Splits, Sound Design, Effects, MIDI, Performance, Sequencer, Sampling
- Difficulty levels: beginner, intermediate, advanced

---

## Design Guidelines

### Panel Layout Workflow
When designing or modifying instrument panels, **always design in the terminal first** using ASCII art. Break the layout into rows and columns to communicate the structure clearly before writing any code. This lets the user review and approve the layout visually before implementation begins. Example:
```
Row 1: [ZONE 1] [ZONE 2] [ZONE 3] [ZONE 4] | [COMMON] | [SCENE]
Row 2: [Knob1] [Knob2] [Knob3] [Slider1]   | [Display] | [Pad1][Pad2]
```
This row/column approach maps directly to how we structure the panel sections and flex layouts in code.

### General
- Understand the full scope before proposing anything. Read existing code, explore related directories, and trace dependencies.
- Reuse existing functions, utilities, patterns, and components — never propose new code when suitable implementations already exist. Check `components/controls/`, `lib/`, `hooks/`, and `types/` first.
- Don't over-engineer. Only make changes that are directly requested or clearly necessary.
- Present the design approach to the user and get alignment before writing any code.
- When adding a new device panel, follow the `fantom-08/` pattern: panel component, sections, display screens.
- When adding a new tutorial, follow the `split-keyboard-zones.ts` structure and export from the device's `index.ts`.

## Implementation Guidelines

- Before creating any file, search thoroughly for it first — check the immediate directory, subdirectories, parent directories, and related working directories (including the iCloud mirror).
- Before editing any file, read it first. Understand what's there before changing it.
- Prefer editing existing files over creating new ones.
- Keep solutions simple and focused. Don't add features, refactoring, or "improvements" beyond what was asked.
- All interactive components need `'use client'` directive at the top.
- Use existing control components (`Knob`, `Slider`, `PadButton`, `PanelButton`, etc.) when building panel sections.
- Follow the existing Tailwind + inline style pattern for dynamic colors and glows.
- CSS variables are defined in `globals.css`: `--background`, `--accent`, `--card-bg`, `--surface`.

## Verification & Testing

- After making changes, verify they work — run `npm run test` and check the dev server.
- Don't mark something as done until it's fully confirmed working.
- If something fails, investigate the root cause rather than retrying the same approach or brute-forcing past it.
- Tests live in `src/__tests__/` with subdirectories mirroring the source structure.
- Use Vitest + React Testing Library + jsdom for component tests.

## Checking with the User

- Do not rush to execute. Pause and confirm with the user before taking action, especially for:
  - Creating new files
  - Destructive or hard-to-reverse operations
  - Anything that affects shared state or is visible to others
- When corrected, stop immediately. Don't continue the old approach — listen, adjust, then proceed.
- Don't make large assumptions about user intent. Ask clarifying questions when the path forward isn't obvious.
- Match the scope of actions to what was actually requested — authorization for one thing doesn't mean authorization for everything.

---

## Fantom 08 Reference Documents

### PDF Manuals (iCloud mirror)
- `Roland Fantom-0 Series Reference Manual.pdf` — All screens, workflows, buttons (185 pp.)
- `Roland Fantom-0 Series Parameter Guide.pdf` — All parameters: Scene, Zone, Tone types, Effects (102 pp.)
- Additional owner's manuals / MIDI docs in same directory

**iCloud path**: `/Users/devin/Library/Mobile Documents/com~apple~CloudDocs/Documents/Fun & Stuff/Music/Music Studio/`

### Hardware Photos
- `fantom_08_1.jpg`, `fantom_08_2.jpg`, `fantom_08_3.jpg` — for panel verification

### Display Screen Types → Components
| ScreenType | Component | Shows |
|---|---|---|
| `home` | `SceneSelectScreen` | Scene number/name, zone summary |
| `zone-view` | `ZoneViewScreen` | 1/4/8/16-zone grid with tones, ranges, volumes |
| `key-range` | `KeyRangeScreen` | Split point / note range editor |
| `write` | `WriteScreen` | Save confirmation dialog |
| `menu` | `MenuScreen` | Generic scrollable list |
| `tone-select` | `MenuScreen` | Category tabs + tone list |
| `effect` | `MenuScreen` | Effects parameter list |

### Control ID Naming Convention
- Zone buttons: `zone-1`..`zone-8`, `zone-int`, `zone-9-16`, `zone-select`
- Sliders/Knobs: `slider-1`..`slider-8`, `ctrl-knob-1`..`ctrl-knob-8`
- Tone categories: `tone-cat-1`..`tone-cat-16` (A.Piano, E.Piano, Organ, Keys, Guitar, Bass, Strings, Brass, Wind, Choir, Synth, Pad, FX, Drums, User, Assign)
- Pads: `pad-1`..`pad-16`
- Full list: `allFantom08ControlIds` in `src/data/panelLayouts/fantom-08.ts`

### Canonical Tutorial Example
`src/data/tutorials/fantom-08/split-keyboard-zones.ts` — 10-step beginner tutorial demonstrating all patterns (zones, display states, panel state changes, tone selection, write/save)

---

## Corrections & Lessons Learned

- **Always search before creating**: Before creating any new file (including CLAUDE.md itself), search broadly across all relevant directories to confirm it doesn't already exist. Don't limit the search to just the current directory.
- **Update this file after every correction**: When the user corrects a mistake, add the lesson here so it's never repeated.
