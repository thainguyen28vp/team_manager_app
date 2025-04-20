import { Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const ratio = (width / 414 / height) * 1000

const OS = Platform.OS
const VERSION = Platform.Version

const widthRatio = width / 500
const heightRatio = height / 500

export { WIDTH, HEIGHT, OS, VERSION }

export const dimensions = {
  height,
  width,
  ratio,
  widthRatio,
  heightRatio,
}
