import {
  ImageRequireSource,
  ImageStyle,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'
import React, { memo } from 'react'
import FastImage, { FastImageProps } from '@d11/react-native-fast-image'
import * as Animatable from 'react-native-animatable'
import { ColorDefault, colors, fonts } from '@src/theme'
import { moderateScale, scale, verticalScale } from '@src/common'

interface FormInputProps extends TextInputProps {
  label?: string
  labelStyle?: TextStyle
  requireText?: boolean
  leftIcon?: ImageRequireSource
  containerStyle?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ImageStyle>
  inputStyle?: StyleProp<ViewStyle>
  errorStyle?: StyleProp<ViewStyle>
  rightIcon?: ImageRequireSource
  showRightIcon?: boolean
  // error?: string | string[] | FormikErrors<any> | FormikErrors<any>[]
  error?: string | false | undefined
  onPressRightIcon?: TouchableOpacityProps['onPress']
  editable?: boolean
  onPress?: TouchableOpacityProps['onPress']
  backGroundColor?: string
  onLayoutEvent?: (event: LayoutChangeEvent) => void
}

const FormInput = (props: FormInputProps) => {
  const {
    label,
    labelStyle,
    requireText,
    leftIcon,
    containerStyle,
    inputStyle,
    rightIcon,
    showRightIcon,
    error,
    errorStyle,
    editable = true,
    onPressRightIcon,
    onPress,
    backGroundColor,
    inputContainerStyle,
    onLayoutEvent,

    ...inputProps
  } = props
  const Component = !!onPress ? TouchableOpacity : View

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.flexB}>
        {!!label && (
          <View style={styles.labelContainer}>
            <Text
              style={[
                styles.textLabel,
                { color: colors.text.dark },
                labelStyle,
              ]}
            >
              {label}
            </Text>
            {requireText && <Text style={styles.requireText}> *</Text>}
          </View>
        )}
        <Component
          activeOpacity={0.3}
          style={[
            styles.inputContainer,
            { borderColor: ColorDefault.border },
            backGroundColor && {
              backgroundColor: backGroundColor,
            },
            inputContainerStyle,
            !!error && { borderColor: colors.error.light },
          ]}
          onPress={onPress}
        >
          {!!leftIcon && (
            <FastImage
              source={leftIcon}
              style={styles.leftIcon}
              tintColor={'#8EA0AB'}
            />
          )}

          <TextInput
            pointerEvents={!!onPress ? 'none' : 'auto'}
            // placeholderTextColor={colors.text}
            style={[
              styles.input,
              { color: colors.text.dark },
              !!leftIcon && { paddingLeft: 0 },
              inputStyle,
              !editable && { color: colors.text.light },
              !!leftIcon && { marginLeft: 0 },
            ]}
            editable={!!onPress ? false : editable}
            {...inputProps}
          />

          {!!rightIcon && (
            <View>
              {!!rightIcon && !onPressRightIcon ? (
                <FastImage
                  source={rightIcon}
                  style={styles.rightIcon}
                  tintColor={colors.text.dark}
                />
              ) : (
                <TouchableOpacity
                  onPress={onPressRightIcon}
                  children={
                    <FastImage
                      source={rightIcon}
                      style={styles.rightIcon}
                      tintColor={colors.text.dark}
                    />
                  }
                />
              )}
            </View>
          )}
        </Component>
      </View>
      {!!error && (
        <View style={styles.viewError}>
          <Animatable.Text
            animation="fadeIn"
            style={[
              styles.errorText,
              { color: ColorDefault.error },
              errorStyle,
            ]}
            children={error}
          />
        </View>
      )}
    </View>
  )
}

export default memo(FormInput)

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: 100,
    paddingVertical: moderateScale(8),
    // marginTop: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(6),
  },
  textLabel: {
    ...fonts.medium16,
  },
  requireText: {
    ...fonts.medium16,
    color: '#F04257',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    // flex: 1,
    width: '100%',
    borderRadius: moderateScale(8),
    // paddingVertical: 20,
    // backgroundColor: 'red',
  },
  leftIcon: {
    width: moderateScale(20),
    aspectRatio: 1,
    marginRight: scale(8),
    marginLeft: scale(12),
  },
  rightIcon: {
    width: moderateScale(20),
    aspectRatio: 1,
    marginLeft: scale(8),
    marginRight: scale(12),
  },
  input: {
    flex: 1,
    ...fonts.semi_bold16,
    // backgroundColor: 'green',
    paddingHorizontal: moderateScale(12),
    // height: '100%',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(8),
    // width: '100%',
  },
  errorText: {
    ...fonts.regular12,
    textAlign: 'right',
  },
  viewError: {
    // height: verticalScale
    justifyContent: 'center',
  },
  flexB: { width: '100%' },
})
