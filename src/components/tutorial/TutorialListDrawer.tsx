'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Tutorial } from '@/types/tutorial';
import { GlossaryTerm, GlossaryCategory } from '@/types/glossary';
import {
  TUTORIAL_CATEGORIES,
  CATEGORY_LABELS,
  DIFFICULTY_COLORS,
} from '@/lib/constants';
import {
  getNextTutorial,
  TutorialRecommendation,
} from '@/lib/tutorialRecommendation';
import CategoryFilter from '@/components/ui/CategoryFilter';

type DrawerTab = 'tutorials' | 'glossary';

const GLOSSARY_CATEGORY_LABELS: Record<GlossaryCategory, string> = {
  core: 'Core Concepts',
  controls: 'Controls',
  effects: 'Effects & Sound Design',
  workflow: 'Workflow & Features',
};

const GLOSSARY_CATEGORY_ORDER: GlossaryCategory[] = [
  'core',
  'controls',
  'effects',
  'workflow',
];

interface TutorialListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tutorials: Tutorial[];
  currentTutorialId: string;
  deviceId: string;
  deviceName: string;
  glossary?: GlossaryTerm[];
}

export default function TutorialListDrawer({
  isOpen,
  onClose,
  tutorials,
  currentTutorialId,
  deviceId,
  deviceName,
  glossary = [],
}: TutorialListDrawerProps) {
  const router = useRouter();
  const currentRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DrawerTab>('tutorials');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [collapsedTutorialCats, setCollapsedTutorialCats] = useState<Set<string>>(new Set());
  const [collapsedGlossaryCats, setCollapsedGlossaryCats] = useState<Set<string>>(new Set());
  const termRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const glossaryScrollRef = useRef<HTMLDivElement>(null);

  const currentTutorial = tutorials.find((t) => t.id === currentTutorialId);
  const recommendation: TutorialRecommendation | null = currentTutorial
    ? getNextTutorial(currentTutorial, tutorials)
    : null;

  // Group tutorials by category
  const grouped = tutorials.reduce<Record<string, Tutorial[]>>((acc, t) => {
    (acc[t.category] ??= []).push(t);
    return acc;
  }, {});

  // Filter by selected category
  const visibleCategories = selectedCategory
    ? [[selectedCategory, grouped[selectedCategory] ?? []] as const]
    : Object.entries(grouped);

  // Reset tab + search when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setActiveTab('tutorials');
      setGlossarySearch('');
    }
  }, [isOpen]);

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

  // Glossary: filter terms by search
  const filteredGlossary = glossarySearch.trim()
    ? glossary.filter(
        (t) =>
          t.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
          t.definition.toLowerCase().includes(glossarySearch.toLowerCase())
      )
    : glossary;

  // Glossary: group by category (only when not searching)
  const glossaryByCategory = GLOSSARY_CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: GLOSSARY_CATEGORY_LABELS[cat],
    terms: filteredGlossary.filter((t) => t.category === cat),
  })).filter((g) => g.terms.length > 0);

  const handleRelatedTermClick = useCallback((termName: string) => {
    setGlossarySearch('');
    // Small delay to let search clear and re-render
    requestAnimationFrame(() => {
      const el = termRefs.current[termName];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Brief highlight flash
        el.classList.add('bg-[#00aaff]/10');
        setTimeout(() => el.classList.remove('bg-[#00aaff]/10'), 1500);
      }
    });
  }, []);

  const toggleTutorialCat = useCallback((cat: string) => {
    setCollapsedTutorialCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  }, []);

  const toggleGlossaryCat = useCallback((cat: string) => {
    setCollapsedGlossaryCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  }, []);

  const tutorialCategoryKeys = visibleCategories.map(([cat]) => cat as string);
  const glossaryCategoryKeys = glossaryByCategory.map((g) => g.category);

  const allTutorialCatsCollapsed = tutorialCategoryKeys.length > 0 && tutorialCategoryKeys.every((k) => collapsedTutorialCats.has(k));
  const allGlossaryCatsCollapsed = glossaryCategoryKeys.length > 0 && glossaryCategoryKeys.every((k) => collapsedGlossaryCats.has(k));

  const subtitle =
    activeTab === 'tutorials'
      ? `${tutorials.length} lessons`
      : `${glossary.length} terms`;

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
                <h2 className="text-base font-semibold text-white">
                  Tutorials & Glossary
                </h2>
                <p className="text-xs text-white/40 mt-0.5">
                  {subtitle} &middot; {deviceName}
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

            {/* Tab toggle */}
            <div className="flex gap-2 px-5 py-3 border-b border-white/10 flex-shrink-0">
              {(['tutorials', 'glossary'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer capitalize ${
                    activeTab === tab
                      ? 'bg-[#00aaff]/15 text-[#00ccff] border-[#00aaff]/30'
                      : 'text-white/50 border-white/10 hover:text-white/70 hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto" ref={glossaryScrollRef}>
              {activeTab === 'tutorials' ? (
                /* ── Tutorials tab ── */
                <>
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
                    {/* Expand / Collapse all */}
                    {visibleCategories.length > 1 && (
                      <div className="flex justify-end mb-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (allTutorialCatsCollapsed) {
                              setCollapsedTutorialCats(new Set());
                            } else {
                              setCollapsedTutorialCats(new Set(tutorialCategoryKeys));
                            }
                          }}
                          className="text-[10px] text-white/30 hover:text-white/50 transition-colors cursor-pointer"
                        >
                          {allTutorialCatsCollapsed ? 'Expand all' : 'Collapse all'}
                        </button>
                      </div>
                    )}
                    {visibleCategories.map(([category, catTutorials]) => {
                      if (!catTutorials || catTutorials.length === 0) return null;
                      const label =
                        CATEGORY_LABELS[category] ?? category;
                      const isCollapsed = collapsedTutorialCats.has(category as string);
                      return (
                        <div key={category} className="mb-4">
                          <button
                            type="button"
                            onClick={() => toggleTutorialCat(category as string)}
                            className="w-full flex items-center gap-1.5 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 sticky top-0 bg-[#0f0f1a] py-1 z-10 cursor-pointer hover:text-white/60 transition-colors"
                          >
                            <ChevronIcon collapsed={isCollapsed} />
                            {label} ({catTutorials.length})
                          </button>
                          <AnimatePresence initial={false}>
                            {!isCollapsed && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
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
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                /* ── Glossary tab ── */
                <div className="px-5 py-3">
                  {/* Search */}
                  <div className="relative mb-4">
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search terms..."
                      value={glossarySearch}
                      onChange={(e) => setGlossarySearch(e.target.value)}
                      className="w-full text-sm bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00aaff]/40 transition-colors"
                    />
                  </div>

                  {filteredGlossary.length === 0 ? (
                    <div className="text-sm text-white/30 text-center py-8">
                      No terms match your search
                    </div>
                  ) : glossarySearch.trim() ? (
                    /* Flat results when searching */
                    <div>
                      {filteredGlossary.map((term) => (
                        <GlossaryEntry
                          key={term.term}
                          term={term}
                          highlight={glossarySearch.trim()}
                          onRelatedClick={handleRelatedTermClick}
                          ref={(el) => { termRefs.current[term.term] = el; }}
                        />
                      ))}
                    </div>
                  ) : (
                    /* Categorized view */
                    <>
                      {glossaryByCategory.length > 1 && (
                        <div className="flex justify-end mb-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (allGlossaryCatsCollapsed) {
                                setCollapsedGlossaryCats(new Set());
                              } else {
                                setCollapsedGlossaryCats(new Set(glossaryCategoryKeys));
                              }
                            }}
                            className="text-[10px] text-white/30 hover:text-white/50 transition-colors cursor-pointer"
                          >
                            {allGlossaryCatsCollapsed ? 'Expand all' : 'Collapse all'}
                          </button>
                        </div>
                      )}
                      {glossaryByCategory.map((group) => {
                        const isCollapsed = collapsedGlossaryCats.has(group.category);
                        return (
                          <div key={group.category} className="mb-5">
                            <button
                              type="button"
                              onClick={() => toggleGlossaryCat(group.category)}
                              className="w-full flex items-center gap-1.5 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 sticky top-0 bg-[#0f0f1a] py-1 z-10 cursor-pointer hover:text-white/60 transition-colors"
                            >
                              <ChevronIcon collapsed={isCollapsed} />
                              {group.label} ({group.terms.length})
                            </button>
                            <AnimatePresence initial={false}>
                              {!isCollapsed && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  {group.terms.map((term) => (
                                    <GlossaryEntry
                                      key={term.term}
                                      term={term}
                                      onRelatedClick={handleRelatedTermClick}
                                      ref={(el) => { termRefs.current[term.term] = el; }}
                                    />
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ChevronIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-shrink-0 transition-transform duration-200 ${collapsed ? '-rotate-90' : 'rotate-0'}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HighlightText({ text, query }: { text: string; query?: string }) {
  if (!query) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-[#00aaff]/25 text-[#00ccff] rounded-sm px-0.5">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}

const GlossaryEntry = React.forwardRef<
  HTMLDivElement,
  { term: GlossaryTerm; highlight?: string; onRelatedClick: (name: string) => void }
>(function GlossaryEntry({ term, highlight, onRelatedClick }, ref) {
  return (
    <div
      ref={ref}
      className="border-b border-white/5 py-3 transition-colors duration-500"
    >
      <div className="text-sm font-medium text-white">
        <HighlightText text={term.term} query={highlight} />
      </div>
      <div className="text-xs text-white/50 leading-relaxed mt-1">
        <HighlightText text={term.definition} query={highlight} />
      </div>
      {term.relatedTerms && term.relatedTerms.length > 0 && (
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-2">
          {term.relatedTerms.map((related) => (
            <button
              key={related}
              type="button"
              onClick={() => onRelatedClick(related)}
              className="text-[10px] text-[#00aaff] hover:text-[#00ccff] transition-colors cursor-pointer"
            >
              {related}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
