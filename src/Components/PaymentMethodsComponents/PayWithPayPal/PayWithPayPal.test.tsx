import { render, screen } from '@testing-library/react';
import PayWithPayPal from './PayWithPayPal';

describe('PayWithPayPal', () => {
  test('should render, svg, img', () => {
    const { container } = render(<PayWithPayPal />);

    const svgPaypal = container.querySelector('.svg-paypal');

    const img = screen.getByAltText('img-paypal');
    expect(img).toHaveAttribute(
      'src',
      'https://ingresso-a.akamaihd.net/checkout/img/pagamento/paypal-info-checkout.svg'
    );
    expect(svgPaypal).toBeInTheDocument();
    expect.assertions(2);
  });
});
