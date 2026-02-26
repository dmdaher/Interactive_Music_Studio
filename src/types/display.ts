export type ScreenType = 'home' | 'zone-view' | 'key-range' | 'write' | 'menu' | 'tone-select' | 'effect' | 'mixer' | 'scene-edit' | 'zone-edit' | 'effects-edit' | 'tone-edit-zoom' | 'tone-edit-pro' | 'pattern' | 'piano-roll' | 'group' | 'song' | 'rec-standby' | 'microscope' | 'sampling' | 'sample-pad' | 'wave-edit' | 'pad-mode' | 'multisample-edit' | 'system-settings' | 'arpeggio' | 'motional-pad' | 'scene-chain' | 'smf-control' | 'chord-memory' | 'popup' | 'file-browser' | 'import-wizard' | 'export-wizard';

/** Popup sub-types for the 'popup' ScreenType */
export type PopupType = 'value' | 'confirm' | 'rename' | 'dropdown' | 'numeric-input';

/** Tone type determines the tab set and visual layout in tone edit screens */
export type ToneType = 'Z-CORE' | 'DRUM' | 'SN-A' | 'VTW' | 'SN-AP' | 'SN-EP' | 'JP8';

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
  toneEditData?: {
    toneType: ToneType;              // Determines tab set and visual layout
    activePartials?: boolean[];      // Which partials are on (Z-Core: P1-P4, Drum: Wave1-4)
    selectedPartial?: number;        // Currently selected partial index (0-based)
    sectionTab?: string;             // Active section within ZOOM view (e.g., 'WHEEL', 'OVERDRIVE' for VTW)
  };
  sequencerData?: {
    viewMode?: '8Tr' | '16Tr';       // Track view mode for Pattern/Group screens
    selectedTrack?: number;           // Currently selected track index (0-based, A=0)
    selectedVariation?: number;       // Currently selected variation (0-based)
    currentMeasure?: number;          // Playhead position (1-based)
    totalMeasures?: number;           // Total measures visible
    recMode?: 'realtime' | 'step' | 'tr-rec';  // Recording mode for rec-standby
  };
  popupData?: {
    popupType: PopupType;                    // Which popup variant to render
    message?: string;                        // Confirm dialog message text
    options?: string[];                      // Dropdown option list
    currentText?: string;                    // Rename screen current text
  };
}

export interface MenuItem {
  label: string;
  value?: string;
  /** Multi-column values for grid-based editors (e.g., Tone Edit PRO partial columns) */
  values?: string[];
  selected?: boolean;
}
