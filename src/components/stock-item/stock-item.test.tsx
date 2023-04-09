import {
  render,
  screen
} from '@testing-library/react';
import StockItem from './stock-item';
import { mockStockItem, mockStockItemWithUnderZeroPercent } from '../../mocks/mock-stock-item';


describe('Component: stock-item', () => {
  it('should render correctly', () => {

    render(<StockItem stock={mockStockItem} index={1} />);

    expect(screen.getByText(mockStockItem.key)).toBeInTheDocument();
    expect(screen.getByText(mockStockItem.low)).toBeInTheDocument();
    expect(screen.getByText(mockStockItem.high)).toBeInTheDocument();
    expect(screen.getByText(mockStockItem.volume)).toBeInTheDocument();
  });

  it('should render correctly when changePercent is above zero', () => {

    render(<StockItem stock={mockStockItem} index={1} />);

    expect(screen.getByTestId("percent")).toHaveClass('green');
  });

  it('should render correctly when changePercent is above zero', () => {

    render(<StockItem stock={mockStockItemWithUnderZeroPercent} index={1} />);

    expect(screen.getByTestId("percent")).toHaveClass('red');
  });
});
