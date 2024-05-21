export interface ColorPickerProps {
  onClose: () => void;
  colorInput: string;
  className: string;
  clickOutsideClassList: string[];
  onSelectColor: (color: string) => void;
  style?: Record<string, string>;
}

export interface ColorPickerInputProps {
  identifier: string;
  onSelectColor: (color: string) => void;
  color: string;
  style?: Record<string, string>;
  colorPickerStyle?: Record<string, string>;
}

export type Thsl = {
  a: number;
  h: number;
  s: number;
  l: number;
};

export type Thsv = {
  a: number;
  h: number;
  s: number;
  v: number;
};

export type Trgb = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export interface IColor {
  hex: string;
  hsl: Thsl;
  hsv: Thsv;
  oldHue: number;
  rgb: Trgb;
  source: 'hex';
}
