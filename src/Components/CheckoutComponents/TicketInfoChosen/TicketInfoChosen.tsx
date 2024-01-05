import TicketSvg from '../../../Svg/TicketSvg';
import { listFormPayment, paymentSelectSeatsProps } from '../../../Templates/Checkout/Checkout';
import * as Styled from './styled';
import { useEffect, useState } from 'react';

interface TicketInfoChosenProps {
  paymentSelectSeats: paymentSelectSeatsProps[];
  listFormPayment: listFormPayment[];
}

const TicketInfoChosen = ({ paymentSelectSeats, listFormPayment }: TicketInfoChosenProps) => {
  const [existOne, setExistOne] = useState(false);

  useEffect(() => {
    const result = paymentSelectSeats.some((el) => el.amountSeats === 1);

    setExistOne(result);
  }, [paymentSelectSeats]);

  return (
    <Styled.ContainerTickedMain $lengthpayment={paymentSelectSeats}>
      <Styled.ContainerTicketsSvg>
        <TicketSvg />
        <Styled.SpanSummary $span="2">INGRESSOS</Styled.SpanSummary>
      </Styled.ContainerTicketsSvg>
      <Styled.ContainerTickets $existone={String(existOne)}>
        {paymentSelectSeats.length > 0 &&
          paymentSelectSeats.map(
            (el, i) =>
              el.amountSeats > 0 && (
                <Styled.ContainerGlobal key={i}>
                  {listFormPayment.map((pri, index) => (
                    <div key={index}>
                      {pri.formName === el.paymentName && (
                        <Styled.ContainerInfoTickedPrice>
                          <Styled.ContainerHowManyTimes>
                            <Styled.SpanTicked $span="1">{`${el.amountSeats}x`}</Styled.SpanTicked>
                          </Styled.ContainerHowManyTimes>
                          <Styled.ContainerInfoMoreAndPriceTotal>
                            <Styled.ContainerMoreInfoPrice>
                              <Styled.SpanTicked $span="2">{el.paymentName}</Styled.SpanTicked>
                              <Styled.SpanTicked $span="3">{`Ingresso R$ ${(
                                pri.priceNumber - 5.56
                              ).toFixed(2)} + Taxa R$ 5,56`}</Styled.SpanTicked>
                            </Styled.ContainerMoreInfoPrice>
                            <Styled.SpanTicked $span="4">{`R$ ${
                              el.amountSeats * pri.priceNumber
                            }`}</Styled.SpanTicked>
                          </Styled.ContainerInfoMoreAndPriceTotal>
                        </Styled.ContainerInfoTickedPrice>
                      )}
                    </div>
                  ))}
                </Styled.ContainerGlobal>
              )
          )}
      </Styled.ContainerTickets>
    </Styled.ContainerTickedMain>
  );
};

export default TicketInfoChosen;
