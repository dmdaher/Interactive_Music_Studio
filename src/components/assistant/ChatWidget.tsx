'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatStore } from '@/store/chatStore';
import ChatInput from './ChatInput';
import ChatMessageComponent from './ChatMessage';

const SUGGESTED_QUESTIONS = [
  'How do I split my keyboard?',
  'What effects are available?',
  'How do I sample audio?',
  'How do I set up arpeggio?',
];

export default function ChatWidget() {
  const { isOpen, messages, toggle, open, close, addUserMessage, addAssistantMessage, context } = useChatStore();
  const fabRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: Cmd+/ to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggle, close]);

  // Focus trap within panel
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'button, input, a, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener('keydown', handleTab);
    return () => panel.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Return focus to FAB on close
  useEffect(() => {
    if (!isOpen && fabRef.current) {
      fabRef.current.focus();
    }
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages.length]);

  const handleSearch = useCallback(async (query: string) => {
    addUserMessage(query);

    const deviceId = context.deviceId || 'fantom-08';
    try {
      const res = await fetch(`/api/assistant/search?q=${encodeURIComponent(query)}&device=${encodeURIComponent(deviceId)}`);
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        addAssistantMessage(
          `Found ${data.results.length} tutorial${data.results.length === 1 ? '' : 's'} matching your search:`,
          data.results
        );
      } else {
        addAssistantMessage('No tutorials match your search. Try rephrasing or ask a different question.');
      }
    } catch {
      addAssistantMessage('Something went wrong. Please try again.');
    }
  }, [addUserMessage, addAssistantMessage, context.deviceId]);

  const handleSuggestionClick = (question: string) => {
    handleSearch(question);
  };

  return (
    <>
      {/* FAB */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => (isOpen ? close() : open())}
        className="fixed bottom-6 right-6 z-42 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#00aaff] to-[#0088dd] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer sm:h-12 sm:w-12"
        aria-expanded={isOpen}
        aria-label="Ask Miyagi assistant"
        style={{ zIndex: 42 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 sm:hidden"
              style={{ zIndex: 43 }}
              onClick={close}
            />

            {/* Panel container */}
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-label="Ask Miyagi assistant"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed bottom-0 left-0 right-0 h-[85vh] rounded-t-2xl sm:bottom-24 sm:right-6 sm:left-auto sm:h-auto sm:w-[400px] sm:max-h-[600px] sm:rounded-xl"
              style={{
                zIndex: 44,
                background: 'rgba(15, 15, 25, 0.95)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex h-full flex-col sm:max-h-[600px]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <h2 className="text-sm font-semibold text-white">Ask Miyagi</h2>
                    {context.currentStepTitle && (
                      <p className="text-[10px] text-white/40 mt-0.5 truncate max-w-[250px]">
                        Step {(context.currentStepIndex ?? 0) + 1}: {context.currentStepTitle}
                      </p>
                    )}
                  </div>
                  {/* Mobile drag handle */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20 sm:hidden" />
                  <button
                    type="button"
                    onClick={close}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Message list */}
                <div
                  ref={messageListRef}
                  className="flex-1 overflow-y-auto px-4 py-3"
                  role="log"
                  aria-live="polite"
                >
                  {messages.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center gap-4">
                      <p className="text-sm text-white/40">Search tutorials or ask a question</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {SUGGESTED_QUESTIONS.map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => handleSuggestionClick(q)}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {messages.map((msg) => (
                        <ChatMessageComponent key={msg.id} message={msg} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="border-t border-white/10 px-4 py-3">
                  <ChatInput onSubmit={handleSearch} autoFocus={isOpen} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
