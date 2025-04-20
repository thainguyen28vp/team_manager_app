import { Dimensions, Platform } from 'react-native'
import DeviceInfo, { isTabletMode } from 'react-native-device-info'

const { width, height } = Dimensions.get('window')
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width]

// Kiểm tra thiết bị là tablet hay phone
const isTablet = DeviceInfo.isTablet()

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

// Hệ số scale riêng cho tablet
const tabletScaleFactor = isTablet ? 0.8 : 1
// scale theo chieu rong man hinh
const scale = (size: number) => {
  return (shortDimension / guidelineBaseWidth) * size * tabletScaleFactor
}
// scale theo chieu doc man hinh
const verticalScale = (size: number) => {
  return (longDimension / guidelineBaseHeight) * size * tabletScaleFactor
}
// theo chieu ngang , nhung ko phong to qua : text,icon,button bé...
const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor * tabletScaleFactor
}

export { scale, verticalScale, moderateScale, isTablet }
