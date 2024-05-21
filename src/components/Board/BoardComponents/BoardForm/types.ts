import { formTypeProp } from '@/context/BoardContext';
import { BoardData } from '@/types/generalTypes';

export type BoardFormFields = BoardData;

export type TBoardFormType = {
  [K in formTypeProp]: K extends `${string}/board${string}` ? K : never;
}[formTypeProp];
