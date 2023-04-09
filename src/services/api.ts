import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://cloud.iexapis.com/stable';
const TIMEOUT = 5000;
const tokenOS = process.env.IEX_TOKEN;
const TOKEN = 'PUT_YOUR_TOKEN_HERE'; 
// PUT_YOUR_TOKEN_HERE

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    params: {'token': tokenOS || TOKEN},
  });

  return api;
};
