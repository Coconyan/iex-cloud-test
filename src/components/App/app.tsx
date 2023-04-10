import React from 'react';
import './styles/index.scss';
import AppRouter from './router/app-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useAppSelector } from '../../hooks';
import { getThemeIsDark } from '../../store/user/selectors';

function App() {
  const themeIsDark = useAppSelector(getThemeIsDark);

  return (
    <div className={`App ${themeIsDark && 'dark'}`}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
