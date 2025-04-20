import { Source } from '@d11/react-native-fast-image'
import { JSX } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
export interface ButtonProps {
  title?: string
  isLoading?: boolean
  style?: StyleProp<ViewStyle>
  styleText?: StyleProp<ViewStyle>
  icon?: JSX.Element
  disabled?: boolean
  onPress: () => void
  children?: any
  textStyle?: any
  activeOpacity?: number
  iconSoure?: Source
  iconColor?: string
}
