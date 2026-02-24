import { Tutorial } from '@/types/tutorial';

export const savingYourWork: Tutorial = {
  id: 'saving-your-work',
  deviceId: 'fantom-08',
  title: 'Saving Your Work (Scene Write)',
  description:
    'Learn how to save your scene settings using the Write button. Keep your tone selections, zone setups, and effect changes safe.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '2 min',
  tags: ['save', 'write', 'scene', 'basics', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Why Save Your Scene?',
      instruction:
        'Any changes you make to tones, zones, or effects are temporary until you save. If you switch to another scene without saving, your changes are lost.',
      details:
        'The Write button saves everything in the current scene: zone assignments, tone selections, key ranges, volumes, effects, and more.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Press the Write Button',
      instruction:
        "Press the Write button to begin saving. It's located to the right of the display area.",
      details:
        'The Write button LED lights up red when pressed. The display shows the Scene Write confirmation screen.',
      highlightControls: ['write'],
      panelStateChanges: {
        write: { active: true, ledOn: true, ledColor: '#ff2222' },
      },
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'Write to A001?',
        statusText: 'Turn Value dial to rename',
      },
      tipText:
        "The Write button LED glows red to remind you that you're about to overwrite data.",
    },
    {
      id: 'step-3',
      title: 'Rename Your Scene',
      instruction:
        'Use the Value dial to change the scene name if desired. Use the Cursor Left/Right buttons to move between characters.',
      details:
        'Scene names can be up to 16 characters. You can use letters, numbers, and some symbols. This step is optional — press Enter to keep the current name.',
      highlightControls: ['value-dial', 'cursor-left', 'cursor-right'],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'Rename scene:',
        statusText: 'Use dial to change characters',
      },
    },
    {
      id: 'step-4',
      title: 'Choose Save Destination',
      instruction:
        'Use the Cursor Up/Down buttons to select which scene slot to save to. By default it saves to the current slot.',
      details:
        'You can save to any empty slot or overwrite an existing scene. Be careful not to overwrite scenes you want to keep.',
      highlightControls: ['cursor-up', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'Write to A001?',
        statusText: 'Press Enter to confirm',
      },
      tipText:
        'Saving to the same slot replaces the old version. Save to a new slot to keep both versions.',
    },
    {
      id: 'step-5',
      title: 'Confirm and Save',
      instruction:
        'Press Enter to confirm the save. The Fantom writes all settings to memory. Press Exit to cancel without saving.',
      highlightControls: ['enter', 'exit'],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'Completed!',
        statusText: 'Scene saved successfully',
      },
    },
    {
      id: 'step-6',
      title: 'Scene Saved!',
      instruction:
        'Your scene is now saved. The Fantom returns to the home screen with your saved scene loaded.',
      details:
        'Your saved scene will appear in the scene browser and will persist even after powering off the Fantom.',
      highlightControls: [],
      panelStateChanges: {
        write: { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'Get in the habit of saving after making changes you want to keep!',
    },
  ],
};
