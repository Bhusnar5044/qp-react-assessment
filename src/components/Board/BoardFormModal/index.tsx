import { BoardData, BoardTask } from '@/types/generalTypes';
import { FC } from 'react';
import { BoardForm } from '../BoardComponents/BoardForm';
import { TaskForm } from '../BoardComponents/TaskForm';
import { TBoardFormModal } from './types';

export const BoardFormModal: FC<TBoardFormModal> = ({ formType, formData }) => {
  if (formType === 'create/task' || formType == 'edit/task') {
    return <TaskForm formType={formType} formData={formData as BoardTask} />;
  }

  if (formType === 'edit/board' || formType === 'create/board' || formType === 'edit/board/new-column') {
    return <BoardForm formType={formType} formData={formData as BoardData} />;
  }
};
