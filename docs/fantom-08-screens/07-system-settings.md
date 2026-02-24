# Fantom 08 Screen Catalog: System Settings, File Utility & Expansion

> Source: Roland Fantom-0 Series Reference Manual, Chapter 09: Settings (pp. 151-173)
> Currently implemented screen types: home, zone-view, key-range, write, menu, tone-select, effect

---

## Table of Contents

1. [Utility Menu](#utility-menu)
2. [Wave/Expansion Info Screens](#waveexpansion-info-screens)
3. [Import Screens](#import-screens)
4. [Export Screens](#export-screens)
5. [Backup Screen](#backup-screen)
6. [Restore Screen](#restore-screen)
7. [Wallpaper Screen](#wallpaper-screen)
8. [USB Memory Format Screen](#usb-memory-format-screen)
9. [Factory Reset Screen](#factory-reset-screen)
10. [Internal Storage Initialize Screen](#internal-storage-initialize-screen)
11. [USB Memory Unmount Popup](#usb-memory-unmount-popup)
12. [File Utility Screens](#file-utility-screens)
13. [System Settings Screens](#system-settings-screens)
14. [Expansion Screens](#expansion-screens)

---

## Utility Menu

### UTILITY MENU Screen
- **Manual Page**: p.158
- **Accessed Via**: [MENU] button > touch \<UTILITY\>
- **Screen Type**: main screen
- **Layout**: Grid of 10 large touch buttons arranged in two columns. Left column: WAVE/EXPANSION INFO, IMPORT, EXPORT, BACKUP, RESTORE, WALLPAPER. Right column: USB MEMORY FORMAT, FACTORY RESET, INTERNAL STORAGE INITIALIZE, USB MEMORY UNMOUNT. Back arrow in top-left.
- **Key Elements**: Title bar "UTILITY MENU", 10 labeled touch buttons, back arrow
- **Interactive Elements**: Each of the 10 menu items is a touchable button. Back arrow returns to MENU screen.
- **Currently Implemented?**: No
- **Notes**: This is the hub screen for all utility/maintenance functions. All Import, Export, Backup, Restore, and other utility operations are accessed from here.

---

## Wave/Expansion Info Screens

### WAVE/EXPANSION MEMORY INFO Screen
- **Manual Page**: p.152
- **Accessed Via**: [MENU] > \<UTILITY\> > \<WAVE/EXPANSION INFO\>
- **Screen Type**: main screen
- **Layout**: Title bar "WAVE/EXPANSION MEMORY INFO" with back arrow. Two horizontal bar graphs showing storage usage: "Kbd Sample" on the left, "Expansion" on the right. Below the bars, "Free Space" is shown (e.g., "89 MB / 256 MB"). Bottom bar has two buttons: [E1] KBD SMPL OPTIMIZE and [E6] EXPANSION INFO.
- **Key Elements**: Kbd Sample usage bar (with MB label), Expansion usage bar (with MB label), Free Space readout
- **Interactive Elements**: [E1] KBD SMPL OPTIMIZE (optimizes Kbd sample memory, triggers confirmation popup), [E6] EXPANSION INFO (navigates to EXPANSION INFO screen)
- **Currently Implemented?**: No
- **Notes**: Optimization shows a "working.." message and should not be interrupted. The two bar graphs use different colors to distinguish Kbd Sample vs Expansion storage.

### EXPANSION INFO Screen
- **Manual Page**: p.152
- **Accessed Via**: WAVE/EXPANSION MEMORY INFO screen > [E6] EXPANSION INFO
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPANSION INFO" with back arrow. Scrollable list of installed expansion packs, each showing a colored status indicator (e.g., "INST") and pack name (e.g., "EX2001: Stage Piano 1", "EX2002: Stage Piano 2", "EX2003: Session Drums", etc.).
- **Key Elements**: List of expansion packs with colored status badges, expansion pack names with EX-number identifiers
- **Interactive Elements**: Scrollable list (touch or [E1] knob to scroll). Each entry may be selectable for details.
- **Currently Implemented?**: No
- **Notes**: Some content may not be installable even if free memory is available, per the manual's NOTE.

---

## Import Screens

### IMPORT MENU Screen
- **Manual Page**: p.152-153 (implied)
- **Accessed Via**: [MENU] > \<UTILITY\> > \<IMPORT\>
- **Screen Type**: sub-screen
- **Layout**: Menu with three import options: IMPORT TONE, IMPORT SCENE, IMPORT SAMPLE. (Not shown as a screenshot but described as "The IMPORT MENU appears")
- **Key Elements**: Three touch options for different import types
- **Interactive Elements**: Touch each option to navigate to corresponding import workflow
- **Currently Implemented?**: No
- **Notes**: Requires a USB flash drive to be connected.

### IMPORT TONE - Select File Screen (IMPORT Z-Core / SELECT FILE)
- **Manual Page**: p.152
- **Accessed Via**: IMPORT MENU > \<IMPORT TONE\> > select tone type
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT Z-Core (SELECT FILE)" with back arrow. File browser showing folder tree structure: Root > ROLAND > USB > ROLAND > SOUND, with .svz files listed. Right side shows metadata: "Number of tones and drum kits in the .svz file". Bottom bar has scroll control and [E6] SELECT button.
- **Key Elements**: Folder tree browser with expandable/collapsible directories, .svz file entries, file metadata info area
- **Interactive Elements**: Touch folders to expand/collapse, touch files to select, [E1] scroll up/down, [E6] SELECT to confirm selection
- **Currently Implemented?**: No
- **Notes**: For drum kit import, touch \<IMPORT DRUM\> instead. File browser supports typical tree navigation with expand/collapse.

### IMPORT TONE - Select Source Screen (IMPORT Z-Core / SELECT SOURCE)
- **Manual Page**: p.153
- **Accessed Via**: IMPORT TONE Select File screen > [E6] SELECT
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT Z-Core (SELECT SOURCE)" with back arrow. Header shows "Multi Select: [SHIFT] + Touch checkbox". Top-right shows "Number marked / Number of items" (e.g., "Select: 1__/2"). Scrollable list of tones with checkboxes on the left, tone names in center. Color-coded: tones used in a scene have distinct coloring, tones already imported have different coloring. Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E5] with SAMPLE, [E6] NEXT.
- **Key Elements**: Checkbox list of tones, tone names (e.g., "0001:#Shri Ambi Lite", "0002:#Dreaming_LtB"), color-coded scene usage and import status indicators, count display
- **Interactive Elements**: Touch checkboxes to select/deselect tones, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E5] with SAMPLE (includes Kbd samples), [E6] NEXT, SHIFT+touch for multi-select
- **Currently Implemented?**: No
- **Notes**: Tones used in a scene are highlighted with a distinct color. Tones already imported are shown differently. This is a multi-step wizard pattern.

### IMPORT TONE - Select Destination Screen (IMPORT Z-Core / SELECT DESTINATION)
- **Manual Page**: p.153
- **Accessed Via**: IMPORT TONE Select Source screen > [E6] NEXT
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT Z-Core (SELECT DESTINATION)" with back arrow. Header shows "Multi Select: [SHIFT] + Touch checkbox" and "Number marked / Number of items" (e.g., "Select: 17/47/2048"). Scrollable list of user tones in the FANTOM with checkboxes. Color-coded indicators for tones used in a scene (teal) vs. already imported (highlighted). Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] EXECUTE.
- **Key Elements**: Checkbox list of destination user tone slots (e.g., "0001:#Shri Ambi Lite", "0008:INITIAL TONE"), "New" indicator for available slots, count display
- **Interactive Elements**: Touch checkboxes to select destination slots, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] EXECUTE (triggers confirmation popup)
- **Currently Implemented?**: No
- **Notes**: Selected import-destination user tones are overwritten. Confirmation popup appears before execution with OK/CANCEL.

### IMPORT SCENE - Select File Screen (IMPORT SCENE / SELECT FILE)
- **Manual Page**: p.153
- **Accessed Via**: IMPORT MENU > \<IMPORT SCENE\>
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT SCENE (SELECT FILE)" with back arrow. File browser showing folder tree: Root > ROLAND > SOUND > EXPORT_SCENE, plus USB. Right side annotation shows "Number of scenes in the folder". A "DIR" indicator appears for folders. Bottom bar: [E1] scroll, [E6] SELECT.
- **Key Elements**: Folder tree browser, folder/file entries, scene count metadata
- **Interactive Elements**: Touch folders to expand, touch files to select, [E1] scroll, [E6] SELECT
- **Currently Implemented?**: No
- **Notes**: Can import data exported by EXPORT SCENE function, or from a backup file created by BACKUP function.

### IMPORT SCENE - Select Source Screen (IMPORT SCENE / SELECT SOURCE)
- **Manual Page**: p.154
- **Accessed Via**: IMPORT SCENE Select File > [E6] SELECT
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT SCENE (SELECT SOURCE)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display. Scrollable list of scenes with checkboxes (e.g., "S001:Homecoming", "S002:MKI Treasures", "S003:Ultimate StrSect"). Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] NEXT. SHIFT+touch for batch select.
- **Key Elements**: Checkbox list of scenes, scene names with S-numbers
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] NEXT, SHIFT+touch for multi-select
- **Currently Implemented?**: No
- **Notes**: Identical multi-select pattern as Import Tone.

### IMPORT SCENE - Select Destination Screen (IMPORT SCENE / SELECT DESTINATION)
- **Manual Page**: p.154
- **Accessed Via**: IMPORT SCENE Select Source > [E6] NEXT
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT SCENE (SELECT DESTINATION)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display (e.g., "Select: 2/8/512"). Scrollable list of scene slots with checkboxes. Default selected scenes are "INITIAL SCENE" entries (e.g., "C026:INITIAL SCENE" through "C033:INITIAL SCENE"). Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] EXECUTE.
- **Key Elements**: Checkbox list of destination scene slots, INITIAL SCENE entries selected by default, count readout
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] EXECUTE (triggers confirmation), SHIFT+touch for batch
- **Currently Implemented?**: No
- **Notes**: Scene in the selected import-destination is overwritten. By default, INITIAL SCENE slots are auto-selected. Tones and drums used in imported scenes are also imported together. Confirmation popup with OK/CANCEL.

### IMPORT SAMPLE - Select File Screen (IMPORT SAMPLE / SELECT FILE)
- **Manual Page**: p.154
- **Accessed Via**: IMPORT MENU > \<IMPORT SAMPLE\>
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT SAMPLE (SELECT FILE)" with back arrow. File browser showing folder tree: Root > ROLAND > FANTOM > SOUND, with .svz files and "System Volume Information" folder. Right side shows "Number of samples in the file". Bottom bar: [E1] scroll, [E6] SELECT.
- **Key Elements**: Folder tree browser, .svz sample files, sample count metadata
- **Interactive Elements**: Touch folders to expand, touch files to select, [E1] scroll, [E6] SELECT
- **Currently Implemented?**: No
- **Notes**: Imports data exported using EXPORT SAMPLE function.

### IMPORT SAMPLE - Select Source Screen (IMPORT SAMPLE / SELECT SOURCE)
- **Manual Page**: p.154-155
- **Accessed Via**: IMPORT SAMPLE Select File > [E6] SELECT
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT SAMPLE (SELECT SOURCE)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display. Table columns: No., Name, Ch, Size. Sample entries listed with checkboxes (e.g., "0001 AnalogBlip_1 ... 5 ... 34KB"). Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E4] PREVIEW, [E6] NEXT.
- **Key Elements**: Checkbox list of samples with columns for number, name, channel count, file size
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E4] PREVIEW (plays selected sample), [E6] NEXT, SHIFT+touch for batch
- **Currently Implemented?**: No
- **Notes**: PREVIEW function lets you audition samples before importing. SHIFT+touch selects multiple contiguous items.

### IMPORT SAMPLE - Select Destination Screen (IMPORT SAMPLE / SELECT DESTINATION)
- **Manual Page**: p.155
- **Accessed Via**: IMPORT SAMPLE Select Source > [E6] NEXT
- **Screen Type**: sub-screen
- **Layout**: Title bar "IMPORT SAMPLE (SELECT DESTINATION)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display (e.g., "Select: 2/3"). Scrollable list of sample destination slots with checkboxes (e.g., "0001", "000b", "0010", "0011", etc.). Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] EXECUTE.
- **Key Elements**: Checkbox list of destination sample slots (numbered), INITIAL SAMPLE entries selected by default
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] EXECUTE (triggers confirmation)
- **Currently Implemented?**: No
- **Notes**: Selected import-destination sample is overwritten. INITIAL SAMPLE slots are auto-selected by default. Confirmation popup with OK/CANCEL before execution.

---

## Export Screens

### EXPORT MENU Screen
- **Manual Page**: p.155 (implied)
- **Accessed Via**: [MENU] > \<UTILITY\> > \<EXPORT\>
- **Screen Type**: sub-screen
- **Layout**: Menu with three export options: EXPORT TONE, EXPORT SCENE, EXPORT SAMPLE. (Described as "The EXPORT MENU appears")
- **Key Elements**: Three touch options for different export types
- **Interactive Elements**: Touch each option to navigate to corresponding export workflow
- **Currently Implemented?**: No
- **Notes**: Requires a USB flash drive to be connected.

### EXPORT TONE - Select Source Screen (EXPORT Z-Core / SELECT SOURCE)
- **Manual Page**: p.155
- **Accessed Via**: EXPORT MENU > \<EXPORT TONE\>
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPORT Z-Core (SELECT SOURCE)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display (e.g., "Select: 2048/2048"). Scrollable list of tones with checkboxes. Color coding: tones used in a scene shown in teal, tones already imported shown with "Ext" label, new tones labeled "New". Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] NEXT.
- **Key Elements**: Checkbox list of all user tones, color-coded indicators for scene usage and export status
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] NEXT, SHIFT+touch for batch
- **Currently Implemented?**: No
- **Notes**: To export a drum tone, touch \<EXPORT DRUM\>. VTW or SuperNATURAL sounds cannot be exported.

### EXPORT TONE - Select Destination Screen (EXPORT Z-Core / SELECT DESTINATION)
- **Manual Page**: p.155
- **Accessed Via**: EXPORT TONE Select Source > [E6] NEXT
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPORT Z-Core (SELECT DESTINATION)" with back arrow. Shows "Export Name" field (e.g., "EXPORT_Z-Core"). File browser showing destination folder tree: Root > ROLAND > SOUND > USB. Bottom bar: [E1] scroll to select save-destination, [E2] RENAME (edit filename), [E6] EXECUTE.
- **Key Elements**: Export name field (editable), folder tree browser for save destination
- **Interactive Elements**: [E1] knob to select save-destination folder, [E2] RENAME (opens RENAME screen to edit filename), [E6] EXECUTE (triggers confirmation), touch folders to navigate
- **Currently Implemented?**: No
- **Notes**: Confirmation popup with OK/CANCEL before export. Exported as .svz file. Can also be loaded by other ZEN-Core modules (e.g., Jupiter-Xm).

### EXPORT SCENE - Select Source Screen (EXPORT SCENE / SELECT SOURCE)
- **Manual Page**: p.156
- **Accessed Via**: EXPORT MENU > \<EXPORT SCENE\>
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPORT SCENE (SELECT SOURCE)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display (e.g., "Select: 0/512"). Scrollable list of scenes with checkboxes (e.g., "A001:Homecoming", "A002:MKI Treasures"). Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] NEXT. SHIFT+touch for batch.
- **Key Elements**: Checkbox list of all scenes, scene names with A/B/C/D bank prefixes
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E3] SELECT ALL, [E6] NEXT, SHIFT+touch for batch
- **Currently Implemented?**: No
- **Notes**: Data for the tones and drums used in the exported scenes is also exported together.

### EXPORT SCENE - Select Destination Screen (EXPORT SCENE / SELECT DESTINATION)
- **Manual Page**: p.156
- **Accessed Via**: EXPORT SCENE Select Source > [E6] NEXT
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPORT SCENE (SELECT DESTINATION)" with back arrow. Shows "Export Name" field (e.g., "EXPORT_SCENE"). Folder tree browser for save destination: Root > ROLAND > SOUND > USB. Bottom bar: [E1] scroll, [E2] RENAME, [E6] EXECUTE.
- **Key Elements**: Export name field (editable), folder tree browser
- **Interactive Elements**: [E1] knob to select save-destination, [E2] RENAME (edit filename), [E6] EXECUTE (triggers confirmation)
- **Currently Implemented?**: No
- **Notes**: Confirmation popup with OK/CANCEL. Exported as folder/file on USB drive.

### EXPORT SAMPLE - Select Source Screen (EXPORT SAMPLE / SELECT SOURCE)
- **Manual Page**: p.157
- **Accessed Via**: EXPORT MENU > \<EXPORT SAMPLE\>
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPORT SAMPLE (SELECT SOURCE)" with back arrow. Header: "Multi Select: [SHIFT] + Touch checkbox", count display (e.g., "Select: 0/8000"). Table columns: No., Name, Ch, Size. Sample entries with checkboxes, preview button shown. Bottom bar: [E1] scroll, [E2] CLEAR ALL, [E4] PREVIEW, [E6] NEXT. Touch checkbox while holding SHIFT for batch.
- **Key Elements**: Checkbox list of samples with number, name, channel count, size columns
- **Interactive Elements**: Touch checkboxes, [E1] scroll, [E2] CLEAR ALL, [E4] PREVIEW (audition sample), [E6] NEXT, SHIFT+touch for batch
- **Currently Implemented?**: No
- **Notes**: Can export up to 1000 samples at a time.

### EXPORT SAMPLE - Select Destination Screen (EXPORT SAMPLE / SELECT DESTINATION)
- **Manual Page**: p.157
- **Accessed Via**: EXPORT SAMPLE Select Source > [E6] NEXT
- **Screen Type**: sub-screen
- **Layout**: Title bar "EXPORT SAMPLE (SELECT DESTINATION)" with back arrow. Shows "Export Name" field (e.g., "EXPORT_SAMPLE"). Folder tree browser: Root > ROLAND > FANTOM > SOUND > System Volume Information. Bottom bar: [E1] scroll, [E2] RENAME, [E6] EXECUTE.
- **Key Elements**: Export name field (editable), folder tree browser for save destination
- **Interactive Elements**: [E1] scroll to select save-destination, [E2] RENAME (edit filename), [E6] EXECUTE (triggers confirmation)
- **Currently Implemented?**: No
- **Notes**: Confirmation popup with OK/CANCEL. To cancel, touch [E6] CANCEL.

---

## Backup Screen

### BACKUP Screen
- **Manual Page**: p.158
- **Accessed Via**: [MENU] > \<UTILITY\> > \<BACKUP\>
- **Screen Type**: main screen
- **Layout**: Title bar "BACKUP" with back arrow. Center of screen shows "Backup Name" field with editable name (default: "MyBackup"). Below it: "Writes the backup data to USB memory." Bottom bar: [E1] RENAME, [E2] INCLUDE PAD SAMPLE (checkbox), [E3] INCLUDE KBD SAMPLE (checkbox), [E5] CANCEL, [E6] OK.
- **Key Elements**: Backup name field (editable, default "MyBackup"), descriptive text, two checkbox options for including samples
- **Interactive Elements**: [E1] RENAME (opens RENAME screen to edit backup filename), [E2] INCLUDE PAD SAMPLE (checkbox toggle), [E3] INCLUDE KBD SAMPLE (checkbox toggle), [E5] CANCEL, [E6] OK (triggers confirmation popup)
- **Currently Implemented?**: No
- **Notes**: Backs up user memory settings (scenes, user tones, user rhythm groups) and system memory settings. If same filename exists on USB, it is overwritten. Confirmation popup with OK/CANCEL. After completion, [E6] CLOSE returns to SCENE SELECT screen. Never turn off power while "working.." is displayed.

---

## Restore Screen

### RESTORE Screen
- **Manual Page**: p.159
- **Accessed Via**: [MENU] > \<UTILITY\> > \<RESTORE\>
- **Screen Type**: main screen
- **Layout**: Title bar "RESTORE" with back arrow. Shows "USB MEMORY" label. Lists available backup files on USB drive (e.g., "MyBackup"). Bottom bar: [E1] scroll, [E2] APPLY PAD SAMPLE (checkbox), [E3] APPLY KBD SAMPLE (checkbox), [E5] CANCEL, [E6] RESTORE.
- **Key Elements**: List of backup files on USB, two checkbox options for restoring samples
- **Interactive Elements**: Touch backup file to select, [E1] scroll, [E2] APPLY PAD SAMPLE (checkbox toggle - restores pad samples), [E3] APPLY KBD SAMPLE (checkbox toggle - restores Kbd samples), [E5] CANCEL, [E6] RESTORE (triggers confirmation popup)
- **Currently Implemented?**: No
- **Notes**: WARNING: When restoring, all settings currently saved in the FANTOM will disappear. Back up current settings first if needed. If APPLY PAD SAMPLE or APPLY KBD SAMPLE is selected, an estimated time is shown in the confirmation screen. Confirmation popup with OK/CANCEL.

---

## Wallpaper Screen

### WALLPAPER Screen
- **Manual Page**: p.161
- **Accessed Via**: [MENU] > \<UTILITY\> > \<WALLPAPER\>
- **Screen Type**: main screen
- **Layout**: Title bar "WALLPAPER" with back arrow. Center shows the selected wallpaper preview with name and number (e.g., "PreBision 11"). Bottom bar: [E2] Alpha (brightness, default 160), [E3] R (red hue, default 25), [E4] G (green hue, default 25), [E5] B (blue hue, default 25).
- **Key Elements**: Wallpaper preview image, wallpaper name/number, RGBA adjustment knobs
- **Interactive Elements**: [VALUE] dial to select wallpaper, [E2] Alpha (adjusts brightness 0-255), [E3] R (adjusts red hue), [E4] G (adjusts green hue), [E5] B (adjusts blue hue). Press [EXIT] to exit.
- **Currently Implemented?**: No
- **Notes**: Changes background image of SCENE SELECT and edit screens. Wallpaper settings are saved automatically when exiting. The screenshot shows a SCENE SELECT screen with the wallpaper applied in the background behind the scene grid.

---

## USB Memory Format Screen

### USB MEMORY FORMAT Screen
- **Manual Page**: p.159
- **Accessed Via**: [MENU] > \<UTILITY\> > \<USB MEMORY FORMAT\>
- **Screen Type**: popup / confirmation screen
- **Layout**: Confirmation dialog: "Are you sure?" with [E6] OK and a CANCEL option.
- **Key Elements**: Confirmation message, OK/CANCEL buttons
- **Interactive Elements**: [E6] OK (triggers second confirmation popup), [E5] CANCEL. Second confirmation: [E5] OK to execute, [E6] CANCEL.
- **Currently Implemented?**: No
- **Notes**: Formats (initializes) a USB flash drive for use with the FANTOM. Must format before first use. Never turn off power or remove USB while "working.." is shown. Uses commercially available USB flash drives (not all may be compatible).

---

## Factory Reset Screen

### FACTORY RESET Screen
- **Manual Page**: p.160
- **Accessed Via**: [MENU] > \<UTILITY\> > \<FACTORY RESET\>
- **Screen Type**: popup / confirmation screen
- **Layout**: Title bar "FACTORY RESET" with back arrow. Large warning area: "This will clear all the internal memory contents. Are you sure?" Bottom bar: [E1] APPLY PAD SAMPLE (checkbox), [E2] APPLY KBD SAMPLE (checkbox), [E3] APPLY INTERNAL STORAGE (checkbox), [E5] CANCEL, [E6] OK.
- **Key Elements**: Warning message, three checkboxes for optional resets, OK/CANCEL
- **Interactive Elements**: [E1] APPLY PAD SAMPLE (checkbox - resets pad sample data to factory), [E2] APPLY KBD SAMPLE (checkbox - resets Kbd sample data to factory), [E3] APPLY INTERNAL STORAGE (checkbox - resets internal storage to factory), [E5] CANCEL, [E6] OK (triggers confirmation popup, then [E5] OK to execute)
- **Currently Implemented?**: No
- **Notes**: WARNING: All data in the unit will be lost. Back up any data you want to keep to USB first. After execution, display shows "Completed. Please Power Off!" - must turn power off and on again. Never turn off power while factory reset is in progress.

---

## Internal Storage Initialize Screen

### INTERNAL STORAGE INITIALIZE Screen
- **Manual Page**: p.160
- **Accessed Via**: [MENU] > \<UTILITY\> > \<INTERNAL STORAGE INITIALIZE\>
- **Screen Type**: popup / confirmation screen
- **Layout**: Title bar "INTERNAL STORAGE INITIALIZE" with back arrow. Warning area with multi-line text: "This will clear all INTERNAL STORAGE contents and restore the factory contents. If INTERNAL STORAGE contains important data, backup using 'File Utility' function first. Are you sure?" Bottom bar: [E5] CANCEL, [E6] OK.
- **Key Elements**: Multi-line warning message about data loss, CANCEL/OK buttons
- **Interactive Elements**: [E5] CANCEL, [E6] OK (triggers second confirmation popup, then [E5] OK to execute)
- **Currently Implemented?**: No
- **Notes**: Returns internal storage contents to factory-set condition. If internal storage contains user-sampled data, it will be lost. Never turn off power while initialization is in progress.

---

## USB Memory Unmount Popup

### USB Memory Unmount Confirmation Popup
- **Manual Page**: p.157
- **Accessed Via**: [MENU] > \<UTILITY\> > \<USB MEMORY UNMOUNT\>
- **Screen Type**: popup / overlay
- **Layout**: Popup dialog overlaid on the UTILITY MENU screen (dimmed background). Title: "USB Memory Unmount". Text: "Are you sure?" Two buttons: OK and CANCEL.
- **Key Elements**: Popup title, confirmation text, OK/CANCEL buttons
- **Interactive Elements**: [E5] OK (safely ejects USB drive, returns to UTILITY MENU), [E6] CANCEL (dismisses popup)
- **Currently Implemented?**: No
- **Notes**: Safely removes USB flash drive. After unmounting, disconnect the USB drive from the FANTOM and connect it to a computer.

---

## File Utility Screens

### FILE UTILITY Screen
- **Manual Page**: p.162
- **Accessed Via**: [MENU] > \<FILE UTILITY\>
- **Screen Type**: main screen
- **Layout**: Title bar "FILE UTILITY" with back arrow. Two tabs at top: "USB MEMORY" and "INTERNAL STORAGE" (touch to switch). Main area: file/folder tree browser showing directory structure (e.g., Root > ROLAND > USB). Bottom bar: [E1] scroll, [E2] RENAME, [E3] DELETE, [E4] COPY, [E5] MOVE, [E6] CREATE FOLDER.
- **Key Elements**: Two storage tabs (USB MEMORY / INTERNAL STORAGE), file/folder tree browser, six operation buttons at bottom
- **Interactive Elements**: Touch tabs to switch between USB and internal storage. Touch files/folders to select (SHIFT+touch for multi-select). [E1] knob or arrow buttons to scroll and select. [ENTER] button expands/collapses folder. [>] expands folder, [<] collapses. [EXIT] returns to previous screen. Bottom bar operations: [E2] RENAME, [E3] DELETE, [E4] COPY, [E5] MOVE, [E6] CREATE FOLDER.
- **Currently Implemented?**: No
- **Notes**: Cannot handle files/folders with special characters: `* . / : ; < > ? \ |` or double-byte characters. Do not modify the ROLAND folder structure. Changing file extensions (e.g., .wav) will prevent import functions from recognizing the files.

### FILE UTILITY - RENAME Screen
- **Manual Page**: p.162
- **Accessed Via**: FILE UTILITY > select file/folder > [E2] RENAME
- **Screen Type**: popup / overlay
- **Layout**: Standard RENAME screen (same as described on p.16 of the manual). Text input field with on-screen keyboard or VALUE dial for character entry.
- **Key Elements**: Filename text field, character input controls
- **Interactive Elements**: Standard name editing controls, [E6] OK to confirm, [E5] CANCEL to abort
- **Currently Implemented?**: No
- **Notes**: Same RENAME screen used throughout the FANTOM (scene naming, backup naming, etc.). Never turn off power or remove USB while "working.." is shown.

### FILE UTILITY - DELETE Confirmation Popup
- **Manual Page**: p.162
- **Accessed Via**: FILE UTILITY > select file/folder > [E3] DELETE
- **Screen Type**: popup / overlay
- **Layout**: Confirmation popup: "Are you sure?" with OK and CANCEL options.
- **Key Elements**: Confirmation message, OK/CANCEL
- **Interactive Elements**: [E5] OK (deletes file/folder), [E6] CANCEL (dismisses popup)
- **Currently Implemented?**: No
- **Notes**: Take care not to inadvertently delete important data. Never turn off power or remove USB while "working.." is shown.

### FILE UTILITY - COPY Destination Screen (FILE UTILITY / COPY DESTINATION)
- **Manual Page**: p.163
- **Accessed Via**: FILE UTILITY > select file/folder > [E4] COPY
- **Screen Type**: sub-screen
- **Layout**: Title bar "FILE UTILITY (COPY DESTINATION)". Folder tree browser for selecting copy destination. Bottom bar has [E6] SELECT.
- **Key Elements**: Folder tree browser for destination selection
- **Interactive Elements**: Touch folder to select destination, [E6] SELECT to execute copy
- **Currently Implemented?**: No
- **Notes**: Never turn off power or remove USB while "working.." is shown.

### FILE UTILITY - MOVE Destination Screen (FILE UTILITY / MOVE DESTINATION)
- **Manual Page**: p.163
- **Accessed Via**: FILE UTILITY > select file/folder > [E5] MOVE
- **Screen Type**: sub-screen
- **Layout**: Title bar "FILE UTILITY (MOVE DESTINATION)". Folder tree browser for selecting move destination. Bottom bar has [E6] SELECT.
- **Key Elements**: Folder tree browser for destination selection
- **Interactive Elements**: Touch folder to select destination, [E6] SELECT to execute move
- **Currently Implemented?**: No
- **Notes**: Never turn off power or remove USB while "working.." is shown.

### FILE UTILITY - CREATE FOLDER (via RENAME Screen)
- **Manual Page**: p.163
- **Accessed Via**: FILE UTILITY > select parent folder > [E6] CREATE FOLDER
- **Screen Type**: popup / overlay
- **Layout**: Opens the standard RENAME screen for naming the new folder.
- **Key Elements**: Folder name text field, character input
- **Interactive Elements**: Standard name editing controls, [E6] OK to confirm, [E5] CANCEL to abort
- **Currently Implemented?**: No
- **Notes**: Can create nested folders inside existing folders. Never turn off power or remove USB while "working.." is shown.

---

## System Settings Screens

### SYSTEM Screen (Main)
- **Manual Page**: p.164
- **Accessed Via**: [MENU] > \<SYSTEM\>
- **Screen Type**: main screen
- **Layout**: Title bar "SYSTEM" with back arrow, followed by status bar showing ZONE1, instrument icon, tone name (e.g., "Classic Piano"), and SAMPLE PAD indicator. Below the title, two-column layout: left column has vertical tabs (GENERAL, KEYBOARD, PEDAL, WHEEL 1/2, S1/S2, SLIDER, KNOB, USB, MIDI, SOUND, SYNC/TEMPO, SEQUENCER, CLICK, NOTE PAD, CONTROL, LICENSE, INFO). Right column shows the parameter list for the selected tab with parameter names on the left and values on the right, scrollable.
- **Key Elements**: Tab list (17 tabs), parameter list with names and editable values, status bar
- **Interactive Elements**: [E1] scrolls up/down through tabs, [E2] scrolls cursor up/down within parameter list, [E6] edits the value of the parameter selected by cursor. Touch tabs on the left to switch. Press [WRITE] button to save system settings.
- **Currently Implemented?**: No
- **Notes**: The SYSTEM screen is a tabbed settings interface. Saving is done via the [WRITE] button which shows a "Completed" indication. All system settings are organized into 17 tabs. This is the central hub for all hardware configuration.

### SYSTEM - GENERAL Tab
- **Manual Page**: p.164
- **Accessed Via**: SYSTEM screen > GENERAL tab (default)
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list with the following settings displayed as name-value pairs in a scrollable list.
- **Key Elements**:
  - Auto Off: OFF, 30, 240
  - USB Driver: VENDOR, GENERIC
  - File Verify: OFF, ON
  - LCD Brightness: 1-20
  - LED Brightness: OFF, 1-5, MAX (default)
  - WHEEL LED Brightness: OFF, 1-5, MAX (default)
  - Zone Sw Indicator: OFF, ON (default)
  - Zone Int/Ext Control: BASIC, ADVANCED
  - Encoder Speed: SLOW, NORMAL, FAST (default)
  - Scene Remain: OFF (default), ON
  - Startup Scene: A001-D128
  - Pad Mode: (p.104)
  - Time Stamp: Year/Month/Day/Hour/Minute
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value, touch to select
- **Currently Implemented?**: No
- **Notes**: Scene Remain ON means the previous scene's sound carries over when switching scenes (zones 9-16 do not make sound when ON). Time Stamp sets the date/time used for file timestamps, edited via a popup window using [E1]-[E5] knobs, confirmed with [E6] CLOSE.

### SYSTEM - KEYBOARD Tab
- **Manual Page**: p.165
- **Accessed Via**: SYSTEM screen > KEYBOARD tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for keyboard settings.
- **Key Elements**:
  - Keyboard Velocity: REAL, 1-127
  - Keyboard Velocity Curve: LIGHT, MEDIUM, HEAVY
  - Keyboard Velocity Curve Offset: -10 to +9
  - Arpeggio Trigger: OFF, BEAT, MEAS
  - Arpeggio Switch Mode: OFF/ON, OFF/ON & ARP SCREEN
  - Chord Memory Switch Mode: OFF/ON, OFF/ON & CHD SCREEN
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Velocity Curve affects how hard you need to press keys. LIGHT = easier to reach fortissimo, HEAVY = more dynamic control needed. Arpeggio Switch Mode with "& ARP SCREEN" also opens the arpeggio screen when toggled. Same pattern for Chord Memory.

### SYSTEM - PEDAL Tab
- **Manual Page**: p.165
- **Accessed Via**: SYSTEM screen > PEDAL tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for pedal settings, organized into sections: main settings, Control Pedal settings, Hold Pedal settings.
- **Key Elements**:
  - Pedal Assign Source: SYS, SCENE
  - **Control Pedal section:**
    - Pedal1, 2 Polarity: STANDARD, REVERSE
    - Pedal1, 2 Assign: OFF, CC01-31, 33-95, BEND DOWN, BEND UP, AFT, START/STOP, TAP TEMPO, SCENE DOWN, SCENE UP, OCT DOWN, OCT UP, ARPEGGIO SW, CHORD MEM SW, DEC, INC
    - Pedal1, 2 Range Min: 0-127
    - Pedal1, 2 Range Max: 0-127
  - **Hold Pedal section:**
    - Hold Pedal Polarity: STANDARD, REVERSE
    - Continuous Hold Pedal: OFF, ON
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Pedal Assign Source determines whether pedal functions come from system settings (SYS) or scene settings (SCENE). Continuous Hold Pedal enables half-pedaling for damper pedals like DP-10.

### SYSTEM - WHEEL 1/2 Tab
- **Manual Page**: p.166
- **Accessed Via**: SYSTEM screen > WHEEL 1/2 tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for wheel settings.
- **Key Elements**:
  - Wheel Assign Source: SYS, SCENE
  - **Assignable section:**
    - Wheel1-2 Assign: OFF, CC01-31, 33-95, BEND, AFT
    - Wheel1-2 Range Min: 0-127
    - Wheel1-2 Range Max: 0-127
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Controls the pitch bend and modulation wheels. Wheel Assign Source determines whether wheel functions come from system (SYS) or scene (SCENE).

### SYSTEM - S1/S2 Tab
- **Manual Page**: p.166-167
- **Accessed Via**: SYSTEM screen > S1/S2 tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for [S1] and [S2] button settings.
- **Key Elements**:
  - S1, S2 Assign Source: SYS, SCENE
  - **Assignable section:**
    - S1, S2 Switch Assign: OFF, CC01-31, 33-95, BEND DOWN, BEND UP, AFT, MONO/POLY, MFX SW, EQ SW, IFX1 SW, IFX2 SW, CHORUS SW, REVERB SW, MASTER COMP SW, MASTER EQ SW, VOCODER SW, SCENE DOWN, SCENE UP, DEC, INC, START/STOP, GROUP PLAY DOWN, GROUP PLAY UP, SONG LOOP SW, TFX SW, MASTER KEY DOWN -1, MASTER KEY UP +1, SCALE TUNE SW, VTW ROTARY SPEED, VTW ROTARY BRAKE, VTW ROTARY SW, VTW OVERDRIVE SW, VTW WHEEL BRAKE, VTW VIB/CHO SW, VTW HARMONIC BAR
    - S1, S2 Switch Mode: MOMENTARY, LATCH
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: MOMENTARY = effect applied only while holding the button. LATCH = toggles on/off each press. VTW-related assignments are for Virtual ToneWheel organ sounds. S1/S2 buttons are on the front panel. Harmonic bar settings only apply to [S1]-[S3] buttons.

### SYSTEM - SLIDER Tab
- **Manual Page**: p.167
- **Accessed Via**: SYSTEM screen > SLIDER tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for slider settings.
- **Key Elements**:
  - Slider Mode: DIRECT, CATCH
  - **Assignable section:**
    - Slider1-8 Assign: OFF, CC01-31, 33-95, BEND, AFT
    - Slider1-8 Range Min: 0-127
    - Slider1-8 Range Max: 0-127
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: DIRECT mode = slider always outputs at its current position. CATCH mode = slider only outputs after it passes through the current parameter value (prevents jumps).

### SYSTEM - KNOB Tab
- **Manual Page**: p.167
- **Accessed Via**: SYSTEM screen > KNOB tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for control knob settings.
- **Key Elements**:
  - Knob Mode: DIRECT, CATCH
  - **Assignable section:**
    - Knob1-8 Assign: OFF, CC01-31, 33-95, BEND, AFT
    - Knob1-8 Range Min: 0-127
    - Knob1-8 Range Max: 0-127
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Same DIRECT/CATCH behavior as sliders. Applies to the 8 control knobs on the panel.

### SYSTEM - USB Tab (USB AUDIO)
- **Manual Page**: p.167
- **Accessed Via**: SYSTEM screen > USB tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list organized into Input and Output sections.
- **Key Elements**:
  - USB Audio Mix/Parallel: MIX, PARALLEL
  - **Input section:**
    - USB Audio Input Switch: OFF, ON
    - USB Audio Input Level: 0-127
  - **Output section:**
    - USB Audio Output Switch: OFF, ON
    - USB Audio Output Level: 0-127
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: MIX mode = all channels mixed to 1-2 for stereo recording. PARALLEL mode = individual channel output for multi-channel recording.

### SYSTEM - MIDI Tab
- **Manual Page**: p.167-168
- **Accessed Via**: SYSTEM screen > MIDI tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list organized into Transmit, Receive, and general MIDI sections.
- **Key Elements**:
  - Device ID: 17-32
  - Scene Control Channel: 1-16, OFF
  - USB-MIDI Thru: OFF, ON
  - Remote Keyboard Switch: OFF, ON
  - **Transmit section:**
    - Transmit Program Change: OFF, ON
    - Transmit Bank Select: OFF, ON
    - Transmit Active Sensing: OFF, ON
    - Transmit Edit Data: OFF, ON
  - **Receive section:**
    - Soft Through: OFF, ON
    - Receive Program Change: OFF, ON
    - Receive Bank Select: OFF, ON
    - Receive Exclusive: OFF, ON
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: USB-MIDI Thru ON re-transmits USB IN messages to MIDI OUT. Remote Keyboard Switch ON = use external MIDI keyboard instead of FANTOM's keyboard. Page 168 includes MIDI signal flow diagrams showing USB-MIDI Thru OFF vs ON routing.

### SYSTEM - SOUND Tab
- **Manual Page**: p.169
- **Accessed Via**: SYSTEM screen > SOUND tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for sound settings.
- **Key Elements**:
  - Local Switch: OFF, ON
  - Tone Remain Sw: OFF, ON
  - Master Tune: 415.3-466.2 Hz
  - Master Key Shift: -24 to +24
  - Master Level: 0-127
  - Scale Tune Sw: OFF, ON
  - Output Gain: -12 to +12
  - Audio File Preview Level: 0-127
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Local Switch OFF disconnects the keyboard from the internal sound generator (useful for DAW setups). Tone Remain Sw ON holds the currently-heard sound when switching tones. Master Tune sets the A4 reference frequency. Includes a diagram explaining Local Switch OFF for DAW usage.

### SYSTEM - SYNC/TEMPO Tab
- **Manual Page**: p.169
- **Accessed Via**: SYSTEM screen > SYNC/TEMPO tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for synchronization and tempo settings.
- **Key Elements**:
  - Sync Mode: INTERNAL, REMOTE, EXTERNAL
  - Sync Output: OFF, ON
  - System Clock Source: MIDI, USB
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: INTERNAL = FANTOM is the master clock. REMOTE = FANTOM follows external start/stop/continue but uses own tempo. EXTERNAL = FANTOM fully follows external clock including tempo. System Clock Source only applies when Sync Mode is EXTERNAL.

### SYSTEM - SEQUENCER Tab
- **Manual Page**: p.169
- **Accessed Via**: SYSTEM screen > SEQUENCER tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for sequencer settings.
- **Key Elements**:
  - Pattern Change Timing: MEASURE, PATTERN END
  - Sequencer Edit Mode: SELECT, PIANO ROLL, MICROSCOPE
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: MEASURE = pattern changes at beginning of next measure. PATTERN END = pattern changes at end of current pattern. Sequencer Edit Mode SELECT shows a selection window; PIANO ROLL and MICROSCOPE go directly to those editors.

### SYSTEM - CLICK Tab
- **Manual Page**: p.169-170
- **Accessed Via**: SYSTEM screen > CLICK tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for click (metronome) settings.
- **Key Elements**:
  - Click Mode: OFF, PLAY-ONLY, REC-ONLY, PLAY&REC, ALWAYS
  - Click Level: 0-10
  - Click Sound: TYPE1 (conventional metronome, first beat = bell), TYPE2 (click sound), TYPE3 (beep sound), TYPE4 (cowbell sound)
  - Click Accent Switch: OFF, ON
  - Click Output Assign: MAIN, SUB
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Click Mode controls when the metronome sounds relative to sequencer play/record states. Click Output Assign selects whether click is routed through MAIN OUTPUT or SUB OUT jack.

### SYSTEM - NOTE PAD Tab
- **Manual Page**: p.170
- **Accessed Via**: SYSTEM screen > NOTE PAD tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for note pad (performance pad) settings, organized into Zone, Note Number, and Velocity sections.
- **Key Elements**:
  - **Zone section:**
    - Pad1 Zone - Pad16 Zone: ZONE1-16
  - **Note Number section:**
    - Pad1 Note Number - Pad16 Note Number: 0 (C-) to 127 (G9)
  - **Velocity section:**
    - Pad1 Velocity - Pad16 Velocity: OFF, 1-127
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: Specifies which zone each pad sends note messages to, what note number is sent, and what velocity (OFF = velocity sensitive, 1-127 = fixed velocity).

### SYSTEM - CONTROL Tab
- **Manual Page**: p.170
- **Accessed Via**: SYSTEM screen > CONTROL tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Parameter list for control function settings.
- **Key Elements**:
  - Control Source Select: SYS, SCENE
  - System Control Source1-4: OFF, CC01-31, 33-95, BEND, AFT
- **Interactive Elements**: [E2] to scroll parameters, [E6] to edit selected value
- **Currently Implemented?**: No
- **Notes**: System Control settings specify MIDI messages used as system controls. These apply in common to the entire FANTOM. You can assign up to four MIDI messages. For per-tone control, use "Matrix CTRL" or "MFX CTRL" from the Parameter Guide.

### SYSTEM - LICENSE Tab
- **Manual Page**: p.164 (listed in tab table)
- **Accessed Via**: SYSTEM screen > LICENSE tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Shows license information for the instrument. (No screenshot provided in the manual.)
- **Key Elements**: License details display
- **Interactive Elements**: View only (no editable parameters)
- **Currently Implemented?**: No
- **Notes**: Shows the license information for the FANTOM unit. Related to expansion content licensing.

### SYSTEM - INFO Tab
- **Manual Page**: p.170
- **Accessed Via**: SYSTEM screen > INFO tab
- **Screen Type**: sub-screen (tab within SYSTEM)
- **Layout**: Displays software version information.
- **Key Elements**:
  - Version: Displays the FANTOM's software version
  - Build: Displays the FANTOM's software build
- **Interactive Elements**: View only (no editable parameters)
- **Currently Implemented?**: No
- **Notes**: Useful for checking firmware version and troubleshooting.

---

## Expansion Screens

### EXPANSION Screen (Main - Boot-time Access)
- **Manual Page**: p.171
- **Accessed Via**: Hold [TEMPO] button while turning on power (USB flash drive with sound data must be connected)
- **Screen Type**: main screen
- **Layout**: Title bar "EXPANSION". Main area shows list of installed expansion tones (or "EMPTY" if none). Each entry shows expansion pack name and number (e.g., "EX2001: Stage Piano 1"). Below the list: "Used Space" bar showing percentage and visual fill indicator. Bottom bar: [E1] UNINSTALL, [E2] UNINSTALL ALL, [E3] OPTIMIZE, [E4] REMOVE LICENSE, [E6] INSTALL.
- **Key Elements**: Expansion tone list (or EMPTY placeholder), used space percentage bar with visual indicator, expansion pack names
- **Interactive Elements**: [Up/Down] buttons to select expansion, [E1] UNINSTALL (removes selected tone), [E2] UNINSTALL ALL (removes all tones), [E3] OPTIMIZE (optimizes tone storage), [E4] REMOVE LICENSE (deletes license info), [E6] INSTALL (adds selected tone from USB). Touch to select expansion entries.
- **Currently Implemented?**: No
- **Notes**: Maximum 16 expansion sounds can be installed. Sound files (SOUND PACK or WAVE EXPANSION) can be obtained via Roland Cloud. The screen is ONLY accessible during boot (hold TEMPO while powering on). The USB flash drive must have the sound data in the root directory.

### EXPANSION - Install Confirmation Popup
- **Manual Page**: p.171
- **Accessed Via**: EXPANSION screen > select tone > [E6] INSTALL
- **Screen Type**: popup / overlay
- **Layout**: Confirmation popup asking to confirm installation.
- **Key Elements**: Confirmation message, OK/CANCEL buttons
- **Interactive Elements**: [E5] OK (installs tone), [E6] CANCEL (cancels)
- **Currently Implemented?**: No
- **Notes**: Never turn off power or remove USB while "working.." is shown. After installation, the EXPANSION screen updates to show the newly installed tone with its used space percentage.

### EXPANSION - Uninstall Confirmation Popup
- **Manual Page**: p.171
- **Accessed Via**: EXPANSION screen > select tone > [E1] UNINSTALL
- **Screen Type**: popup / overlay
- **Layout**: Confirmation popup asking to confirm removal of the selected expansion tone.
- **Key Elements**: Confirmation message, OK/CANCEL buttons
- **Interactive Elements**: [E5] OK (removes tone), [E6] CANCEL (cancels)
- **Currently Implemented?**: No
- **Notes**: Never turn off power or remove USB while "working.." is shown. To remove ALL tones, use [E2] UNINSTALL ALL instead.

### EXPANSION - Optimize Confirmation Popup
- **Manual Page**: p.171
- **Accessed Via**: EXPANSION screen > [E3] OPTIMIZE
- **Screen Type**: popup / overlay
- **Layout**: Confirmation popup asking to confirm tone storage optimization.
- **Key Elements**: Confirmation message, OK/CANCEL buttons
- **Interactive Elements**: [E5] OK (optimizes storage), [E6] CANCEL (cancels)
- **Currently Implemented?**: No
- **Notes**: Defragments tone storage area. Useful after adding and removing many tones. Never turn off power or remove USB while "working.." is shown.

### EXPANSION - Remove License Confirmation
- **Manual Page**: p.173
- **Accessed Via**: EXPANSION screen > [E4] REMOVE LICENSE
- **Screen Type**: popup / overlay
- **Layout**: Confirmation popup with the EXPANSION screen visible behind it (showing installed tones and used space). Confirmation asks to delete previously-installed license information.
- **Key Elements**: Confirmation message, OK/CANCEL buttons, background shows expansion list
- **Interactive Elements**: [E5] OK (deletes license info), [E6] CANCEL (cancels)
- **Currently Implemented?**: No
- **Notes**: WARNING: Deleting license information also deletes the content data authorized by that license. Content will no longer be usable. Used when Roland Cloud shows "Incorrect License! Please Remove License!" message. Must turn power off and on again after removing license.

### Expansion Tone Selection (via TONE LIST / ZONE VIEW)
- **Manual Page**: p.172
- **Accessed Via**: After installing expansion tones, reboot FANTOM > TONE LIST screen or ZONE VIEW screen
- **Screen Type**: sub-screen (within existing TONE LIST / ZONE VIEW screens)
- **Layout**: Standard TONE LIST screen, with expansion tones accessible as follows:
  - EXP TONE: In TONE LIST, select expansion tones after the end of the category of the added tone. In ZONE VIEW bank, select "EXZ***".
  - EXP TONE WAVE: In TONE EDIT > OSC, set Wave Group to "EXP", select "EXZ***" for Wave No. L/R.
  - EXP RHYTHM INST: Select tone type "Drum", in TONE EDIT > KEY PARAM, select "EXZ***" as INST GRP ID, then select drum sound instrument.
  - EXP RHYTHM WAVE: Select tone type "Drum", in TONE EDIT > INST WAVE, set Wave Group to "EXP", select "EXZ***" for Wave No. L/R.
- **Key Elements**: Expansion tones appear in standard tone lists with "EXZ***" bank identifiers
- **Interactive Elements**: Same as standard tone selection screens
- **Currently Implemented?**: No
- **Notes**: Expansion tones integrate into the existing tone selection workflow. No separate screen is needed; they appear within existing screens with special bank prefixes.

### SuperNATURAL Acoustic Piano Tone Edit Screen (SN-AP)
- **Manual Page**: p.172
- **Accessed Via**: Select tone type "SN-AP" > [MENU] > \<TONE EDIT\>
- **Screen Type**: main screen
- **Layout**: Title bar "TONE EDIT SNAP" with back arrow, followed by ZONE1, instrument icon, tone name (e.g., "#Concert Grand"), SAMPLE PAD indicator, and UTILITY button. Left column has tabs: COMMON, INST, MFX, MFX CTRL. Right side shows parameter list for selected tab (e.g., Category, Level, Pan, Coarse Tune, Fine Tune, Octave Shift, Mono/Poly, Chorus Send Level, Reverb Send Level).
- **Key Elements**: Tab list (COMMON, INST, MFX, MFX CTRL), parameter list with editable values, tone name display
- **Interactive Elements**: [E1] scrolls tabs, [E2] scrolls parameters, [E6] edits selected value, \<UTILITY\> accesses UTILITY window
- **Currently Implemented?**: No
- **Notes**: For SuperNATURAL Acoustic Piano tones. COMMON = settings for entire tone. INST = instrument-specific parameters. MFX = multi-effects. MFX CONTROL = controlling MFX via MIDI. Signal flow: Inst > [nothing] > MFX.

### SuperNATURAL E.Piano Tone Edit Screen (SN-EP)
- **Manual Page**: p.172
- **Accessed Via**: Select tone type "SN-EP" > [MENU] > \<TONE EDIT\>
- **Screen Type**: main screen
- **Layout**: Title bar "TONE EDIT SNEP" with back arrow, followed by ZONE1, instrument icon, tone name (e.g., "#Tine Mk I Trm"), SAMPLE PAD indicator, and UTILITY button. Left column has tabs: COMMON, INST, MFX, MFX CTRL. Right side shows parameter list (e.g., Category "04:E.Piano1", Level 118, Pan 0, Coarse Tune 0, Fine Tune 0(cent), Octave Shift 0, Mono/Poly POLY, Chorus Send Level 0, Reverb Send Level 0).
- **Key Elements**: Tab list (COMMON, INST, MFX, MFX CTRL), parameter list with editable values, tone name display
- **Interactive Elements**: [E1] scrolls tabs, [E2] scrolls parameters, [E6] edits selected value, \<UTILITY\> accesses UTILITY window
- **Currently Implemented?**: No
- **Notes**: For SuperNATURAL E.Piano tones. Same tab structure as SN-AP. Signal flow: Inst > [nothing] > MFX. SuperNATURAL E.Piano tones are added to "E.Piano" categories.

### Model Tone Edit Screen (TONE EDIT - MODEL)
- **Manual Page**: p.173
- **Accessed Via**: Select tone type "MODEL" > [MENU] > \<TONE EDIT\>
- **Screen Type**: main screen
- **Layout**: Title bar "TONE EDIT JP8 ZOOM" (or other model name) with back arrow, tone name (e.g., "Berlin Night"), SAMPLE PAD indicator, UTILITY button. Top row shows: \<To PRO\> button (toggles to PRO screen), model name in large text (e.g., "JUPITER-8"). Left column has tabs: GENERAL, LFO/MOD, OSC, VCF, VCA, ENV1, ENV2, KBD, MFX. Right side shows a graphical synth architecture view with interactive blocks (e.g., KEY MODE, POLY, SOLO, UNISON, SL-UNISON, PORTAVENT, PRV-EXP). Bottom shows parameter blocks: CONDITION, PITCH DRIFT, and DRG/ANALOG/EXP-1/EXP-2 controls.
- **Key Elements**: Model synth name/logo (JUPITER-8, JUNO-106, etc.), graphical signal flow diagram showing VCO-1, VCO-2, HPF, VCF, VCA, MFX blocks with LFO, ENV-1, ENV-2, KBD connections. Tab list on left, parameter grid in center.
- **Interactive Elements**: [E1] scrolls tabs, [E2]-[E6] edit corresponding parameters (varies by cursor position), \<To PRO\> toggles to TONE EDIT PRO screen, \<UTILITY\> accesses UTILITY window. Parameters differ depending on model bank selected.
- **Currently Implemented?**: No
- **Notes**: Model tones emulate specific vintage synthesizers (JP-8, JUNO-106, JX-8P, SH-101, etc.). Each model bank has unique parameters - see Owner's Manual for each expansion. The ZOOM view shows a graphical synth architecture. \<To PRO\> switches to a more detailed editing view. Tabs and parameters differ based on the selected model bank.

---

## Summary

| Category | Screen Count |
|---|---|
| Utility Menu | 1 |
| Wave/Expansion Info | 2 |
| Import Screens | 9 |
| Export Screens | 7 |
| Backup | 1 |
| Restore | 1 |
| Wallpaper | 1 |
| USB Memory Format | 1 |
| Factory Reset | 1 |
| Internal Storage Initialize | 1 |
| USB Memory Unmount | 1 |
| File Utility | 6 |
| System Settings (17 tabs) | 18 |
| Expansion Screens | 6 |
| Tone Edit (SuperNATURAL/Model) | 3 |
| **Total** | **59** |

All screens are currently **not implemented** in the interactive music studio app. The existing implemented screen types (home, zone-view, key-range, write, menu, tone-select, effect) do not cover any of the system settings, file utility, or expansion screens documented above.
