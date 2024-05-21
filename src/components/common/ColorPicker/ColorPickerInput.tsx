import { FC, useState } from 'react';
import { ColorPicker } from '.';
import { ColorPickerInputProps } from './types';

export const ColorPickerInput: FC<ColorPickerInputProps> = ({ identifier = '', onSelectColor = () => {}, color = '', colorPickerStyle, style }) => {
  const [showColorPicker, setShowColorPicker] = useState(() => false);

  const handleClickColor = () => {
    setShowColorPicker((current) => !current);
  };
  return (
    <>
      <div
        className={`${identifier} w-[0.9375rem] aspect-square bg-primary rounded-full cursor-pointer`}
        style={{ ...style, background: color }}
        onClick={handleClickColor}
      ></div>
      {showColorPicker && (
        <ColorPicker
          className={`${identifier}  absolute top-8 left-0 z-10`}
          clickOutsideClassList={[identifier]}
          onSelectColor={onSelectColor}
          colorInput={color}
          onClose={handleClickColor}
          style={colorPickerStyle}
        />
      )}
    </>
  );
};
