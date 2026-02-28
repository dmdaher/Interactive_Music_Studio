'use client';

import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Tutorial } from '@/types/tutorial';
import { useTutorialEngine } from '@/hooks/useTutorialEngine';
import { getZoomTarget } from '@/lib/panelZoom';
import TutorialOverlay from './TutorialOverlay';
import KeyboardZoneOverlay from './KeyboardZoneOverlay';

interface TutorialRunnerProps {
  tutorial: Tutorial;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DevicePanel: React.ComponentType<any>;
}

export default function TutorialRunner({
  tutorial,
  DevicePanel,
}: TutorialRunnerProps) {
  const store = useTutorialEngine(tutorial);

  const step = store.currentStep();
  const totalSteps = store.totalSteps();
  const isFirst = store.isFirstStep();
  const isLast = store.isLastStep();
  const progress = store.progress();

  const handleClose = () => {
    store.reset();
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  // Compute zoom transform based on highlighted controls
  const zoomTransform = useMemo(() => {
    const target = getZoomTarget(store.highlightedControls);
    if (!target) {
      return { scale: 1, x: 0, y: 0 };
    }

    const scale = 1.15;
    // Convert percentage target to translate offset.
    // Factor 2.5 = 1/(scale-1) * scale, so a section at 0% or 100%
    // produces a translate that centers it in the viewport.
    const xPercent = -(target.x - 50) * (scale - 1) * 2.5;
    const yPercent = -(target.y - 50) * (scale - 1) * 2.5;

    return { scale, x: xPercent, y: yPercent };
  }, [store.highlightedControls]);

  if (!store.isActive || !step) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-[#0a0a14]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#0f0f1a]/80 backdrop-blur-md flex-shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close tutorial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div>
            <h1 className="text-sm font-semibold text-white leading-tight">
              {tutorial.title}
            </h1>
            <p className="text-[10px] text-white/40 mt-0.5">
              {tutorial.category} &middot; {tutorial.difficulty} &middot;{' '}
              {tutorial.estimatedTime}
            </p>
          </div>
        </div>

        <div className="text-xs text-white/40 font-medium">
          {store.currentStepIndex + 1} / {totalSteps}
        </div>
      </header>

      {/* Main content area — scrollable, panel with zoom */}
      <div className="flex-1 flex flex-col items-center overflow-hidden p-3">
        {/* Panel zoom container */}
        <div className="w-full flex-1 overflow-hidden rounded-lg">
          {/* GPU-composited zoom: pure CSS transform instead of Framer Motion animate */}
          <div
            className="w-full origin-center"
            style={{
              transform: `scale(${zoomTransform.scale}) translate(${zoomTransform.x}%, ${zoomTransform.y}%)`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: zoomTransform.scale === 1 ? 'auto' : 'transform',
            }}
          >
            <DevicePanel
              panelState={store.panelState}
              displayState={store.displayState}
              highlightedControls={store.highlightedControls}
              zones={store.zones}
            />

            {/* Keyboard zone overlay */}
            {store.zones.length > 0 && (
              <div className="w-full mt-2">
                <KeyboardZoneOverlay zones={store.zones} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating tutorial overlay — position: fixed, rendered outside flow */}
      <AnimatePresence>
        {step && (
          <TutorialOverlay
            step={step}
            stepNumber={store.currentStepIndex + 1}
            totalSteps={totalSteps}
            onNext={store.nextStep}
            onPrev={store.prevStep}
            onClose={handleClose}
            isFirst={isFirst}
            isLast={isLast}
            progress={progress}
            autoplay={store.autoplay}
            autoplaySpeed={store.autoplaySpeed}
            onToggleAutoplay={store.toggleAutoplay}
            onSetAutoplaySpeed={store.setAutoplaySpeed}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
