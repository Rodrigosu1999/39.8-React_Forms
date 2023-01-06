import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

it('Renders App', () => {
  render(<TodoList />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correct text', () => {
  const {getByText} = render(<TodoList />);
  console.log(getByText('Todo List'))
});

it('should add new item', () => {
  const {queryByText, getByLabelText} = render(<TodoList />);
  const input = getByLabelText('Task');
  const btn = queryByText('Add new Todo!')
  expect(queryByText('Test todo')).not.toBeInTheDocument();
  fireEvent.change(input, {target: {value: "Test todo"}});
  fireEvent.click(btn);
  expect(queryByText('Test todo')).toBeInTheDocument();
});

it('should delete item', () => {
  const {queryByText, getByLabelText} = render(<TodoList />);
  const btn = queryByText('X')
  expect(queryByText('Cut my hair')).toBeInTheDocument();
  fireEvent.click(btn);
  expect(queryByText('Cut my hair')).not.toBeInTheDocument();
});

