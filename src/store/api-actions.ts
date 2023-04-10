import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import {
  AppDispatch,
  State
} from '../types/state';
import {
  loadStocks,
  setLoading
} from './data/data';

export const fetchStocks = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchStocks',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setLoading(true))
      const {data} = await api.get<any>(APIRoute.StockMarketPrevious);
      dispatch(loadStocks(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);
