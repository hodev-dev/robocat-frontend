import { createSlice } from '@reduxjs/toolkit';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    loading: STATUS.LOADING,
    data: []
  },
  reducers: {
    setGenres: (state, action) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
    },
  }
});

export const { setGenres } = genresSlice.actions;

export const genresSelector = states => states.genres;