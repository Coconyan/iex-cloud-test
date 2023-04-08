import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Data } from '../../types/state';

const initialState: Data = {
  stocks: [],
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadStocks: (state, action) => {
      state.stocks = action.payload;
    },
  },
});

export const { loadStocks } = data.actions;
