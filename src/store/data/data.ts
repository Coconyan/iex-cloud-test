import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Data } from '../../types/state';

const initialState: Data = {
  stocks: [],
  isLoading: false,
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadStocks: (state, action) => {
      state.stocks = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loadStocks, setLoading } = data.actions;
