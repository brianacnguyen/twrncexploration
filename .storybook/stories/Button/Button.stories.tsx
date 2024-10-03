import React from 'react';
import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {MyButton} from './Button';
import {ThemeProvider, Theme, ColorScheme} from '../../../Theme';

const MyButtonMeta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof MyButton> = {
  render: () => {
    return (
      <View>
        <MyButton text="Brand Button - Themed" onPress={() => {}} />
        <ThemeProvider theme={Theme.Brand} colorScheme={ColorScheme.Light}>
          <MyButton text="Brand Button - Light only" onPress={() => {}} />
        </ThemeProvider>
        <ThemeProvider theme={Theme.Brand} colorScheme={ColorScheme.Dark}>
          <MyButton text="Brand Button - Dark only" onPress={() => {}} />
        </ThemeProvider>
        <ThemeProvider
          theme={Theme.BrandInverse}
          colorScheme={ColorScheme.Themed}>
          <MyButton text="BrandInverse Button - Themed" onPress={() => {}} />
        </ThemeProvider>
      </View>
    );
  },
};
