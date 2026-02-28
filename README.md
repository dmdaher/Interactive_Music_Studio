# Interactive Music Studio

A browser-based platform that builds **complete digital twins** of real hardware instruments. Given a product's manuals and photos, it creates an interactive panel replicating the real hardware, every display screen from the manual, and step-by-step tutorials covering every capability the manual documents.

## What's Built

**Roland Fantom 08** — fully interactive digital twin:
- Interactive panel (88-key keyboard, LCD display, zone controls, knobs, sliders, pads, transport)
- 11 display screen types (scene select, zone view, mixer, effects routing, tone editing, and more)
- 57 tutorials across 9 categories (Basics, Zones & Splits, Sound Design, Effects, Sequencer, Sampling, Performance, Mixer, MIDI)
- 659 tests passing, all quality gates green

**Boss RC-505 MK2** — placeholder (Coming Soon)

## Tech Stack

Next.js 16 / React 19 / TypeScript 5 / Zustand 5 / Tailwind CSS 4 / Framer Motion 12 / Vitest

## Getting Started

```bash
npm install
npm run dev       # dev server on localhost:3000
npm run build     # production build
npm run test      # run tests
```

## Building a New Instrument

The process for adding a new instrument is documented in detail:

1. **Start here**: [`docs/new-instrument-playbook.md`](docs/new-instrument-playbook.md) — 7-phase end-to-end pipeline (gather materials, full manual read, screen catalog, panel design, core implementation, screens, tutorials, validation)
2. **Quality standards**: [`docs/quality-gates.md`](docs/quality-gates.md) — mandatory evidence-based checkpoints at every phase
3. **Tutorial execution**: Tutorial batch playbook in `memory/tutorial-batch-playbook.md` — TDD cycle for tutorial creation
4. **Lessons learned**: [`tasks/lessons.md`](tasks/lessons.md) — 10 correction patterns from building the Fantom 08

For Claude Code instances: see [`CLAUDE.md`](CLAUDE.md) for project instructions, mandatory onboarding sequence, and architecture patterns.
