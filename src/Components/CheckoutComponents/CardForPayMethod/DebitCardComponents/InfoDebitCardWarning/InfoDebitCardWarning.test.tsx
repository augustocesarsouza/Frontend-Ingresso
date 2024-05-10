import { render, screen } from '@testing-library/react';
import InfoDebitCardWarning from './InfoDebitCardWarning';

describe('InfoDebitCardWarning', () => {
  test('should render, all span', () => {
    render(<InfoDebitCardWarning />);

    const span1 = screen.getByText(
      'Alguns bancos requerem um cartão de .Verifique se o seu é um deles.'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Débito virtual');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText(
      'Fique atento: dos bancos listados . Caso o seu não seja aceito, escolha outra forma de pagamento!'
    );
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('Só aceitamos os cartões');
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText('abaixo');
    expect(span5).toBeInTheDocument();

    const span6 = screen.getByText('Cartões aceitos para');
    expect(span6).toBeInTheDocument();

    const span7 = screen.getByText('o pagamento em :');
    expect(span7).toBeInTheDocument();

    const span8 = screen.getByText('Em breve outros bancos!');
    expect(span8).toBeInTheDocument();

    expect.assertions(8);
  });

  test('should render, all svg', () => {
    const { container } = render(<InfoDebitCardWarning />);

    const svg1 = container.querySelector('.svg-c6');
    expect(svg1).toBeInTheDocument();

    const svg2 = container.querySelector('.svg-nuback');
    expect(svg2).toBeInTheDocument();

    const svg3 = container.querySelector('.svg-itau');
    expect(svg3).toBeInTheDocument();

    const svg4 = container.querySelector('.svg-bradesco');
    expect(svg4).toBeInTheDocument();

    const imgNext = screen.getByAltText('next-img');
    expect(imgNext).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701095538/Next_tndvlu.png'
    );

    const svg5 = container.querySelector('.svg-santander');
    expect(svg5).toBeInTheDocument();

    const imgCaixa = screen.getByAltText('caixa-img');
    expect(imgCaixa).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701096213/caixa_apn9go.png'
    );

    const svg6 = container.querySelector('.svg-inter');
    expect(svg6).toBeInTheDocument();

    const svg7 = container.querySelector('.svg-caixa-banco');
    expect(svg7).toBeInTheDocument();

    expect.assertions(9);
  });
});
