import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, dimensions, fonts } from '@src/theme'
import { moderateScale, verticalScale } from '@src/common'
import { ButtonPrimary } from './Button/Button'

type AlertProp = {
  title?: string
  content?: string
  action?: () => void
  text?: string
}

interface Props {
  navigation: any
  route: { params?: AlertProp }
}

const { width } = dimensions

const ModalAlert = (props: Props) => {
  const {
    navigation,
    route: { params },
  } = props

  const title = params?.title || 'Thông báo'
  const content = params?.content
  const action = params?.action
  const text = params?.text || 'Đồng ý'
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <Text
          style={[styles.title, { color: colors.primary }]}
          children={title}
        />
        <Text
          style={[styles.description, { color: colors.text.dark }]}
          children={content}
        />
        <ButtonPrimary
          onPress={() => {
            navigation.pop()
            !!action && action()
          }}
          title={text}
        />
        {/* <TouchableOpacity
          onPress={() => {
            navigation.pop()
            !!action && action()
          }}
          children={
            <View
              style={[styles.btn, { backgroundColor: colors.primary }]}
              children={<Text style={styles.txtBtn}>{text}</Text>}
            />
          }
        /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderStartColor: 'red',
    // zIndex: 100,
  },
  container: {
    // ...styleView.centerItem,
    width: width - moderateScale(40),
    borderRadius: moderateScale(16),
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(24),
  },
  btn: {
    // ...styleView.centerItem,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: verticalScale(32),
    borderRadius: moderateScale(8),
  },
  title: { textAlign: 'center', ...fonts.semi_bold20 },
  description: {
    textAlign: 'center',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    ...fonts.regular16,
  },
  txtBtn: {
    color: 'white',
    textAlign: 'center',
    ...fonts.bold16,
  },
})

export default ModalAlert
