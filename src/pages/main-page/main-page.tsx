import React from 'react';
import StockList from '../../components/stock-list/stock-list';
import StockListDnd from '../../components/stock-list/stock-list-dnd';

function MainPage() {
  return (
    <>
      {/* <StockList /> */}
      <StockListDnd />
    </>
  );
}

export default MainPage;
