import { render, screen } from '@testing-library/react';
import ShowClickCvv from './ShowClickCvv';

describe('ShowClickCvv', () => {
  test('should render, h1, span, img, svg', () => {
    const showClickCvv = true;
    const fn = jest.fn();

    const { container } = render(<ShowClickCvv showClickCvv={showClickCvv} handleClickCvvX={fn} />);

    const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });
    expect(h1).toBeInTheDocument();

    const span1 = screen.getByText(
      'O CVV é composto por 3 números localizados atrás, e logo após o número principal de seu cartão de crédito. Em cartões Amex, o CVV fica na parte da frente e pode ter 3 ou 4 números.'
    );
    expect(span1).toBeInTheDocument();

    const img1 = screen.getByAltText('img-card-info');
    expect(img1).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704723214/Card_axu5px.png'
    );

    const svgX = container.querySelector('.svg-x');
    expect(svgX).toBeInTheDocument();

    expect.assertions(4);
  });
});
