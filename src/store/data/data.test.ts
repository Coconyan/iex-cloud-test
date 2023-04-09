import { mockStockItem } from '../../mocks/mock-stock-item';
import {
  data, loadStocks,
} from './data';

const state = {
  stocks: [],
};

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        stocks: [],
      });
  });

  it('should update offers by load stock', () => {
    expect(data.reducer(state, loadStocks([mockStockItem, mockStockItem])))
      .toEqual({
        stocks: [mockStockItem, mockStockItem],
      });
  });
});
