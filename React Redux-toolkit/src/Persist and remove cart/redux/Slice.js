import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    clearallItem: (state) => {
      state.items = [];

      localStorage.setItem(
        "cart",
        JSON.stringify([])
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  clearallItem,
} = cartSlice.actions;

export default cartSlice.reducer;
