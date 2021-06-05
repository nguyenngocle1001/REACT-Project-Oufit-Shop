const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: [],
    searchActive: null,
  },
  reducers: {
    search: (state, action) => {
      const searchTerm = action.payload;
      const index = state.searchTerm.findIndex(
        (searchItem) => searchItem === searchTerm
      );

      if (index !== -1) {
        state.searchActive = index;
      } else state.searchTerm.push(searchTerm);
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
