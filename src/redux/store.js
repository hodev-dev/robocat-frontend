import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authSlice } from './authSlice';
import { counterSlice } from './counterSlice';
import { explorerTabSlice } from './explorerTabSlice';
import { gameTabs } from './gameTabSlice';
import { genresSlice } from './genresSlice';
import { platformsSlice } from './platformsSlice';
import { storesSlice } from './storesSlice';
import { tagsSlice } from './tagsSlice';


const reducers = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
  tabs: explorerTabSlice.reducer,
  genres: genresSlice.reducer,
  platforms: platformsSlice.reducer,
  stores: storesSlice.reducer,
  tags: tagsSlice.reducer,
  gameTabs: gameTabs.reducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', "genres", "platforms", "stores"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})
