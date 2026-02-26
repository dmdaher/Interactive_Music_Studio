# How We Built the Fantom 08 Screen Catalog

> **Date**: 2026-02-25
> **Catalog version**: v1 (with confidence tags)
> **Overall confidence rating**: 88/100

This document explains how the Fantom 08 screen catalog was created, how confidence ratings were assigned, and what the numbers mean. Use this as a reference when deciding which screens to implement or when evaluating catalog quality.

---

## Table of Contents

1. [The Source Material](#the-source-material)
2. [How Screens Were Cataloged (Phase 1-2)](#how-screens-were-cataloged-phase-1-2)
3. [How Confidence Tags Were Assigned](#how-confidence-tags-were-assigned)
4. [Cross-Referencing Pass](#cross-referencing-pass)
5. [Final Numbers](#final-numbers)
6. [Breakdown by Chapter](#breakdown-by-chapter)
7. [Breakdown by Screen Type](#breakdown-by-screen-type)
8. [Known Inaccuracies We Fixed](#known-inaccuracies-we-fixed)
9. [What "Overall Confidence 88/100" Means](#what-overall-confidence-88100-means)
10. [What Would Get Us to 95+](#what-would-get-us-to-95)

---

## The Source Material

**Primary source**: `Roland Fantom-0 Series Reference Manual` (FANTOM-06_07_08_Reference_eng01_W.pdf), 173 pages covering every screen, workflow, and button on the Fantom 06/07/08.

**Secondary source**: `Roland Fantom-0 Series Parameter Guide` (102 pages of parameter tables — not yet used for confidence validation, but available for future upgrades).

**Hardware photos**: 3 reference photos of the physical Fantom 08 used for panel layout verification.

All source materials live in the iCloud mirror directory.

---

## How Screens Were Cataloged (Phase 1-2)

### Phase 1: Full Manual Read (2026-02-23)

Every page (1-173) of the Reference Manual was read systematically. For each screen, sub-screen, popup, or overlay found, we recorded:

- **Screen name** (as labeled in the manual)
- **Page number** (for traceability back to the PDF)
- **Screen type** (Main, Sub-screen, Popup, Overlay, Reference)
- **How to access it** (button combo, menu path, or trigger condition)
- **Whether it's already implemented** in the Interactive Music Studio app

This produced ~200 raw screen entries across 173 pages.

### Phase 2: Chapter Files (2026-02-23 to 2026-02-25)

The raw entries were organized into 8 chapter files, each covering a section of the manual:

| File | Covers | Pages | Screens |
|------|--------|-------|---------|
| `01-panel-and-navigation.md` | Panel layout, basic operation | 8-16 | 29 |
| `02-performing.md` | Scene/tone selection, zones, splits, arpeggio, chords | 27-46 | 31 |
| `03-editing.md` | Controllers, synth ctrl, motional pad, scene/zone/tone edit | 47-65 | 36 |
| `04-effects-mixer.md` | Effects edit, mixer, scene chain | 66-78 | 29 |
| `05-sampler.md` | Sampling, multisamples, kbd samples, pad samples | 79-102 | 37 |
| `06-sequencer.md` | Pad modes, pattern, group, song, recording, editing | 103-140 | 66 |
| `07-system-settings.md` | Vocoder, utility, import/export, system tabs, expansion | 151-173 | 45 |
| `08-popups-overlays.md` | All transient popups and overlays (cross-chapter) | various | 53 |

Each chapter file contains detailed entries with layout descriptions, key elements, interactive elements, and implementation notes. The master index (`screen-catalog.md`) provides a unified table referencing all entries.

**Total in master table**: 298 entries (with some cross-chapter overlap; deduplicated unique screens: ~210).

---

## How Confidence Tags Were Assigned

Every entry in the master table received a confidence tag: **HIGH**, **MED**, or **LOW**.

### Criteria

| Tag | What it means | How we decided |
|-----|---------------|----------------|
| **HIGH** | We're confident this screen entry is accurate | Screenshot clearly visible in PDF; layout described from visual inspection; specific UI element names (button labels, tab names, parameter values) read directly from the screenshot |
| **MED** | Reasonable confidence, some gaps | Described in manual text with some detail but no clear screenshot; OR screenshot is small/partially obscured by annotations; OR parameters are listed but visual layout isn't fully shown |
| **LOW** | Minimal evidence — existence is known, details are thin | Inferred from brief mention like "The X screen appears" or "A confirmation dialog is shown"; no screenshot; minimal description beyond the screen's existence |

### Tagging Policy

- **Conservative**: When in doubt, we tagged MED or LOW rather than HIGH
- **Screenshot-first**: HIGH was only given when we could describe specific visual elements from a screenshot
- **Text-detail threshold**: MED required at least parameter names, access paths, or element descriptions — not just "it exists"
- **Brief-mention = LOW**: Any screen whose only evidence is "The [X] screen appears" stayed LOW until we found more detail

---

## Cross-Referencing Pass

After initial tagging, we noticed that Chapter 01 (Panel & Navigation) had 15 LOW entries — these were all brief button descriptions on p.10 saying things like "The PATTERN screen appears." But many of these same screens are described in extensive detail in later chapters.

We cross-referenced each Ch.01 LOW against all later chapter files:

| Screen | Ch.01 evidence | Later chapter evidence | Upgrade |
|--------|---------------|----------------------|---------|
| MOTIONAL PAD | "screen appears" | Ch.03: 4 detailed screens (layout, XY pad, zone select, edit) | LOW → **HIGH** |
| PATTERN | "screen appears" | Ch.06: 2 views (8-track, 16-track) with full layout | LOW → **HIGH** |
| GROUP | "screen appears" | Ch.06: detailed two-panel layout with toolbar mapping | LOW → **HIGH** |
| SONG | "screen appears" | Ch.06: 32-position grid, skip mode variant | LOW → **HIGH** |
| SCENE CHAIN | "screen appears" | Ch.04: 5-screen ecosystem (view, perform, edit, popups) | LOW → **HIGH** |
| Pad Mode Edit | "edit screen appears" | Ch.06: 10+ detailed mode screens with layouts | LOW → **HIGH** |
| TEMPO | "screen appears" | Ch.06: appears in sequencer navigation maps | LOW → **MED** |
| OSC Setting | "OSC setting screen" | Ch.03: Synth Ctrl OSC PRM with parameters | LOW → **MED** |
| FILTER Setting | "FILTER setting screen" | Ch.03: filter types, cutoff, resonance, control mapping | LOW → **MED** |
| AMP ENV | "AMP ENV screen" | Ch.03: ADSR components and editing context | LOW → **MED** |
| RHYTHM PATTERN | "screen appears" | Ch.02: pattern pads, presets, zone/tone display | LOW → **MED** |
| ASSIGN Setting | shortcut table only | Ch.03: access path, parameter/source/target structure | LOW → **MED** |
| MIXER | "display the MIXER screen" | Not found in any later chapter | **Stays LOW** |
| Routing | "routing screen appears" | Not found in any later chapter | **Stays LOW** |
| LFO1 | "LFO1 screen" | Only passing mention in Ch.03 tone edit notes | **Stays LOW** |

**Result**: 12 of 15 LOWs upgraded (6 to HIGH, 6 to MED). Only 3 stayed LOW.

---

## Final Numbers

### Totals

| Metric | Count |
|--------|-------|
| Raw entries in master table | 298 |
| Deduplicated unique screens (estimated) | ~210 |
| Currently implemented screen types | 7 |
| Remaining to implement | ~203 |

### Confidence Distribution (after cross-referencing)

| Confidence | Count | % | What it means for implementation |
|------------|-------|---|----------------------------------|
| **HIGH** | 83 | 28% | Ready to implement — detailed layout info available in chapter files |
| **MED** | 201 | 67% | Implementable with some interpretation — may need Parameter Guide cross-ref or hardware testing |
| **LOW** | 14 | 5% | Needs more research — these screens exist but we don't have enough detail to design them accurately |
| **Total** | **298** | **100%** | |

### The 14 Remaining LOW Entries

These are the screens we're least confident about:

| # | Screen | Why it's LOW |
|---|--------|-------------|
| 9 | MIXER Screen | Referenced in Ch.01 but no detailed entry found in any chapter |
| 14 | Routing Screen | Brief mention via SHIFT+MASTER FX, no layout documented |
| 20 | LFO1 Screen | Part of Tone Edit but only passing reference in Ch.03 |
| 34 | Scene Rating Edit | Mode within Scene Select, not a separate screen; brief mention |
| 35 | Scene Rating Filter | Mode within Scene Select, not a separate screen; brief mention |
| 44 | Tone Rating Edit | Rating edit mode within Tone List; brief mention |
| 132 | File Created Dialog (Storage) | Simple confirmation after sampling; no visual detail |
| 176 | Variation Play (via Pads) | Pad mode mentioned on p.107 but no dedicated screen detail |
| 177 | Group Play (via Pads) | Pad mode mentioned on p.107 but no dedicated screen detail |
| 287 | SYSTEM — LICENSE Tab | System settings tab; parameter list assumed but not shown |
| 288 | SYSTEM — INFO Tab | System info display; minimal description |
| 289 | Time Stamp Popup | Brief reference to date/time popup during system operations |
| 296 | TONE EDIT SNAP (Expansion) | Expansion variant; listed for traceability, same as #91 |
| 297 | TONE EDIT SNAP (Expansion E.Piano) | Expansion variant; listed for traceability, same as #92 |

---

## Breakdown by Chapter

| Chapter | HIGH | MED | LOW | Total | Assessment |
|---------|------|-----|-----|-------|------------|
| 01 — Panel & Navigation | 13 | 13 | 3 | 29 | Strong after cross-referencing (was 7/7/15) |
| 02 — Performing | 7 | 21 | 4 | 31 | Solid — mostly MED with good detail |
| 03 — Controllers & Editing | 10 | 26 | 0 | 36 | No LOWs — well-documented chapter |
| 04 — Effects & Mixer | 14 | 15 | 0 | 29 | No LOWs — screenshot-heavy chapter |
| 05 — Sampler | 6 | 30 | 1 | 37 | Heavily MED — many wizard-step screens |
| 06 — Pads & Sequencer | 28 | 41 | 2 | 71 | Strongest — most HIGHs, best screenshots |
| 07 — System & Settings | 5 | 55 | 5 | 65 | Tab-heavy — 17 system tabs are all MED |

### Chapter Insights

- **Ch.06 (Sequencer)** is the gold standard — 28 HIGHs because the manual has extensive screenshots of Pattern, Piano Roll, TR-REC, Song, and Group screens. These are the most complex screens and the manual documents them thoroughly.

- **Ch.04 (Effects)** punches above its weight — 14 HIGHs in just 29 entries. The effects edit screens have clear tab screenshots and parameter layouts.

- **Ch.07 (System)** is the most repetitive — 55 MEDs because it's 17 system tabs plus import/export wizard steps that all follow the same select-file → select-source → select-destination pattern. Highly predictable to implement even at MED confidence.

- **Ch.05 (Sampler)** has the most wizard-style screens — sampling workflows follow predictable standby → recording → confirmation → edit patterns. The MED rating is conservative; they're implementable.

- **Ch.01** improved dramatically — went from 15 LOWs to only 3 after cross-referencing. Those 3 (MIXER, Routing, LFO1) genuinely lack documentation.

---

## Breakdown by Screen Type

| Type | HIGH | MED | LOW | Total | Notes |
|------|------|-----|-----|-------|-------|
| Main screens | 49 | 27 | 5 | 81 | Best coverage — main screens get the most screenshots |
| Sub-screens | 28 | 126 | 7 | 161 | Largest group, mostly MED — parameter editors and wizard steps |
| Popups | 4 | 40 | 3 | 47 | Popups rarely get screenshots — text descriptions only |
| Overlays | 1 | 7 | 0 | 8 | Small group, all reasonably documented |
| UI element | 0 | 1 | 0 | 1 | Quick Edit Bar (reclassified) |

### Type Insights

- **Main screens** (81 total) are the highest priority for implementation and have the best documentation. 49 are HIGH confidence — ready to build.

- **Sub-screens** (161 total) are the bulk of the catalog. Most are parameter editors within larger screen frameworks (Tone Edit tabs, Effects Edit tabs, System tabs). At MED confidence, they're implementable because they follow predictable patterns within their parent screens.

- **Popups** (47 total) are almost all MED because the manual typically describes them in text ("a confirmation dialog appears with OK/Cancel") rather than showing screenshots. This is fine — popups are the simplest screens to implement.

---

## Known Inaccuracies We Fixed

During validation, we identified and corrected 4 issues:

### 1. TONE EDIT SN-AP / SN-EP naming
**Before**: Entries #91 and #92 were listed as "TONE EDIT SN-AP Screen" and "TONE EDIT SN-EP Screen"
**After**: Renamed to "TONE EDIT SNAP Screen" and "TONE EDIT SNAP Screen (E.Piano)"
**Why**: The manual's abbreviation "SN-AP" and "SN-EP" are shorthand for "SuperNATURAL Acoustic Piano" and "SuperNATURAL E.Piano" respectively. Both use the same SNAP editor framework — they're one screen type with different tone parameters loaded.

### 2. Quick Edit Bar reclassification
**Before**: Entry #36 listed as Type "Overlay"
**After**: Reclassified as Type "UI element"
**Why**: The "Quick Edit Bar" is the standard E1-E6 knob parameter bar that appears at the bottom of nearly every screen. It's a permanent UI element, not a separate overlay that appears/disappears.

### 3. Scene Rating Edit / Filter
**Before**: Entries #34 and #35 described as standalone screens
**After**: Noted as modes of the Scene Select screen, tagged LOW
**Why**: Touching rating stars or the rating filter on Scene Select modifies the view in-place. These aren't separate screens with distinct layouts — they're states of the Scene Select screen.

### 4. UNDO/REDO Indicator naming
**Before**: Entry #203 was "UNDO/REDO Indicator"
**After**: Renamed to "UNDO Indicator"
**Why**: The primary toolbar button is UNDO. REDO is the alternate (shift) function. The indicator shows whichever operation was last performed.

---

## What "Overall Confidence 88/100" Means

The overall confidence score reflects how trustworthy the catalog is as a basis for implementation planning. Here's how we calculate it:

- **HIGH entries** contribute full confidence (83 entries x 1.0)
- **MED entries** contribute 90% confidence (201 entries x 0.9)
- **LOW entries** contribute 50% confidence (14 entries x 0.5)

**Weighted score**: (83 + 180.9 + 7) / 298 = **90.9%**, rounded to **~88/100** with a conservative adjustment for unknown unknowns (screens the manual doesn't mention at all).

**What this means practically**:
- **95% of entries** (HIGH + MED) have enough detail to design and implement a screen
- **5% of entries** (LOW) need more research before implementation — but these are mostly low-priority screens (system tabs, expansion variants, simple confirmations)
- The catalog is **ready for Phase 3** (gap analysis & prioritization) — confidence on the entries that matter most (main screens, core editing screens) is high

---

## What Would Get Us to 95+

To push from 88 → 95+, these are the remaining gaps:

1. **Cross-reference the Parameter Guide PDF** (102 pages): The Parameter Guide lists every parameter for every screen type. Cross-referencing it against MED entries would upgrade many to HIGH by confirming parameter names, value ranges, and screen layouts.

2. **Verify the 14 LOWs on actual hardware**: Some LOW entries (MIXER, Routing, LFO1) might be documented in sections we haven't found, or might be simple enough to describe from hardware testing.

3. **Consolidate duplicates**: Several entries appear in both their chapter and the popups chapter. Formally deduplicating (rather than just estimating ~210) would give a cleaner count.

4. **Check for undocumented screens**: The manual may not cover every screen. Some screens might only appear in specific workflows (error states, edge cases, USB connection screens). Hardware testing would catch these.

---

## Files in This Directory

| File | Purpose |
|------|---------|
| `screen-catalog.md` | Master index with all 298 entries and confidence tags |
| `screen-catalog-backup-2026-02-25.md` | Pre-confidence-tagging backup |
| `catalog-methodology.md` | This file — process documentation |
| `01-panel-and-navigation.md` | Detailed entries for Ch.01 (pp. 8-16) |
| `02-performing.md` | Detailed entries for Ch.02 (pp. 27-46) |
| `03-editing.md` | Detailed entries for Ch.03 (pp. 47-65) |
| `04-effects-mixer.md` | Detailed entries for Ch.04 (pp. 66-78) |
| `05-sampler.md` | Detailed entries for Ch.05 (pp. 79-102) |
| `06-sequencer.md` | Detailed entries for Ch.06 (pp. 103-140) |
| `07-system-settings.md` | Detailed entries for Ch.07 (pp. 151-173) |
| `08-popups-overlays.md` | Cross-chapter popup/overlay catalog |
