import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from '@d11/react-native-fast-image'
import { moderateScale } from '@src/common'
import { colors, fonts } from '@src/theme'

const uri =
  'https://bizweb.dktcdn.net/100/458/331/files/logo-ao-bong-4.jpg?v=1721585422601'

const PersonnelForm = () => {
  return (
    <View style={styles.wraper}>
      <FastImage source={{ uri }} style={styles.img} />
      <View style={styles.wraperContent}>
        <View style={styles.wraperName}>
          <Text numberOfLines={1} style={styles.txtName}>
            Thai nguyen
          </Text>
          <Text style={styles.txtPosition}>HLV</Text>
        </View>
        <Text style={styles.txtBirthday}>28/11/2000 - NV8A77</Text>
        <Text style={styles.txtStatus}>Có thể thi đấu</Text>
      </View>
    </View>
  )
}

export default PersonnelForm

const styles = StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
    backgroundColor: colors.brand,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
  },
  img: {
    width: moderateScale(60),
    aspectRatio: 1,
    borderRadius: moderateScale(12),
  },
  wraperName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtName: {
    ...fonts.semi_bold16,
    color: colors.white,
    flex: 1,
  },
  txtPosition: {
    ...fonts.semi_bold14,
    color: colors.white,
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(4),
    backgroundColor: '#294161',
    borderRadius: moderateScale(6),
  },
  txtBirthday: {
    ...fonts.regular14,
    color: colors.gray,
  },
  txtStatus: {
    ...fonts.semi_bold14,
    color: colors.gray,
  },
  wraperContent: {
    flex: 1,
    gap: moderateScale(3),
  },
})
