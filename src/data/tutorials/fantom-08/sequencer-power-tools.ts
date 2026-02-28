import { Tutorial } from '@/types/tutorial';

export const sequencerPowerTools: Tutorial = {
  id: 'sequencer-power-tools',
  deviceId: 'fantom-08',
  title: 'Sequencer Power Tools',
  description:
    'Master the Fantom 08\'s advanced sequencer editing tools: Microscope event editor for surgical precision, Pattern MODIFY operations (Quantize, Erase, Transpose, Change Velocity, Change Duration, Shift Clock), and Pattern Utility functions (Copy, Paste, Delete, Rename, Import, Export).',
  category: 'sequencer',
  difficulty: 'advanced',
  estimatedTime: '9 min',
  tags: ['sequencer', 'microscope', 'modify', 'quantize', 'advanced'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Power Tools',
      instruction:
        'The Fantom 08 sequencer includes powerful editing tools beyond basic recording: the Microscope for individual event editing, MODIFY for batch operations, and Pattern Utility for pattern management.',
      details:
        'These tools are accessed from the PATTERN screen. Microscope lets you edit individual MIDI events. MODIFY applies batch transformations like quantize, transpose, and velocity changes. Pattern Utility handles copying, pasting, deleting, renaming, importing, and exporting patterns.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'C009',
        sceneName: 'Piano Studio',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Pattern Screen',
      instruction:
        'Press the Pattern button and select a pattern that has recorded data to work with.',
      highlightControls: ['pattern'],
      panelStateChanges: {
        pattern: { active: true },
      },
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 0,
          selectedVariation: 0,
        },
      },
    },
    {
      id: 'step-3',
      title: 'Open the Microscope Editor',
      instruction:
        'Select the pattern you want to edit and touch [E3] EDIT on screen. In the EDIT SELECT window, choose MICROSCOPE. The Microscope screen appears showing individual performance events.',
      details:
        'The Microscope lists every recorded event: note messages (pitch, velocity, duration), control changes, pitch bends, and aftertouch. Each row shows: position (measure-beat-tick), event type, and parameter values.',
      highlightControls: ['function-e3'],
      panelStateChanges: {},
      displayState: {
        screenType: 'microscope',
        sequencerData: {
          selectedTrack: 0,
          selectedVariation: 0,
        },
      },
    },
    {
      id: 'step-4',
      title: 'Edit Events in Microscope',
      instruction:
        'Use the cursor up/down buttons [▲][▼] to select an event, then use [◄][►] to move between parameters. Turn the Value dial or press [INC]/[DEC] to change values.',
      details:
        'Microscope functions: CREATE — insert new events. ERASE — delete selected events. MOVE — change event position. COPY/PASTE — duplicate events to another location. VIEW — filter which event types are displayed. Press ENTER to play-preview a note event.',
      highlightControls: ['cursor-up', 'cursor-down', 'cursor-left', 'cursor-right', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'microscope',
        sequencerData: {
          selectedTrack: 0,
          selectedVariation: 0,
        },
        statusText: 'Event: 01-01-000 Note C4 vel:100',
      },
      tipText:
        'Press ENTER on a note event to hear it — this helps you identify which note you\'re editing without leaving the Microscope.',
    },
    {
      id: 'step-5',
      title: 'Access Pattern Utility',
      instruction:
        'Press Exit to return to the Pattern screen. Touch [E2] PTN UTILITY to open the Pattern Utility screen, which provides pattern management functions.',
      details:
        'The PTN UTILITY screen shows a 16-track × 8-variation grid with color-coded patterns. Functions: EDIT, MODIFY, COPY, PASTE, DELETE. Plus: [E1] UNDO/REDO, [E2] QUANTIZE, [E3] MIXER, [E4] RENAME, [E5] IMPORT, [E6] EXPORT.',
      highlightControls: ['function-e2', 'exit'],
      panelStateChanges: {},
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '16Tr',
          selectedTrack: 0,
          selectedVariation: 0,
        },
        statusText: 'PTN UTILITY',
      },
    },
    {
      id: 'step-6',
      title: 'Open MODIFY Menu',
      instruction:
        'In the PTN UTILITY screen, select the pattern you want to modify and touch MODIFY. The MODIFY MENU appears with six operations: Quantize, Erase, Transpose, Change Velocity, Change Duration, and Shift Clock.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'MODIFY MENU',
        menuItems: [
          { label: 'QUANTIZE' },
          { label: 'ERASE' },
          { label: 'TRANSPOSE' },
          { label: 'CHANGE VELOCITY' },
          { label: 'CHANGE DURATION' },
          { label: 'SHIFT CLOCK' },
        ],
        selectedIndex: 0,
      },
    },
    {
      id: 'step-7',
      title: 'Apply Quantize',
      instruction:
        'Select QUANTIZE from the MODIFY menu. Set the Target (LOOP or PATTERN), Quantize Type (GRID for straight, SHUFFLE for swing), Resolution, and Strength. Touch [E6] EXECUTE to apply.',
      details:
        'Quantize corrects timing: it moves notes toward the nearest grid position. Strength (0–100%) controls how far notes are moved — 100% snaps perfectly to grid, lower values preserve some human feel. Resolution sets the grid size (1/32 to 1/4). Use GRID for rock/pop, SHUFFLE for jazz/swing.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'QUANTIZE',
        menuItems: [
          { label: 'TARGET: PATTERN' },
          { label: 'Quantize Type: GRID' },
          { label: 'Resolution: 1/16' },
          { label: 'Strength: 100%' },
          { label: 'Range Min: 0(C-1)' },
          { label: 'Range Max: 127(G9)' },
        ],
        selectedIndex: 3,
        statusText: 'Set parameters, then [E6] EXECUTE',
      },
      tipText:
        'After executing, confirm with [E5] OK. If you don\'t like the result, use UNDO ([E1] on the PTN UTILITY screen) to revert.',
    },
    {
      id: 'step-8',
      title: 'Transpose a Pattern',
      instruction:
        'Return to the MODIFY menu and select TRANSPOSE. Set the Bias value (in semitones, ±127) to shift the pitch of all notes in the pattern up or down.',
      details:
        'Transpose parameters: TARGET (LOOP/PATTERN), BIAS (amount in semitones, e.g., +12 = one octave up, -7 = down a fifth), RANGE MIN/MAX (limit which notes are affected). This is useful for creating variations from existing patterns.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'TRANSPOSE',
        menuItems: [
          { label: 'TARGET: PATTERN' },
          { label: 'BIAS: +12' },
          { label: 'Range Min: 0(C-1)' },
          { label: 'Range Max: 127(G9)' },
        ],
        selectedIndex: 1,
        statusText: 'Transpose +12 semitones (1 octave)',
      },
    },
    {
      id: 'step-9',
      title: 'Erase Performance Data',
      instruction:
        'Select ERASE from the MODIFY menu. Choose which type of data to erase: All, Note, Control Change, Pitch Bend, Poly Aftertouch, or Channel Aftertouch. Set Range Min/Max to target specific notes.',
      details:
        'Erased notes are replaced with rests — the pattern length stays the same. Use Range Min/Max to erase only specific pitch ranges (e.g., erase all hi-hat notes above C5 while keeping the kick and snare). To erase all controller numbers, set Range Min to 0 and Range Max to 127.',
      highlightControls: ['cursor-up', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'ERASE',
        menuItems: [
          { label: 'TARGET: PATTERN' },
          { label: 'Event: Note' },
          { label: 'Range Min: 0(C-1)' },
          { label: 'Range Max: 127(G9)' },
        ],
        selectedIndex: 1,
        statusText: 'Select event type to erase',
      },
    },
    {
      id: 'step-10',
      title: 'Change Velocity and Duration',
      instruction:
        'Try CHANGE VELOCITY to boost or cut the dynamics of a pattern, and CHANGE DURATION to make notes shorter (staccato) or longer (legato). Both use a BIAS value to shift the existing values.',
      details:
        'Change Velocity BIAS: -99 to +99 (e.g., +20 makes all notes 20 velocity units louder). Change Duration BIAS: -960 to +960 ticks (480 ticks = quarter note). Negative values shorten notes, positive values lengthen them. Both can target specific note ranges with Range Min/Max.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'CHANGE VELOCITY',
        menuItems: [
          { label: 'TARGET: PATTERN' },
          { label: 'BIAS: +20' },
          { label: 'Range Min: 0(C-1)' },
          { label: 'Range Max: 127(G9)' },
        ],
        selectedIndex: 1,
        statusText: 'Boost velocity by +20',
      },
    },
    {
      id: 'step-11',
      title: 'Use Shift Clock',
      instruction:
        'Select SHIFT CLOCK from the MODIFY menu. This moves all performance data forward or backward in time by a specified number of ticks, creating a "rushing" or "dragging" feel.',
      details:
        'Shift Clock BIAS: -960 to +960 ticks. Positive values push notes later (dragging feel), negative values pull notes earlier (rushing feel). You can target specific event types (All, Note, Control Change, Pitch Bend, etc.). If data is shifted beyond the pattern boundary, it wraps to the beginning.',
      highlightControls: ['function-e6'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'SHIFT CLOCK',
        menuItems: [
          { label: 'TARGET: PATTERN' },
          { label: 'Event: All' },
          { label: 'BIAS: -10' },
          { label: 'Range Min: 0(C-1)' },
          { label: 'Range Max: 127(G9)' },
        ],
        selectedIndex: 2,
        statusText: 'Shift -10 ticks (slight rush)',
      },
      tipText:
        'Small Shift Clock values (±5–15 ticks) add subtle human feel. Larger values create noticeable timing shifts.',
    },
    {
      id: 'step-12',
      title: 'Power Tools Complete!',
      instruction:
        'Press Exit to return to the home screen. You now know how to use the Microscope for surgical edits, MODIFY for batch operations, and Pattern Utility for pattern management.',
      details:
        'Additional PTN UTILITY features: COPY/PASTE patterns between tracks and variations, DELETE unwanted patterns, RENAME patterns for easy identification, IMPORT SMF files from USB, and EXPORT patterns as SMF files to USB. Use UNDO/REDO ([E1]) to reverse any destructive operation.',
      highlightControls: ['exit'],
      panelStateChanges: {
        pattern: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'C009',
        sceneName: 'Piano Studio',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'The content edited with Pattern Utility is saved in the scene. Remember to save your scene to keep changes.',
    },
  ],
};
