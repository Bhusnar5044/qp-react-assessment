import { BoardSubtask } from '@/types/generalTypes';
import { Control, FieldArrayWithId, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type TaskFormFields = {
  title: string;
  description: string;
  subtaskList: BoardSubtask[];
  status: string;
  id: string;
};

export type formDisplay = {
  title: string;
  button: string;
};

export type FormInputListType<T extends FieldValues> = {
  fields: FieldArrayWithId<T>[];
  register: UseFormRegister<T>;
  showErrors: (index: number) => boolean;
  label: (index: number) => Path<T>;
  onAppend: () => void;
  onRemove: (index: number) => void;
  formOptions: {
    heading: string;
    appendButtonText: string;
  };
  colorPickerLabel?: (index: number) => Path<T>;
  colorPicker?: boolean;
  control?: Control<T>;
};
