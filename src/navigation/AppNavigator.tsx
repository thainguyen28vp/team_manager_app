import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import NavigationUtil from './NavigationUtil'
import {
  ROOT_STACK,
  SCREEN_ROUTER,
  SCREEN_ROUTER_AUTH,
} from '@config/screenTypes'
import {
  AuthStack,
  MainStack,
  StackAppScreen,
  StackAuthScreen,
} from './AppStack'
import Drawers from './Tab'
import GlobalAlert from '@components/GlobalAlert'
import GlobalConfirm from '@components/GlobalConfirm'
import { Easing } from 'react-native-reanimated'

const { MAIN } = SCREEN_ROUTER

const RootStack = createNativeStackNavigator()
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}
const optionsModal: NativeStackNavigationOptions = {
  gestureEnabled: false,
  presentation: 'transparentModal',
  contentStyle: { backgroundColor: 'rgba(0,0,0,0.5)' },
  animation: 'fade',
}

const AppNavigator = () => {
  const MainApp = () => {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name={MAIN} component={Drawers} />
        {StackAuthScreen()}
        {StackAppScreen()}
      </AuthStack.Navigator>
    )
  }
  return (
    <NavigationContainer
      ref={navigatorRef => {
        if (navigatorRef) NavigationUtil.setTopLevelNavigator(navigatorRef)
      }}
    >
      <RootStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={ROOT_STACK.MAIN_APP}
      >
        <RootStack.Screen name={ROOT_STACK.MAIN_APP} component={MainApp} />
        <RootStack.Screen
          name={ROOT_STACK.GLOBAL_ALERT}
          component={GlobalAlert}
          options={optionsModal}
        />
        <RootStack.Screen
          name={ROOT_STACK.GLOBAL_CONFIRM}
          component={GlobalConfirm}
          options={optionsModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
