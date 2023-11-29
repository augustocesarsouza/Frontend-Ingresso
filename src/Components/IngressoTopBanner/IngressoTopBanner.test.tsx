import { render } from '@testing-library/react';
import IngressoTopBanner from './IngressoTopBanner';
import { MemoryRouter } from 'react-router-dom';

describe('IngressoTopBanner', () => {
  test('should', () => {
    render(
      <MemoryRouter>
        <IngressoTopBanner />
      </MemoryRouter>
    );
  });
});
