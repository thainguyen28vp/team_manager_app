import React, { Component, memo } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import FastImage from '@d11/react-native-fast-image'
import { colors, dimensions, fonts, OS, WIDTH } from '@src/theme'
import NavigationUtil from '@navigation/NavigationUtil'
import { moderateScale, verticalScale } from '@src/common'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import images from '@assets/imageAssets'
const scale = WIDTH / 375
interface Props {
  color?: string
  backgroundHeader?: string
  borderBottomHeader?: string
  back?: boolean
  onBack?: () => void
  /**
   * View nút phải
   */
  rightComponent?: React.ReactNode
  titleHeader: string
  colorsBack?: string
}

interface BackProps {
  style?: ViewStyle
  onBack?: () => void
  colorsBack?: string
  disable?: boolean
}

export class BackButton extends Component<BackProps> {
  render() {
    const { disable, onBack, colorsBack } = this.props
    return (
      <TouchableOpacity
        disabled={disable}
        style={{
          paddingHorizontal: moderateScale(12),
          paddingVertical: moderateScale(8),
          opacity: disable ? 0 : 1,
        }}
        onPress={onBack || NavigationUtil.goBack}
      >
        <FastImage
          source={images.ic_back}
          style={{ width: 24, height: 24 }}
          tintColor={colorsBack ? colorsBack : colors.gray}
          resizeMode="contain"
        />
      </TouchableOpacity>
    )
  }
}

const RNHeader = (props: Props) => {
  const inset = useSafeAreaInsets()
  const {
    back,
    onBack,
    titleHeader,
    rightComponent,
    borderBottomHeader = '#E7E7E7',
    backgroundHeader = 'white',
    colorsBack,
  } = props
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: inset.top,
          borderBottomColor: borderBottomHeader,
          backgroundColor: backgroundHeader,
        },
      ]}
    >
      <View style={styles.wrapper}>
        <View style={styles.flexLeft}>
          <BackButton colorsBack={colorsBack} onBack={onBack} disable={!back} />
          <Text style={[styles.txtHeader, !back && { opacity: 0 }]}>
            {titleHeader}
          </Text>
        </View>
        {rightComponent}
        {!back && (
          <Text style={[styles.txtHeader, { position: 'absolute' }]}>
            {titleHeader}
          </Text>
        )}
      </View>
    </View>
  )
}

export default memo(RNHeader)

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: moderateScale(12),
  },
  flexLeft: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  txtHeader: {
    color: colors.colorDefault.text,
    ...fonts.semi_bold20,
  },
  positionText: {
    position: 'absolute',
  },
})
