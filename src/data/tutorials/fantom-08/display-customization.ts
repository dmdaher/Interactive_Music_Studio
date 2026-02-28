import { Tutorial } from '@/types/tutorial';

export const displayCustomization: Tutorial = {
  id: 'display-customization',
  deviceId: 'fantom-08',
  title: 'Display Customization',
  description:
    'Personalize the Fantom\'s display with wallpapers, adjust LCD and LED brightness, configure wheel LED brightness, and toggle the Zone Switch Indicator for visual feedback while playing.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedTime: '5 min',
  tags: ['display', 'wallpaper', 'brightness', 'led', 'customization', 'beginner'],
  steps: [
    {
      id: 'step-1',
      title: 'Introduction to Display Customization',
      instruction:
        'The Fantom lets you customize its display with different wallpapers, adjust brightness levels, and control LED indicators. This tutorial covers all the visual customization options.',
      details:
        'Display settings include wallpaper selection with color tinting, LCD screen brightness, panel LED brightness, wheel LED brightness, and the Zone Switch Indicator that shows which zones are producing sound.',
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
      title: 'Open Wallpaper Settings',
      instruction:
        'Press MENU → UTILITY → WALLPAPER. The WALLPAPER screen shows a preview of the current background image with the wallpaper number displayed. Use the VALUE dial to browse through available wallpapers.',
      details:
        'The Wallpaper screen is accessed through the UTILITY menu. It shows a live preview of the selected wallpaper along with its number and color adjustment controls.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'menu',
        title: 'WALLPAPER',
        menuItems: [
          { label: 'Wallpaper: 11', selected: true },
        ],
        selectedIndex: 0,
        statusText: 'Use VALUE dial to select wallpaper',
      },
      tipText: 'WALLPAPER is in the UTILITY menu, accessible from the main MENU.',
    },
    {
      id: 'step-3',
      title: 'Select a Wallpaper',
      instruction:
        'Turn the VALUE dial to browse through available wallpapers. The preview updates in real-time as you scroll. Multiple built-in wallpapers are available with different designs and color schemes.',
      details:
        'The Fantom includes a variety of wallpaper designs. Each wallpaper has a unique number. Simply turn the VALUE dial to cycle through them and find one you like.',
      highlightControls: ['value-dial'],
      panelStateChanges: {
        menu: { active: false },
      },
      displayState: {
        screenType: 'menu',
        title: 'WALLPAPER',
        menuItems: [
          { label: 'Wallpaper: 05', selected: true },
        ],
        selectedIndex: 0,
        statusText: 'Wallpaper preview updating',
      },
      tipText: 'Preview updates immediately as you turn the dial.',
    },
    {
      id: 'step-4',
      title: 'Adjust Wallpaper Colors',
      instruction:
        'Fine-tune the wallpaper appearance: E2 Alpha adjusts brightness/transparency (0-255). E3 R adjusts the red hue. E4 G adjusts the green hue. E5 B adjusts the blue hue. These let you tint the wallpaper to match your preference.',
      details:
        'Alpha controls the overall brightness/transparency of the wallpaper image. The R, G, B controls add color tints. For example, increase R and decrease G/B for a warm red tint, or increase B for a cool blue look.',
      highlightControls: ['function-e2'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'WALLPAPER',
        menuItems: [
          { label: 'Wallpaper: 05' },
          { label: 'Alpha: 160', selected: true },
          { label: 'R: 25' },
          { label: 'G: 25' },
          { label: 'B: 25' },
        ],
        selectedIndex: 1,
        statusText: 'E2=Alpha E3=R E4=G E5=B',
      },
      tipText: 'Alpha 255 = full brightness. Lower values dim the wallpaper.',
    },
    {
      id: 'step-5',
      title: 'Save and Exit Wallpaper',
      instruction:
        'Press EXIT to leave the wallpaper screen. Settings are saved automatically — no need to press WRITE. The wallpaper applies immediately and persists across power cycles.',
      details:
        'Unlike most other settings, wallpaper changes are saved automatically when you exit the screen. This is one of the few settings that does not require pressing WRITE.',
      highlightControls: ['exit'],
      panelStateChanges: {},
      displayState: {
        screenType: 'menu',
        title: 'UTILITY MENU',
        menuItems: [
          { label: 'WALLPAPER', selected: true },
          { label: 'USB MEMORY FORMAT' },
          { label: 'FACTORY RESET' },
        ],
        selectedIndex: 0,
        statusText: 'Wallpaper saved automatically',
      },
      tipText: 'Wallpaper saves automatically — no WRITE needed.',
    },
    {
      id: 'step-6',
      title: 'Adjust LCD and LED Brightness',
      instruction:
        'Press MENU → SYSTEM → GENERAL tab. Find the brightness settings: LCD Brightness (1-20) controls the screen brightness. LED Brightness (OFF, 1-5, MAX) controls all panel LED intensity. Wheel LED Brightness (OFF, 1-5, MAX) controls the pitch/mod wheel indicator LEDs independently.',
      details:
        'LCD Brightness affects the touchscreen display. Higher values make it easier to see in bright environments. LED Brightness controls the intensity of all panel button LEDs. Wheel LED Brightness specifically controls the LED rings on the pitch bend and modulation wheels.',
      highlightControls: ['menu'],
      panelStateChanges: {
        menu: { active: true },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'LCD Brightness', value: '20', selected: true },
          { label: 'LED Brightness', value: 'MAX' },
          { label: 'Wheel LED Brightness', value: 'MAX' },
          { label: 'Zone Sw Indicator', value: 'ON' },
        ],
        selectedIndex: 0,
        statusText: 'Display brightness settings',
      },
      tipText: 'Lower LED brightness for dim stages to avoid distracting the audience.',
    },
    {
      id: 'step-7',
      title: 'Toggle Zone Switch Indicator',
      instruction:
        'Zone Sw Indicator (ON/OFF): when ON, zone buttons for active sound engines blink when you play the keyboard. This visual feedback shows which zones are producing sound. Press WRITE to save system settings.',
      details:
        'The Zone Switch Indicator causes the zone buttons (Zone 1-8) to flash their LEDs when a note triggers that zone\'s sound engine. This is helpful for confirming which zones are active in a multi-zone setup, especially when using splits and layers.',
      highlightControls: ['write'],
      panelStateChanges: {
        menu: { active: false },
        write: { active: true },
      },
      displayState: {
        screenType: 'system-settings',
        title: 'SYSTEM',
        activeTab: 'GENERAL',
        menuItems: [
          { label: 'LCD Brightness', value: '20' },
          { label: 'LED Brightness', value: 'MAX' },
          { label: 'Wheel LED Brightness', value: 'MAX' },
          { label: 'Zone Sw Indicator', value: 'ON', selected: true },
        ],
        selectedIndex: 3,
        statusText: 'Zone buttons blink when playing',
      },
      tipText: 'Zone Sw Indicator is great for debugging multi-zone setups.',
    },
    {
      id: 'step-8',
      title: 'Display Customization Complete!',
      instruction:
        'Press EXIT to return home. Display customization settings are global — they apply across all scenes. LCD/LED brightness and Zone Sw Indicator require saving system settings with WRITE. Wallpaper saves automatically.',
      details:
        'Summary: WALLPAPER — select design with VALUE dial, tint with E2-E5 (Alpha, R, G, B), saves automatically. LCD Brightness (1-20), LED Brightness (OFF-MAX), Wheel LED Brightness (OFF-MAX), Zone Sw Indicator (ON/OFF) — all in SYSTEM → GENERAL tab, save with WRITE.',
      highlightControls: ['exit'],
      panelStateChanges: {
        write: { active: false },
        exit: { active: true },
      },
      displayState: {
        screenType: 'home',
        sceneNumber: 'A001',
        sceneName: 'Homecoming',
        tempo: 120,
        beatSignature: '4/4',
        statusText: 'Display customization configured',
      },
      tipText: 'All display settings are global — no need to configure per-scene.',
    },
  ],
};
