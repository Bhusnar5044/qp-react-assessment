import { FormInputListType } from '@/components/Board/BoardComponents/TaskForm/types';
import { Controller, FieldValues } from 'react-hook-form';
import Button from '../Button';
import { ColorPickerInput } from '../ColorPicker/ColorPickerInput';
import Icons from '../Icons';
import { InputText } from './InputText';

export function FormInputList<T extends FieldValues>({
  fields,
  register,
  showErrors,
  onAppend,
  onRemove,
  colorPicker = false,
  control,
  colorPickerLabel,
  label: formLabel,
  formOptions: { heading = '', appendButtonText = '' },
}: FormInputListType<T>) {
  if (colorPicker && !colorPickerLabel) {
    throw new Error('Form Input List has color picker enabled but no color picker label was provided');
  }

  return (
    <>
      <div className="relative">
        <h3 className="text-primary text-sm mb-2">{heading}</h3>
        <div className="grid gap-3 max-h-[10rem] overflow-y-auto ">
          {fields.map((field, i) => {
            return (
              <section key={field.id} className="flex gap-4 items-center justify-center ">
                <InputText
                  disableLabelDisplay={true}
                  register={register}
                  label={formLabel(i)}
                  placeholder="e.g. Make coffee"
                  required
                  showError={showErrors(i)}
                />
                {colorPicker && colorPickerLabel && (
                  <Controller
                    control={control}
                    name={colorPickerLabel(i)}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <ColorPickerInput
                          identifier={`color-picker-form-${i}`}
                          onSelectColor={onChange}
                          color={value}
                          style={{ height: '1.25rem', width: '1.25rem' }}
                          colorPickerStyle={{
                            right: '6rem',
                            left: 'initial',
                            top: '0rem',
                          }}
                        />
                      );
                    }}
                  />
                )}
                <button onClick={() => onRemove(i)}>
                  <Icons iconType="cross" />
                </button>
              </section>
            );
          })}
        </div>
      </div>
      <Button className="text-md [&]:py-2" buttonType="secondary" onClick={onAppend}>
        {appendButtonText}
      </Button>
    </>
  );
}
