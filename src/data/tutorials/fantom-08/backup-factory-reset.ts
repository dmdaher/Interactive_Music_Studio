import { Tutorial } from '@/types/tutorial';

export const backupFactoryReset: Tutorial = {
  id: 'backup-factory-reset',
  deviceId: 'fantom-08',
  title: 'Backup, Restore & Factory Reset',
  description:
    'Learn how to back up your entire Fantom to USB with optional pad and keyboard sample inclusion, restore from a backup, format USB drives, perform a factory reset, and initialize internal storage.',
  category: 'performance',
  difficulty: 'intermediate',
  estimatedTime: '8 min',
  tags: ['backup', 'restore', 'factory-reset', 'usb', 'utility', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Backup & Restore',
      instruction:
        'Backing up your Fantom protects against data loss. This tutorial covers the complete backup and restore workflows, USB formatting, factory reset, and internal storage initialization — all the tools you need for safe data management.',
      details:
        'BACKUP saves user memory settings and system memory settings to USB. RESTORE loads them back. FACTORY RESET clears everything to default. INTERNAL STORAGE INITIALIZE clears only the internal storage. USB MEMORY FORMAT prepares a new USB drive for use.',
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
      title: 'Open UTILITY and Start Backup',
      instruction:
        'Press MENU → UTILITY → BACKUP. The BACKUP screen shows a Backup Name field with options to include sample data in the backup.',
      details:
        'Insert a USB drive before starting. The BACKUP screen shows: Backup Name (default "MyBackup"), INCLUDE PAD SAMPLE checkbox (E2), INCLUDE KBD SAMPLE checkbox (E3), and RENAME button (E1). The backup file is saved as a .svz file on USB.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'BACKUP',
        menuItems: [
          { label: 'Backup Name: MyBackup', selected: true },
          { label: 'INCLUDE PAD SAMPLE: OFF' },
          { label: 'INCLUDE KBD SAMPLE: OFF' },
        ],
        selectedIndex: 0,
        statusText: 'E1=RENAME  E2=PAD SAMPLE  E3=KBD SAMPLE',
      },
      tipText: 'Insert a USB drive before starting the backup process.',
    },
    {
      id: 'step-3',
      title: 'Configure Backup Options',
      instruction:
        'Press E2 to toggle INCLUDE PAD SAMPLE (includes pad sampler data in backup). Press E3 to toggle INCLUDE KBD SAMPLE (includes keyboard samples). Press E1 RENAME to change the backup filename from the default "MyBackup".',
      details:
        'Including samples makes the backup larger but ensures a complete restoration. Without samples, only settings, scenes, and tones are backed up. Give your backup a descriptive name — e.g., "LiveSet_2026" or "PreUpdate_Backup" — so you can identify it later.',
      highlightControls: ['function-e2', 'function-e3'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'menu',
        title: 'BACKUP',
        menuItems: [
          { label: 'Backup Name: MyBackup' },
          { label: 'INCLUDE PAD SAMPLE: ON', selected: true },
          { label: 'INCLUDE KBD SAMPLE: ON' },
        ],
        selectedIndex: 1,
        statusText: 'Include samples for complete backup',
      },
      tipText: 'Include both sample types for a complete backup before firmware updates.',
    },
    {
      id: 'step-4',
      title: 'Execute Backup',
      instruction:
        'Press E6 OK → a confirmation message appears → press E5 OK to execute the backup. Never turn off power while the "working" message is displayed. Press E6 CLOSE to return to SCENE SELECT when complete.',
      details:
        'The backup process writes all user memory settings and system memory settings to USB. If you included samples, the file will be larger and take longer. Wait for the completion message before touching anything.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        popupData: {
          popupType: 'confirm',
        },
        parameterName: 'Backup',
        parameterValue: 'Execute backup?',
      },
      tipText: 'Never turn off power during backup — data corruption may occur.',
    },
    {
      id: 'step-5',
      title: 'Start Restore',
      instruction:
        'From the UTILITY menu, touch RESTORE. The RESTORE screen lists backup files found on USB. Touch a backup file to select it.',
      details:
        'The RESTORE screen scans the USB drive for .svz backup files and displays them in a list. Select the backup you want to restore. If you have multiple backups, check the filename and date to find the right one.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'RESTORE',
        menuItems: [
          { label: 'USB MEMORY' },
          { label: 'MyBackup', selected: true },
        ],
        selectedIndex: 1,
        statusText: 'Select backup file to restore',
      },
      tipText: 'Name your backups descriptively so you can identify them easily.',
    },
    {
      id: 'step-6',
      title: 'Configure Restore Options',
      instruction:
        'After selecting a backup, press E2 to toggle APPLY PAD SAMPLE (restores pad samples) and E3 to toggle APPLY KBD SAMPLE (restores keyboard samples). WARNING: all current settings will be overwritten. Back up your current settings first if you want to keep them.',
      details:
        'Restoring overwrites ALL current user and system settings. If the backup included samples and you enable APPLY PAD/KBD SAMPLE, those samples are also restored. An estimated time is shown when sample restoration is selected.',
      highlightControls: ['function-e2', 'function-e3'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'RESTORE',
        menuItems: [
          { label: 'MyBackup (selected)' },
          { label: 'APPLY PAD SAMPLE: ON', selected: true },
          { label: 'APPLY KBD SAMPLE: ON' },
        ],
        selectedIndex: 1,
        statusText: 'WARNING: Current settings will be overwritten',
      },
      tipText: 'Always backup current settings before restoring a different backup.',
    },
    {
      id: 'step-7',
      title: 'Execute Restore',
      instruction:
        'Press E6 RESTORE → confirmation message → E5 OK. Wait for completion. Power off and on again when prompted. If APPLY PAD/KBD SAMPLE is selected, the estimated restore time is displayed.',
      details:
        'The restore process replaces all current settings and optionally samples with those from the backup file. A power cycle is required after restore to fully apply the changes. Do not turn off power during the restore process.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        popupData: {
          popupType: 'confirm',
        },
        parameterName: 'Restore',
        parameterValue: 'Execute restore?',
      },
      tipText: 'Power cycle the Fantom after restore completes for changes to take effect.',
    },
    {
      id: 'step-8',
      title: 'USB Memory Format',
      instruction:
        'From the UTILITY menu, touch USB MEMORY FORMAT. This is required for new USB drives before first use with the Fantom. Press E6 OK → confirmation → E5 OK. Warning: formatting erases all data on the USB drive.',
      details:
        'USB Memory Format initializes the USB drive for use with the Fantom. This creates the necessary folder structure (ROLAND/SOUND, etc.) and file system. Only format when using a new or unrecognized USB drive — formatting a drive with existing backups will delete them.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'USB MEMORY FORMAT',
        menuItems: [
          { label: 'Format USB flash drive?', selected: true },
        ],
        selectedIndex: 0,
        statusText: 'WARNING: All data on USB will be erased',
      },
      tipText: 'Only format new USB drives — formatting erases all existing data.',
    },
    {
      id: 'step-9',
      title: 'Factory Reset',
      instruction:
        'From the UTILITY menu, touch FACTORY RESET. This clears ALL internal memory. E1 APPLY PAD SAMPLE (also reset pad samples to factory). E2 APPLY KBD SAMPLE (also reset keyboard samples). E3 APPLY INT STORAGE (also reset internal storage). Press E6 OK → confirmation → E5 OK. Power off/on required. Internal Storage Initialize (separate option) clears only internal storage contents. Always backup before either operation.',
      details:
        'Factory Reset returns the Fantom to its original state — all user scenes, tones, and system settings are erased. The three checkboxes let you optionally also reset samples and internal storage. INTERNAL STORAGE INITIALIZE is a less destructive option that only clears the internal storage (samples, files) without touching scenes or system settings.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'FACTORY RESET',
        menuItems: [
          { label: 'This will clear all internal memory' },
          { label: 'APPLY PAD SAMPLE: OFF', selected: true },
          { label: 'APPLY KBD SAMPLE: OFF' },
          { label: 'APPLY INT STORAGE: OFF' },
        ],
        selectedIndex: 1,
        statusText: 'WARNING: All data will be lost — backup first',
      },
      tipText: 'Always create a full BACKUP to USB before performing a factory reset.',
    },
    {
      id: 'step-10',
      title: 'Backup & Reset Complete!',
      instruction:
        'Press EXIT to return home. Always backup to USB before factory resets or firmware updates. Keep multiple backups with descriptive names using RENAME. Regular backups protect your work against accidental data loss.',
      details:
        'Summary: BACKUP — saves everything to USB (.svz), optionally includes pad/kbd samples. RESTORE — loads backup, overwrites current settings, power cycle required. USB MEMORY FORMAT — prepares new USB drives. FACTORY RESET — clears all internal memory (with optional sample/storage reset). INTERNAL STORAGE INITIALIZE — clears only storage contents.',
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
        statusText: 'Backup and restore workflows configured',
      },
      tipText: 'Keep multiple dated backups — storage is cheap, your custom sounds are not.',
    },
  ],
};
