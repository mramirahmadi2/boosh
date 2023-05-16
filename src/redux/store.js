import counterReducer from '../component/counter/conterSlice';
import priceReducer from '../component/price/totalPriceSlice';
import headerReducer from '../component/checkHeader/headerSlice';
import { configureStore } from '@reduxjs/toolkit';
import customerReduser from "../component/customer/Customer"
import updatePage from '../component/update/UpdatePage';
export default configureStore({
  reducer: {
    counter: counterReducer,
    price: priceReducer,
    checkHeader: headerReducer,
    customerInformation : customerReduser,
    updatePage: updatePage,
  },
});
