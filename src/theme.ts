import type { TextStyle } from 'react-native';
import { normalize } from './helpers/normalize';

type FontWeight = {
  light: TextStyle['fontWeight'];
  regular: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
};

export const colors = {
  white: '#fff',
  balck: '#000',
  primary: '#F4CB00',
  secondary: {
    light: '#F5F2EA',
    default: '#9CBDC7',
    dark: '#31324A',
  },
  alternate: {
    first: '#FFF6D2',
  },
  success: { first: '#B3D98E', second: '#8BB87A' },
  warning: { first: '#E69A24', second: '#C58C24' },
  error: { first: '#F8472F', second: '#E0472F' },
  gray: {
    light: '#D5D5D5',
    default: '#a7a7a7',
    dark: '#414141',
  },
  link: '#1676FC',
};
export const fonts = {
  title: 'Arial-RoundedExtraBold',
  alternate: 'Roboto-Bold',
  content: 'Roboto-Regular',
};
export const fontSizes = {
  xxs: normalize(12),
  xs: normalize(14),
  s: normalize(16),
  m: normalize(18),
  l: normalize(20),
  xl: normalize(24),
  xxl: normalize(30),
};
export const fontWeights: FontWeight = {
  light: '400',
  regular: '700',
  bold: '800',
};

export enum VariantWeight {
  light = 'light',
  regular = 'regular',
  bold = 'bold',
}

export enum VariantSize {
  xxs = fontSizes.xxs,
  xs = fontSizes.xs,
  s = fontSizes.s,
  m = fontSizes.m,
  l = fontSizes.l,
  xl = fontSizes.xl,
  xxl = fontSizes.xxl,
}
