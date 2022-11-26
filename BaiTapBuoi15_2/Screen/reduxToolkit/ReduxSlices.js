import {createSlice} from '@reduxjs/toolkit';
import {getProduct} from './ReduxThunk';

const initialState = {
  product: [],
};
const ReduxSlices = createSlice({
  name: 'reduxSlice',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getProduct.pending, (state, action) => {})
      .addCase(getProduct.fulfilled, (state, action) => {
        console.log(state);
        console.log(action);
      });
  },
});

export default ReduxSlices.extraReducers;
