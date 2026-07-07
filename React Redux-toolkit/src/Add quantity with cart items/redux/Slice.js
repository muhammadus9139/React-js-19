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
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity = (existing.quantity ?? 1) + 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const cartdata = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = cartdata;
      localStorage.setItem("cart", JSON.stringify(cartdata));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const qty = Math.max(1, Number(quantity));

      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        existing.quantity = qty;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearallItem: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearallItem,
} = addtocart.actions;

export default addtocart.reducer;
