'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * FILE BROWSER screen — File utility browser (manual p.162).
 *
 * Layout:
 * - Top: Two tabs (USB MEMORY / INTERNAL STORAGE)
 * - Middle: Folder tree display (Root > ROLAND > USB etc.)
 * - Bottom: Action buttons — RENAME / DELETE / COPY / MOVE / CREATE FOLDER
 */

interface FileBrowserScreenProps {
  selectedIndex?: number;
  activeTab?: string;
}

const TABS = ['USB MEMORY', 'INTERNAL STORAGE'];

const DEMO_FOLDERS = [
  { name: 'Root', depth: 0, expanded: true },
  { name: 'ROLAND', depth: 1, expanded: true },
  { name: 'FANTOM-0', depth: 2, expanded: true },
  { name: 'TONE', depth: 3, expanded: false },
  { name: 'SCENE', depth: 3, expanded: false },
  { name: 'SAMPLE', depth: 3, expanded: false },
  { name: 'BACKUP', depth: 3, expanded: false },
  { name: 'SMF', depth: 2, expanded: false },
];

const ACTIONS = ['RENAME', 'DELETE', 'COPY', 'MOVE', 'CREATE FOLDER'];

export default function FileBrowserScreen({
  selectedIndex = 3,
  activeTab = 'USB MEMORY',
}: FileBrowserScreenProps) {
  const activeTabIndex = TABS.indexOf(activeTab);
  const resolvedTabIndex = activeTabIndex >= 0 ? activeTabIndex : 0;

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Tab bar */}
      <div
        className="flex gap-0.5 px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        {TABS.map((tab, i) => {
          const isActive = i === resolvedTabIndex;
          return (
            <span
              key={tab}
              className="text-[8px] px-2 py-0.5 rounded"
              style={{
                color: isActive ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
                border: `1px solid ${isActive ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '30'}`,
              }}
            >
              {tab}
            </span>
          );
        })}
      </div>

      {/* Folder tree */}
      <div className="flex-1 overflow-auto px-2 py-1">
        {DEMO_FOLDERS.map((folder, i) => {
          const isSelected = i === selectedIndex;
          const indent = folder.depth * 12;
          const icon = folder.expanded ? '\u25BC' : '\u25B6';

          return (
            <motion.div
              key={`${folder.name}-${i}`}
              className="flex items-center py-[2px]"
              style={{
                paddingLeft: indent,
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}20` : 'transparent',
                borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
              }}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.08, delay: i * 0.03 }}
            >
              <span
                className="text-[7px] mr-1"
                style={{ color: DISPLAY_COLORS.zoneMuted }}
              >
                {icon}
              </span>
              <span
                className="text-[9px]"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                  fontWeight: isSelected ? 'bold' : 'normal',
                }}
              >
                {folder.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer: Action buttons */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-1">
          {ACTIONS.map((action) => (
            <span
              key={action}
              className="text-[7px] px-1.5 py-0.5 rounded"
              style={{
                color: DISPLAY_COLORS.zoneMuted,
                border: `1px solid ${DISPLAY_COLORS.border}40`,
              }}
            >
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
