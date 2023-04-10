import
  React,
  {
    useEffect,
    useState
  } from 'react';
import './stock-list.scss';
import { useAppSelector } from '../../hooks';
import {
  getCompanies,
  getIsLoading
} from '../../store/data/selectors';
import { PAGE_SIZE } from '../../const';
import StockListSkeletonLoader from '../stock-list-skeleton-loader/stock-list-skeleton-loader';
import {
  Draggable,
  DragDropContext
} from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../strict-mode-droppable/strict-mode-droppable';
import Pagination from '../pagination/pagination';
import StockItemDnd from '../stock-item/stock-item-dnd';
import {
  LastDayPrice,
  LastDayPriceWithIdx
} from '../../types/last-day-price';


function StockListDnd(): JSX.Element {
  const stocks = useAppSelector(getCompanies);
  const isLoading = useAppSelector(getIsLoading)
  const [activePage, setActivePage] = useState(1);
  const stocksSlice = addIndexToStock(stocks.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE));
  const [stocksState, setStocksState] = useState(stocksSlice);

  function addIndexToStock (array:LastDayPrice[]): LastDayPriceWithIdx[] {
    return array.map((item, index:number) => {
      const newItem = JSON.parse(JSON.stringify(item))
      newItem.idx = ((activePage - 1) * PAGE_SIZE) + index + 1;
      return newItem;
    })
  }

  useEffect(() => {
    setStocksState(stocksSlice);
  }, [activePage, stocks])

  if (isLoading) {
    return <StockListSkeletonLoader />
  }

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(stocksState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStocksState(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <StrictModeDroppable droppableId="characters">
        {(provided) => (
          <div className="content-wrapper" {...provided.droppableProps} ref={provided.innerRef}>
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
                {stocksState.map((stock, index) => {
                  return (
                    <Draggable key={stock.key} draggableId={stock.key} index={index}>
                      {(provided) => (
                        <StockItemDnd stock={stock} index={stock.idx} provided={provided}/>
                      )}
                    </Draggable>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              onPageChange={setActivePage}
              currentPage={activePage}
              pageSize={PAGE_SIZE}
              totalCount={stocks.length}
              className='pagination'
            />
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}

export default StockListDnd;
