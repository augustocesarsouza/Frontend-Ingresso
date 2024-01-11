import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalCancelGooglePayProps {
  cancelGooglePay: boolean;
  handleExitChoosePayment: () => void;
}

const ModalCancelGooglePay = ({
  cancelGooglePay,
  handleExitChoosePayment,
}: ModalCancelGooglePayProps) => {
  return (
    <>
      {cancelGooglePay && (
        <Styled.WrapperOpsGooglePay>
          <Styled.ContainerAlert>
            <Styled.WrapperSvgExit onClick={handleExitChoosePayment}>
              <FontAwesomeIcon icon={faXmark} className="svg-exit" />
            </Styled.WrapperSvgExit>
            <Styled.WrapperSvgWarning>
              <FontAwesomeIcon icon={faCircleExclamation} className="svg-warning" />
            </Styled.WrapperSvgWarning>
            <Styled.WrapperPAlertAndSpanAlert>
              <Styled.PAlert>Ops!</Styled.PAlert>
              <Styled.SpanAlert>Pagamento com Google Pay cancelado.</Styled.SpanAlert>
            </Styled.WrapperPAlertAndSpanAlert>

            <Styled.ButtonContinue onClick={handleExitChoosePayment}>
              CONTINUAR
            </Styled.ButtonContinue>
          </Styled.ContainerAlert>
        </Styled.WrapperOpsGooglePay>
      )}
    </>
  );
};

export default ModalCancelGooglePay;
