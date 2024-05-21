import { ConfirmationModal } from '@/components/common/ConfirmationModal';
import { useBoardItem } from '@/context/BoardItemContext';
import { FC } from 'react';

export const ConfirmationDeleteTaskModal: FC<{ title: string }> = ({ title }) => {
  const { handleAcceptDeletion, handleRejectDeletion } = useBoardItem();
  return (
    <ConfirmationModal
      headingText="Delete this task?"
      paragraphText={`Are you sure you want to delete the '${title}' task and its substasks? This action cannot be reversed`}
      onAccept={handleAcceptDeletion}
      onReject={handleRejectDeletion}
    />
  );
};
