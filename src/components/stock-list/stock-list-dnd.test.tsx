import {
  render,
  screen
} from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: {
    stocks: [],
  },
});

describe('Component: stock-list', () => {
  it('should render stock-list correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
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
          </table>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/№/i)).toBeInTheDocument();
    expect(screen.getByText(/KEY/i)).toBeInTheDocument();
    expect(screen.getByText(/LOW/i)).toBeInTheDocument();
    expect(screen.getByText(/HIGH/i)).toBeInTheDocument();
    expect(screen.getByText(/VOLUME/i)).toBeInTheDocument();
    expect(screen.getByText(/CHANGE PERCENT/i)).toBeInTheDocument();
  });
});

