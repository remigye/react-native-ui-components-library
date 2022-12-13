import { FlexStyle, StyleSheet, TextStyle } from 'react-native';
import { normalize } from '../../helpers/normalize';

export default StyleSheet.create({
  button: {
    height: normalize(40),
    paddingVertical: normalize(8),
    marginHorizontal: normalize(8),
    justifyContent: 'center' as FlexStyle['justifyContent'],
    borderRadius: normalize(12),
  },
});

export const text = (isUppercase: boolean, color: string | undefined) => ({
  textTransform: isUppercase
    ? 'uppercase'
    : (undefined as TextStyle['textTransform']),
  textAlign: 'center' as TextStyle['textAlign'],
  color: color,
});
