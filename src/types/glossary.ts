export type GlossaryCategory = 'core' | 'controls' | 'effects' | 'workflow';

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: GlossaryCategory;
  relatedTerms?: string[];
}
