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

test('navigates to home page when icon is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /sign\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});
