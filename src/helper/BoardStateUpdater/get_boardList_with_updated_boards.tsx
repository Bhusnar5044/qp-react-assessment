import { BoardData } from '@/types/generalTypes';
import cloneDeep from 'lodash.clonedeep';

export function get_boardList_with_updated_boards({
  dependencies: { boardDataAll, page },
  value,
}: {
  dependencies: {
    boardDataAll: BoardData[] | [];
    page: number;
  };
  value: BoardData;
}) {
  const updatedBoard: BoardData[] = cloneDeep(boardDataAll);
  updatedBoard[page] = value;

  return updatedBoard;
}
