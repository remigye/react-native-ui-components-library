import React, { useCallback, useEffect, useMemo } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { ModelValidation } from '../../helpers/modelValidation';
import { normalize } from '../../helpers/normalize';
import { colors } from '../../theme';
import styles, { container } from './Checkbox.styles';

const Checkbox = ({
  isChecked,
  setIsChecked,
  handleOnPress,
  modelValidation,
  color = colors.primary,
  size = 50,
  strokeWidth = 2.5,
}: {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnPress: React.Dispatch<React.SetStateAction<any>>;
  modelValidation?: ModelValidation;
  color?: string;
  size?: number;
  strokeWidth?: number;
}) => {
  const isError = modelValidation?.isError('cguChecked') || undefined;
  const progress = useSharedValue<number>(-1);
  const checkIcon = useSharedValue<number>(0);

  const CIRCLE_LENGHT = useMemo(() => normalize(2 * size), [size]);
  const R = useMemo(
    () => normalize(CIRCLE_LENGHT / (2 * Math.PI)),
    [CIRCLE_LENGHT]
  );

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGHT * progress.value,
  }));

  const rCheckIcon = useAnimatedStyle(() => {
    return {
      opacity: withTiming(checkIcon.value),
    };
  });

  const onPress = useCallback(() => {
    setIsChecked(!isChecked);
    handleOnPress((prevState: any) => ({
      customer: { ...prevState.customer },
      user: { ...prevState.user },
      cguChecked: !isChecked,
      pickedDate: prevState.pickedDate,
    }));
  }, [handleOnPress, isChecked, setIsChecked]);

  useEffect(() => {
    if (isChecked) {
      progress.value = withTiming(0, { duration: 1000 });
      checkIcon.value = 1;
      // closeIcon.value = 0;
    } else {
      progress.value = withTiming(-1, { duration: 1000 });
      checkIcon.value = 0;
      // closeIcon.value = 1;
    }
  }, [checkIcon, isChecked, progress]);

  function setBgColor() {
    if (isError) {
      return colors.error.first;
    }
    if (isChecked) {
      return colors.primary;
    }
    return colors.gray.light;
  }

  return (
    <Pressable onPress={() => onPress()} style={container(size)}>
      <Animated.View style={[styles.icon, rCheckIcon]}>
        <Icon name="check" size={normalize(CIRCLE_LENGHT / 4)} color={color} />
      </Animated.View>
      <Svg height={'100%'} width={'100%'} style={styles.svg}>
        <Circle
          cx={'50%'}
          cy={'50%'}
          r={R}
          stroke={setBgColor()}
          strokeWidth={normalize(strokeWidth)}
        />
        <AnimatedCircle
          cx={'50%'}
          cy={'50%'}
          r={R}
          stroke={color}
          strokeWidth={normalize(strokeWidth)}
          strokeDasharray={CIRCLE_LENGHT}
          animatedProps={animatedProps}
        />
      </Svg>
    </Pressable>
  );
};

export default Checkbox;
