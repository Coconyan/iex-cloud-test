import React from 'react';
import cls from './theme-button.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getThemeIsDark } from '../../store/user/selectors';
import { setTheme } from '../../store/user/user';

function ThemeButton() {
  const themeIsDark = useAppSelector(getThemeIsDark);
  const dispatch = useAppDispatch();

  const themeChangeHandle = () => {
    dispatch(setTheme(!themeIsDark))
  }

  return (
      <button
        className={cls.themeButton}
        onClick={themeChangeHandle}
      >
        {themeIsDark ? 'dark ' : 'ligth '} theme
      </button>
  );
}

export default ThemeButton;
