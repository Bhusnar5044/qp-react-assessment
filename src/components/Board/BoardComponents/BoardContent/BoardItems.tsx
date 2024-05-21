import PopupLayout from '@/components/common/PopupLayout';
import { useBoardItem } from '@/context/BoardItemContext';
import { BoardSubtask, BoardTask } from '@/types/generalTypes';
import { FC } from 'react';
import { TaskDetails } from '../TaskDetails';
import { ConfirmationDeleteTaskModal } from './ConfirmationDeleteTaskModal';

export const BoardItems: FC<{ boardData: BoardTask; column: number }> = ({ boardData, column }) => {
  const { title, subtasks } = boardData;
  const { showConfirmationModal, showDetails, setShowDetails } = useBoardItem();

  const completedSubtasks: number = subtasks.reduce((result: number, current: BoardSubtask) => {
    return current.isCompleted ? result + 1 : result;
  }, 0);

  const handleClick = () => {
    setShowDetails((current) => !current);
  };

  return (
    <>
      {showDetails && !showConfirmationModal && (
        <PopupLayout onClose={handleClick}>
          <TaskDetails {...boardData} column={column} />
        </PopupLayout>
      )}
      {showConfirmationModal && <ConfirmationDeleteTaskModal title={title} />}
      <div className="bg-elements px-4 py-6 rounded-lg shadow-item cursor-pointer group select-none" onClick={handleClick}>
        <h3 className="text-md font-bold text-primary group-hover:text-purple">{title}</h3>
        <p className="text-sm font-bold text-secondary mt-2">
          {completedSubtasks} of {subtasks.length} substasks
        </p>
      </div>
    </>
  );
};
