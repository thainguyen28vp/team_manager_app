import {
  StackActions,
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native'

let _navigator: NavigationContainerRef<any>

// Thiết lập tham chiếu đến navigator
function setTopLevelNavigator(navigatorRef: NavigationContainerRef<any>) {
  _navigator = navigatorRef
}

// Điều hướng đến màn hình
function navigate(name: string, params?: object) {
  if (_navigator) {
    _navigator.dispatch(CommonActions.navigate(name, params))
  }
}

// Thay thế màn hình hiện tại
function replace(name: string, params?: object) {
  if (_navigator) {
    _navigator.dispatch(StackActions.replace(name, params))
  }
}

// Thêm màn hình mới vào ngăn xếp
function push(name: string, params?: object) {
  if (_navigator) {
    _navigator.dispatch(StackActions.push(name, params))
  }
}

// Quay lại màn hình trước
function goBack() {
  if (_navigator) {
    _navigator.dispatch(CommonActions.goBack())
  }
}

// Quay lại một số màn hình nhất định
function pop(count: number = 1) {
  if (_navigator) {
    _navigator.dispatch(StackActions.pop(count))
  }
}

// Đưa người dùng trở về màn hình đầu tiên và quay lại
function dismiss() {
  if (_navigator) {
    _navigator.dispatch(StackActions.popToTop())
    goBack()
  }
}

// Reset
function reset(name: string) {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name }],
      })
    )
  }
}

function popToTop() {
  if (_navigator) {
    _navigator.dispatch(StackActions.popToTop())
  }
}

export default {
  dismiss,
  navigate,
  setTopLevelNavigator,
  goBack,
  push,
  replace,
  pop,
  reset,
  popToTop,
}
