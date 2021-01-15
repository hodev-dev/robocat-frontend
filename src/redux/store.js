import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { counterSlice } from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})
