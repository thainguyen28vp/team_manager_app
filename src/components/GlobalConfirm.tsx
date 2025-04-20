import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageRequireSource,
} from 'react-native'
import { colors, dimensions, fonts } from '@src/theme'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import FastImage from '@d11/react-native-fast-image'
import { moderateScale, verticalScale } from '@src/common'
import { ButtonPrimary } from './Button/Button'

type ConfirmProps = {
  title?: string
  content?: string
  action?: () => void
  textConfirm?: string
  textCancel?: string
  icon?: ImageRequireSource
}

type Props = {
  navigation: NavigationProp<any>
  route: { params?: ConfirmProps }
}

const { width } = dimensions

const ModalConfirm = (props: Props) => {
  const {
    navigation,
    route: { params },
  } = props

  const title = params?.title || 'Thông báo'
  const content = params?.content
  const icon = params?.icon
  const action = params?.action
  const textConfirm = params?.textConfirm || 'Xác nhận'
  const textCancel = params?.textCancel || 'Huỷ'
  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={1}
      onPress={() => navigation.goBack()}
    >
      <TouchableOpacity
        style={[styles.container, { backgroundColor: '#fff' }]}
        activeOpacity={1}
        onPress={e => e.stopPropagation()}
      >
        {!!icon && <FastImage source={icon} style={styles.icon} />}
        <Text
          style={{
            // color: ,
            textAlign: 'center',
            ...fonts.semi_bold16,
            color: colors.primary,
            // fontWeight: '700',
          }}
          children={title}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: verticalScale(12),
            marginBottom: verticalScale(24),
            ...fonts.regular16,
            width: '100%',
          }}
          children={content}
        />

        <View
          style={{
            width: '100%',
            // backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // gap: moderateScale(12),
          }}
        >
          <ButtonPrimary
            onPress={() => {
              navigation.goBack()
            }}
            title={textCancel}
            style={{ width: '48%', backgroundColor: 'transparent' }}
            textStyle={{ color: colors.text.light, ...fonts.medium16 }}
          />
          <ButtonPrimary
            onPress={() => {
              navigation.goBack()
              !!action && action()
            }}
            title={textConfirm}
            style={{ width: '48%' }}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    // ...styleView.centerItem,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - moderateScale(40),

    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(24),
  },

  icon: {
    width: moderateScale(48),
    aspectRatio: 1,
    marginBottom: verticalScale(16),
  },
})

export default ModalConfirm
