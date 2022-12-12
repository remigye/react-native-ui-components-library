import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { VariantSize, VariantWeight } from '../../../theme';
import { text } from './Title.styles';

const Title = ({
  children,
  variantWeight = VariantWeight.regular,
  variantSize = VariantSize.m,
  overloadStyles,
  testID,
}: {
  children: any;
  variantWeight?: VariantWeight;
  variantSize?: VariantSize;
  overloadStyles?: StyleProp<TextStyle>;
  testID?: string;
}) => {
  return (
    <Text
      style={[text(variantSize, variantWeight), overloadStyles]}
      testID={testID}
    >
      {children}
    </Text>
  );
};

export default Title;
