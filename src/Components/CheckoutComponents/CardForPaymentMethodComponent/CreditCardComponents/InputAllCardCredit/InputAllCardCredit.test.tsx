import { render, screen } from '@testing-library/react';
import InputAllCardCredit from './InputAllCardCredit';

describe('InputAllCardCredit', () => {
  test('should render, span input all', () => {
    const divClickNumberCard = '1';
    const fn = jest.fn();
    render(
      <InputAllCardCredit
        divClickNumberCard={divClickNumberCard}
        setDivClickNumberCard={fn}
        setEnterOrLeaveInput={fn}
      />
    );

    const span1 = screen.getByText('Número do cartão');
    expect(span1).toBeInTheDocument();

    const inputNumberCard = screen.getByPlaceholderText(/1234 5678 9012 3456/i);
    expect(inputNumberCard).toBeInTheDocument();

    const span2 = screen.getByText('Data de validade');
    expect(span2).toBeInTheDocument();

    const inputExpireDateYear = screen.getByPlaceholderText('MM/AA');
    expect(inputExpireDateYear).toBeInTheDocument();

    const span3 = screen.getByText('CVC / CVV');
    expect(span3).toBeInTheDocument();

    const inputCvcAndCvv = screen.getByPlaceholderText('123');
    expect(inputCvcAndCvv).toBeInTheDocument();

    const span4 = screen.getByText('Nome do cartão');
    expect(span4).toBeInTheDocument();

    const inputNameCard = screen.getByPlaceholderText('Nome como está no cartão');
    expect(inputNameCard).toBeInTheDocument();

    expect.assertions(8);
  });
});
