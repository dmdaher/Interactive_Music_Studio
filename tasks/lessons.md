# Lessons Learned — Correction Pattern Catalog

> Append new patterns when mistakes are corrected. Each entry captures: what went wrong, why, and how to prevent it. Referenced by the CORRECTION gate in `docs/quality-gates.md`.

---

## Pattern: Hardcoded Hex Colors in Display Components

- **Mistake**: Used raw hex values like `#ff4444` or `#00ff00` directly in display component JSX instead of shared constants.
- **Root cause**: Assumed inline colors were acceptable for one-off styling. Didn't check existing constants first.
- **Prevention rule**: Always use `DISPLAY_COLORS`, `ZONE_COLORS`, or `ZONE_COLOR_MAP` from `@/lib/constants`. Never write a hex color literal in any display component.
- **Automated check**: `codeQuality.test.ts` — scans all display component files for hardcoded hex patterns.

---

## Pattern: Invented Tone Names

- **Mistake**: Used plausible-sounding but fabricated tone names (e.g., "Grand Piano 1") instead of verifying the exact name from the Sound List PDF.
- **Root cause**: Working from memory or general knowledge instead of opening the source document.
- **Prevention rule**: Every tone name in a tutorial must be verified against existing tutorials in `src/data/tutorials/fantom-08/` or the Sound List PDF (`FANTOM-06_07_08_SoundList_multi01_W.pdf`). Never invent a tone name.
- **Automated check**: Manual — cross-reference during CROSS-REFERENCE gate (Gate 4, question 1).

---

## Pattern: Delegating Manual PDF Reading to Agents

- **Mistake**: Asked a subagent to "read manual pages X-Y and summarize the screen layout" — the agent described a plausible but inaccurate screen layout based on general knowledge of synthesizer UIs.
- **Root cause**: Tried to save time by parallelizing research. Manual content requires direct reading because agents hallucinate visual details.
- **Prevention rule**: Never delegate manual PDF reading to agents. Screen layouts, parameter tables, E-knob assignments, and access paths must come from direct PDF reading in the main context. Agents can search codebase, run tests, check IDs — but not interpret manual content.
- **Automated check**: Manual — PRE-BUILD gate question 8 ("Did YOU personally read the manual pages?").

---

## Pattern: Forgotten ScreenType Registration

- **Mistake**: Added a new `ScreenType` value to the union type but forgot to add it to `screenTitle()` (a separate switch statement from `renderScreen()` in DisplayScreen.tsx).
- **Root cause**: Thought "register in DisplayScreen" meant one place, but there are TWO switch statements (renderScreen + screenTitle) plus the import.
- **Prevention rule**: When adding a new ScreenType, complete ALL 5 items: (1) ScreenType union in types, (2) renderScreen() case, (3) screenTitle() case, (4) validScreenTypes test array, (5) import in DisplayScreen.tsx.
- **Automated check**: `codeQuality.test.ts` — validates all ScreenType values have corresponding switch cases and test entries.

---

## Pattern: Non-Cumulative Panel State

- **Mistake**: Step 4 activated `menu: { active: true }` but Step 5 (which navigated to a different screen) didn't include `menu: { active: false }`, leaving the menu button visually active when it shouldn't be.
- **Root cause**: Treated each step's `panelStateChanges` as independent rather than cumulative. Each step builds on all previous steps' state.
- **Prevention rule**: Panel state is CUMULATIVE. When a control is activated in step N, it stays active until explicitly deactivated in a later step. When leaving a screen, deactivate controls that were active for that screen.
- **Automated check**: Manual — code-reviewer agent catches "orphaned active controls" as its #1 finding.

---

## Pattern: Identical DisplayState Across Steps

- **Mistake**: Two consecutive steps both had `screenType: 'menu'` with the same `menuItems` array. The tutorial engine couldn't differentiate between them visually.
- **Root cause**: Focused on the instruction text and forgot that each step needs a visually distinct display state.
- **Prevention rule**: Every step needs a UNIQUE `displayState`. Even two steps on the same screen type must differ. Use `statusText`, `selectedIndex`, or different `menuItems` to differentiate.
- **Automated check**: Manual — code-reviewer agent catches "identical displayState across steps" as its #2 finding.

---

## Pattern: menuItems as Plain Strings

- **Mistake**: Wrote `menuItems: ['Option A', 'Option B']` instead of `menuItems: [{ label: 'Option A' }, { label: 'Option B' }]`.
- **Root cause**: Assumed menuItems was a string array based on intuition. Didn't check the `Tutorial` type definition.
- **Prevention rule**: `menuItems` MUST use `{ label: string }` objects, not plain strings. The TypeScript `Tutorial` type enforces this — always check `src/types/tutorial.ts`.
- **Automated check**: TypeScript compiler — type error on assignment.

---

## Pattern: Contextually Wrong Control Highlights

- **Mistake**: In a mixer tutorial step, highlighted `slider-1` through `slider-8` for volume control. But the mixer screen has its own volume faders — the physical sliders aren't what the user interacts with on that screen.
- **Root cause**: Assumed physical controls map 1:1 to screen functions. Didn't check the manual's per-screen control assignment table.
- **Prevention rule**: Highlighted controls must match what the user would actually interact with in the specific screen/mode shown. Check the manual's E-knob and control assignment tables for the specific screen.
- **Automated check**: Manual — CROSS-REFERENCE gate question 5 ("Are highlighted controls contextually correct?").

---

## Pattern: File Already Exists

- **Mistake**: Created a new `CLAUDE.md` file without searching first, duplicating one that already existed in a parent directory.
- **Root cause**: Only checked the immediate directory, not parent directories or the iCloud mirror.
- **Prevention rule**: Before creating ANY new file, search broadly: immediate directory, subdirectories, parent directories, and related working directories (including iCloud mirror). Use Glob with `**/<filename>` pattern.
- **Automated check**: Manual — always search before creating.

---

## Pattern: Tutorial ID / Filename Mismatch

- **Mistake**: Named the file `file-management-deep-dive.ts` but set `id: 'file-management'` inside the tutorial object.
- **Root cause**: Shortened the ID for convenience without checking the convention.
- **Prevention rule**: Tutorial `id` must exactly match the filename (minus `.ts` extension). `file-management-deep-dive.ts` → `id: 'file-management-deep-dive'`.
- **Automated check**: Tutorial test — validates ID matches expected key in `expectedStepCounts`.
