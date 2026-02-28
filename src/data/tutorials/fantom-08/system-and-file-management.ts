import { Tutorial } from '@/types/tutorial';

export const systemAndFileManagement: Tutorial = {
  id: 'system-and-file-management',
  deviceId: 'fantom-08',
  title: 'System Settings & File Management',
  description:
    'Explore the Fantom 08 System Settings with its 17 configuration tabs, browse files on internal storage and USB, and walk through the Import and Export wizards for backing up and transferring scene data, tones, and samples.',
  category: 'performance',
  difficulty: 'advanced',
  estimatedTime: '12 min',
  tags: ['system', 'settings', 'file-management', 'import', 'export', 'advanced'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to System & File Management',
      instruction:
        'In this tutorial you will learn how to configure the Fantom 08 through its System Settings, browse files on internal storage and USB, and use the Import and Export wizards to transfer scene data, tones, and samples between storage locations.',
      details:
        'The Fantom 08 organizes global configuration across 17 tabbed categories in the SYSTEM screen. File management features — including a full file browser, import wizard, and export wizard — are accessed through the UTILITY menu. These tools are essential for backups, sharing patches, and keeping your instrument organized.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open Menu and Navigate to SYSTEM',
      instruction:
        'Press the Menu button to open the main menu, then navigate to SYSTEM to access the global settings screen.',
      details:
        'The SYSTEM option is found at the top of the Menu list. You can scroll with the Cursor Up/Down buttons or touch the screen to select it, then press Enter to open.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'MENU',
        menuItems: [
          { label: 'SYSTEM', selected: true },
          { label: 'UTILITY' },
          { label: 'SOUND PREVIEW' },
          { label: 'QUICK SETUP' },
          { label: 'INFORMATION' },
        ],
        selectedIndex: 0,
      },
      tipText: 'SYSTEM is at the top of the menu list — press Enter to open it.',
    },
    {
      id: 'step-3',
      title: 'System Settings Overview',
      instruction:
        'The SYSTEM screen displays 17 tabs on the left sidebar. Use the E1 knob to scroll through tabs. The currently selected tab\'s parameters appear in the main area on the right.',
      details:
        'The 17 tabs are: GENERAL, KEYBOARD, PEDAL, WHEEL 1/2, S1/S2, CONTROL, MIDI, SYNC/TEMPO, USB/BLUETOOTH, DISPLAY, CLICK, METRONOME, SYSTEM, ASSIGN1, ASSIGN2, TONE EDIT, and BANK. Each tab contains related global parameters. Press WRITE to save any changes.',
      highlightControls: ['function-e1'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'Auto Off', value: '4 Hours', selected: true },
          { label: 'USB Driver', value: 'VENDOR' },
          { label: 'LCD Brightness', value: '10' },
          { label: 'LED Brightness', value: '7' },
          { label: 'Zone Sw Indicator', value: 'ON' },
          { label: 'Encoder Speed', value: 'FAST' },
        ],
        selectedIndex: 0,
      },
      tipText: 'There are 17 tabs — scroll E1 to explore all system categories.',
    },
    {
      id: 'step-4',
      title: 'Browse GENERAL Tab Parameters',
      instruction:
        'With the GENERAL tab selected, use E2 to scroll through the parameter list and E6 to edit values. This tab covers LCD brightness, startup scene, pad mode, and other global preferences.',
      details:
        'The GENERAL tab includes: Auto Off, USB Driver, LCD Brightness, LED Brightness, Zone Sw Indicator, Encoder Speed, Scene Remain, Startup Scene, Pad Mode, and Time Stamp. Turn E2 to move the cursor between parameters, then turn E6 to change the selected value.',
      highlightControls: ['function-e2', 'function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'Auto Off', value: '4 Hours' },
          { label: 'USB Driver', value: 'VENDOR' },
          { label: 'LCD Brightness', value: '10' },
          { label: 'LED Brightness', value: '7' },
          { label: 'Zone Sw Indicator', value: 'ON' },
          { label: 'Encoder Speed', value: 'FAST' },
          { label: 'Scene Remain', value: 'OFF' },
          { label: 'Startup Scene', value: 'A001', selected: true },
          { label: 'Pad Mode', value: 'PAD' },
          { label: 'Time Stamp', value: 'ON' },
        ],
        selectedIndex: 7,
      },
      tipText: 'E2 scrolls through parameters, E6 edits the selected value.',
    },
    {
      id: 'step-5',
      title: 'Browse MIDI Tab',
      instruction:
        'Turn E1 to scroll the tab sidebar and select the MIDI tab. This shows MIDI channel assignments and transmit/receive settings for each zone.',
      details:
        'The MIDI tab controls how the Fantom communicates with external MIDI devices. Parameters include the global MIDI channel, per-zone Tx/Rx channels, and device ID. These settings are critical when integrating with DAWs, external synths, or MIDI controllers.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'MIDI',
        menuItems: [
          { label: 'MIDI Ch', value: '1', selected: true },
          { label: 'Zone 1 Tx Ch', value: '1' },
          { label: 'Zone 1 Rx Ch', value: '1' },
          { label: 'Zone 2 Tx Ch', value: '2' },
          { label: 'Zone 2 Rx Ch', value: '2' },
          { label: 'Device ID', value: '17' },
        ],
        selectedIndex: 0,
        statusText: 'MIDI tab — 6 of 17',
      },
      tipText: 'MIDI channel assignments determine which zones respond to external MIDI input.',
    },
    {
      id: 'step-6',
      title: 'Exit to UTILITY Menu',
      instruction:
        'Press Exit to leave the SYSTEM screen, then press Menu and navigate down to UTILITY. Select UTILITY to see the file management tools.',
      details:
        'The UTILITY menu contains 10 large touch buttons: WAVE/EXPANSION INFO, IMPORT, EXPORT, BACKUP, RESTORE, WALLPAPER, USB MEMORY FORMAT, FACTORY RESET, INTERNAL STORAGE INITIALIZE, and USB MEMORY UNMOUNT. We will use the file browser, import, and export tools.',
      highlightControls: ['exit', 'menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'UTILITY',
        menuItems: [
          { label: 'WAVE/EXPANSION INFO' },
          { label: 'IMPORT', selected: true },
          { label: 'EXPORT' },
          { label: 'BACKUP' },
          { label: 'RESTORE' },
          { label: 'USB MEMORY FORMAT' },
          { label: 'FACTORY RESET' },
        ],
        selectedIndex: 1,
      },
      tipText: 'UTILITY contains all file management, backup, and restore tools.',
    },
    {
      id: 'step-7',
      title: 'Open the File Browser',
      instruction:
        'The File Browser lets you navigate folders on internal storage and USB memory. Use the Value dial to scroll through files and folders in the current directory.',
      details:
        'The file browser presents a tree-structured view with two root tabs: USB MEMORY and INTERNAL STORAGE. Folders are shown with a folder icon and files with a document icon. Navigate into folders by pressing Enter and go up one level with Exit.',
      highlightControls: ['value-dial'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'file-browser',
        title: 'FILE BROWSER',
        menuItems: [
          { label: 'INTERNAL STORAGE', selected: true },
          { label: 'Scene/', value: 'Folder' },
          { label: 'Tone/', value: 'Folder' },
          { label: 'Sample/', value: 'Folder' },
          { label: 'Backup/', value: 'Folder' },
          { label: 'SMF/', value: 'Folder' },
        ],
        selectedIndex: 0,
        statusText: 'INTERNAL STORAGE — Root',
      },
      tipText: 'The file browser shows both internal storage and USB memory contents.',
    },
    {
      id: 'step-8',
      title: 'Navigate Folders',
      instruction:
        'Use E1 to navigate through the file list and E6 to open folders or select files. Press Exit to go back up one directory level.',
      details:
        'Inside the Scene folder you can see saved scene files (.SVD). The file browser shows file names, sizes, and dates. You can select files here for import/export operations, or simply browse to check what data is stored on the device.',
      highlightControls: ['function-e1', 'function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'file-browser',
        title: 'FILE BROWSER',
        menuItems: [
          { label: '../', value: 'Up' },
          { label: 'MyScenes_001.SVD', value: '2.1 MB', selected: true },
          { label: 'MyScenes_002.SVD', value: '1.8 MB' },
          { label: 'LiveSet_Backup.SVD', value: '3.4 MB' },
          { label: 'Factory_Reset.SVD', value: '4.2 MB' },
        ],
        selectedIndex: 1,
        statusText: 'INTERNAL STORAGE / Scene',
      },
      tipText: 'E1 scrolls the file list, E6 opens folders or selects files. Exit goes up one level.',
    },
    {
      id: 'step-9',
      title: 'Import Wizard',
      instruction:
        'Press Exit to return to UTILITY, then select IMPORT to open the Import wizard. This 3-step process lets you import scenes, tones, or samples from USB or internal storage.',
      details:
        'The Import wizard walks you through three steps: (1) Select the source file, (2) Choose which data to import (scenes, tones, samples, or all), and (3) Select the destination slot. Press Enter to advance through each step. The wizard prevents accidental overwrites by showing a confirmation before executing.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'import-wizard',
        title: 'IMPORT',
        menuItems: [
          { label: 'Step 1: Select Source', value: 'USB MEMORY', selected: true },
          { label: 'Step 2: Select Data', value: 'Scene + Tone' },
          { label: 'Step 3: Destination', value: 'User Bank' },
        ],
        selectedIndex: 0,
        statusText: 'Step 1 of 3',
      },
      tipText: 'The Import wizard guides you through source, data type, and destination selection.',
    },
    {
      id: 'step-10',
      title: 'Export Wizard',
      instruction:
        'Press Exit to return to UTILITY, then select EXPORT. The Export wizard is a 2-step process: select the source data on the Fantom, then choose the export destination.',
      details:
        'Export lets you save scenes, tones, samples, or backup files to USB memory. Step 1 selects what to export (individual scenes, tone banks, sample sets, or full backups). Step 2 selects the destination folder on USB. Turn E6 to confirm and execute the export. Exported files can later be imported on another Fantom or restored after a factory reset.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'export-wizard',
        title: 'EXPORT',
        menuItems: [
          { label: 'Step 1: Select Source', value: 'Scene A001-A128', selected: true },
          { label: 'Step 2: Destination', value: 'USB MEMORY / Export' },
        ],
        selectedIndex: 0,
        statusText: 'Step 1 of 2',
      },
      tipText: 'Export your scenes and tones to USB before firmware updates or factory resets.',
    },
    {
      id: 'step-11',
      title: 'Tutorial Complete!',
      instruction:
        'Press Exit to return to the home screen. You now know how to configure global settings, browse files, and import/export data on the Fantom 08.',
      details:
        'Remember to use BACKUP and RESTORE in the UTILITY menu for full system backups. BACKUP saves everything (scenes, tones, samples, system settings) to USB in a single operation. RESTORE loads a full backup back. Regular backups protect your work against accidental data loss or factory resets. Press WRITE in the SYSTEM screen to save individual setting changes.',
      highlightControls: ['exit'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Concert Grand',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'System & File Management configured',
      },
      tipText:
        'Use BACKUP in the UTILITY menu regularly to save all your data to USB memory.',
    },
  ],
};
