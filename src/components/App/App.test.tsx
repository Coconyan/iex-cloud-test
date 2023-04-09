import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders iex cloud text', () => {
  render(<App />);
  const linkElement = screen.getByText(/iex cloud/i);
  expect(linkElement).toBeInTheDocument();
});
