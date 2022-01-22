import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getDetails =createAsyncThunk(
"details/getDetails",
    async( ) =>{
return await fetch(`/api/products/`).then(
            (res)=>res.json()
        );


    }
    );
 const detailsSlice = createSlice({
    name:"details",
    initialState:{
        details:[],
        status:null
    },
    extraReducers:{
        [getDetails.pending]:(state)=>{
            state.status="loading"
        },
        [getDetails.fulfilled]:(state,action)=>{
            state.status="success"
            state.details =action.payload

        },
       
       
        [getDetails.rejected]:(state)=>{
            state.status = "failed"
        }
    }


});
export default detailsSlice.reducer 

