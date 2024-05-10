import { render, screen } from '@testing-library/react';
import PayPalTopPart from './PayPalTopPart';

describe('PayPalTopPart', () => {
  test('should render all, svg, img, span', () => {
    const clickLabel = '4';
    const totalValuePrice = 21.76;
    const activeLabel = true;
    const mouseEnterLabel = '';
    const fn = jest.fn();

    const { container } = render(
      <PayPalTopPart
        clickLabel={clickLabel}
        totalValuePrice={totalValuePrice}
        activeLabel={activeLabel}
        mouseEnterLabel={mouseEnterLabel}
        handleClickLabel={fn}
        handleMouseEnter={fn}
        handleMouseLeave={fn}
      />
    );

    const svgCheck = container.querySelector('.svg-check') as SVGElement;
    expect(svgCheck).toBeInTheDocument();

    const imgGpay = screen.getByAltText('pay-pal-img');
    expect(imgGpay).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704292650/PayPal-Logo_shc49l.png'
    );

    const span1 = screen.getByText(`R$ ${totalValuePrice}`);
    expect(span1).toBeInTheDocument();
  });
});
