'use client';

import { motion } from 'framer-motion';
import { Tutorial } from '@/types/tutorial';

interface TutorialCardProps {
  tutorial: Tutorial;
  onClick?: () => void;
}

const DIFFICULTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  beginner: { bg: 'rgba(16, 185, 129, 0.12)', text: '#10B981', border: 'rgba(16, 185, 129, 0.3)' },
  intermediate: { bg: 'rgba(245, 158, 11, 0.12)', text: '#F59E0B', border: 'rgba(245, 158, 11, 0.3)' },
  advanced: { bg: 'rgba(239, 68, 68, 0.12)', text: '#EF4444', border: 'rgba(239, 68, 68, 0.3)' },
};

const CATEGORY_LABELS: Record<string, string> = {
  basics: 'Basics',
  'zones-splits': 'Zones & Splits',
  'sound-design': 'Sound Design',
  effects: 'Effects',
  midi: 'MIDI',
  performance: 'Performance',
  sequencer: 'Sequencer',
  sampling: 'Sampling',
};

export default function TutorialCard({ tutorial, onClick }: TutorialCardProps) {
  const difficultyStyle = DIFFICULTY_COLORS[tutorial.difficulty] ?? DIFFICULTY_COLORS.beginner;
  const categoryLabel = CATEGORY_LABELS[tutorial.category] ?? tutorial.category;

  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 text-left transition-colors hover:border-[var(--accent)]/30"
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Title */}
      <h4 className="mb-2 text-lg font-semibold text-gray-100 transition-colors group-hover:text-[var(--accent)]">
        {tutorial.title}
      </h4>

      {/* Description */}
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-400">
        {tutorial.description}
      </p>

      {/* Badges row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Category badge */}
        <span className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-2.5 py-0.5 text-xs font-medium text-gray-300">
          {categoryLabel}
        </span>

        {/* Difficulty badge */}
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
          style={{
            background: difficultyStyle.bg,
            color: difficultyStyle.text,
            border: `1px solid ${difficultyStyle.border}`,
          }}
        >
          {tutorial.difficulty}
        </span>

        {/* Estimated time */}
        <span className="ml-auto flex items-center gap-1 text-xs text-gray-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {tutorial.estimatedTime}
        </span>
      </div>

      {/* Step count */}
      <div className="mt-3 text-xs text-gray-500">
        {tutorial.steps.length} {tutorial.steps.length === 1 ? 'step' : 'steps'}
      </div>
    </motion.button>
  );
}
