import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect } from 'react';

interface PayPalBodyPartProps {
  clickLabel: string;
  activeLabel: boolean;
  setEnterMouseInformed: React.Dispatch<React.SetStateAction<boolean>>;
}

const PayPalBodyPart = ({
  clickLabel,
  activeLabel,
  setEnterMouseInformed,
}: PayPalBodyPartProps) => {
  useEffect(() => {
    if (clickLabel === '4') {
      setTimeout(() => {
        const buttonPayPal = document.querySelector('.paypal-buttons') as HTMLDivElement;
        buttonPayPal.style.height = '0px';
      }, 50);
    }
  }, [activeLabel, clickLabel]);

  const handleMouseEnterInformDate = () => {
    setEnterMouseInformed(true);
  };

  const handleMouseLeaveInformDate = () => {
    setEnterMouseInformed(false);
  };

  return (
    <Styled.WrapperBodyPart
      onMouseEnter={handleMouseEnterInformDate}
      onMouseLeave={handleMouseLeaveInformDate}
      $clicklabel={clickLabel}
    >
      <Styled.WrapperImgDigitalWallet>
        <Styled.ImgDigitalWallet
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704814143/Captura_de_tela_2024-01-09_112811_j0vbat.png"
          alt="digital-wallet"
        />
      </Styled.WrapperImgDigitalWallet>

      <Styled.WrapperWarningAndSvg>
        <Styled.WrapperSvg>
          <FontAwesomeIcon icon={faExclamation} className="svg-exclamation" />
        </Styled.WrapperSvg>
        <Styled.Span $span="1">
          A retirada de ingressos pelos terminais de{' '}
          <Styled.Span $span="2">autoatendimento não está disponível</Styled.Span> para compras
          pagas com PayPal. Verifique as formas de retirada disponíveis no final da compra.
        </Styled.Span>
      </Styled.WrapperWarningAndSvg>
      <Styled.WrapperButtonPayPal>
        <Styled.Span $span="3">Clique no botão PayPal para pagar:</Styled.Span>

        <PayPalButtons />
      </Styled.WrapperButtonPayPal>
    </Styled.WrapperBodyPart>
  );
};

export default PayPalBodyPart;
