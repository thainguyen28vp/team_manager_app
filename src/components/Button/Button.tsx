import { colors, fonts } from '@src/theme'

import debounce from 'lodash.debounce'
import React from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { ButtonProps } from './Button.props'
import FastImage from '@d11/react-native-fast-image'
import { moderateScale, verticalScale } from '@src/common'

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    width: '100%',
  },
  txtTitle: {
    // fontSize: 16,
    // fontWeight: '700',
    ...fonts.bold16,
    color: 'white',
  },
  icon: {
    width: moderateScale(24),
    aspectRatio: 1,
    marginRight: moderateScale(4),
  },
  loading: { position: 'absolute', top: 12, right: 10 },
})
export const DebounceButton = React.memo(
  ({ onPress, style, ...props }: TouchableOpacityProps) => {
    const scale = useSharedValue(1)
    const AnimatedTouchableOpacity =
      Animated.createAnimatedComponent(TouchableOpacity)

    const debouncedOnPress = (e: GestureResponderEvent) => {
      onPress && onPress(e)
    }
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }))
    const onPressAction = debounce(debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    })

    return (
      <AnimatedTouchableOpacity
        style={[style, animatedStyle]}
        activeOpacity={0.8}
        {...props}
        onPress={onPressAction}
        onPressIn={() => {
          scale.value = withTiming(0.98, { duration: 150 })
        }}
        onPressOut={() => {
          scale.value = withTiming(1, { duration: 150 })
        }}
        children={props.children}
      />
    )
  }
)

export const ButtonPrimary = React.memo(
  ({
    onPress,
    title,
    style,
    isLoading,
    disabled,
    textStyle,
    iconSoure,
    iconColor = colors.white,
    ...props
  }: ButtonProps & TouchableWithoutFeedbackProps) => {
    return (
      <DebounceButton
        {...props}
        style={[
          styles.btnPrimary,
          style,
          !!iconSoure && { paddingVertical: moderateScale(10) },
        ]}
        onPress={onPress}
        disabled={isLoading || disabled}
        children={
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {!!iconSoure && (
                <FastImage
                  tintColor={iconColor}
                  source={iconSoure}
                  style={styles.icon}
                />
              )}
              <Text style={[styles.txtTitle, textStyle]} children={title} />
            </View>
            {isLoading && (
              <ActivityIndicator color="white" style={styles.loading} />
            )}
          </>
        }
      />
    )
  }
)
