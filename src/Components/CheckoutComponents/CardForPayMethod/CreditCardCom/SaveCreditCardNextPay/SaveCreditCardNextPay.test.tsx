import { render, screen } from '@testing-library/react';
import SaveCreditCardForNextPayment from './SaveCreditCardNextPay';

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
