import { Tutorial } from '@/types/tutorial';

export const savingYourWork: Tutorial = {
  id: 'saving-your-work',
  deviceId: 'fantom-08',
  title: 'Saving Your Work (Scene Write)',
  description:
    'Learn how to save your scene settings using the Write button. Keep your tone selections, zone setups, and effect changes safe.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '3 min',
  tags: ['save', 'write', 'scene', 'basics', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Why Save Your Scene?',
      instruction:
        'Any changes you make to tones, zones, or effects are temporary until you save. If you switch to another scene or power off without saving, your changes are lost.',
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
        'Press the [WRITE] button to the right of the display. The WRITE MENU appears.',
      details:
        'The Write Menu lets you save different types of data. We\u2019ll save the scene.',
      highlightControls: ['write'],
      panelStateChanges: {
        write: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'WRITE MENU',
        tempo: 120,
        beatSignature: '4/4',
        menuItems: [
          { label: 'SCENE', selected: true },
          { label: 'TONE' },
          { label: 'RHYTHM PATTERN GROUP' },
          { label: 'SYSTEM' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'The Write Menu lets you save different types of data. We\u2019ll save the scene.',
    },
    {
      id: 'step-3',
      title: 'Select Scene',
      instruction:
        'Touch <SCENE> on the Write Menu. The Scene Write screen appears, showing where your data will be saved.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'A001: My Piano Setup',
        statusText: 'Select destination, then touch OK',
      },
      tipText:
        'The screen shows WRITE SOURCE (your current scene) and WRITE DESTINATION (where it will be saved).',
    },
    {
      id: 'step-4',
      title: 'Rename Your Scene (Optional)',
      instruction:
        'To rename your scene, touch RENAME at the bottom of the screen. An on-screen keyboard appears where you can type a new name. Touch OK when done.',
      details:
        'Renaming is optional. If you\u2019re happy with the current name, skip this step and move on.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'A001: My Piano Setup',
        statusText: 'Touch RENAME to edit name',
      },
      tipText:
        'You can also rename scenes later from the Scene Edit screen.',
    },
    {
      id: 'step-5',
      title: 'Choose Save Destination',
      instruction:
        'Turn the Value dial to select which scene slot to save to. You can also use the Dec/Inc buttons. By default, it saves to the current slot.',
      details:
        'You can save to any empty slot or overwrite an existing scene. Be careful not to overwrite scenes you want to keep.',
      highlightControls: ['value-dial', 'dec', 'inc'],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'A001: My Piano Setup',
        statusText: 'Turn Value dial to change destination',
      },
      tipText:
        'Saving to the same slot replaces the old version. Save to a new slot to keep both.',
    },
    {
      id: 'step-6',
      title: 'Confirm Save',
      instruction:
        'Touch OK on screen to confirm. A confirmation message appears.',
      details:
        'If you change your mind, touch CANCEL on screen instead.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'write',
        title: 'SCENE WRITE',
        tempo: 120,
        beatSignature: '4/4',
        sceneNumber: 'A001',
        sceneName: 'My Piano Setup',
        confirmText: 'Confirm save?',
        statusText: 'Touch OK to confirm',
      },
    },
    {
      id: 'step-7',
      title: 'Complete the Save',
      instruction:
        'Touch OK again on the confirmation message to complete the save. The scene is written to memory.',
      details:
        'Never turn off the Fantom while it\u2019s saving \u2014 this could corrupt your data.',
      highlightControls: [],
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
      id: 'step-8',
      title: 'Scene Saved!',
      instruction:
        'Your scene is now saved! The Fantom returns to the home screen with your saved scene loaded.',
      details:
        'Your saved scene will appear in the scene browser and persist even after powering off.',
      highlightControls: [],
      panelStateChanges: {
        write: { active: false },
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
