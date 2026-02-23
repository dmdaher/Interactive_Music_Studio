export type ScreenType = 'home' | 'zone-view' | 'key-range' | 'write' | 'menu' | 'tone-select' | 'effect';

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
}

export interface MenuItem {
  label: string;
  value?: string;
  selected?: boolean;
}
