import { enhance } from '@src/common'
import React, { memo, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView as RNSafeArea,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Block } from '../Block/Block'
import Error from '../Error/Error'
import Loading from '../Loading'
import LoadingProgress from '../LoadingProgress'
import { ScreenWrapperProps } from './ScreenWrapper.props'
import Header from '../Header/Header'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  outer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  insetBottom: {
    bottom: 0,
  },
  insetLeft: {
    left: 0,
  },
  insetRight: {
    right: 0,
  },
  inner: {
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
  },
})
const isIos = Platform.OS === 'ios'

function ScreenWithoutScrolling(props: ScreenWrapperProps) {
  const inset = useSafeAreaInsets()
  const style = props.style || {}
  const {
    statusColor = undefined,
    bottomInsetColor = '#ffffff',
    forceInset,
    unsafe = true,
    children,
    backgroundColor,
    leftInsetColor = '#ffffff',
    rightInsetColor = '#ffffff',
  } = props

  const backgroundStyle = useMemo(
    () => (backgroundColor ? { backgroundColor } : {}),
    [backgroundColor]
  )

  const Wrapper = unsafe ? Block : SafeAreaView

  return (
    <KeyboardAvoidingView
      style={[styles.outer]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={0}
    >
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('top'))) &&
        isIos && (
          <Block
            color={statusColor}
            position={'absolute'}
            height={inset.top}
            width={'100%'}
          />
        )}
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('left'))) &&
        isIos && (
          <Block
            color={leftInsetColor}
            position={'absolute'}
            style={[styles.insetLeft]}
            width={inset.left}
            height={'100%'}
          />
        )}
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('right'))) &&
        isIos && (
          <Block
            color={rightInsetColor}
            position={'absolute'}
            style={[styles.insetRight]}
            width={inset.right}
            height={'100%'}
          />
        )}
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('bottom'))) &&
        isIos && (
          <Block
            color={bottomInsetColor}
            style={[styles.insetBottom]}
            position={'absolute'}
            height={inset.bottom}
            width={'100%'}
          />
        )}
      <Wrapper
        edges={forceInset ?? undefined}
        style={[styles.inner, style, backgroundStyle]}
      >
        {children}
      </Wrapper>
    </KeyboardAvoidingView>
  )
}

function ScreenWithScrolling(props: ScreenWrapperProps) {
  const inset = useSafeAreaInsets()
  const {
    showHorizontal = false,
    showVertical = false,
    statusColor = undefined,
    bottomInsetColor = '#ffffff',
    backgroundColor,
    style = {},
    forceInset = ['left'],
    unsafe = false,
    children,
    leftInsetColor = '#ffffff',
    rightInsetColor = '#ffffff',
  } = props

  const backgroundStyle = useMemo(
    () => (backgroundColor ? { backgroundColor } : {}),
    [backgroundColor]
  )

  const actualStyle = useMemo(() => enhance([style]), [style])

  const Wrapper = unsafe ? Block : SafeAreaView
  return (
    <KeyboardAvoidingView
      style={[styles.root]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={0}
    >
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('top'))) &&
        isIos && (
          <Block
            color={statusColor}
            position={'absolute'}
            height={inset.top}
            width={'100%'}
          />
        )}
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('left'))) &&
        isIos && (
          <Block
            color={leftInsetColor}
            position={'absolute'}
            style={[styles.insetLeft]}
            width={inset.left}
            height={'100%'}
          />
        )}
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('right'))) &&
        isIos && (
          <Block
            color={rightInsetColor}
            position={'absolute'}
            style={[styles.insetRight]}
            width={inset.right}
            height={'100%'}
          />
        )}
      {!unsafe &&
        (!forceInset || (forceInset && forceInset.includes('bottom'))) &&
        isIos && (
          <Block
            color={bottomInsetColor}
            style={[styles.insetBottom]}
            position={'absolute'}
            height={inset.bottom}
            width={'100%'}
          />
        )}
      <Wrapper edges={forceInset ?? undefined} style={[styles.inner]} block>
        <Block block>
          <ScrollView
            showsVerticalScrollIndicator={showVertical}
            showsHorizontalScrollIndicator={showHorizontal}
            keyboardShouldPersistTaps="handled"
            style={[styles.outer, backgroundStyle]}
            contentContainerStyle={actualStyle}
          >
            {children}
          </ScrollView>
        </Block>
      </Wrapper>
    </KeyboardAvoidingView>
  )
}

function ScreenWrapperComponent(props: ScreenWrapperProps) {
  const {
    scroll = false,
    titleHeader = '',
    rightComponent,
    borderBottomHeader = '#E7E7E7',
    leftComponent,
    back = false,
    onBack,
    color,
    header,
    dialogLoading,
    backgroundHeader,
    unsafe,
    backgroundColor = 'white',
  } = props
  const renderBody = () => {
    const { isLoading, isError, reload } = props
    if (isLoading) return <Loading />
    if (isError)
      return (
        <Error
          reload={() => {
            if (reload) reload()
          }}
        />
      )
    return (
      <>
        {scroll ? (
          <ScreenWithScrolling {...props} />
        ) : (
          <ScreenWithoutScrolling {...props} />
        )}
      </>
    )
  }
  return (
    <Block
      style={[styles.root, { backgroundColor }]}
      color={props.backgroundColor}
    >
      {!!header && header}
      {(!!titleHeader || !!leftComponent) && (
        <Header
          titleHeader={titleHeader}
          back={back}
          onBack={onBack}
          color={color}
          rightComponent={rightComponent}
          borderBottomHeader={borderBottomHeader}
          // leftComponent={leftComponent}
          backgroundHeader={backgroundHeader}
        />
        // <></>
      )}
      {!unsafe ? (
        <RNSafeArea style={{ flex: 1 }}>{renderBody()}</RNSafeArea>
      ) : (
        renderBody()
      )}
      {dialogLoading && <LoadingProgress />}
    </Block>
  )
}

const ScreenWrapper = memo(ScreenWrapperComponent, isEqual)
export default ScreenWrapper
