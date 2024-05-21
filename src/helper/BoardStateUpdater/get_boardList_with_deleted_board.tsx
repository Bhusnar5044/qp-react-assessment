import { BoardData } from '@/types/generalTypes';
import cloneDeep from 'lodash.clonedeep';

export function get_boardList_with_deleted_board({
  dependencies: { boardDataAll, page },
}: {
  dependencies: { boardDataAll: BoardData[] | []; page: number };
}) {
  const updatedBoard = cloneDeep(boardDataAll);
  updatedBoard.splice(page, 1);
  return updatedBoard;
}
