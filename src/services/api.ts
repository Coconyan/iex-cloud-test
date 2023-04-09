import axios, { AxiosInstance } from 'axios';
import { Config } from '../config';

const BASE_URL = 'https://cloud.iexapis.com/stable';
const TIMEOUT = 5000;
const TOKEN = 'PUT_YOUR_TOKEN_HERE'; 
const envToken = Config.iexApiKey;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    params: {'token': envToken || TOKEN},
  });

  return api;
};
