import {
  render,
  screen
} from '@testing-library/react';
import Header from './header';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { RoutePath } from '../app/router/route-config';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {
    themeIsDark: true,
  },
});


describe('Component: Header', () => {
  it('should render correctly', () => {

    render(
    <Provider store={store}>
      <Header />
    </Provider>);

    expect(screen.getByText(/Test iex cloud app/i)).toBeInTheDocument();
  });
});
