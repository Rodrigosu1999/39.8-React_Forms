import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import Box from '../components/Box';

it('Renders App', () => {
  render(<Box />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correct text', () => {
  const {getByText} = render(<Box />);
  console.log(getByText('X'))
});