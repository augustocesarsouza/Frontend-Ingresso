import { render, screen } from '@testing-library/react';
import ListMovieBanner from './ListMovieBanner';
import { MemoryRouter } from 'react-router-dom';

interface MoviesBanner {
  id: string;
  title: string;
  imgUrl: string;
  movieRating: number;
}

describe('ListMovieBanner', () => {
  const moviesBanner: MoviesBanner[] = [];

  const movie1 = {
    id: '30d59d7e-654e-49af-ab6f-ff9fa3052c0c',
    title: 'Trolls 3 – Juntos Novamente',
    imgUrl: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/rxccj9ouzgtngizkr0s5',
    movieRating: 10,
  };

  const movie2 = {
    id: 'd927be5c-a223-476c-816d-1fab7d28b5aa',
    title: 'Jogos Vorazes – A Cantiga Dos Pássaros E Das Serpentes',
    imgUrl: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/xidddiywjelrda7jeh1c',
    movieRating: 14,
  };

  moviesBanner.push(movie1, movie2);

  test('should render svg left and svg right', () => {
    const { container } = render(
      <MemoryRouter>
        <ListMovieBanner moviesBanner={[]} />
      </MemoryRouter>
    );

    const divLeft = container.querySelector('.div-arrow-left');
    const svgLeft = divLeft.firstChild as SVGElement;
    expect(svgLeft).toBeInTheDocument();

    const divRight = container.querySelector('.div-arrow-right');
    const svgRight = divRight.firstChild as SVGElement;
    expect(svgRight).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render array list movies', () => {
    const { debug } = render(
      <MemoryRouter>
        <ListMovieBanner moviesBanner={moviesBanner} />
      </MemoryRouter>
    );

    const img1 = screen.getByAltText(moviesBanner[0].title);
    expect(img1).toHaveAttribute('src', moviesBanner[0].imgUrl);

    const p1 = screen.getByText(moviesBanner[0].movieRating.toString());
    expect(p1).toBeInTheDocument();

    const img2 = screen.getByAltText(moviesBanner[1].title);
    expect(img2).toHaveAttribute('src', moviesBanner[1].imgUrl);

    const p2 = screen.getByText(moviesBanner[1].movieRating.toString());
    expect(p2).toBeInTheDocument();

    const p1TitleMovie = screen.getByText(moviesBanner[0].title);
    expect(p1TitleMovie).toBeInTheDocument();

    expect.assertions(5);

    debug();
  });
});
