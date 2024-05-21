import { ShowSidebar } from '@/components/common/ShowSidebar';
import { useBoard } from '@/context/BoardContext';
import { BoardHeading } from '../../../../layout/BoardHeading';
import { BoardFormModal } from '../../BoardFormModal';
import { BoardContent } from '../BoardContent';

export default function Board() {
  const { formType, formData } = useBoard();
  const formValues = { formType, formData };

  return (
    <main className="h-full flex flex-col relative overflow-hidden max-h-screen">
      <ShowSidebar />
      {formType !== 'none' && <BoardFormModal {...formValues} />}
      <BoardHeading />
      <BoardContent />
    </main>
  );
}
