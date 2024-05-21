import Button from '@/components/common/Button';
import { FormInputList } from '@/components/common/FormInputs';
import { InputText } from '@/components/common/FormInputs/InputText';
import PopupLayout from '@/components/common/PopupLayout';
import { useBoard } from '@/context/BoardContext';
import { FC } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { v4 as createUUID } from 'uuid';
import { BoardFormProps } from '../Board/types';
import { BoardFormFields, TBoardFormType } from './types';

const formTypeDisplay: Record<TBoardFormType, { title: string; button: string }> = {
  'create/board': {
    title: 'Add New Board',
    button: 'Create New Board',
  },
  'edit/board/new-column': {
    title: 'Add New Board',
    button: 'Create New Board',
  },
  'edit/board': {
    title: 'Edit Board',
    button: 'Save Changes',
  },
};

export const BoardForm: FC<BoardFormProps> = ({ formType, formData }) => {
  const { dispatch } = useBoard();

  const defaultColumnValue =
    formType === 'edit/board/new-column'
      ? formData && [
          ...formData.columns,
          {
            name: '',
            tasks: [],
            id: createUUID(),
            color: '#FFF',
          },
        ]
      : formData?.columns;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BoardFormFields>({
    defaultValues: {
      name: formData?.name || '',
      columns: defaultColumnValue || [
        {
          name: '',
          tasks: [],
          id: createUUID(),
          color: '#FFF',
        },
      ],
    },
    shouldUseNativeValidation: false,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns',
  });

  const handleCreateTask = () => {
    append({
      name: '',
      tasks: [],
      id: createUUID(),
      color: '#FFF',
    });
  };

  const handleDeleteTask = (index: number) => {
    remove(index);
  };

  const onSubmit: SubmitHandler<BoardFormFields> = (data) => {
    switch (formType) {
      case 'create/board':
        dispatch({ type: 'form/submit/add/board', payload: data });
        break;
      case 'edit/board':
        dispatch({ type: 'form/submit/edit/board', payload: data });
        break;
      case 'edit/board/new-column':
        dispatch({ type: 'form/submit/edit/board', payload: data });
        break;
      default:
        throw new Error('Board form submit handler type not specified, formType most likely went wrong!');
    }
  };

  return (
    <PopupLayout onClose={() => dispatch({ type: 'form/close' })}>
      <form className="bg-elements p-8 rounded-lg text-primary grid gap-6 w-full max-[550px]:p-6" onSubmit={handleSubmit(onSubmit)} id="new Task">
        <h2 className="text-lg font-bold">{formTypeDisplay[formType].title}</h2>
        <InputText<BoardFormFields> register={register} label="name" placeholder="e.g. Web Development" required showError={Boolean(errors?.name)} />
        <FormInputList<BoardFormFields>
          control={control}
          colorPicker
          fields={fields}
          register={register}
          showErrors={(i) => Boolean(errors?.columns?.[i])}
          onAppend={handleCreateTask}
          onRemove={handleDeleteTask}
          label={(i) => `columns.${i}.name`}
          colorPickerLabel={(i) => `columns.${i}.color`}
          formOptions={{
            heading: 'Board Columns',
            appendButtonText: '+ Add New Column',
          }}
        />
        <Button className="text-md [&]:py-2" htmlType="submit">
          {formTypeDisplay[formType].button}
        </Button>
      </form>
    </PopupLayout>
  );
};
