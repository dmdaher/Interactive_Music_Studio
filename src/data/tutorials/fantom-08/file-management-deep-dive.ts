import { Tutorial } from '@/types/tutorial';

export const fileManagementDeepDive: Tutorial = {
  id: 'file-management-deep-dive',
  deviceId: 'fantom-08',
  title: 'File Management Deep Dive',
  description:
    'Master the Fantom\'s Import and Export workflows for tones, scenes, and samples. Learn the full SELECT SOURCE → SELECT DESTINATION wizard process, explore the File Utility for rename/delete/copy/move operations, and safely unmount USB drives.',
  category: 'performance',
  difficulty: 'advanced',
  estimatedTime: '10 min',
  tags: ['file-management', 'import', 'export', 'tone', 'scene', 'sample', 'usb', 'utility', 'advanced'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to File Management',
      instruction:
        'The Fantom\'s UTILITY menu provides powerful tools for transferring tones, scenes, and samples between USB and internal storage. This tutorial walks through the complete Import, Export, and File Utility workflows in detail.',
      details:
        'You\'ll learn the IMPORT wizard (Tone, Scene, Sample — each with SELECT SOURCE and SELECT DESTINATION screens), the EXPORT wizard (same three data types with folder browser), the FILE UTILITY for direct file operations, and USB MEMORY UNMOUNT for safe removal.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open UTILITY Menu',
      instruction:
        'Press MENU → touch UTILITY. The UTILITY MENU shows 10 function buttons including IMPORT, EXPORT, BACKUP, RESTORE, FILE UTILITY, and USB MEMORY UNMOUNT.',
      details:
        'The UTILITY menu is a grid of large touch buttons: WAVE/EXPANSION INFO, IMPORT, EXPORT, BACKUP, RESTORE, WALLPAPER, USB MEMORY FORMAT, FACTORY RESET, INTERNAL STORAGE INITIALIZE, and USB MEMORY UNMOUNT.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'UTILITY MENU',
        menuItems: [
          { label: 'WAVE/EXPANSION INFO' },
          { label: 'IMPORT', selected: true },
          { label: 'EXPORT' },
          { label: 'BACKUP' },
          { label: 'RESTORE' },
          { label: 'USB MEMORY FORMAT' },
          { label: 'FACTORY RESET' },
          { label: 'USB MEMORY UNMOUNT' },
        ],
        selectedIndex: 1,
      },
      tipText: 'UTILITY is in the main MENU list, below SYSTEM.',
    },
    {
      id: 'step-3',
      title: 'Import Tone — Select Source',
      instruction:
        'Touch IMPORT → IMPORT TONE. Browse USB for a .svz file → press E6 SELECT. The SELECT SOURCE screen shows a checkbox list of tones. Use SHIFT + touch for multi-select. E2 CLEAR ALL, E3 SELECT ALL, E5 WITH SAMPLE (includes keyboard samples), E6 NEXT.',
      details:
        'The Import Tone wizard has two steps: SELECT SOURCE (which tones to import) and SELECT DESTINATION (where to put them). The source file must be a .svz export file on a USB drive. Check boxes next to each tone you want. E5 WITH SAMPLE includes associated keyboard samples.',
      highlightControls: ['function-e6'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'menu',
        title: 'IMPORT TONE (SELECT SOURCE)',
        menuItems: [
          { label: '0001:#Sfm Ampl_Lite', selected: true },
          { label: '0002:#Dreaming_LFB' },
          { label: '0003:#Stage EP Pwr' },
          { label: '0004:#DaFen Klav' },
          { label: '0005:#Ambien+' },
        ],
        selectedIndex: 0,
        statusText: 'Multi Select: [SHIFT] + Touch checkbox',
      },
      tipText: 'E3 SELECT ALL is useful when importing an entire tone bank.',
    },
    {
      id: 'step-4',
      title: 'Import Tone — Select Destination',
      instruction:
        'After pressing E6 NEXT, the SELECT DESTINATION screen shows user tone slots. Tones already in use show their current name. Empty slots show "INITIAL TONE". Select destination slots, then press E6 EXECUTE → E5 OK to confirm.',
      details:
        'Each imported tone needs a destination slot in user memory. Tones used by a scene are marked differently from standalone tones. Importing into an occupied slot overwrites the existing tone. Choose empty slots or slots you want to replace.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'IMPORT TONE (SELECT DESTINATION)',
        menuItems: [
          { label: '0001:#Sfm Ampl_Lite (New)', selected: true },
          { label: '0002:#Dreaming_LFB (New)' },
          { label: '0008:INITIAL TONE' },
          { label: '0009:INITIAL TONE' },
        ],
        selectedIndex: 0,
        statusText: 'Select destination slots → E6 EXECUTE',
      },
      tipText: 'Importing into occupied slots overwrites them — choose carefully.',
    },
    {
      id: 'step-5',
      title: 'Import Scene',
      instruction:
        'Return to IMPORT menu → IMPORT SCENE. Browse the USB EXPORT_SCENE folder → press E6 SELECT. The SELECT SOURCE shows scenes with checkboxes. E6 NEXT → SELECT DESTINATION scene slots. E6 EXECUTE → E5 OK. Tones and drums used in scenes are imported together automatically.',
      details:
        'Scene import is similar to tone import but also pulls in the tones and drum kits referenced by each scene. This means importing a scene gives you everything needed to reproduce it exactly — no missing tones.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'IMPORT SCENE (SELECT SOURCE)',
        menuItems: [
          { label: 'A001:Homecoming', selected: true },
          { label: 'A002:MKI Treasures' },
          { label: 'A003:Ultimate StrSect' },
          { label: 'A004:Brass+Sax S1/S2' },
        ],
        selectedIndex: 0,
        statusText: 'Select scenes to import',
      },
      tipText: 'Scene import automatically includes referenced tones and drum kits.',
    },
    {
      id: 'step-6',
      title: 'Import Sample',
      instruction:
        'Return to IMPORT menu → IMPORT SAMPLE. Browse USB for a .svz file → press E6 SELECT. SELECT SOURCE shows samples with No, Name, Ch (channels), and Size. Press E4 PREVIEW to audition a sample before importing. E6 NEXT → SELECT DESTINATION → E6 EXECUTE → E5 OK.',
      details:
        'Sample import lets you audition (E4 PREVIEW) before committing. The source list shows sample number, name, channel count (S=stereo, M=mono), and file size. Destination shows available sample memory slots.',
      highlightControls: ['function-e4', 'function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'IMPORT SAMPLE (SELECT SOURCE)',
        menuItems: [
          { label: '0001 AnalogRip_1 S 51KB', selected: true },
          { label: '0002 AnalogRip_2 S 37KB' },
          { label: '0003 AnalogRip_4 S 106KB' },
        ],
        selectedIndex: 0,
        statusText: 'E4=PREVIEW  E6=NEXT',
      },
      tipText: 'Always preview samples before importing to confirm you have the right files.',
    },
    {
      id: 'step-7',
      title: 'Export Tone — Select Source',
      instruction:
        'Touch EXPORT → EXPORT TONE. The SELECT SOURCE screen lists user tones with checkboxes. Tones used in a scene are highlighted with (Ext) marker. Select the tones to export, then press E6 NEXT.',
      details:
        'Export creates a .svz file on USB containing your selected data. The tone list shows all user tones. Tones referenced by scenes are marked to help you identify which tones are in active use.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'EXPORT TONE (SELECT SOURCE)',
        menuItems: [
          { label: '0001:#Sfm Ampl_Lite (Ext)', selected: true },
          { label: '0002:#Dreaming_LFB (Ext)' },
          { label: '0003:#Stage EP Pwr' },
        ],
        selectedIndex: 0,
        statusText: 'Select tones to export',
      },
      tipText: 'Tones marked (Ext) are referenced by one or more scenes.',
    },
    {
      id: 'step-8',
      title: 'Export Tone — Select Destination',
      instruction:
        'The SELECT DESTINATION screen shows the USB folder tree with an Export Name. Press E1 to select a folder, E2 RENAME to edit the filename, then E6 EXECUTE → E5 OK. The file is saved as a .svz file in the selected folder.',
      details:
        'The default export name is based on the data type (e.g., "EXPORT_Z-Core"). Use E2 RENAME to give it a descriptive name. Files are saved in the ROLAND/SOUND folder hierarchy on USB.',
      highlightControls: ['function-e2', 'function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'EXPORT TONE (SELECT DESTINATION)',
        menuItems: [
          { label: 'Export Name: EXPORT_Z-Core', selected: true },
          { label: 'Root/ROLAND/SOUND' },
        ],
        selectedIndex: 0,
        statusText: 'E2=RENAME  E6=EXECUTE',
      },
      tipText: 'Give exports descriptive names — they are easier to find later.',
    },
    {
      id: 'step-9',
      title: 'Export Scene and Sample',
      instruction:
        'Export Scene follows the same pattern: select scenes → choose USB folder → EXECUTE. Export Sample: select samples → choose USB folder → EXECUTE. Up to 1000 samples per export. All exported data is saved to the ROLAND/SOUND folder on USB.',
      details:
        'Scene export includes the scenes themselves but not the referenced tones (export those separately with Export Tone). Sample export saves the raw sample data. For a complete backup of everything, use the BACKUP function instead.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'EXPORT SCENE (SELECT SOURCE)',
        menuItems: [
          { label: 'A001:Homecoming', selected: true },
          { label: 'A002:MKI Treasures' },
        ],
        selectedIndex: 0,
        statusText: 'Export Scene workflow',
      },
      tipText: 'For complete backups, use BACKUP instead of individual exports.',
    },
    {
      id: 'step-10',
      title: 'File Utility',
      instruction:
        'Touch FILE UTILITY from the UTILITY menu (or MENU → FILE UTILITY). Shows USB MEMORY and INTERNAL STORAGE tabs. Browse files with E1 knob. E2 RENAME, E3 DELETE, E4 COPY, E5 MOVE, E6 CREATE FOLDER.',
      details:
        'File Utility gives you direct file management without import/export wizards. You can rename exported files, delete old backups, copy files between folders, move files to organize them, and create new folders on USB or internal storage.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'FILE UTILITY',
        menuItems: [
          { label: 'USB MEMORY', selected: true },
          { label: 'ROLAND/ (Folder)' },
          { label: 'EXPORT_SAMPLE/ (Folder)' },
          { label: 'MyBackup.svz' },
        ],
        selectedIndex: 0,
        statusText: 'E2=RENAME E3=DELETE E4=COPY E5=MOVE E6=CREATE FOLDER',
      },
      tipText: 'Use CREATE FOLDER to organize your exports by date or project.',
    },
    {
      id: 'step-11',
      title: 'USB Memory Unmount',
      instruction:
        'Before disconnecting a USB drive, always unmount it safely. From the UTILITY menu, touch USB MEMORY UNMOUNT → OK → E5 OK. Wait for the confirmation, then disconnect the USB drive from the Fantom.',
      details:
        'Removing a USB drive without unmounting can corrupt data or damage the file system. Always use USB MEMORY UNMOUNT before physically disconnecting the drive. The Fantom will confirm when it is safe to remove.',
      highlightControls: ['function-e5'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'UTILITY MENU',
        menuItems: [
          { label: 'USB MEMORY UNMOUNT', selected: true },
        ],
        selectedIndex: 0,
        statusText: 'USB Memory Unmount — safe to remove after confirmation',
      },
      tipText: 'Never pull out a USB drive while the Fantom is reading or writing.',
    },
    {
      id: 'step-12',
      title: 'File Management Complete!',
      instruction:
        'Press EXIT to return home. Regular imports and exports keep your tones and scenes backed up and organized. Always unmount USB before disconnecting. For full system backups, use the BACKUP function in the UTILITY menu.',
      details:
        'Summary: IMPORT TONE/SCENE/SAMPLE — browse USB .svz file → SELECT SOURCE (checkbox multi-select) → SELECT DESTINATION → EXECUTE. EXPORT TONE/SCENE/SAMPLE — SELECT SOURCE → SELECT DESTINATION (USB folder + filename) → EXECUTE. FILE UTILITY — direct rename, delete, copy, move, create folder. USB MEMORY UNMOUNT before disconnecting.',
      highlightControls: ['exit'],
      panelStateChanges: {
        exit: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'File management workflows configured',
      },
      tipText: 'Export regularly — USB backups protect against accidental data loss.',
    },
  ],
};
