import ToastShow from '@utils/ToastHelper'
import AsyncStoreService from '../AsyncStorage/AsyncStorageService'
import { BASE_REQUEST } from '@src/config/constants'
import reactotron from 'ReactotronConfig'
import { showMessages } from '@utils/GlobalAlertHelper'
import NavigationUtil from '@navigation/NavigationUtil'
import { SCREEN_ROUTER_AUTH } from '@config/screenTypes'
import { callAPIHook } from '@utils/CallApiHelper'
interface ResponseType<T> {
  status: number
  code: number
  message: string
  data: any
}

const createAPI = () => {
  const APIInstant = require('axios').default.create()
  APIInstant.defaults.baseURL = BASE_REQUEST
  APIInstant.defaults.timeout = 15000
  APIInstant.defaults.headers = {
    'Content-Type': 'application/json',
  }
  APIInstant.interceptors.request.use(async (config: any) => {
    // config.headers.token = (await AsyncStoreService.getToken()) || ''
    config.headers.Authorization = `Bearer ${
      (await AsyncStoreService.getToken()) || ''
    }`
    config.headers.platform = 'app'
    return config
  }, Promise.reject)
  console.log('ddd')

  APIInstant.interceptors.response.use(
    (response: ResponseType<any>) => {
      const data = response.data
      // reactotron.log('response', response)

      // if (data && !data.Status) {
      //   ToastShow('Có lỗi xảy ra !', 'danger')
      //   return
      // }

      // if (data && data.code === 10) {
      //   showMessages('', 'Phiên đăng nhập hết hạn', () => {
      //     AsyncStoreService.putToken('').then(() => {})
      //     NavigationUtil.navigate(SCREEN_ROUTER_AUTH.SPLASH, { re_login: true })
      //   })
      // } else if (data && data.status !== 1) {
      //   showMessages('', data?.message)
      // }

      return response
    },
    error => {
      if (error.response?.status === 401 || error.response?.status === 403)
        showMessages('', 'Phiên đăng nhập hết hạn', () => {
          AsyncStoreService.putToken('').then(() => {})
          NavigationUtil.reset(SCREEN_ROUTER_AUTH.LOGIN)
        })
      console.log('error', error)
      // return
      if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED') {
        showMessages(
          error.code,
          'Không kết nối được với máy chủ, Thử lại sau!',
          () => {
            // AsyncStoreService.putToken('').then(() => {})
            // NavigationUtil.reset(SCREEN_ROUTER_AUTH.SPLASH)
          }
        )
      }
      if (error.response?.status === 0)
        showMessages(
          'Thất bại',
          'Không kết nối được với máy chủ, Thử lại sau!',
          () => {
            // AsyncStoreService.putToken('').then(() => {})
            // NavigationUtil.reset(SCREEN_ROUTER_AUTH.SPLASH)
          }
        )
    }
  )
  return APIInstant
}

const axiosClient = createAPI()

/* Support function */
function handleResult<T>(api: any) {
  // if (NetworkHelper.isInternetReachable) {
  return api.then((res: any) => {
    return handleResponse<T>(res.data)
  })
  // } else Promise.reject(new Error('Network offline'));
}

function handleResponse<T>(data: ResponseType<T>) {
  // if (data.status !== 1)
  //   return Promise.reject(new Error(data?.message || 'Co loi xay ra'))
  return Promise.resolve(data)
}

export const ApiClient = {
  get: (url: string, payload?: any) =>
    handleResult(axiosClient.get(url, payload)),
  post: (url: string, payload?: any) =>
    handleResult(axiosClient.post(url, payload)),
  put: (url: string, payload?: any) =>
    handleResult(axiosClient.put(url, payload)),
  path: (url: string, payload?: any) =>
    handleResult(axiosClient.patch(url, payload)),
  delete: (url: string, payload?: any) =>
    handleResult(axiosClient.delete(url, payload)),
}
