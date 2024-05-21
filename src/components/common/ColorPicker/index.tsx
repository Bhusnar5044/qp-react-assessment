import { useClickOutside } from '@/hooks/useClickOutside';
import '@/styles/ReactColor/react-color.css';
import { useState } from 'react';
import { BlockPicker, ColorResult } from 'react-color';
import { ColorPickerProps } from './types';

export function ColorPicker({
  onClose,
  colorInput = '#FFF',
  className = '',
  clickOutsideClassList = [],
  onSelectColor = () => {},
  style,
}: ColorPickerProps) {
  const [color, setColor] = useState<string>(() => colorInput);
  useClickOutside(() => {
    onClose();
  }, clickOutsideClassList);

  return (
    <div className={`${className}`} style={style}>
      <BlockPicker
        color={color}
        onChange={(color: ColorResult) => {
          setColor(color.hex);
          onSelectColor(color.hex);
        }}
      />
    </div>
  );
}
