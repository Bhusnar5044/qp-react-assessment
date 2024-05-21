import { DropDown } from '@/components/common/DropDown';
import { useBoard } from '@/context/BoardContext';
import { FC } from 'react';

export const SubtaskStatus: FC<{
  column: number;
  taskId: string;
  status: string;
}> = ({ column, taskId, status }) => {
  const { boardData, dispatch } = useBoard();

  // TEMP
  if (!boardData) throw new Error('Board data from SubtaskStatus was not loaded when loading test details');

  const optionList = boardData.columns.map((current) => current.name);

  return (
    <>
      <p className="text-secondary text-pg mb-4">Current Status</p>
      <DropDown
        value={status || optionList[column]}
        onSelect={(selected) => {
          dispatch({
            type: 'board/task/subtask/switch-status',
            payload: {
              locationDependencies: { column, taskId },
              newColumnName: selected,
            },
          });
        }}
        optionList={optionList}
      />
    </>
  );
};
