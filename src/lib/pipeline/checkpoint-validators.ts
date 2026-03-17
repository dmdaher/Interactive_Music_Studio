/**
 * Checkpoint Validators — Mechanical post-inspection for agent output.
 *
 * These are the "Hard Compiler" for agent behavior. Instead of hoping
 * agents follow their SOULs' self-check instructions, the pipeline runner
 * calls these validators after every agent invocation.
 *
 * Returns { valid, errors, score } — errors are specific enough to send
 * back to the agent as a "Compiler Error" for retry.
 */

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate a sieve bucket file: must have table structure, pages within range, no interpretation.
 */
export function validateSieveBucket(content: string, pageRange: [number, number]): ValidationResult {
  const errors: string[] = [];

  // Must have table-like structure (pipe-delimited rows or CSV-like rows)
  const hasTable = content.includes('|') && content.split('\n').filter((l) => l.includes('|')).length >= 3;
  const hasCsv = content.split('\n').filter((l) => l.includes(',')).length >= 5;
  if (!hasTable && !hasCsv) {
    errors.push('No table structure found (expected pipe-delimited or CSV rows)');
  }

  // Check that referenced pages are within the expected range
  const pageRefs = content.match(/\bp(?:age)?[.\s]*(\d+)/gi) ?? [];
  for (const ref of pageRefs) {
    const pageNum = parseInt(ref.replace(/\D/g, ''), 10);
    if (!isNaN(pageNum) && (pageNum < pageRange[0] || pageNum > pageRange[1])) {
      errors.push(`Page reference ${pageNum} outside expected range ${pageRange[0]}-${pageRange[1]}`);
      break; // One violation is enough
    }
  }

  // Must NOT contain interpretation markers (these belong in Assembly, not Sieve)
  const interpretationMarkers = [
    /\btutorial\b/i,
    /\bcurriculum\b/i,
    /\bbatch\b/i,
    /\bprerequisite\b/i,
    /\blearning\s+objective\b/i,
  ];
  for (const marker of interpretationMarkers) {
    if (marker.test(content)) {
      errors.push(`Contains interpretation marker "${marker.source}" — Sieve buckets must be raw extraction only`);
      break;
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate a verified bucket file: must have VERIFIED marker.
 */
export function validateSieveVerified(content: string): ValidationResult {
  const errors: string[] = [];

  if (!/VERIFIED/i.test(content)) {
    errors.push('Missing VERIFIED marker');
  }

  // Should still have table structure from the original bucket
  const hasTable = content.includes('|') && content.split('\n').filter((l) => l.includes('|')).length >= 3;
  const hasCsv = content.split('\n').filter((l) => l.includes(',')).length >= 5;
  if (!hasTable && !hasCsv) {
    errors.push('No table structure found — verified file should retain original extraction');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate an anchored bucket file: must have cross-reference sections.
 */
export function validateSieveAnchored(content: string): ValidationResult {
  const errors: string[] = [];

  const requiredSections = ['PANEL-ONLY', 'MANUAL-ONLY', 'NAME MISMATCH'];
  const foundSections = requiredSections.filter((s) =>
    content.toUpperCase().includes(s)
  );

  if (foundSections.length === 0) {
    errors.push(`Missing all cross-reference sections: ${requiredSections.join(', ')}`);
  } else if (foundSections.length < requiredSections.length) {
    const missing = requiredSections.filter((s) => !content.toUpperCase().includes(s));
    errors.push(`Missing cross-reference sections: ${missing.join(', ')}`);
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate Pass 1 — Feature Inventory: must have inventory and page coverage.
 */
export function validatePassInventory(content: string): ValidationResult {
  const errors: string[] = [];

  if (!/feature\s+inventory/i.test(content)) {
    errors.push('Missing "Feature Inventory" section');
  }

  if (!/page\s+coverage/i.test(content)) {
    errors.push('Missing "Page Coverage Map" section');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate Pass 2 — Relationships: must have prerequisite/dependency sections.
 */
export function validatePassRelationships(content: string): ValidationResult {
  const errors: string[] = [];

  const hasPrerequisites = /prerequisite/i.test(content);
  const hasDependencies = /dependenc/i.test(content);

  if (!hasPrerequisites && !hasDependencies) {
    errors.push('Missing prerequisite or dependency sections');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate Pass 3 — Curriculum: must have TUTORIAL blocks and DAG.
 */
export function validatePassCurriculum(content: string): ValidationResult {
  const errors: string[] = [];

  const tutorialBlockCount = (content.match(/TUTORIAL/gi) ?? []).length;
  if (tutorialBlockCount < 2) {
    errors.push(`Found ${tutorialBlockCount} TUTORIAL block(s), expected at least 2`);
  }

  if (!/DAG|dependency\s+graph|dependency\s+tree/i.test(content)) {
    errors.push('Missing DAG or dependency graph');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate Pass 4 — Batches: must have BATCH blocks and dependency chain.
 */
export function validatePassBatches(content: string): ValidationResult {
  const errors: string[] = [];

  const batchBlockCount = (content.match(/BATCH/gi) ?? []).length;
  if (batchBlockCount < 2) {
    errors.push(`Found ${batchBlockCount} BATCH block(s), expected at least 2`);
  }

  if (!/dependenc.*chain|batch.*order|execution.*order/i.test(content)) {
    errors.push('Missing dependency chain or batch ordering');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate the auditor's independent checklist: must have per-chapter summary,
 * must NOT reference extractor output files.
 */
export function validateIndependentChecklist(content: string): ValidationResult {
  const errors: string[] = [];

  // Must have chapter-level structure
  if (!/chapter|section\s+\d/i.test(content)) {
    errors.push('Missing chapter or section-level summary');
  }

  // Must NOT reference extractor output (independence check)
  const extractorRefs = [
    /sieve\/bucket/i,
    /pass-\d-/i,
    /manual-extractor/i,
    /extractor.*output/i,
    /extractor.*checkpoint/i,
  ];
  for (const ref of extractorRefs) {
    if (ref.test(content)) {
      errors.push(`References extractor output ("${ref.source}") — independent checklist must be derived solely from the manual`);
      break;
    }
  }

  return { valid: errors.length === 0, errors };
}

// ─── Phase 0: Panel Pipeline Validators ─────────────────────────────────────

/**
 * Pre-inspection: verify inputs exist before spawning an agent.
 */
export function preInspectDiagramParser(opts: {
  manualPaths: string[];
  photoPaths: string[];
}): ValidationResult {
  const errors: string[] = [];

  if (opts.manualPaths.length === 0) {
    errors.push('No manual PDFs available — parser needs front-panel diagrams');
  }

  if (opts.photoPaths.length === 0) {
    errors.push('No hardware photos found — parser requires photos as PRIMARY input for centroid extraction');
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Post-inspection: validate Diagram Parser output.
 * Checks for structured spatial-blueprint JSON in the checkpoint OR a separate JSON file.
 * The parser may write structured data to spatial-blueprint.json instead of embedding in the checkpoint.
 */
export function validateDiagramParserOutput(content: string, blueprintJson?: string): ValidationResult & { score: number } {
  // If a separate blueprint JSON file exists, validate that instead of/alongside the checkpoint
  const checkContent = blueprintJson ? `${content}\n\`\`\`json\n${blueprintJson}\n\`\`\`` : content;
  const errors: string[] = [];
  let score = 10.0;

  // 1. Must contain spatial-blueprint JSON (not just prose/tables)
  const hasJsonBlocks = (checkContent.match(/```json/g) ?? []).length;
  const hasCentroids = checkContent.includes('"centroid"');
  const hasTopology = checkContent.includes('"topology"');
  const hasBoundingBox = checkContent.includes('"boundingBox"');

  if (hasJsonBlocks === 0) {
    errors.push('No JSON code blocks found — output is prose-only. Parser must output spatial-blueprint JSON per section.');
    score -= 3.0;
  }

  if (!hasCentroids) {
    errors.push('No centroid coordinates found. Every control must have { "x": N.NN, "y": N.NN }.');
    score -= 2.0;
  }

  if (!hasTopology) {
    errors.push('No topology classifications found. Every section must have a "topology" field.');
    score -= 1.0;
  }

  if (!hasBoundingBox) {
    errors.push('No bounding boxes found. Every control and section must have a "boundingBox".');
    score -= 1.0;
  }

  // 2. Check for containerZones in multi-zone topologies
  const multiZoneTopologies = ['cluster-above-anchor', 'cluster-below-anchor', 'anchor-layout', 'slider-anchored'];
  const hasMultiZone = multiZoneTopologies.some(t => checkContent.includes(t));
  const hasContainerZones = checkContent.includes('"containerZones"');

  if (hasMultiZone && !hasContainerZones) {
    errors.push('Multi-zone topology detected but no containerZones field. Parser must assign control indices to zones.');
    score -= 2.0;
  }

  // 3. Check for neighbor relationships
  const hasNeighbors = checkContent.includes('"neighbors"') || checkContent.includes('"north"');
  if (!hasNeighbors) {
    errors.push('No neighbor relationships found. Every control must have cardinal neighbor references.');
    score -= 1.0;
  }

  // 4. Check for aspect ratios
  const hasAspectRatio = checkContent.includes('"aspectRatio"');
  if (!hasAspectRatio) {
    errors.push('No aspect ratios found. Anchor elements and non-square controls must have W:H ratios.');
    score -= 1.0;
  }

  // 5. Verify centroid precision (2 decimal places)
  const centroidMatches = checkContent.match(/"x":\s*([\d.]+)/g) ?? [];
  const lowPrecision = centroidMatches.filter(m => {
    const val = m.match(/([\d.]+)/)?.[1] ?? '';
    const decimals = val.includes('.') ? val.split('.')[1].length : 0;
    return decimals < 2;
  });
  if (centroidMatches.length > 0 && lowPrecision.length > centroidMatches.length * 0.3) {
    errors.push(`${lowPrecision.length}/${centroidMatches.length} centroids have less than 2 decimal precision.`);
    score -= 0.5;
  }

  score = Math.max(0, score);
  return { valid: errors.length === 0, errors, score };
}

/**
 * Post-inspection: validate Gatekeeper manifest JSON.
 * Checks the actual manifest file, not the checkpoint prose.
 */
export function validateGatekeeperManifest(manifestJson: string): ValidationResult & { score: number } {
  const errors: string[] = [];
  let score = 10.0;

  // 1. Parse JSON
  let manifest: Record<string, unknown>;
  try {
    manifest = JSON.parse(manifestJson);
  } catch (e) {
    return { valid: false, errors: [`Manifest JSON is not parseable: ${(e as Error).message}`], score: 0 };
  }

  // 2. Required top-level fields
  const requiredFields = ['deviceId', 'deviceName', 'manufacturer', 'layoutType', 'sections', 'controls'];
  for (const field of requiredFields) {
    if (!(field in manifest)) {
      errors.push(`Missing required field: ${field}`);
      score -= 1.0;
    }
  }

  const sections = (manifest.sections ?? []) as Array<Record<string, unknown>>;
  const controls = (manifest.controls ?? []) as Array<Record<string, unknown>>;

  // 3. Sections must have archetypes from known library
  const knownArchetypes = new Set([
    'grid-NxM', 'single-column', 'single-row', 'anchor-layout',
    'cluster-above-anchor', 'cluster-below-anchor', 'dual-column', 'stacked-rows',
  ]);
  for (const s of sections) {
    if (!s.archetype) {
      errors.push(`Section "${s.id}" missing archetype`);
      score -= 1.0;
    } else if (!knownArchetypes.has(s.archetype as string)) {
      errors.push(`Section "${s.id}" has unknown archetype "${s.archetype}". Valid: ${[...knownArchetypes].join(', ')}`);
      score -= 1.0;
    }
  }

  // 4. Multi-container archetypes must have containerAssignment
  const needsContainers = new Set(['cluster-above-anchor', 'cluster-below-anchor', 'anchor-layout', 'dual-column']);
  const missingSections: string[] = [];
  for (const s of sections) {
    if (needsContainers.has(s.archetype as string) && !s.containerAssignment) {
      missingSections.push(s.id as string);
    }
  }
  if (missingSections.length > 0) {
    errors.push(`Missing containerAssignment for: ${missingSections.join(', ')}. Gatekeeper must specify which controls go in each container.`);
    score -= 2.0;
  }

  // 5. All controls must be assigned to a section
  const assignedControls = new Set(sections.flatMap(s => (s.controls ?? []) as string[]));
  const orphans = controls.filter(c => !assignedControls.has(c.id as string));
  if (orphans.length > 0) {
    errors.push(`${orphans.length} orphaned controls not assigned to any section: ${orphans.slice(0, 5).map(c => c.id).join(', ')}`);
    score -= 1.0;
  }

  // 6. Controls must have spatialNeighbors
  const missingNeighbors = controls.filter(c => !c.spatialNeighbors);
  if (missingNeighbors.length > 0) {
    errors.push(`${missingNeighbors.length} controls missing spatialNeighbors`);
    score -= 0.5;
  }

  // 7. Density targets
  if (!manifest.densityTargets) {
    errors.push('Missing densityTargets');
    score -= 0.5;
  }

  score = Math.max(0, score);
  return { valid: errors.length === 0, errors, score };
}

/**
 * Pre-inspection for Gatekeeper: verify both data streams are available.
 */
export function preInspectGatekeeper(opts: {
  parserCheckpointExists: boolean;
  parserScore: number | null;
  manualPaths: string[];
}): ValidationResult {
  const errors: string[] = [];

  if (!opts.parserCheckpointExists) {
    errors.push('Diagram Parser checkpoint not found — Gatekeeper requires Parser output');
  }

  if (opts.parserScore !== null && opts.parserScore < 9.0) {
    errors.push(`Diagram Parser score (${opts.parserScore}) below 9.0 — Gatekeeper should not proceed with low-quality geometry`);
  }

  if (opts.manualPaths.length === 0) {
    errors.push('No manual PDFs available — Gatekeeper requires manual text');
  }

  return { valid: errors.length === 0, errors };
}
