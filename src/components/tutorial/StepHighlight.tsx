'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface StepHighlightProps {
  active: boolean;
  children: React.ReactNode;
  color?: string;
}

export default function StepHighlight({
  active,
  children,
  color = '#00aaff',
}: StepHighlightProps) {
  if (!active) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className="relative rounded-lg"
      animate={{
        boxShadow: [
          `0 0 6px 2px ${color}66`,
          `0 0 20px 8px ${color}cc`,
          `0 0 6px 2px ${color}66`,
        ],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        border: `2px solid ${color}88`,
        borderRadius: '8px',
        padding: '2px',
      }}
    >
      {children}
    </motion.div>
  );
}
