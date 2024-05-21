import { ChildrenProp } from '@/types/generalTypes';

export interface BoardItemType extends ChildrenProp {
  i?: number;
  active?: number;
  isAccent?: boolean;
}
