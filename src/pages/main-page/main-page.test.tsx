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

describe('Page: Main Page', () => {
  it('should render Main Page correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <h1>Mock Main Page</h1>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Mock Main Page/i)).toBeInTheDocument();
  });
});

