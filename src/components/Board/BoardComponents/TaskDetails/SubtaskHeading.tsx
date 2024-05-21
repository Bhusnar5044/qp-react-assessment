import { KebabMenu } from '@/components/common/KebabMenu';
import { useBoardItem } from '@/context/BoardItemContext';
import { FC } from 'react';

export const SubtaskHeading: FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  const { handleAction } = useBoardItem();

  return (
    <>
      <header className="mb-6 flex justify-between items-center gap-8">
        <h3 className="font-bold text-lg text-primary">{title}</h3>
        <div>
          <KebabMenu>
            <button className="text-secondary cursor-pointer hover:text-primary" data-action={'edit'} onClick={handleAction}>
              Edit Task
            </button>
            <button className="text-red cursor-pointer hover:text-redhover" data-action={'delete'} onClick={handleAction}>
              Delete Task
            </button>
          </KebabMenu>
        </div>
      </header>
      <p className="text-pg text-secondary leading-6 mb-6">{description}</p>
    </>
  );
};
