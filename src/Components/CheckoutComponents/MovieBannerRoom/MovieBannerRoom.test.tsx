import { render, screen } from '@testing-library/react';
import MovieBannerRoom from './MovieBannerRoom';

// export interface CheckoutMovie {
//   id: string;
//   imgUrl: string;
//   dateMovie: string;
//   locationMovie: string;
//   movie: string;
//   ranking: string;
//   room: string;
// }

describe('MovieBannerRoom', () => {
  const checkoutMovie = {
    id: '7811c3f3-6afc-4f7f-bffc-d173555594fd',
    imgUrl: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/xidddiywjelrda7jeh1c',
    dateMovie: 'sexta 05/01 18:30',
    locationMovie: 'Cine Araújo Campo Limpo',
    movie: 'Jogos Vorazes – A Cantiga Dos Pássaros E Das Serpentes',
    ranking: 'DUBLADO',
    room: 1,
  };

  test('should render svg img span', () => {
    const { container } = render(<MovieBannerRoom checkoutMovie={checkoutMovie} />);

    const movieBanner = screen.getByAltText(checkoutMovie.movie);
    expect(movieBanner).toHaveAttribute('src', checkoutMovie.imgUrl);

    const h2 = screen.getByRole('heading', { name: checkoutMovie.movie });
    expect(h2).toBeInTheDocument();

    const svgLocation = container.querySelector('.location-svg');
    expect(svgLocation).toBeInTheDocument();

    const spanLocation = screen.getByText(
      `${checkoutMovie.locationMovie} - Sala ${checkoutMovie.room}`
    );

    expect(spanLocation).toBeInTheDocument();

    const svgCalender = container.querySelector('.calendar-svg');
    expect(svgCalender).toBeInTheDocument();

    const spanCalender = screen.getByText(checkoutMovie.dateMovie);
    expect(spanCalender).toBeInTheDocument();

    const spanRanking = screen.getByText(checkoutMovie.ranking);
    expect(spanRanking).toBeInTheDocument();

    expect.assertions(7);
  });
});
