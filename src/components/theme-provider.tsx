import type { ReactNode } from 'react';
import React from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => console.error('no theme provider'),
} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<string>('light');

  const toggleTheme = React.useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    document.documentElement.dataset.theme = updatedTheme;
    window.localStorage.setItem('theme', updatedTheme);
  }, [theme]);

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    document.documentElement.dataset.theme = localTheme ?? 'light';
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const providerValue = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};

const useTheme = () => React.useContext<IThemeContext>(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
