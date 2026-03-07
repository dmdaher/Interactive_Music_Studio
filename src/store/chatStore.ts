'use client';

import { create } from 'zustand';
import { ChatMessage, SearchResult } from '@/types/assistant';

interface ChatContext {
  deviceId?: string;
  tutorialId?: string;
  currentStepIndex?: number;
  currentStepTitle?: string;
}

interface ChatStore {
  isOpen: boolean;
  messages: ChatMessage[];
  lastResults: SearchResult[];
  context: ChatContext;

  toggle: () => void;
  open: () => void;
  close: () => void;
  addUserMessage: (text: string) => string;
  addAssistantMessage: (content: string, tutorials?: SearchResult[]) => void;
  clearMessages: () => void;
  setContext: (ctx: Partial<ChatContext>) => void;
}

let messageIdCounter = 0;
function nextId(): string {
  return `msg-${Date.now()}-${++messageIdCounter}`;
}

export const useChatStore = create<ChatStore>((set) => ({
  isOpen: false,
  messages: [],
  lastResults: [],
  context: {},

  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),

  addUserMessage: (text: string) => {
    const id = nextId();
    set((s) => ({
      messages: [...s.messages, {
        id,
        role: 'user' as const,
        content: text,
        timestamp: Date.now(),
      }],
    }));
    return id;
  },

  addAssistantMessage: (content: string, tutorials?: SearchResult[]) => {
    set((s) => ({
      messages: [...s.messages, {
        id: nextId(),
        role: 'assistant' as const,
        content,
        timestamp: Date.now(),
        tutorials,
      }],
      lastResults: tutorials ?? s.lastResults,
    }));
  },

  clearMessages: () => set({ messages: [], lastResults: [] }),

  setContext: (ctx: Partial<ChatContext>) => {
    set((s) => ({ context: { ...s.context, ...ctx } }));
  },
}));
