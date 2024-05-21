import Icons from '@/components/common/Icons';
import { useBoard } from '@/context/BoardContext';
import { useNavbar } from '@/context/NavbarContext';
import { useViewportWidth } from '@/hooks/useViewportWidth';

export const HeadingTitle = () => {
  const { boardData } = useBoard();
  const { toggleSidebar } = useNavbar();
  const { screenType } = useViewportWidth();
  const onOpenNav = () => {
    if (screenType === 'desktop') return;
    toggleSidebar('open');
  };
  return (
    <div className="flex flex-1 gap-x-3 max-md:cursor-pointer" onClick={onOpenNav}>
      <Icons iconType="logoMobile" className="md:hidden" />
      <h1 className="text-primary font-bold text-xl flex-1 max-md:text-lg flex items-center gap-x-3 ">
        {boardData?.name}
        {screenType === 'desktop' || <Icons iconType="arrowDown" />}
      </h1>
    </div>
  );
};
