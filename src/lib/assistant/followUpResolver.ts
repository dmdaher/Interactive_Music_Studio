import { SearchResult } from '@/types/assistant';

export type FollowUpResult =
  | { type: 'resolved'; tutorial: SearchResult; action: 'navigate' | 'detail' }
  | { type: 'clarify'; message: string }
  | null;

const ORDINAL_PATTERNS: [RegExp, number][] = [
  [/\b(the\s+)?(first|1st)\s*(one|tutorial|option)?\b/i, 0],
  [/^1$/i, 0],
  [/\b(the\s+)?(second|2nd)\s*(one|tutorial|option)?\b/i, 1],
  [/^2$/i, 1],
  [/\b(the\s+)?(third|3rd)\s*(one|tutorial|option)?\b/i, 2],
  [/^3$/i, 2],
];

const SINGULAR_REF = /\b(that\s+one|start\s+it|start\s+that|open\s+it|open\s+that|let'?s?\s+do\s+it|go|go\s+with\s+that|yes|yeah|yep|sure)\b/i;
const WHICH_ONE = /\b(which\s+one)\b/i;
const DETAIL_REF = /\b(tell\s+me\s+more|more\s+about\s+it|what'?s?\s+in\s+it|more\s+details?|more\s+info)\b/i;

export function resolveFollowUp(query: string, lastResults: SearchResult[]): FollowUpResult {
  const trimmed = query.trim();
  if (!trimmed || lastResults.length === 0) return null;

  // Check ordinal references ("the first one", "2", etc.)
  for (const [pattern, index] of ORDINAL_PATTERNS) {
    if (pattern.test(trimmed) && index < lastResults.length) {
      return { type: 'resolved', tutorial: lastResults[index], action: 'navigate' };
    }
  }

  // Check detail requests ("tell me more", "more about it")
  if (DETAIL_REF.test(trimmed)) {
    return { type: 'resolved', tutorial: lastResults[0], action: 'detail' };
  }

  // Check singular references ("that one", "start it", "go")
  if (SINGULAR_REF.test(trimmed)) {
    return { type: 'resolved', tutorial: lastResults[0], action: 'navigate' };
  }

  // Check "which one" — clarify if ambiguous
  if (WHICH_ONE.test(trimmed)) {
    if (lastResults.length === 1) {
      return { type: 'resolved', tutorial: lastResults[0], action: 'navigate' };
    }
    return {
      type: 'clarify',
      message: "Which one? You can say 'the first one' or 'the second one'.",
    };
  }

  return null;
}
