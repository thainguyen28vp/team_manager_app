import { SCREEN_ROUTER_APP, SCREEN_ROUTER_AUTH } from '@config/screenTypes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from '@screens/app/chat/ChatScreen'
import LoginScreen from '@screens/auth/login/LoginScreen'

import React from 'react'

const { LOGIN, SPLASH } = SCREEN_ROUTER_AUTH
const { CHAT } = SCREEN_ROUTER_APP

const AUTH_STACK = {
  // [SPLASH]: SplashScreen,
  [LOGIN]: LoginScreen,
}

const APP_STACK = {
  [CHAT]: ChatScreen,
}

const MainStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()

const StackAuthScreen = () => {
  return (
    <>
      {Object.keys(AUTH_STACK).map((item, index) => {
        if (item == SPLASH) {
          return (
            <AuthStack.Screen
              options={{
                animation: 'fade',
              }}
              key={index}
              name={item}
              component={AUTH_STACK[item]}
            />
          )
        } else {
          return (
            <AuthStack.Screen
              key={index}
              name={item}
              component={AUTH_STACK[item]}
            />
          )
        }
      })}
    </>
  )
}

const StackAppScreen = () => {
  return (
    <>
      {Object.keys(APP_STACK).map((item, index) => {
        return (
          <MainStack.Screen
            key={index}
            name={item}
            component={APP_STACK[item]}
          />
        )
      })}
    </>
  )
}

export { StackAppScreen, StackAuthScreen, AuthStack, MainStack }
