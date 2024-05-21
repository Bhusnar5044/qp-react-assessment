import { Loader } from '@/components/common/Loader';

export const BoardLoading = () => {
  return (
    <div className="w-full h-full grid place-items-center px-12 bg-bg">
      <Loader />
    </div>
  );
};
