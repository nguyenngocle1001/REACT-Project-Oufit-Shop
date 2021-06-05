const { createSlice } = require("@reduxjs/toolkit");

const miniCartSlice = createSlice({
  name: "miniCart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      let isAdd = true;
      const newProduct = action.payload;

      state.forEach((product) => {
        if (product.id === newProduct.id) {
          isAdd = false;
          product.quantity += newProduct.quantity;
          return;
        }
      });

      if (isAdd) state.push(newProduct);
    },

    removeProduct: (state, action) => {
      const newCart = state.filter((product) => product.id != action.payload);
      return newCart;
    },
  },
});
export const { addProduct, removeProduct } = miniCartSlice.actions;
export default miniCartSlice.reducer;
