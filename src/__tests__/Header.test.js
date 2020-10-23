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

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  const { history } = setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test.each`
  link              | hash
  ${'About'}        | ${'#about'}
  ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" section where "$link" link is clicked', ({ link, hash }) => {
  const { history } = setup('/search/javascript');

  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(history.location.hash).toEqual(hash);
});

/* My Attempt: */
/*
function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test.each`
  nameInput         | role        | hash
  ${'how it works'} | ${'link'}   | ${'#how-it-works'}
  ${'about'}        | ${'link'}   | ${'#about'}
`('$nameInput points to a $role of $nameInput', ({ nameInput, role }) => {
  setup();

  const nameRegex = new RegExp(nameInput, 'i');
  const link = screen.getByRole(role, { name: nameRegex });
  userEvent.click(link);

  expect(
    screen.getByRole(role, { name: nameRegex }),
  ).toBeInTheDocument();
});

  test('"Logo" link points to the root route', () => {
    setup();
    const logo = screen.getByRole('link', { name: 'logo.svg' });
    userEvent.click(logo);

    expect(
      screen.getByRole('heading', { name: /Home Page Content/i }),
    ).toBeInTheDocument();
  });
}); */
