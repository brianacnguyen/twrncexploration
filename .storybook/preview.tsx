import React from 'react';
import type {Preview} from '@storybook/react';
import {Theme, ThemeProvider, ColorScheme} from '../Theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, {parameters}) => (
      <ThemeProvider theme={Theme.Brand} colorScheme={ColorScheme.Themed}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
