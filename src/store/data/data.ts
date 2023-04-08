import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Data } from '../../types/state';

const initialState: Data = {
  companies: [],
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadCompanies: (state, action) => {
      state.companies = action.payload;
    },
  },
});

export const { loadCompanies } = data.actions;
