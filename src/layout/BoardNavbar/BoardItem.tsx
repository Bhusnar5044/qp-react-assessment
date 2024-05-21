import Icons from '@/components/common/Icons';
import { useBoard } from '@/context/BoardContext';
import { FC } from 'react';
import { BoardItemType } from './types';

export const BoardItem: FC<BoardItemType> = ({ children, i = -1, active = -2, isAccent }) => {
  const { switchToPage, dispatch } = useBoard();
  const isSelected = active === i;

  const handleClick = () => {
    if (!isAccent) {
      switchToPage(i);
    } else {
      dispatch({ type: 'form/create/board' });
    }
  };
  return (
    <li key={`${i}-board-nav`} className="group relative flex cursor-pointer items-center py-3 " onClick={handleClick}>
      <div
        className={`${
          isSelected ? 'bg-purple' : 'bg-transparent'
        } absolute -left-8 bottom-0 right-0 top-0 rounded-br-[6.25rem] rounded-tr-[6.25rem] ${
          !isSelected ? 'group-hover:bg-navhover group-hover:text-purple' : ''
        }`}
      />
      <div className="flex items-center justify-center gap-4 py-0">
        <div>
          <Icons
            iconType="board"
            className={`${isAccent ? 'fill-purple' : 'fill-secondary'} ${
              isSelected ? 'fill-white' : ''
            } ${isSelected ? '' : 'group-hover:fill-purple'} relative z-10`}
          />
        </div>
        <p
          className={`font-bold min-[500px]:max-w-[10rem] ${
            isAccent ? 'text-purple' : isSelected ? 'text-white' : 'text-secondary'
          }  ${!isSelected ? 'group-hover:text-purple' : ''} relative z-10`}
        >
          {children}
        </p>
      </div>
    </li>
  );
};
