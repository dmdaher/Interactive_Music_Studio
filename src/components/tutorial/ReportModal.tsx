'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutorialTitle: string;
  tutorialId: string;
  deviceId: string;
  category: string;
  difficulty: string;
  currentStepIndex: number;
  stepTitles: string[];
  totalSteps: number;
}

type ReportScope = 'step' | 'tutorial';
type ReportCategory = 'wrong-info' | 'missing-step' | 'confusing' | 'display-bug' | 'other';
type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const CATEGORIES: { value: ReportCategory; label: string }[] = [
  { value: 'wrong-info', label: 'Wrong information' },
  { value: 'missing-step', label: 'Missing step' },
  { value: 'confusing', label: 'Confusing instruction' },
  { value: 'display-bug', label: 'Display bug' },
  { value: 'other', label: 'Other' },
];

export default function ReportModal({
  isOpen,
  onClose,
  tutorialTitle,
  tutorialId,
  deviceId,
  category: tutorialCategory,
  difficulty,
  currentStepIndex,
  stepTitles,
  totalSteps,
}: ReportModalProps) {
  const [scope, setScope] = useState<ReportScope>('step');
  const [selectedStep, setSelectedStep] = useState(currentStepIndex);
  const [issueCategory, setIssueCategory] = useState<ReportCategory | null>(null);
  const [details, setDetails] = useState('');
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setScope('step');
      setSelectedStep(currentStepIndex);
      setIssueCategory(null);
      setDetails('');
      setEmail('');
      setSubmitState('idle');
    }
  }, [isOpen]);

  // Auto-close on success
  useEffect(() => {
    if (submitState === 'success') {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitState, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = useCallback(async () => {
    if (!issueCategory) return;
    setSubmitState('submitting');

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scope,
          issueCategory,
          details: details.trim(),
          email: email.trim() || undefined,
          tutorialTitle,
          tutorialId,
          deviceId,
          tutorialCategory,
          difficulty,
          currentStepIndex: scope === 'step' ? selectedStep : undefined,
          currentStepTitle: scope === 'step' ? stepTitles[selectedStep] : undefined,
          totalSteps,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  }, [scope, issueCategory, details, email, tutorialTitle, tutorialId, deviceId, tutorialCategory, difficulty, selectedStep, stepTitles, totalSteps]);

  const canSubmit = issueCategory !== null && submitState !== 'submitting';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md mx-4 bg-[#12121f] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {submitState === 'success' ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-white font-medium">Thanks! We&apos;ll look into it.</p>
                <p className="text-white/40 text-sm mt-1">This window will close automatically.</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <h2 className="text-base font-semibold text-white">Help Us Improve</h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-7 h-7 flex items-center justify-center rounded-md text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Body */}
                <div className="px-5 py-4 space-y-4">
                  {/* Scope selector */}
                  <div>
                    <label className="text-xs text-white/50 font-medium block mb-2">What has the issue?</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setScope('step')}
                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border ${
                          scope === 'step'
                            ? 'bg-[#00aaff]/15 text-[#00ccff] border-[#00aaff]/30'
                            : 'text-white/50 border-white/10 hover:border-white/20 hover:text-white/70'
                        }`}
                      >
                        Specific step
                      </button>
                      <button
                        type="button"
                        onClick={() => setScope('tutorial')}
                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border ${
                          scope === 'tutorial'
                            ? 'bg-[#00aaff]/15 text-[#00ccff] border-[#00aaff]/30'
                            : 'text-white/50 border-white/10 hover:border-white/20 hover:text-white/70'
                        }`}
                      >
                        Whole tutorial
                      </button>
                    </div>
                  </div>

                  {/* Step selector (when scope is 'step') */}
                  {scope === 'step' && (
                    <div>
                      <label className="text-xs text-white/50 font-medium block mb-2">Which step?</label>
                      <select
                        value={selectedStep}
                        onChange={(e) => setSelectedStep(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00aaff]/40 transition-colors cursor-pointer appearance-none"
                      >
                        {stepTitles.map((title, i) => (
                          <option key={i} value={i} className="bg-[#12121f] text-white">
                            Step {i + 1}: {title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Category selector */}
                  <div>
                    <label className="text-xs text-white/50 font-medium block mb-2">What kind of issue?</label>
                    <div className="flex flex-wrap gap-1.5">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setIssueCategory(cat.value)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                            issueCategory === cat.value
                              ? 'bg-[#00aaff]/15 text-[#00ccff] border-[#00aaff]/30'
                              : 'text-white/50 border-white/10 hover:border-white/20 hover:text-white/70'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="text-xs text-white/50 font-medium block mb-2">Details</label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="What's wrong?"
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 resize-none focus:outline-none focus:border-[#00aaff]/40 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs text-white/50 font-medium block mb-2">Email (optional, for follow-up)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00aaff]/40 transition-colors"
                    />
                  </div>

                  {/* Error message */}
                  {submitState === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
                  )}
                </div>

                {/* Footer */}
                <div className="px-5 py-4 border-t border-white/10 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg text-sm text-white/50 hover:text-white/70 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      canSubmit
                        ? 'bg-[#00aaff] text-white hover:bg-[#0099ee]'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    {submitState === 'submitting' ? 'Submitting...' : 'Submit Report'}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
