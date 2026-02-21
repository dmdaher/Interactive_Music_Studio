export interface NoteInfo {
  midiNote: number;
  name: string;
  octave: number;
  isBlack: boolean;
}

export interface ZoneConfig {
  zoneNumber: number;
  color: string;
  lowNote: number;
  highNote: number;
  label: string;
}

export interface KeyboardState {
  zones: ZoneConfig[];
  highlightedKeys: number[];
  activeKeys: number[];
}
