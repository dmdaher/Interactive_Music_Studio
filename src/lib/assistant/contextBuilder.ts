import { TutorialSummary } from '@/types/assistant';
import { getTutorialIndex } from './tutorialIndex';

export function buildCompressedContext(deviceId: string): string {
  const index = getTutorialIndex(deviceId);
  const lines: string[] = [
    `Device: ${deviceId}`,
    `${index.length} tutorials available.\n`,
    'TUTORIAL INDEX:',
  ];

  for (const t of index) {
    const controls = t.controlsReferenced.slice(0, 8).join(', ');
    const screens = t.screensReferenced.join(', ');
    lines.push(
      `- ${t.tutorialId} [${t.category}, ${t.difficulty}, ${t.estimatedTime}] "${t.title}" — ${t.description}. Controls: ${controls}. Screens: ${screens}.`
    );
  }

  return lines.join('\n');
}
