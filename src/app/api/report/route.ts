import { NextRequest, NextResponse } from 'next/server';

const CATEGORY_LABELS: Record<string, string> = {
  'wrong-info': 'Wrong information',
  'missing-step': 'Missing step',
  'confusing': 'Confusing instruction',
  'display-bug': 'Display bug',
  'other': 'Other',
};

// Basic in-memory rate limiting: 1 report per IP per 30 seconds
const recentReports = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = recentReports.get(ip);
  if (last && now - last < 30_000) return true;
  recentReports.set(ip, now);
  // Clean old entries periodically
  if (recentReports.size > 1000) {
    for (const [key, time] of recentReports) {
      if (now - time > 60_000) recentReports.delete(key);
    }
  }
  return false;
}

export async function POST(request: NextRequest) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;

  if (!token || !repo) {
    return NextResponse.json(
      { error: 'Report feature is not configured.' },
      { status: 503 }
    );
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Please wait before submitting another report.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { scope, issueCategory, details, email, tutorialTitle, tutorialId, deviceId, tutorialCategory, difficulty, currentStepIndex, currentStepTitle, totalSteps } = body;

  if (!scope || !issueCategory || !tutorialId || !deviceId) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const categoryLabel = CATEGORY_LABELS[issueCategory] || issueCategory;
  const scopeLabel = scope === 'step' ? `Step ${(currentStepIndex ?? 0) + 1}/${totalSteps}` : 'Whole tutorial';

  const title = `[Report] ${tutorialTitle} — ${categoryLabel}`;

  const issueBody = [
    `## Tutorial Report`,
    '',
    '| Field | Value |',
    '|-------|-------|',
    `| **Device** | ${deviceId} |`,
    `| **Tutorial** | ${tutorialTitle} (\`${tutorialId}\`) |`,
    `| **Category** | ${tutorialCategory} |`,
    `| **Difficulty** | ${difficulty} |`,
    `| **Scope** | ${scopeLabel} |`,
    scope === 'step' ? `| **Step** | #${(currentStepIndex ?? 0) + 1}: ${currentStepTitle || 'N/A'} |` : null,
    `| **Issue Type** | ${categoryLabel} |`,
    email ? `| **Contact** | ${email} |` : null,
    '',
    details ? `## Description\n\n${details}` : '',
    '',
    '---',
    '*Submitted via Ask Miyagi report form*',
  ].filter(Boolean).join('\n');

  const labels = ['user-report', issueCategory];

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ title, body: issueBody, labels }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('GitHub API error:', res.status, errText);
      return NextResponse.json({ error: 'Failed to create report.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('GitHub API request failed:', err);
    return NextResponse.json({ error: 'Failed to create report.' }, { status: 502 });
  }
}
