import { ConfirmationModal } from '@/components/common/ConfirmationModal';
import { useBoard } from '@/context/BoardContext';

export const ConfirmationDeleteBoardModal = () => {
  const { dispatch, boardData } = useBoard();
  const handleReject = () => dispatch({ type: 'form/delete/board', payload: false });

  const handleAccept = () => dispatch({ type: 'form/delete/board', payload: true });
  return (
    <ConfirmationModal
      headingText="Delete this board?"
      paragraphText={`Are you sure you want to delete the '${boardData?.name}' task and its substasks? This action cannot be reversed`}
      onAccept={handleAccept}
      onReject={handleReject}
    />
  );
};
