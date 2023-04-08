import React from 'react';
import { LastDayPrice } from '../../types/last-day-price';

type PropsType = {
  stocks: LastDayPrice[];
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

function StocksList({ stocks, activePage, setActivePage }: PropsType): JSX.Element {
  return (
    <ol>
      {stocks.slice((activePage - 1) * 10, activePage * 10).map((stock) => {
        return (<li>{stock.key}</li>)
      })}
      <ol>{[1, 2, 3, 4, 5].map((page) => {
        return (<a href="#" onClick={() => setActivePage(page)}>{page}</a>)
      })}</ol>
    </ol>
  );
}

export default StocksList;

