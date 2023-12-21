import { render, screen } from '@testing-library/react';
import SessionsAndAboutTheFilm from './SessionsAndAboutTheFilm';

describe('SessionsAndAboutTheFilm', () => {
  test('should render paragraph sessions and aboutTheMovie', () => {
    render(<SessionsAndAboutTheFilm />);

    const pSessions = screen.getByText('Sessões');
    expect(pSessions).toBeInTheDocument();

    const pAboutTheMovie = screen.getByText('Sobre o filme');
    expect(pAboutTheMovie).toBeInTheDocument();

    expect.assertions(2);
  });
});
