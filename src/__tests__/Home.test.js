import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app/App';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

test('navigates to "/search/javascript" when button clicked', () => {
  const { history } = setup();
  const button = screen.getByRole('button', { name: /Show me the best time/i });
  userEvent.click(button);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test('navigates to "/search/javascript" when image clicked', () => {
  const { history } = setup();

  const image = screen.getByRole('img', { name: /example table of reddit results/i });
  userEvent.click(image);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});
