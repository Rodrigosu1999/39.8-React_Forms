import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import NewBoxForm from '../components/NewBoxForm';

it('Renders App', () => {
  render(<NewBoxForm />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correct text', () => {
  const {getByText} = render(<NewBoxForm />);
  console.log(getByText('Add new box!'))
});
