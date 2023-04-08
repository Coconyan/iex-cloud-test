import React from 'react';
import { LastDayPrice } from '../../types/last-day-price';
import './stock-item.scss';

type PropsType = {
  stock: LastDayPrice;
}

function StockItem({ stock }: PropsType): JSX.Element {
  return (
    <tr>
      <td>{stock.key}</td>
      <td>{stock.low}</td>
      <td>{stock.high}</td>
      <td>{stock.volume}</td>
      <td className={stock.changePercent > 0 ? 'green' : 'red'}>{`${stock.changePercent} %`}</td>
    </tr>
  );
}

export default StockItem;

