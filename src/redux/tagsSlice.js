import { createSlice } from '@reduxjs/toolkit';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    loading: STATUS.LOADING,
    data: []
  },
  reducers: {
    setTags: (state, action) => {
      state.data = [...state.data, ...action.payload];
      state.loading = action.payload.loading;
    },
    unmountTags: (state) => {
      state.data = [],
        state.loading = true;
    }
  }
});

export const { setTags, unmountTags } = tagsSlice.actions;

export const tagsSelector = states => states.tags;