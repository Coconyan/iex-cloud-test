import React, { useEffect, useState } from 'react';
import './styles/index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCompanies } from '../../store/api-actions';
import { getCompanies } from '../../store/data/selectors';
import StockList from '../stocks-list/stock-list';
// import { Link } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const stocks = useAppSelector(getCompanies);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(fetchCompanies());
    console.log('dispatch');
  },[]);

  // console.log(stocks)

  return (
    <div className="App dark">
      <header className="App-header">
        Test iex cloud app
      </header>
      <StockList 
        stocks={stocks}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <footer className="App-footer">
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  );
}

export default App;
