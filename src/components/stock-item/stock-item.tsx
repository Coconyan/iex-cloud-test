import React from 'react';
import { LastDayPrice } from '../../types/last-day-price';
import cls from './stock-item.module.scss';

type PropsType = {
  index: number,
  stock: LastDayPrice,
}

function StockItem({ index, stock }: PropsType): JSX.Element {
  return (
    <tr>
      <td>{index}</td>
      <td>{stock.symbol}</td>
      <td>{stock.low}</td>
      <td>{stock.high}</td>
      <td>{stock.volume}</td>
      <td data-testid="percent" className={stock.changePercent > 0 ? cls.green : cls.red}>{`${stock.changePercent} %`}</td>
    </tr>
  );
}

export default StockItem;

