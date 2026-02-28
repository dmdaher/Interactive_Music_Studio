import { Tutorial } from '@/types/tutorial';

export const sceneChainSmf: Tutorial = {
  id: 'scene-chain-smf',
  deviceId: 'fantom-08',
  title: 'Scene Chains & SMF Playback',
  description:
    'Learn how to organize scenes into chains for seamless live setlist navigation, then use the SMF Player to load and play back Standard MIDI Files as backing tracks. Two essential features for performing with the Fantom 08.',
  category: 'performance',
  difficulty: 'intermediate',
  estimatedTime: '10 min',
  tags: ['scene-chain', 'smf', 'live-performance', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Scene Chains & SMF',
      instruction:
        'In this tutorial you will learn two features that transform the Fantom 08 for live performance. Scene Chains let you organize scenes into a setlist so you can step through them hands-free during a gig. The SMF Player lets you load and play Standard MIDI Files from USB as backing tracks.',
      details:
        'Scene Chains can hold up to 512 scenes (16 per page across 32 pages) organized into Chain Sets. The SMF Player supports Standard MIDI File playback with transport controls, tempo adjustment, and loop settings. Both features are designed for stage use.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Live Set 1',
        tempo: 120,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open Scene Chain',
      instruction:
        'Press the Scene Chain button in the Scene section to open the Scene Chain screen. This shows your chain set with scenes arranged in a horizontal icon row.',
      details:
        'The Scene Chain screen displays a chain set name at the top (e.g., "001:My Chain 1"), a horizontal row of 16 scene icons per page, and the selected scene\'s name and description below. You can also access UTILITY and EDIT from this screen.',
      highlightControls: ['scene-chain'],
      panelStateChanges: {
        'scene-chain': { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'scene-chain',
        title: 'SCENE CHAIN',
        menuItems: [
          { label: 'Chain Set', value: '001:My Chain 1' },
          { label: 'Scene 1', value: 'A001: Live Set 1', selected: true },
          { label: 'Scene 2', value: 'A005: Piano & Strings' },
          { label: 'Scene 3', value: 'A012: Synth Lead' },
          { label: 'Scene 4', value: 'B003: Jazz Combo' },
          { label: 'Scene 5', value: 'B007: Organ Trio' },
        ],
        selectedIndex: 1,
        statusText: 'Page 1/32 — 5 scenes',
      },
      tipText: 'Scene Chain is the quickest way to organize your live setlist.',
    },
    {
      id: 'step-3',
      title: 'Browse the Chain',
      instruction:
        'The horizontal scene icon row shows up to 16 scenes per page, color-coded by category (A-E). The currently selected scene is highlighted. Use the Cursor Down and Cursor Up buttons to page through the chain if it has more than 16 scenes.',
      details:
        'Each scene icon displays a small color indicator matching its category. Below the icon row, the selected scene\'s full name, description, and memo are displayed. A page indicator shows your position within the chain.',
      highlightControls: ['cursor-down', 'cursor-up'],
      panelStateChanges: {},
      displayState: {
        screenType: 'scene-chain',
        title: 'SCENE CHAIN',
        menuItems: [
          { label: 'Chain Set', value: '001:My Chain 1' },
          { label: 'Scene 1', value: 'A001: Live Set 1' },
          { label: 'Scene 2', value: 'A005: Piano & Strings', selected: true },
          { label: 'Scene 3', value: 'A012: Synth Lead' },
          { label: 'Scene 4', value: 'B003: Jazz Combo' },
          { label: 'Scene 5', value: 'B007: Organ Trio' },
        ],
        selectedIndex: 2,
        statusText: 'Page 1/32 — Browsing',
      },
      tipText: 'A chain set holds up to 512 scenes across 32 pages of 16.',
    },
    {
      id: 'step-4',
      title: 'Select a Scene in the Chain',
      instruction:
        'Turn the Value dial to move through the scene positions in the chain. Each position loads the scene preview below. Press Enter to load the selected scene.',
      details:
        'You can also use the INC/DEC buttons to step one position at a time, or press Tone Category buttons [1]-[16] to jump directly to a position on the current page. The scene loads instantly when you press Enter.',
      highlightControls: ['value-dial', 'enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'scene-chain',
        title: 'SCENE CHAIN',
        menuItems: [
          { label: 'Chain Set', value: '001:My Chain 1' },
          { label: 'Scene 1', value: 'A001: Live Set 1' },
          { label: 'Scene 2', value: 'A005: Piano & Strings' },
          { label: 'Scene 3', value: 'A012: Synth Lead', selected: true },
          { label: 'Scene 4', value: 'B003: Jazz Combo' },
          { label: 'Scene 5', value: 'B007: Organ Trio' },
        ],
        selectedIndex: 3,
        statusText: 'Page 1/32 — Scene 3 selected',
      },
      tipText: 'Press Enter to load the selected scene immediately.',
    },
    {
      id: 'step-5',
      title: 'Enter Edit Mode',
      instruction:
        'Press Enter to open the Scene Chain Edit screen. Here you can insert, delete, and reorder scenes within the chain to build your setlist.',
      details:
        'In Edit mode you can: insert a scene at the current position, delete a scene, move a scene up or down in the chain, and copy scenes between positions. Use the Cursor Up/Down buttons to navigate the edit list and the Value dial to change scene assignments.',
      highlightControls: ['enter'],
      panelStateChanges: {},
      displayState: {
        screenType: 'scene-chain',
        title: 'SCENE CHAIN EDIT',
        menuItems: [
          { label: '01', value: 'A001: Live Set 1' },
          { label: '02', value: 'A005: Piano & Strings' },
          { label: '03', value: 'A012: Synth Lead', selected: true },
          { label: '04', value: 'B003: Jazz Combo' },
          { label: '05', value: 'B007: Organ Trio' },
          { label: '06', value: '---: (empty)' },
        ],
        selectedIndex: 2,
        statusText: 'EDIT — Insert / Delete / Move',
      },
      tipText: 'You can rearrange scenes freely in Edit mode without affecting the original scene data.',
    },
    {
      id: 'step-6',
      title: 'Performance Mode',
      instruction:
        'Press the Scene Chain button again to enter Performance Mode. This streamlined view adds BWD/FWD controls at the bottom for stepping through the chain hands-free during a live show.',
      details:
        'In Performance Mode, E1 controls BWD (step backward), E3 controls FWD (step forward), E5 jumps to the previous MARKER, and E6 jumps to the next MARKER. This mode is optimized for live use — you can also assign a footswitch to step forward through the chain.',
      highlightControls: ['scene-chain'],
      panelStateChanges: {},
      displayState: {
        screenType: 'scene-chain',
        title: 'SCENE CHAIN — PERFORMANCE',
        menuItems: [
          { label: 'NOW', value: 'A012: Synth Lead', selected: true },
          { label: 'NEXT', value: 'B003: Jazz Combo' },
          { label: 'E1=BWD', value: 'Step Back' },
          { label: 'E3=FWD', value: 'Step Forward' },
          { label: 'E5=MARKER', value: 'Previous' },
          { label: 'E6=MARKER', value: 'Next' },
        ],
        selectedIndex: 0,
        statusText: 'PERFORMANCE MODE — Scene 3/5',
      },
      tipText: 'E1=BWD, E3=FWD, E5/E6=MARKER navigation. Assign a footswitch for hands-free chain stepping.',
    },
    {
      id: 'step-7',
      title: 'Navigate to SMF Player',
      instruction:
        'Press Exit to leave Scene Chain, then press Menu to open the main menu. Navigate to UTILITY and select SMF PLAYER to open the Standard MIDI File player.',
      details:
        'The SMF Player is found under Menu > UTILITY > SMF PLAYER. It allows playback of Standard MIDI Files loaded from a USB drive. This is useful for playing along with backing tracks during practice or performance.',
      highlightControls: ['exit', 'menu'],
      panelStateChanges: {
        'scene-chain': { active: false, ledOn: false },
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'UTILITY',
        menuItems: [
          { label: 'SYSTEM' },
          { label: 'STARTUP' },
          { label: 'SMF PLAYER', selected: true },
          { label: 'WIRELESS' },
          { label: 'BLUETOOTH' },
        ],
        selectedIndex: 2,
      },
      tipText: 'The SMF Player requires a USB drive with .MID files to be connected.',
    },
    {
      id: 'step-8',
      title: 'Load an SMF File',
      instruction:
        'Press Enter to open the SMF Player. Turn the Value dial to browse and select an SMF file from USB. The file name and tempo are displayed on screen.',
      details:
        'The SMF Player screen shows the current file name, tempo, transport state, loop setting, and playback position. E1 selects the file, E2 adjusts tempo, E3 controls transport (play/stop), E4 toggles loop, and E5 controls the playback position.',
      highlightControls: ['value-dial', 'enter'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'smf-control',
        title: 'SMF PLAYER',
        menuItems: [
          { label: 'FILE', value: 'BackingTrack_01.MID', selected: true },
          { label: 'TEMPO', value: '120.0' },
          { label: 'STATUS', value: 'STOPPED' },
          { label: 'LOOP', value: 'OFF' },
          { label: 'POSITION', value: '001:01:000' },
        ],
        selectedIndex: 0,
        statusText: 'E1=FILE  E2=TEMPO  E3=PLAY/STOP  E4=LOOP  E5=POS',
      },
      tipText: 'Connect a USB drive with .MID files before opening the SMF Player.',
    },
    {
      id: 'step-9',
      title: 'Playback Controls',
      instruction:
        'Press Play to start SMF playback. The position counter advances in real time. Press Stop to halt playback. Use the Value dial to scrub the playback position.',
      details:
        'During playback, the Fantom sends MIDI data from the SMF file to its internal tone engine, so you hear the backing track through the Fantom\'s sounds. You can adjust tempo with E2, toggle loop with E4, and jump to any position with E5. The transport follows the standard Play/Stop buttons.',
      highlightControls: ['play', 'stop'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'smf-control',
        title: 'SMF PLAYER',
        menuItems: [
          { label: 'FILE', value: 'BackingTrack_01.MID' },
          { label: 'TEMPO', value: '120.0' },
          { label: 'STATUS', value: 'PLAYING', selected: true },
          { label: 'LOOP', value: 'OFF' },
          { label: 'POSITION', value: '005:03:240' },
        ],
        selectedIndex: 2,
        statusText: 'PLAYING — BackingTrack_01.MID',
      },
      tipText: 'Loop mode repeats the SMF from the beginning when it reaches the end — great for practice.',
    },
    {
      id: 'step-10',
      title: 'Tutorial Complete!',
      instruction:
        'Press Stop to halt playback, then Exit to return to the home screen. You have learned how to organize scenes into chains for live setlist navigation and play SMF backing tracks from USB.',
      details:
        'Scene Chains and SMF playback are cornerstones of live performance on the Fantom 08. Assign a footswitch to step forward through your chain for hands-free scene changes. Combine SMF backing tracks with your live playing for a full-band sound. Save your chain set and scene settings with Write to preserve your setlist.',
      highlightControls: ['stop', 'exit'],
      panelStateChanges: {
        play: { active: false, ledOn: false },
        stop: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Live Set 1',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Scene Chain & SMF Player configured',
      },
      tipText:
        'Assign a footswitch to CHAIN FWD for hands-free scene chain stepping during live performance.',
    },
  ],
};
