import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppNavigator from '@navigation/AppNavigator'
import { Provider } from 'react-redux'
import store from '@src/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import FlashMessage from 'react-native-flash-message'
// import { PaperProvider } from 'react-native-paper'
import SplashScreen from 'react-native-splash-screen'
// import { OS } from '@app/theme'
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const AppContainer = () => {
  // useEffect(() => {
  //   if (OS === 'android') SplashScreen.hide()
  // }, [])

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  )
}

export default AppContainer

const styles = StyleSheet.create({})
