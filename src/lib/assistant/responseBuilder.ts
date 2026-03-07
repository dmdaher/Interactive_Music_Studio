import { SearchResult } from '@/types/assistant';

const MIN_SCORE = 0.08;

function pickResults(results: SearchResult[]): SearchResult[] {
  const viable = results.filter(r => r.score >= MIN_SCORE);
  if (viable.length === 0) return [];

  const top = viable[0].score;

  // Clear winner: top score > 0.4 and at least 1.5x the second
  if (top > 0.4 && (viable.length === 1 || top / viable[1].score > 1.5)) {
    return [viable[0]];
  }

  // Top 2 within 30% of each other
  if (viable.length >= 2 && viable[1].score >= top * 0.7) {
    // Check if a 3rd is also close (within 40%)
    if (viable.length >= 3 && viable[2].score >= top * 0.6) {
      return viable.slice(0, 3);
    }
    return viable.slice(0, 2);
  }

  // Default: just the top result
  return [viable[0]];
}

function formatDifficulty(d: string): string {
  return d === 'beginner' ? 'a beginner' : d === 'intermediate' ? 'an intermediate' : 'an advanced';
}

function buildText(picked: SearchResult[], query: string): string {
  if (picked.length === 0) {
    return "I don't have a specific tutorial for that yet. Try asking about effects, zones, sampling, sequencer, or MIDI — or browse the tutorial list on the home page.";
  }

  const t0 = picked[0].tutorial;

  if (picked.length === 1) {
    return `**${t0.title}** covers exactly what you need. It's ${formatDifficulty(t0.difficulty)} tutorial with ${t0.stepCount} steps (~${t0.estimatedTime}).`;
  }

  const t1 = picked[1].tutorial;

  if (picked.length === 2) {
    return `I'd start with **${t0.title}** — it's ${formatDifficulty(t0.difficulty)} tutorial (~${t0.estimatedTime}). **${t1.title}** is also relevant if you want to go deeper.`;
  }

  // 3 results
  const t2 = picked[2].tutorial;
  return `A few tutorials cover this area. **${t0.title}** is the best starting point. You might also check **${t1.title}** or **${t2.title}** depending on what you're after.`;
}

export function buildResponse(
  results: SearchResult[],
  query: string,
): { text: string; tutorials: SearchResult[] } {
  const picked = pickResults(results);
  const text = buildText(picked, query);
  return { text, tutorials: picked };
}
