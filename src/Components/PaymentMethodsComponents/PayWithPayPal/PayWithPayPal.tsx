import SvgPayPal from '../SvgPayPal/SvgPayPal';
import * as Styled from './styled';

const PayWithPayPal = () => {
  return (
    <Styled.ContainerPayPalPart>
      <Styled.ContainerSvgPayPal>
        <SvgPayPal />
      </Styled.ContainerSvgPayPal>
      <Styled.ContainerImgPayPal>
        <Styled.Img
          src="https://ingresso-a.akamaihd.net/checkout/img/pagamento/paypal-info-checkout.svg"
          alt="img-paypal"
        />
      </Styled.ContainerImgPayPal>
    </Styled.ContainerPayPalPart>
  );
};

export default PayWithPayPal;
