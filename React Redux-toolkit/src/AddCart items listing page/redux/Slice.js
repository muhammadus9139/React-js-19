import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addtocart = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const cartdata = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = cartdata;

      localStorage.setItem("cart", JSON.stringify(cartdata));
    },

    clearallItem: (state) => {
      state.items = [];

      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const { addItem, removeItem, clearallItem } = addtocart.actions;

export default addtocart.reducer;
