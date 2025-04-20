import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import { BarIndicator } from 'react-native-indicators'
import { colors } from '@src/theme'
import { moderateScale } from '@src/common'
interface Props {
  backgroundColor?: string
  translucent?: boolean
}
const Loading = ({ backgroundColor, translucent = false }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor || 'transparent',
      }}
    >
      {/* <BarIndicator color={colors.primary} /> */}

      <Text style={{ fontSize: 30 }}>Dang tai test</Text>
      {/* <StatusBar translucent={translucent} backgroundColor="transparent" /> */}
      {/* <LoaderKit
        style={{ width: moderateScale(60), aspectRatio: 1 }}
        name={'LineScalePulseOut'} // Optional: see list of animations below
        color={colors.primary} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
      /> */}
    </View>
  )
}
export default Loading
