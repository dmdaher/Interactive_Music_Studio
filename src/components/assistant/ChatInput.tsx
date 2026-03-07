'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSubmit: (text: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
}

export default function ChatInput({ onSubmit, disabled, autoFocus }: ChatInputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (trimmed && !disabled) {
      onSubmit(trimmed);
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={(e) => e.stopPropagation()}
        onKeyPress={(e) => e.stopPropagation()}
        placeholder="Search tutorials or ask a question..."
        disabled={disabled}
        className="w-full rounded-lg bg-white/5 border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#00aaff]/40 transition-colors disabled:opacity-50"
        aria-label="Search tutorials"
      />
    </div>
  );
}
