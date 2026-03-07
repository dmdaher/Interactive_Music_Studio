'use client';

import { motion } from 'framer-motion';

interface JogWheelProps {
  deckNumber: 1 | 2;
  highlighted?: boolean;
}

const highlightAnimation = {
  animate: {
    boxShadow: [
      '0 0 12px 4px rgba(0,170,255,0.3)',
      '0 0 30px 12px rgba(0,170,255,0.6)',
      '0 0 12px 4px rgba(0,170,255,0.3)',
    ],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export default function JogWheel({ deckNumber, highlighted = false }: JogWheelProps) {
  return (
    <div className="flex items-center gap-2">
      {/* SEARCH strip (left side) */}
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[6px] text-neutral-600 tracking-wider rotate-[-90deg] whitespace-nowrap">SEARCH</span>
      </div>

      {/* Jog wheel */}
      <motion.div
        className="relative rounded-full cursor-pointer"
        data-control-id={`d${deckNumber}-jog`}
        style={{
          width: 280,
          height: 280,
          background: 'radial-gradient(circle at 50% 50%, #2a2a2a 0%, #1e1e1e 40%, #151515 70%, #111 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.03)',
        }}
        {...(highlighted ? highlightAnimation : {})}
      >
        {/* Textured outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `repeating-conic-gradient(from 0deg, rgba(60,60,60,0.3) 0deg, rgba(40,40,40,0.1) 3deg, rgba(60,60,60,0.3) 6deg)`,
            mask: 'radial-gradient(circle, transparent 60%, black 62%, black 100%)',
            WebkitMask: 'radial-gradient(circle, transparent 60%, black 62%, black 100%)',
          }}
        />

        {/* Inner platter */}
        <div
          className="absolute rounded-full"
          style={{
            width: '60%',
            height: '60%',
            top: '20%',
            left: '20%',
            background: 'radial-gradient(circle at 45% 40%, #333 0%, #222 50%, #1a1a1a 100%)',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.5), 0 1px 2px rgba(255,255,255,0.05)',
          }}
        />

        {/* Center hub with rekordbox logo */}
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: '22%',
            height: '22%',
            top: '39%',
            left: '39%',
            background: 'radial-gradient(circle at 45% 40%, #555 0%, #333 60%, #222 100%)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* rekordbox hexagon icon */}
          <div
            style={{
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.15)" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
