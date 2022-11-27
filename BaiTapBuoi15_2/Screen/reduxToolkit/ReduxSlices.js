import {createSlice} from '@reduxjs/toolkit';
import {getProduct, searchByCategory} from './ReduxThunk';
const initialState = {
  product: [],
  searchList: [],
};
const ReduxSlices = createSlice({
  name: 'reduxSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getProduct.pending, (state, action) => {})
      .addCase(getProduct.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.product = [...action.payload.content];
        }
      })
      .addCase(searchByCategory.pending, (state, action) => {})
      .addCase(searchByCategory.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.searchList = [...action.payload.content];
        } else {
          state.searchList = [];
        }
      });
  },
});

export default ReduxSlices.reducer;
