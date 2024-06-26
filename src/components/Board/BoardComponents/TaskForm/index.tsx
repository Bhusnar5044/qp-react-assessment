import Button from '@/components/common/Button';
import { DropDown } from '@/components/common/DropDown';
import { FormInputList } from '@/components/common/FormInputs';
import { InputText } from '@/components/common/FormInputs/InputText';
import { InputTextArea } from '@/components/common/FormInputs/InputTextArea';
import PopupLayout from '@/components/common/PopupLayout';
import { useBoard } from '@/context/BoardContext';
import { Controller, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { v4 as createUUID } from 'uuid';
import { TaskFormProps } from '../Board/types';
import { TaskFormFields, formDisplay } from './types';

const formTypeDisplay: Record<string, formDisplay> = {
  'create/task': {
    title: 'Add New Task',
    button: 'Create Task',
  },
  'edit/task': {
    title: 'Edit Task',
    button: 'Save Changes',
  },
};

export function TaskForm({ formType, formData }: TaskFormProps) {
  const { boardData, dispatch } = useBoard();

  const statusList = boardData?.columns.map((column) => column.name) || [];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TaskFormFields>({
    defaultValues: {
      title: formData?.title || '',
      description: formData?.description || '',
      subtaskList: formData?.subtasks?.filter((subtask: { title: string }) => subtask.title) || [{ title: '', isCompleted: false, id: createUUID() }],
      status: formData?.status || statusList[0],
      id: formData?.id || createUUID(),
    },
    shouldUseNativeValidation: false,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtaskList',
  });

  const handleCreateTask = () => {
    append({
      title: '',
      isCompleted: false,
      id: createUUID(),
    });
  };

  const handleDeleteTask = (index: number) => {
    remove(index);
  };

  const onSubmit: SubmitHandler<TaskFormFields> = (data) => {
    const newTask = {
      description: data.description,
      id: data.id,
      status: data.status,
      subtasks: data.subtaskList,
      title: data.title,
    };
    dispatch({ type: 'form/submit/task', payload: newTask });
  };

  return (
    <PopupLayout onClose={() => dispatch({ type: 'form/close' })}>
      <form className="bg-elements p-8 rounded-lg text-primary grid gap-6 w-full max-[550px]:p-6" onSubmit={handleSubmit(onSubmit)} id="new Task">
        <h2 className="text-lg font-bold">{formTypeDisplay[formType].title}</h2>
        <InputText<TaskFormFields>
          register={register}
          label="title"
          placeholder="e.g. Take coffee break"
          required
          showError={Boolean(errors?.title)}
        />
        <InputTextArea<TaskFormFields>
          register={register}
          label="description"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
          className="max-[550px]:min-h-[6rem]"
        />
        <FormInputList<TaskFormFields>
          fields={fields}
          register={register}
          showErrors={(i) => Boolean(errors?.subtaskList?.[i]?.title?.type)}
          onAppend={handleCreateTask}
          onRemove={handleDeleteTask}
          label={(i) => `subtaskList.${i}.title`}
          formOptions={{
            heading: 'Subtasks',
            appendButtonText: '+ Add New Subtask',
          }}
        />
        <div>
          <h3 className="text-primary text-sm mb-2">Status</h3>
          <Controller
            control={control}
            name="status"
            defaultValue={formData?.status || statusList[0]}
            render={({ field: { onChange } }) => {
              return <DropDown onSelect={(data) => onChange(data)} optionList={statusList} value={formData?.status || statusList[0]} />;
            }}
          />
        </div>
        <Button className="text-md [&]:py-2" htmlType="submit">
          {formTypeDisplay[formType].button}
        </Button>
      </form>
    </PopupLayout>
  );
}
