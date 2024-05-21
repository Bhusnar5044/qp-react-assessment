import { useBoard } from '@/context/BoardContext';
import { useDrag } from '@/hooks/useDrag';
import { BoardColumnType } from '@/types/generalTypes';
import { BoardEmptyMessage } from '../../BoardStates/BoardEmptyMessage';
import { BoardError } from '../../BoardStates/BoardError';
import { BoardLoading } from '../../BoardStates/BoardLoading';
import { BoardColumns } from './BoardColumns';
import { NewBoardButton } from './NewBoardButton';

export const BoardContent = () => {
  const { status, boardData } = useBoard();

  // popup-modal is the class of the element that gets ignored / input reject
  const boardElementRef = useDrag('popup-modal');

  if (status === 'loading') return <BoardLoading />;
  if (status === 'error') return <BoardError />;
  if (!boardData) return <BoardEmptyMessage />;

  // NOTE : the extra + 1 column is used for the add new column button
  const columnAmount = boardData.columns.length + 1;

  return (
    <div className="bg-bg h-full overflow-auto p-6 " ref={boardElementRef}>
      <div
        className={`grid min-h-full w-fit overflow-visible gap-6 content-start pb-6 pr-6`}
        style={{
          gridTemplateColumns: `repeat(${columnAmount}, 17.5rem)`,
        }}
      >
        {boardData.columns.map((columnData: BoardColumnType, i) => {
          const key = `${columnData.name}${columnData.tasks}${i}`;
          return <BoardColumns key={key} {...columnData} column={i} />;
        })}
        <NewBoardButton />
      </div>
    </div>
  );
};
