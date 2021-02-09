import { createSlice } from '@reduxjs/toolkit';

export const tabs = [
  {
    id: "7c7c7ce5-1759-430c-9d43-7456a6d5b487",
    name: "Selections",
    route: '/',
    selected: true,
  },
  {
    id: "12609386-7a83-447b-8c6c-8cd890140ea0",
    route: '/genres',
    name: "Genres",
    selected: false,
  },
  {
    id: "c2e77d47-f52b-4983-a58a-3302b92b3b71",
    route: '/platforms',
    name: "Platforms",
    selected: false,
  },
  {
    id: "f143b500-4c46-42f2-a509-7a930cf60dc2",
    route: '/stores',
    name: "Stores",
    selected: false,
  },
  {
    id: "6faaf59f-569e-4b08-863d-e1e7b375b539",
    route: 'collections',
    name: "Collections",
    selected: false,
  },
  {
    id: "a28394b0-4e0a-43ca-a76d-f2ef26a71dc3",
    route: 'tags',
    name: "Tags",
    selected: false
  }
];

export const explorerTabSlice = createSlice({
  name: 'tab',
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

export const { select } = explorerTabSlice.actions;
export const explorerTabSelector = state => state.tabs;