'use client';

import { motion } from 'framer-motion';

interface PadButtonProps {
  id: string;
  label: string;
  active?: boolean;
  color?: string;
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

export default function PadButton({
  id,
  label,
  active = false,
  color = '#4488ff',
  highlighted = false,
  onClick,
}: PadButtonProps) {
  return (
    <div className="flex flex-col items-center gap-1" data-control-id={id}>
      <motion.button
        type="button"
        onClick={onClick}
        className="w-11 h-11 rounded-lg cursor-pointer select-none flex items-center justify-center"
        style={{
          background: active
            ? `linear-gradient(145deg, ${color} 0%, ${color}cc 60%, ${color}99 100%)`
            : 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 50%, #222 100%)',
          boxShadow: active
            ? `inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05), 0 0 12px ${color}66`
            : '0 3px 6px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -2px 4px rgba(0,0,0,0.2)',
          border: active
            ? `1px solid ${color}88`
            : '1px solid #1a1a1a',
          transform: active ? 'translateY(1px)' : 'translateY(0)',
        }}
        {...(highlighted ? highlightAnimation : {})}
        whileTap={{ scale: 0.93, y: 2 }}
      >
        {/* Rubber texture overlay */}
        <div
          className="absolute inset-[3px] rounded-md pointer-events-none"
          style={{
            background: active
              ? 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)'
              : 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          }}
        />
        <span className="text-[8px] font-medium text-gray-300 uppercase tracking-wider text-center leading-tight z-10 relative">
          {label}
        </span>
      </motion.button>
    </div>
  );
}
