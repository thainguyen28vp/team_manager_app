import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import React, { JSX } from 'react'
import { MAIN_TAB, SCREEN_ROUTER_AUTH } from '@config/screenTypes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FastImage from '@d11/react-native-fast-image'
import { moderateScale } from '@src/common'
import { colors, fonts } from '@src/theme'
import NavigationUtil from './NavigationUtil'
import images from '@assets/imageAssets'
import HomeScreen from '@screens/app/home/HomeScreen'
import AccountScreen from '@screens/app/account/AccountScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import OtherScreen from '@screens/app/other/OtherScreen'
import CalendarScreen from '@screens/app/calendar/CalendarScreen'

type TabOption = {
  name: string
  icon: any
  icon_focus: any
  route: (props?: any) => JSX.Element
  title: string
}
const Tab = createBottomTabNavigator()

const { HOME, ACCOUNT, OTHER, CALENDAR } = MAIN_TAB

export const TAB_BAR: Record<string, TabOption> = {
  [HOME]: {
    name: MAIN_TAB.HOME,
    icon: images.ic_home,
    icon_focus: images.ic_home_active,
    route: HomeScreen,
    title: 'Trang chủ',
  },

  [CALENDAR]: {
    name: MAIN_TAB.CALENDAR,
    icon: images.ic_calendar,
    icon_focus: images.ic_calendar_active,
    route: CalendarScreen,
    title: 'Lịch thi đấu',
  },
  [ACCOUNT]: {
    name: MAIN_TAB.ACCOUNT,
    icon: images.ic_user,
    icon_focus: images.ic_user_active,

    route: AccountScreen,
    title: 'Tài khoản',
  },
  [OTHER]: {
    name: MAIN_TAB.OTHER,
    icon: images.ic_more,
    icon_focus: images.ic_more_active,

    route: OtherScreen,
    title: 'Khác',
  },
}

const Tabs = () => {
  const inset = useSafeAreaInsets()
  return (
    <Tab.Navigator
      // tabBar={tabBar={props => <TabbarCustom {...props} />}}
      screenOptions={({ navigation, route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.brand,
          position: 'absolute',
          marginBottom: inset.bottom,
          paddingBottom: moderateScale(6),
          paddingTop: moderateScale(6),
          marginHorizontal: moderateScale(12),
          height: 'auto',
          borderRadius: moderateScale(24),
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          // marginBottom: 0,
          // paddingBottom: 0,
        },

        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? colors.white : colors.gray
          return (
            <FastImage
              style={styles.img_icon}
              tintColor={tintColor}
              source={
                focused
                  ? TAB_BAR[route.name].icon_focus
                  : TAB_BAR[route.name].icon
              }
              resizeMode={'contain'}
            />
          )
        },
        tabBarLabel: ({ focused }) => {
          const tintColor = focused ? colors.white : colors.gray
          return (
            <Text
              style={[
                styles.txtLabel,
                {
                  color: tintColor,
                },
              ]}
              numberOfLines={1}
            >
              {TAB_BAR[route.name].title}
            </Text>
          )
        },
        // tabBarButton: props => {
        //   return (
        //     <TouchableOpacity
        //       {...(props as TouchableOpacityProps)}
        //       onPress={async e => {
        //         // const token = await AsyncStorageService.getToken()
        //         // if (route.name != MAIN_TAB.HOME && !token) {
        //         //   showConfirm(
        //         //     R.strings().noti,
        //         //     R.strings().require_login_message,
        //         //     () => {
        //         //       NavigationUtil.navigate(SCREEN_ROUTER_AUTH.LOGIN)
        //         //     },
        //         //     R.strings().login,
        //         //     ''
        //         //   )
        //         //   return
        //         // }
        //         if (props.onPress) props.onPress(e)
        //       }}
        //     />
        //   )
        // },
      })}
    >
      {Object.keys(TAB_BAR).map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={TAB_BAR[item].name}
            component={TAB_BAR[item].route}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  icon: {
    width: moderateScale(24),
    aspectRatio: 1,
  },
  label: {
    // fontSize: moderateScale(12),
    ...fonts.medium12,
  },
  img_icon: {
    width: moderateScale(24),
    aspectRatio: 1,
  },
  txtLabel: {
    // fontSize: moderateScale(12),
    ...fonts.medium12,
  },
})
