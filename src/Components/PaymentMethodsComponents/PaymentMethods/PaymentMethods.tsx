import * as Styled from './styled';
import CardCreditAndDebit from '../CardCreditAndDebit/CardCreditAndDebit';
import PayWithCaixa from '../PayWithCaixa/PayWithCaixa';
import PayWithPayPal from '../PayWithPayPal/PayWithPayPal';

interface PaymentMethodsProps {
  svgFormsOfPayment: boolean;
}

const PaymentMethods = ({ svgFormsOfPayment }: PaymentMethodsProps) => {
  return (
    <Styled.ContainerMain $svgformsofpayment={String(svgFormsOfPayment)}>
      <CardCreditAndDebit />
      <PayWithCaixa />
      <PayWithPayPal />
    </Styled.ContainerMain>
  );
};

export default PaymentMethods;
