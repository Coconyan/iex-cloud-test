import {
  render,
  screen
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Routes
} from 'react-router-dom';
import { RoutePath } from './router/route-config';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: {
    stocks: [],
  },
});

const fakeApp = (
  <Provider store={store}>
    <Routes>
      <Route
        path={RoutePath.main}
        element={<h1>Mock Main Page</h1>}
      />
      <Route
        path={RoutePath.not_found}
        element={<NotFoundPage />}
      />
    </Routes>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    render(
        <BrowserRouter>
          {fakeApp}
        </BrowserRouter>,
      );

    expect(screen.getByText(/Mock Main Page/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const badRoute = '/non-existent-route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        {fakeApp}
      </MemoryRouter>,
    );

    expect(screen.getByText('404 Not found page')).toBeInTheDocument();
    expect(screen.getByText('go to Main')).toBeInTheDocument();
  });
});
