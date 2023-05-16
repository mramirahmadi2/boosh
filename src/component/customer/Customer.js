
import { createSlice } from '@reduxjs/toolkit';

export const CustomerInformation= createSlice({
  name: 'Customer',
  initialState: {
    value: {},
  },
  reducers: {
    setCustomerInformation: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setCustomerInformation } = CustomerInformation.actions;

export default CustomerInformation.reducer;