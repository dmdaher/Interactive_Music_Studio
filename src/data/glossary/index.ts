import { GlossaryTerm } from '@/types/glossary';
import { fantom08Glossary } from './fantom-08';

const glossaryByDevice: Record<string, GlossaryTerm[]> = {
  'fantom-08': fantom08Glossary,
};

export function getGlossary(deviceId: string): GlossaryTerm[] {
  return glossaryByDevice[deviceId] ?? [];
}
