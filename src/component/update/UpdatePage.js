

import { createSlice } from '@reduxjs/toolkit';

export const UpdatePage = createSlice({
  name: 'update',
  initialState: {
    value: false,
  },
  reducers: {
    setUpdate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUpdate } = UpdatePage.actions;

export default UpdatePage.reducer;
