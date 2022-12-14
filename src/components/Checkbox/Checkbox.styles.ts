import { FlexStyle, StyleSheet, ViewStyle } from 'react-native';

export default StyleSheet.create({
  icon: {
    position: 'absolute',
  },
  svg: { position: 'absolute' },
});

export const container = (size: number): ViewStyle => ({
  height: size,
  width: size,
  alignSelf: 'center' as FlexStyle['alignSelf'],
  justifyContent: 'center' as FlexStyle['justifyContent'],
  alignItems: 'center' as FlexStyle['alignItems'],
});
