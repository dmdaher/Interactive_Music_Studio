import { Tutorial } from '@/types/tutorial';

export const pianoRollEditing: Tutorial = {
  id: 'piano-roll-editing',
  deviceId: 'fantom-08',
  title: 'Recording and Editing in Piano Roll',
  description:
    'Learn how to use the Piano Roll editor to view, edit, and refine your recorded patterns. Move notes, change durations, adjust velocities, and use the Microscope for detailed event editing.',
  category: 'sequencer',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['sequencer', 'piano-roll', 'editing', 'microscope', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Piano Roll',
      instruction:
        'The Piano Roll is a visual note editor that shows recorded MIDI data as colored blocks on a grid. You can draw, move, resize, and delete notes with precision.',
      details:
        'The Piano Roll also supports automation editing for control changes and pitch bends. For even finer detail, the Microscope view shows raw event data in a list format.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'B003',
        sceneName: 'Bright Keys',
        tempo: 104,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Pattern Screen',
      instruction:
        'Press the Pattern button to open the Pattern screen where your recorded patterns are displayed.',
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
          currentMeasure: 1,
          totalMeasures: 4,
        },
      },
      tipText:
        'You need a recorded pattern to edit. If no patterns exist, record one first using the REC button.',
    },
    {
      id: 'step-3',
      title: 'Select a Pattern to Edit',
      instruction:
        'Use the cursor buttons to select a pattern box that contains recorded data (shown as a colored box), then press E3 (EDIT) to open the edit options.',
      details:
        'Only pattern boxes with recorded data can be edited. Empty boxes appear as dark/uncolored cells in the grid.',
      highlightControls: ['cursor-down', 'function-e3'],
      panelStateChanges: {},
      displayState: {
        screenType: 'pattern',
        sequencerData: {
          viewMode: '8Tr',
          selectedTrack: 1,
          selectedVariation: 0,
          currentMeasure: 1,
          totalMeasures: 4,
        },
      },
    },
    {
      id: 'step-4',
      title: 'Enter Piano Roll View',
      instruction:
        'Select PIANO ROLL from the edit options. The Piano Roll screen appears showing your recorded notes as colored blocks on a grid.',
      details:
        'The grid shows pitch (vertical) vs. time (horizontal). The bottom section shows velocity bars for each note. Toolbar buttons at the bottom provide DRAW, MOVE, DURATION, and other editing tools.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        selectedIndex: 0,
        sequencerData: {
          currentMeasure: 1,
        },
      },
      tipText:
        'The vertical axis shows pitch (C1 at bottom, C8 at top). Time flows left to right.',
    },
    {
      id: 'step-5',
      title: 'Navigate the Piano Roll',
      instruction:
        'Use the Cursor buttons to move the viewing area. Cursor Left/Right scrolls through measures, and Cursor Up/Down shifts the pitch range.',
      details:
        'You can also adjust the zoom level: E3 (Zoom H) changes horizontal zoom, and E4 (Zoom V) changes vertical zoom. E5 (Length) adjusts the pattern length.',
      highlightControls: ['cursor-right', 'cursor-up'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        selectedIndex: 1,
        sequencerData: {
          currentMeasure: 2,
        },
      },
    },
    {
      id: 'step-6',
      title: 'Select and Move a Note',
      instruction:
        'Touch a note block to select it (it turns red). Then use the MOVE function to reposition it — Cursor buttons move it in time and pitch.',
      details:
        'You can also drag notes directly on the touchscreen. Hold SHIFT and touch additional notes to select multiple notes at once.',
      highlightControls: ['cursor-left', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        selectedIndex: 2,
        sequencerData: {
          currentMeasure: 2,
        },
      },
      tipText:
        'Selected notes turn red. Use SHIFT+touch to select multiple notes for batch editing.',
    },
    {
      id: 'step-7',
      title: 'Adjust Note Duration',
      instruction:
        'Select a note, then switch to DURATION mode. Use the Cursor Left/Right buttons to shorten or lengthen the selected note.',
      details:
        'E1 (Duration) sets the default note length when drawing new notes. When editing existing notes, use cursor buttons or drag the right edge of the note block.',
      highlightControls: ['cursor-right', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'piano-roll',
        selectedIndex: 3,
        sequencerData: {
          currentMeasure: 1,
        },
      },
    },
    {
      id: 'step-8',
      title: 'Switch to Microscope View',
      instruction:
        'Press Exit to return to the edit options, then select MICROSCOPE. The Microscope shows every MIDI event as a detailed list — note messages, control changes, and more.',
      details:
        'The Microscope is perfect for fixing timing issues, adjusting individual note velocities, or editing controller data that the Piano Roll cannot show in detail.',
      highlightControls: ['exit', 'enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'microscope',
        selectedIndex: 0,
      },
      tipText:
        'Microscope shows the raw data: measure/beat/tick, note name, velocity, and duration for each event.',
    },
    {
      id: 'step-9',
      title: 'Edit Event Data',
      instruction:
        'Use Cursor Up/Down to select an event, Cursor Left/Right to move between data fields, and the Value dial or Inc/Dec to change values.',
      details:
        'Functions: CREATE adds new events, ERASE deletes selected events, MOVE repositions events, COPY duplicates events. Press Enter to play the selected note.',
      highlightControls: ['cursor-down', 'value-dial', 'dec', 'inc'],
      panelStateChanges: {},
      displayState: {
        screenType: 'microscope',
        selectedIndex: 2,
      },
    },
    {
      id: 'step-10',
      title: 'Piano Roll Editing Complete!',
      instruction:
        "Press Exit to return to the Pattern screen. You've learned how to use both the Piano Roll and Microscope to edit your recorded patterns with precision.",
      details:
        'Use Piano Roll for visual note editing and Microscope for detailed event-level adjustments. Together they give you complete control over your sequencer data.',
      highlightControls: ['exit'],
      panelStateChanges: {
        pattern: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'B003',
        sceneName: 'Bright Keys',
        tempo: 104,
        beatSignature: '4/4',
      },
      tipText:
        'Remember to save your scene after editing patterns — pattern data is stored per scene.',
    },
  ],
};
