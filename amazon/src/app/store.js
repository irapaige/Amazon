import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cartSlice';
import detailsReducer from'../features/products/detailsSlice';
const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        details:detailsReducer
    }
})
export default store;