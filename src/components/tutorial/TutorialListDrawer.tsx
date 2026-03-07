'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Tutorial } from '@/types/tutorial';
import {
  TUTORIAL_CATEGORIES,
  CATEGORY_LABELS,
  DIFFICULTY_COLORS,
} from '@/lib/constants';
import {
  getNextTutorial,
  TutorialRecommendation,
} from '@/lib/tutorialRecommendation';
import { searchTutorials } from '@/lib/assistant/search';
import { buildResponse } from '@/lib/assistant/responseBuilder';
import { resolveFollowUp } from '@/lib/assistant/followUpResolver';
import { SearchResult } from '@/types/assistant';
import CategoryFilter from '@/components/ui/CategoryFilter';

interface TutorialListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tutorials: Tutorial[];
  currentTutorialId: string;
  deviceId: string;
  deviceName: string;
}

export default function TutorialListDrawer({
  isOpen,
  onClose,
  tutorials,
  currentTutorialId,
  deviceId,
  deviceName,
}: TutorialListDrawerProps) {
  const router = useRouter();
  const currentRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResponse, setSearchResponse] = useState<string | null>(null);
  const [searchMatchIds, setSearchMatchIds] = useState<Set<string> | null>(null);
  const [lastSearchResults, setLastSearchResults] = useState<SearchResult[]>([]);

  const currentTutorial = tutorials.find((t) => t.id === currentTutorialId);
  const recommendation: TutorialRecommendation | null = currentTutorial
    ? getNextTutorial(currentTutorial, tutorials)
    : null;

  // Group tutorials by category
  const grouped = tutorials.reduce<Record<string, Tutorial[]>>((acc, t) => {
    (acc[t.category] ??= []).push(t);
    return acc;
  }, {});

  // Filter by search matches, then by selected category
  const filteredGrouped = searchMatchIds
    ? Object.fromEntries(
        Object.entries(grouped).map(([cat, tuts]) => [
          cat,
          tuts.filter((t) => searchMatchIds.has(t.id)),
        ]).filter(([, tuts]) => (tuts as Tutorial[]).length > 0)
      ) as Record<string, Tutorial[]>
    : grouped;

  const visibleCategories = selectedCategory
    ? [[selectedCategory, filteredGrouped[selectedCategory] ?? []] as const]
    : Object.entries(filteredGrouped);

  function handleSearchSubmit(query: string) {
    if (!query.trim()) return;

    const followUp = resolveFollowUp(query, lastSearchResults);
    if (followUp?.type === 'resolved') {
      const t = followUp.tutorial.tutorial;
      if (followUp.action === 'detail') {
        setSearchResponse(`**${t.title}** is ${t.difficulty === 'beginner' ? 'a beginner' : t.difficulty === 'intermediate' ? 'an intermediate' : 'an advanced'} tutorial with ${t.stepCount} steps (~${t.estimatedTime}). Tags: ${t.tags.join(', ')}.`);
      } else {
        setSearchResponse(`**${t.title}** — tap to start.`);
      }
      setSearchMatchIds(new Set([t.tutorialId]));
      setLastSearchResults([followUp.tutorial]);
      setSelectedCategory(null);
      return;
    }
    if (followUp?.type === 'clarify') {
      setSearchResponse(followUp.message);
      return;
    }

    const raw = searchTutorials(query, deviceId);
    const { text, tutorials: picked } = buildResponse(raw, query);
    setSearchResponse(text);
    setLastSearchResults(picked);
    setSearchMatchIds(picked.length > 0 ? new Set(picked.map(r => r.tutorial.tutorialId)) : null);
    setSelectedCategory(null);
  }

  function clearSearch() {
    setSearchQuery('');
    setSearchResponse(null);
    setSearchMatchIds(null);
    setLastSearchResults([]);
  }

  const scrollToCurrent = useCallback(() => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleTutorialClick = useCallback(
    (tutorial: Tutorial) => {
      if (tutorial.id === currentTutorialId) {
        onClose();
        return;
      }
      onClose();
      router.push(`/tutorial/${deviceId}/${tutorial.id}`);
    },
    [currentTutorialId, deviceId, onClose, router]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />

          {/* Drawer */}
          <motion.div
            className="relative w-full max-w-md h-full bg-[#0f0f1a] border-l border-white/10 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
              <div>
                <h2 className="text-base font-semibold text-white">Tutorials</h2>
                <p className="text-xs text-white/40 mt-0.5">
                  {tutorials.length} lessons &middot; {deviceName}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 flex items-center justify-center rounded-md text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-3 border-b border-white/10 flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearchSubmit(searchQuery);
                }}
                className="relative"
              >
                <svg
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tutorials..."
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#00aaff]/50 focus:ring-1 focus:ring-[#00aaff]/30"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </form>
              {searchResponse && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-white/60 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: searchResponse.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>'),
                  }}
                />
              )}
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Now Playing */}
              {currentTutorial && (
                <div className="px-5 py-4 border-b border-white/10">
                  <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-3">
                    Now Playing
                  </div>
                  <button
                    type="button"
                    onClick={scrollToCurrent}
                    className="w-full text-left bg-[#00aaff]/8 border border-[#00aaff]/20 rounded-xl p-4 hover:bg-[#00aaff]/12 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-medium text-[#00ccff] mb-1">
                      {currentTutorial.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            DIFFICULTY_COLORS[currentTutorial.difficulty]?.dot ?? '#888',
                        }}
                      />
                      <span className="text-xs text-white/40 capitalize">
                        {currentTutorial.difficulty}
                      </span>
                      <span className="text-xs text-white/30">
                        {currentTutorial.steps.length} steps &middot;{' '}
                        {currentTutorial.estimatedTime}
                      </span>
                      <span className="ml-auto text-[10px] text-white/30">
                        Find in list &darr;
                      </span>
                    </div>
                  </button>
                </div>
              )}

              {/* Up Next recommendation */}
              {recommendation && (
                <div className="px-5 py-4 border-b border-white/10">
                  <div className="text-[10px] font-semibold text-[#00ccff] uppercase tracking-wider mb-3">
                    Recommended
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTutorialClick(recommendation.tutorial)}
                    className="w-full text-left bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-medium text-white mb-1">
                      {recommendation.tutorial.title}
                    </div>
                    <p className="text-xs text-white/40 line-clamp-2 mb-3">
                      {recommendation.tutorial.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            DIFFICULTY_COLORS[recommendation.tutorial.difficulty]
                              ?.dot ?? '#888',
                        }}
                      />
                      <span className="text-xs text-white/40 capitalize">
                        {recommendation.tutorial.difficulty}
                      </span>
                      <span className="text-xs text-white/30">
                        {recommendation.tutorial.steps.length} steps &middot;{' '}
                        {recommendation.tutorial.estimatedTime}
                      </span>
                      <span className="ml-auto text-xs font-medium text-[#00ccff]">
                        Start &rarr;
                      </span>
                    </div>
                    <div className="text-xs text-white/30 italic mt-2">
                      {recommendation.reason}
                    </div>
                  </button>
                </div>
              )}

              {/* Category filter */}
              <div className="px-5 py-3 border-b border-white/10 flex-shrink-0">
                <CategoryFilter
                  categories={TUTORIAL_CATEGORIES}
                  selected={selectedCategory}
                  onSelect={setSelectedCategory}
                />
              </div>

              {/* Tutorial list */}
              <div className="px-5 py-3">
                {visibleCategories.map(([category, catTutorials]) => {
                  if (!catTutorials || catTutorials.length === 0) return null;
                  const label =
                    CATEGORY_LABELS[category] ?? category;
                  return (
                    <div key={category} className="mb-4">
                      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 sticky top-0 bg-[#0f0f1a] py-1 z-10">
                        {label} ({catTutorials.length})
                      </div>
                      {catTutorials.map((tutorial) => {
                        const isCurrent = tutorial.id === currentTutorialId;
                        const dotColor =
                          DIFFICULTY_COLORS[tutorial.difficulty]?.dot ?? '#888';
                        return (
                          <div
                            key={tutorial.id}
                            ref={isCurrent ? currentRef : undefined}
                          >
                            <button
                              type="button"
                              onClick={() => handleTutorialClick(tutorial)}
                              className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                                isCurrent
                                  ? 'border-l-2 border-[#00aaff] bg-[#00aaff]/8'
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: dotColor }}
                                  />
                                  <span
                                    className={`text-sm font-medium truncate ${
                                      isCurrent ? 'text-[#00ccff]' : 'text-white'
                                    }`}
                                  >
                                    {tutorial.title}
                                  </span>
                                </div>
                                <span className="text-xs text-white/40 ml-2 flex-shrink-0">
                                  {tutorial.estimatedTime}
                                </span>
                              </div>
                              <div className="text-xs text-white/30 mt-0.5 ml-3.5">
                                {tutorial.steps.length} steps
                              </div>
                              {isCurrent && (
                                <div className="text-[10px] text-[#00aaff] mt-1 ml-3.5">
                                  Currently viewing
                                </div>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
