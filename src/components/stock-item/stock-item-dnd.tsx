import React from 'react';
import { LastDayPrice } from '../../types/last-day-price';
import cls from './stock-item.module.scss';
import { DraggableProvided } from 'react-beautiful-dnd';

type PropsType = {
  index: number,
  stock: LastDayPrice,
  provided: DraggableProvided,
}

function StockItemDnd({ index, stock, provided }: PropsType): JSX.Element {
  return (
    <tr
      className='test-flex'
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <td>{index}</td>
      <td>{stock.symbol}</td>
      <td>{stock.low}</td>
      <td>{stock.high}</td>
      <td>{stock.volume}</td>
      <td data-testid="percent" className={stock.changePercent > 0 ? cls.green : cls.red}>{`${stock.changePercent} %`}</td>
    </tr>
  );
}

export default StockItemDnd;

