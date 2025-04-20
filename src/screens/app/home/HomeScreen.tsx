import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { showConfirm } from '@utils/GlobalAlertHelper'
import NavigationUtil from '@navigation/NavigationUtil'
import { SCREEN_ROUTER_AUTH } from '@config/screenTypes'
import ScreenWrapper from '@src/components/Screen/ScreenWrapper'
import { colors, fonts, HEIGHT, WIDTH } from '@src/theme'
import FastImage from '@d11/react-native-fast-image'
import images from '@assets/imageAssets'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from '@src/common'
import RankItem from './components/RankItem'
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory-native'
import Svg from 'react-native-svg'

const uri =
  'https://bizweb.dktcdn.net/100/458/331/files/logo-ao-bong-4.jpg?v=1721585422601'

const HomeScreen = () => {
  const inset = useSafeAreaInsets()
  const renderHeader = () => (
    <View style={[styles.wrapperHeader, { paddingTop: inset.top }]}>
      <Text style={styles.txtNameTeam}>My team</Text>
      <TouchableOpacity style={styles.btnNoi}>
        <FastImage
          tintColor={colors.white}
          source={images.ic_calendar}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  )

  const renderScheduleUpcoming = () => (
    <View style={styles.wrapperSchedule}>
      <Text style={styles.txtTitle}>Next match</Text>
      <View style={styles.wrapTeam}>
        <View style={styles.viewTeam}>
          <FastImage source={{ uri }} style={styles.imgLogoTeam} />
          <Text style={styles.txtName}>DOI 1</Text>
        </View>
        <Text style={styles.txtVs}>VS</Text>
        <View style={styles.viewTeam}>
          <FastImage source={{ uri }} style={styles.imgLogoTeam} />
          <Text style={styles.txtName}>DOI 2</Text>
        </View>
      </View>
      <Text style={styles.txtTimeSchudule}>
        T2,25/03 4:00PM tai SVD My Dinh
      </Text>
    </View>
  )

  const rednerRank = () => (
    <View style={styles.wrapperRank}>
      <View style={styles.viewRank}>
        <Text style={styles.txtTitle}>Top ghi ban</Text>
        <RankItem source={{ uri }} name="thai nguaaayen" number={12} />
        <RankItem source={{ uri }} name="thai nguyen" number={12} />
        <RankItem source={{ uri }} name="thai nguyen" number={12} />
        <RankItem source={{ uri }} name="thai nguyen" number={12} />
      </View>
      <View style={styles.viewRank}>
        <Text style={styles.txtTitle}>Top ghi ban</Text>
        <RankItem source={{ uri }} name="thai nguaaayen" number={12} />
        <RankItem source={{ uri }} name="thai nguyen" number={12} />
        <RankItem source={{ uri }} name="thai nguyen" number={12} />
        <RankItem source={{ uri }} name="thai nguyen" number={12} />
      </View>
    </View>
  )

  const renderChart = () => (
    <View style={styles.wraperChart}>
      <View style={{ flex: 1, gap: moderateScale(12) }}>
        <Text style={styles.txtTitle}>team nang suat</Text>
        <RankItem source={{ uri }} name="thai nguyen" />
        <RankItem source={{ uri }} name="thai nguyen" />
        <RankItem source={{ uri }} name="thai nguyen" />
      </View>
      <Svg width={WIDTH * 0.4} height={WIDTH * 0.4}>
        <VictoryPie
          padding={0}
          padAngle={2}
          width={WIDTH * 0.4}
          height={WIDTH * 0.4}
          innerRadius={50}
          data={[
            { x: 'Cats', y: 30 },
            { x: 'Dogs', y: 35 },
            { x: 'Birds', y: 25 },
            { x: 'Rabbits', y: 10 },
          ]}
          theme={VictoryTheme.clean}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{
            fill: colors.white,
            ...fonts.bold24,
            fontSize: moderateScale(30),
          }}
          x={(WIDTH * 0.4) / 2}
          y={(WIDTH * 0.4) / 2}
          text="35"
        />
      </Svg>
    </View>
  )

  const renderBody = () => (
    <>
      {renderHeader()}
      {renderScheduleUpcoming()}
      {rednerRank()}
      {renderChart()}
    </>
  )

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      unsafe
      children={renderBody()}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    paddingHorizontal: moderateScale(16),
    paddingBottom: HEIGHT * 0.15,
  },
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
    paddingVertical: verticalScale(6),
  },
  btnNoi: {
    padding: moderateScale(12),
    backgroundColor: colors.brand,
    borderRadius: 1000,
  },
  icon: {
    width: moderateScale(24),
    aspectRatio: 1,
  },
  txtNameTeam: {
    ...fonts.bold24,
    color: colors.white,
  },
  imgLogoTeam: {
    width: WIDTH * 0.15,
    aspectRatio: 1,
    borderRadius: 1000,
  },
  txtTitle: {
    ...fonts.bold18,
    color: colors.white,
    textAlign: 'left',
    width: '100%',
  },
  wrapperSchedule: {
    backgroundColor: colors.brand,
    borderRadius: moderateScale(12),
    alignItems: 'center',
    gap: verticalScale(12),
    padding: moderateScale(12),
  },
  wrapTeam: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(24),
  },
  txtTimeSchudule: {
    ...fonts.regular16,
    color: colors.gray,
  },
  viewTeam: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(6),
  },
  txtName: {
    ...fonts.bold16,
    color: colors.white,
  },
  txtVs: {
    color: colors.gray,
    ...fonts.bold18,
  },
  viewRank: {
    width: '48%',
    backgroundColor: colors.brand,
    borderRadius: moderateScale(12),
    padding: 12,
    gap: moderateScale(12),
  },
  wrapperRank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(16),
  },
  wraperChart: {
    flexDirection: 'row',
    gap: moderateScale(12),
    backgroundColor: colors.brand,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    alignItems: 'center',
    // paddingVertical: 200,
  },
  txtChart: {
    ...fonts.bold24,
    fontSize: moderateScale(30),
  },
})
