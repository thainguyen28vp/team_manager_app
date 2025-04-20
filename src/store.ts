import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './screens/rootReducer'
import Reactotron from '../ReactotronConfig'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const createEnhancers = getDefaultEnhancers => {
  if (__DEV__) {
    return getDefaultEnhancers().concat(Reactotron.createEnhancer())
  } else {
    return getDefaultEnhancers()
  }
}

const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  enhancers: createEnhancers,
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector.withTypes<RootState>()
export default store
