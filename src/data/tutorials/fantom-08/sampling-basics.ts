import { Tutorial } from '@/types/tutorial';

export const samplingBasics: Tutorial = {
  id: 'sampling-basics',
  deviceId: 'fantom-08',
  title: 'Sampling Basics — Record and Assign to Pad',
  description:
    'Learn the fundamentals of sampling on the Fantom 08: record an audio source, preview your sample, and assign it to a pad for instant playback.',
  category: 'sampling',
  difficulty: 'beginner',
  estimatedTime: '8 min',
  tags: ['sampling', 'pads', 'recording', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Sampling',
      instruction:
        'The Fantom 08 has a built-in sampler that lets you record audio from a microphone, line input, or the internal sound engine, and then play it back from the keyboard or pads.',
      details:
        "In this tutorial, you'll learn how to access the Sampling screen, set your input source and gain, record a sample, and assign it to a pad for instant triggering.",
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
      title: 'Open the Sampling Screen',
      instruction:
        'Press the Sampling button (in the Pad section) to open the Sampling Standby screen.',
      details:
        'The Sampling button launches the sampler workflow. The standby screen shows input parameters, a time counter, and a level meter so you can prepare before recording.',
      highlightControls: ['sampling'],
      panelStateChanges: {
        sampling: { active: true, ledOn: true },
      },
      displayState: {
        screenType: 'sampling',
        title: 'SAMPLING STANDBY',
        statusText: 'STANDBY',
        menuItems: [
          { label: 'Sampling Mode: MONO', selected: true },
          { label: 'Format: WAV 44.1kHz' },
          { label: 'AUDIO IN: ON' },
          { label: 'Click: OFF' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'The Sampling button is located in the Pad section of the panel, near the 16 performance pads.',
    },
    {
      id: 'step-3',
      title: 'Select the Input Source',
      instruction:
        'Turn the E1 knob to choose your input source. Select MIC to sample from an external microphone connected to the rear panel.',
      details:
        'The E1 knob scrolls through sampling modes and source options. Available sources include MIC (external microphone), LINE (line-level input), and DIGITAL (USB audio). Make sure your mic or audio source is connected before proceeding.',
      highlightControls: ['function-e1'],
      panelStateChanges: {},
      displayState: {
        screenType: 'sampling',
        title: 'SAMPLING STANDBY',
        statusText: 'STANDBY',
        menuItems: [
          { label: 'Sampling Mode: MONO' },
          { label: 'Format: WAV 44.1kHz' },
          { label: 'AUDIO IN: ON', selected: true },
          { label: 'Click: OFF' },
        ],
        selectedIndex: 2,
      },
      tipText:
        'If you do not have a mic, you can sample the internal sound engine by setting AUDIO IN to OFF and playing the keyboard while recording.',
    },
    {
      id: 'step-4',
      title: 'Adjust Input Gain',
      instruction:
        'Turn the E2 knob to adjust the input level. Watch the level meter on the right side of the display and aim for a strong signal that does not clip (stay out of the red).',
      details:
        'Setting proper gain is critical for a clean sample. The level meter shows L/R channel levels in real time. The signal should peak in the yellow zone without hitting red. Too low and the sample will be noisy; too high and it will distort.',
      highlightControls: ['function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'sampling',
        title: 'SAMPLING STANDBY',
        statusText: 'STANDBY',
        menuItems: [
          { label: 'Sampling Mode: MONO' },
          { label: 'Format: WAV 44.1kHz' },
          { label: 'AUDIO IN: ON' },
          { label: 'Input Gain: 75%', selected: true },
        ],
        selectedIndex: 3,
      },
      tipText:
        'Speak or play into the mic while adjusting gain. The meter responds in real time so you can dial in the right level before recording.',
    },
    {
      id: 'step-5',
      title: 'Arm Recording',
      instruction:
        'Press the REC button on the transport controls. The REC LED lights up red, indicating the sampler is armed and ready to record.',
      details:
        'Arming sets the sampler into a ready state. It will not begin recording yet. This gives you a moment to prepare your sound source. The next step will actually start the recording.',
      highlightControls: ['rec'],
      panelStateChanges: {
        rec: { active: true, ledOn: true, ledColor: '#ff2222' },
      },
      displayState: {
        screenType: 'sampling',
        title: 'SAMPLING STANDBY',
        statusText: 'ARMED',
        menuItems: [
          { label: 'Sampling Mode: MONO' },
          { label: 'Format: WAV 44.1kHz' },
          { label: 'AUDIO IN: ON' },
          { label: 'Input Gain: 75%' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'The REC LED glows red when armed. You can also set Auto Trigger to start recording automatically when the input level exceeds a threshold.',
    },
    {
      id: 'step-6',
      title: 'Start and Stop Recording',
      instruction:
        'Press PLAY to begin recording. Perform your sound, then press STOP when finished. The time counter on the display advances while recording.',
      details:
        'Once you press PLAY, the status changes to NOW SAMPLING and the timer starts counting. Record your sound — a vocal phrase, a guitar riff, or any audio. Press STOP when done. The Fantom can record up to several minutes depending on available sample memory.',
      highlightControls: ['play', 'stop'],
      panelStateChanges: {
        play: { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'sampling',
        title: 'NOW SAMPLING',
        statusText: 'NOW SAMPLING',
        menuItems: [
          { label: 'Time: 000:03:42' },
          { label: 'Format: WAV 44.1kHz' },
          { label: 'AUDIO IN: ON' },
          { label: 'Level: ||||||||' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'Keep an eye on the level meter while recording. If it clips into the red, stop and redo with lower gain.',
    },
    {
      id: 'step-7',
      title: 'Preview the Captured Sample',
      instruction:
        'After stopping, a "Use new sample?" dialog appears with a waveform preview. Press E1 (PREVIEW) to listen to your recording. Press E6 (OK) to accept the sample.',
      details:
        'The preview dialog shows the waveform of your recorded audio. Use PREVIEW to audition it. If you are not satisfied, press E4 (RETRY) to record again, or E5 (CANCEL) to discard. Pressing OK saves the sample and proceeds to pad assignment.',
      highlightControls: ['function-e1', 'function-e6'],
      panelStateChanges: {
        play: { active: false, ledOn: false },
        rec: { active: false, ledOn: false },
        stop: { active: true },
      },
      displayState: {
        screenType: 'sampling',
        title: 'SAMPLING COMPLETE',
        statusText: 'Use new sample?',
        menuItems: [
          { label: '[E1] PREVIEW' },
          { label: '[E4] RETRY' },
          { label: '[E5] CANCEL' },
          { label: '[E6] OK', selected: true },
        ],
        selectedIndex: 3,
      },
      tipText:
        'Always preview your sample before accepting. You can retry as many times as needed to get a clean recording.',
    },
    {
      id: 'step-8',
      title: 'Assign Sample to a Pad',
      instruction:
        'The Sample Pad screen now shows the 4x4 pad grid. Your new sample has been assigned to Pad 1. Press Pad 1 to trigger and play back the sample.',
      details:
        'The Sample Pad screen displays all 16 pads in a grid. Each pad shows the name of its assigned sample and a level bar. You can assign samples to any empty pad. Pressing a pad triggers instant playback of its sample.',
      highlightControls: ['pad-1'],
      panelStateChanges: {
        stop: { active: false },
        sampling: { active: false, ledOn: false },
        'pad-1': { active: true, ledOn: true, ledColor: '#00ff44' },
      },
      displayState: {
        screenType: 'sample-pad',
        title: 'SAMPLE PAD',
        menuItems: [
          { label: 'Pad 1: smpl0001', selected: true },
          { label: 'Pad 2: ---' },
          { label: 'Pad 3: ---' },
          { label: 'Pad 4: ---' },
        ],
        selectedIndex: 0,
      },
      tipText:
        'You can assign up to 16 samples across the pad bank. Each pad can hold a different sample for building drum kits or sound effects.',
    },
    {
      id: 'step-9',
      title: 'Sampling Complete!',
      instruction:
        'Press Exit to return to the home screen. Your sample is saved and ready to use. You can access it anytime from the Sampling button or by pressing the pad.',
      details:
        'Congratulations! You have recorded your first sample on the Fantom 08. From here, you can record more samples to fill out the pad bank, edit the sample waveform, or assign samples to the keyboard for melodic playback. Explore the SAMPLE PAD QUICK EDIT and WAVE EDIT screens to trim and fine-tune your samples.',
      highlightControls: ['exit'],
      panelStateChanges: {
        'pad-1': { active: false, ledOn: false },
        exit: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
      },
      tipText:
        'Your samples persist in the Fantom memory until you delete them. Use Write to save the scene if you want to keep pad assignments across power cycles.',
    },
  ],
};
