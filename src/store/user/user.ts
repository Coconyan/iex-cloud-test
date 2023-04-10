import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { User } from '../../types/state';

const initialState: User = {
  themeIsDark: true,
};

export const user = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.themeIsDark = action.payload;
    },
  },
});

export const { setTheme } = user.actions;
