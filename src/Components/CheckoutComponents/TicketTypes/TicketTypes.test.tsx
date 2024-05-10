import { render, screen } from '@testing-library/react';
import TicketTypes from './TicketTypes';

interface paymentValueProps {
  isSelect: number;
  namePayment: string;
  nameSeat: string;
}

describe('TicketTypes', () => {
  test('should render all seats, name method payment, price', () => {
    const whatClicked = 2;

    const obj1 = {
      formName: 'Voucher Eletrônico',
      price: '0,00',
      priceNumber: 0,
    };

    const obj2 = {
      formName: 'Meia Vivo Valoriza',
      price: '21,76',
      priceNumber: 21.76,
    };

    const obj3 = {
      formName: 'Inteira',
      price: '38,76',
      priceNumber: 38.76,
    };

    const obj4 = {
      formName: 'Meia Bradesco',
      price: '23,76',
      priceNumber: 21.76,
    };

    const obj5 = {
      formName: 'Meia',
      price: '27,76',
      priceNumber: 21.76,
    };

    const listFormPayment = [obj1, obj2, obj3, obj4, obj5];

    const obj1PaymentSelect = {
      paymentName: 'Meia Vivo Valoriza',
      amountSeats: 1,
      nameSeats: ['E 2', 'E 3'],
    };

    const obj2PaymentSelect = {
      amountSeats: 1,
      paymentName: 'Inteira',
      nameSeats: ['E 2', 'E 3'],
    };

    const paymentSelectSeats = [obj1PaymentSelect, obj2PaymentSelect];

    const seatJoinList = ['E 2', 'E 3'];

    const paymentValueInt1 = {
      isSelect: 2,
      namePayment: 'Inteira',
      nameSeat: 'E 2',
    };

    const paymentValueInt2 = {
      isSelect: 1,
      namePayment: 'Inteira',
      nameSeat: 'E 3',
    };

    const paymentValueMeia1 = {
      isSelect: 2,
      namePayment: 'Meia',
      nameSeat: 'E 2',
    };

    const paymentValueMeia2 = {
      isSelect: 2,
      namePayment: 'Meia',
      nameSeat: 'E 3',
    };

    const paymentValueMeiaBradesco1 = {
      isSelect: 2,
      namePayment: 'Meia Bradesco',
      nameSeat: 'E 2',
    };

    const paymentValueMeiaBradesco2 = {
      isSelect: 2,
      namePayment: 'Meia Bradesco',
      nameSeat: 'E 3',
    };

    const paymentValueMeiaVivoValoriza1 = {
      isSelect: 2,
      namePayment: 'Meia Vivo Valoriza',
      nameSeat: 'E 2',
    };

    const paymentValueMeiaVivoValoriza2 = {
      isSelect: 2,
      namePayment: 'Meia Vivo Valoriza',
      nameSeat: 'E 3',
    };

    const paymentValueVoucherEletrônico1 = {
      isSelect: 2,
      namePayment: 'Meia Vivo Valoriza',
      nameSeat: 'E 2',
    };

    const paymentValueVoucherEletrônico2 = {
      isSelect: 2,
      namePayment: 'Meia Vivo Valoriza',
      nameSeat: 'E 3',
    };

    const listInt: paymentValueProps[] = [];
    listInt.push(paymentValueInt1, paymentValueInt2);

    const listMeia: paymentValueProps[] = [];
    listMeia.push(paymentValueMeia1, paymentValueMeia2);

    const listMeiaBradesco: paymentValueProps[] = [];
    listMeiaBradesco.push(paymentValueMeiaBradesco1, paymentValueMeiaBradesco2);

    const listMeiaVivoValoriza: paymentValueProps[] = [];
    listMeiaVivoValoriza.push(paymentValueMeiaVivoValoriza1, paymentValueMeiaVivoValoriza2);

    const listVoucherEletrônico: paymentValueProps[] = [];
    listVoucherEletrônico.push(paymentValueVoucherEletrônico1, paymentValueVoucherEletrônico2);

    const paymentKeyValue = {
      ['Inteira']: listInt,
      ['Meia']: listMeia,
      ['Meia Bradesco']: listMeiaBradesco,
      ['Meia Vivo Valoriza']: listMeiaVivoValoriza,
      ['Voucher Eletrônico']: listVoucherEletrônico,
    };

    const handleClickSeats = jest.fn();

    render(
      <TicketTypes
        whatClicked={whatClicked}
        listFormPayment={listFormPayment}
        paymentSelectSeats={paymentSelectSeats}
        seatJoinList={seatJoinList}
        paymentKeyValue={paymentKeyValue}
        handleClickSeats={handleClickSeats}
      />
    );

    const imgUrl = screen.getByAltText('img-uol');
    expect(imgUrl).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1703514340/logo_header_hksemr.png'
    );

    const span1 = screen.getByText(
      'Assinante UOL tem isenção de taxa de serviço em até 2 ingressos por mês.'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Saiba mais');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText(
      'Agora escolha os tipos de ingresso para os assentos selecionados:'
    );
    expect(span3).toBeInTheDocument();

    listFormPayment.forEach((pay) => {
      const span4 = screen.getByText(pay.formName);
      expect(span4).toBeInTheDocument();

      const span5 = screen.getByText(`R$ ${pay.price}`);
      expect(span5).toBeInTheDocument();

      const isPaymentValid = paymentSelectSeats.some(
        (el) => el.paymentName === pay.formName && el.amountSeats > 0
      );

      if (isPaymentValid) {
        const span6 = screen.getByText(
          `Ingresso R$ ${(pay.priceNumber - 5.56).toFixed(
            2
          )} + Taxa de serviço R$ 5,56 + Direito Autoral R$ 0,27`
        );
        expect(span6).toBeInTheDocument();
      }
    });

    seatJoinList.forEach((seat) => {
      const span7 = screen.queryAllByText(seat.replace(/\s/g, ''));
      expect(span7).toHaveLength(5);
    });

    expect.assertions(18);
  });
});
