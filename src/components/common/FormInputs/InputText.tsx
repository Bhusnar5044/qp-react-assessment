import { capitalize } from '@/helper/helper';
import { FieldValues, Path } from 'react-hook-form';
import { InputTextProps } from './types';

export function InputText<T extends FieldValues>({
  label,
  labelDisplay = '',
  placeholder,
  register,
  required,
  className = '',
  showError = false,
  disableLabelDisplay = false,
}: InputTextProps<T>) {
  if (labelDisplay.length === 0) labelDisplay = label;

  return (
    <div className="flex flex-col gap-2 w-full">
      {disableLabelDisplay || (
        <label htmlFor={`text-input-${label}`} className="text-primary text-sm">
          {capitalize(labelDisplay)}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          {...register(`${label}` as Path<T>, {
            required,
          })}
          placeholder={placeholder}
          className={`${className} bg-elements border-[1px] w-full border-lines text-md px-4 py-2 rounded-md outline-none focus:border-purple placeholder:text-placeholder leading-6 ${
            showError ? '!border-red' : ''
          }`}
        />
        {showError && <p className="absolute right-4 top-[50%] translate-y-[-50%] text-red text-md">Can't be empty</p>}
      </div>
    </div>
  );
}
