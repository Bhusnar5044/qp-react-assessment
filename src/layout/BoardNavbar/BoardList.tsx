import { useBoard } from '@/context/BoardContext';
import { BoardItem } from './BoardItem';

export const BoardList = () => {
  const { boardDataAll, boardPage: active } = useBoard();

  const boardsCount = boardDataAll.length;

  return (
    <>
      <p className="text-secondary mb-8 text-sm tracking-[0.15rem]">ALL BOARDS ({boardsCount})</p>
      <ul className="mb-6">
        {boardDataAll.map(({ name: boardTitle }, i) => {
          return (
            <BoardItem active={active} i={i} key={`${i}-boardtitle-${boardTitle}`}>
              {boardTitle}
            </BoardItem>
          );
        })}
        <BoardItem isAccent>+ Create new Board</BoardItem>
      </ul>
    </>
  );
};
