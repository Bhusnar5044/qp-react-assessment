import { ColorPickerInput } from '@/components/common/ColorPicker/ColorPickerInput';
import { useBoard } from '@/context/BoardContext';
import { BoardItemProvider } from '@/context/BoardItemContext';
import { BoardColumnType, BoardTask } from '@/types/generalTypes';
import { FC } from 'react';
import { BoardItems } from './BoardItems';

export const BoardColumns: FC<BoardColumnType & { column: number }> = ({ name, tasks, column, color }) => {
  const { dispatch } = useBoard();

  const handleSelectColor = (color: string) => {
    dispatch({
      type: 'column/change-color',
      payload: { newColor: color, column },
    });
  };
  return (
    <div className="w-[17.5rem]">
      <div className="mb-6 flex items-center justify-start gap-2 relative">
        <ColorPickerInput identifier={`color-picker-${column}`} onSelectColor={handleSelectColor} color={color} />
        <h2 className="tracking-widest text-sm font-bold text-secondary">
          {name.toLocaleUpperCase()} ({tasks.length})
        </h2>
      </div>
      <div className="grid gap-y-5">
        {tasks.map((task: BoardTask) => {
          return (
            <BoardItemProvider locationDependenies={{ column, taskId: task.id }} key={`${task.title}${task.description}`}>
              <BoardItems column={column} boardData={task} />
            </BoardItemProvider>
          );
        })}
      </div>
    </div>
  );
};
