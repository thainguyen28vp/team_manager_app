import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationUtil from '@navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@config/screenTypes'

const LoginScreen = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Button
        title="dang nhap"
        onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.MAIN)}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
