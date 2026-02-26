# Fantom 08 Screen Catalog — Documentation Index

> This directory contains a complete catalog of every screen, sub-screen, popup, and overlay
> found in the Roland Fantom 08 Reference Manual, along with implementation guides for
> building new screens in the Interactive Music Studio app.
>
> **Adding a new instrument?** See the [New Instrument Playbook](../new-instrument-playbook.md) for the full end-to-end process.

---

## File Directory

| File | Description |
|------|-------------|
| **[screen-catalog.md](screen-catalog.md)** | **Master index** — 298 entries with confidence tags, implementation status, and access paths. Start here. |
| [01-panel-and-navigation.md](01-panel-and-navigation.md) | Chapter 1: Panel layout, buttons, and navigation screens (29 entries, pp. 8-16) |
| [02-performing.md](02-performing.md) | Chapter 2: Scene select, zone view, tone list, splits, arpeggio (31 entries, pp. 27-46) |
| [03-editing.md](03-editing.md) | Chapter 3: Controllers, scene/zone/tone editing workflows (36 entries, pp. 47-65) |
| [04-effects-mixer.md](04-effects-mixer.md) | Chapter 4: Effects routing, mixer, scene chain (29 entries, pp. 66-78) |
| [05-sampler.md](05-sampler.md) | Chapter 5: Sampling, wave edit, multisample, sample pads (37 entries, pp. 79-102) |
| [06-sequencer.md](06-sequencer.md) | Chapter 6: Pad modes, pattern sequencer, song mode, piano roll (66 entries, pp. 103-140) |
| [07-system-settings.md](07-system-settings.md) | Chapter 7: System, MIDI, USB, backup/restore, factory reset (45 entries, pp. 151-173) |
| [08-popups-overlays.md](08-popups-overlays.md) | Cross-cutting: Confirmation dialogs, value popups, utility windows (53 entries) |
| [catalog-methodology.md](catalog-methodology.md) | How the catalog was built — process, confidence criteria, known limitations |
| [screen-catalog-backup-2026-02-25.md](screen-catalog-backup-2026-02-25.md) | Pre-confidence-tagging backup of the master catalog |

---

## Project Status

| Metric | Value |
|--------|-------|
| Total screens cataloged | 298 raw entries (~210 deduplicated) |
| Currently implemented | 8 screen types |
| Overall catalog confidence | 88/100 |

### Confidence Breakdown

| Confidence | Count | Percentage |
|------------|-------|------------|
| HIGH | 83 | 28% |
| MED | 201 | 67% |
| LOW | 14 | 5% |

### Implemented Screen Types

| ScreenType | Component | Description |
|------------|-----------|-------------|
| `home` | `SceneSelectScreen` | Scene number/name, zone summary |
| `zone-view` | `ZoneViewScreen` | 1/4/8/16-zone grid with tones, ranges, volumes |
| `key-range` | `KeyRangeScreen` | Split point / note range editor |
| `write` | `WriteScreen` | Save confirmation dialog |
| `menu` | `MenuScreen` | Generic scrollable list |
| `tone-select` | `ToneSelectScreen` (inline in DisplayScreen) | Category tabs + tone list |
| `effect` | `MenuScreen` | Effects parameter list |
| `mixer` | `MixerScreen` | Channel-strip mixer with 8-zone and 16-zone views |

See [catalog-methodology.md](catalog-methodology.md) for the full process writeup.

---

## Implementation Roadmap

Screens prioritized by catalog confidence + workflow impact. All entries below are tagged HIGH confidence.

### Tier 1 — Core Editing (unlocks editing workflows)

| # | Screen | Catalog Entry | Why |
|---|--------|---------------|-----|
| 73 | SCENE EDIT Screen | [03-editing.md](03-editing.md) | Scene parameter editor — gateway to all scene-level configuration |
| 75 | ZONE EDIT Screen | [03-editing.md](03-editing.md) | Per-zone configuration (output, key range, velocity) |
| 116-117 | MIXER Screen (8/16 zone) | [04-effects-mixer.md](04-effects-mixer.md) | Volume/pan mixing — visual mixer with faders |
| 97 | Effects Edit Main Screen | [04-effects-mixer.md](04-effects-mixer.md) | Effects routing hub — IFX, chorus, reverb, master |

### Tier 2 — New Tutorial Categories (enables new tutorial types)

| # | Screen | Catalog Entry | Why |
|---|--------|---------------|-----|
| 81 | TONE EDIT Z-CORE ZOOM Screen | [03-editing.md](03-editing.md) | Graphical synth editor — enables Sound Design tutorials |
| 69 | MOTIONAL PAD Screen | [03-editing.md](03-editing.md) | XY performance pad — enables Performance tutorials |
| 189 | REC STANDBY Screen | [06-sequencer.md](06-sequencer.md) | Sequencer entry point — enables Sequencer tutorials |
| 178-179 | PATTERN Screen (8/16 track) | [06-sequencer.md](06-sequencer.md) | Sequencer pattern view — track grid with recording |

### Tier 3 — Polish (quality-of-life improvements)

