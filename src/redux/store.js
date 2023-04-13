import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../component/counter/conterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});