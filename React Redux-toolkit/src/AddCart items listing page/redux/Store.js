import { configureStore } from "@reduxjs/toolkit";

import cartreducer from "./slice";
import productsreducer from "./Productslice";

const store = configureStore({
  reducer: {
    cart: cartreducer,
    products: productsreducer,
  },
});

export default store;