| # | Screen | Catalog Entry | Why |
|---|--------|---------------|-----|
| 5 | RENAME Screen | [01-panel-and-navigation.md](01-panel-and-navigation.md) | QWERTY keyboard overlay — used in save/rename workflows |
| 10 | Knob/Slider Value Popup | [01-panel-and-navigation.md](01-panel-and-navigation.md) | Auto-dismiss parameter popup — makes knob/slider interactions realistic |
| 163 | PAD MODE Selection Screen | [06-sequencer.md](06-sequencer.md) | Pad mode grid — needed for pad-related tutorials |

---

## How to Add a Screen

Follow these steps to implement a new screen type. Reference the existing screens in
`src/components/devices/fantom-08/display/` for patterns.

### Step 1: Extend the type system

**File**: `src/types/display.ts`

Add the new screen type to the `ScreenType` union:

```typescript
export type ScreenType = 'home' | 'zone-view' | 'key-range' | 'write' | 'menu' | 'tone-select' | 'effect' | 'new-screen';
```

If the screen needs additional data, extend `DisplayState` with optional fields:

```typescript
export interface DisplayState {
  screenType: ScreenType;
  // ... existing fields ...
  newScreenData?: SomeNewInterface;  // add new optional fields
}
```

### Step 2: Create the screen component

**File**: `src/components/devices/fantom-08/display/NewScreen.tsx`

```typescript
'use client';

import { DISPLAY_COLORS } from '@/lib/constants';

interface NewScreenProps {
  // props specific to this screen
}

export default function NewScreen({ /* props */ }: NewScreenProps) {
  return (
    <div className="flex flex-col h-full font-mono">
      {/* Screen content here */}
    </div>
  );
}
```

**Styling conventions:**
- Import colors from `DISPLAY_COLORS` (`@/lib/constants`) — never hardcode display colors
- Use `font-mono` for all display text (LCD feel)
- Use `text-[10px]` or `text-[11px]` for display text sizes
- Use Framer Motion for animations (`motion.div` with `animate` and `transition`)
- Border colors: `DISPLAY_COLORS.border`
- Selected items: `DISPLAY_COLORS.active` with low alpha (e.g., `${DISPLAY_COLORS.active}20`)
- Highlighted text: `DISPLAY_COLORS.highlight` (green) or `DISPLAY_COLORS.header` (blue)

### Step 3: Register in the display router

**File**: `src/components/devices/fantom-08/display/DisplayScreen.tsx`

Add an import and a case to the `renderScreen()` switch:

```typescript
import NewScreen from './NewScreen';

// Inside renderScreen():
case 'new-screen':
  return <NewScreen /* pass relevant displayState fields */ />;
```

### Step 4: Use in tutorials

**File**: `src/data/tutorials/fantom-08/your-tutorial.ts`

Reference the new screenType in tutorial step `displayState`:

```typescript
{
  displayState: {
    screenType: 'new-screen',
    title: 'NEW SCREEN',
    // ... additional fields
  },
}
```

Follow the structure in `split-keyboard-zones.ts` as the canonical tutorial example.

---

## Tutorial Screen Usage

How the 7 implemented screen types are used across the 10 Phase 1 tutorials (89 total steps):

| screenType | Steps | Tutorials | Used In |
|------------|------:|----------:|---------|
| `home` | 27 | 10 | all tutorials |
| `zone-view` | 24 | 8 | split-keyboard-zones, selecting-scenes, selecting-tones, layering-zones, four-zone-setup, transpose-octave, using-sliders-knobs, editing-mfx |
| `tone-select` | 13 | 5 | split-keyboard-zones, panel-overview, selecting-tones, layering-zones, four-zone-setup |
| `write` | 8 | 4 | split-keyboard-zones, layering-zones, four-zone-setup, saving-your-work |
| `menu` | 7 | 4 | panel-overview, transpose-octave, using-sliders-knobs, saving-your-work |
| `key-range` | 5 | 2 | split-keyboard-zones, four-zone-setup |
| `effect` | 5 | 1 | editing-mfx |

### Per-Tutorial Breakdown

| Tutorial | Steps | home | zone-view | tone-select | menu | key-range | write | effect |
|----------|------:|-----:|----------:|------------:|-----:|----------:|------:|-------:|
| split-keyboard-zones | 10 | 1 | 4 | 2 | 0 | 2 | 1 | 0 |
| panel-overview | 8 | 6 | 0 | 1 | 1 | 0 | 0 | 0 |
| selecting-scenes | 7 | 6 | 1 | 0 | 0 | 0 | 0 | 0 |
| selecting-tones | 8 | 2 | 2 | 4 | 0 | 0 | 0 | 0 |
| layering-zones | 9 | 1 | 5 | 2 | 0 | 0 | 1 | 0 |
| four-zone-setup | 12 | 1 | 3 | 4 | 0 | 3 | 1 | 0 |
| transpose-octave | 7 | 2 | 3 | 0 | 2 | 0 | 0 | 0 |
| using-sliders-knobs | 10 | 2 | 5 | 0 | 3 | 0 | 0 | 0 |
| editing-mfx | 8 | 2 | 1 | 0 | 0 | 0 | 0 | 5 |
| saving-your-work | 8 | 2 | 0 | 0 | 1 | 0 | 5 | 0 |
| **Totals** | **89** | **27** | **24** | **13** | **7** | **5** | **8** | **5** |

**Takeaway**: `home` and `zone-view` dominate tutorial usage. New screens (Tier 1-2 above) will unlock tutorials that go beyond browsing into actual editing, effects, and sequencing workflows.
