
import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    value: false,
  },
  reducers: {
    headerAdmin: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { headerAdmin } = headerSlice.actions



export default headerSlice.reducer
