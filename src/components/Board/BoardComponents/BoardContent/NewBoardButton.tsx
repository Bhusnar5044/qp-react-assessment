import { useBoard } from '@/context/BoardContext';

export const NewBoardButton = () => {
  const { dispatch } = useBoard();
  const handleClick = () => {
    dispatch({ type: 'form/edit/board/newColumn' });
  };

  return (
    <div
      className="w-[17.5rem] mt-10 grid place-items-center bg-gradient-to-b from-elementstransparent to-bg rounded-[0.375rem] min-h-[40rem] cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-xl text-secondary font-bold">+ New Column</p>
    </div>
  );
};
