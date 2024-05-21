import { BoardSubtask } from '@/types/generalTypes';
import { FC } from 'react';
import { Subtask } from './Subtask';

export const SubtaskList: FC<{
  subtasks: BoardSubtask[];
  column: number;
  taskId: string;
  title: string;
}> = ({ subtasks, column, taskId, title }) => {
  const completedSubtask = subtasks.filter((subtask) => subtask.isCompleted).length;

  return (
    <>
      <p className="text-secondary text-pg mb-4">
        Subtasks ({completedSubtask} of {subtasks.length})
      </p>
      <div className="grid gap-2 mb-6">
        {subtasks.map((subtask) => {
          return <Subtask key={`${subtask.title}-${title}`} {...subtask} column={column} taskId={taskId} />;
        })}
      </div>
    </>
  );
};
