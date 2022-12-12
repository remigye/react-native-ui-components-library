import { Platform, TextStyle } from 'react-native';
import {
  colors,
  fonts,
  fontWeights,
  VariantSize,
  VariantWeight,
} from '../../../theme';

export const text = (size: VariantSize, weight: VariantWeight): TextStyle => ({
  color: colors.secondary.dark,
  fontFamily: fonts.title,
  fontSize: size,
  fontWeight: Platform.OS === 'ios' ? fontWeights[`${weight}`] : undefined,
});
