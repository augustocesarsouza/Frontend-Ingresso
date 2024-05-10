import { render, screen } from '@testing-library/react';
import PopcornSelect from './PopcornSelect';

describe('PopcornSelect', () => {
  test('should render, two headers', () => {
    const whatClicked = 3;

    const listProducts = [];

    const fn = jest.fn();

    const user = {
      id: '248a7c5a-4ef2-4ebf-a298-21b35b3beb94',
      email: 'lucas@gmail.com',
      name: 'lucas',
    };

    render(
      <PopcornSelect
        user={user}
        whatClicked={whatClicked}
        checkoutMovie={null}
        listProducts={listProducts}
        setListProducts={fn}
      />
    );

    const h1 = screen.getByRole('heading', {
      name: 'Que tal uma pipoca, bebida ou doce para acompanhar o filme?',
    });

    expect(h1).toBeInTheDocument();

    const h2 = screen.getByRole('heading', {
      name: 'Compre aqui com mais rapidez e praticidade para aproveitar a sua sessão.',
    });

    expect(h2).toBeInTheDocument();

    expect.assertions(2);
  });
});
