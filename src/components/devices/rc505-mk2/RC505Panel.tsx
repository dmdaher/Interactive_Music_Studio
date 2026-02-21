'use client';

import { motion } from 'framer-motion';

export default function RC505Panel() {
  return (
    <motion.div
      className="flex items-center justify-center rounded-xl p-8"
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage:
          'radial-gradient(ellipse at 40% 30%, rgba(60,60,60,0.1) 0%, transparent 60%)',
        border: '1px solid #2a2a2a',
        minHeight: 300,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-[0.3em] text-neutral-500">
            BOSS
          </span>
          <div className="w-px h-5 bg-neutral-700" />
          <span className="text-sm tracking-widest text-neutral-400">
            RC-505 MK2
          </span>
        </div>

        <div className="w-20 h-px bg-neutral-700" />

        <motion.p
          className="text-xs tracking-wider text-neutral-500 font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Coming Soon
        </motion.p>

        <p className="text-[10px] text-neutral-600 max-w-xs leading-relaxed">
          Loop Station with 5 stereo phrase tracks, built-in effects, and rhythm patterns.
        </p>
      </div>
    </motion.div>
  );
}
