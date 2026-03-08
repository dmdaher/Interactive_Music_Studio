export type ControlType =
  | 'button' | 'knob' | 'slider' | 'dial' | 'wheel' | 'pad' | 'led' | 'transport'
  | 'jog-wheel' | 'encoder' | 'fader' | 'display' | 'text' | 'lever';

export type ButtonVariant = 'standard' | 'zone' | 'scene' | 'category' | 'function' | 'menu' | 'round';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ControlPosition {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

export interface SectionBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface StructuralRow {
  sections: string[];
  stretch?: string;
  height?: number | 'auto';
  gap?: number;
}

export type SectionControlLayout =
  | { type: 'grid'; columns: number; gap?: number; rowGap?: number }
  | { type: 'flex-row'; gap?: number; wrap?: boolean; align?: 'start' | 'center' | 'end' }
  | { type: 'flex-col'; gap?: number; align?: 'start' | 'center' | 'end' }
  | { type: 'absolute'; width: number; height: number };

export interface PanelControl {
  id: string;
  type: ControlType;
  label: string;
  section: string;
  position?: ControlPosition;
  variant?: ButtonVariant;
  size?: ButtonSize;
  hasLed?: boolean;
  ledColor?: string;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  orientation?: 'vertical' | 'horizontal';
  labelPosition?: 'above' | 'below' | 'on' | 'left' | 'right' | 'none';
  color?: string;
  gridColumn?: number | string;
  gridRow?: number | string;
  flexOrder?: number;
}

export interface PanelSection {
  id: string;
  label: string;
  controls: PanelControl[];
  controlLayout?: SectionControlLayout;
  bounds?: SectionBounds;
  background?: string;
  borderRadius?: number;
  padding?: number;
  minWidth?: number;
  minHeight?: number;
}

export interface PanelLayout {
  deviceId: string;
  sections: PanelSection[];
  layoutMode?: 'structural' | 'absolute';
  rows?: StructuralRow[];
  dimensions?: { width: number; height: number };
  aspectRatio?: number;
  background?: { color: string; texture?: string };
}

export interface ButtonState {
  active: boolean;
  ledOn?: boolean;
  ledColor?: string;
  value?: number;
}

export type PanelState = Record<string, ButtonState>;
