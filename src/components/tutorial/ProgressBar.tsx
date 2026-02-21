'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  steps: number;
  currentStep: number;
}

export default function ProgressBar({
  progress,
  steps,
  currentStep,
}: ProgressBarProps) {
  return (
    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
      {/* Fill bar */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #0077cc, #00aaff)',
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Step dots */}
      {Array.from({ length: steps }).map((_, i) => {
        const dotPosition = ((i + 1) / steps) * 100;
        const isCompleted = i <= currentStep;

        return (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${dotPosition}%` }}
          >
            <div
              className={[
                'w-2.5 h-2.5 rounded-full border transition-colors duration-300',
                isCompleted
                  ? 'bg-[#00aaff] border-[#00ccff]'
                  : 'bg-white/10 border-white/20',
              ].join(' ')}
            />
          </div>
        );
      })}
    </div>
  );
}
