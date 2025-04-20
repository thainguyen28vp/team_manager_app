import { colors } from '@src/theme'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
// import { BarIndicator } from 'react-native-indicators'

export default class LoadingProgress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLoading}>
          <Text style={{ fontSize: 30 }}>Dang tai test</Text>

          {/* <BarIndicator color={colors.primary} /> */}
          {/* <LoaderKit
            style={{
              width: moderateScale(60),
              aspectRatio: 1,
              // backgroundColor: 'red',
            }}
            name={'LineScalePulseOut'} // Optional: see list of animations below
            color={colors.primary} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
          /> */}
          {/* <Text
            style={{
              color: colors.text.primary,
              fontWeight: '500',
            }}
          >
            Vui lòng đợi
          </Text> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 100,
    // elevation: Platform.OS == 'android' ? 4 : 0,
  },
  containerLoading: {
    // height: 140,
    // backgroundColor: 'white',
    // padding: 30,
    // borderRadius: 10,
  },
})
