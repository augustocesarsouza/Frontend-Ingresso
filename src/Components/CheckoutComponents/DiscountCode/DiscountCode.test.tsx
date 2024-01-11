import { render, screen } from '@testing-library/react';
import DiscountCode from './DiscountCode';

describe('DiscountCode', () => {
  test('should render, svgs, span', () => {
    const { container } = render(<DiscountCode />);

    const svgCodeDiscount = container.querySelector('.code-discount-svg');
    expect(svgCodeDiscount).toBeInTheDocument();

    const span1 = screen.getByText('CÓDIGO DE DESCONTO');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(
      'Novidade! Caso deseje, agora você pode solicitar o cancelamento das compras neste cinema diretamente em "Meus Pedidos". Essa facilidade está disponível apenas para clientes cadastrados.'
    );
    expect(span2).toBeInTheDocument();

    const svgMinus1 = container.querySelector('.svg-minus-1');
    expect(svgMinus1).toBeInTheDocument();

    const svgMinus2 = container.querySelector('.svg-minus-2');
    expect(svgMinus2).toBeInTheDocument();

    const svgCircleInfo = container.querySelector('.svg-circle-info');
    expect(svgCircleInfo).toBeInTheDocument();

    expect.assertions(6);
  });
});
