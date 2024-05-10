import { render, screen } from '@testing-library/react';
import CardDebitTopPart from './CardDebitTopPart';

describe('CardDebitTopPart', () => {
  test('should render all span svg', () => {
    const clickLabel = '2';
    const totalValuePrice = 21.76;
    const activeLabel = true;
    const mouseEnterLabel = '';
    const fn = jest.fn();

    const { container } = render(
      <CardDebitTopPart
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

    const span1 = screen.getByText('D');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Cartão de');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Débito');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(`R$ ${totalValuePrice}`);
    expect(span4).toBeInTheDocument();

    expect.assertions(6);
  });
});
