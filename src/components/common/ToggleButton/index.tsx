import { FC, useState } from 'react';
import { ToggleButtonProps } from './types';

const rightPos = '1.45rem';
const leftPos = '.225rem';

export const ToggleButton: FC<ToggleButtonProps> = ({ initialPosition = 'right', onToggle = () => {} }) => {
  const [direction, setDirection] = useState(() => initialPosition);

  const handleToggle = () => {
    setDirection((cur) => (cur === 'left' ? 'right' : 'left'));
    onToggle(direction);
  };

  return (
    <button className=" w-10 h-5 bg-purple hover:bg-purplehover rounded-full relative" onClick={handleToggle}>
      <div
        className="w-[0.875rem] aspect-square bg-white    absolute rounded-full top-[50%] translate-y-[-50%] transition-all"
        style={{ left: direction === 'left' ? leftPos : rightPos }}
      ></div>
    </button>
  );
};
