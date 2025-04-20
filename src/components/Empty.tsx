import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from '@d11/react-native-fast-image'
import images from '@assets/imageAssets'
import { WIDTH } from '@src/theme'

const Empty = () => {
  return (
    <View style={styles.container}>
      <FastImage source={images.img_empty} style={styles.img} />
      <Text style={styles.txtEmpty}>Không có dữ liệu</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  img: {
    width: WIDTH * 0.4,
    aspectRatio: 1,
  },
  txtEmpty: {
    fontSize: 18,
    fontWeight: '600',
    color: '#69747E',
    marginTop: 12,
  },
})
