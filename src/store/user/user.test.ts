import { mockStockItem } from '../../mocks/mock-stock-item';
import { setTheme, user } from './user';

const state = {
  themeIsDark: true,
};

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(user.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        themeIsDark: true,
      });
  });

  it('should update offers by load stock', () => {
    expect(user.reducer(state, setTheme(false)))
      .toEqual({
        themeIsDark: false,
      });
  });
});
