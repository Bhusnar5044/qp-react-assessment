import { capitalize } from '@/helper/helper';
import { FieldValues } from 'react-hook-form';
import { InputTextProps } from './types';

export function InputTextArea<T extends FieldValues>({
  label,
  placeholder,
  register,
  required,
  className = '',
  showError = false,
}: InputTextProps<T>) {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={`text-input-${label}`} className="text-primary text-sm">
        {capitalize(label)}
      </label>
      <textarea
        {...register(label, { required })}
        placeholder={placeholder}
        className={`${className} bg-elements border-[1px] border-lines text-md px-4 py-2 rounded-md outline-none focus:border-purple resize-none placeholder:text-placeholder leading-6 ${
          showError ? '!border-red' : ''
        }`}
      ></textarea>
    </div>
  );
}
