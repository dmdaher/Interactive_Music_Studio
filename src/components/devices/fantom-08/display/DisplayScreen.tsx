'use client';

import { motion } from 'framer-motion';
import { DisplayState } from '@/types/display';
import { DISPLAY_COLORS } from '@/lib/constants';
import ZoneViewScreen from './ZoneViewScreen';
import KeyRangeScreen from './KeyRangeScreen';
import WriteScreen from './WriteScreen';
import MenuScreen from './MenuScreen';

interface DisplayScreenProps {
  displayState: DisplayState;
  highlighted?: boolean;
}

export default function DisplayScreen({ displayState, highlighted = false }: DisplayScreenProps) {
  const renderScreen = () => {
    switch (displayState.screenType) {
      case 'zone-view':
        return displayState.zones ? (
          <ZoneViewScreen zones={displayState.zones} />
        ) : null;

      case 'key-range':
        return (
          <KeyRangeScreen
            zoneNumber={displayState.selectedIndex ?? 1}
            lowNote={displayState.parameterName ?? 'C2'}
            highNote={displayState.parameterValue ?? 'C6'}
            selectedField={undefined}
          />
        );

      case 'write':
        return <WriteScreen confirmText={displayState.confirmText} />;

      case 'menu':
      case 'tone-select':
      case 'effect':
        return (
          <MenuScreen
            items={
              displayState.menuItems?.map((item) => ({
                label: item.label,
                value: item.value,
                selected: item.selected,
              })) ?? []
            }
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'home':
      default:
        return <HomeScreen />;
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      style={{
        backgroundColor: DISPLAY_COLORS.background,
        boxShadow: highlighted
          ? `0 0 16px 4px rgba(0, 170, 255, 0.5), inset 0 0 30px rgba(0, 20, 60, 0.5)`
          : `0 0 8px 1px rgba(40, 60, 120, 0.3), inset 0 0 30px rgba(0, 20, 60, 0.5)`,
        border: `1px solid ${highlighted ? 'rgba(0,170,255,0.6)' : DISPLAY_COLORS.border}`,
        minWidth: 340,
        minHeight: 200,
      }}
      animate={{
        boxShadow: highlighted
          ? `0 0 16px 4px rgba(0, 170, 255, 0.5), inset 0 0 30px rgba(0, 20, 60, 0.5)`
          : `0 0 8px 1px rgba(40, 60, 120, 0.3), inset 0 0 30px rgba(0, 20, 60, 0.5)`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Scanline overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
        }}
      />

      {/* Subtle screen glow gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(40, 80, 140, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Header bar */}
      <div
        className="relative z-20 flex items-center justify-between px-3 py-1.5 border-b"
        style={{
          borderColor: DISPLAY_COLORS.border,
          backgroundColor: `${DISPLAY_COLORS.header}18`,
        }}
      >
        <span
          className="text-[10px] font-mono font-bold tracking-wider"
          style={{ color: DISPLAY_COLORS.header }}
        >
          {displayState.title ?? screenTitle(displayState.screenType)}
        </span>
        {displayState.statusText && (
          <span
            className="text-[9px] font-mono"
            style={{ color: DISPLAY_COLORS.text }}
          >
            {displayState.statusText}
          </span>
        )}
      </div>

      {/* Screen content */}
      <div className="relative z-20">
        {renderScreen()}
      </div>
    </motion.div>
  );
}

function screenTitle(screenType: string): string {
  switch (screenType) {
    case 'home':
      return 'FANTOM-08';
    case 'zone-view':
      return 'ZONE VIEW';
    case 'key-range':
      return 'KEY RANGE';
    case 'write':
      return 'WRITE';
    case 'menu':
      return 'MENU';
    case 'tone-select':
      return 'TONE SELECT';
    case 'effect':
      return 'EFFECTS';
    default:
      return 'FANTOM-08';
  }
}

function HomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-3">
      <motion.div
        className="text-2xl font-bold tracking-[0.25em] font-mono"
        style={{ color: DISPLAY_COLORS.highlight }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        FANTOM-08
      </motion.div>
      <motion.div
        className="text-[10px] tracking-widest font-mono"
        style={{ color: DISPLAY_COLORS.header }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        INTERACTIVE MUSIC STUDIO
      </motion.div>
      <motion.div
        className="w-16 h-px mt-2"
        style={{ backgroundColor: DISPLAY_COLORS.border }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
    </div>
  );
}
