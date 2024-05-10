import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreditCard from '../CardForPayMethod/CreditCardCom/CreditCard/CreditCard';
import * as Styled from './styled';
import { useState } from 'react';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import DebitCard from '../CardForPayMethod/DebitCardComponents/DebitCard/DebitCard';
import GooglePay from '../CardForPayMethod/GooglePayComponents/GooglePay/GooglePay';
import PayPal from '../CardForPayMethod/PayPalComponenets/PayPal/PayPal';
import ClubeUolSubscriber from '../ClubeUolSubscriber/ClubeUolSubscriber';
import DiscountCode from '../DiscountCode/DiscountCode';

interface MethodPaymentProps {
  whatClicked: number;
  totalValuePrice: number;
}

const MethodPayment = ({ whatClicked, totalValuePrice }: MethodPaymentProps) => {
  const [activeLabel, setActiveLabel] = useState(false);
  const [mouseEnterLabel, setMouseEnterLabel] = useState('');
  const [clickLabel, setClickLabel] = useState('');
  const [mouseEnterDebit, setMouseEnterDebit] = useState(false);

  const handleClickLabel = (value: string) => {
    setActiveLabel((prev) => !prev);

    setClickLabel((prev) => (prev.length <= 0 ? value : ''));
  };

  const handleClickLabelMain = (value: string) => {
    if (!mouseEnterDebit) {
      setActiveLabel((prev) => !prev);
      setClickLabel((prev) => (prev.length <= 0 ? value : ''));
    }
  };

  const handleMouseEnter = (value: string) => {
    setMouseEnterDebit(true);
    setMouseEnterLabel(value);
  };

  const handleMouseLeave = (value: string) => {
    setMouseEnterDebit(false);
    setMouseEnterLabel(value);
  };

  return (
    <>
      {whatClicked === 4 && (
        <Styled.ContainerPaymentForm>
          <Styled.ContainerMainPaymentMethods>
            <Styled.ContainerSvgCardPaymentMethod>
              <FontAwesomeIcon icon={faCreditCard} />
              <Styled.P>FORMAS DE PAGAMENTO</Styled.P>
            </Styled.ContainerSvgCardPaymentMethod>
          </Styled.ContainerMainPaymentMethods>
          <Styled.ContainerTypesPayment>
            <CreditCard
              clickLabel={clickLabel}
              totalValuePrice={totalValuePrice}
              activeLabel={activeLabel}
              mouseEnterLabel={mouseEnterLabel}
              handleClickLabel={handleClickLabel}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClickLabelMain={handleClickLabelMain}
            />

            <DebitCard
              clickLabel={clickLabel}
              totalValuePrice={totalValuePrice}
              activeLabel={activeLabel}
              mouseEnterLabel={mouseEnterLabel}
              handleClickLabel={handleClickLabel}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClickLabelMain={handleClickLabelMain}
            />

            <GooglePay
              clickLabel={clickLabel}
              totalValuePrice={totalValuePrice}
              activeLabel={activeLabel}
              mouseEnterLabel={mouseEnterLabel}
              handleClickLabel={handleClickLabel}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClickLabelMain={handleClickLabelMain}
            />

            <PayPal
              clickLabel={clickLabel}
              totalValuePrice={totalValuePrice}
              activeLabel={activeLabel}
              mouseEnterLabel={mouseEnterLabel}
              handleClickLabel={handleClickLabel}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClickLabelMain={handleClickLabelMain}
            />
          </Styled.ContainerTypesPayment>

          <ClubeUolSubscriber />

          <DiscountCode />
        </Styled.ContainerPaymentForm>
      )}
    </>
  );
};

export default MethodPayment;
