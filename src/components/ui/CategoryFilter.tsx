'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: { id: string; label: string; icon: string }[];
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll the selected pill into view when selection changes
  useEffect(() => {
    if (scrollRef.current && selected) {
      const selectedEl = scrollRef.current.querySelector(`[data-category="${selected}"]`);
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selected]);

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* "All" pill */}
        <FilterPill
          label="All"
          icon=""
          isSelected={selected === null}
          onClick={() => onSelect(null)}
          dataCategory="all"
        />

        {/* Category pills */}
        {categories.map((cat) => (
          <FilterPill
            key={cat.id}
            label={cat.label}
            icon={cat.icon}
            isSelected={selected === cat.id}
            onClick={() => onSelect(cat.id)}
            dataCategory={cat.id}
          />
        ))}
      </div>
    </div>
  );
}

interface FilterPillProps {
  label: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
  dataCategory: string;
}

function FilterPill({ label, icon, isSelected, onClick, dataCategory }: FilterPillProps) {
  return (
    <motion.button
      data-category={dataCategory}
      onClick={onClick}
      className={`relative flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isSelected
          ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent-glow)]'
          : 'border border-[var(--card-border)] bg-[var(--surface)] text-gray-400 hover:border-[var(--accent)]/40 hover:text-gray-200'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {label}
    </motion.button>
  );
}
