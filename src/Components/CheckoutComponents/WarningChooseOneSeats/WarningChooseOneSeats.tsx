import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

interface WarningChooseOneSeatsProps {
  chooseOneSeats: boolean;
  handleExitChooseSeats: () => void;
}

const WarningChooseOneSeats = ({
  chooseOneSeats,
  handleExitChooseSeats,
}: WarningChooseOneSeatsProps) => {
  return (
    <>
      {chooseOneSeats && (
        <Styled.WrapperMandatoryToChoose>
          <Styled.ContainerAlert>
            <Styled.WrapperSvgExit onClick={handleExitChooseSeats}>
              <FontAwesomeIcon icon={faXmark} />
            </Styled.WrapperSvgExit>
            <Styled.WrapperSvgWarning>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </Styled.WrapperSvgWarning>
            <Styled.WrapperPAlertAndSpanAlert>
              <Styled.PAlert>Ops!</Styled.PAlert>
              <Styled.SpanAlert>Escolha ao menos 1 assento na sessão selecionada.</Styled.SpanAlert>
            </Styled.WrapperPAlertAndSpanAlert>

            <Styled.ButtonContinue onClick={handleExitChooseSeats}>CONTINUAR</Styled.ButtonContinue>
          </Styled.ContainerAlert>
        </Styled.WrapperMandatoryToChoose>
      )}
    </>
  );
};

export default WarningChooseOneSeats;
