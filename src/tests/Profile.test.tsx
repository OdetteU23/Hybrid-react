import {render, screen} from '@testing-library/react';
import {test, expect} from 'vitest';
import {MemoryRouter} from 'react-router';
import Profile from '../views/Profile';

test('renders correct content for the headline', () => {

  // render the Profile component in jsdom (simulated browser)
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  // find the element with the text 'Profile View!'
  const element = screen.getByText(
    'Profile View!',
  );

  // check that the element is found (not undefined)
  expect(element).toBeDefined();
});
