import GooglePayButtonCompo from '../GooglePayButtonCompo/GooglePayButtonCompo';
import * as Styled from './styled';
import { useRef, useState } from 'react';
import ModalCancelGooglePay from '../ModalCancelGooglePay/ModalCancelGooglePay';

interface GooglePayBodyPartProps {
  clickLabel: string;
  setEnterMouseInformed: React.Dispatch<React.SetStateAction<boolean>>;
}

const GooglePayBodyPart = ({ clickLabel, setEnterMouseInformed }: GooglePayBodyPartProps) => {
  const googlePayButtonRef = useRef(null);

  const handleCustomButtonClick = () => {
    // Trigger the click event on the Google Pay button
    // console.log(googlePayButtonRef.current.elementRef.current.firstElementChild.firstElementChild);

    googlePayButtonRef.current.elementRef.current.firstElementChild.firstElementChild.click();
  };

  const [cancelGooglePay, setCancelGooglePay] = useState(false);

  const handleCancel = () => {
    setTimeout(() => {
      setCancelGooglePay(true);
      setEnterMouseInformed(true);
      document.body.style.overflow = 'hidden';
    }, 200);
  };

  const handleExitChoosePayment = () => {
    setCancelGooglePay(false);
    document.body.style.overflow = 'auto';
  };

  const handleMouseEnterInformDate = () => {
    setEnterMouseInformed(true);
  };

  const handleMouseLeaveInformDate = () => {
    setEnterMouseInformed(false);
  };

  return (
    <>
      {clickLabel === '3' && (
        <Styled.WrapperInfoAbove
          onMouseEnter={handleMouseEnterInformDate}
          onMouseLeave={handleMouseLeaveInformDate}
        >
          <Styled.Span $span="7">
            Com o Google Pay é muito rápido e fácil de pagar. Ele reúne tudo que você precisa para
            finalizar sua compra, com as mesmas vantagens e benefícios de seus cartões físicos. E
            sua informação fica protegida em uma das infraestruturas de segurança mais avançadas do
            mundo.
          </Styled.Span>
          <Styled.WrapperLink>
            <Styled.Link>Saiba mais como usar Débito</Styled.Link>
          </Styled.WrapperLink>
          <Styled.Span $span="8">Prossiga clicando no botão Google Pay.</Styled.Span>
          <Styled.ContainerPayMain>
            <Styled.WrapperPay>
              <Styled.Button onClick={handleCustomButtonClick}></Styled.Button>
              <GooglePayButtonCompo
                googlePayButtonRef={googlePayButtonRef}
                handleCancel={handleCancel}
              />
            </Styled.WrapperPay>
          </Styled.ContainerPayMain>
        </Styled.WrapperInfoAbove>
      )}

      <ModalCancelGooglePay
        cancelGooglePay={cancelGooglePay}
        handleExitChoosePayment={handleExitChoosePayment}
      />
    </>
  );
};

export default GooglePayBodyPart;
