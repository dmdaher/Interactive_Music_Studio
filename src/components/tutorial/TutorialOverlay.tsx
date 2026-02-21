'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TutorialStep } from '@/types/tutorial';
import ProgressBar from './ProgressBar';
import NavigationControls from './NavigationControls';

interface TutorialOverlayProps {
  step: TutorialStep;
  stepNumber: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  isFirst: boolean;
  isLast: boolean;
  progress: number;
}

export default function TutorialOverlay({
  step,
  stepNumber,
  totalSteps,
  onNext,
  onPrev,
  onClose,
  isFirst,
  isLast,
  progress,
}: TutorialOverlayProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)]"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div
        className="rounded-xl border border-white/10 overflow-hidden"
        style={{
          background: 'rgba(15, 15, 25, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="text-xs font-medium text-white/40 tracking-wider uppercase">
            Step {stepNumber} of {totalSteps}
          </span>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-7 h-7 rounded-md text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close tutorial"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content area with crossfade on step change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="px-5 pb-3"
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-white leading-snug mb-2">
              {step.title}
            </h3>

            {/* Instruction */}
            <p className="text-sm text-white/70 leading-relaxed mb-2">
              {step.instruction}
            </p>

            {/* Details (optional) */}
            {step.details && (
              <p className="text-xs text-white/50 leading-relaxed mb-2">
                {step.details}
              </p>
            )}

            {/* Tip box (optional) */}
            {step.tipText && (
              <div
                className="rounded-lg px-3 py-2.5 mb-2 border"
                style={{
                  background: 'rgba(0, 170, 255, 0.08)',
                  borderColor: 'rgba(0, 170, 255, 0.2)',
                }}
              >
                <p className="text-xs text-[#66ccff] leading-relaxed">
                  <span className="font-semibold text-[#00aaff]">Tip: </span>
                  {step.tipText}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation and shortcuts */}
        <div className="px-5 pb-3">
          <div className="flex items-center justify-between">
            <NavigationControls
              onPrev={onPrev}
              onNext={onNext}
              isPrevDisabled={isFirst}
              isNextDisabled={isLast}
            />

            {/* Keyboard shortcut hints */}
            <div className="flex items-center gap-1.5 text-white/25 text-[10px]">
              <kbd className="px-1.5 py-0.5 rounded border border-white/15 bg-white/5 font-mono">
                &larr;
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-white/15 bg-white/5 font-mono">
                &rarr;
              </kbd>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-5 pb-4 pt-1">
          <ProgressBar
            progress={progress}
            steps={totalSteps}
            currentStep={stepNumber - 1}
          />
        </div>
      </div>
    </motion.div>
  );
}
