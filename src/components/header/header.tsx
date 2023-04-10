import React from 'react';
import cls from './header.module.scss';
import ThemeButton from '../theme-button/theme-button';

function Header() {
  return (
    <header className={cls.Header}>
      Test iex cloud app
      <ThemeButton />
    </header>
  );
}

export default Header;
