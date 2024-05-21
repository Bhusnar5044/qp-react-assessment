import { BoardData } from '@/types/generalTypes';
import cloneDeep from 'lodash.clonedeep';

export function get_boardList_with_added_board({
  dependencies: { boardDataAll },
  value,
}: {
  dependencies: { boardDataAll: BoardData[] };
  value: BoardData;
}) {
  const updatedBoard = cloneDeep(boardDataAll);
  updatedBoard.push(value);
  return updatedBoard;
}
