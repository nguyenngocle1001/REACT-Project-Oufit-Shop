import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../storeSlice/productSlice";
import miniCartReducer from "../storeSlice/miniCartSlice";

export default configureStore({
  reducer: {
    product: productReducer,
    miniCart: miniCartReducer,
  },
});
