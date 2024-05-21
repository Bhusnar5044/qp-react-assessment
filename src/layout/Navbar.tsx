import { useBoard } from '@/context/BoardContext';
import { useNavbar } from '@/context/NavbarContext';
import { useViewportWidth } from '@/hooks/useViewportWidth';
import type { ChildrenProp } from '@/types/generalTypes';
import type { MouseEventHandler } from 'react';

import Icons from '@/components/common/Icons';

interface BoardItemType extends ChildrenProp {
  i?: number;
  active?: number;
  isAccent?: boolean;
}

export default function Navbar() {
  const { showSidebar, toggleSidebar } = useNavbar();
  const { screenType } = useViewportWidth();

  const onCloseNav: MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.target as HTMLElement).closest('.navbar-flag') !== null) return;
    if (screenType === 'desktop') return;
    toggleSidebar('close');
  };

  return (
    <div
      className={`bottom-0 left-0 right-0 top-0 z-10 max-md:fixed  max-md:grid max-md:items-start max-md:justify-items-center ${
        showSidebar ? 'bg-black/50' : ''
      }`}
      onClick={onCloseNav}
    >
      <nav className="navbar-flag bg-elements border-lines max-md:shadow-nav flex min-h-screen w-[18.8rem] flex-col px-[2rem] pb-[2rem] pt-[2rem] max-md:mt-24 max-md:min-h-fit max-md:w-[70%] max-md:gap-y-4 max-md:rounded-xl max-md:py-6 md:fixed md:border-r-2">
        <div className="flex-1">
          {screenType === 'desktop' && <img src={'/assets/logo.svg'} alt="Logo" className="mb-[3.5rem]" />}
          <BoardList />
        </div>
        <div>{screenType === 'desktop' && <HideSidebar />}</div>
      </nav>
    </div>
  );
}

function BoardList() {
  const { boardDataAll, boardPage: active } = useBoard();

  const boardsCount = boardDataAll.length;

  return (
    <>
      <p className="text-secondary mb-8 text-sm tracking-[0.15rem]">ALL BOARDS ({boardsCount})</p>
      <ul className="mb-6">
        {boardDataAll.map(({ name: boardTitle }, i) => {
          return (
            <BoardItem active={active} i={i} key={`${i}-boardtitle-${boardTitle}`}>
              {boardTitle}
            </BoardItem>
          );
        })}
        <BoardItem isAccent>+ Create new Board</BoardItem>
      </ul>
    </>
  );
}

function HideSidebar() {
  const { toggleSidebar } = useNavbar();

  return (
    <div className="group relative mt-6 flex cursor-pointer items-center gap-4" onClick={() => toggleSidebar()}>
      <div className="absolute -left-8 right-0 h-[3rem] rounded-br-[6.25rem] rounded-tr-[6.25rem] group-hover:bg-white" />
      <Icons iconType="hideSidebar" className="fill-secondary group-hover:fill-purple relative z-10" />
      <p className="text-secondary group-hover:text-purple relative z-10 font-bold">Hide Sidebar</p>
    </div>
  );
}

function BoardItem({ children, i = -1, active = -2, isAccent }: BoardItemType) {
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
}
