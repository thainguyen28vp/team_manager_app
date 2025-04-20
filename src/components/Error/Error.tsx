import { colors } from '@src/theme'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { DebounceButton } from '../Button/Button'
import { Props } from './Error.props'
import FastImage from '@d11/react-native-fast-image'
import images from '@assets/imageAssets'
const { width } = Dimensions.get('window')
const Error = (props: Props) => {
  return (
    <View style={styles.container}>
      <FastImage source={images.img_error} style={styles.image} />
      {/* <Text style={styles.description}>{R.strings().account}</Text> */}
      <DebounceButton style={styles.button} onPress={() => props.reload()}>
        <Text style={styles.textReload}>{'Khởi động lại ứng dụng'}</Text>
      </DebounceButton>
    </View>
  )
}
export default Error

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: '10%',
    paddingVertical: 12,
    borderRadius: 50,
  },
  textReload: {
    fontSize: 14,
    color: 'white',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: '10%',
  },
})
