import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { showConfirm } from '@utils/GlobalAlertHelper'
import NavigationUtil from '@navigation/NavigationUtil'
import { SCREEN_ROUTER_AUTH } from '@config/screenTypes'

const HomeScreen = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Button
        title="dang xuat"
        onPress={() =>
          showConfirm('', 'Ban co muon dang xuat k', () =>
            NavigationUtil.reset(SCREEN_ROUTER_AUTH.LOGIN)
          )
        }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
