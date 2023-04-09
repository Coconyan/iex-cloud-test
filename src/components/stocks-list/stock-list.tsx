import React, { useEffect, useState } from 'react';
import Pagination from '../pagination/pagination';
import './stock-list.scss';
import StockItem from '../stocks-item/stock-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCompanies } from '../../store/api-actions';
import { getCompanies } from '../../store/data/selectors';
import { PAGE_SIZE } from '../../const';

function StockList(): JSX.Element {
  const dispatch = useAppDispatch();
  const stocks = useAppSelector(getCompanies);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(fetchCompanies());
    console.log('dispatch');
  },[]);

  return (
    <div className="content-wrapper">
      <table className='table'>
        <thead>
          <tr>
            <th>№</th>
            <th>KEY</th>
            <th>LOW</th>
            <th>HIGH</th>
            <th>VOLUME</th>
            <th>CHANGE PERCENT</th>
          </tr>
        </thead>
        <tbody>
          {stocks
            .slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE)
            .map((stock, id) => <StockItem index={((activePage - 1) * PAGE_SIZE) + id + 1} stock={stock}/>)
          }
        </tbody>
      </table>
      <Pagination
        onPageChange={setActivePage}
        currentPage={activePage}
        pageSize={PAGE_SIZE}
        totalCount={stocks.length}
        className='pagination'
      />
    </div>
  );
}

export default StockList;
