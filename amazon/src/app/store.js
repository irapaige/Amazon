import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductsSlice';
import cartReducer from '../features/products/cartSlice'
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
  },
});
export default store;
