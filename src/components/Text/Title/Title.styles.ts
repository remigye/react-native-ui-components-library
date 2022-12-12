import { Platform, TextStyle } from 'react-native';
import {
  colors,
  fontWeights,
  VariantSize,
  VariantWeight,
} from '../../../theme';

export const text = (size: VariantSize, weight: VariantWeight): TextStyle => ({
  color: colors.secondary.dark,
  fontSize: size,
  fontWeight: Platform.OS === 'ios' ? fontWeights[`${weight}`] : undefined,
});
