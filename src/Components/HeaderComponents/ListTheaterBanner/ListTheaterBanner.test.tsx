import { render, screen } from '@testing-library/react';
import ListTheaterBanner from './ListTheaterBanner';

interface FirstElementTheatre {
  imgUrl: string;
  splitLocation: string;
  joinString: string;
  title: string;
}

interface ArrayTheatreNewProps {
  id: string;
  splitLocation: string;
  joinStringData: string;
  title: string;
  imgUrl: string;
}

describe('ListTheaterBanner', () => {
  const objFirstTheatre: FirstElementTheatre = {
    imgUrl: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/ascascascascasc',
    joinString: 'ESTREIA 20/12/23',
    splitLocation: 'Teatro Santo Agostinho',
    title: 'CHICO XAVIER em pessoa !',
  };

  const objTheatre1 = {
    id: 'd3bfb68b-dfe8-4036-a180-efe19950d01f',
    imgUrl: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/qt9t9ccwwa5zfzkt6mce',
    splitLocation: 'Teatro UOL',
    joinStringData: 'ESTREIA 09/12/23',
    title: 'Diogo Portugal - Não M...',
  };

  const objTheatre2 = {
    id: '760e6261-4d43-44f2-bc21-17a782990c83',
    imgUrl: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/h8m1u2flmrsphiq7hwlz',
    splitLocation: 'Teatro UOL',
    joinStringData: 'ESTREIA 16/11/23',
    title: 'Série B',
  };

  const listTheatre: ArrayTheatreNewProps[] = [objTheatre1, objTheatre2];

  // test('should render', () => {
  //   render(
  //     <ListTheaterBanner arrayTheatreNew={listTheatre} firstElementTheatre={objFirstTheatre} />
  //   );
  // });

  test('should render svg left and svg right', () => {
    const { container } = render(
      <ListTheaterBanner arrayTheatreNew={listTheatre} firstElementTheatre={objFirstTheatre} />
    );

    const divLeft = container.querySelector('.div-arrow-left');
    const svgLeft = divLeft.firstChild as SVGElement;
    expect(svgLeft).toBeInTheDocument();

    const divRight = container.querySelector('.div-arrow-right');
    const svgRight = divRight.firstChild as SVGElement;
    expect(svgRight).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render array list theatre first obj array[0]', () => {
    render(
      <ListTheaterBanner arrayTheatreNew={listTheatre} firstElementTheatre={objFirstTheatre} />
    );

    const img1MainTheater = screen.getByAltText(objFirstTheatre.title);
    expect(img1MainTheater).toHaveAttribute('src', objFirstTheatre.imgUrl);

    const span1MainTheater = screen.getByText(objFirstTheatre.joinString);
    expect(span1MainTheater).toBeInTheDocument();

    const h2MainTheater = screen.getByRole('heading', { name: objFirstTheatre.title });
    expect(h2MainTheater).toBeInTheDocument();

    const span2MainTheater = screen.getByText(objFirstTheatre.splitLocation);
    expect(span2MainTheater).toBeInTheDocument();

    const img1Array = screen.getByAltText(listTheatre[0].title);
    expect(img1Array).toHaveAttribute('src', listTheatre[0].imgUrl);

    const span1Array = screen.getByText(listTheatre[0].joinStringData);
    expect(span1Array).toBeInTheDocument();

    const h2Array = screen.getByRole('heading', { name: listTheatre[0].title });
    expect(h2Array).toBeInTheDocument();

    expect.assertions(7);
  });

  test('should render array list theatre second obj array[1]', () => {
    render(
      <ListTheaterBanner arrayTheatreNew={listTheatre} firstElementTheatre={objFirstTheatre} />
    );

    const img1Array = screen.getByAltText(listTheatre[1].title);
    expect(img1Array).toHaveAttribute('src', listTheatre[1].imgUrl);

    const span1Array = screen.getByText(listTheatre[1].joinStringData);
    expect(span1Array).toBeInTheDocument();

    const h2Array = screen.getByRole('heading', { name: listTheatre[1].title });
    expect(h2Array).toBeInTheDocument();

    expect.assertions(3);
  });
});
