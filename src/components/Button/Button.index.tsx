import {
  Pressable,
  ViewStyle,
  ActivityIndicator,
  GestureResponderEvent,
  ColorValue,
} from 'react-native';
import React, { useState } from 'react';
import { colors, VariantSize, VariantWeight } from '../../theme';
import Paragraph from '../Text/Paragraph/Paragraph.index';
import styles, { text } from './Button.styles';

const Button = ({
  children,
  overloadStyles,
  color,
  variantSize,
  variantWeight,
  isUppercase = false,
  isDisabled = false,
  isLoading = false,
  onPress,
  testID,
}: {
  children: any;
  overloadStyles?: ViewStyle;
  color?: string;
  variantSize?: VariantSize;
  variantWeight?: VariantWeight;
  isUppercase?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  testID?: string;
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  function setBackground(isPressedIn: boolean, overloadBg?: ColorValue) {
    if (isPressedIn) {
      if (overloadBg !== undefined) {
        if (typeof overloadBg === 'string') {
          return overloadBg.includes('#', 0) ? overloadBg + '90' : '';
        } else {
          console.warn('Button background color expects hexa color');
        }
        return colors.secondary.default + '90';
      } else {
        return colors.secondary.default + '90';
      }
    } else {
      if (overloadBg !== undefined) {
        return overloadBg;
      } else {
        return colors.secondary.default;
      }
    }
  }

  return (
    <Pressable
      testID={testID}
      style={[
        styles.button,
        overloadStyles,
        {
          backgroundColor: setBackground(
            isPressed,
            overloadStyles?.backgroundColor
          ),
        },
      ]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#000'} />
      ) : (
        <Paragraph
          variantSize={variantSize}
          variantWeight={variantWeight}
          overloadStyles={text(isUppercase, color)}
        >
          {children}
        </Paragraph>
      )}
    </Pressable>
  );
};

export default Button;
