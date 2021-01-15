import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { isLogedIn: false, user: null },
  reducers: {
    login: (state, authResponse) => {
      state.isLogedIn = authResponse.payload.data.isLogedIn;
      state.user = authResponse.payload.data.user;
    }
  }
});

export const { login } = authSlice.actions;

// selectors

export const authSelector = state => state.auth;