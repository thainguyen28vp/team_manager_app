import {
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
  request,
} from 'react-native-permissions'
import { showConfirm } from './GlobalAlertHelper'
import { OS, VERSION } from '@app/theme'
const requestPermissionCamera = () =>
  new Promise(async resolve => {
    const permission =
      OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
    await request(permission).then(async result => {
      check(permission).then(result => {
        if (result === RESULTS.GRANTED) resolve(true)
        else {
          showConfirm(
            '',
            'Bạn đã tắt quyền truy cập camera. Hãy vào cài đặt => quyền riêng tư => bật quyền truy cập camera',
            () => {
              openSettings()
            }
          )
        }
      })
    })
  })
const requestPermissionReadLibrary = () =>
  new Promise(async resolve => {
    const permission =
      OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    await request(permission).then(async => {
      check(permission).then(result => {
        if (result === RESULTS.GRANTED) resolve(true)
        else {
          showConfirm(
            '',
            'Bạn đã tắt quyền truy cập thư viện ảnh. Hãy vào cài đặt => quyền riêng tư => bật quyền truy cập thư viện ảnh',
            () => {
              openSettings()
            }
          )
        }
      })
    })
  })
const requestPermissionWriteLibrary = () =>
  new Promise(async resolve => {
    if (Number(VERSION) >= 33) {
      resolve(true)
      return
    }
    const permission =
      OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    await request(permission).then(async => {
      check(permission).then(result => {
        if (result === RESULTS.GRANTED) resolve(true)
        else {
          showConfirm(
            '',
            'Bạn đã tắt quyền truy cập thư viện ảnh. Hãy vào cài đặt => quyền riêng tư => bật quyền truy cập thư viện ảnh',
            () => {
              openSettings()
            }
          )
        }
      })
    })
  })

const requestPermissionLocation = () =>
  new Promise(async resolve => {
    const permission =
      OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    await request(permission).then(async => {
      check(permission).then(result => {
        if (result === RESULTS.GRANTED) resolve(true)
        else {
          showConfirm(
            '',
            'Bạn đã tắt quyền truy cập thư viện ảnh. Hãy vào cài đặt => quyền riêng tư => bật quyền truy cập vị trí',
            () => {
              openSettings()
            }
          )
        }
      })
    })
  })

export {
  requestPermissionCamera,
  requestPermissionReadLibrary,
  requestPermissionWriteLibrary,
  requestPermissionLocation,
}
