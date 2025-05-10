import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import Creations from './Creations';

test('it shows 8 images and button', () => {
  render(<Creations />);

  const allImages = screen.getAllByRole('img');

  const visibleImages = allImages.filter(
    (img) => !img.className.includes('md:hidden')
  );

  expect(visibleImages.length).toBe(8);

  const button = screen.getAllByRole('button');
  const visibleBtn = button.filter(
    (btn) => !btn.className.includes('md:hidden')
  );
  expect(visibleBtn.length).toBe(1);
});
