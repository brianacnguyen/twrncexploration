import {create} from 'twrnc';

export enum Theme {
  Brand = 'brand',
  BrandInverse = 'brandInverse',
}

export enum ColorScheme {
  Light = 'light',
  Dark = 'Dark',
  Themed = 'Themed',
}

export interface ThemeContextProps {
  tw: ReturnType<typeof create>;
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
  colorScheme?: ColorScheme;
}
