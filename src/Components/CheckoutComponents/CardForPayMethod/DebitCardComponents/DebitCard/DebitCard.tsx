import CardDebitTopPart from '../CardDebitTopPart/CardDebitTopPart';
import * as Styled from './styled';
import { useState } from 'react';
import InputAllCardDebit from '../InputAllCardDebit/InputAllCardDebit';
import InfoDebitCardWarning from '../InfoDebitCardWarning/InfoDebitCardWarning';
import WhatCvv from '../WhatCvv/WhatCvv';

interface DebitCardProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
  handleClickLabelMain: (value: string) => void;
}

const DebitCard = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
  handleClickLabelMain,
}: DebitCardProps) => {
  const [enterMouseInformed, setEnterMouseInformed] = useState(false);

  const [divClickNumberCard, setDivClickNumberCard] = useState('');
  const [enterOrLeaveInput, setEnterOrLeaveInput] = useState(false);

  const handleClickInformDate = () => {
    if (!enterOrLeaveInput) {
      setDivClickNumberCard('');
    }
  };

  const handleMouseEnterInformDate = () => {
    setEnterMouseInformed(true);
  };

  const handleMouseLeaveInformDate = () => {
    setEnterMouseInformed(false);
  };

  return (
    <Styled.WrapperCreditCard
      $creditcard="2"
      $clicklabel={clickLabel}
      $entermouseinformed={enterMouseInformed}
      onClick={() => {
        if (!enterMouseInformed) {
          handleClickLabelMain('2');
        }
      }}
    >
      <CardDebitTopPart
        clickLabel={clickLabel}
        totalValuePrice={totalValuePrice}
        activeLabel={activeLabel}
        mouseEnterLabel={mouseEnterLabel}
        handleClickLabel={handleClickLabel}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      {clickLabel === '2' && (
        <Styled.ContainerMainInfoDebitCard
          onMouseEnter={handleMouseEnterInformDate}
          onMouseLeave={handleMouseLeaveInformDate}
          onClick={handleClickInformDate}
        >
          <InfoDebitCardWarning />

          <InputAllCardDebit
            divClickNumberCard={divClickNumberCard}
            setDivClickNumberCard={setDivClickNumberCard}
            setEnterOrLeaveInput={setEnterOrLeaveInput}
          />

          <WhatCvv />
        </Styled.ContainerMainInfoDebitCard>
      )}
    </Styled.WrapperCreditCard>
  );
};

export default DebitCard;
