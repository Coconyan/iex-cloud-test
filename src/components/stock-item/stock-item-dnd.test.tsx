import {
  render,
  screen
} from '@testing-library/react';
import {
  mockStockItem,
  mockStockItemWithUnderZeroPercent
} from '../../mocks/mock-stock-item';
import StockItemDnd from './stock-item-dnd';
import {
  DragDropContext,
  Draggable,
  Droppable
} from 'react-beautiful-dnd';

jest.mock('react-beautiful-dnd', () => ({
  Droppable: ({ children }: any) => children({
    droppableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
  Draggable: ({ children }: any) => children({
    draggableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
  DragDropContext: ({ children }: any) => children,
}));


describe('Component: stock-item-dnd', () => {
  it('should render correctly', () => {
    render(
      <DragDropContext onDragEnd={() => { }}>
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key={mockStockItem.key} draggableId={mockStockItem.key} index={1}>
                {(provided) => (
                  <StockItemDnd stock={mockStockItem} index={1} provided={provided} />
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>);

    expect(screen.getByText(mockStockItem.key)).toBeInTheDocument();
    expect(screen.getByText(mockStockItem.low)).toBeInTheDocument();
    expect(screen.getByText(mockStockItem.high)).toBeInTheDocument();
    expect(screen.getByText(mockStockItem.volume)).toBeInTheDocument();
  });

  it('should render correctly when changePercent is above zero', () => {
    render(
      <DragDropContext onDragEnd={() => { }}>
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key={mockStockItem.key} draggableId={mockStockItem.key} index={1}>
                {(provided) => (
                  <StockItemDnd stock={mockStockItem} index={1} provided={provided} />
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>);

    expect(screen.getByTestId("percent")).toHaveClass('green');
  });

  it('should render correctly when changePercent is above zero', () => {
    render(
      <DragDropContext onDragEnd={() => { }}>
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key={mockStockItemWithUnderZeroPercent.key} draggableId={mockStockItemWithUnderZeroPercent.key} index={1}>
                {(provided) => (
                  <StockItemDnd stock={mockStockItemWithUnderZeroPercent} index={1} provided={provided} />
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>);

    expect(screen.getByTestId("percent")).toHaveClass('red');
  });
});
