import { Tutorial } from '@/types/tutorial';

export const vocoderAudioInput: Tutorial = {
  id: 'vocoder-audio-input',
  deviceId: 'fantom-08',
  title: 'Vocoder and Audio Input',
  description:
    'Set up the Fantom 08\'s vocoder effect and audio input processing. Learn to connect a microphone, configure input effects (Low Cut, Noise Suppressor, MFX, EQ, Reverb), select vocoder presets, choose carrier zones, and edit Voice Character Control parameters.',
  category: 'effects',
  difficulty: 'intermediate',
  estimatedTime: '7 min',
  tags: ['vocoder', 'audio-input', 'microphone', 'effects', 'intermediate'],
  steps: [
    {
      id: 'step-1',
      title: 'What is a Vocoder?',
      instruction:
        'A vocoder applies the character of a human voice to a synth sound, letting you "play melodies with your voice." You speak or sing into a microphone while playing the keyboard — the keyboard controls the pitch, and your voice shapes the tone.',
      details:
        'The Fantom 08\'s vocoder features: Voice Character Control (up to 32 bandpass filters), flexible carrier input (select any zone as the carrier), a Stereo Switch for spacious sound, and 10 built-in vocoder presets (Voc.Large Choir, Voc.Future Lead, Voc.Robot, etc.).',
      highlightControls: [],
      panelStateChanges: {},
      displayState: {
        screenType: 'home',
        sceneNumber: 'B003',
        sceneName: 'Synth Pad',
        tempo: 110,
        beatSignature: '4/4',
      },
    },
    {
      id: 'step-2',
      title: 'Open Effects Edit — Audio In',
      instruction:
        'Press the Menu button, then touch EFFECTS EDIT. Select the AUDIO IN tab. This shows the full audio input signal chain: MIC/LINE input, Low Cut, Vocoder, Noise Suppressor, MFX, EQ, Reverb, Level, Pan, and Output Assign.',
      details:
        'The EFFECTS EDIT Audio In screen displays a signal routing diagram. Each block (LOWCUT, VOCODER, NS, MFX, EQ, REV) can be turned on/off and edited independently. [E1] AUDIO IN turns the input on/off.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'effects-edit',
        title: 'EFFECTS EDIT — AUDIO IN',
        statusText: 'Audio input signal chain',
      },
    },
    {
      id: 'step-3',
      title: 'Enable Audio Input',
      instruction:
        'Touch [E1] AUDIO IN to turn the audio input ON. If this is off, no signal from the MIC/LINE INPUT jacks is processed. Also select LINE or MIC depending on your connected device.',
      details:
        'LINE: for line-level audio devices (keyboards, mixers). MIC: for microphones. If using a condenser mic that needs phantom power, you\'ll need an external preamp — the Fantom does not provide phantom power. Adjust the rear panel LEVEL knob to set initial input volume.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'effects-edit',
        title: 'EFFECTS EDIT — AUDIO IN',
        statusText: 'AUDIO IN: ON — MIC selected',
      },
      tipText:
        'The AUDIO IN setting is always OFF when you turn on the power. You must enable it each session.',
    },
    {
      id: 'step-4',
      title: 'Configure Low Cut and Noise Suppressor',
      instruction:
        'Touch the LOWCUT icon to enable it — this removes low-frequency rumble from the mic input. Then touch NS (Noise Suppressor) to reduce background noise.',
      details:
        'Low Cut filters out unwanted low frequencies below a threshold. The Noise Suppressor reduces ambient noise when you\'re not singing. Both are especially important for live performance to keep the signal clean.',
      highlightControls: ['cursor-down', 'value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'effects-edit',
        title: 'EFFECTS EDIT — AUDIO IN',
        statusText: 'LOWCUT: ON, NS: ON',
      },
    },
    {
      id: 'step-5',
      title: 'Enable the Vocoder',
      instruction:
        'Touch the VOCODER icon on the routing diagram to turn the vocoder ON. Then touch EDIT next to the VOCODER block to open the VOCODER ZONE SELECT screen.',
      details:
        'The VOCODER ZONE SELECT screen shows: the current Vocoder Setting preset (e.g., PRESET 001:Voc.Large Choir), zone information, and options for Audio In, Set Recommended Tone, and Vocoder Edit.',
      highlightControls: ['enter'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'menu',
        title: 'VOCODER ZONE SELECT',
        menuItems: [
          { label: 'VOCODER SETTING: PRESET 001:Voc.Large Choir' },
          { label: 'Zone 3 — TONE: 1780:#Dreaming Lite' },
          { label: 'AUDIO IN' },
          { label: 'SET RECOMMENDED TONE' },
          { label: 'VOCODER EDIT' },
        ],
        selectedIndex: 0,
        statusText: 'Select carrier zone and preset',
      },
    },
    {
      id: 'step-6',
      title: 'Select Carrier Zone',
      instruction:
        'Touch the zone icons at the bottom to select which zone(s) will be the vocoder carrier. The selected zone\'s icon becomes brighter. Play the keyboard while singing into the mic to hear the vocoder effect.',
      details:
        'The carrier is the synth sound that gets shaped by your voice. Pad and choir-type sounds work best as carriers. You can select multiple zones as carriers for rich layered vocoder sounds. The carrier zone no longer produces its normal sound — it only responds to the vocoder.',
      highlightControls: ['zone-1', 'zone-2'],
      panelStateChanges: {
        'zone-1': { active: true, ledOn: true, ledColor: '#3B82F6' },
      },
      displayState: {
        screenType: 'menu',
        title: 'VOCODER ZONE SELECT',
        menuItems: [
          { label: 'VOCODER SETTING: PRESET 001:Voc.Large Choir' },
          { label: 'Zone 1 — Selected as carrier' },
          { label: 'Zone 3 — TONE: 1780:#Dreaming Lite' },
          { label: 'AUDIO IN' },
          { label: 'SET RECOMMENDED TONE' },
        ],
        selectedIndex: 1,
        statusText: 'Zone 1 selected as carrier',
      },
      tipText:
        'You can select multiple zones as carriers. The vocoder does not work if you specify an EXT zone or PAD zone as the carrier.',
    },
    {
      id: 'step-7',
      title: 'Browse Vocoder Presets',
      instruction:
        'Move the cursor to the VOCODER SETTING number and use the Value dial to browse through the 10 built-in presets. Each preset has a different character — try them while playing and singing.',
      details:
        'Presets: 001 Voc.Large Choir (rich choir), 002 Voc.Future Lead (aggressive sync), 003 Voc.Ensamble (standard), 004 Voc.Robot (robotic), 005 Voc.5th Stack (harmony at a fifth), 006 Voc.VP-330 (classic VP-330), 007 Voc.Saw (bright sawtooth), 008 Voc.Noise (explosive), 009 Voc.Sub Choir 1 (Mod lever harmony), 010 Voc.Sub Choir 2 (soft harmony).',
      highlightControls: ['value-dial'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'VOCODER ZONE SELECT',
        menuItems: [
          { label: 'VOCODER SETTING: PRESET 004:Voc.Robot' },
          { label: 'Zone 1 — Selected as carrier' },
          { label: 'Zone 3 — TONE: 1780:#Dreaming Lite' },
          { label: 'AUDIO IN' },
          { label: 'SET RECOMMENDED TONE' },
        ],
        selectedIndex: 0,
        statusText: 'Browsing presets — 004:Voc.Robot',
      },
    },
    {
      id: 'step-8',
      title: 'Set Recommended Tone',
      instruction:
        'Turn [E3]–[E5] SET RECOMMENDED TONE on. This automatically assigns the current zone a tone that is ideal as a carrier for the selected VOCODER SETTING.',
      details:
        'Each VOCODER SETTING has an associated recommended carrier tone. When SET RECOMMENDED TONE is on, changing the VOCODER SETTING also changes the carrier zone\'s tone to match. Turn it off if you want to keep your own carrier tone.',
      highlightControls: ['function-e3'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'VOCODER ZONE SELECT',
        menuItems: [
          { label: 'VOCODER SETTING: PRESET 004:Voc.Robot' },
          { label: 'Zone 1 — Carrier with recommended tone' },
          { label: 'SET RECOMMENDED TONE: ON' },
          { label: 'AUDIO IN' },
          { label: 'VOCODER EDIT' },
        ],
        selectedIndex: 2,
        statusText: 'Recommended tone applied to carrier',
      },
    },
    {
      id: 'step-9',
      title: 'Edit Voice Character Control',
      instruction:
        'Touch VOCODER EDIT (or select [E6]) to open the VOCODER EDIT screen. Here you can adjust Envelope, Vocoder Type (13Band), Carrier Level, Stereo Switch, Mic Sens, Mic HPF, Mic Mix Level, and Level.',
      details:
        'The Voice Character Control section lets you shape the vocoder\'s formant bands (up to 32 bands). Touch the VOICE CHARACTER CONTROL area to open the graphical band editor where you can draw custom frequency curves. Use FLAT to reset all bands, or Dice for random settings.',
      highlightControls: ['function-e6', 'cursor-up', 'cursor-down'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'VOCODER EDIT',
        menuItems: [
          { label: 'PRESET 004:Voc.Robot' },
          { label: 'Envelope: LONG' },
          { label: 'Vocoder Type: 13Band' },
          { label: 'Stereo Switch: ON' },
          { label: 'Mic Sens: 120' },
          { label: 'Mic HPF: R000(Hz)' },
          { label: 'Carrier Level: 120' },
          { label: 'Level: 5' },
        ],
        selectedIndex: 1,
        statusText: 'Edit vocoder parameters',
      },
      tipText:
        'Preventing feedback: if you hear howling or screeching, move the mic away from speakers, lower the volume, adjust Mic Sens, or enable the Noise Suppressor.',
    },
    {
      id: 'step-10',
      title: 'Vocoder Setup Complete!',
      instruction:
        'Press Exit to return to the home screen. To keep your vocoder settings, save the scene — the VOCODER tab in SCENE EDIT stores Vocoder Setting Bank/Num, Zone Select, and audio settings.',
      details:
        'To save vocoder presets to the User bank, touch WRITE on the VOCODER EDIT screen. This opens the VOCODER SETTING WRITE screen where you can name and save your custom settings. The scene remembers all vocoder parameters including AUDIO IN on/off.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'zone-1': { active: false, ledOn: false },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'B003',
        sceneName: 'Synth Pad',
        tempo: 110,
        beatSignature: '4/4',
      },
      tipText:
        'Remember: AUDIO IN is always OFF at power-on. You need to enable it each time you use the vocoder.',
    },
  ],
};
