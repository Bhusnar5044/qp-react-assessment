import { useNavbar } from '@/context/NavbarContext';
import { useViewportWidth } from '@/hooks/useViewportWidth';
import type { MouseEventHandler } from 'react';
import { BoardList } from './BoardList';
import { HideSidebar } from './HideSidebar';

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
