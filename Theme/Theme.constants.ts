import {lightTheme, darkTheme} from '@metamask/design-tokens';

import {Theme} from './Theme.types';

export const themes = {
  [Theme.Brand]: {
    light: lightTheme.colors,
    dark: darkTheme.colors,
  },
  [Theme.BrandInverse]: {
    light: darkTheme.colors,
    dark: lightTheme.colors,
  },
};
