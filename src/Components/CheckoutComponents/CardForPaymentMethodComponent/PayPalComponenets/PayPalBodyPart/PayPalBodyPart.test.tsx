import { render, screen } from '@testing-library/react';
import PayPalBodyPart from './PayPalBodyPart';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

describe('PayPalBodyPart', () => {
  test('should render, svg, img, span', () => {
    const clickLabel = '4';
    const activeLabel = true;
    const fn = jest.fn();

    const initialOptions = {
      clientId: 'ATviEbA6dGabvIqyTLOn9dwgl3YMhoaeQKuiq43BTyTBB7SVl6PU3zukI8660-fDU6AKV8gPHKbhwmQW',
      currency: 'USD',
      intent: 'capture',
    };

    const { container } = render(
      <PayPalScriptProvider options={initialOptions}>
        <PayPalBodyPart
          clickLabel={clickLabel}
          activeLabel={activeLabel}
          setEnterMouseInformed={fn}
        />
      </PayPalScriptProvider>
    );

    const img = screen.getByAltText('digital-wallet');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704814143/Captura_de_tela_2024-01-09_112811_j0vbat.png'
    );

    const svgExclamation = container.querySelector('.svg-exclamation');
    expect(svgExclamation).toBeInTheDocument();

    const span1 = screen.getByText(
      'A retirada de ingressos pelos terminais de para compras pagas com PayPal. Verifique as formas de retirada disponíveis no final da compra.'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Clique no botão PayPal para pagar:');
    expect(span2).toBeInTheDocument();

    expect.assertions(4);
  });
});
