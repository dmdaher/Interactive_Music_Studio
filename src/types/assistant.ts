import { TutorialCategory } from './tutorial';

export interface TutorialSummary {
  tutorialId: string;
  deviceId: string;
  title: string;
  description: string;
  category: TutorialCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  tags: string[];
  stepCount: number;
  searchableText: string;
  topics: string[];
  controlsReferenced: string[];
  screensReferenced: string[];
}

export interface SearchResult {
  tutorial: TutorialSummary;
  score: number;
  matchReasons: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  tutorials?: SearchResult[];
}
