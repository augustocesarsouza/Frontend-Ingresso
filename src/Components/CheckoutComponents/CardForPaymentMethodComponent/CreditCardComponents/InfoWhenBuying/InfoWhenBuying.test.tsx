import { render, screen } from '@testing-library/react';
import InfoWhenBuying from './InfoWhenBuying';

describe('InfoWhenBuying', () => {
  test('should render, span', () => {
    render(<InfoWhenBuying />);

    const span1 = screen.getByText(
      'Ao comprar esse ingresso, concordo que a e de que devo apresentar o se for retirar os ingressos no local.'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('compra não pode ser feita com um cartão virtual');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('cartão físico utilizado na compra');
    expect(span3).toBeInTheDocument();

    expect.assertions(3);
  });
});
