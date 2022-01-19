import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {productListReducer} from './reducers/productReducers'
import  thunk from 'redux-thunk';
const composeEnhancers = composeWithDevTools({

});

const initialState ={};
const reducer = combineReducers({productList:productListReducer,});




const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk),

));
export default store;
