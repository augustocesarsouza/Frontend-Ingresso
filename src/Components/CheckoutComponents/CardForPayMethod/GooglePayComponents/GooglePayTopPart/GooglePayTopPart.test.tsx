import { render, screen } from '@testing-library/react';
import GooglePayTopPart from './GooglePayTopPart';

describe('GooglePayTopPart', () => {
  test('should render, svgCheck, imgPay, span', () => {
    const clickLabel = '3';
    const totalValuePrice = 21.76;
    const activeLabel = true;
    const mouseEnterLabel = '';
    const fn = jest.fn();

    const { container } = render(
      <GooglePayTopPart
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

    const imgGpay = screen.getByAltText('img-g-pay');
    expect(imgGpay).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704291411/Pay_vzg6as.png'
    );

    const span1 = screen.getByText(`R$ ${totalValuePrice}`);
    expect(span1).toBeInTheDocument();

    expect.assertions(3);
  });
});
