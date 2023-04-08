import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://cloud.iexapis.com/stable';
const TIMEOUT = 5000;
const tokenOS = process.env.IEX_TOKEN;
const TOKEN = 'pk_4237d65a0e204f1ba59a79d0fa24a1e2';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    params: {'token': tokenOS || TOKEN},
  });

  return api;
};
