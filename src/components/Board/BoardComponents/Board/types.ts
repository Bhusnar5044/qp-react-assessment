import { formTypeProp } from '@/context/BoardContext';
import { BoardData, BoardTask } from '@/types/generalTypes';

export type TaskFormProps = {
  formType: {
    [K in formTypeProp]: K extends `${string}/task` ? K : never;
  }[formTypeProp];
  formData: BoardTask | undefined;
};

export type BoardFormProps = {
  formType: {
    [K in formTypeProp]: K extends `${string}/board${string}` ? K : never;
  }[formTypeProp];
  formData: BoardData | undefined;
};
