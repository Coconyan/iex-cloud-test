import React, { useState } from 'react';
import Pagination from '../pagination/pagination';
import './stock-list.scss';
import StockItem from '../stock-item/stock-item';
import { useAppSelector } from '../../hooks';
import { getCompanies, getIsLoading } from '../../store/data/selectors';
import { PAGE_SIZE } from '../../const';
import StockListSkeletonLoader from '../stock-list-skeleton-loader/stock-list-skeleton-loader';

function StockList(): JSX.Element {
  const stocks = useAppSelector(getCompanies);
  const isLoading = useAppSelector(getIsLoading)
  const [activePage, setActivePage] = useState(1);

  if (isLoading) {
    return <StockListSkeletonLoader />
  }

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
