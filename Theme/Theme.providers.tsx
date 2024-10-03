import React, {createContext, useState, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {create} from 'twrnc';

import {generateTailwindConfig} from './Theme.utilities';
import {Theme} from './Theme.types';
import {
  ColorScheme,
  ThemeContextProps,
  ThemeProviderProps,
} from './Theme.types';

export const ThemeContext = createContext<ThemeContextProps>({
  tw: create({}),
  theme: Theme.Brand,
  colorScheme: ColorScheme.Themed,
  setTheme: () => {},
  setColorScheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = Theme.Brand,
  colorScheme = ColorScheme.Themed,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
  const [currentColorScheme, setCurrentColorScheme] =
    useState<ColorScheme>(colorScheme);

  const systemColorScheme = useColorScheme(); // 'light' | 'dark' | null

  const activeColorScheme: 'light' | 'dark' = useMemo(() => {
    if (currentColorScheme === ColorScheme.Themed) {
      return systemColorScheme === 'dark' ? 'dark' : 'light';
    }
    return currentColorScheme as 'light' | 'dark';
  }, [currentColorScheme, systemColorScheme]);

  const tw = useMemo(() => {
    const tailwindConfig = generateTailwindConfig(
      currentTheme,
      activeColorScheme,
    );
    return create(tailwindConfig);
  }, [currentTheme, activeColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        tw,
        theme: currentTheme,
        colorScheme: currentColorScheme,
        setTheme: setCurrentTheme,
        setColorScheme: setCurrentColorScheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
