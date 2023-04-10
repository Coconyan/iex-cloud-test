import { store } from '../store/index.js';
import { LastDayPrice } from './last-day-price.js';

export type Data = {
  stocks: LastDayPrice[],
  isLoading: boolean,
};

export type User = {
  themeIsDark: boolean,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
