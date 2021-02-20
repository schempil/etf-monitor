import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Container Element', () => {
  render(<App />);
  const appContainer = screen.getByTestId("App Container");
  expect(appContainer).toBeInTheDocument();
});
