import { moderateScale } from '@app/common'
import { fonts, OS } from '@app/theme'
import { showMessage } from 'react-native-flash-message'

type type = 'info' | 'success' | 'warning' | 'danger' | 'default'

const ToastShow = (message: string, type?: type) => {
  showMessage({
    message: 'Thông báo',
    description: message,
    type: type || 'info',
    titleStyle: {
      ...fonts.semi_bold18,
      lineHeight: OS == 'android' ? undefined : 0,
    },
    textStyle: {
      ...fonts.medium16,
      lineHeight: OS == 'android' ? undefined : 0,
    },
    style: {
      paddingVertical: moderateScale(6),
    },
  })
}
export default ToastShow
