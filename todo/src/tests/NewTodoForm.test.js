import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import NewTodoForm from '../components/NewTodoForm';

it('Renders App', () => {
  render(<NewTodoForm />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correct text', () => {
  const {getByText} = render(<NewTodoForm />);
  console.log(getByText('Add new Todo!'))
});
