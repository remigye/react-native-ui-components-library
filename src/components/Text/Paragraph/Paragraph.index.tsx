import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { VariantSize, VariantWeight } from '../../../theme';
import { text } from './Paragraph.styles';

const Paragraph = ({
  children,
  variantWeight = VariantWeight.light,
  variantSize = VariantSize.m,
  overloadStyles,
  numberOfLines,
  onPress,
  testID,
  adjustsFontSizeToFit,
}: {
  children: any;
  variantWeight?: VariantWeight;
  variantSize?: VariantSize;
  overloadStyles?: StyleProp<TextStyle>;
  numberOfLines?: number;
  onPress?: () => void;
  testID?: string;
  adjustsFontSizeToFit?: boolean;
}) => {
  return (
    <Text
      style={[text(variantSize, variantWeight), overloadStyles]}
      numberOfLines={numberOfLines}
      testID={testID}
      onPress={onPress}
      adjustsFontSizeToFit={adjustsFontSizeToFit ? adjustsFontSizeToFit : false}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
