import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts =createAsyncThunk(
    "products/getProducts",
    async( ) =>{
        return await fetch('/api/products').then(
            (res)=>res.json()
        );


    }
);
const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        status:null
    },
    extraReducers:{
        [getProducts.pending]:(state)=>{
            state.status="loading"
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.status="success"
            state.products =action.payload

        },


        [getProducts.rejected]:(state)=>{
            state.status = "failed"
        }
    }


});
export default productsSlice.reducer

