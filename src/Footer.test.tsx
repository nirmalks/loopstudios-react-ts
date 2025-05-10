import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import Footer from './Footer';

test('it shows logo and links', () => {
  render(<Footer year={2025} />);

  const navs = screen.getAllByRole('navigation');
  expect(navs.length).toEqual(3);

  const logos = screen.getAllByRole('img');
  expect(logos.length).toEqual(5);

  const desktopMenu = screen.getByTestId('desktop-footer-menu');

  const links = within(desktopMenu).getAllByRole('link');
  expect(links.length).toBe(4);
});
