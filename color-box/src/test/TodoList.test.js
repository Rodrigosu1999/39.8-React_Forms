import React from 'react';
import { fireEvent, queryAllByText, queryByAttribute, render, screen } from '@testing-library/react';
import BoxList from '../components/BoxList';

it('Renders App', () => {
  render(<BoxList />);
});

it('Passes Snapshot', () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correct text', () => {
  const {getByText} = render(<BoxList />);
  console.log(getByText('BoxList'))
});

it('should add new box', () => {
  const {queryByText, getByLabelText, queryAllByText} = render(<BoxList />);
  const colorInput = getByLabelText('Color');
  const heightInput = getByLabelText('Height');
  const widthInput = getByLabelText('Width');
  const btn = queryByText('Add new box!')
  let deleteBtns = queryAllByText('X')

  expect(deleteBtns.length).toEqual(1);

  fireEvent.change(colorInput, {target: {value: "#00FF00"}});
  fireEvent.change(heightInput, {target: {value: 100}});
  fireEvent.change(widthInput, {target: {value: 100}});
  fireEvent.click(btn);
  deleteBtns = queryAllByText('X')

  expect(deleteBtns.length).toEqual(2);
});

it('should delete item', () => {
  const {queryByText, queryAllByText} = render(<BoxList />);
  const btn = queryByText('X')
  let deleteBtns = queryAllByText('X')
  expect(deleteBtns.length).toEqual(1);

  fireEvent.click(btn);
  deleteBtns = queryAllByText('X')

  expect(deleteBtns.length).toEqual(0);
});

