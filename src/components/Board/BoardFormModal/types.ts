import { formTypeProp } from '@/context/BoardContext';
import { BoardData, BoardTask } from '@/types/generalTypes';

export type TBoardFormModal = {
  formType: formTypeProp;
  formData: BoardData | BoardTask | undefined;
};
