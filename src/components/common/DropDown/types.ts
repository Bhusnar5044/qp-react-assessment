export type DropDownProps = {
  onSelect: (selectedOption: string) => void;
  optionList: string[];
  className?: string;
  value: string;
};
