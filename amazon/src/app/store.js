import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductsSlice';
import detailsReducer from '../features/products/detailsSlice'
import {cartReducer} from '../Components/cartReducers'
const store = configureStore({
  reducer: {
    products: productsReducer,
    details:detailsReducer,
    cart:cartReducer
  },
});
export default store;
