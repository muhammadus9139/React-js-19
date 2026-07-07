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
       }
    }
})

export const {addItem}=addtocart.actions;
export default addtocart.reducer;
