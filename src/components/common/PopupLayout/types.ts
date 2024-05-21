import { ChildrenProp } from '@/types/generalTypes';

export interface PopupLayoutProps extends ChildrenProp {
  onClose: () => void;
}
