import { render, screen } from '@testing-library/react';
import CardCreditTopPart from './CardCreditTopPart';

describe('CardCreditTopPart', () => {
  test('should render svg check, and span', () => {
    const clickLabel = '1';
    const totalValuePrice = 21.76;
    const activeLabel = true;
    const mouseEnterLabel = '';
    const fn = jest.fn();

    const { container } = render(
      <CardCreditTopPart
        clickLabel={clickLabel}
        totalValuePrice={totalValuePrice}
        activeLabel={activeLabel}
        mouseEnterLabel={mouseEnterLabel}
        handleClickLabel={fn}
        handleMouseEnter={fn}
        handleMouseLeave={fn}
      />
    );

    const svgCheck = container.querySelector('.svg-check');
    expect(svgCheck).toBeInTheDocument();

    const svgCardCredit = container.querySelector('.credit-card');
    expect(svgCardCredit).toBeInTheDocument();

    const span1 = screen.getByText('C');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Cartão de');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Crédito');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(`R$ ${totalValuePrice}`);
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText(
      'Pague com Pagbank, usando o cupom PAGBANK10 e ganhe R$10,00 de desconto.'
    );
    expect(span5).toBeInTheDocument();

    expect.assertions(7);
  });
});
