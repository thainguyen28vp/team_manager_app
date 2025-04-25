import React, { useEffect } from 'react'
import AppContainer from './AppContainer'
import SplashScreen from 'react-native-splash-screen'
import { OS } from '@src/theme'

const App = () => {
  useEffect(() => {
    if (OS === 'android') SplashScreen.hide()
  }, [])
  return <AppContainer />
}

export default App
