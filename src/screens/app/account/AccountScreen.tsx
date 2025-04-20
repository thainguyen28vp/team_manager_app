import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import ScreenWrapper from '@src/components/Screen/ScreenWrapper'
import FormInput from '@src/components/FormInput'
import FastImage from '@d11/react-native-fast-image'
import images from '@assets/imageAssets'
import { moderateScale, verticalScale } from '@src/common'
import PersonnelForm from './components/PersonnelForm'
import { colors, HEIGHT } from '@src/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const AccountScreen = () => {
  const inset = useSafeAreaInsets()
  const renderItem = useCallback(() => <PersonnelForm />, [])

  const renderBody = () => (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <FormInput
            leftIcon={images.ic_search}
            placeholder="Tìm kiếm..."
            inputContainerStyle={styles.inputSearch}
            placeholderTextColor={colors.gray}
          />
        }
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 33]}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
        contentContainerStyle={[styles.flatlist, { paddingTop: inset.top }]}
      />
    </>
  )
  return (
    <View style={styles.view}>
      <ScreenWrapper
        unsafe
        // scroll
        children={renderBody()}
        style={styles.container}
      />
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    paddingHorizontal: moderateScale(12),
    // paddingTop: moderateScale(16),
    // paddingBottom: '15%',
  },
  flatlist: {
    gap: verticalScale(12),
    paddingBottom: HEIGHT * 0.15,
    // paddingVertical: moderateScale(16),
  },
  inputSearch: {
    backgroundColor: colors.brand,
    borderWidth: 0,
    marginTop: moderateScale(12),
  },
})
