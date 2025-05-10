import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import Header from './Header';

test('it shows title and nav links', () => {
  render(<Header />);

  const logo = screen.getByRole('img');
  expect(logo).toBeInTheDocument();

  const navs = screen.getAllByRole('navigation');
  expect(navs.length).toBeGreaterThan(0);

  const headingText = screen.getByText(/Impressive Experiences That Deliver/i);
  expect(headingText).toBeInTheDocument();

  const desktopMenu = screen.getByTestId('desktop-menu');
  const links = within(desktopMenu).getAllByRole('link');
  expect(links.length).toBe(4);
});
