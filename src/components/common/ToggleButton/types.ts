export interface ToggleButtonProps {
  onToggle?: (direction: 'left' | 'right') => void;
  initialPosition?: 'left' | 'right';
}
