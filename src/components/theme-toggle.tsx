import { Classic } from '@theme-toggles/react';
import '@theme-toggles/react/css/Classic.css';

import { useTheme } from '@/components/theme-provider';
import { cn } from '@/styles/utils';

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Classic
      toggle={toggleTheme}
      toggled={theme === 'light'}
      placeholder=""
      className={cn('text-3xl', theme === 'light' ? 'dark:text-gray-800' : 'text-white')}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
}

export default ThemeToggle;
