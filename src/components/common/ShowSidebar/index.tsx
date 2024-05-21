import { useNavbar } from '@/context/NavbarContext';
import { useViewportWidth } from '@/hooks/useViewportWidth';
import Icons from '../Icons';

export const ShowSidebar = () => {
  const { screenType } = useViewportWidth();
  const { toggleSidebar, showSidebar } = useNavbar();

  if (showSidebar || screenType !== 'desktop') return;

  return (
    <div className="absolute left-0 bottom-[3%] group cursor-pointer" onClick={() => toggleSidebar()}>
      <div className="bg-purple p-5 pl-3 rounded-tr-[6.25rem] rounded-br-[6.25rem] group-hover:bg-purplehover">
        <Icons iconType="showSidebar" className="fill-white" />
      </div>
    </div>
  );
};
