import ReactTron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import { NativeModules } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const reactotron = ReactTron.configure({
  name: 'app bong da',
})
  .configure('wsbase')
  .use(reactotronRedux())
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect()

console.tron = ReactTron
export default reactotron
