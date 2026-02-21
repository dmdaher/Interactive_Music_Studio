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
}

export interface MenuItem {
  label: string;
  value?: string;
  selected?: boolean;
}
