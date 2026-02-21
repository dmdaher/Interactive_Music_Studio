'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

interface MenuScreenProps {
  items: { label: string; value?: string; selected?: boolean }[];
  selectedIndex?: number;
}

export default function MenuScreen({ items, selectedIndex = 0 }: MenuScreenProps) {
  return (
    <div className="flex flex-col gap-0.5 p-2 font-mono text-[11px]">
      {items.map((item, index) => {
        const isSelected = item.selected ?? index === selectedIndex;

        return (
          <motion.div
            key={`${item.label}-${index}`}
            className="flex items-center justify-between px-2 py-1 rounded-sm"
            style={{
              backgroundColor: isSelected ? `${DISPLAY_COLORS.active}30` : 'transparent',
              borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
            }}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, delay: index * 0.02 }}
          >
            {/* Selection indicator + label */}
            <div className="flex items-center gap-2">
              {isSelected && (
                <motion.span
                  style={{ color: DISPLAY_COLORS.active }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  &gt;
                </motion.span>
              )}
              <span
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {item.label}
              </span>
            </div>

            {/* Value */}
            {item.value && (
              <span
                className="text-[10px]"
                style={{ color: isSelected ? DISPLAY_COLORS.active : DISPLAY_COLORS.zoneMuted }}
              >
                {item.value}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
