import PayPalTopPart from '../PayPalTopPart/PayPalTopPart';
import * as Styled from './styled';
import { useState } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalBodyPart from '../PayPalBodyPart/PayPalBodyPart';

interface PayPalProps {
  clickLabel: string;
  totalValuePrice: number;
  activeLabel: boolean;
  mouseEnterLabel: string;
  handleClickLabel: (value: string) => void;
  handleMouseEnter: (value: string) => void;
  handleMouseLeave: (value: string) => void;
  handleClickLabelMain: (value: string) => void;
}

const PayPal = ({
  clickLabel,
  totalValuePrice,
  activeLabel,
  mouseEnterLabel,
  handleClickLabel,
  handleMouseEnter,
  handleMouseLeave,
  handleClickLabelMain,
}: PayPalProps) => {
  const [enterMouseInformed, setEnterMouseInformed] = useState(false);

  const initialOptions = {
    clientId: 'ATviEbA6dGabvIqyTLOn9dwgl3YMhoaeQKuiq43BTyTBB7SVl6PU3zukI8660-fDU6AKV8gPHKbhwmQW',
    currency: 'USD',
    intent: 'capture',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Styled.WrapperCreditCard
        $creditcard="4"
        $clicklabel={clickLabel}
        $entermouseinformed={enterMouseInformed}
        onClick={() => {
          if (!enterMouseInformed) {
            handleClickLabelMain('4');
          }
        }}
      >
        <PayPalTopPart
          clickLabel={clickLabel}
          totalValuePrice={totalValuePrice}
          activeLabel={activeLabel}
          mouseEnterLabel={mouseEnterLabel}
          handleClickLabel={handleClickLabel}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />

        <PayPalBodyPart
          clickLabel={clickLabel}
          activeLabel={activeLabel}
          setEnterMouseInformed={setEnterMouseInformed}
        />
      </Styled.WrapperCreditCard>
    </PayPalScriptProvider>
  );
};

export default PayPal;
