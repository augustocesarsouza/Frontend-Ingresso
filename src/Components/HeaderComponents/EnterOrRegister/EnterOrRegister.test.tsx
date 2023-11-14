import { render, screen } from '@testing-library/react';
import EnterOrRegister from './EnterOrRegister';
import { MemoryRouter } from 'react-router-dom';

describe('EnterOrRegister', () => {
  test('Should render svg triangle', () => {
    const { container } = render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    const svgEl = container.querySelector("[data-icon='caret-up']") as SVGAElement;
    expect(svgEl).toBeInTheDocument();
  });

  test('Should render H2 Left-Side', () => {
    render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    const headingLeft = screen.getByRole('heading', { name: /Ainda não é cliente Ingresso.com?/i });
    expect(headingLeft).toBeInTheDocument();
  });

  test('Should render H2 Right-Side', () => {
    render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    const headingRight = screen.getByRole('heading', { name: 'Cliente Ingresso.com?' });
    expect(headingRight).toBeInTheDocument();
  });

  test('Should render p', () => {
    render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    const paragraph = screen.getByText(
      'Compre ingressos e combos de pipoca para ir ao cinema com segurança e mais comodidade!'
    );
    expect(paragraph).toBeInTheDocument();
  });

  test('Should render button', () => {
    render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'CRIAR UMA NOVA CONTA' });
    expect(button).toBeInTheDocument();
  });

  test('Should render Tag "a"', () => {
    render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    const linkA = screen.getByText('Entrar na minha Conta');
    expect(linkA).toBeInTheDocument();
  });

  test('should matchSnapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <EnterOrRegister enterOrRegister={true} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
