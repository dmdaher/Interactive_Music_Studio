import { Tutorial } from '@/types/tutorial';

export const midiSyncClock: Tutorial = {
  id: 'midi-sync-clock',
  deviceId: 'fantom-08',
  title: 'MIDI Sync & Clock',
  description:
    'Master MIDI sync and clock on the Fantom 08 — learn how to set the Fantom as tempo master (INTERNAL), follow an external clock from a DAW or drum machine (EXTERNAL), obey start/stop while keeping its own tempo (REMOTE), configure clock output, and set up the click/metronome for practice and recording.',
  category: 'midi',
  difficulty: 'advanced',
  estimatedTime: '10 min',
  tags: ['midi', 'sync', 'clock', 'tempo', 'advanced'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction — MIDI Sync & Clock',
      instruction:
        'MIDI clock synchronization lets the Fantom 08 lock its tempo with external gear — a DAW, drum machine, or another synth. The Fantom can be the master (sending clock) or a slave (receiving clock). This tutorial covers all sync and click settings.',
      details:
        'MIDI clock is a timing signal sent at 24 pulses per quarter note (ppqn). When devices share a clock, their sequencers, arpeggiators, and tempo-synced effects all stay in perfect time. The Fantom 08 supports three sync modes: INTERNAL (master), REMOTE (obey start/stop but use own tempo), and EXTERNAL (fully follow external clock). These settings live in the SYNC/TEMPO tab of System Settings.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Studio Session',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'MIDI Sync & Clock tutorial — start',
      },
    },
    {
      id: 'step-2',
      title: 'Open the Menu',
      instruction:
        'Press the Menu button to open the main menu, then navigate to SYSTEM and press Enter to open the System Settings screen.',
      details:
        'SYSTEM is at the top of the Menu list. The System Settings screen has 17 tabbed categories. We need the SYNC/TEMPO tab, which controls all synchronization and clock settings.',
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
        statusText: 'Navigate to SYSTEM for sync settings',
      },
      tipText: 'SYSTEM is the first item in the Menu list — press Enter to open it.',
    },
    {
      id: 'step-3',
      title: 'Navigate to the SYNC/TEMPO Tab',
      instruction:
        'In the System Settings screen, turn the E1 knob to scroll through the tab sidebar until you reach SYNC/TEMPO. This tab holds all synchronization, clock source, and tempo settings.',
      details:
        'The 17 system tabs are: GENERAL, KEYBOARD, PEDAL, WHEEL 1/2, S1/S2, CONTROL, MIDI, SYNC/TEMPO, USB/BLUETOOTH, DISPLAY, CLICK, METRONOME, SYSTEM, ASSIGN1, ASSIGN2, TONE EDIT, and BANK. SYNC/TEMPO is the 8th tab. Turn E1 clockwise to reach it.',
      highlightControls: ['function-e1'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SYNC/TEMPO',
        menuItems: [
          { label: 'Sync Mode', value: 'INTERNAL', selected: true },
          { label: 'Sync Output', value: 'OFF' },
          { label: 'System Clock Source', value: 'USB' },
        ],
        selectedIndex: 0,
        statusText: 'SYNC/TEMPO tab — Sync Mode: INTERNAL (default)',
      },
      tipText: 'SYNC/TEMPO is the 8th tab — turn E1 clockwise to scroll there.',
    },
    {
      id: 'step-4',
      title: 'Sync Mode — INTERNAL (Master)',
      instruction:
        'With Sync Mode selected, confirm it is set to INTERNAL. In this mode the Fantom 08 is the tempo master — it generates the MIDI clock and all connected devices follow its tempo.',
      details:
        'INTERNAL is the default Sync Mode. The Fantom controls its own tempo via the Tempo parameter (5.00-300.00 BPM). When Sync Output is ON, external devices connected via MIDI OUT or USB receive clock, start, stop, and continue messages from the Fantom. Use INTERNAL when the Fantom is the centerpiece of your setup.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SYNC/TEMPO',
        menuItems: [
          { label: 'Sync Mode', value: 'INTERNAL', selected: true },
          { label: 'Sync Output', value: 'OFF' },
          { label: 'System Clock Source', value: 'USB' },
        ],
        selectedIndex: 0,
        statusText: 'INTERNAL — Fantom is the tempo master',
      },
      tipText:
        'INTERNAL means the Fantom generates the clock. Other devices follow the Fantom\'s tempo.',
    },
    {
      id: 'step-5',
      title: 'Sync Mode — REMOTE',
      instruction:
        'Turn the Value Dial to change Sync Mode to REMOTE. In this mode, the Fantom obeys start, continue, and stop messages from an external device but uses its own internal tempo setting.',
      details:
        'REMOTE is a hybrid mode: transport control comes from outside (a DAW can start and stop the Fantom\'s sequencer), but the tempo is determined by the Fantom\'s own Tempo setting, not by incoming clock pulses. This is useful when you want a DAW to trigger playback without drifting if the external clock is unstable.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SYNC/TEMPO',
        menuItems: [
          { label: 'Sync Mode', value: 'REMOTE', selected: true },
          { label: 'Sync Output', value: 'OFF' },
          { label: 'System Clock Source', value: 'USB' },
        ],
        selectedIndex: 0,
        statusText: 'REMOTE — obey start/stop, keep own tempo',
      },
      tipText:
        'REMOTE lets a DAW start/stop the sequencer while the Fantom keeps its own tempo.',
    },
    {
      id: 'step-6',
      title: 'Sync Mode — EXTERNAL (Slave)',
      instruction:
        'Turn the Value Dial again to set Sync Mode to EXTERNAL. Now the Fantom fully synchronizes to an incoming MIDI clock — both tempo and transport are controlled externally.',
      details:
        'In EXTERNAL mode, the Fantom\'s sequencer, arpeggiator, and all tempo-synced effects lock to the external clock source. The Fantom\'s own Tempo knob has no effect while in this mode. The clock source is determined by the System Clock Source parameter (next step).',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SYNC/TEMPO',
        menuItems: [
          { label: 'Sync Mode', value: 'EXTERNAL', selected: true },
          { label: 'Sync Output', value: 'OFF' },
          { label: 'System Clock Source', value: 'USB' },
        ],
        selectedIndex: 0,
        statusText: 'EXTERNAL — fully sync to incoming MIDI clock',
      },
      tipText:
        'In EXTERNAL mode the Fantom\'s tempo display shows the received BPM from the external source.',
    },
    {
      id: 'step-7',
      title: 'System Clock Source',
      instruction:
        'Press Cursor Down to move to System Clock Source. This parameter determines where the Fantom receives external clock when Sync Mode is EXTERNAL — either from the MIDI IN connector or the USB port.',
      details:
        'Set to MIDI if your clock source is connected via a 5-pin MIDI cable to the Fantom\'s MIDI IN jack. Set to USB if clock comes from a DAW or device connected over USB. This setting only matters when Sync Mode is EXTERNAL or REMOTE — in INTERNAL mode the Fantom ignores incoming clock.',
      highlightControls: ['cursor-down', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SYNC/TEMPO',
        menuItems: [
          { label: 'Sync Mode', value: 'EXTERNAL' },
          { label: 'Sync Output', value: 'OFF' },
          { label: 'System Clock Source', value: 'USB', selected: true },
        ],
        selectedIndex: 2,
        statusText: 'Clock Source: USB — receive clock from DAW over USB',
      },
      tipText:
        'Use USB for DAW sync over a single cable. Use MIDI for hardware sync via 5-pin DIN.',
    },
    {
      id: 'step-8',
      title: 'Enable Sync Output',
      instruction:
        'Press Cursor Up to move to Sync Output and turn the Value Dial to set it to ON. This makes the Fantom transmit MIDI clock, start, stop, and continue messages to other connected devices.',
      details:
        'When Sync Output is ON, any device connected to the Fantom\'s MIDI OUT or USB port receives clock messages. This is essential for daisy-chaining gear — for example, sending clock from the Fantom to a drum machine and a delay pedal so everything stays in sync. Sync Output works in any Sync Mode, so even in EXTERNAL mode the Fantom can relay clock to downstream devices.',
      highlightControls: ['cursor-up', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'SYNC/TEMPO',
        menuItems: [
          { label: 'Sync Mode', value: 'EXTERNAL' },
          { label: 'Sync Output', value: 'ON', selected: true },
          { label: 'System Clock Source', value: 'USB' },
        ],
        selectedIndex: 1,
        statusText: 'Sync Output: ON — transmit clock to other devices',
      },
      tipText:
        'With Sync Output ON, the Fantom sends clock/start/stop/continue to all connected MIDI devices.',
    },
    {
      id: 'step-9',
      title: 'Click Settings',
      instruction:
        'Turn E1 to scroll to the CLICK tab. Here you can configure the metronome click — including Click Mode, Click Level (0-10), Click Sound (TYPE1-TYPE4), Click Accent Switch, and Click Output Assign.',
      details:
        'Click Mode options: OFF (no click), PLAY-ONLY (click during song playback), REC-ONLY (click during recording), PLAY&REC (click during playback and recording), ALWAYS (click sounds at all times). Click Sound choices: TYPE1 (conventional metronome), TYPE2 (click), TYPE3 (beep), TYPE4 (cowbell). Click Output Assign routes the click to MAIN or SUB outputs.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'CLICK',
        menuItems: [
          { label: 'Click Mode', value: 'OFF', selected: true },
          { label: 'Click Level', value: '5' },
          { label: 'Click Sound', value: 'TYPE1' },
          { label: 'Click Accent Switch', value: 'OFF' },
          { label: 'Click Output Assign', value: 'MAIN' },
        ],
        selectedIndex: 0,
        statusText: 'CLICK tab — configure metronome click settings',
      },
      tipText:
        'TYPE1 is a conventional metronome bell, TYPE4 is a cowbell — choose what suits your style.',
    },
    {
      id: 'step-10',
      title: 'Tap Tempo',
      instruction:
        'Press Exit to return to the home screen. Now tap the Tempo button rhythmically to set the tempo in real time. Each tap adjusts the BPM to match your tapping speed.',
      details:
        'Tap Tempo is the fastest way to match the Fantom\'s tempo to a song or live performance. Tap the Tempo button at least 3-4 times for an accurate reading. The tempo range is 5.00-300.00 BPM. This works in INTERNAL and REMOTE sync modes. In EXTERNAL mode, the tempo is controlled by the incoming clock and the Tempo button has no effect.',
      highlightControls: ['tempo'],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Studio Session',
        tempo: 128,
        beatSignature: '4/4',
        statusText: 'Tap Tempo — tap the button to set BPM',
      },
      tipText:
        'Tap at least 3-4 times for an accurate tempo reading. Works in INTERNAL and REMOTE modes only.',
    },
    {
      id: 'step-11',
      title: 'Tutorial Complete!',
      instruction:
        'You now understand MIDI sync and clock on the Fantom 08. You can set the Fantom as master (INTERNAL), follow external transport (REMOTE), fully slave to an external clock (EXTERNAL), enable clock output, and configure the click/metronome.',
      details:
        'Key takeaways: INTERNAL = Fantom is master, generates clock. REMOTE = Fantom uses own tempo but obeys external start/stop. EXTERNAL = Fantom fully follows incoming clock from MIDI or USB. Sync Output sends clock to downstream devices. The CLICK tab configures the metronome. Tap Tempo quickly sets the BPM in INTERNAL or REMOTE mode. These settings are saved as system-level parameters — they persist across all scenes.',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Studio Session',
        tempo: 128,
        beatSignature: '4/4',
        statusText: 'Complete — MIDI sync & clock configured',
      },
      tipText:
        'Sync settings are system-level — they persist across scenes and power cycles after saving.',
    },
  ],
};
