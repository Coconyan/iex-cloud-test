import {
  data,
} from './data';

const state = {
  cities: '',
};

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        cities: '',
      });
  });
});