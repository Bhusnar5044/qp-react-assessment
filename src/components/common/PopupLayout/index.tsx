import { FC, MouseEventHandler } from 'react';
import { PopupLayoutProps } from './types';

const PopupLayout: FC<PopupLayoutProps> = ({ children, onClose }) => {
  const handleClick: MouseEventHandler = (e) => {
    if ((e.target as HTMLDivElement).closest('.popup-modal')) return;
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-20 grid place-items-center" onClick={handleClick}>
      <div className="popup-modal w-full max-w-[30rem] max-[550px]:px-6">{children}</div>
    </div>
  );
};

export default PopupLayout;
