import { CheckBox } from '@/components/common/CheckBox';
import { useBoard } from '@/context/BoardContext';
import { FC, useState } from 'react';
import { subtaskProps } from './types';

export const Subtask: FC<subtaskProps> = ({ isCompleted, title, id: subtaskId, column, taskId }) => {
  const { dispatch } = useBoard();
  const [completed, setCompleted] = useState(() => isCompleted);

  // Identify where the board is located. Used to change the props of the main object.
  const boardIdentification = { subtaskId, taskId, column };

  const handleClick = () => {
    setCompleted((current) => !current);
    dispatch({
      type: 'board/task/subtask/toggle',
      payload: { locationDependencies: boardIdentification, value: !completed },
    });
  };

  return (
    <div className="flex gap-4 bg-bg p-3 rounded-sm items-center cursor-pointer hover:bg-purplehighlight" onClick={handleClick}>
      <CheckBox checked={completed} key={`${title}-${completed ? 'open' : 'close'}`} />
      <p className={`text-sm ${completed ? 'text-secondary line-through' : 'text-primary'}`}>{title}</p>
    </div>
  );
};
