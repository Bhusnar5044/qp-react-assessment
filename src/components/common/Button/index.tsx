import { FC } from 'react';
import { ButtonStylesType, ButtonTypeProps } from './types';

const buttonStyles: ButtonStylesType = {
  primary: 'bg-purple text-white text-purple',
  secondary: 'bg-secondarybutton text-purple',
  destructive: 'bg-red text-white',
};

const hoverStyles: ButtonStylesType = {
  primary: 'hover:bg-purplehover',
  secondary: '',
  destructive: 'hover:bg-redhover',
};

const Button: FC<ButtonTypeProps> = ({
  buttonType = 'primary',
  className,
  children = 'Button Text',
  disabled,
  onClick = () => {},
  htmlType = 'button',
}) => {
  return (
    <button
      disabled={disabled}
      className={`py-4 px-6 rounded-full  font-bold ${buttonStyles[buttonType]} ${disabled ? '' : hoverStyles[buttonType]} ${
        disabled ? 'opacity-40' : ''
      } ${className}`}
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  );
};

export default Button;
