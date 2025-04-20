import { PayloadAction, createSlice } from '@reduxjs/toolkit'

let initialState = {
  test: 12,
}

const homeSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    // saveRole: (state, action) => {
    //   return { ...state, ...action.payload }
    // },
    // removeRole: state => {
    //   return initialState
    // },
  },
})

// export const { saveRole, removeRole } = homeSlice.actions
export default homeSlice.reducer
