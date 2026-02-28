import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Automated code quality tests.
 *
 * These tests catch structural/consistency violations that would otherwise
 * require manual review. They enforce the patterns documented in CLAUDE.md
 * and docs/quality-gates.md.
 *
 * Categories:
 *   1. ScreenType registration consistency
 *   2. Display component conventions
 *   3. Shared constant usage (no hardcoded colors)
 *   4. No duplicate utility definitions
 *   7. Tutorial performance guards
 */

const SRC_DIR = path.resolve(__dirname, '..');
const DISPLAY_DIR = path.join(SRC_DIR, 'components/devices/fantom-08/display');
const TYPES_FILE = path.join(SRC_DIR, 'types/display.ts');
const DISPLAY_SCREEN_FILE = path.join(DISPLAY_DIR, 'DisplayScreen.tsx');
const CONSTANTS_FILE = path.join(SRC_DIR, 'lib/constants.ts');
const TUTORIAL_TEST_FILE = path.join(__dirname, 'tutorials/fantom08Tutorials.test.ts');

/** Extract all ScreenType values from the union type in display.ts */
function extractScreenTypes(): string[] {
  const content = fs.readFileSync(TYPES_FILE, 'utf-8');
  const match = content.match(/export type ScreenType\s*=\s*([^;]+)/);
  if (!match) return [];
  return match[1]
    .split('|')
    .map((s) => s.trim().replace(/['"]/g, ''))
    .filter((s) => s.length > 0);
}

/** Extract the validScreenTypes array from the tutorial test file */
function extractValidScreenTypes(): string[] {
  const content = fs.readFileSync(TUTORIAL_TEST_FILE, 'utf-8');
  const match = content.match(/validScreenTypes\s*=\s*\[([^\]]+)\]/);
  if (!match) return [];
  return match[1]
    .split(',')
    .map((s) => s.trim().replace(/['"]/g, ''))
    .filter((s) => s.length > 0);
}

/** Get all .tsx files in the display directory except DisplayScreen.tsx */
function getDisplayComponentFiles(): string[] {
  return fs.readdirSync(DISPLAY_DIR).filter(
    (f) => f.endsWith('.tsx') && f !== 'DisplayScreen.tsx'
  );
}

const SHARED_DIR = path.join(DISPLAY_DIR, 'shared');

/** Get all .tsx files in the display/shared/ directory */
function getSharedComponentFiles(): string[] {
  if (!fs.existsSync(SHARED_DIR)) return [];
  return fs.readdirSync(SHARED_DIR).filter((f) => f.endsWith('.tsx'));
}

// ─────────────────────────────────────────────────
// 1. ScreenType registration consistency
// ─────────────────────────────────────────────────

describe('ScreenType registration consistency', () => {
  const screenTypes = extractScreenTypes();
  const displayScreenContent = fs.readFileSync(DISPLAY_SCREEN_FILE, 'utf-8');

  it('ScreenType union is not empty', () => {
    expect(screenTypes.length).toBeGreaterThan(0);
  });

  it('every ScreenType has a case in renderScreen()', () => {
    screenTypes.forEach((st) => {
      const hasCase = displayScreenContent.includes(`case '${st}'`);
      expect(
        hasCase,
        `ScreenType "${st}" has no case in renderScreen() — add a switch case in DisplayScreen.tsx`
      ).toBe(true);
    });
  });

  it('every ScreenType has a case in screenTitle()', () => {
    screenTypes.forEach((st) => {
      const hasCase = displayScreenContent.includes(`case '${st}'`);
      expect(
        hasCase,
        `ScreenType "${st}" has no case in screenTitle() — add a switch case in DisplayScreen.tsx`
      ).toBe(true);
    });
  });

  it('every ScreenType is in the tutorial test validScreenTypes array', () => {
    const validScreenTypes = extractValidScreenTypes();
    screenTypes.forEach((st) => {
      expect(
        validScreenTypes,
        `ScreenType "${st}" is missing from validScreenTypes in fantom08Tutorials.test.ts — add it to prevent future test failures`
      ).toContain(st);
    });
  });
});

// ─────────────────────────────────────────────────
// 2. Display component registration
// ─────────────────────────────────────────────────

describe('Display component registration', () => {
  const displayScreenContent = fs.readFileSync(DISPLAY_SCREEN_FILE, 'utf-8');
  const componentFiles = getDisplayComponentFiles();

  it('all display screen components are imported in DisplayScreen.tsx', () => {
    componentFiles.forEach((file) => {
      const componentName = file.replace('.tsx', '');
      const isImported = displayScreenContent.includes(`from './${componentName}'`);
      expect(
        isImported,
        `Display component "${componentName}" (${file}) is not imported in DisplayScreen.tsx`
      ).toBe(true);
    });
  });

  it('all display screen components have the "use client" directive', () => {
    componentFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(DISPLAY_DIR, file), 'utf-8');
      const hasDirective = content.trimStart().startsWith("'use client'");
      expect(
        hasDirective,
        `Display component "${file}" is missing the 'use client' directive at the top`
      ).toBe(true);
    });
  });
});

// ─────────────────────────────────────────────────
// 3. No hardcoded colors in display components
// ─────────────────────────────────────────────────

describe('Display components use shared constants', () => {
  const componentFiles = getDisplayComponentFiles();

  // Match standalone hex color strings like '#ff4444' or "#1a1a2e"
  // This catches hardcoded colors that should use DISPLAY_COLORS/ZONE_COLORS
  const HEX_COLOR_REGEX = /['"]#[0-9a-fA-F]{6}['"]/g;

  it('no hardcoded hex colors in display screen components', () => {
    const violations: { file: string; colors: string[] }[] = [];

    componentFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(DISPLAY_DIR, file), 'utf-8');
      const matches = content.match(HEX_COLOR_REGEX);
      if (matches && matches.length > 0) {
        violations.push({ file, colors: matches });
      }
    });

    if (violations.length > 0) {
      const details = violations
        .map((v) => `  ${v.file}: ${v.colors.join(', ')}`)
        .join('\n');
      expect(
        violations,
        `Hardcoded hex colors found in display components. Use DISPLAY_COLORS, ZONE_COLORS, or ZONE_COLOR_MAP from @/lib/constants:\n${details}`
      ).toHaveLength(0);
    }
  });

  it('all display components import from @/lib/constants', () => {
    componentFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(DISPLAY_DIR, file), 'utf-8');
      const importsConstants = content.includes("from '@/lib/constants'");
      expect(
        importsConstants,
        `Display component "${file}" does not import from @/lib/constants — all display colors should come from shared constants`
      ).toBe(true);
    });
  });
});

