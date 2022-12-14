# react-native-ui-components-library

Fully customizable ui components for react native apps

## Installation

(prefer yarn)

```sh
yarn add react-native-ui-components-library
```

or

```sh
npm install react-native-ui-components-library
```

## Usage

```js
import {
  Title,
  Content,
  Button,
  Checkbox,
} from 'react-native-ui-components-library';

<Title>Title content</Title>;

<Pragraph>Paragraph content</Pragraph>;

//Button config
const buttonOnPress = useCallback(() => {
  //...
}, []);
<Button onPress={buttonOnPress}>Press me</Button>;

//Checkbox config
const [isChecked, setIsChecked] = useState < boolean > false;
const checkboxOnPress = useCallback(() => {
  //...
}, []);
<Checkbox
  isChecked={isChecked}
  setIsChecked={setIsChecked}
  handleOnPress={checkboxOnPress}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
