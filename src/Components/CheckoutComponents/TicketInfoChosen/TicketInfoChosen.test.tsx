import { render, screen } from '@testing-library/react';
import TicketInfoChosen from './TicketInfoChosen';

// interface TicketInfoChosenProps {
//   paymentSelectSeats: paymentSelectSeatsProps[];
//   listFormPayment: listFormPayment[];
// }

describe('TicketInfoChosen', () => {
  test('should render, all', () => {
    const paymentSelectSeats = [];
    const obj1 = {
      amountSeats: 1,
      paymentName: 'Inteira',
    };

    const obj2 = {
      amountSeats: 2,
      paymentName: 'Meia Bradesco',
    };

    paymentSelectSeats.push(obj1, obj2);

    const listFormPayment = [];

    const objFormPayment1 = {
      formName: 'Voucher Eletrônico',
      price: '0,00',
      priceNumber: 0,
    };

    const objFormPayment2 = {
      formName: 'Meia Vivo Valoriza',
      price: '21,76',
      priceNumber: 21.76,
    };

    const objFormPayment3 = {
      formName: 'Inteira',
      price: '38,76',
      priceNumber: 38.76,
    };

    const objFormPayment4 = {
      formName: 'Meia Bradesco',
      price: '21,76',
      priceNumber: 21.76,
    };

    const objFormPayment5 = {
      formName: 'Meia',
      price: '21,76',
      priceNumber: 21.76,
    };

    listFormPayment.push(
      objFormPayment1,
      objFormPayment2,
      objFormPayment3,
      objFormPayment4,
      objFormPayment5
    );

    render(
      <TicketInfoChosen paymentSelectSeats={paymentSelectSeats} listFormPayment={listFormPayment} />
    );

    const span1 = screen.getByText('INGRESSOS');
    expect(span1).toBeInTheDocument();

    paymentSelectSeats.forEach((pay) => {
      listFormPayment.forEach((pri) => {
        if (pri.formName === pay.paymentName) {
          const span2 = screen.getByText(`${pay.amountSeats}x`);
          expect(span2).toBeInTheDocument();

          const span3 = screen.getByText(`${pay.paymentName}`);
          expect(span3).toBeInTheDocument();

          const span4 = screen.getByText(
            `${`Ingresso R$ ${(pri.priceNumber - 5.56).toFixed(2)} + Taxa R$ 5,56`}`
          );
          expect(span4).toBeInTheDocument();

          const span5 = screen.getByText(`R$ ${pay.amountSeats * pri.priceNumber}`);
          expect(span5).toBeInTheDocument();
        }
      });
    });

    expect.assertions(9);
  });
});
