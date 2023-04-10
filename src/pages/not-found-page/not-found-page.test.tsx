import {
  render,
  screen
} from '@testing-library/react';


describe('Page: NotFoundPage', () => {
  it('should render NotFoundPage properly', () => {

    render(<h1>Mock 404 Not found page</h1>);

    expect(screen.getByText('Mock 404 Not found page')).toBeInTheDocument();
  });
});
