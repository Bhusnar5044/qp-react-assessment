import { HeadingButtons } from './HeadingButtons';
import { HeadingTitle } from './HeadingTitle';

export const BoardHeading = () => {
  return (
    <div className="bg-elements py-6 px-8 border-b-2 max-md:py-4 max-md:px-4 max-md:gap-4 border-lines flex justify-center items-center gap-x-6">
      <HeadingTitle />
      <HeadingButtons />
    </div>
  );
};
