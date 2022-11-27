import {createAsyncThunk} from '@reduxjs/toolkit';
export const getProduct = createAsyncThunk('product/getProduct', async () => {
  const response = await fetch('http://svcy3.myclass.vn/api/Product');
  const json = response.json();
  return json;
});

export const searchByCategory = createAsyncThunk(
  'product/getProductByCategory',
  async params => {
    const response = await fetch(
      `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${params}`,
    );
    const json = response.json();
    return json;
  },
);
