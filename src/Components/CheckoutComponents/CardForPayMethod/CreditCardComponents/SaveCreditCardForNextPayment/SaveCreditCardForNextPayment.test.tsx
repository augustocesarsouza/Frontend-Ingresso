import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import SaveCreditCardForNextPayment from './SaveCreditCardForNextPayment';
=======
import SaveCreditCardForNextPayment from './SaveCreditCardNextPay';
>>>>>>> 28fa0e61d598a7cf22eaae7554d50f9f3eb9644a

describe('SaveCreditCardForNextPayment', () => {
  test('should render, svgCheck, span', () => {
    const { debug, container } = render(<SaveCreditCardForNextPayment />);

    const svgCheck = container.querySelector('.svg-check');
    expect(svgCheck).toBeInTheDocument();

    const span1 = screen.getByText('Salvar para meu próximo pagamento');
    expect(span1).toBeInTheDocument();

    expect.assertions(2);

    debug();
  });
});