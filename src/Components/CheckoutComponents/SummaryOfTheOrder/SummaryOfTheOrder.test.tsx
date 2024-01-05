import { render, screen } from '@testing-library/react';
import SummaryOfTheOrder from './SummaryOfTheOrder';

// interface SummaryOfTheOrderProps {
//   paymentSelectSeats: paymentSelectSeatsProps[];
//   listFormPayment: listFormPayment[];
//   listProducts: listProductsProps[];
//   totalTickets: number;
// }

describe('SummaryOfTheOrder', () => {
  test('should render, span svgs', () => {
    const totalTickets = 10;

    const { container } = render(
      <SummaryOfTheOrder
        paymentSelectSeats={[]}
        listFormPayment={[]}
        listProducts={[]}
        totalTickets={totalTickets}
      />
    );

    const spanSummary = screen.getByText('RESUMO DO PEDIDO');
    expect(spanSummary).toBeInTheDocument();

    const spanTotalFee = screen.getByText('Total Taxa:');
    expect(spanTotalFee).toBeInTheDocument();

    const spanTotalFeePrice = screen.getByText('R$ 0,00');
    expect(spanTotalFeePrice).toBeInTheDocument();

    const svgDolar = container.querySelector('.svg-dolar');
    expect(svgDolar).toBeInTheDocument();

    const spanTotal = screen.getByText('Total:');
    expect(spanTotal).toBeInTheDocument();

    const span1 = screen.getByText(`R$ ${totalTickets}`);
    expect(span1).toBeInTheDocument();

    expect.assertions(6);
  });
});
