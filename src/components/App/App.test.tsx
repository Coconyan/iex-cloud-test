import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders iex cloud text', () => {
  render(<App />);
  const linkElement = screen.getByText(/iex cloud/i);
  expect(linkElement).toBeInTheDocument();
});
