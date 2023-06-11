
import { createSlice } from '@reduxjs/toolkit';

export const CustomerInformation= createSlice({
  name: 'Customer',
  initialState: {
    value: [],
  },
  reducers: {
    setCustomerInformation: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    clearCustomerInformation: (state) => {
      state.value = [];
    },
  },
});

export const { setCustomerInformation , clearCustomerInformation } = CustomerInformation.actions;

export default CustomerInformation.reducer;