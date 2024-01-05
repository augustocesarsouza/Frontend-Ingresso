import DolarCashSvg from '../../../Svg/DolarCashSvg';
import {
  listFormPayment,
  listProductsProps,
  paymentSelectSeatsProps,
} from '../../../Templates/Checkout/Checkout';
import ProductsInfoChosen from '../ProductsInfoChosen/ProductsInfoChosen';
import TicketInfoChosen from '../TicketInfoChosen/TicketInfoChosen';
import * as Styled from './styled';

interface SummaryOfTheOrderProps {
  paymentSelectSeats: paymentSelectSeatsProps[];
  listFormPayment: listFormPayment[];
  listProducts: listProductsProps[];
  totalTickets: number;
}

const SummaryOfTheOrder = ({
  paymentSelectSeats,
  listFormPayment,
  listProducts,
  totalTickets,
}: SummaryOfTheOrderProps) => {
  return (
    <Styled.ContainerOrderSummary>
      <Styled.ContainerSummary>
        <Styled.SpanSummary $span="1">RESUMO DO PEDIDO</Styled.SpanSummary>
      </Styled.ContainerSummary>

      <TicketInfoChosen paymentSelectSeats={paymentSelectSeats} listFormPayment={listFormPayment} />

      <ProductsInfoChosen listProducts={listProducts} />

      <Styled.ContainerFullPayment>
        <Styled.ContainerTotalRate>
          <Styled.SpanTotalRate>Total Taxa:</Styled.SpanTotalRate>
          <Styled.SpanTotalRate>R$ 0,00</Styled.SpanTotalRate>
        </Styled.ContainerTotalRate>
        <Styled.ContainerTotal>
          <Styled.ContainerSvgMoneyTotal>
            <DolarCashSvg />
            <Styled.SpanTotal>Total:</Styled.SpanTotal>
          </Styled.ContainerSvgMoneyTotal>
          <Styled.SpanTotal>{totalTickets > 0 ? `R$ ${totalTickets}` : 'R$ 0,00'}</Styled.SpanTotal>
        </Styled.ContainerTotal>
      </Styled.ContainerFullPayment>
    </Styled.ContainerOrderSummary>
  );
};

export default SummaryOfTheOrder;
