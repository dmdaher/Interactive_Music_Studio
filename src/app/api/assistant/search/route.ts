import { NextRequest, NextResponse } from 'next/server';
import { searchTutorials } from '@/lib/assistant/search';

// Rate limit: 30 requests per minute per IP
const recentSearches = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = recentSearches.get(ip) ?? [];
  const recent = timestamps.filter(t => now - t < 60_000);
  if (recent.length >= 30) return true;
  recent.push(now);
  recentSearches.set(ip, recent);
  // Clean old entries
  if (recentSearches.size > 500) {
    for (const [key, times] of recentSearches) {
      const valid = times.filter(t => now - t < 60_000);
      if (valid.length === 0) recentSearches.delete(key);
      else recentSearches.set(key, valid);
    }
  }
  return false;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim();
  const deviceId = searchParams.get('device') || 'fantom-08';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  if (query.length > 200) {
    return NextResponse.json({ error: 'Query too long' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const results = searchTutorials(query, deviceId);
  return NextResponse.json({ results });
}
