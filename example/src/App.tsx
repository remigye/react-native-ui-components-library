import * as React from 'react';

import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Paragraph,
  Title,
  Button,
  Checkbox,
} from 'react-native-ui-components-library';

export default function App() {
  //Checkbox setup
  const [isChecked, setIsChecked] = React.useState(false);

  let [fontsLoaded] = useFonts({
    'Arial-RoundedExtraBold': require('../assets/fonts/Arial-RoundedExtraBold.ttf'),
  });

  const buttonOnPress = React.useCallback(() => {
    Alert.alert(
      'Button pressed',
      'It works perfectly. Check all props to create your own layout'
    );
  }, []);

  const checkboxOnPress = React.useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe} onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <Title overloadStyles={[styles.text, styles.spacing]}>
          Title component
        </Title>
        <Paragraph overloadStyles={[styles.text, styles.spacing]}>
          Paragraph component
        </Paragraph>
        <Button onPress={buttonOnPress} overloadStyles={styles.spacing}>
          Press me
        </Button>
        <Checkbox
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleOnPress={checkboxOnPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  spacing: { marginVertical: 16 },
});
