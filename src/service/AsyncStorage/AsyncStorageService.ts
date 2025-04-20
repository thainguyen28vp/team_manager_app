import AsyncStorage from '@react-native-async-storage/async-storage'
import reactotron from 'reactotron-react-native'

class AsyncStoreService {
  private TOKEN_KEY = 'token'
  private ROLE_KEY = 'role'

  async putToken(token: string) {
    try {
      await AsyncStorage.setItem(this.TOKEN_KEY, token)
    } catch (e) {
      console.warn('StorageClient: Failed to put token')
      __DEV__ && reactotron.log!(e)
    }
  }

  async getToken() {
    try {
      return await AsyncStorage.getItem(this.TOKEN_KEY)
    } catch (e) {
      console.warn('StorageClient: Failed to get token')
      __DEV__ && reactotron.log!(e)
    }
  }

  async putRole(data: string) {
    try {
      await AsyncStorage.setItem(this.ROLE_KEY, data)
    } catch (e) {
      console.warn('StorageClient: Failed to put track data')
      __DEV__ && reactotron.log!(e)
    }
  }

  async getRole() {
    try {
      return await AsyncStorage.getItem(this.ROLE_KEY)
    } catch (e) {
      console.warn('StorageClient: Failed to get track data')
      __DEV__ && reactotron.log!(e)
    }
  }

  /**
   * Saves a string to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  async saveString(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value)
      return true
    } catch {
      return false
    }
  }

  /**
   * Loads something from storage and runs it thru JSON.parse.
   *
   * @param key The key to fetch.
   */
  async load(key: string) {
    try {
      const almostThere = await AsyncStorage.getItem(key)
      return typeof almostThere === 'string' ? JSON.parse(almostThere) : null
    } catch {
      return null
    }
  }

  /**
   * Saves an object to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  async save(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  }

  /**
   * Removes something from storage.
   *
   * @param key The key to kill.
   */
  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key)
    } catch {}
  }

  /**
   * Burn it all to the ground.
   */
  async clear() {
    try {
      await AsyncStorage.clear()
    } catch {
      return null
    }
  }
}

export default new AsyncStoreService()
