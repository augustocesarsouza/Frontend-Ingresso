import { useState } from 'react';
import * as Styled from './styled';
import GooglePayTopPart from '../GooglePayTopPart/GooglePayTopPart';
import GooglePayBodyPart from '../GooglePayBodyPart/GooglePayBodyPart';

interface GooglePayProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
  handleClickLabelMain: (value: string) => void;
}

const GooglePay = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
  handleClickLabelMain,
}: GooglePayProps) => {
  const [enterMouseInformed, setEnterMouseInformed] = useState(false);
  return (
    <Styled.WrapperCreditCard
      $creditcard="3"
      $clicklabel={clickLabel}
      $entermouseinformed={enterMouseInformed}
      onClick={() => {
        if (!enterMouseInformed) {
          handleClickLabelMain('3');
        }
      }}
    >
      <GooglePayTopPart
        clickLabel={clickLabel}
        totalValuePrice={totalValuePrice}
        activeLabel={activeLabel}
        mouseEnterLabel={mouseEnterLabel}
        handleClickLabel={handleClickLabel}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <GooglePayBodyPart clickLabel={clickLabel} setEnterMouseInformed={setEnterMouseInformed} />
    </Styled.WrapperCreditCard>
  );
};

export default GooglePay;