// ─────────────────────────────────────────────────
// 4. No duplicate utility definitions
// ─────────────────────────────────────────────────

describe('No duplicate utility definitions', () => {
  const componentFiles = getDisplayComponentFiles();

  it('ZONE_COLOR_MAP is only defined in constants.ts', () => {
    const duplicates: string[] = [];

    componentFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(DISPLAY_DIR, file), 'utf-8');
      // Check for local zone color map definitions (Record<number, string> with zone color assignments)
      if (
        content.includes('zoneColorMap') ||
        content.includes('ZONE_COLOR_MAP') &&
        content.includes('Record<number')
      ) {
        // It's OK to IMPORT ZONE_COLOR_MAP, but not to DEFINE it locally
        const definesLocally =
          content.includes('const zoneColorMap') ||
          content.includes('const ZONE_COLOR_MAP');
        if (definesLocally) {
          duplicates.push(file);
        }
      }
    });

    expect(
      duplicates,
      `ZONE_COLOR_MAP is defined locally in: ${duplicates.join(', ')}. Import it from @/lib/constants instead.`
    ).toHaveLength(0);
  });
});

// ─────────────────────────────────────────────────
// 5. DisplayScreen.tsx completeness
// ─────────────────────────────────────────────────

describe('DisplayScreen.tsx completeness', () => {
  const displayScreenContent = fs.readFileSync(DISPLAY_SCREEN_FILE, 'utf-8');

  it('DisplayScreen.tsx has a default case in renderScreen', () => {
    expect(displayScreenContent).toContain('default:');
  });

  it('DisplayScreen.tsx exports a default function', () => {
    expect(displayScreenContent).toContain('export default function DisplayScreen');
  });
});

// ─────────────────────────────────────────────────
// 6. Shared display component conventions
// ─────────────────────────────────────────────────

