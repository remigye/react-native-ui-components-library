import { Dimensions, PixelRatio } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

//Use iPhone XS Max as ref
export const scaleWidth = WINDOW_WIDTH / 414;
export const scaleHeight = WINDOW_HEIGHT / 896;

export function normalize(size: number, forHeight?: boolean) {
  const newSize = size * (forHeight ? scaleHeight : scaleWidth);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
