import { render, screen } from '@testing-library/react';
import InfoMovieLocalSeatsPriceDetails from './InfoMovieLocalSeatsPriceDetails';

// export interface cinemaMovieProps {
//   cinemaDTO: CinemaDTO;
//   screeningSchedule: string;
// }

// interface CinemaDTO {
//   district: string;
//   nameCinema: string;
//   ranking: string;
// }

describe('InfoMovieLocalSeatsPriceDetails', () => {
  const cinemaDTO = {
    district: 'Estrada de campo limpo, 459 | Santo Amaro',
    nameCinema: 'Cine Araújo Campo Limpo',
    ranking: 'DUBLADO',
  };

  const objCinemaMovie = {
    cinemaDTO,
    screeningSchedule: '17:00D, 19:15D, 21:30D',
  };

  test('should render paragraph, svgs', () => {
    const { container } = render(<InfoMovieLocalSeatsPriceDetails el={objCinemaMovie} />);
    const svgHeart = container.querySelector('.heart-svg');
    expect(svgHeart).toBeInTheDocument();

    const pNameCinema = screen.getByText(objCinemaMovie.cinemaDTO.nameCinema);
    expect(pNameCinema).toBeInTheDocument();

    const pDistrict = screen.getByText(objCinemaMovie.cinemaDTO.district);
    expect(pDistrict).toBeInTheDocument();

    const svgSeats = container.querySelector('.seats-svg');
    expect(svgSeats).toBeInTheDocument();

    const pSeats = screen.getByText('Assentos');
    expect(pSeats).toBeInTheDocument();

    const svgPrice = container.querySelector('.price-svg');
    expect(svgPrice).toBeInTheDocument();

    const pPrice = screen.getByText('Preços');
    expect(pPrice).toBeInTheDocument();

    const svgDetails = container.querySelector('.details-svg');
    expect(svgDetails).toBeInTheDocument();

    const pDetails = screen.getByText('Detalhes');
    expect(pDetails).toBeInTheDocument();

    expect.assertions(9);
  });
});
