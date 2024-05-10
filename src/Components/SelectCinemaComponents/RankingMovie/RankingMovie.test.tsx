import { render, screen } from '@testing-library/react';
import RankingMovie from './RankingMovie';

describe('RankingMovie', () => {
  let fn = jest.fn();

  test('should render, paragraph, ranking Movie', () => {
    render(<RankingMovie setRankingMovieList={fn} />);

    const pDublado = screen.getByText('DUBLADO');
    expect(pDublado).toBeInTheDocument();

    const pNormal = screen.getByText('NORMAL');
    expect(pNormal).toBeInTheDocument();

    const pLegendado = screen.getByText('LEGENDADO');
    expect(pLegendado).toBeInTheDocument();

    const pVip = screen.getByText('VIP');
    expect(pVip).toBeInTheDocument();

    const pImax = screen.getByText('IMAX');
    expect(pImax).toBeInTheDocument();

    expect.assertions(5);
  });
});
