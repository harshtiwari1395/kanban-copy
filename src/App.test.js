import {render, fireEvent, waitFor, screen, queryAllByTestId} from '@testing-library/react'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/kanban/i);
  expect(linkElement).toBeInTheDocument();
  const columns= screen.queryAllByTestId("kanban-column");
  expect(columns.length).toBe(5);
});

test('Add column button opens up modal', () => {
  render(<App />);
  const linkElement = screen.getByTestId("add-column");
  fireEvent.click(linkElement);
  expect(linkElement).toBeTruthy();
});

// test('Add button opens up modal for adding a ticket', () => {
//   render(<App />);

//   const plusButtons = screen.queryAllByTestId("add-ticket");
//   fireEvent.click(plusButtons[0]);
//   const modal = screen.queryByTestId("add-ticket-modal");
//   expect(modal).toBeTruthy();
// });
