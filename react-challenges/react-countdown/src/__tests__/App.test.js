import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {render, screen, fireEvent} from "@testing-library/react";
import App from "../App";

test('There should be a header with 00:00', () =>{
  render(<App/>);
  expect(screen.getByText(/00:00/i)).toBeInTheDocument()
})

test('After start clock should have minutes and seconds according to the inputs', () =>{
  render(<App/>);
  const inputMinutes = screen.getByRole('spinbutton', {name: /minutes/i})
  const inputSeconds = screen.getByRole('spinbutton', {name: /seconds/i})
  userEvent.type(inputMinutes, '1')
  userEvent.type(inputSeconds, '65')
  const clock = screen.getByRole('heading');
  expect(clock).toContainHTML('00:00');
  fireEvent.click(screen.getByRole('button',{name:/start/i}));
  expect(clock).toContainHTML('02:05');
})
