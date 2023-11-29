import { render, screen } from '@testing-library/react';
import CardCreditAndDebit from './CardCreditAndDebit';

describe('CardCreditAndDebit', () => {
  test('should render headers', () => {
    render(<CardCreditAndDebit />);

    const h1 = screen.getByRole('heading', {
      name: 'Você pode pagar com os seus cartões de crédito ou via Paypal',
    });

    const h2Credit = screen.getByRole('heading', {
      name: 'Crédito',
    });

    const h2Debit = screen.getByRole('heading', {
      name: 'Débito',
    });

    const h2DigitalWallets = screen.getByRole('heading', {
      name: 'Carteiras Digitais',
    });

    expect(h1).toBeInTheDocument();
    expect(h2Credit).toBeInTheDocument();
    expect(h2Debit).toBeInTheDocument();
    expect(h2DigitalWallets).toBeInTheDocument();

    expect.assertions(4);
  });

  test('should render svgs and imgs', () => {
    const { container } = render(<CardCreditAndDebit />);
    const svgVisa = container.querySelector('.svg-visa');
    const svgMasterCard = container.querySelector('.svg-master-card');
    const svgAura = container.querySelector('.svg-aura');
    const svgAmericanExpress = container.querySelector('.svg-american-express');
    const svgElo = container.querySelector('.svg-elo');
    const svgHipercard = container.querySelector('.svg-hiper-card');
    const svgC9 = container.querySelector('.svg-c6');

    const svgNuBank = container.querySelector('.svg-nuback');
    const svgItau = container.querySelector('.svg-itau');
    const svgBradesco = container.querySelector('.svg-bradesco');

    const imgNext = screen.getByAltText('next-img');
    const imgBancoDoBrasil = screen.getByAltText('caixa-img');

    const svgSantander = container.querySelector('.svg-santander');
    const svgInter = container.querySelector('.svg-inter');
    const svgCaixaBanco = container.querySelector('.svg-caixa-banco');

    expect(imgNext).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701095538/Next_tndvlu.png'
    );
    expect(imgBancoDoBrasil).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1701096213/caixa_apn9go.png'
    );

    expect(svgVisa).toBeInTheDocument();
    expect(svgMasterCard).toBeInTheDocument();
    expect(svgAura).toBeInTheDocument();
    expect(svgAmericanExpress).toBeInTheDocument();
    expect(svgElo).toBeInTheDocument();
    expect(svgHipercard).toBeInTheDocument();
    expect(svgC9).toBeInTheDocument();
    expect(svgNuBank).toBeInTheDocument();
    expect(svgItau).toBeInTheDocument();
    expect(svgBradesco).toBeInTheDocument();
    expect(svgSantander).toBeInTheDocument();
    expect(svgInter).toBeInTheDocument();
    expect(svgCaixaBanco).toBeInTheDocument();

    expect.assertions(15);
  });
});
