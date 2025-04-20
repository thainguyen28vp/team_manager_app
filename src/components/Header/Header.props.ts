export interface Props {
  color?: string
  backgroundHeader?: string
  borderBottomHeader?: string
  back?: boolean
  onBack?: () => void
  /**
   * View nút phải
   */
  rightComponent?: React.ReactNode
  /**
   * View nút trái
   */
  leftComponent?: React.ReactNode
  /**
   * Title thanh header
   */
  titleHeader: string
  colorsBack?: string
}
