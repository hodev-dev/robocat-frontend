import { createSlice } from '@reduxjs/toolkit';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

export const storesSlice = createSlice({
  name: 'stores',
  initialState: {
    loading: STATUS.LOADING,
    data: []
  },
  reducers: {
    setStores: (state, action) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
    },
  }
});

export const { setStores } = storesSlice.actions;

export const storeSelector = states => states.stores;