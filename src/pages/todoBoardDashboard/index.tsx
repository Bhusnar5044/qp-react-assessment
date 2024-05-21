import Board from '@/components/Board/BoardComponents/Board';
import { BoardProvider } from '@/context/BoardContext';
import { NavbarProvider } from '@/context/NavbarContext';
import BoardLayout from '@/layout/BoardLayout';

export default function TodoBoardDashboard() {
  return (
    <BoardProvider>
      <NavbarProvider>
        <BoardLayout>
          <Board />
        </BoardLayout>
      </NavbarProvider>
    </BoardProvider>
  );
}
