import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test.each`
  nameInput         | role
  ${'how it works'} | ${'link'}
  ${'about'}        | ${'link'}
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
});
