import { useNavbar } from '@/context/NavbarContext';
import { useViewportWidth } from '@/hooks/useViewportWidth';
import Navbar from '@/layout/Navbar';
import type { ChildrenProp } from '@/types/generalTypes';

const TodoLayout = ({ children }: ChildrenProp) => {
  const { showSidebar } = useNavbar();
  const { screenType } = useViewportWidth();
  return (
    <div
      className={`grid ${
        showSidebar && screenType === 'desktop' ? 'grid-cols-[18.75rem_minmax(0_,1fr)]' : 'grid-cols-[minmax(0_,1fr)]'
      } h-full min-h-screen overflow-hidden`}
    >
      {showSidebar && <Navbar />}
      {children}
    </div>
  );
};

export default TodoLayout;
