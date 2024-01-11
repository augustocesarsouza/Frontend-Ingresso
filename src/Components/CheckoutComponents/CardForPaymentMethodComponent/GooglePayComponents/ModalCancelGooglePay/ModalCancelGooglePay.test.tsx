import { render, screen } from '@testing-library/react';
import ModalCancelGooglePay from './ModalCancelGooglePay';

describe('ModalCancelGooglePay', () => {
  test('should render', () => {
    const cancelGooglePay = true;
    const fn = jest.fn();

    const { container } = render(
      <ModalCancelGooglePay cancelGooglePay={cancelGooglePay} handleExitChoosePayment={fn} />
    );

    const svgExit = container.querySelector('.svg-exit');
    expect(svgExit).toBeInTheDocument();

    const svgWarning = container.querySelector('.svg-warning');
    expect(svgWarning).toBeInTheDocument();

    const span1 = screen.getByText('Ops!');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Pagamento com Google Pay cancelado.');
    expect(span2).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'CONTINUAR' });
    expect(button).toBeInTheDocument();

    expect.assertions(5);
  });
});
