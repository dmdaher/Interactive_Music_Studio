'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Tutorial } from '@/types/tutorial';
import { useTutorialEngine } from '@/hooks/useTutorialEngine';
import { PANEL_NATURAL_WIDTH, PANEL_NATURAL_HEIGHT } from '@/lib/constants';
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
    return Math.min(w / PANEL_NATURAL_WIDTH, 1);
  });

  const updateScale = useCallback((width: number) => {
    if (width > 0) setScale(Math.min(width / PANEL_NATURAL_WIDTH, 1));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => updateScale(entries[0].contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScale]);

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

      {/* Main content area — scrollable, panel + overlay in flow */}
      <div className="flex-1 flex flex-col items-center overflow-auto p-3">
        {/* Device Panel — scaled to fit container width */}
        <div ref={containerRef} className="w-full overflow-hidden rounded-lg"
             style={{ height: PANEL_NATURAL_HEIGHT * scale }}>
          <div style={{
            width: PANEL_NATURAL_WIDTH,
            height: PANEL_NATURAL_HEIGHT,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}>
            <DevicePanel
              panelState={store.panelState}
              displayState={store.displayState}
              highlightedControls={store.highlightedControls}
              zones={store.zones}
            />
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
