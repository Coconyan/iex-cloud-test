import { store } from '../store/index.js';
import { LastDayPrice } from './last-day-price.js';

export type CompanyNews = {
  datetime: number,
  hasPaywall: boolean,
  headline: string,
  image: string,
  lang: string,
  related: string,
  source: string,
  summary: string,
  url: string, //todo make normal type
};

export type Data = {
  companies: LastDayPrice[],
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
