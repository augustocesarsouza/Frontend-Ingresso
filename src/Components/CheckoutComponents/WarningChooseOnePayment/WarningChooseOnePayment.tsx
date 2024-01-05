import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

interface WarningChooseOnePaymentProps {
  chooseOnePayment: boolean;
  handleExitChoosePayment: () => void;
}

const WarningChooseOnePayment = ({
  chooseOnePayment,
  handleExitChoosePayment,
}: WarningChooseOnePaymentProps) => {
  return (
    <>
      {chooseOnePayment && (
        <Styled.WrapperMandatoryToChoose>
          <Styled.ContainerAlert>
            <Styled.WrapperSvgExit onClick={handleExitChoosePayment}>
              <FontAwesomeIcon icon={faXmark} />
            </Styled.WrapperSvgExit>
            <Styled.WrapperSvgWarning>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </Styled.WrapperSvgWarning>
            <Styled.WrapperPAlertAndSpanAlert>
              <Styled.PAlert>Ops!</Styled.PAlert>
              <Styled.SpanAlert>
                Escolha os Tipos de Ingresso para todos os assentos selecionados no Mapa de
                Assentos. Caso queira remover assentos, volte ao passo anterior.
              </Styled.SpanAlert>
            </Styled.WrapperPAlertAndSpanAlert>

            <Styled.ButtonContinue onClick={handleExitChoosePayment}>
              CONTINUAR
            </Styled.ButtonContinue>
          </Styled.ContainerAlert>
        </Styled.WrapperMandatoryToChoose>
      )}
    </>
  );
};

export default WarningChooseOnePayment;
