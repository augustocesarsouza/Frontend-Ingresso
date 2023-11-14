import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

interface InputWarningProps {
  Children: string;
  enableWarning: boolean;
}

const InputWarning = ({ Children, enableWarning }: InputWarningProps) => {
  return (
    <>
      {!enableWarning && (
        <Styled.ContainerInvalidSpan>
          <FontAwesomeIcon icon={faCaretUp} />
          <Styled.Span>{Children}</Styled.Span>
        </Styled.ContainerInvalidSpan>
      )}
    </>
  );
};

export default InputWarning;