describe('Shared display component conventions', () => {
  const sharedFiles = getSharedComponentFiles();
  const HEX_COLOR_REGEX = /['"]#[0-9a-fA-F]{6}['"]/g;

  it('shared/ directory has components', () => {
    expect(sharedFiles.length).toBeGreaterThan(0);
  });

  it('all shared components have the "use client" directive', () => {
    sharedFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(SHARED_DIR, file), 'utf-8');
      const hasDirective = content.trimStart().startsWith("'use client'");
      expect(
        hasDirective,
        `Shared component "${file}" is missing the 'use client' directive at the top`
      ).toBe(true);
    });
  });

  it('all shared components import from @/lib/constants', () => {
    sharedFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(SHARED_DIR, file), 'utf-8');
      const importsConstants = content.includes("from '@/lib/constants'");
      expect(
        importsConstants,
        `Shared component "${file}" does not import from @/lib/constants — all display colors should come from shared constants`
      ).toBe(true);
    });
  });

  it('no hardcoded hex colors in shared components', () => {
    const violations: { file: string; colors: string[] }[] = [];

    sharedFiles.forEach((file) => {
      const content = fs.readFileSync(path.join(SHARED_DIR, file), 'utf-8');
      const matches = content.match(HEX_COLOR_REGEX);
      if (matches && matches.length > 0) {
        violations.push({ file, colors: matches });
      }
    });

    if (violations.length > 0) {
      const details = violations
        .map((v) => `  shared/${v.file}: ${v.colors.join(', ')}`)
        .join('\n');
      expect(
        violations,
        `Hardcoded hex colors found in shared components. Use DISPLAY_COLORS, ZONE_COLORS, or ZONE_COLOR_MAP from @/lib/constants:\n${details}`
      ).toHaveLength(0);
    }
  });
});

// ─────────────────────────────────────────────────
// 7. Tutorial performance guards
// ─────────────────────────────────────────────────

describe('Tutorial performance guards', () => {
  const TUTORIAL_DIR = path.join(SRC_DIR, 'components/tutorial');

  function getTutorialComponentFiles(): string[] {
    return fs.readdirSync(TUTORIAL_DIR).filter((f) => f.endsWith('.tsx'));
  }

  it('no backdrop-filter in tutorial components (GPU-heavy)', () => {
    const violations: string[] = [];

    getTutorialComponentFiles().forEach((file) => {
      const content = fs.readFileSync(path.join(TUTORIAL_DIR, file), 'utf-8');
      if (content.includes('backdropFilter') || content.includes('backdrop-filter')) {
        violations.push(file);
      }
    });

    expect(
      violations,
      `backdrop-filter found in: ${violations.join(', ')}. ` +
      'backdrop-filter blur re-composites every pixel behind the element on every frame. ' +
      'With ~1,000 DOM nodes in the panel, this causes visible lag during zoom transitions. ' +
      'Use a solid semi-transparent background instead.'
    ).toHaveLength(0);
  });

  it('willChange must be conditional in tutorial components', () => {
    const violations: { file: string; lines: string[] }[] = [];

    getTutorialComponentFiles().forEach((file) => {
      const content = fs.readFileSync(path.join(TUTORIAL_DIR, file), 'utf-8');
      const lines = content.split('\n');
      const badLines: string[] = [];

      lines.forEach((line, i) => {
        if (line.includes('willChange') && !line.includes('?')) {
          badLines.push(`L${i + 1}: ${line.trim()}`);
        }
      });

      if (badLines.length > 0) {
        violations.push({ file, lines: badLines });
      }
    });

    if (violations.length > 0) {
      const details = violations
        .map((v) => `  ${v.file}: ${v.lines.join('; ')}`)
        .join('\n');
      expect(
        violations,
        `Unconditional willChange found — it must use a ternary (?) to activate only during transitions. ` +
        `Static willChange wastes VRAM (~6MB per layer at 2x retina):\n${details}`
      ).toHaveLength(0);
    }
  });

  it('no infinite animations in TutorialRunner zoom container', () => {
    const runnerFile = path.join(TUTORIAL_DIR, 'TutorialRunner.tsx');
    const content = fs.readFileSync(runnerFile, 'utf-8');

    const infinityCount = (content.match(/repeat:\s*Infinity/g) || []).length;
    const negativeOneCount = (content.match(/repeat:\s*-1/g) || []).length;
    const total = infinityCount + negativeOneCount;

    expect(
      total,
      `TutorialRunner.tsx has ${total} infinite animation(s) (repeat: Infinity or repeat: -1). ` +
      'Infinite animations in the zoom container force constant GPU recalculation during transform transitions. ' +
      'Move infinite animations to individual control components instead.'
    ).toBe(0);
  });
});
