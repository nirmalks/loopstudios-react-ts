import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with header, hero, creations, and footer', () => {
  render(<App />);

  const logo = screen.getAllByRole('img', { name: /logo/i });
  expect(logo.length).toEqual(2);

  expect(screen.getByText(/The leader in interactive VR/i)).toBeInTheDocument();
});
