import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

it('Renders App', () => {
  render(<App />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
