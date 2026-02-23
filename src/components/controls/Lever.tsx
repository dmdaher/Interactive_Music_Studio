'use client';

import { motion } from 'framer-motion';

interface LeverProps {
  id: string;
  label: string;
  highlighted?: boolean;
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

export default function Lever({
  id,
  label,
  highlighted = false,
}: LeverProps) {
  return (
    <div className="flex flex-col items-center gap-1" data-control-id={id}>
      {/* Lever assembly */}
      <motion.div
        className="relative flex flex-col items-center cursor-pointer"
        {...(highlighted ? highlightAnimation : {})}
      >
        {/* Ball / stick top */}
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 35% 30%, #888 0%, #555 50%, #333 100%)',
            boxShadow:
              '0 2px 6px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.4)',
          }}
        />

        {/* Stick */}
        <div
          style={{
            width: 6,
            height: 28,
            background:
              'linear-gradient(to right, #3a3a3a 0%, #666 40%, #777 50%, #666 60%, #3a3a3a 100%)',
            boxShadow:
              '1px 0 2px rgba(0,0,0,0.3), -1px 0 2px rgba(0,0,0,0.3)',
            marginTop: -3,
          }}
        />

        {/* Base / socket */}
        <div
          style={{
            width: 30,
            height: 16,
            borderRadius: '6px 6px 8px 8px',
            background:
              'linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 60%, #111 100%)',
            boxShadow:
              'inset 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.03)',
            marginTop: -2,
          }}
        />
      </motion.div>

      {/* Label */}
      <span className="text-[9px] font-medium text-gray-400 uppercase tracking-wider text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
