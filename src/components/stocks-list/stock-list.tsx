import React from 'react';
import { LastDayPrice } from '../../types/last-day-price';
import Pagination from '../pagination/pagination';
import './stock-list.scss';
import StockItem from '../stocks-item/stock-item';

type PropsType = {
  stocks: LastDayPrice[];
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

function StockList({ stocks, activePage, setActivePage }: PropsType): JSX.Element {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>KEY</th>
            <th>LOW</th>
            <th>HIGH</th>
            <th>VOLUME</th>
            <th>CHANGE PERCENT</th>
          </tr>
        </thead>
        <tbody>
          {stocks
            .slice((activePage - 1) * 10, activePage * 10)
            .map((stock) => <StockItem stock={stock}/>)
          }
        </tbody>
      </table>
      <Pagination
        onPageChange={setActivePage}
        currentPage={activePage}
        pageSize={10}
        totalCount={stocks.length}
        className='pagination'
      />
    </div>
  );
}

export default StockList;

