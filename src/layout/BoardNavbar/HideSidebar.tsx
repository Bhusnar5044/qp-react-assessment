import Icons from '@/components/common/Icons';
import { useNavbar } from '@/context/NavbarContext';

export const HideSidebar = () => {
  const { toggleSidebar } = useNavbar();

  return (
    <div className="group relative mt-6 flex cursor-pointer items-center gap-4" onClick={() => toggleSidebar()}>
      <div className="absolute -left-8 right-0 h-[3rem] rounded-br-[6.25rem] rounded-tr-[6.25rem] group-hover:bg-white" />
      <Icons iconType="hideSidebar" className="fill-secondary group-hover:fill-purple relative z-10" />
      <p className="text-secondary group-hover:text-purple relative z-10 font-bold">Hide Sidebar</p>
    </div>
  );
};
