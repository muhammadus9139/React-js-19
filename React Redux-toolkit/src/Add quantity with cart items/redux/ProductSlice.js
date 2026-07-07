import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchproducts = createAsyncThunk(
  "products",
  async () => {

    const resp = await fetch(
      "https://dummyjson.com/products"
    );

    const jsonresp = await resp.json();

    return jsonresp.products;
  }
);



const initialState = {
  items: [],
  status: undefined,
  error: null,
};



const productSlice = createSlice({

  name: "productsSlice",

  initialState,

  extraReducers: (builder) => {


    builder.addCase(
      fetchproducts.pending,
      (state) => {

        state.status = "loading";

      }
    );



    builder.addCase(
      fetchproducts.fulfilled,
      (state, action) => {

        state.status = "succeeded";

        state.items = action.payload;

      }
    );



    builder.addCase(
      fetchproducts.rejected,
      (state, action) => {

        state.status = "failed";

        state.error = action.error.message;

      }
    );


  },

});


export default productSlice.reducer;
