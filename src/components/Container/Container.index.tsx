import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './Container.styles';

const Container = ({
  children,
  overloadStyles,
  testID,
}: {
  children: any;
  overloadStyles?: ViewStyle;
  testID?: string;
}) => {
  return (
    <View style={[styles.container, overloadStyles]} testID={testID}>
      {children}
    </View>
  );
};

export default Container;
