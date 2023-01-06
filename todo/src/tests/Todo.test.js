import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import Todo from '../components/Todo';

it('Renders App', () => {
  render(<Todo />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correct text', () => {
  const {getByText} = render(<Todo />);
  console.log(getByText('X'))
});