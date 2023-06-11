import { createSlice } from '@reduxjs/toolkit';

export const price = createSlice({
  name: 'totalPrice',
  initialState: {
    value: 0,
  },
  reducers: {
    setTotalPrice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTotalPrice } = price.actions;

export default price.reducer;
