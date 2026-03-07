import { TutorialSummary, SearchResult } from '@/types/assistant';
import { getTutorialIndex } from './tutorialIndex';

// Stop words to ignore during keyword matching
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'to', 'of', 'in', 'for', 'on', 'with',
  'at', 'by', 'from', 'as', 'into', 'through', 'during', 'before', 'after',
  'and', 'but', 'or', 'nor', 'not', 'so', 'yet', 'both', 'either', 'neither',
  'it', 'its', 'my', 'your', 'his', 'her', 'our', 'their', 'this', 'that',
  'i', 'me', 'we', 'you', 'he', 'she', 'they', 'them', 'what', 'which',
  'who', 'whom', 'how', 'when', 'where', 'why',
]);

/** Naive suffix-stripping stemmer — good enough for search matching */
function stem(word: string): string {
  if (word.length <= 4) return word;
  if (word.endsWith('ing')) return word.slice(0, -3);
  if (word.endsWith('tion')) return word.slice(0, -4);
  if (word.endsWith('ed') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('ly') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('er') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('es') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) return word.slice(0, -1);
  if (word.endsWith('e') && word.length > 4) return word.slice(0, -1);
  return word;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w))
    .map(stem);
}

function scoreTitleMatch(tokens: string[], summary: TutorialSummary, rawQuery: string): { score: number; reasons: string[] } {
  const titleLower = summary.title.toLowerCase();
  const descLower = summary.description.toLowerCase();
  const reasons: string[] = [];
  let score = 0;

  // Check if the raw (unstemmed) query phrase appears in title/description
  const rawLower = rawQuery.toLowerCase().trim();
  if (rawLower && titleLower.includes(rawLower)) {
    score = 1.0;
    reasons.push(`Title contains "${rawLower}"`);
  } else if (rawLower && descLower.includes(rawLower)) {
    score = 0.7;
    reasons.push(`Description contains "${rawLower}"`);
  } else {
    // Check individual stemmed token matches in title + description
    const titleTokens = tokenize(summary.title);
    const descTokens = tokenize(summary.description);
    const combinedTokens = new Set([...titleTokens, ...descTokens]);
    const matchCount = tokens.filter(t => combinedTokens.has(t)).length;
    if (matchCount > 0) {
      // Weight by where matches occur: title matches worth more
      const titleMatchCount = tokens.filter(t => titleTokens.includes(t)).length;
      const descOnlyCount = matchCount - titleMatchCount;
      score = ((titleMatchCount * 0.6 + descOnlyCount * 0.4) / tokens.length);
      if (titleMatchCount > 0) {
        reasons.push(`Title matches ${titleMatchCount}/${tokens.length} keywords`);
      }
      if (descOnlyCount > 0) {
        reasons.push(`Description matches ${descOnlyCount}/${tokens.length} keywords`);
      }
    }
  }

  return { score, reasons };
}

function scoreTagMatch(tokens: string[], summary: TutorialSummary): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  // Stem tags for fair comparison with stemmed query tokens
  const stemmedTags = summary.tags.map(tag => ({ original: tag, stemmed: tokenize(tag) }));
  const matchedTags = stemmedTags.filter(({ stemmed }) =>
    tokens.some(t => stemmed.some(st => st === t || st.includes(t) || t.includes(st)))
  );
  // Count unique query tokens matched (not total tag matches) to avoid inflated scores
  const matchedQueryTokens = new Set(tokens.filter(t =>
    matchedTags.some(({ stemmed }) => stemmed.some(st => st === t || st.includes(t) || t.includes(st)))
  ));
  const score = matchedQueryTokens.size > 0 ? Math.min(matchedQueryTokens.size / tokens.length, 1.0) : 0;
  if (matchedTags.length > 0) {
    reasons.push(`Tags: ${matchedTags.map(t => t.original).join(', ')}`);
  }
  return { score, reasons };
}

