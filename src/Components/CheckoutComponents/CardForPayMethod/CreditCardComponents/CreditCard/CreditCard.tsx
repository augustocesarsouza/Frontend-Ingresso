import * as Styled from './styled';
import { useState } from 'react';
import CardCreditTopPart from '../CardCreditTopPart/CardCreditTopPart';
import CardCreditBodyPart from '../CardCreditBodyPart/CardCreditBodyPart';

interface CreditCardProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabelMain: (value: string) => void;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
}

const CreditCard = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabelMain,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
}: CreditCardProps) => {
  const [enterMouseInformed, setEnterMouseInformed] = useState(false);

  return (
    <Styled.WrapperCreditCard
      $creditcard="1"
      $clicklabel={clickLabel}
      $entermouseinformed={enterMouseInformed}
      onClick={() => {
        if (!enterMouseInformed) {
          handleClickLabelMain('1');
        }
      }}
    >
      <CardCreditTopPart
        clickLabel={clickLabel}
        totalValuePrice={totalValuePrice}
        activeLabel={activeLabel}
        mouseEnterLabel={mouseEnterLabel}
        handleClickLabel={handleClickLabel}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <CardCreditBodyPart clickLabel={clickLabel} setEnterMouseInformed={setEnterMouseInformed} />
    </Styled.WrapperCreditCard>
  );
};

export default CreditCard;
