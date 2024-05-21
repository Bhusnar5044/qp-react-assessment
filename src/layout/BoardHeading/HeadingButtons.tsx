import Button from '@/components/common/Button';
import Icons from '@/components/common/Icons';
import { KebabMenu } from '@/components/common/KebabMenu';
import ThemeToggle from '@/components/theme-toggle';
import { useBoard } from '@/context/BoardContext';
import { useViewportWidth } from '@/hooks/useViewportWidth';
import { MouseEventHandler } from 'react';
import { ConfirmationDeleteBoardModal } from './ConfirmationDeleteBoardModal';

export const HeadingButtons = () => {
  const { screenType } = useViewportWidth();
  const { boardData, dispatch, showBoardDeleteConfirmation } = useBoard();

  const handleAction: MouseEventHandler = (e) => {
    const actionType = (e.target as HTMLButtonElement).dataset.action;

    switch (actionType) {
      case 'delete':
        dispatch({ type: 'form/delete/board/confirmation' });
        break;
      case 'edit':
        dispatch({ type: 'form/edit/board' });
        break;
      default:
        throw new Error('Invalid action type for kebab menu on board header');
    }
  };

  return (
    <>
      {showBoardDeleteConfirmation && <ConfirmationDeleteBoardModal />}
      <ThemeToggle />
      <Button buttonType="primary" disabled={!boardData} className="max-md:py-3" onClick={() => dispatch({ type: 'form/create/task' })}>
        {screenType === 'desktop' ? (
          '+ Add New Task'
        ) : (
          <>
            <Icons iconType="addTaskMobile" className="fill-white" />
          </>
        )}
      </Button>
      <KebabMenu>
        <button className="text-secondary cursor-pointer hover:text-primary" data-action={'edit'} onClick={handleAction}>
          Edit Board
        </button>
        <button className="text-red cursor-pointer hover:text-redhover" data-action={'delete'} onClick={handleAction}>
          Delete Board
        </button>
      </KebabMenu>
    </>
  );
};
