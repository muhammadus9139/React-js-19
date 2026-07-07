import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

const addtocart=createSlice({
    name:'cart',
    initialState,
    reducers:{
       addItem:(state)=>{
            state.value += 1;
       },
       removeItem:(state)=>{
            state.value>0? state.value -= 1: null;
       },
       clearallItem:(state)=>{
            state.value = 0;
       }
    }
})

export const {addItem,removeItem,clearallItem}=addtocart.actions;
export default addtocart.reducer;
