import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Hero from './Hero';

test('it shows main heading', () => {
  render(<Hero />);

  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();

  const headingText = screen.getByText(/The leader in interactive VR/i);
  expect(headingText).toBeInTheDocument();
});
