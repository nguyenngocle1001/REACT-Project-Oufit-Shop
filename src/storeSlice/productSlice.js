import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import productApi from "../api/productApi";

//get data
export const getAllProduct = createAsyncThunk(
  "product/getProduct",
  async (params, thunkAPI) => {
    try {
      const response = await productApi.getAll(params);
      console.log({ response });

      return response;
    } catch (error) {
      console.log("Failed to fetch product list at: ", error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    totalRow: 0,
  },
  reducers: {},
  extraReducers: {
    [getAllProduct.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
      state.totalRow = action.payload.totalRow;
    },
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
