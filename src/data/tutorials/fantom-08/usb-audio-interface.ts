import { Tutorial } from '@/types/tutorial';

export const usbAudioInterface: Tutorial = {
  id: 'usb-audio-interface',
  deviceId: 'fantom-08',
  title: 'USB Audio Interface Setup',
  description:
    'Configure the Fantom 08 as a USB audio interface for bidirectional audio with your computer. Set up USB driver mode, enable USB audio input/output, route plug-in synthesizers through the Fantom, and adjust USB output levels via the Mixer.',
  category: 'midi',
  difficulty: 'intermediate',
  estimatedTime: '8 min',
  tags: ['usb', 'audio', 'interface', 'daw', 'plug-in', 'recording', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to USB Audio',
      instruction:
        'The Fantom can work as a USB audio interface, sending and receiving audio to/from your computer. You can use it to play plug-in synthesizers through the Fantom\'s speakers, record the Fantom into your DAW, or combine both for a seamless studio setup.',
      details:
        'USB audio works alongside MIDI over a single USB cable when using VENDOR driver mode. Audio input lets you hear your DAW/plug-ins through the Fantom\'s OUTPUT jacks. Audio output sends the Fantom\'s sound to your DAW for recording. Both directions can run simultaneously.',
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
      title: 'Set USB Driver to VENDOR',
      instruction:
        'Press MENU → navigate to SYSTEM → GENERAL tab. Find the USB Driver parameter and set it to VENDOR for full audio and MIDI support. Press WRITE to save, then power cycle the Fantom to apply the change.',
      details:
        'There are two driver modes: VENDOR (full MIDI + multi-channel audio, requires Roland USB driver on your computer) and GENERIC (MIDI only, no driver needed). VENDOR mode is required for USB audio. After changing this setting, turn the Fantom off and on again.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'Auto Off', value: '4 Hours' },
          { label: 'USB Driver', value: 'VENDOR', selected: true },
          { label: 'LCD Brightness', value: '10' },
          { label: 'LED Brightness', value: '7' },
        ],
        selectedIndex: 1,
        statusText: 'GENERAL tab — USB Driver = VENDOR',
      },
      tipText:
        'Download the Roland USB driver from roland.com before changing to VENDOR mode.',
    },
    {
      id: 'step-3',
      title: 'Open USB Audio Settings',
      instruction:
        'In the SYSTEM screen, touch the USB tab on the left sidebar. The USB AUDIO section shows Input and Output settings. USB Audio Mix/Parallel controls how audio channels are routed between the Fantom and your computer.',
      details:
        'The USB tab contains all USB audio parameters: Mix/Parallel mode, Input Switch and Level, Output Switch and Level. These are system-level settings that apply across all scenes.',
      highlightControls: ['function-e1'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'USB',
        menuItems: [
          { label: 'USB Audio Mix/Parallel', value: 'MIX', selected: true },
          { label: 'USB Audio Input Switch', value: 'ON' },
          { label: 'USB Audio Input Level', value: '127' },
          { label: 'USB Audio Output Switch', value: 'ON' },
          { label: 'USB Audio Output Level', value: '64' },
        ],
        selectedIndex: 0,
        statusText: 'USB tab — audio I/O settings',
      },
      tipText:
        'Use E1 knob to scroll through tabs on the left sidebar.',
    },
    {
      id: 'step-4',
      title: 'Set Mix/Parallel Mode',
      instruction:
        'MIX combines all Fantom audio to USB channels 1-2 (stereo recording). PARALLEL sends each zone on separate USB channels (multi-track recording). Choose MIX for basic use or PARALLEL for advanced DAW recording.',
      details:
        'MIX mode is simpler — your DAW records a single stereo track. PARALLEL mode sends zones on separate channels, letting you mix and process each zone independently in the DAW. Most users should start with MIX.',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'popup',
        popupData: {
          popupType: 'value',
        },
        parameterName: 'USB Audio Mix/Parallel',
        parameterValue: 'MIX',
      },
    },
    {
      id: 'step-5',
      title: 'Enable USB Audio Input',
      instruction:
        'Set USB Audio Input Switch to ON. Audio from your computer (DAW playback, plug-in synths) will now be heard through the Fantom\'s OUTPUT jacks. Adjust USB Audio Input Level (0-127) to set the incoming volume.',
      details:
        'USB Audio Input receives audio from your computer and routes it to the Fantom\'s main output. This is essential for hearing plug-in synthesizers, DAW playback, or backing tracks through the Fantom\'s speakers or headphone output.',
      highlightControls: ['function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'USB',
        menuItems: [
          { label: 'USB Audio Mix/Parallel', value: 'MIX' },
          { label: 'USB Audio Input Switch', value: 'ON', selected: true },
          { label: 'USB Audio Input Level', value: '127' },
          { label: 'USB Audio Output Switch', value: 'ON' },
          { label: 'USB Audio Output Level', value: '64' },
        ],
        selectedIndex: 1,
        statusText: 'Input enabled — hear computer audio from Fantom',
      },
      tipText:
        'Set Input Level to 127 for unity gain, or lower it if the incoming audio is too loud.',
    },
    {
      id: 'step-6',
      title: 'Enable USB Audio Output',
      instruction:
        'Set USB Audio Output Switch to ON. The Fantom\'s audio will be sent to your computer via USB for recording in your DAW. Adjust USB Audio Output Level (0-127) to set the recording volume.',
      details:
        'USB Audio Output sends the Fantom\'s master output to your computer. In your DAW, select the Fantom as an audio input device and create an audio track to record. The output level controls how hot the signal arrives in your DAW.',
      highlightControls: ['function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'USB',
        menuItems: [
          { label: 'USB Audio Mix/Parallel', value: 'MIX' },
          { label: 'USB Audio Input Switch', value: 'ON' },
          { label: 'USB Audio Input Level', value: '127' },
          { label: 'USB Audio Output Switch', value: 'ON', selected: true },
          { label: 'USB Audio Output Level', value: '64' },
        ],
        selectedIndex: 3,
        statusText: 'Output enabled — record Fantom in your DAW',
      },
      tipText:
        'Start with Output Level at 64 and increase if the recording level is too low.',
    },
    {
      id: 'step-7',
      title: 'Save USB Settings',
      instruction:
        'Press WRITE to save system settings. USB audio settings are global (system-level), not per-scene — they persist across all scenes and power cycles once saved.',
      details:
        'System settings must be saved explicitly with WRITE. If you change USB audio parameters without saving, they will revert when you power off. The confirmation screen shows "System Settings" to confirm what you are saving.',
      highlightControls: ['write'],
      panelStateChanges: {
        write: { active: true },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'USB',
        menuItems: [
          { label: 'USB Audio Mix/Parallel', value: 'MIX' },
          { label: 'USB Audio Input Switch', value: 'ON' },
          { label: 'USB Audio Input Level', value: '127' },
          { label: 'USB Audio Output Switch', value: 'ON' },
          { label: 'USB Audio Output Level', value: '64' },
        ],
        selectedIndex: 0,
        statusText: 'System Settings saved',
      },
      tipText:
        'Always press WRITE after changing system settings to make them permanent.',
    },
    {
      id: 'step-8',
      title: 'Plug-in Synth Live Workflow',
      instruction:
        'Connect a USB cable to your computer. In your DAW, load a plug-in synth on an external MIDI track and set the MIDI output to the Fantom. Play the keyboard — MIDI goes to the computer, the plug-in generates audio, USB audio returns to the Fantom, and you hear it from the OUTPUT jacks.',
      details:
        'This is the "Performing Live with a Plug-in Synthesizer" workflow from the manual (p.142). The Fantom acts as both a MIDI controller and an audio monitor. Latency depends on your computer\'s audio buffer size — lower buffer = less latency but more CPU load.',
      highlightControls: [],
      panelStateChanges: {
        write: { active: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Plug-in Synth: USB Audio Active',
      },
      tipText:
        'Set your DAW audio buffer to 128 or 256 samples for low-latency monitoring.',
    },
    {
      id: 'step-9',
      title: 'Adjust USB Output via Mixer',
      instruction:
        'Press MENU → MIXER. Select the OUT/USB tab at the bottom. Adjust USB OUT level for recording volume. Alternative shortcut: hold SHIFT + press PAN/LEVEL button to jump directly to the Mixer.',
      details:
        'The Mixer\'s OUT/USB tab shows the USB output level alongside the master volume and per-zone levels. This gives you a visual mixer view for balancing USB recording levels without diving into the System Settings.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'mixer',
        title: 'MIXER',
        menuItems: [
          { label: 'USB OUT Level', value: '100', selected: true },
          { label: 'Master Volume', value: '100' },
          { label: 'Zone 1', value: '100' },
          { label: 'Zone 2', value: '100' },
        ],
        statusText: 'OUT/USB',
      },
      tipText:
        'SHIFT + PAN/LEVEL is a quick shortcut to open the Mixer.',
    },
    {
      id: 'step-10',
      title: 'USB Audio Setup Complete!',
      instruction:
        'Press EXIT to return home. The Fantom is now configured as a USB audio interface. USB audio works alongside MIDI for integrated DAW workflows — record the Fantom, monitor plug-ins, or do both simultaneously.',
      details:
        'Summary: (1) USB Driver = VENDOR for audio + MIDI, (2) USB Audio Input ON to hear computer audio, (3) USB Audio Output ON to record the Fantom, (4) Mix/Parallel controls channel routing, (5) Save system settings with WRITE. These settings persist across scenes.',
      highlightControls: ['exit'],
      panelStateChanges: {
        menu: { active: false },
        exit: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'USB Audio Interface configured',
      },
      tipText:
        'USB audio settings are system-level — they apply to all scenes automatically.',
    },
  ],
};
