import { createSlice } from '@reduxjs/toolkit';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

export const platformsSlice = createSlice({
  name: 'platforms',
  initialState: {
    loading: STATUS.LOADING,
    data: []
  },
  reducers: {
    setPlatforms: (state, action) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
    },
  }
});

export const { setPlatforms } = platformsSlice.actions;

export const platformSelector = states => states.platforms;