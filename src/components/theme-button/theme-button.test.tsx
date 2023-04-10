import {
  render,
  screen
} from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import ThemeButton from './theme-button';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {
    themeIsDark: true,
  },
});


describe('Component: ThemeButton', () => {
  it('should render correctly', () => {

    render(
    <Provider store={store}>
      <ThemeButton />
    </Provider>);

    expect(screen.getByText(/dark theme/i)).toBeInTheDocument();
  });
});
