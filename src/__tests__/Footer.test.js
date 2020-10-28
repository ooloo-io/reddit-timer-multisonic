import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app/App';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );
};

test('navigates to home page when icon is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo-small\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/No reactions to your reddit posts/i)).toBeInTheDocument();
});

test('navigates to "ooloo.io/employers" when "ooloo.io" link is clicked', () => {
  setup();

  const employersLink = screen.getByRole('link', { name: /ooloo.io/i });
  expect(employersLink).toHaveAttribute('href', 'https://ooloo.io/employers');
});

test('navigates to terms page when "Terms & Privacy" is clicked', () => {
  setup();

  const termsLink = screen.getByRole('link', { name: /Terms & Privacy/i });
  userEvent.click(termsLink);

  expect(screen.getByText(/Terms Placeholder/i)).toBeInTheDocument();
});
