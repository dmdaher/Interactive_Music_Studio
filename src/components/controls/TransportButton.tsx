'use client';

import { motion } from 'framer-motion';

interface TransportButtonProps {
  id: string;
  icon: 'play' | 'stop' | 'rec';
  active?: boolean;
  highlighted?: boolean;
  onClick?: () => void;
}

const highlightAnimation = {
  animate: {
    boxShadow: [
      '0 0 8px 2px rgba(0,170,255,0.4)',
      '0 0 20px 8px rgba(0,170,255,0.8)',
      '0 0 8px 2px rgba(0,170,255,0.4)',
    ],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

const activeGlow: Record<string, string> = {
  play: '0 0 10px 3px rgba(0,220,80,0.5)',
  stop: 'none',
  rec: '0 0 10px 3px rgba(255,40,40,0.5)',
};

const activeIconColor: Record<string, string> = {
  play: '#00dd55',
  stop: '#888',
  rec: '#ff3333',
};

const inactiveIconColor = '#777';

function PlayIcon({ color }: { color: string }) {
  return (
    <svg width="10" height="12" viewBox="0 0 14 16" fill="none">
      <path d="M2 1L13 8L2 15V1Z" fill={color} />
    </svg>
  );
}

function StopIcon({ color }: { color: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
      <rect x="1" y="1" width="10" height="10" rx="1" fill={color} />
    </svg>
  );
}

function RecIcon({ color }: { color: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" fill={color} />
    </svg>
  );
}

const iconComponents: Record<string, React.FC<{ color: string }>> = {
  play: PlayIcon,
  stop: StopIcon,
  rec: RecIcon,
};

export default function TransportButton({
  id,
  icon,
  active = false,
  highlighted = false,
  onClick,
}: TransportButtonProps) {
  const IconComponent = iconComponents[icon];
  const iconColor = active ? activeIconColor[icon] : inactiveIconColor;

  return (
    <div className="flex flex-col items-center gap-0.5" data-control-id={id}>
      {/* Icon above the button */}
      <IconComponent color={iconColor} />

      {/* Blank button */}
      <motion.button
        type="button"
        onClick={onClick}
        className="w-8 h-8 rounded-full cursor-pointer select-none flex items-center justify-center"
        style={{
          background: active
            ? 'linear-gradient(to bottom, #4a4a4a 0%, #333 50%, #2a2a2a 100%)'
            : 'linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 50%, #1e1e1e 100%)',
          boxShadow: active
            ? `inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05), ${activeGlow[icon]}`
            : '0 3px 6px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
          border: '1px solid #111',
          transform: active ? 'translateY(1px)' : 'translateY(0)',
        }}
        {...(highlighted ? highlightAnimation : {})}
        whileTap={{ scale: 0.92 }}
      />
    </div>
  );
}
