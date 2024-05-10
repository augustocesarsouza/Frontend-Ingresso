import { useState, useEffect } from 'react';
import ContainerSvgs from '../ContainerSvgs/ContainerSvgs';
import H1AndPComp from '../H1AndPComp/H1AndPComp';
import * as Styled from './styled';
import DataPersonalChange from '../../DataPersonalComponents/DataPersonalChange/DataPersonalChange';
import YouHaveNoRequests from '../../MyOrdersComponents/YouHaveNoRequests/YouHaveNoRequests';
import PaymentMethods from '../../PaymentMethodsComponents/PaymentMethods/PaymentMethods';

interface WelcomeUserProps {
  setDataPersonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomeUser = ({ setDataPersonClicked }: WelcomeUserProps) => {
  const [svgOrdersClicked, setSvgOrdersClicked] = useState(true);
  const [svgDataPersonal, setSvgDataPersonal] = useState(false);
  const [svgFormsOfPayment, setSvgFormsOfPayment] = useState(false);

  useEffect(() => {
    if (svgDataPersonal) {
      setDataPersonClicked(true);
    } else {
      setDataPersonClicked(false);
    }
  }, [svgDataPersonal]);

  console.log('WelcomeUser');

  return (
    <Styled.ContainerSecond>
      <Styled.ContainerInfoNav
        $svgdatapersonal={String(svgDataPersonal)}
        $svgformsofpayment={String(svgFormsOfPayment)}
      >
        <H1AndPComp />
        <ContainerSvgs
          setSvgOrdersClicked={setSvgOrdersClicked}
          setSvgDataPersonal={setSvgDataPersonal}
          setSvgFormsOfPayment={setSvgFormsOfPayment}
          svgOrdersClicked={svgOrdersClicked}
          svgDataPersonal={svgDataPersonal}
          svgFormsOfPayment={svgFormsOfPayment}
        />
      </Styled.ContainerInfoNav>
      <YouHaveNoRequests svgOrdersClicked={svgOrdersClicked} />
      {svgDataPersonal && <DataPersonalChange svgDataPersonal={svgDataPersonal} />}
      {svgFormsOfPayment && <PaymentMethods svgFormsOfPayment={svgFormsOfPayment} />}
    </Styled.ContainerSecond>
  );
};

export default WelcomeUser;
