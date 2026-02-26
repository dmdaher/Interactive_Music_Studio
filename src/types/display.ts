export type ScreenType = 'home' | 'zone-view' | 'key-range' | 'write' | 'menu' | 'tone-select' | 'effect' | 'mixer' | 'scene-edit' | 'zone-edit' | 'effects-edit';

export interface ZoneDisplayInfo {
  zoneNumber: number;
  zoneName: string;
  toneName: string;
  keyRangeLow: string;
  keyRangeHigh: string;
  volume: number;
  pan: number;
  muted: boolean;
  active: boolean;
  toneType?: string;
  toneBank?: string;
  toneCategory?: string;
  toneNumber?: string;
  solo?: boolean;
  chorusSend?: number;   // 0-127
  reverbSend?: number;   // 0-127
  mfxEnabled?: boolean;
  eqEnabled?: boolean;
}

export interface DisplayState {
  screenType: ScreenType;
  title?: string;
  zones?: ZoneDisplayInfo[];
  menuItems?: MenuItem[];
  selectedIndex?: number;
  parameterName?: string;
  parameterValue?: string;
  statusText?: string;
  confirmText?: string;
  sceneName?: string;
  sceneNumber?: string;
  tempo?: number;
  beatSignature?: string;
  zoneViewMode?: 1 | 4 | 8 | 16;
  mixerViewMode?: 8 | 16;  // 8 or 16 zone mixer view (default 8)
  activeTab?: string;      // Currently selected tab name (for tabbed editors like scene-edit)
  zoneEditCategory?: 'INT' | 'EXT';  // INT or EXT settings category for zone-edit screen
}

export interface MenuItem {
  label: string;
  value?: string;
  selected?: boolean;
}
