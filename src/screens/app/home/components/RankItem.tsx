import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage, { Source } from '@d11/react-native-fast-image'
import { moderateScale } from '@src/common'
import { colors, fonts } from '@src/theme'

interface IRankItem {
  source: Source
  name: string
  number?: number
}

const RankItem = ({ source, name, number }: IRankItem) => {
  return (
    <View style={styles.wraper}>
      <FastImage source={source} style={styles.img} />
      <Text numberOfLines={1} style={styles.txtName}>
        {name}
      </Text>
      <Text style={styles.txtNumber}>{number}</Text>
    </View>
  )
}

export default RankItem

const styles = StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: moderateScale(40),
    aspectRatio: 1,
    borderRadius: 1000,
  },
  txtName: {
    ...fonts.medium16,
    color: colors.white,
    flex: 1,
    marginHorizontal: moderateScale(8),
  },
  txtNumber: {
    ...fonts.medium14,
    color: colors.success.dark,
  },
})
