import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { loadCompanies } from './data/data';

export const fetchCompanies = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      // const {data} = await api.get<any>(APIRoute.Appl);
      const {data} = await api.get<any>('/stock/market/previous/');
      dispatch(loadCompanies(data));
    } catch (error) {
      console.log(error);
    }
  },
);
