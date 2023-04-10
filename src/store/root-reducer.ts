import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { data } from './data/data';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.data]: data.reducer,
  [NameSpace.user]: user.reducer,
});
