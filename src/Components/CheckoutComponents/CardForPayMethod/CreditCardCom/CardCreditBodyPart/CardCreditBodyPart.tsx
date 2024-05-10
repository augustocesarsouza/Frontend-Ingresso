import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import InputAllCardCredit from '../InputAllCardCredit/InputAllCardCredit';
import SaveCreditCardForNextPayment from '../SaveCreditCardNextPay/SaveCreditCardNextPay';
import BecauseSaveMyCard from '../BecauseSaveMyCard/BecauseSaveMyCard';
import InfoWhenBuying from '../InfoWhenBuying/InfoWhenBuying';

const CardCreditBodyPart = ({ clickLabel, setEnterMouseInformed }) => {
  const handleMouseEnterInformDate = () => {
    setEnterMouseInformed(true);
  };

  const handleMouseLeaveInformDate = () => {
    setEnterMouseInformed(false);
  };

  const [divClickNumberCard, setDivClickNumberCard] = useState('');
  const [enterOrLeaveInput, setEnterOrLeaveInput] = useState(false);

  const handleClickInformDate = () => {
    if (!enterOrLeaveInput) {
      setDivClickNumberCard('');
    }
  };

  return (
    <>
      {clickLabel === '1' && (
        <Styled.ContainerInformDate
          onMouseEnter={handleMouseEnterInformDate}
          onMouseLeave={handleMouseLeaveInformDate}
          onClick={handleClickInformDate}
        >
          <Styled.WrapperNewCard>
            <FontAwesomeIcon icon={faCreditCard} />
            <Styled.SpanNew>NOVO</Styled.SpanNew>
          </Styled.WrapperNewCard>

          <InputAllCardCredit
            divClickNumberCard={divClickNumberCard}
            setDivClickNumberCard={setDivClickNumberCard}
            setEnterOrLeaveInput={setEnterOrLeaveInput}
          />

          <SaveCreditCardForNextPayment />

          <BecauseSaveMyCard />

          <InfoWhenBuying />
        </Styled.ContainerInformDate>
      )}
    </>
  );
};

export default CardCreditBodyPart;
