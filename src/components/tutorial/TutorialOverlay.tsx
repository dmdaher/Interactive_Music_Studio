'use client';

import { useState, useEffect } from 'react';
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
  autoplay: boolean;
  autoplaySpeed: number;
  onToggleAutoplay: () => void;
  onSetAutoplaySpeed: (speed: number) => void;
}

const SPEED_OPTIONS = [
  { label: 'Slow', value: 15 },
  { label: 'Medium', value: 8 },
  { label: 'Fast', value: 4 },
] as const;

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
  autoplay,
  autoplaySpeed,
  onToggleAutoplay,
  onSetAutoplaySpeed,
}: TutorialOverlayProps) {
  const [minimized, setMinimized] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Reset details when step changes
  useEffect(() => {
    setShowDetails(false);
  }, [step.id]);

  // SSR-safe drag constraints
  const dragConstraints = typeof window !== 'undefined'
    ? { top: -window.innerHeight + 200, left: -window.innerWidth + 200, right: 0, bottom: 0 }
    : { top: 0, left: 0, right: 0, bottom: 0 };

  return (
    <motion.div
      className="fixed z-50"
      style={{ bottom: 24, right: 24 }}
      drag
      dragMomentum={false}
      dragConstraints={dragConstraints}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div
        className="w-[380px] rounded-xl border border-white/10 overflow-hidden shadow-2xl"
        style={{
          background: 'rgba(15, 15, 25, 0.95)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.1)',
        }}
      >
        {/* Minimized bar */}
        {minimized ? (
          <div className="flex items-center justify-between px-4 py-2.5">
            <button
              type="button"
              onClick={() => setMinimized(false)}
              className="flex items-center justify-center w-6 h-6 rounded-md text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Expand tutorial panel"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
            <div className="flex items-center gap-2 flex-1 min-w-0 mx-3">
              <span className="text-[10px] font-medium text-white/40 tracking-wider uppercase whitespace-nowrap">
                Step {stepNumber}/{totalSteps}
              </span>
              <span className="text-xs text-white/30">&middot;</span>
              <span className="text-xs text-white/70 truncate">{step.title}</span>
            </div>
            <NavigationControls
              onPrev={onPrev}
              onNext={onNext}
              isPrevDisabled={isFirst}
              isNextDisabled={isLast}
            />
          </div>
        ) : (
          <>
            {/* Header — drag handle + step counter + close */}
            <div
              className="flex items-center justify-between px-4 pt-3 pb-2 cursor-grab active:cursor-grabbing select-none"
            >
              <div className="flex items-center gap-2.5">
                {/* Grip dots */}
                <div className="flex flex-col gap-[3px] opacity-30">
                  <div className="flex gap-[3px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-white" />
                    <div className="w-[3px] h-[3px] rounded-full bg-white" />
                  </div>
                  <div className="flex gap-[3px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-white" />
                    <div className="w-[3px] h-[3px] rounded-full bg-white" />
                  </div>
                  <div className="flex gap-[3px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-white" />
                    <div className="w-[3px] h-[3px] rounded-full bg-white" />
                  </div>
                </div>

                {/* Minimize toggle */}
                <button
                  type="button"
                  onClick={() => setMinimized(true)}
                  className="flex items-center justify-center w-6 h-6 rounded-md text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Minimize tutorial panel"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <span className="text-xs font-medium text-white/40 tracking-wider uppercase">
                  Step {stepNumber} of {totalSteps}
                </span>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center w-7 h-7 rounded-md text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close tutorial"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Step content with crossfade */}
            <div className="px-4 pb-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-snug mb-2">
                    {step.title}
                  </h3>

                  {/* Instruction */}
                  <p className="text-base text-white/75 leading-relaxed mb-2">
                    {step.instruction}
                  </p>

                  {/* Expandable details */}
                  {step.details && (
                    <div className="mb-2">
                      <button
                        type="button"
                        onClick={() => setShowDetails(!showDetails)}
                        className="flex items-center gap-1.5 text-sm text-white/45 hover:text-white/70 transition-colors cursor-pointer"
                      >
                        <motion.svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ rotate: showDetails ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M9 18l6-6-6-6" />
                        </motion.svg>
                        {showDetails ? 'Hide details' : 'Show details'}
                      </button>
                      <AnimatePresence>
                        {showDetails && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="text-sm text-white/50 leading-relaxed mt-1.5 overflow-hidden"
                          >
                            {step.details}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Tip box (always visible) */}
                  {step.tipText && (
                    <div
                      className="rounded-lg px-3 py-2 border mb-2"
                      style={{
                        background: 'rgba(0, 170, 255, 0.08)',
                        borderColor: 'rgba(0, 170, 255, 0.2)',
                      }}
                    >
                      <p className="text-sm text-[#66ccff] leading-relaxed">
                        <span className="font-semibold text-[#00aaff]">Tip: </span>
                        {step.tipText}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation row */}
            <div className="px-4 pb-2 flex items-center justify-between">
              <NavigationControls
                onPrev={onPrev}
                onNext={onNext}
                isPrevDisabled={isFirst}
                isNextDisabled={isLast}
                autoplay={autoplay}
                onToggleAutoplay={onToggleAutoplay}
              />

              {/* Keyboard shortcut hints */}
              <div className="flex items-center gap-1.5 text-white/25 text-[10px]">
                <kbd className="px-1.5 py-0.5 rounded border border-white/15 bg-white/5 font-mono">&larr;</kbd>
                <kbd className="px-1.5 py-0.5 rounded border border-white/15 bg-white/5 font-mono">&rarr;</kbd>
                <kbd className="px-1.5 py-0.5 rounded border border-white/15 bg-white/5 font-mono text-[9px]">Space</kbd>
              </div>
            </div>

            {/* Progress bar */}
            <div className="px-4 pb-2">
              <ProgressBar
                progress={progress}
                steps={totalSteps}
                currentStep={stepNumber - 1}
              />
            </div>

            {/* Speed controls (only when autoplay is on) */}
            <AnimatePresence>
              {autoplay && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3 flex items-center gap-2">
                    <span className="text-[10px] text-white/30">Speed</span>
                    <div className="flex items-center gap-1 flex-1">
                      {SPEED_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => onSetAutoplaySpeed(option.value)}
                          className={[
                            'flex-1 px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer',
                            autoplaySpeed === option.value
                              ? 'bg-[#00aaff]/20 text-[#00ccff] border border-[#00aaff]/30'
                              : 'text-white/40 hover:text-white/60 hover:bg-white/5 border border-transparent',
                          ].join(' ')}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}
