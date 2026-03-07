'use client';

import Link from 'next/link';
import { TutorialSummary } from '@/types/assistant';
import { CATEGORY_LABELS } from '@/lib/constants';

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  beginner: { bg: 'rgba(16, 185, 129, 0.12)', text: '#10B981', border: 'rgba(16, 185, 129, 0.3)' },
  intermediate: { bg: 'rgba(245, 158, 11, 0.12)', text: '#F59E0B', border: 'rgba(245, 158, 11, 0.3)' },
  advanced: { bg: 'rgba(239, 68, 68, 0.12)', text: '#EF4444', border: 'rgba(239, 68, 68, 0.3)' },
};

interface TutorialCardCompactProps {
  tutorial: TutorialSummary;
  matchReasons?: string[];
}

export default function TutorialCardCompact({ tutorial, matchReasons }: TutorialCardCompactProps) {
  const difficultyStyle = DIFFICULTY_COLORS[tutorial.difficulty] ?? DIFFICULTY_COLORS.beginner;
  const categoryLabel = CATEGORY_LABELS[tutorial.category] ?? tutorial.category;

  return (
    <div className="rounded-lg border border-white/10 bg-[var(--surface)] p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-medium text-white truncate">{tutorial.title}</h4>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60">
              {categoryLabel}
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium capitalize"
              style={{
                background: difficultyStyle.bg,
                color: difficultyStyle.text,
                border: `1px solid ${difficultyStyle.border}`,
              }}
            >
              {tutorial.difficulty}
            </span>
            <span className="text-[10px] text-white/40">
              {tutorial.stepCount} steps &middot; {tutorial.estimatedTime}
            </span>
          </div>
          {matchReasons && matchReasons.length > 0 && (
            <p className="mt-1.5 text-[10px] text-white/30 truncate">
              {matchReasons[0]}
            </p>
          )}
        </div>
        <Link
          href={`/tutorial/${tutorial.deviceId}/${tutorial.tutorialId}`}
          className="shrink-0 rounded-md bg-[#00aaff]/15 px-3 py-1.5 text-xs font-medium text-[#00ccff] hover:bg-[#00aaff]/25 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Start
        </Link>
      </div>
    </div>
  );
}
