import { createSlice } from '@reduxjs/toolkit';

export const tabs = [
  {
    id: "7c7c7ce5-1759-430c-9d43-7456a6d5b487",
    name: "Posts",
    route: '/game',
    selected: true,
  },
  {
    id: "12609386-7a83-447b-8c6c-8cd890140ea0",
    route: '/detail',
    name: "Details",
    selected: false,
  },
  {
    id: "c2e77d47-f52b-4983-a58a-3302b92b3b71",
    route: '/screenshot',
    name: "Screenshots",
    selected: false,
  },
];

export const gameTabs = createSlice({
  name: 'gameTabs',
  initialState: tabs,
  reducers: {
    select: (states, action) => {
      states.map((state) => {
        if (state.id === action.payload) {
          state.selected = true;
        } else {
          state.selected = false;
        }
      });
    },
  }
});

export const findIdByName = (states, name) => {
  return states.find((state) => state.name === name);
}

export const { select } = gameTabs.actions;
export const gameTabSelector = state => state.gameTabs;