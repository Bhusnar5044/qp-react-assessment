import { ChildrenProp } from '@/types/generalTypes';
import { ButtonHTMLAttributes } from 'react';

type ButtonTypes = 'primary' | 'secondary' | 'destructive';

export interface ButtonTypeProps extends ChildrenProp {
  buttonType?: ButtonTypes;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export type ButtonStylesType = {
  [key in ButtonTypes]: string;
};