function scoreCategoryMatch(tokens: string[], summary: TutorialSummary): { score: number; reasons: string[] } {
  // Keywords are pre-stemmed to match stemmed query tokens
  const categoryKeywords: Record<string, string[]> = {
    basics: ['basic', 'beginn', 'start', 'get', 'overview', 'panel', 'select', 'save'],
    'zones-splits': ['zone', 'split', 'layer', 'keyboard', 'key', 'range'],
    'sound-design': ['tone', 'sound', 'edit', 'oscillat', 'filt', 'synth', 'piano', 'organ', 'drum'],
    effects: ['effect', 'mfx', 'ifx', 'reverb', 'chorus', 'delay', 'vocod', 'mast'],
    midi: ['midi', 'daw', 'controll', 'cc', 'sync', 'clock', 'usb'],
    performance: ['arpeggio', 'chord', 'rhythm', 'pattern', 'motional', 'pad', 'chain', 'scene', 'remain'],
    sequencer: ['sequenc', 'pattern', 'record', 'piano', 'roll', 'song', 'step', 'tr-rec'],
    sampling: ['sampl', 'wave', 'pad', 'multisampl', 'import', 'audio', 'record'],
  };

  const reasons: string[] = [];
  const keywords = categoryKeywords[summary.category] || [];
  const matchCount = tokens.filter(t => keywords.includes(t)).length;
  const score = matchCount > 0 ? Math.min(matchCount / tokens.length, 1.0) : 0;
  if (matchCount > 0) {
    reasons.push(`Category: ${summary.category}`);
  }
  return { score, reasons };
}

function scoreControlMatch(tokens: string[], summary: TutorialSummary): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  const matchedControls = summary.controlsReferenced.filter(ctrl =>
    tokens.some(t => ctrl.includes(t) || t.includes(ctrl))
  );
  const score = matchedControls.length > 0 ? Math.min(matchedControls.length * 0.3, 1.0) : 0;
  if (matchedControls.length > 0) {
    reasons.push(`Controls: ${matchedControls.slice(0, 3).join(', ')}`);
  }
  return { score, reasons };
}

function scoreKeywordTfIdf(tokens: string[], summary: TutorialSummary): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  const text = summary.searchableText;
  const textLength = text.split(/\s+/).length;

  let totalScore = 0;
  let matchedTokens = 0;

  for (const token of tokens) {
    // Count occurrences
    const regex = new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
    const matches = text.match(regex);
    if (matches && matches.length > 0) {
      // TF: term frequency normalized by document length
      const tf = matches.length / textLength;
      totalScore += Math.min(tf * 50, 1.0); // cap individual term score
      matchedTokens++;
    }
  }

  const score = tokens.length > 0 ? Math.min((totalScore / tokens.length) * (matchedTokens / tokens.length), 1.0) : 0;
  if (matchedTokens > 0) {
    reasons.push(`${matchedTokens}/${tokens.length} keywords found in content`);
  }
  return { score, reasons };
}

export function searchTutorials(query: string, deviceId: string): SearchResult[] {
  const index = getTutorialIndex(deviceId);
  const tokens = tokenize(query);

  if (tokens.length === 0) return [];

  const weights = {
    title: 0.35,
    tag: 0.25,
    category: 0.10,
    control: 0.10,
    keyword: 0.20,
  };

  const scored: SearchResult[] = [];

  for (const summary of index) {
    const titleResult = scoreTitleMatch(tokens, summary, query);
    const tagResult = scoreTagMatch(tokens, summary);
    const categoryResult = scoreCategoryMatch(tokens, summary);
    const controlResult = scoreControlMatch(tokens, summary);
    const keywordResult = scoreKeywordTfIdf(tokens, summary);

    const totalScore =
      titleResult.score * weights.title +
      tagResult.score * weights.tag +
      categoryResult.score * weights.category +
      controlResult.score * weights.control +
      keywordResult.score * weights.keyword;

    if (totalScore >= 0.05) {
      const allReasons = [
        ...titleResult.reasons,
        ...tagResult.reasons,
        ...categoryResult.reasons,
        ...controlResult.reasons,
        ...keywordResult.reasons,
      ];

      scored.push({
        tutorial: summary,
        score: Math.min(totalScore, 1.0),
        matchReasons: allReasons,
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5);
}
