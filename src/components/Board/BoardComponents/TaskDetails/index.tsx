import { BoardTask } from '@/types/generalTypes';
import { SubtaskHeading } from './SubtaskHeading';
import { SubtaskList } from './SubtaskList';
import { SubtaskStatus } from './SubtaskStatus';

export function TaskDetails({ title, status, subtasks, description, column, id: taskId }: BoardTask & { column: number }) {
  const SubtaskListProps = { subtasks, column, taskId, title };
  const SubtaskHeadingProps = { title, description, column, taskId };
  const SubtaskStatusProps = { column, taskId, status };

  return (
    <div className="bg-elements p-8 mx-4 max-w-[31rem] rounded-lg">
      <SubtaskHeading {...SubtaskHeadingProps} />
      <SubtaskList {...SubtaskListProps} />
      <SubtaskStatus {...SubtaskStatusProps} />
    </div>
  );
}
