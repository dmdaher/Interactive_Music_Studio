'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

interface MenuScreenProps {
  items: { label: string; value?: string; selected?: boolean }[];
  selectedIndex?: number;
}

export default function MenuScreen({ items, selectedIndex = 0 }: MenuScreenProps) {
  return (
    <div className="p-2 font-mono text-[10px] h-full overflow-auto">
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((item, index) => {
          const isSelected = item.selected ?? index === selectedIndex;

          return (
            <motion.div
              key={`${item.label}-${index}`}
              className="flex items-center justify-between px-2.5 py-2 rounded"
              style={{
                backgroundColor: isSelected
                  ? `${DISPLAY_COLORS.active}30`
                  : `${DISPLAY_COLORS.border}50`,
                border: isSelected
                  ? `1px solid ${DISPLAY_COLORS.active}`
                  : `1px solid ${DISPLAY_COLORS.border}80`,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: index * 0.025 }}
            >
              <span
                className="font-bold tracking-wide text-[10px]"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                }}
              >
                {item.label.toUpperCase()}
              </span>

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
    </div>
  );
}
