import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTailwind} from '../../../Theme';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const MyButton = ({onPress, text}: MyButtonProps) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      style={tw`bg-primary-default p-4 rounded-md mb-2`}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={tw`text-primary-inverse`}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: {color: 'white'},
});
