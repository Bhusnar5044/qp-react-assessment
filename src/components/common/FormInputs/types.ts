import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type InputTextProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  label: Path<T>;
  placeholder: string;
  className?: string;
  required?: boolean;
  showError?: boolean;
  labelDisplay?: string;
  disableLabelDisplay?: boolean;
};
