'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChatMessage as ChatMessageType } from '@/types/assistant';
import TutorialCardCompact from './TutorialCardCompact';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessageComponent = React.memo(function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={[
          'max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm',
          isUser
            ? 'bg-[var(--accent)]/20 text-white'
            : 'bg-white/5 text-white/80',
        ].join(' ')}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        {message.tutorials && message.tutorials.length > 0 && (
          <div className="mt-2 flex flex-col gap-2">
            {message.tutorials.map((result) => (
              <TutorialCardCompact
                key={result.tutorial.tutorialId}
                tutorial={result.tutorial}
                matchReasons={result.matchReasons}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
});

export default ChatMessageComponent;
